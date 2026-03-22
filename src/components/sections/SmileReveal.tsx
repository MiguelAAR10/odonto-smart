import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { finalCta } from "@/data/content";

export function SmileReveal() {
  return (
    <section className="bg-noise-dark relative overflow-hidden py-24" style={{ background: "#0a0f1a" }}>
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle at 18% 25%, rgba(65,212,203,0.14), transparent 24%), radial-gradient(circle at 82% 68%, rgba(222,27,206,0.12), transparent 22%)",
        }}
      />

      <Container>
        <div className="relative mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-white/[0.04] px-6 py-12 text-center shadow-[0_24px_70px_rgba(0,0,0,0.24)] backdrop-blur-md md:px-10">
          <h2
            className="mx-auto max-w-[12ch] text-4xl font-semibold leading-[0.98] text-white md:text-5xl"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.035em" }}
          >
            {finalCta.title}
          </h2>

          <div className="mt-8 flex justify-center">
            <Link
              href={finalCta.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#de1bce_0%,#41d4cb_100%)] px-7 py-3 text-[15px] font-semibold text-white shadow-[0_16px_36px_rgba(8,12,24,0.3)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              {finalCta.cta.label}
            </Link>
          </div>

          <p className="mt-4 text-sm text-white/62 md:text-[15px]">{finalCta.micro}</p>
        </div>
      </Container>
    </section>
  );
}
