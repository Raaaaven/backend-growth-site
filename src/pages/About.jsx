import { motion } from "framer-motion";
import { CheckCircle, Zap, TrendingUp, Heart, Mail, ArrowUpRight } from "lucide-react";

const values = [
  {
    icon: <Mail size={16} />,
    title: "Copy that earns attention",
    desc: "Every word is earned. We write for real inboxes, not vanity metrics. If it won't make someone stop scrolling, it doesn't go out.",
    color: "#80A8FF",
  },
  {
    icon: <TrendingUp size={16} />,
    title: "Systems over one-offs",
    desc: "One great send doesn't build a brand. We build the underlying architecture — flows, segments, triggers — that compound over time.",
    color: "#CEB5FF",
  },
  {
    icon: <Zap size={16} />,
    title: "Speed without slop",
    desc: "We move fast because e-commerce doesn't slow down. But speed is never an excuse for weak copy or broken strategy.",
    color: "#8EC1DE",
  },
  {
    icon: <Heart size={16} />,
    title: "Brand-first always",
    desc: "We disappear into your brand. Your subscribers should never know you outsourced — the voice should feel like you, always.",
    color: "#D3D3FF",
  },
];

const timeline = [
  { year: "2019", title: "Started in eCommerce email", desc: "Built first Klaviyo flows for a 7-figure skincare brand. Fell in love with the metrics — open rates, flow revenue, LTV lifts." },
  { year: "2021", title: "Agency work & multi-brand management", desc: "Managed 12 brand accounts simultaneously across DTC, supplements, and home goods. Learned what scales and what doesn't." },
  { year: "2023", title: "Psychology-led copy framework", desc: "Developed a proprietary approach — education-first hooks, earned CTAs, story-before-pitch — that consistently outperforms discount-led email." },
  { year: "2024", title: "LaunchBackend founded", desc: "Went independent to serve e-commerce brands that want a real system, not just prettier blasts. $12M+ in attributed revenue since." },
];

const tools = [
  { name: "Klaviyo", level: 98, color: "#80A8FF" },
  { name: "HubSpot", level: 88, color: "#CEB5FF" },
  { name: "Mailchimp", level: 85, color: "#8EC1DE" },
  { name: "A/B Testing", level: 92, color: "#D3D3FF" },
  { name: "Figma (email design)", level: 80, color: "#80A8FF" },
  { name: "Copywriting", level: 97, color: "#CEB5FF" },
];

