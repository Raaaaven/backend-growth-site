import { useState, useEffect } from "react";
import { PhoneCall, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "home", href: "/" },
  { label: "contact", href: "/contact" },
  {  label: "find your leak", href: "/#audit" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');

        :root {
          --orange:        #FF6B35;
          --pink:          #FF2D78;
          --cyan:          #00C8E0;

          --accent:        #FF2D78;
          --accent-2:      #FF6B35;
          --accent-3:      #00C8E0;
          --accent-soft:   rgba(255,45,120,0.08);
          --accent-light:  rgba(255,45,120,0.10);
          --accent-border: rgba(255,45,120,0.28);

          --bg:            #FFFFFF;
          --bg-2:          #FFF6F9;
          --bg-3:          #FFF0F4;
          --text:          #1A1020;
          --text-muted:    #6B6070;
          --text-soft:     #4B4058;
          --border:        rgba(26,16,32,0.10);
          --shadow:        0 2px 20px rgba(255,45,120,0.08);
          --radius:        14px;
          --font-sans:     'DM Sans', system-ui, sans-serif;
          --font-display:  'DM Sans', system-ui, sans-serif;
        }

        .nav-desktop-links {
          display: flex;
          gap: 1.75rem;
          align-items: center;
        }

        .hamburger-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--text);
          padding: 0.25rem;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          transition: background 0.15s;
          z-index: 1100;
          position: relative;
        }
        .hamburger-btn:hover { background: rgba(255,45,120,0.08); }

        @media (max-width: 640px) {
          .nav-desktop-links { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>

      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        padding: scrolled ? "0.6rem 1.5rem" : "1rem 1.5rem",
        background: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
        boxShadow: scrolled ? "var(--shadow)" : "none",
        transition: "all 0.3s ease",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        fontFamily: "var(--font-sans)",
      }}>
        {/* Logo */}
        <a href="/" style={{ display: "inline-flex", alignItems: "center", textDecoration: "none" }}>
          <img src="/assets/logoLB.jpg" alt="LaunchBackend logo" style={{ width: "50px", height: "50px", marginRight: "0.75rem" }} />
          <span style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--text)" }}>
            launch<span style={{ color: "var(--pink)" }}>backend</span>
          </span>
        </a>

        {/* Desktop nav links */}
        <nav className="nav-desktop-links">
          {NAV_LINKS.map(item => (
            <a
              key={item.label}
              href={item.href}
              style={{
                color: "var(--text-muted)",
                fontSize: "1rem",
                fontWeight: 500,
                textDecoration: "none",
                transition: "color 0.2s"
              }}
              onMouseEnter={e => e.target.style.color = "var(--text)"}
              onMouseLeave={e => e.target.style.color = "var(--text-muted)"}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="https://calendly.com/kinzaqasim789/strategy-call-60-min"
          className="nav-desktop-links"
          style={{
            display: "inline-flex", alignItems: "center", gap: "0.4rem",
            background: "var(--pink)", color: "#fff",
            fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: "1rem",
            padding: "0.65rem 1.3rem", borderRadius: "100px", border: "none",
            cursor: "pointer", textDecoration: "none", whiteSpace: "nowrap",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(255,45,120,0.45)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
        >
          <PhoneCall size={12} /> Book a Call
        </a>

        {/* Hamburger */}
        <button
          className="hamburger-btn"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
              style={{
                position: "fixed", inset: 0, zIndex: 1001,
                background: "rgba(26,16,32,0.4)",
                backdropFilter: "blur(4px)",
              }}
            />
            <motion.div
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{
                position: "fixed", top: 0, right: 0, bottom: 0,
                width: "min(280px, 80vw)",
                background: "var(--bg)",
                borderLeft: "1px solid var(--border)",
                zIndex: 1002,
                display: "flex", flexDirection: "column",
                padding: "5rem 1.75rem 2rem",
                gap: "0.25rem",
                fontFamily: "var(--font-sans)",
              }}
            >
              {NAV_LINKS.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 + 0.1 }}
                  style={{
                    display: "block",
                    color: "var(--text-muted)", fontSize: "2rem", fontWeight: 500,
                    textDecoration: "none", padding: "0.75rem 0",
                    borderBottom: "1px solid var(--border)",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={e => e.target.style.color = "var(--text)"}
                  onMouseLeave={e => e.target.style.color = "var(--text-muted)"}
                >
                  {item.label}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                style={{ marginTop: "2rem" }}
              >
                <a
                  href="https://calendly.com/kinzaqasim789/strategy-call-60-min"
                  onClick={() => setMenuOpen(false)}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
                    background: "var(--pink)", color: "#fff",
                    fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: "0.88rem",
                    padding: "0.85rem 1.5rem", borderRadius: "100px",
                    textDecoration: "none", width: "100%",
                    transition: "opacity 0.2s",
                  }}
                >
                  <PhoneCall size={14} /> Book a Call
                </a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}