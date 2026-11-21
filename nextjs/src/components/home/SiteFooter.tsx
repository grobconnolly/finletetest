import Link from "next/link";
import { FinleteLogo } from "@/components/FinleteLogo";
import { FOOTER_COLUMNS, LINKS } from "@/data/home";
import { PlusIcon } from "./Faq";

/** `perks`: include the perk rules paragraph (offering pages list perks). */
export function SiteFooter({ perks = false }: { perks?: boolean }) {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Link className="brand" href="/" aria-label="Finlete home">
              <FinleteLogo height={28} />
            </Link>
          </div>
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.heading}>
              <h3>{col.heading}</h3>
              <ul role="list">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-legal">
          <p>
            Investing is speculative and you can lose your entire investment. Offerings are made
            under Regulation Crowdfunding through DealMaker Securities LLC, a registered
            broker-dealer and member of FINRA and SIPC. Read each offering&apos;s Form C before
            you invest.
          </p>

          <details className="disclosures">
            <summary>
              Disclosures
              <PlusIcon />
            </summary>
            <div className="body">
              <p>
                Equity crowdfunding investments in private placements, and start-up investments
                in particular, are speculative and involve a high degree of risk and those
                investors who cannot afford to lose their entire investment should not invest in
                start-ups. Companies seeking startup investment through equity crowdfunding tend
                to be in earlier stages of development and their business model, products and
                services may not yet be fully developed, operational, or tested in the public
                marketplace. There is no guarantee that the stated valuation and other terms are
                accurate or in agreement with the market or industry valuations. Further,
                investors may receive illiquid and/or restricted stock that may be subject to
                holding period requirements and/or liquidity concerns.
              </p>
              {perks && (
                <p>
                  In order to receive perks from an investment, one must submit a single
                  investment that meets the minimum perk requirement. Bonus shares from perks will
                  not be granted if an investor submits multiple investments that, when combined,
                  meet the perk requirement. Perks are expected to be issued upon the completion
                  of the Offering. Fractional shares will not be distributed and Bonus Shares will
                  be determined by rounding down to the nearest whole share.
                </p>
              )}
              <p>
                DealMaker Securities LLC, a registered broker-dealer, and member of FINRA | SIPC,
                located at 4000 Eagle Point Corporate Drive, Suite 950, Birmingham, AL 35242, is
                the Intermediary for this offering and is not an affiliate of or connected with
                the Issuer. Please check our background on FINRA&apos;s{" "}
                <a href={LINKS.brokerCheck} rel="noopener">
                  BrokerCheck
                </a>
                . DealMaker Securities LLC does not make investment recommendations. DealMaker
                Securities LLC is NOT placing or selling these securities on behalf of the
                Issuer. DealMaker Securities LLC is NOT soliciting this investment or making any
                recommendations by collecting, reviewing, and processing an Investor&apos;s
                documentation for this investment. DealMaker Securities LLC conducts Anti-Money
                Laundering, Identity, and Bad Actor Disqualification reviews of the Issuer, and
                confirms they are a registered business in good standing. DealMaker Securities
                LLC is NOT vetting or approving the information provided by the Issuer or the
                Issuer itself.
              </p>
              <p>
                Contact information is provided for Investors to make inquiries and requests to
                DealMaker Securities LLC regarding Regulation CF in general, or the status of
                such investor&apos;s submitted documentation, specifically. DealMaker Securities
                LLC may direct Investors to specific sections of the Offering Circular to locate
                information or answers to their inquiry but does not opine or provide guidance on
                issuer-related matters.
              </p>
              <p>
                This website contains forward-looking statements. These statements may include
                the words &quot;believe&quot;, &quot;expect&quot;, &quot;anticipate&quot;,
                &quot;intend&quot;, &quot;plan&quot;, &quot;estimate&quot;, &quot;project&quot;,
                &quot;will&quot;, &quot;may&quot;, &quot;targeting&quot; and similar expressions
                as well as statements other than statements of historical facts including,
                without limitation, those regarding the financial position, business strategy,
                plans, targets and objectives of the management of Finlete Funding, Inc. (the
                &quot;Company&quot;) for future operations (including development plans and
                objectives). Such forward-looking statements involve known and unknown risks,
                uncertainties and other important factors which may affect the Company&apos;s
                ability to implement and achieve the economic and monetary policies, budgetary
                plans, fiscal guidelines and other development benchmarks set out in such
                forward-looking statements and which may cause actual results, performance or
                achievements to be materially different from future results, performance or
                achievements expressed or implied by such forward-looking statements. Such
                forward-looking statements are based on numerous assumptions regarding the
                Company&apos;s present and future policies and plans and the environment in
                which the Company will operate in the future. Furthermore, certain
                forward-looking statements are based on assumptions or future events which may
                not prove to be accurate, and no reliance whatsoever should be placed on any
                forward-looking statements in this presentation. The forward-looking statements
                in this website speak only as of the date of the Company&apos;s initial Form C,
                and the Company expressly disclaims to the fullest extent permitted by law any
                obligation or undertaking to disseminate any updates or revisions to any
                forward-looking statements contained herein to reflect any change in
                expectations with regard thereto or any change in events, conditions or
                circumstances on which any such statements are based.
              </p>
            </div>
          </details>

          <div className="footer-meta">
            <span>© {year} Finlete. All rights reserved.</span>
            <div className="social">
              <a href={LINKS.x} aria-label="Finlete on X" rel="noopener">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.5 3h3.1l-6.8 7.8L21.8 21h-6.2l-4.9-6.4L5.1 21H2l7.3-8.3L1.6 3h6.4l4.4 5.8L17.5 3Zm-1.1 16.2h1.7L7 4.7H5.2l11.2 14.5Z" />
                </svg>
              </a>
              <a href={LINKS.instagram} aria-label="Finlete on Instagram" rel="noopener">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href={LINKS.facebook} aria-label="Finlete on Facebook" rel="noopener">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.6-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H8v3h2.5V21h3Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