export default function About() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --accent:        #80A8FF;
          --accent-2:      #CEB5FF;
          --accent-3:      #8EC1DE;
          --accent-soft:   #D3D3FF;
          --accent-light:  rgba(128,168,255,0.12);
          --accent-border: rgba(128,168,255,0.35);
          --bg:            #F5F6FF;
          --bg-2:          #EDEEFF;
          --bg-3:          #E6E8FF;
          --text:          #1A1B2E;
          --text-muted:    #6B7280;
          --text-soft:     #4B5268;
          --border:        rgba(128,168,255,0.18);
          --shadow:        0 2px 20px rgba(128,168,255,0.15);
          --radius:        14px;
          --font-sans:     'DM Sans', system-ui, sans-serif;
          --font-display:  'Instrument Serif', Georgia, serif;
        }

        html { scroll-behavior: smooth; }
        body {
          background: var(--bg);
          color: var(--text);
          font-family: var(--font-sans);
          -webkit-font-smoothing: antialiased;
        }

        ::selection { background: var(--accent); color: #fff; }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        @media (max-width: 640px) {
          .values-grid  { grid-template-columns: 1fr !important; }
          .skills-grid  { grid-template-columns: 1fr !important; }
          .hero-split   { flex-direction: column !important; }
        }
      `}</style>

      {/* Hero */}
      <section style={{
        padding: "7rem 1.5rem 5rem",
        background: "linear-gradient(180deg, var(--bg-3) 0%, var(--bg) 100%)",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: "10%", right: "10%", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(206,181,255,0.2) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "1060px", margin: "0 auto" }}>
          <div className="hero-split" style={{ display: "flex", gap: "4rem", alignItems: "center" }}>

            {/* Text */}
            <motion.div initial={{ opacity: 0, x: -28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} style={{ flex: 1 }}>
              <span style={{ display: "inline-block", background: "var(--accent-light)", border: "1px solid var(--accent-border)", color: "var(--accent)", fontSize: "0.65rem", fontWeight: 700, padding: "0.28rem 0.85rem", borderRadius: "100px", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "1.2rem" }}>About</span>
              <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4.5vw, 3.5rem)", lineHeight: 1.1, letterSpacing: "-0.025em", color: "var(--text)", marginBottom: "1.25rem" }}>
                The person behind<br />
                <span style={{ fontStyle: "italic", color: "var(--accent)" }}>the system</span>
              </h1>
              <p style={{ color: "var(--text-soft)", fontSize: "0.88rem", lineHeight: 1.82, maxWidth: "460px", marginBottom: "1.5rem" }}>
                I'm an email marketing strategist and direct response copywriter with 5+ years embedded in DTC and eCommerce brands. I've managed multi-million dollar email programs, rebuilt Klaviyo architectures from scratch, and written copy that has collectively generated over $12M in attributed revenue.
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "0.82rem", lineHeight: 1.78, maxWidth: "440px" }}>
                LaunchBackend exists because most e-commerce brands are either sending blasts or paying for an agency that treats them like an account number. I wanted to offer something different — a real system, built with care, that compounds month over month.
              </p>
            </motion.div>

            {/* Avatar card */}
            <motion.div initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }} style={{ flexShrink: 0 }}>
              <div style={{
                width: "280px",
                background: "#fff",
                border: "1px solid var(--border)",
                borderRadius: "20px",
                padding: "1.75rem",
                boxShadow: "var(--shadow)",
                position: "relative",
              }}>
                {/* Avatar placeholder */}
                <div style={{
                  width: "80px", height: "80px", borderRadius: "50%",
                  background: "linear-gradient(135deg, #D3D3FF, #80A8FF)",
                  margin: "0 auto 1rem",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.8rem", fontFamily: "var(--font-display)",
                  color: "#fff",
                }}>K</div>
                <div style={{ textAlign: "center", marginBottom: "1.25rem" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "var(--text)", marginBottom: "0.2rem" }}>Kinza Qasim</div>
                  <div style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>Email Marketing Strategist</div>
                </div>
                <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1rem" }}>
                  {[["5+ yrs", "Experience"], ["$12M+", "Revenue"], ["40+", "Brands"]].map(([num, label]) => (
                    <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.55rem" }}>
                      <span style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>{label}</span>
                      <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--accent)" }}>{num}</span>
                    </div>
                  ))}
                </div>
                <a href="#contact" style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "0.4rem",
                  marginTop: "1rem", background: "var(--accent)", color: "#fff",
                  borderRadius: "100px", padding: "0.65rem 1rem",
                  fontSize: "0.75rem", fontWeight: 600, textDecoration: "none",
                  transition: "box-shadow 0.2s",
                }}
                  onMouseEnter={e => e.currentTarget.style.boxShadow = "0 6px 20px rgba(128,168,255,0.45)"}
                  onMouseLeave={e => e.currentTarget.style.boxShadow = ""}
                >
                  Work together <ArrowUpRight size={12} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: "5rem 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1060px", margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: "2.5rem" }}>
            <span style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-muted)" }}>What I believe</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", letterSpacing: "-0.02em", lineHeight: 1.15, marginTop: "0.5rem", color: "var(--text)" }}>The principles behind every campaign</h2>
          </motion.div>
          <div className="values-grid">
            {values.map((v, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                style={{
                  background: "#fff",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius)",
                  padding: "1.5rem",
                  borderLeft: `3px solid ${v.color}`,
                }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: `${v.color}20`, display: "flex", alignItems: "center", justifyContent: "center", color: v.color, marginBottom: "0.85rem" }}>{v.icon}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1rem", color: "var(--text)", marginBottom: "0.5rem" }}>{v.title}</h3>
                <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", lineHeight: 1.7 }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: "5rem 1.5rem", background: "var(--bg-2)" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: "2.5rem", textAlign: "center" }}>
            <span style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-muted)" }}>Journey</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", letterSpacing: "-0.02em", lineHeight: 1.15, marginTop: "0.5rem", color: "var(--text)" }}>How we got here</h2>
          </motion.div>
          <div style={{ position: "relative", paddingLeft: "2rem" }}>
            {/* line */}
            <div style={{ position: "absolute", left: "6px", top: 0, bottom: 0, width: "2px", background: "var(--border)" }} />
            {timeline.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                style={{ position: "relative", marginBottom: "2rem" }}>
                {/* dot */}
                <div style={{ position: "absolute", left: "-1.75rem", top: "0.35rem", width: "12px", height: "12px", borderRadius: "50%", background: "var(--accent)", border: "2px solid var(--bg-2)", boxSizing: "border-box" }} />
                <span style={{ display: "inline-block", fontSize: "0.62rem", fontWeight: 700, background: "var(--accent-light)", border: "1px solid var(--accent-border)", color: "var(--accent)", padding: "0.12rem 0.55rem", borderRadius: "100px", letterSpacing: "0.07em", marginBottom: "0.5rem" }}>{item.year}</span>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1rem", color: "var(--text)", marginBottom: "0.35rem" }}>{item.title}</h3>
                <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", lineHeight: 1.7 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section style={{ padding: "5rem 1.5rem 6rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: "2.5rem", textAlign: "center" }}>
            <span style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-muted)" }}>Expertise</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", letterSpacing: "-0.02em", lineHeight: 1.15, marginTop: "0.5rem", color: "var(--text)" }}>Tools & specialisations</h2>
          </motion.div>
          <div className="skills-grid">
            {tools.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: "1.25rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.65rem" }}>
                  <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--text)" }}>{t.name}</span>
                  <span style={{ fontSize: "0.72rem", fontWeight: 700, color: t.color }}>{t.level}%</span>
                </div>
                <div style={{ height: "5px", background: "var(--bg-2)", borderRadius: "100px", overflow: "hidden" }}>
                  <motion.div initial={{ width: 0 }} whileInView={{ width: `${t.level}%` }} viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.07, ease: "easeOut" }}
                    style={{ height: "100%", background: t.color, borderRadius: "100px" }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
