import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  PhoneCall, ArrowRight, ChevronDown, ChevronUp,
  BarChart3, Repeat2, Target, Mail, Layers, Zap, TrendingUp,
  CheckCircle, Clock, Shield, Star
} from "lucide-react";

/* ============================================================
   GLOBAL STYLES — Poppins, all lowercase copy, dark palette
   ============================================================ */
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --accent:        #80A8FF;
      --accent-2:      #CEB5FF;
      --accent-3:      #8EC1DE;
      --accent-soft:   #D3D3FF;
      --accent-light:  rgba(128,168,255,0.12);
      --accent-border: rgba(128,168,255,0.32);
      --dark:          #F5F6FF;
      --dark-2:        #EDEEFF;
      --dark-3:        #ffffff;
      --dark-4:        #E6E8FF;
      --text:          #1A1B2E;
      --text-muted:    #6B7280;
      --text-soft:     #4B5268;
      --border:        rgba(128,168,255,0.18);
      --border-bright: rgba(128,168,255,0.32);
      --shadow:        0 2px 20px rgba(128,168,255,0.14);
      --radius: 14px;
      --font: 'DM Sans', system-ui, sans-serif;
    }

    html { scroll-behavior: smooth; }

    body {
      background: var(--dark);
      color: var(--text);
      font-family: var(--font);
      -webkit-font-smoothing: antialiased;
      overflow-x: hidden;
      font-size: 14px;
      line-height: 1.6;
    }

    ::selection { background: var(--accent); color: #fff; }
    ::-webkit-scrollbar { width: 3px; }
    ::-webkit-scrollbar-track { background: var(--dark); }
    ::-webkit-scrollbar-thumb { background: var(--accent); border-radius: 2px; }

    @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
    .marquee-inner { display: flex; width: max-content; animation: marquee 28s linear infinite; }

    @keyframes marquee-slow     { from { transform: translateX(0); }    to { transform: translateX(-50%); } }
    @keyframes marquee-slow-rev { from { transform: translateX(-50%); } to { transform: translateX(0); } }
    .marquee-row { display: flex; width: max-content; gap: 1rem; }
    .marquee-row.fwd { animation: marquee-slow 38s linear infinite; }
    .marquee-row.rev { animation: marquee-slow-rev 38s linear infinite; }

    @keyframes pulseGlow {
      0%,100% { box-shadow: 0 0 0 0 rgba(128,168,255,0); }
      50%      { box-shadow: 0 0 32px 8px rgba(128,168,255,0.2); }
    }
    @keyframes float {
      0%,100% { transform: translateY(0); }
      50%      { transform: translateY(-8px); }
    }
    @keyframes countUp {
      from { opacity: 0; transform: translateY(10px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    section { position: relative; }

    /* ── BUTTONS ── */
    .btn-primary {
      display: inline-flex; align-items: center; gap: 0.45rem;
      background: var(--accent); color: #fff;
      font-family: var(--font); font-weight: 600; font-size: 0.8rem;
      padding: 0.78rem 1.5rem; border-radius: 100px; border: none;
      cursor: pointer; text-decoration: none; letter-spacing: 0.01em;
      transition: transform 0.2s, box-shadow 0.2s;
      white-space: nowrap;
    }
    .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 28px rgba(128,168,255,0.5); }
    .btn-primary:active { transform: translateY(0); }

    .btn-ghost {
      display: inline-flex; align-items: center; gap: 0.45rem;
      background: transparent; color: var(--text);
      font-family: var(--font); font-weight: 500; font-size: 0.8rem;
      padding: 0.78rem 1.5rem; border-radius: 100px;
      border: 1px solid var(--border); cursor: pointer; text-decoration: none;
      transition: border-color 0.2s, background 0.2s;
      white-space: nowrap;
    }
    .btn-ghost:hover { border-color: var(--border-bright); background: rgba(255,255,255,0.04); }

    /* ── SECTION WRAPPER ── */
    .section-inner { max-width: 1400px; margin: 0 auto; padding: 0 ; }

    /* ── HERO WORD SLOT ── */
    .hero-word-block {
      display: block; position: relative; overflow: hidden;
      height: 1.15em; width: 100%;
    }

    /* ── PROCESS (desktop/mobile) ── */
    .process-desktop-wrap { display: block; }
    .process-mobile-wrap  { display: none; }

    /* ── STACKING CARDS ── */
    .stack-card-inner {
      width: min(720px, calc(100vw - 2rem));
      background: #fff; border: 1px solid var(--border);
      border-radius: 18px; padding: 2rem;
      display: flex; gap: 1.5rem; align-items: flex-start;
      box-shadow: var(--shadow);
    }

    /* ── FAQ ── */
    .faq-item { border-bottom: 1px solid var(--border); }



    .services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
}


    /* ── RESPONSIVE ── */
    @media (max-width: 900px) {
      .stack-card-inner { flex-direction: column !important; gap: 0.8rem !important; padding: 1.5rem !important; }
      .reframe-grid     { grid-template-columns: 1fr !important; }
      .services-grid    { grid-template-columns: 1fr !important; }
    }
    @media (max-width: 640px) {
      .hero-btns  { flex-direction: column !important; align-items: stretch !important; width: 100%; max-width: 300px; margin: 0 auto; }
      .hero-btns a { justify-content: center; }
      .hero-stats { gap: 1rem !important; }
      .pain-layout { flex-direction: column !important; }
      .stats-row   { grid-template-columns: 1fr 1fr !important; }
      .what-next-grid { grid-template-columns: 1fr !important; }
      .process-desktop-wrap { display: none !important; }
      .process-mobile-wrap  { display: block !important; }
      .quiz-grid        { grid-template-columns: 1fr !important; }
      .quiz-contact-row { flex-direction: column !important; }
      .orbit-ring { display: none !important; }
      .footer-top    { flex-direction: column !important; }
      .footer-links  { flex-direction: column !important; gap: 1.25rem !important; }
      .cta-final-grid { flex-direction: column !important; }
      .pricing-visual { display: block !important; width: 100% !important;}
    }
      @media (max-width: 768px) {
  .pricing-wrap {
    flex-direction: column;
    align-items: center;
  }

  .pricing-visual {
    width: 100% !important;
    display: flex;
    justify-content: center;
  }

  .pricing-visual form {
    width: 100%;
    max-width: 420px;
    margin: 0 auto;
  }
    .services-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .pricing-visual input,
  .pricing-visual textarea {
    font-size: 0.9rem;
    padding: 0.9rem;
    border-radius: 12px;
  }

  .pricing-visual button {
    padding: 0.9rem;
    font-size: 0.9rem;
    }
  .pricing-visual form {
    padding: 0rem;
    border-radius: 16px;
    box-shadow: var(--shadow);
    border: 1px solid var(--border);
  }
  .pricing-visual form {
    width: 100%;
    max-width: 420px;
    margin-left: -20px;
  }
}

  `}</style>
);
const inputStyle = {
  width: "100%",
  padding: "0.75rem",
  border: "1px solid var(--border)",
  borderRadius: "10px",
  fontSize: "0.85rem",
  outline: "none",
  background: "transparent"
};

const Bridge = ({ from, to, h = "80px" }) => (
  <div style={{ height: h, background: `linear-gradient(to bottom, ${from}, ${to})` }} />
);

const Tag = ({ children, color = "var(--accent)" }) => (
  <span style={{
    display: "inline-block",
    background: `${color}14`, border: `1px solid ${color}30`,
    color, fontSize: "0.62rem", fontWeight: 600,
    padding: "0.2rem 0.65rem", borderRadius: "100px",
    letterSpacing: "0.07em", textTransform: "lowercase",
    marginBottom: "0.9rem",
  }}>{children}</span>
);

/* ============================================================
   HERO
   ============================================================ */
const ROTATING_WORDS = ["predictable", "compounding", "scalable", "automated", "measurable"];
const Hero = () => {
  const [wordIdx, setWordIdx] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  useEffect(() => {
    const id = setInterval(() => setWordIdx(i => (i + 1) % ROTATING_WORDS.length), 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <section ref={ref} style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "9rem 1.5rem 5rem", background: "var(--dark)", position: "relative", overflow: "hidden" }}>
      {/* Glow */}
      <div style={{ position: "absolute", top: "18%", left: "50%", transform: "translateX(-50%)", width: "700px", height: "700px", background: "radial-gradient(circle, rgba(128,168,255,0.1) 0%, transparent 65%)", pointerEvents: "none" }} />
      {/* Grid dots */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(128,168,255,0.15) 1px, transparent 1px)", backgroundSize: "44px 44px", pointerEvents: "none" }} />

      <motion.div style={{ y, opacity, display: "flex", flexDirection: "column", alignItems: "center", width: "100%", maxWidth: "860px", position: "relative" }}>

        {/* Headline — 3 separate block lines so animated word is always on its own row */}
        <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }}
          style={{ fontFamily: "var(--font)", fontWeight: 700, fontSize: "clamp(2.8rem, 5vw, 4.2rem)", lineHeight: 1.1, letterSpacing: "-0.02em", textAlign: "center", width: "100%", marginBottom: "1.5rem" }}>
          <span style={{ display: "block" }}>turn your email list into a</span>
          {/* animated word row */}
          <span className="hero-word-block" style={{ margin: "0.08em 0" }}>
            <AnimatePresence mode="wait">
              <motion.span key={wordIdx}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ type: "spring", stiffness: 60, damping: 15 }}
                style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)", fontStyle: "italic", fontWeight: 700 }}>
                {ROTATING_WORDS[wordIdx]}
              </motion.span>
            </AnimatePresence>
          </span>
          <span style={{ display: "block" }}>revenue engine.</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.32 }}
          style={{ color: "var(--text-muted)", fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)", maxWidth: "540px", textAlign: "center", lineHeight: 1.8, marginBottom: "2.5rem" }}>
          we help DTC eCommerce brands turn underperforming lists into consistent 6-figure profit channels, without spending another dollar on ads.
        </motion.p>

        <motion.div className="hero-btns" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.42 }}
          style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="https://calendly.com/kinzaqasim789/strategy-call-60-min" className="btn-primary" style={{ fontSize: "0.95rem", padding: "0.9rem 1.75rem" }}>
            audit my klaviyo <ArrowRight size={14} />
          </a>
        </motion.div>

        {/* Three trust */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.62 }}
          style={{
            display: "flex",
            gap: "4rem",
            justifyContent: "center",
            marginTop: "1.5rem",
            flexWrap: "wrap",
          }}
        >
          {[
            { title: "zero extra ad", desc: "spend required" },
            { title: "done-for-you", desc: "email revenue system" },
            { title: "built for eCom", desc: "from day one" },
          ].map((pill, i) => (
            <span
              key={i}
              style={{
                display: "flex",
                gap: "5rem",
                justifyContent: "center",
                marginTop: "1.8rem",
                paddingTop: "1.2rem",
                borderTop: "1px solid rgba(255,255,255,0.06)"
              }}
            >


              {/* text */}
              <span style={{ display: "flex", flexDirection: "column", lineHeight: "1.2" }}>
                <b style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--accent)" }}>
                  {pill.title}
                </b>
                <span style={{ fontSize: "0.75rem", opacity: 0.75 }}>
                  {pill.desc}
                </span>
              </span>
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

/* ============================================================
   MARQUEE — small caps ticker
   ============================================================ */
const Ticker = () => {
  const items = ["email revenue", "✦", "klaviyo flows", "✦", "list segmentation", "✦", "abandonment recovery", "✦", "post-purchase ltv", "✦", "retention systems", "✦", "done-for-you execution", "✦"];
  return (
    <div style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", background: "var(--dark-2)", padding: "0.72rem 0", overflow: "hidden" }}>
      <div className="marquee-inner">
        {[...items, ...items].map((item, i) => (
          <span key={i} style={{ padding: "0 1rem", fontSize: "0.75rem", fontWeight: 600, color: item === "✦" ? "var(--accent)" : "var(--text-muted)", letterSpacing: "0.12em", textTransform: "lowercase", whiteSpace: "nowrap", }}>{item}</span>
        ))}
      </div>
    </div>
  );
};

/* ============================================================
   PAIN — "customer acquisition is expensive..."
   ============================================================ */
const Pain = () => (
  <section style={{ padding: "6rem 1.5rem 1rem", background: "var(--dark)" }}>
    <div className="section-inner">
      <div className="pain-layout" style={{ display: "flex", gap: "4rem", alignItems: "stretch" }}>
        {/* Left copy */}
        <div style={{ flex: "1 1 0" }}>
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontFamily: "var(--font)",
              fontWeight: 900,
              fontSize: "clamp(1.5rem, 3.5vw, 2.4rem)",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              marginBottom: "2rem",
              color: "var(--accent)",
            }}
          >
            customer acquisition is expensive

            <span
              style={{
                color: "var(--text)",
              }}
            > and every click you win becomes a </span>
            <span
              style={{
                fontStyle: "italic",
              }}
            >
              customer you lose
            </span>
          </motion.h2>

          {[
            "most email accounts look 'set up,' but they're not generating consistent, compounding revenue.",
            "you're collecting subscribers every day, but there's no system turning them into repeat customers or measurable sales.",
            "so you keep relying on ads, while email feels inconsistent, under-optimized, and impossible to scale.",
          ].map((txt, i) => (
            <motion.p key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 + 0.1 }}
              style={{ color: "var(--text-muted)", fontSize: "0.85rem", lineHeight: 1.75, marginBottom: "1rem", }}>
              {txt}
            </motion.p>
          ))}
        </div>

        {/* Right: animated visual — leaking bucket metaphor */}
        <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          style={{ flex: "1 1 0", height: "auto", alignSelf: "stretch" }}>
          <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "20px", padding: "1.75rem", position: "relative", overflow: "hidden", boxShadow: "var(--shadow)" }}>
            {/* Glow */}
            <div style={{ position: "absolute", top: "-40px", right: "-40px", width: "160px", height: "160px", background: "radial-gradient(circle, rgba(128,168,255,0.18) 0%, transparent 70%)", pointerEvents: "none" }} />
            <p style={{ fontSize: "0.68rem", fontWeight: 600, color: "var(--text-muted)", letterSpacing: "0.08em", textTransform: "lowercase", marginBottom: "1.2rem" }}>where revenue leaks</p>
            {[
              { label: "no welcome flow", pct: 82, color: "#FF7070" },
              { label: "no abandonment recovery", pct: 74, color: "#FF9F6B" },
              { label: "no post-purchase system", pct: 68, color: "#FFD166" },
              { label: "unsegmented list", pct: 61, color: "#80A8FF" },
            ].map((row, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 + 0.3 }}
                style={{ marginBottom: "0.9rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.3rem" }}>
                  <span style={{ fontSize: "0.73rem", color: "var(--text-soft)" }}>{row.label}</span>
                  <span style={{ fontSize: "0.73rem", fontWeight: 600, color: row.color }}>{row.pct}% miss</span>
                </div>
                <div style={{ height: "4px", background: "var(--dark-4)", borderRadius: "100px", overflow: "hidden" }}>
                  <motion.div initial={{ width: 0 }} whileInView={{ width: `${row.pct}%` }} viewport={{ once: true }} transition={{ delay: i * 0.1 + 0.4, duration: 0.8 }}
                    style={{ height: "100%", background: row.color, borderRadius: "100px" }} />
                </div>
              </motion.div>
            ))}
            <div style={{ marginTop: "1.4rem", padding: "0.75rem", background: "var(--accent-light)", borderRadius: "10px", border: "1px solid var(--accent-border)" }}>
              <p style={{ fontSize: "0.72rem", color: "var(--accent)", lineHeight: 1.6 }}>
                brands at your stage typically leave <strong style={{ color: "var(--accent)" }}>15–35%</strong> of backend revenue uncaptured
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

/* ============================================================
   SERVICES — "we help you turn clicks into compounding revenue"
   ============================================================ */
const services = [
  { icon: <Zap size={16} />, title: "flows that capture revenue you're already missing", body: "we build automated email sequences that turn first-time buyers into repeat customers without relying on constant campaigns or discounts." },
  { icon: <Target size={16} />, title: "segmentation that actually drives purchases", body: "your list isn't one audience. we segment based on behavior, intent, and buying patterns so every message feels relevant and converts." },
  { icon: <Mail size={16} />, title: "campaigns that don't just send but sell", body: "from product drops to promotions, we craft high-converting campaigns designed to generate revenue, not just engagement." },
  { icon: <Repeat2 size={16} />, title: "retention systems that compound over time", body: "instead of one-off emails, we build systems that increase lifetime value with every interaction, turning your list into a long-term asset." },
  { icon: <Layers size={16} />, title: "done-for-you execution, start to scale", body: "strategy, copy, design, and optimization, handled end-to-end so you can focus on growth while your backend drives revenue." },
];

const Services = () => (
  <>
    <Bridge from="var(--dark)" to="var(--dark-2)" />
    <section style={{ padding: "1rem 1.5rem 2rem", background: "var(--dark-2)" }}>
      <div className="section-inner">
        <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: "3.5rem" }}>
          <h2 style={{ fontFamily: "var(--font)", fontWeight: 700, fontSize: "clamp(1.8rem, 3vw, 2.4rem)", lineHeight: 1.2, letterSpacing: "-0.02em", maxWidth: "560px", textAlign: "center", margin: "0 auto", }}>
            we help you turn clicks into{" "}
            <span style={{ color: "var(--accent)", fontStyle: "italic" }}>compounding revenue</span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", marginTop: "0.85rem", maxWidth: "520px", lineHeight: 1.75, textAlign: "center", marginRight: "auto", marginLeft: "auto" }}>
            stop leaking profit after acquisition by activating your existing customers through retention systems that increase repeat purchases, lifetime value, and long-term brand growth.
          </p>
        </motion.div>

        <div
          className="services-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0.75rem",
          }}
        >
          {services.map((s, i) => {
            const isLast = i === services.length - 1;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent-border)";
                  e.currentTarget.style.boxShadow = "var(--shadow)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.boxShadow = "none";
                }}
                style={{
                  background: "#fff",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius)",
                  padding: "1.4rem",
                  transition: "border-color 0.18s, box-shadow 0.18s",
                  justifySelf: "center",

                  ...(isLast && {
                    gridColumn: "1 / -1",

                    maxWidth: "none",
                    margin: 0,
                  }),
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "9px",
                    background: "var(--accent-light)",
                    border: "1px solid var(--accent-border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent)",
                    marginBottom: "0.85rem",
                  }}
                >
                  {s.icon}
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font)",
                    fontWeight: 600,
                    fontSize: "1rem",
                    marginBottom: "0.45rem",
                    lineHeight: 1.45,
                  }}
                >
                  {s.title}
                </h3>

                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.85rem",
                    lineHeight: 1.7,
                  }}
                >
                  {s.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  </>
);

/* ============================================================
   OUR REVENUE SYSTEM — 6-step stacking cards
   ============================================================ */
const STEPS = [
  { num: "01", title: "backend audit and revenue mapping", desc: "we identify exactly where your revenue is leaking across your funnel, flows, and customer lifecycle, then map the highest impact fixes in order of priority" },
  { num: "02", title: "capture architecture", desc: "we rebuild how you capture leads not for volume, but for intent using behavior driven triggers and offer alignment that attracts buyers, not browsers" },
  { num: "03", title: "welcome conversion engine", desc: "we turn new subscribers into customers with a structured sequence that builds trust, handles objections, and drives action within the highest converting window" },
  { num: "04", title: "abandonment recovery system", desc: "we recover lost revenue from high intent users with targeted sequences across browse, cart, and checkout each tailored to why they did not convert" },
  { num: "05", title: "post purchase monetisation", desc: "we increase revenue per customer with systems designed for second purchases, cross sells, and well timed follow ups that extend the buying cycle" },
  { num: "06", title: "retention and ltv structure", desc: "we build long term retention systems that reactivate customers, reward loyalty, and continuously increase lifetime value in the background" },
];
const CARD_COLORS = ["#80A8FF", "#8EB8FF", "#CEB5FF", "#8EC1DE", "#A8D4E8", "#D3D3FF"];
const GROW_SLOTS = 1;
const TOTAL_SLOTS = GROW_SLOTS + STEPS.length;

const StepCard = ({ step, color }) => (
  <div className="stack-card-inner" style={{ width: "100%", maxWidth: "1000px" }}>
    <div style={{ fontFamily: "var(--font)", fontWeight: 800, fontSize: "clamp(2rem, 3vw, 2.4rem)", color, lineHeight: 1, opacity: 0.22, flexShrink: 0, letterSpacing: "-0.04em" }}>{step.num}</div>
    <div style={{ flex: 1 }}>
      <h3 style={{ fontFamily: "var(--font)", fontWeight: 600, fontSize: "clamp(1.1rem, 1.8vw, 1.3rem)", letterSpacing: "-0.01em", marginBottom: "0.6rem", lineHeight: 1.35 }}>{step.title}</h3>
      <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: 1.75, maxWidth: "100%" }}>{step.desc}</p>
    </div>
  </div>
);

const Card1 = ({ stackP }) => {
  const growEnd = GROW_SLOTS / TOTAL_SLOTS;
  const scaleVal = useTransform(stackP, [0, growEnd], [0.7, 1]);
  const opVal = useTransform(stackP, [0, 0.05], [0, 1]);
  return (
    <div style={{ position: "sticky", top: 0, height: "100vh", width: "100vw", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <motion.div style={{ scale: scaleVal, opacity: opVal, transformOrigin: "top center" }}>
        <StepCard step={STEPS[0]} color={CARD_COLORS[0]} />
      </motion.div>
    </div>
  );
};

const StickyCard = ({ step, color }) => (
  <div style={{ position: "sticky", top: 0, height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
    <StepCard step={step} color={color} />
  </div>
);

const RevenueSystem = () => {
  const stackRef = useRef(null);
  const { scrollYProgress: stackP } = useScroll({ target: stackRef, offset: ["start start", "end end"] });

  return (
    <>
      <Bridge from="var(--dark-2)" to="var(--dark)" />
      <section id="system" style={{ background: "var(--dark)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "1rem 1.5rem 1rem" }}>
          <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: "center" }}>
            <h2 style={{ fontFamily: "var(--font)", fontWeight: 700, fontSize: "clamp(1.8rem, 3vw, 2.4rem)", letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: "0.85rem" }}>our revenue system</h2>
            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", maxWidth: "520px", margin: "0 auto 0.5rem", lineHeight: 1.8 }}>
              a 6 step backend infrastructure designed to turn your existing traffic into repeat purchases, higher lifetime value, and predictable retention-driven revenue
            </p>
            <p style={{ color: "var(--text-muted)", fontSize: "0.8rem", fontStyle: "italic" }}>built once. optimized continuously. owned by you.</p>
          </motion.div>
        </div>
        <div ref={stackRef} style={{ position: "relative", height: `${(STEPS.length + 1) * 100}vh`, paddingTop: "20vh", overflow: "visible" }}>
          <Card1 stackP={stackP} />
          {STEPS.slice(1).map((step, i) => (
            <StickyCard key={i + 1} step={step} color={CARD_COLORS[i + 1]} />
          ))}
        </div>
      </section>
    </>
  );
};

/* ============================================================
   RESULTS VISUAL — "what happens when your retention system is done right"
   ============================================================ */
const Outcome = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rotateX = useTransform(scrollYProgress, [0, 0.4], [24, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [0.65, 1]);

  return (
    <>
      <Bridge from="var(--dark)" to="var(--dark-2)" />

      <section ref={ref} style={{ padding: "1em 1.5rem 1rem", background: "var(--dark-2)", overflow: "hidden" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

          {/* heading */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", marginBottom: "3rem" }}
          >
            <h2 style={{
              fontFamily: "var(--font)",
              fontSize: "clamp(1.9rem, 3.2vw, 2.5rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1.15
            }}>
              what happens when your{" "}<br />
              <span style={{ color: "var(--accent)", fontStyle: "italic" }}>
                retention system works
              </span>
            </h2>
          </motion.div>

          {/* laptop block */}
          <motion.div
            style={{
              rotateX,
              scale,
              perspective: "1200px",
              transformOrigin: "center top",
              willChange: "transform"
            }}
          >

            {/* LAPTOP WRAPPER — narrows so base looks proportional */}
            <div style={{ padding: "0 5%" }}>

              {/* LID / SCREEN BEZEL */}
              <div style={{
                background: "#1a1b2e",
                borderRadius: "12px 12px 0 0",
                border: "2px solid #2a2b40",
                borderBottom: "none",
                padding: "12px 12px 0",
              }}>
                {/* camera dot */}
                <div style={{
                  width: 6, height: 6,
                  borderRadius: "50%",
                  background: "#2a2b40",
                  margin: "0 auto 8px",
                }} />

                {/* SCREEN */}
                <div style={{
                  background: "#0c0d18",
                  borderRadius: "6px 6px 0 0",
                  overflow: "hidden",
                  lineHeight: 0,
                }}>
                  <img
                    src="/assets/laptop.jpeg"
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                </div>
              </div>

              {/* BASE */}
              <div style={{
                background: "#16172a",
                border: "2px solid #2a2b40",
                borderTop: "1px solid #3a3b50",
                borderRadius: "0 0 10px 10px",
                height: "22px",
                position: "relative",
              }}>
                {/* trackpad */}
                <div style={{
                  width: 60, height: 10,
                  borderRadius: 4,
                  background: "#1e1f35",
                  border: "1px solid #2a2b40",
                  position: "absolute",
                  top: "50%", left: "50%",
                  transform: "translate(-50%, -50%)",
                }} />
              </div>

            </div>

          </motion.div>

        </div>
      </section>
    </>
  );
};
/* ============================================================
   QUIZ — "find out exactly where your backend is leaking revenue"
   Smart scoring with category tags and auto-fill biggest opportunity
   ============================================================ */
const QUIZ = [
  {
    q: "What % of your total revenue comes from email?",
    opts: [
      { label: "0–10%", score: 1 },
      { label: "10–20%", score: 2 },
      { label: "20–30%", score: 3 },
      { label: "30%+", score: 4 },
    ],
  },
  {
    q: "How developed are your email flows?",
    cat: "flow_automation",
    opts: [
      { label: "None", score: 1 },
      { label: "Basic welcome only", score: 2 },
      { label: "Multiple flows, not optimised", score: 3 },
      { label: "Fully built & optimised", score: 4 },
    ],
  },
  {
    q: "What's your repeat customer rate?",
    opts: [
      { label: "Under 20%", score: 1 },
      { label: "20–40%", score: 2 },
      { label: "40–60%", score: 3 },
      { label: "60%+", score: 4 },
    ],
  },
  {
    q: "How consistent is your campaign strategy?",
    cat: "campaigns",
    opts: [
      { label: "Inconsistent", score: 1 },
      { label: "1–2 per month", score: 2 },
      { label: "Weekly", score: 3 },
      { label: "Multiple/week with clear strategy", score: 4 },
    ],
  },
  {
    q: "What level is your segmentation?",
    cat: "segmentation",
    opts: [
      { label: "Everyone gets the same emails", score: 1 },
      { label: "Basic segmentation", score: 2 },
      { label: "Behaviour-based segmentation", score: 3 },
      { label: "Fully dynamic segmentation", score: 4 },
    ],
  },
  {
    q: "How do you handle abandonment recovery?",
    cat: "abandonment_recovery",
    opts: [
      { label: "None", score: 1 },
      { label: "Cart only", score: 2 },
      { label: "Cart + browse", score: 3 },
      { label: "Full funnel recovery system", score: 4 },
    ],
  },
  {
    q: "What does your post-purchase system look like?",
    cat: "post_purchase",
    opts: [
      { label: "None", score: 1 },
      { label: "Basic confirmations only", score: 2 },
      { label: "Some follow-ups", score: 3 },
      { label: "Structured revenue system", score: 4 },
    ],
  },
  {
    q: "What's your biggest bottleneck right now?",
    opts: [
      { label: "High CAC", score: 1 },
      { label: "Low repeat purchases", score: 2 },
      { label: "Poor conversion", score: 3 },
      { label: "Email not generating revenue", score: 1 },
      { label: "Not sure", score: 1 },
    ],
  },
];

const CAT_LABELS = {
  flow_automation: "Flow Automation",
  segmentation: "Segmentation",
  abandonment_recovery: "Abandonment Recovery",
  post_purchase: "Post-Purchase Monetisation",
  campaigns: "Campaign Consistency",
};

const CAT_DETAIL = {
  flow_automation:
    "Your automated flows are not converting subscribers into buyers at the rate they should. This is where the fastest revenue lift lives.",
  segmentation:
    "Your list is not being segmented effectively, which is limiting conversion across campaigns and flows.",
  abandonment_recovery:
    "You are losing high-intent buyers before they complete. A structured recovery system typically recaptures 8–15% of that revenue.",
  post_purchase:
    "You are generating customers, but not maximising revenue after the first purchase. This is where the majority of your missed revenue sits.",
  campaigns:
    "Your campaign cadence is inconsistent, which limits list engagement, deliverability, and consistent revenue output.",
};

function getScoreCategory(total) {
  if (total <= 14)
    return {
      label: "You're leaking revenue at every stage",
      detail:
        "You are acquiring customers but losing them immediately after the first purchase — the gaps are wide and fixable fast.",
    };
  if (total <= 21)
    return {
      label: "Your backend is underperforming",
      detail:
        "You have some structure in place, but it is not built to drive consistent revenue.",
    };
  if (total <= 27)
    return {
      label: "You have a foundation — but it's capped",
      detail:
        "You are leaving growth on the table due to gaps in optimisation and segmentation.",
    };
  return {
    label: "Your system is strong but not fully maximised",
    detail:
      "You have a solid backend, but there is still untapped revenue in advanced retention strategies.",
  };
}

function getBiggestOpportunity(scores) {
  const cats = Object.keys(scores);
  if (!cats.length) return null;
  const sorted = [...cats].sort((a, b) => scores[a] - scores[b]);
  return { primary: sorted[0], secondary: sorted[1] || null };
}

const Quiz = () => {
  const [phase, setPhase] = useState("quiz");
  const [step, setStep] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const [scores, setScores] = useState({});
  const [totalScore, setTotalScore] = useState(0);
  const [result, setResult] = useState(null);

  const handleAnswer = (opt) => {
    const q = QUIZ[step];
    const newTotal = totalScore + opt.score;
    const newScores = q.cat
      ? { ...scores, [q.cat]: (scores[q.cat] || 0) + opt.score }
      : { ...scores };
    setTotalScore(newTotal);
    setScores(newScores);
    if (step + 1 < QUIZ.length) {
      setTimeout(() => {
        setAnimKey((k) => k + 1);
        setStep((s) => s + 1);
      }, 240);
    } else {
      setResult({ total: newTotal, catScores: newScores });
      setTimeout(() => setPhase("score"), 240);
    }
  };

  const isScore = phase === "score";
  const progress = isScore ? 100 : Math.round((step / QUIZ.length) * 100);
  const progressLabel = isScore ? "your results" : `q${step + 1} of ${QUIZ.length}`;

  const category = result ? getScoreCategory(result.total) : null;
  const opp = result ? getBiggestOpportunity(result.catScores) : null;
  const hasOpp = opp && opp.primary;
  const hasSecondary = opp && opp.secondary;

  const manyOpts = QUIZ[step] && QUIZ[step].opts.length > 4;

  return (
    <>
      <Bridge from="var(--dark-2)" to="var(--dark)" />
      <section
        id="audit"
        style={{ padding: "1rem 1.5rem 1rem", background: "var(--dark)" }}
      >
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", marginBottom: "2.5rem" }}
          >
            <h2
              style={{
                fontFamily: "var(--font)",
                fontWeight: 700,
                fontSize: "clamp(1.9rem, 3.2vw, 2.4rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
                marginBottom: "0.65rem",
              }}
            >
              find out exactly where your backend is leaking revenue
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.75 }}>
              answer 8 quick questions and get an instant breakdown of your retention gaps
            </p>
          </motion.div>

          <div
            style={{
              background: "#fff",
              border: "1px solid var(--border)",
              borderRadius: "20px",
              padding: "2rem",
              boxShadow: "var(--shadow)",
            }}
          >
            {/* Progress bar */}
            <div style={{ marginBottom: "1.6rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.35rem" }}>
                <span style={{ fontSize: "0.66rem", color: "var(--text-muted)", fontWeight: 500 }}>
                  {progressLabel}
                </span>
                <span style={{ fontSize: "0.66rem", color: "var(--accent)", fontWeight: 600 }}>
                  {progress}%
                </span>
              </div>
              <div style={{ background: "var(--dark-4)", borderRadius: "100px", height: "3px" }}>
                <motion.div
                  style={{ background: "var(--accent)", height: "3px", borderRadius: "100px" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.32 }}
                />
              </div>
            </div>

            <AnimatePresence mode="wait">

              {/* QUIZ PHASE */}
              {phase === "quiz" && (
                <motion.div
                  key={animKey}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.18 }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font)",
                      fontWeight: 600,
                      fontSize: "clamp(0.95rem, 2.5vw, 1.15rem)",
                      marginBottom: "1.1rem",
                      lineHeight: 1.45,
                      letterSpacing: "-0.01em",
                      color: "var(--text)",
                    }}
                  >
                    {QUIZ[step].q}
                  </h3>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: manyOpts ? "1fr" : "1fr 1fr",
                      gap: "0.5rem",
                    }}
                  >
                    {QUIZ[step].opts.map((opt) => (
                      <button
                        key={opt.label}
                        onClick={() => handleAnswer(opt)}
                        style={{
                          background: "var(--dark-4)",
                          border: "1px solid var(--border)",
                          borderRadius: "9px",
                          padding: "0.72rem 0.9rem",
                          color: "var(--text)",
                          fontFamily: "var(--font)",
                          fontSize: "0.85rem",
                          fontWeight: 500,
                          cursor: "pointer",
                          transition: "all 0.13s",
                          textAlign: "left",
                          lineHeight: 1.4,
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = "var(--accent)";
                          e.currentTarget.style.background = "var(--accent-light)";
                          e.currentTarget.style.color = "var(--accent)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = "var(--border)";
                          e.currentTarget.style.background = "var(--dark-4)";
                          e.currentTarget.style.color = "var(--text)";
                        }}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* SCORE PHASE */}
              {phase === "score" && category && (
                <motion.div
                  key="score"
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.18 }}
                >
                  {/* Score number */}
                  <div style={{ textAlign: "center", marginBottom: "1.6rem" }}>
                    <div
                      style={{
                        fontSize: "0.62rem",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--text-muted)",
                        marginBottom: "0.4rem",
                      }}
                    >
                      Your Score
                    </div>
                    <div
                      style={{
                        fontSize: "clamp(3.5rem, 10vw, 5rem)",
                        fontWeight: 700,
                        color: "var(--accent)",
                        lineHeight: 1,
                        letterSpacing: "-0.03em",
                        fontFamily: "var(--font)",
                      }}
                    >
                      {result.total}
                      <span style={{ fontSize: "0.35em", color: "var(--text-muted)", fontWeight: 400 }}>
                        /32
                      </span>
                    </div>
                    <div
                      style={{
                        marginTop: "0.75rem",
                        fontFamily: "var(--font)",
                        fontWeight: 700,
                        fontSize: "clamp(1.15rem, 3vw, 1.45rem)",
                        lineHeight: 1.25,
                        letterSpacing: "-0.02em",
                        color: "var(--text)",
                      }}
                    >
                      {category.label}
                    </div>
                    <div
                      style={{
                        marginTop: "0.4rem",
                        fontSize: "0.78rem",
                        color: "var(--text-muted)",
                        lineHeight: 1.7,
                        maxWidth: "400px",
                        margin: "0.4rem auto 0",
                      }}
                    >
                      {category.detail}
                    </div>
                  </div>

                  <div style={{ height: "1px", background: "var(--border)", margin: "0 0 1.4rem" }} />

                  {/* Biggest Opportunity */}
                  {hasOpp && (
                    <div style={{ marginBottom: "1.5rem" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          marginBottom: "0.6rem",
                        }}
                      >
                        <div
                          style={{
                            fontSize: "0.6rem",
                            fontWeight: 700,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: "var(--accent-2)",
                          }}
                        >
                          Your Biggest Opportunity
                        </div>
                      </div>

                      <div
                        style={{
                          background: "var(--dark-4)",
                          border: "1.5px solid var(--accent)",
                          borderRadius: "13px",
                          padding: "1rem 1.1rem",
                        }}
                      >
                        <div
                          style={{
                            fontFamily: "var(--font)",
                            fontWeight: 700,
                            fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
                            color: "var(--accent)",
                            marginBottom: "0.35rem",
                            letterSpacing: "-0.01em",
                          }}
                        >
                          {CAT_LABELS[opp.primary]}
                        </div>
                        <div style={{ fontSize: "0.76rem", color: "var(--text)", lineHeight: 1.7 }}>
                          {CAT_DETAIL[opp.primary]}
                        </div>
                      </div>

                      {hasSecondary && (
                        <div
                          style={{
                            marginTop: "0.65rem",
                            background: "var(--dark-4)",
                            borderRadius: "10px",
                            padding: "0.75rem 1rem",
                            border: "1px solid var(--border)",
                          }}
                        >
                          <div
                            style={{
                              fontSize: "0.58rem",
                              fontWeight: 700,
                              letterSpacing: "0.08em",
                              textTransform: "uppercase",
                              color: "var(--text-muted)",
                              marginBottom: "0.22rem",
                            }}
                          >
                            Secondary Gap
                          </div>
                          <div
                            style={{
                              fontSize: "0.74rem",
                              fontWeight: 600,
                              color: "var(--text)",
                              marginBottom: "0.1rem",
                            }}
                          >
                            {CAT_LABELS[opp.secondary]}
                          </div>
                          <div style={{ fontSize: "0.7rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                            {CAT_DETAIL[opp.secondary]}
                          </div>
                        </div>
                      )}

                      <div
                        style={{
                          marginTop: "0.65rem",
                          fontSize: "0.68rem",
                          color: "var(--text-muted)",
                          fontStyle: "italic",
                          textAlign: "center",
                        }}
                      >
                        Based on brands at your stage, you could be missing 15–35% in additional backend revenue
                      </div>
                    </div>
                  )}

                  {/* CTA */}
                  <a
                    href="https://calendly.com/kinzaqasim789/strategy-call-60-min"
                    className="btn-primary"
                    style={{ fontSize: "0.82rem", width: "100%", justifyContent: "center" }}
                    >
                    <PhoneCall size={13} /> Book Your Free Backend Audit
                  </a>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
};

/* ============================================================
   WHAT HAPPENS NEXT — 5-step clear path
   ============================================================ */
const NEXT_STEPS = [
  { num: "01", title: "live backend audit on call", body: "we log into your klaviyo together and audit your account in real time. you see exactly where revenue is leaking across flows, segments, and campaigns as we walk through it with you." },
  { num: "02", title: "documented gaps and revenue opportunities", body: "after the call, you receive a clear written breakdown of where you are losing revenue, what is missing or underperforming, what should be fixed first and why, along with practical solutions mapped to each gap." },
  { num: "03", title: "execution plan", body: "we outline what will be built, in what order, and how it ties directly to revenue growth." },
  { num: "04", title: "build and launch", body: "we handle full implementation from flows to segmentation to campaigns and get your system live." },
  { num: "05", title: "scale and optimise", body: "we continuously improve performance through testing, iteration, and data driven decisions that compound over time." },
];

const WhatHappensNext = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start 55%", "end 55%"] });
  const lineH = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const [active, setActive] = useState(-1);

  useEffect(() => {
    const unsub = scrollYProgress.on("change", v =>
      setActive(Math.min(Math.floor(v * NEXT_STEPS.length), NEXT_STEPS.length - 1))
    );
    return unsub;
  }, [scrollYProgress]);

  const Dot = ({ isActive }) => (
    <div style={{
      width: "13px",
      height: "13px",
      borderRadius: "50%",
      flexShrink: 0,
      background: isActive ? "var(--accent)" : "var(--dark-4)",
      border: `2px solid ${isActive ? "var(--accent)" : "var(--border)"}`,
      position: "relative",
      zIndex: 2,
      transition: "all 0.35s",
      boxShadow: isActive ? "0 0 10px rgba(128,168,255,0.6)" : "none"
    }}>
      {isActive && (
        <div style={{
          position: "absolute",
          inset: "-5px",
          borderRadius: "50%",
          border: "1px solid var(--accent-border)"
        }} />
      )}
    </div>
  );

  return (
    <>
      <Bridge from="var(--dark)" to="var(--dark-2)" />
      <section id="process" ref={sectionRef} style={{ padding: "1rem 1.5rem 1rem", background: "var(--dark-2)" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", marginBottom: "3.5rem" }}
          >
            <h2 style={{
              fontFamily: "var(--font)",
              fontWeight: 700,
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              marginBottom: "0.65rem"
            }}>
              what happens next
            </h2>
            <p style={{
              color: "var(--text-muted)",
              fontSize: "0.85rem",
              maxWidth: "480px",
              margin: "0 auto",
              lineHeight: 1.7
            }}>
              a clear, structured path from insight to execution without guesswork, delays, or hand holding
            </p>
          </motion.div>

          {/* Desktop */}
          <div className="process-desktop-wrap" style={{ position: "relative" }}>

            {/* Static background line */}
            <div style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: "2px",
              background: "var(--border)",
              transform: "translateX(-50%)"
            }} />

            {/* Animated fill line */}
            <div style={{
              position: "absolute",
              left: "50%",
              top: 0,
              width: "2px",
              transform: "translateX(-50%)",
              height: "100%",
              overflow: "hidden"
            }}>
              <motion.div style={{
                width: "100%",
                height: lineH,
                background: "linear-gradient(to bottom, var(--accent), var(--accent-2))"
              }} />
            </div>

            {NEXT_STEPS.map((step, i) => {
              const isActive = i <= active;
              const side = i % 2 === 0 ? "left" : "right";
              return (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1.5rem",
                    flexDirection: side === "right" ? "row-reverse" : "row"
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, x: side === "left" ? -18 : 18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    style={{
                      flex: 1,
                      textAlign: side === "right" ? "right" : "left",
                      padding: "1.6rem 0"
                    }}
                  >
                    <span style={{
                      display: "inline-block",
                      fontSize: "0.6rem",
                      fontWeight: 700,
                      letterSpacing: "0.07em",
                      background: isActive ? "var(--accent-light)" : "var(--dark-4)",
                      border: `1px solid ${isActive ? "var(--accent-border)" : "var(--border)"}`,
                      color: isActive ? "var(--accent)" : "var(--text-muted)",
                      padding: "0.13rem 0.5rem",
                      borderRadius: "100px",
                      marginBottom: "0.5rem",
                      transition: "all 0.35s"
                    }}>
                      {step.num}
                    </span>
                    <h3 style={{
                      fontFamily: "var(--font)",
                      fontWeight: 600,
                      fontSize: "1.05rem",
                      letterSpacing: "-0.01em",
                      lineHeight: 1.35,
                      marginBottom: "0.35rem",
                      color: isActive ? "var(--text)" : "var(--text-muted)",
                      transition: "color 0.35s"
                    }}>
                      {step.title}
                    </h3>
                    <p style={{
                      color: "var(--text-muted)",
                      fontSize: "0.8rem",
                      lineHeight: 1.72,
                      maxWidth: "290px",
                      marginLeft: side === "right" ? "auto" : 0
                    }}>
                      {step.body}
                    </p>
                  </motion.div>

                  <div style={{
                    flexShrink: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    paddingTop: "2.1rem"
                  }}>
                    <Dot isActive={isActive} />
                  </div>

                  <div style={{ flex: 1 }} />
                </div>
              );
            })}
          </div>

          {/* Mobile */}
          <div className="process-mobile-wrap" style={{ position: "relative" }}>

            {/* Static background line */}
            <div style={{
              position: "absolute",
              left: "6px",
              top: 0,
              bottom: 0,
              width: "2px",
              background: "var(--border)",
              transform: "translateX(-50%)"
            }} />

            {/* Animated fill line */}
            <div style={{
              position: "absolute",
              left: "6px",
              top: 0,
              width: "2px",
              transform: "translateX(-50%)",
              height: "100%",
              overflow: "hidden"
            }}>
              <motion.div style={{
                width: "100%",
                height: lineH,
                background: "linear-gradient(to bottom, var(--accent), var(--accent-2))"
              }} />
            </div>

            {NEXT_STEPS.map((step, i) => {
              const isActive = i <= active;
              return (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                    marginBottom: "2rem"
                  }}
                >
                  <div style={{ flexShrink: 0, paddingTop: "0.2rem" }}>
                    <Dot isActive={isActive} />
                  </div>
                  <motion.div
                    initial={{ opacity: 0, x: -14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    style={{ flex: 1 }}
                  >
                    <span style={{
                      display: "inline-block",
                      fontSize: "0.6rem",
                      fontWeight: 700,
                      background: isActive ? "var(--accent-light)" : "var(--dark-4)",
                      border: `1px solid ${isActive ? "var(--accent-border)" : "var(--border)"}`,
                      color: isActive ? "var(--accent)" : "var(--text-muted)",
                      padding: "0.12rem 0.48rem",
                      borderRadius: "100px",
                      letterSpacing: "0.07em",
                      marginBottom: "0.38rem",
                      transition: "all 0.35s"
                    }}>
                      {step.num}
                    </span>
                    <h3 style={{
                      fontFamily: "var(--font)",
                      fontWeight: 600,
                      fontSize: "0.95rem",
                      letterSpacing: "-0.01em",
                      lineHeight: 1.35,
                      marginBottom: "0.28rem",
                      color: isActive ? "var(--text)" : "var(--text-muted)",
                      transition: "color 0.35s"
                    }}>
                      {step.title}
                    </h3>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.8rem", lineHeight: 1.7 }}>
                      {step.body}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* Walk away callout */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              textAlign: "center",
              marginTop: "3rem",
              paddingTop: "2.5rem",
              borderTop: "1px solid var(--border)"
            }}
          >
            <h2 style={{
              fontFamily: "var(--font)",
              fontWeight: 700,
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
              marginBottom: "0.65rem"
            }}>
              what you'll walk away with
            </h2>
            <p style={{
              color: "var(--text-muted)",
              fontSize: "0.82rem",
              maxWidth: "480px",
              margin: "0 auto 1.5rem",
              lineHeight: 1.75
            }}>
              a real time breakdown of your revenue leaks, clear gaps, practical fixes, and a tailored plan to capture what you're currently missing
            </p>
            
             <a href="https://calendly.com/kinzaqasim789/strategy-call-60-min"
              className="btn-primary"
              style={{ fontSize: "0.84rem" }}
            >
              <PhoneCall size={13} /> book your free backend audit
            </a>
            <p style={{ color: "var(--text-muted)", fontSize: "0.68rem", marginTop: "0.6rem" }}>
              we log into your klaviyo, find the leaks, and map the fixes
            </p>
          </motion.div>

        </div>
      </section>
    </>
  );
};

/* ============================================================
   FAQ
   ============================================================ */
const FAQS = [
  { q: "do you need access to our klaviyo account before the call?", a: "yes, we require access before the call so we can audit your account in real time and show you actual gaps using your data, not assumptions." },
  { q: "is the audit actually free or is there a catch?", a: "it's completely free. you'll leave with a clear breakdown of what is working, what is not, and what to fix — whether you move forward or not." },
  { q: "what if we already have email marketing set up?", a: "most brands do, but the issue is usually in optimisation, segmentation, and missing systems that limit how much revenue it actually generates." },
  { q: "how quickly can we see results?", a: "most brands start seeing visible improvements within 45 to 60 days, especially once key flows and recovery systems are in place." },
  { q: "do you only work with certain types of brands?", a: "we typically work with ecommerce brands that already have consistent traffic and want to increase repeat purchases and lifetime value." },
  { q: "what happens after the audit call?", a: "you'll receive a clear breakdown of gaps, recommended fixes, and a plan forward — and if it makes sense, we can handle the full implementation for you." },
];

const FAQ = () => {
  const [open, setOpen] = useState(null);
  return (
    <>
      <Bridge from="var(--dark-2)" to="var(--dark)" />
      <section style={{ padding: "1rem 1.5rem 1rem", background: "var(--dark)" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <h2 style={{ fontFamily: "var(--font)", fontWeight: 700, fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>frequently asked questions</h2>
          </motion.div>
          <div>
            {FAQS.map((item, i) => (
              <motion.div key={i} className="faq-item" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <button onClick={() => setOpen(open === i ? null : i)}
                  style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem", padding: "1.1rem 0", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                  <span style={{ fontFamily: "var(--font)", fontWeight: 500, fontSize: "0.85rem", color: "var(--text)", lineHeight: 1.45 }}>{item.q}</span>
                  <span style={{ color: "var(--text-muted)", flexShrink: 0 }}>{open === i ? <ChevronUp size={16} /> : <ChevronDown size={16} />}</span>
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22 }} style={{ overflow: "hidden" }}>
                      <p style={{ color: "var(--text-muted)", fontSize: "0.8rem", lineHeight: 1.75, paddingBottom: "1.1rem" }}>{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

/* ============================================================
   PRICING CONTEXT — "what it takes to turn your backend..."
   ============================================================ */

// ─────────────────────────────────────────────────────────
//  PricingContext.jsx — updated
//  - Wider container (1100px), no more empty side space
//  - Bigger, properly padded form card
//  - Field labels, centered button, reply note
//  - Netlify Forms wired up (same setup as quiz-leads)
//
//  After deploying: Netlify dashboard → Forms → "contact"
//  → Form notifications → add your company email
// ─────────────────────────────────────────────────────────

const fieldLabel = {
  display: "block",
  fontSize: "0.6rem",
  fontWeight: 700,
  letterSpacing: "0.07em",
  textTransform: "uppercase",
  color: "var(--text-muted)",
  marginBottom: "5px",
};

const PricingContext = () => {
  const [nameVal, setNameVal] = useState("");
  const [businessVal, setBusinessVal] = useState("");
  const [emailVal, setEmailVal] = useState("");
  const [messageVal, setMessageVal] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const allFilled =
    nameVal.trim() && businessVal.trim() && emailVal.includes("@") && messageVal.trim();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!allFilled) return;
    setSending(true);

    const formData = new FormData();
    formData.append("form-name", "contact");
    formData.append("name", nameVal.trim());
    formData.append("business", businessVal.trim());
    formData.append("email", emailVal.trim());
    formData.append("message", messageVal.trim());

    try {
      await fetch("/", { method: "POST", body: formData });
    } catch (_) { }

    setSending(false);
    setSent(true);
  };

  return (
    <>
      <Bridge from="var(--dark)" to="var(--dark-2)" />

      {/* Hidden form for Netlify to detect at build time */}
      <form name="contact" data-netlify="true" hidden>
        <input type="hidden" name="form-name" value="contact" />
        <input name="name" />
        <input name="business" />
        <input name="email" />
        <textarea name="message" />
      </form>

      <section style={{ padding: "5rem 2rem 1rem", background: "var(--dark-2)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div
            className="pricing-wrap"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "4rem",
              alignItems: "center",
            }}
          >
            {/* ── Left copy ── */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2
                style={{
                  fontFamily: "var(--font)",
                  fontWeight: 900,
                  fontSize: "clamp(1.5rem, 3vw, 2.1rem)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.25,
                  marginBottom: "1.4rem",
                }}
              >
                what it takes to turn your backend into a revenue channel
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "0.83rem", lineHeight: 1.8, marginBottom: "0.85rem" }}>
                you could invest heavily and still end up waiting for direction.
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "0.83rem", lineHeight: 1.8, marginBottom: "0.85rem" }}>
                or go low cost and end up rebuilding everything later.
              </p>
              <p style={{ color: "var(--text)", fontSize: "0.85rem", lineHeight: 1.8, fontWeight: 500 }}>
                we sit where it actually works.
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "0.83rem", lineHeight: 1.8, marginTop: "0.6rem" }}>
                experienced strategy, hands on execution, and a system built to generate revenue consistently, not just exist in the background.
              </p>
            </motion.div>

            {/* ── Right: form card ── */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <div
                style={{
                  background: "",
                  padding: "2rem 2rem 1.75rem",
                }}
              >
                {sent ? (
                  /* ── Success state ── */
                  <div style={{ textAlign: "center", padding: "1.5rem 0" }}>
                    <div
                      style={{
                        width: "46px", height: "46px",
                        background: "var(--accent-light)",
                        borderRadius: "50%",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        margin: "0 auto 1rem",
                        color: "var(--accent)",
                      }}
                    >
                      <CheckCircle size={20} />
                    </div>
                    <div style={{ fontFamily: "var(--font)", fontWeight: 700, fontSize: "1.05rem", marginBottom: "0.4rem" }}>
                      message sent
                    </div>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.76rem", lineHeight: 1.7 }}>
                      we'll be in touch within 24 hours.
                    </p>
                  </div>
                ) : (
                  <>
                    {/* Form header */}
                    {/* Fields */}
                    <form onSubmit={handleSubmit}>
                      {/* Name + Business row */}
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.6rem", marginBottom: "0.85rem" }}>
                        <div>
                          <label style={fieldLabel}>Your name</label>
                          <input
                            type="text"
                            placeholder="Alex Smith"
                            value={nameVal}
                            onChange={(e) => setNameVal(e.target.value)}
                            style={inputStyle}
                          />
                        </div>
                        <div>
                          <label style={fieldLabel}>Business name</label>
                          <input
                            type="text"
                            placeholder="Acme Store"
                            value={businessVal}
                            onChange={(e) => setBusinessVal(e.target.value)}
                            style={inputStyle}
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div style={{ marginBottom: "0.85rem" }}>
                        <label style={fieldLabel}>Email address</label>
                        <input
                          type="email"
                          placeholder="you@yourbrand.com"
                          value={emailVal}
                          onChange={(e) => setEmailVal(e.target.value)}
                          style={inputStyle}
                        />
                      </div>

                      {/* Message */}
                      <div style={{ marginBottom: "0" }}>
                        <label style={fieldLabel}>How can we help?</label>
                        <textarea
                          rows={4}
                          placeholder="Tell us about your brand, current challenges, or what you're looking to fix…"
                          value={messageVal}
                          onChange={(e) => setMessageVal(e.target.value)}
                          style={{ ...inputStyle, resize: "none", lineHeight: 1.6 }}
                        />
                      </div>

                      {/* Centered submit */}
                      <div style={{ textAlign: "center", marginTop: "1.25rem" }}>
                        <button
                          type="submit"
                          disabled={sending || !allFilled}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            background: allFilled ? "var(--text)" : "var(--dark-4)",
                            color: allFilled ? "#fff" : "var(--text-muted)",
                            border: "none",
                            borderRadius: "100px",
                            padding: "0 28px",
                            height: "46px",
                            fontFamily: "var(--font)",
                            fontSize: "0.82rem",
                            fontWeight: 600,
                            cursor: allFilled ? "pointer" : "not-allowed",
                            opacity: sending ? 0.7 : 1,
                            transition: "all 0.2s",
                            width: "100%",
                            justifyContent: "center",
                          }}
                        >
                          {sending ? "Sending…" : "Send message"}
                          {!sending && <ArrowRight size={14} />}
                        </button>
                        <p style={{ marginTop: "9px", fontSize: "0.62rem", color: "var(--text-muted)" }}>
                          we typically reply within 24 hours
                        </p>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Responsive: stack on mobile */}
      <style>{`
        @media (max-width: 680px) {
          .pricing-wrap { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </>
  );
};

/* ============================================================
   FINAL CTA — audit slots, urgency, no form (visual on right)
   ============================================================ */
const FinalCTA = () => (
  <>
    <Bridge from="var(--dark-2)" to="var(--dark)" />
    <section id="cta-final" style={{ padding: "1rem 1.5rem 5rem", background: "var(--dark)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "700px", height: "400px", background: "radial-gradient(ellipse, rgba(128,168,255,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(128,168,255,0.12) 1px, transparent 1px)", backgroundSize: "44px 44px", pointerEvents: "none" }} />

      <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative" }}>
        <div
          className="cta-final-grid"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {/* Left: CTA content */}
          <div style={{ maxWidth: "600px" }}>
            <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              {/* Urgency pill */}
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(106, 255, 89, 0.35)", border: "1px solid rgba(103, 243, 99, 0.43)", borderRadius: "100px", padding: "0.3rem 0.85rem", marginBottom: "1.4rem", textAlign: "center" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#74f683", animation: "pulseGlow 2s ease-in-out infinite" }} />
                <span style={{ fontSize: "0.66rem", fontWeight: 600, color: "var(--text-muted)", letterSpacing: "0.04em" }}>availability this week: 2 left</span>
              </div>

              <h2 style={{ fontFamily: "var(--font)", fontWeight: 700, fontSize: "clamp(1.6rem, 4vw, 2.8rem)", letterSpacing: "-0.025em", lineHeight: 1.15, marginBottom: "1rem" }}>
                we only open a handful of live audit slots each week to keep every session hands-on
              </h2>

              <a href="https://calendly.com/kinzaqasim789/strategy-call-60-min" className="btn-primary" style={{ fontSize: "0.9rem", padding: "1rem 2rem", display: "inline-flex", alignItems: "center" }}>
                <PhoneCall size={15} /> secure your free audit
              </a>
              <p style={{ color: "var(--text-muted)", fontSize: "0.7rem", marginTop: "0.75rem" }}>no commitment · no sales pressure · just your audit</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  </>
);

/* ============================================================
   SOCIAL PROOF MARQUEE
   ============================================================ */
const testimonials = [
  { role: "cmo", text: "went from $8k/month in email to $63k in 90 days. the attribution clarity alone changed how we think about our whole marketing mix." },
  { role: "founder", text: "our previous agency sent blasts. launchbackend built us an actual system. the win-back flow alone pays for the retainer 4× over." },
  { role: "head of growth ", text: "segmentation work in month one unlocked a customer segment we didn't know existed. $120k from that segment last quarter." },
  { role: "ceo", text: "we were burning $40k/mo on facebook to drive repeat purchases. now email does that job and cac dropped 60%." },
  { role: "director", text: "open rates went from 18% to 51%. customers actually reply to our emails now. the copy is on another level." },
  { role: "founder", text: "built our entire lifecycle marketing in 3 weeks. every automation continues to generate revenue without us touching it." },
];

const TestCard = ({ t }) => (
  <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: "1.1rem", width: "280px", flexShrink: 0, boxShadow: "var(--shadow)" }}>
    <div style={{ display: "flex", marginBottom: "0.5rem" }}>
      {[...Array(5)].map((_, i) => <span key={i} style={{ color: "var(--accent)", fontSize: "0.68rem" }}>★</span>)}
    </div>
    <p style={{ color: "var(--text-soft)", fontSize: "0.76rem", lineHeight: 1.65, marginBottom: "0.7rem" }}>"{t.text}"</p>
    <div style={{ borderTop: "1px solid var(--border)", paddingTop: "0.55rem" }}>
      <div style={{ fontWeight: 600, fontSize: "0.72rem" }}>{t.name}</div>
      <div style={{ fontSize: "0.64rem", color: "var(--text-muted)", marginTop: "0.08rem" }}>{t.role}</div>
    </div>
  </div>
);

const SocialProof = () => {
  const half = Math.ceil(testimonials.length / 2);
  return (
    <>
      <Bridge from="var(--dark)" to="var(--dark-2)" />
      <section style={{ padding: "4.5rem 0 6rem", background: "var(--dark-2)", overflow: "hidden" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "0 1.5rem", textAlign: "center", marginBottom: "2.5rem" }}>
          <motion.h2 initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ fontFamily: "var(--font)", fontWeight: 700, fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.02em" }}>
            brands that trusted the system
          </motion.h2>
        </div>
        <div style={{ overflow: "hidden", marginBottom: "0.65rem" }}>
          <div className="marquee-row fwd">{[...testimonials.slice(0, half), ...testimonials.slice(0, half)].map((t, i) => <TestCard key={i} t={t} />)}</div>
        </div>
        <div style={{ overflow: "hidden" }}>
          <div className="marquee-row rev">{[...testimonials.slice(half), ...testimonials.slice(half)].map((t, i) => <TestCard key={i} t={t} />)}</div>
        </div>
      </section>
    </>
  );
};
<form name="contact" netlify netlify-honeypot="bot-field" hidden>
  <input type="text" name="name" />
  <input type="email" name="email" />
  <input type="text" name="brand" />
  <input type="text" name="website" />
  <select name="service"></select>
  <textarea name="message"></textarea>
</form>

/* ============================================================
   PAGE EXPORT
   ============================================================ */
export default function Home() {
  return (
    <>
      <GlobalStyles />
      <main>
        <Hero />
        <Ticker />
        <Pain />
        <Services />
        <RevenueSystem />
        <Outcome />
        <Quiz />
        <WhatHappensNext />
        <FAQ />
        <PricingContext />
        <SocialProof />
        <FinalCTA />
      </main>
    </>
  );
}