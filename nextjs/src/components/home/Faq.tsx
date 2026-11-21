import { FAQS } from "@/data/home";
import { AnimatedDetails } from "@/components/fx/AnimatedDetails";

export function PlusIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function Faq() {
  return (
    <section className="section" id="faqs">
      <div className="wrap">
        <div className="faq">
          <div className="section-head">
            <h2 className="h2">Questions before you invest</h2>
            <p className="lead">Short answers. Each offering&apos;s Form C has the full terms.</p>
          </div>
          <div>
            {FAQS.map((f) => (
              <AnimatedDetails
                key={f.q}
                summary={
                  <>
                    {f.q}
                    <PlusIcon />
                  </>
                }
              >
                <p>{f.a}</p>
              </AnimatedDetails>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
