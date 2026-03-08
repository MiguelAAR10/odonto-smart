import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Style Guide | Odonto Smart",
  description: "Guía de estilos y componentes para experimentación",
};

const colors = {
  brand: [
    { name: "brand-teal", value: "#4EB1AC", css: "bg-brand-teal" },
    { name: "brand-purple", value: "#8E44AD", css: "bg-brand-purple" },
    { name: "brand-teal-soft", value: "rgba(78,177,172,0.1)", css: "bg-brand-teal-soft" },
    { name: "brand-purple-soft", value: "rgba(142,68,173,0.1)", css: "bg-brand-purple-soft" },
  ],
  backgrounds: [
    { name: "bg-page", value: "#F6F7F7", css: "bg-bg-page" },
    { name: "bg-main", value: "#FFFFFF", css: "bg-bg-main" },
    { name: "bg-soft", value: "#F8FAFC", css: "bg-bg-soft" },
    { name: "footer-bg", value: "#0F172A", css: "bg-footer-bg" },
  ],
  text: [
    { name: "text-dark", value: "#0F172A", css: "text-text-dark" },
    { name: "text-muted", value: "#475569", css: "text-text-muted" },
    { name: "text-light", value: "#94A3B8", css: "text-text-light" },
  ],
  utility: [
    { name: "border-subtle", value: "#E2E8F0", css: "border-border-subtle" },
    { name: "hero-overlay", value: "rgba(0,0,0,0.85)", css: "bg-hero-overlay" },
  ],
};

const typography = [
  { size: "60px", weight: "900", label: "Display XL", sample: "Sonrisa" },
  { size: "40px", weight: "900", label: "Display", sample: "Tecnología" },
  { size: "30px", weight: "700", label: "Heading 1", sample: "Nuestro Equipo" },
  { size: "24px", weight: "700", label: "Heading 2", sample: "Scanner Intraoral" },
  { size: "20px", weight: "700", label: "Heading 3", sample: "Dra. María López" },
  { size: "18px", weight: "400", label: "Body Large", sample: "Profesionales comprometidos con la excelencia." },
  { size: "16px", weight: "400", label: "Body", sample: "Calidad y experiencia boutique para transformar tu sonrisa." },
  { size: "15px", weight: "400", label: "Body Small", sample: "Tecnología líder en escaneo digital 3D." },
  { size: "14px", weight: "700", label: "Label", sample: "EXCELENCIA" },
];

