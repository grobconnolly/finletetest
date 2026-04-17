import { FinleteLogo } from "./FinleteLogo";

const ARCHIVO = "var(--font-archivo), 'Archivo Placeholder', sans-serif";

type Metric = { label: string; value: string };

const DEFAULT: Metric[] = [
  { label: "Raised for athletes", value: "$832,899" },
  { label: "Fan investments", value: "1024" },
  { label: "Average investment", value: "$1,161" },
  { label: "Repeat investment rate", value: "23.3%" },
  { label: "Athletes", value: "13" },
  { label: "Minimum investment", value: "$300" },
];

export function MetricBand({ metrics = DEFAULT }: { metrics?: Metric[] }) {
  return (
    <section
      className="mx-auto"
      style={{ maxWidth: 1240, paddingInline: 20, paddingBlock: "32px 0" }}
    >
      <div
        className="grid items-center"
        style={{
          gridTemplateColumns: "auto repeat(6, 1fr)",
          gap: 24,
          padding: "24px 32px",
          border: "1px solid #e6e6e6",
          borderRadius: 20,
          background: "#ffffff",
          boxShadow: "0 2px 4px rgba(0,0,0,0.04)",
        }}
      >
        <div
          className="flex items-center justify-center"
          style={{
            background: "#f5f5f5",
            width: 56,
            height: 56,
            borderRadius: 999,
          }}
        >
          <FinleteLogo height={20} wordmarkColor="#111" />
        </div>
        {metrics.map((m) => (
          <div key={m.label} className="flex flex-col gap-1">
            <span
              style={{
                fontFamily: ARCHIVO,
                fontSize: 12,
                color: "#666666",
                fontWeight: 500,
              }}
            >
              {m.label}
            </span>
            <span
              style={{
                fontFamily: ARCHIVO,
                fontSize: 24,
                fontWeight: 800,
                color: "#111111",
                lineHeight: 1,
              }}
            >
              {m.value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
