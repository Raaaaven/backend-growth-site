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
          border-top: 1px solid rgba(255,255,255,0.12);
          padding-top: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.55rem;
        }
        .footer-btn {
          display: inline-flex; align-items: center; gap: 0.4rem;
          background: #FF2D78; color: #fff;
          font-family: var(--font); font-weight: 600; font-size: 0.8rem;
          padding: 0.65rem 1.3rem; border-radius: 100px; border: none;
          cursor: pointer; text-decoration: none; white-space: nowrap;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .footer-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(255,45,120,0.4); }
        .footer-link { display: block; color: rgba(255,255,255,0.65); font-size: 0.73rem; text-decoration: none; margin-bottom: 0.35rem; transition: color 0.2s; }
        .footer-link:hover { color: #FF2D78; }
        .footer-col-heading {
          font-size: 0.73rem;
          font-weight: 700;
          letter-spacing: 0.07em;
          text-transform: lowercase;
          color: #FF6B35;
          margin-bottom: 0.72rem;
        }

        @media (max-width: 640px) {
          .footer-top-inner  { flex-direction: column !important; }
          .footer-links-row  { flex-direction: column !important; gap: 1.25rem !important; }
          .footer-bottom-row { flex-direction: column !important; align-items: flex-start !important; }
        }
      `}</style>

      <footer style={{
        background: "#1A1020",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        padding: "2.75rem 1.5rem",
        fontFamily: "var(--font)",
        color: "#fff",
      }}>
        <div style={{ maxWidth: "1040px", margin: "0 auto" }}>
          <div className="footer-top-inner">

            {/* Brand */}
            <div>
              <a href="/" style={{ display: "inline-flex", alignItems: "center", textDecoration: "none", marginBottom: "0.85rem" }}>
                <img src="/assets/logoLB.jpg" alt="launchbackend logo" style={{ width: "50px", height: "50px", marginRight: "0.75rem" }} />
                <span style={{ fontSize: "1rem", fontWeight: 700, color: "#fff" }}>
                  launch<span style={{ color: "#FF2D78" }}>backend</span>
                </span>
              </a>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.76rem", maxWidth: "230px", lineHeight: 1.65 }}>
                email marketing for e-commerce brands that want predictable, compounding revenue.
              </p>
            </div>

            {/* Links */}
            <div className="footer-links-row">
              {[
                {
                  heading: "company",
                  links: [
                    { label: "home",          href: "/"        },
                    { label: "contact",        href: "/contact" },
                    { label: "find your leak", href: "/#audit"  },
                  ],
                },
              ].map(({ heading, links }) => (
                <div key={heading}>
                  <div className="footer-col-heading">{heading}</div>
                  {links.map(({ label, href }) => (
                    <a key={label} href={href} className="footer-link">{label}</a>
                  ))}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
              <div className="footer-col-heading">get started</div>
              <a href="https://calendly.com/kinzaqasim789/strategy-call-60-min" className="footer-btn">
                <PhoneCall size={12} /> book a call
              </a>
            </div>

          </div>

          {/* Bottom row */}
          <div className="footer-bottom-row">
            <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.68rem" }}>
              © 2026 launchbackend. all rights reserved. · Run by 
Bali Sukainah LTD, Manchester, United Kingdom
            </span>
            <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.68rem" }}>
              created by Masooma Qasim
            </div>
            <button
              onClick={up}
              style={{ width: "28px", height: "28px", borderRadius: "50%", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,45,120,0.4)", color: "#FF2D78", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#FF2D78"; e.currentTarget.style.color = "#FF2D78"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,45,120,0.4)"; e.currentTarget.style.color = "#FF2D78"; }}
            >
              <ArrowUp size={12} />
            </button>
          </div>

        </div>
      </footer>
    </>
  );
}