export default function StyleGuidePage() {
  return (
    <main className="min-h-screen bg-bg-page py-12">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <header className="mb-16 border-b border-border-subtle pb-8">
          <h1 className="text-4xl font-black text-text-dark">
            Odonto Smart — Style Guide
          </h1>
          <p className="mt-2 text-lg text-text-muted">
            V1 Stitch Final • Base para experimentación
          </p>
          <div className="mt-4 flex gap-2">
            <span className="rounded bg-brand-teal px-3 py-1 text-sm font-semibold text-white">
              Inter Only
            </span>
            <span className="rounded bg-brand-purple px-3 py-1 text-sm font-semibold text-white">
              Min 14px
            </span>
            <span className="rounded bg-text-dark px-3 py-1 text-sm font-semibold text-white">
              Health-Tech
            </span>
          </div>
        </header>

        {/* Colors Section */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-text-dark">Colores</h2>

          {/* Brand Colors */}
          <div className="mb-8">
            <h3 className="mb-4 text-lg font-semibold text-text-muted">Brand</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {colors.brand.map((color) => (
                <div key={color.name} className="overflow-hidden rounded-lg border border-border-subtle bg-bg-main">
                  <div className={`h-24 ${color.css}`} />
                  <div className="p-4">
                    <p className="font-semibold text-text-dark">{color.name}</p>
                    <p className="font-mono text-sm text-text-muted">{color.value}</p>
                    <p className="mt-1 font-mono text-xs text-text-light">{color.css}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Background Colors */}
          <div className="mb-8">
            <h3 className="mb-4 text-lg font-semibold text-text-muted">Backgrounds</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {colors.backgrounds.map((color) => (
                <div key={color.name} className="overflow-hidden rounded-lg border border-border-subtle bg-bg-main">
                  <div className={`h-24 ${color.css}`} />
                  <div className="p-4">
                    <p className="font-semibold text-text-dark">{color.name}</p>
                    <p className="font-mono text-sm text-text-muted">{color.value}</p>
                    <p className="mt-1 font-mono text-xs text-text-light">{color.css}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Text Colors */}
          <div className="mb-8">
            <h3 className="mb-4 text-lg font-semibold text-text-muted">Text</h3>
            <div className="grid gap-4 sm:grid-cols-3">
              {colors.text.map((color) => (
                <div key={color.name} className="overflow-hidden rounded-lg border border-border-subtle bg-bg-main p-6">
                  <p className={`text-2xl font-bold ${color.css}`}>Aa</p>
                  <p className="mt-2 font-semibold text-text-dark">{color.name}</p>
                  <p className="font-mono text-sm text-text-muted">{color.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Typography Section */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-text-dark">Tipografía</h2>
          <p className="mb-8 text-text-muted">
            Font family: <span className="font-semibold">Inter</span> •
            Escala permitida: 14, 15, 16, 18, 20, 24, 30, 40, 60
          </p>

          <div className="space-y-6 rounded-xl border border-border-subtle bg-bg-main p-6">
            {typography.map((item) => (
              <div key={item.label} className="border-b border-border-subtle pb-6 last:border-0 last:pb-0">
                <div className="mb-2 flex items-baseline gap-4">
                  <span className="rounded bg-bg-soft px-2 py-1 font-mono text-sm text-text-muted">
                    {item.size}
                  </span>
                  <span className="rounded bg-bg-soft px-2 py-1 font-mono text-sm text-text-muted">
                    {item.weight}
                  </span>
                  <span className="text-sm font-semibold text-brand-teal">
                    {item.label}
                  </span>
                </div>
                <p
                  className="text-text-dark"
                  style={{ fontSize: item.size, fontWeight: item.weight }}
                >
                  {item.sample}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Buttons Section */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-text-dark">Botones</h2>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Primary Buttons */}
            <div className="rounded-xl border border-border-subtle bg-bg-main p-6">
              <h3 className="mb-4 text-lg font-semibold text-text-muted">Primary CTA</h3>
              <div className="flex flex-wrap gap-4">
                <button className="rounded-lg bg-brand-teal px-8 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-brand-teal/90">
                  Teal Button
                </button>
                <button className="rounded-lg bg-brand-purple px-8 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-brand-purple/90">
                  Purple Button
                </button>
              </div>
              <p className="mt-4 font-mono text-xs text-text-light">
                rounded-lg • px-8 py-3.5 • text-[15px] font-semibold
              </p>
            </div>

            {/* Pill Buttons */}
            <div className="rounded-xl border border-border-subtle bg-bg-main p-6">
              <h3 className="mb-4 text-lg font-semibold text-text-muted">Pill CTA (Navbar)</h3>
              <div className="flex flex-wrap gap-4">
                <button className="rounded-full bg-brand-teal px-6 py-2.5 text-[15px] font-semibold text-white transition-all hover:bg-brand-teal/90">
                  Reservar Cita
                </button>
                <button className="rounded-full border-2 border-brand-teal px-6 py-2.5 text-[15px] font-semibold text-brand-teal transition-all hover:bg-brand-teal hover:text-white">
                  Outline
                </button>
              </div>
              <p className="mt-4 font-mono text-xs text-text-light">
                rounded-full • px-6 py-2.5 • text-[15px] font-semibold
              </p>
            </div>
          </div>
        </section>

        {/* Cards Section */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-text-dark">Cards</h2>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Tech Card */}
            <div className="overflow-hidden rounded-2xl bg-bg-main shadow-lg">
              <div className="h-40 bg-gradient-to-br from-brand-teal/20 to-brand-purple/20" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-dark">Tech Card</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-text-muted">
                  Descripción con imagen superior y hover zoom.
                </p>
              </div>
            </div>

            {/* Stat Card Teal */}
            <div className="flex flex-col items-center rounded-2xl bg-brand-teal-soft px-8 py-10">
              <span className="text-4xl font-black text-text-dark">+20</span>
              <span className="mt-2 text-center text-xs font-bold uppercase tracking-widest text-text-muted">
                AÑOS DE EXCELENCIA
              </span>
            </div>

            {/* Stat Card Purple */}
            <div className="flex flex-col items-center rounded-2xl bg-brand-purple-soft px-8 py-10">
              <span className="text-4xl font-black text-text-dark">5000+</span>
              <span className="mt-2 text-center text-xs font-bold uppercase tracking-widest text-text-muted">
                PACIENTES FELICES
              </span>
            </div>
          </div>
        </section>

        {/* Spacing Section */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-text-dark">Espaciado</h2>

          <div className="rounded-xl border border-border-subtle bg-bg-main p-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { name: "Section Padding", value: "py-16 md:py-20" },
                { name: "Container", value: "max-w-7xl px-6" },
                { name: "Card Padding", value: "p-6" },
                { name: "Gap Grid", value: "gap-6 md:gap-8" },
              ].map((item) => (
                <div key={item.name} className="rounded-lg bg-bg-soft p-4">
                  <p className="font-semibold text-text-dark">{item.name}</p>
                  <p className="mt-1 font-mono text-sm text-brand-teal">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Motion Section */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-text-dark">Motion</h2>

          <div className="rounded-xl border border-border-subtle bg-bg-main p-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <div>
                <h3 className="mb-2 font-semibold text-text-dark">Easing Premium</h3>
                <code className="block rounded bg-bg-soft p-3 font-mono text-sm text-brand-purple">
                  cubic-bezier(0.22, 1, 0.36, 1)
                </code>
                <p className="mt-2 text-sm text-text-muted">
                  Ease-out-expo para reveals y transiciones suaves
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-text-dark">Duración</h3>
                <div className="space-y-2">
                  <p className="font-mono text-sm">
                    <span className="text-brand-teal">Quick:</span> 0.2s
                  </p>
                  <p className="font-mono text-sm">
                    <span className="text-brand-teal">Normal:</span> 0.3s
                  </p>
                  <p className="font-mono text-sm">
                    <span className="text-brand-teal">Reveal:</span> 0.6-0.8s
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border-subtle pt-8 text-center text-sm text-text-muted">
          <p>
            Odonto Smart V1 — Stitch Final • Base Point • {new Date().toLocaleDateString("es-PE")}
          </p>
        </footer>
      </div>
    </main>
  );
}
