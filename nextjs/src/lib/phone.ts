/**
 * Phone formatting for the alerts sign-up. The person types digits; the
 * field shows them grouped the way the country writes numbers; the value
 * sent is E.164 (+16195362000).
 */
export type Country = { iso: string; name: string; code: string; flag: string; digits: number };

export const COUNTRIES: Country[] = [
  { iso: "US", name: "United States", code: "1", flag: "🇺🇸", digits: 10 },
  { iso: "CA", name: "Canada", code: "1", flag: "🇨🇦", digits: 10 },
  { iso: "MX", name: "Mexico", code: "52", flag: "🇲🇽", digits: 10 },
  { iso: "DO", name: "Dominican Republic", code: "1", flag: "🇩🇴", digits: 10 },
  { iso: "PR", name: "Puerto Rico", code: "1", flag: "🇵🇷", digits: 10 },
  { iso: "VE", name: "Venezuela", code: "58", flag: "🇻🇪", digits: 10 },
  { iso: "CO", name: "Colombia", code: "57", flag: "🇨🇴", digits: 10 },
  { iso: "PA", name: "Panama", code: "507", flag: "🇵🇦", digits: 8 },
  { iso: "CU", name: "Cuba", code: "53", flag: "🇨🇺", digits: 8 },
  { iso: "BR", name: "Brazil", code: "55", flag: "🇧🇷", digits: 11 },
  { iso: "GB", name: "United Kingdom", code: "44", flag: "🇬🇧", digits: 10 },
  { iso: "AU", name: "Australia", code: "61", flag: "🇦🇺", digits: 9 },
  { iso: "JP", name: "Japan", code: "81", flag: "🇯🇵", digits: 10 },
  { iso: "KR", name: "South Korea", code: "82", flag: "🇰🇷", digits: 10 },
  { iso: "DE", name: "Germany", code: "49", flag: "🇩🇪", digits: 11 },
  { iso: "ES", name: "Spain", code: "34", flag: "🇪🇸", digits: 9 },
];

export const DEFAULT_COUNTRY = COUNTRIES[0];

/** Keep only digits, capped at the country's national length. */
export function nationalDigits(raw: string, c: Country): string {
  return raw.replace(/\D/g, "").slice(0, c.digits);
}

/** "6195362000" → "(619) 536-2000" for the +1 countries; "619 536 2000" elsewhere. */
export function formatNational(digits: string, c: Country): string {
  const d = digits.replace(/\D/g, "");
  if (c.code === "1") {
    if (d.length <= 3) return d;
    if (d.length <= 6) return `(${d.slice(0, 3)}) ${d.slice(3)}`;
    return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6, 10)}`;
  }
  // Elsewhere: three, three, then the rest ("555 555 5555").
  if (d.length <= 3) return d;
  if (d.length <= 6) return `${d.slice(0, 3)} ${d.slice(3)}`;
  return `${d.slice(0, 3)} ${d.slice(3, 6)} ${d.slice(6)}`;
}

/** The number to store: +1 619-536-2000 → "+16195362000", or null if short. */
export function toE164(digits: string, c: Country): string | null {
  const d = digits.replace(/\D/g, "");
  if (d.length !== c.digits) return null;
  return `+${c.code}${d}`;
}

/** Example placeholder for the country, e.g. "(555) 555-5555". */
export function placeholderFor(c: Country): string {
  return formatNational("5".repeat(c.digits), c);
}
