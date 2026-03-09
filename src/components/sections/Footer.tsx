import { Container } from "@/components/ui/Container";
import { footer } from "@/data/content";

export function Footer() {
  return (
    <footer className="bg-footer-bg py-16 text-white">
      <Container>
        {/* Main Footer Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div>
            <h3 className="text-xl font-black italic tracking-tight">
              {footer.brand.name}
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-text-light">
              {footer.brand.description}
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-lg font-bold">{footer.services.title}</h4>
            <ul className="mt-4 space-y-3">
              {footer.services.items.map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-[15px] text-text-light transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-footer-bg"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations Column */}
          <div id="sedes">
            <h4 className="text-lg font-bold">{footer.locations.title}</h4>
            <ul className="mt-4 space-y-4">
              {footer.locations.items.map((location) => (
                <li key={location.name}>
                  <a
                    href={location.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-2 transition-colors"
                  >
                    <svg
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-teal transition-transform group-hover:scale-110"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="text-[15px] text-text-light transition-colors group-hover:text-white">
                      <span className="font-semibold">{location.name}</span>
                      <br />
                      <span className="text-sm">{location.address}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div id="contacto">
            <h4 className="text-lg font-bold">{footer.contact.title}</h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-2 text-[15px] text-text-light">
                <svg className="h-5 w-5 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {footer.contact.phone}
              </li>
              <li className="flex items-center gap-2 text-[15px] text-text-light">
                <svg className="h-5 w-5 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                {footer.contact.mobile}
              </li>
              <li className="flex items-center gap-2 text-[15px] text-text-light">
                <svg className="h-5 w-5 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {footer.contact.email}
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-white/10" />

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-text-light">{footer.copyright}</p>
          <div className="flex gap-6">
            {footer.social.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-sm text-text-light transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-footer-bg"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
