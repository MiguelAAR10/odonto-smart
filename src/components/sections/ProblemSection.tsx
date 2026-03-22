import { Container } from "@/components/ui/Container";
import { problemSection } from "@/data/content";

export function ProblemSection() {
  const titleLines = problemSection.title.split("\n");

  return (
    <section className="bg-bg-main py-18 md:py-22">
      <Container>
        <div className="mx-auto grid max-w-6xl gap-10 rounded-[32px] border border-border-subtle bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] px-6 py-8 shadow-[0_18px_48px_rgba(15,23,42,0.05)] md:px-10 md:py-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-purple md:text-[12px]">
              {problemSection.label}
            </p>
            <h2
              className="max-w-[13ch] text-3xl font-semibold leading-[1] text-text-dark md:text-4xl lg:text-[3rem]"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.035em" }}
            >
              {titleLines[0]}
              <br />
              <span className="text-text-dark/78">{titleLines[1]}</span>
            </h2>
          </div>

          <div className="space-y-4">
            {problemSection.points.map((point) => (
              <div
                key={point}
                className="flex items-start gap-4 rounded-2xl border border-border-subtle/80 bg-white px-5 py-4 shadow-[0_8px_20px_rgba(15,23,42,0.04)]"
              >
                <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-r from-brand-teal to-brand-purple" />
                <p className="text-[15px] leading-relaxed text-text-muted md:text-base">{point}</p>
              </div>
            ))}

            <p
              className="pt-2 text-xl font-semibold leading-snug text-text-dark md:text-2xl"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
            >
              {problemSection.closing}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
