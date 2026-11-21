import { NextRequest, NextResponse } from "next/server";

/**
 * New-athlete alert sign-up, text or email.
 *
 * Forwards to Klaviyo's list subscription job when KLAVIYO_PRIVATE_API_KEY
 * and KLAVIYO_ALERTS_LIST_ID are set (the same account the cart's
 * abandoned-cart capture uses). Without them it answers
 * `{ ok: false, configured: false }` so the page can say alerts are not live
 * yet instead of pretending.
 */

export const runtime = "nodejs";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const E164 = /^\+[1-9]\d{7,14}$/;
const KLAVIYO_REVISION = "2024-10-15";

export async function POST(request: NextRequest) {
  let body: { channel?: unknown; contact?: unknown };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const channel = body.channel === "email" ? "email" : body.channel === "sms" ? "sms" : null;
  const contact = typeof body.contact === "string" ? body.contact.trim().slice(0, 254) : "";
  if (!channel || !contact) {
    return NextResponse.json({ ok: false, error: "Missing channel or contact" }, { status: 400 });
  }
  if (channel === "email" && !EMAIL.test(contact)) {
    return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
  }
  if (channel === "sms" && !E164.test(contact)) {
    return NextResponse.json({ ok: false, error: "Invalid phone" }, { status: 400 });
  }

  const key = process.env.KLAVIYO_PRIVATE_API_KEY?.trim();
  const listId = process.env.KLAVIYO_ALERTS_LIST_ID?.trim();
  if (!key || !listId) {
    return NextResponse.json({ ok: false, configured: false });
  }

  const attributes =
    channel === "email"
      ? {
          email: contact,
          subscriptions: { email: { marketing: { consent: "SUBSCRIBED" } } },
        }
      : {
          phone_number: contact,
          subscriptions: { sms: { marketing: { consent: "SUBSCRIBED" } } },
        };

  try {
    const res = await fetch("https://a.klaviyo.com/api/profile-subscription-bulk-create-jobs/", {
      method: "POST",
      headers: {
        Authorization: `Klaviyo-API-Key ${key}`,
        revision: KLAVIYO_REVISION,
        "content-type": "application/vnd.api+json",
        accept: "application/vnd.api+json",
      },
      body: JSON.stringify({
        data: {
          type: "profile-subscription-bulk-create-job",
          attributes: {
            custom_source: "finlete.com new-athlete alerts",
            profiles: { data: [{ type: "profile", attributes }] },
          },
          relationships: { list: { data: { type: "list", id: listId } } },
        },
      }),
    });
    if (!res.ok) {
      console.error("[subscribe] Klaviyo rejected the request", res.status);
      return NextResponse.json({ ok: false, configured: true }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[subscribe] Klaviyo request failed", error);
    return NextResponse.json({ ok: false, configured: true }, { status: 502 });
  }
}
