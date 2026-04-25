import { PhoneCall, ArrowUp } from "lucide-react";

export default function Footer() {
  const up = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <style>{`
        .footer-top-inner {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        .footer-links-row {
          display: flex;
          gap: 2.5rem;
          flex-wrap: wrap;
        }
        .footer-bottom-row {
          border-top: 1px solid var(--border);
          padding-top: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.55rem;
        }
        .footer-btn {
          display: inline-flex; align-items: center; gap: 0.4rem;
          background: var(--accent); color: #fff;
          font-family: var(--font-sans); font-weight: 600; font-size: 0.8rem;
          padding: 0.65rem 1.3rem; border-radius: 100px; border: none;
          cursor: pointer; text-decoration: none; white-space: nowrap;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .footer-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(128,168,255,0.4); }

        @media (max-width: 640px) {
          .footer-top-inner  { flex-direction: column !important; }
          .footer-links-row  { flex-direction: column !important; gap: 1.25rem !important; }
          .footer-bottom-row { flex-direction: column !important; align-items: flex-start !important; }
        }
      `}</style>

      <footer style={{
        background: "var(--bg-2)",
        borderTop: "1px solid var(--border)",
        padding: "2.75rem 1.5rem",
        fontFamily: "var(--font-sans)",
      }}>
        <div style={{ maxWidth: "1040px", margin: "0 auto" }}>
          <div className="footer-top-inner">

            {/* Brand */}
            <div>
              <div style={{ fontSize: "0.92rem", fontWeight: 700, marginBottom: "0.5rem", color: "var(--text)" }}>
                Launch<span style={{ color: "var(--accent)" }}>Backend</span>
              </div>
              <p style={{ color: "var(--text-muted)", fontSize: "0.76rem", maxWidth: "230px", lineHeight: 1.65 }}>
                Email marketing for e-commerce brands that want predictable, compounding revenue.
              </p>
            </div>

            {/* Links */}
            <div className="footer-links-row">
              {[
                {
                  heading: "Company",
                  links: [
                    { label: "About",     href: "/about" },
                    { label: "Portfolio", href: "/portfolio" },
                    { label: "Contact",   href: "/contact" },
                  ],
                },
                {
                  heading: "Legal",
                  links: [
                    { label: "Privacy Policy",   href: "/privacy-policy" },
                    { label: "Terms of Service", href: "/terms-of-service" },
                    { label: "Cookie Policy",    href: "/cookie-policy" },
                  ],
                },
              ].map(({ heading, links }) => (
                <div key={heading}>
                  <div style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "0.72rem" }}>
                    {heading}
                  </div>
                  {links.map(({ label, href }) => (
                    <a
                      key={label}
                      href={href}
                      style={{ display: "block", color: "var(--text-muted)", fontSize: "0.73rem", textDecoration: "none", marginBottom: "0.35rem", transition: "color 0.2s" }}
                      onMouseEnter={e => e.target.style.color = "var(--text)"}
                      onMouseLeave={e => e.target.style.color = "var(--text-muted)"}
                    >
                      {label}
                    </a>
                  ))}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div>
              <div style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "0.72rem" }}>
                Get Started
              </div>
              <a href="https://calendly.com/kinzaqasim789/strategy-call-60-min" className="footer-btn">
                <PhoneCall size={12} /> Book a Call
              </a>
              <div style={{ fontSize: "0.68rem", color: "var(--text-muted)", marginTop: "0.38rem" }}>
                Free. No commitment.
              </div>
            </div>

          </div>

          {/* Bottom row */}
          <div className="footer-bottom-row">
            <span style={{ color: "var(--text-muted)", fontSize: "0.68rem" }}>
              © 2026 LaunchBackend. All rights reserved.
            </span>
            <div style={{ color: "var(--text-muted)", fontSize: "0.68rem" }}>
              Created by Masooma Qasim
            </div>
            <button
              onClick={up}
              style={{ width: "28px", height: "28px", borderRadius: "50%", background: "var(--bg-3)", border: "1px solid var(--border)", color: "var(--text-muted)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-muted)"; }}
            >
              <ArrowUp size={12} />
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}