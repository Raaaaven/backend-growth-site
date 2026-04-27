import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PhoneCall, Mail, CheckCircle, AlertCircle, Clock, Send, ArrowRight } from "lucide-react";

/* ──────────────────────────────────────────────
   FORM SUBMISSIONS → YOUR PAID EMAIL (Netlify):
   ─────────────────────────────────────────────
   1. Deploy to Netlify (not Hostinger — Netlify Forms
      only works on Netlify hosting).
   2. In Netlify Dashboard → Your Site → Forms
      → click "contact" form → "Form notifications"
      → "Add notification" → "Email notification"
      → Enter your Hostinger paid email address.
   3. Every submission will now arrive in your inbox.
      No backend, no API keys needed.
   ─────────────────────────────────────────────── */

const SERVICES = [
  "full email program management",
  "klaviyo setup & migration",
  "flow build (welcome / abandon / winback)",
  "monthly campaign management",
  "email copywriting only",
  "strategy audit",
  "other",
];

const STATS = [
  { value: "30–50%", label: "of ecom revenue should come from email" },
  { value: "48hrs", label: "average response time" },
  { value: "100%", label: "done-for-you, we work inside your klaviyo" },
];

const FAQS = [
  {
    q: "do you work with brands on other ESPs?",
    a: "we specialise in klaviyo. if you're on another platform, we can migrate you as part of onboarding.",
  },
  {
    q: "what size brands do you work with?",
    a: "mostly 6–8 figure DTC brands with an existing list. if you're earlier stage, the audit call is still worth it.",
  },
  {
    q: "how long until we see results?",
    a: "most brands see meaningful revenue lift within the first 30 days after flows are live.",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "", email: "", brand: "", website: "",
    service: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const body = new URLSearchParams({
        "form-name": "contact",
        ...formData,
      }).toString();

      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    width: "100%",
    background: "#fff",
    border: "1px solid var(--border)",
    borderRadius: "10px",
    padding: "0.72rem 1rem",
    fontSize: "0.82rem",
    color: "var(--text)",
    fontFamily: "var(--font-sans)",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
  };

  const labelStyle = {
    display: "block",
    fontSize: "0.72rem",
    fontWeight: 600,
    color: "var(--text-soft)",
    marginBottom: "0.4rem",
    letterSpacing: "0.02em",
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');

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
          --font-sans:     'Poppins', system-ui, sans-serif;
          --font-display:  'Poppins', system-ui, sans-serif;
        }

        html { scroll-behavior: smooth; }
        body {
          background: var(--bg);
          color: var(--text);
          font-family: var(--font-sans);
          -webkit-font-smoothing: antialiased;
        }

        ::selection { background: var(--accent); color: #fff; }

        input:focus, textarea:focus, select:focus {
          border-color: var(--accent) !important;
          box-shadow: 0 0 0 3px rgba(128,168,255,0.15) !important;
        }

        input::placeholder, textarea::placeholder {
          color: #A0A3B1;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .contact-layout {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 3rem;
          align-items: start;
        }

        .sidebar-sticky {
          position: sticky;
          top: 2rem;
        }

        .faq-item {
          border-bottom: 1px solid var(--border);
          padding: 0.85rem 0;
          cursor: pointer;
        }
        .faq-item:last-child { border-bottom: none; }

        .faq-q {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text);
          gap: 0.5rem;
        }

        .faq-a {
          font-size: 0.72rem;
          color: var(--text-muted);
          line-height: 1.7;
          margin-top: 0.5rem;
        }

        .stat-card {
          text-align: center;
          padding: 1rem 0.5rem;
        }

        @media (max-width: 820px) {
          .contact-layout { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
          .sidebar-sticky { position: static !important; }
        }
      `}</style>

      {/* ─── Netlify invisible form (required at build time) ─── */}
      <form name="contact" netlify netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="text" name="brand" />
        <input type="text" name="website" />
        <select name="service"></select>
        <textarea name="message"></textarea>
      </form>

      {/* ─── Hero ─── */}
      <section style={{
        padding: "7rem 1.5rem 1rem",
        background: "linear-gradient(180deg, var(--bg-3) 0%, var(--bg) 100%)",
        textAlign: "center",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)", width: "500px", height: "300px", background: "radial-gradient(ellipse, rgba(142,193,222,0.2) 0%, transparent 70%)", pointerEvents: "none" }} />
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 3.6rem)", lineHeight: 1.1, letterSpacing: "-0.025em", marginBottom: "1.1rem" }}>
            let's talk about your<br /><em>backend revenue</em>
          </h1>
          <p style={{ color: "var(--text-soft)", fontSize: "0.88rem", maxWidth: "500px", margin: "0 auto 0.75rem", lineHeight: 1.8 }}>
            if your email system is not generating consistent revenue, there is usually a reason and it's almost always inside your flows, segmentation, or post-purchase structure.
            we review that with you directly inside your klaviyo account and show you exactly what is working, what is not, and what needs to change first.
          </p>
          <div>
            <a
              href="https://calendly.com/kinzaqasim789/strategy-call-60-min"
              target="_blank"
              rel="noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem", background: "var(--accent)", color: "#fff", borderRadius: "100px", padding: "0.98rem 1.4rem", fontSize: "0.84rem", fontWeight: 600, textDecoration: "none", marginTop: "0.22rem", marginBottom: "0.75rem" }}
            >
              <PhoneCall size={11} /> book your free audit
            </a>
            <p style={{ fontSize: "0.74rem", color: "var(--text-muted)", lineHeight: 1.65, marginBottom: "0.75rem", textTransform: "lowercase" }}>
              Fastest way to get clarity. We review your Klaviyo live, find gaps, and spot opportunities.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ─── Main ─── */}
      <section style={{ padding: "1rem 1.5rem 7rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div className="contact-layout">

            {/* ── Left sidebar ── */}
            <motion.div
              className="sidebar-sticky"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
            >

              {/* Email */}
              <div style={{ background: "#fff", border: "1px solid var(--border)", borderLeft: "3px solid var(--accent)", borderRadius: "var(--radius)", padding: "1.25rem 1.5rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", gap: "0.65rem", alignItems: "center" }}>
                  <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "rgba(142,193,222,0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent-3)", flexShrink: 0 }}>
                    <Mail size={15} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.72rem", fontWeight: 900, color: "var(--text)", marginBottom: "0.1rem" }}>email us directly</div>
                    <a href="mailto:kinza@launchbackend.online" style={{ fontSize: "0.72rem", color: "var(--accent)", textDecoration: "none" }}>kinza@launchbackend.online</a>
                    <div style={{ fontSize: "0.68rem", color: "var(--text-muted)", marginTop: "0.2rem" }}>we typically respond within 24–48 hours.</div>
                  </div>
                </div>
              </div>

              {/* Response time */}
              <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: "1.25rem 1.5rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", gap: "0.65rem", alignItems: "center" }}>
                  <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "rgba(206,181,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent-2)", flexShrink: 0 }}>
                    <Clock size={15} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.72rem", fontWeight: 900, color: "var(--text)", marginBottom: "0.1rem" }}>response time</div>
                    <div style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>within 24–48 hours</div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: "1.25rem 1.5rem", marginBottom: "1rem" }}>
                <div style={{ fontSize: "0.72rem", fontWeight: 800, color: "var(--text)", marginBottom: "1rem" }}>by the numbers</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                  {STATS.map((s, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                      <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "var(--accent)", lineHeight: 1.2, minWidth: "60px" }}>{s.value}</div>
                      <div style={{ fontSize: "0.68rem", color: "var(--text-muted)", lineHeight: 1.55, paddingTop: "0.1rem" }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: "1.25rem 1.5rem", marginBottom: "1rem" }}>
                <div style={{ fontSize: "0.72rem", fontWeight: 900, color: "var(--text)", marginBottom: "0.75rem" }}>quick answers</div>
                {FAQS.map((faq, i) => (
                  <div key={i} className="faq-item" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    <div className="faq-q">
                      <span>{faq.q}</span>
                      <ArrowRight size={12} style={{ flexShrink: 0, transform: openFaq === i ? "rotate(90deg)" : "none", transition: "transform 0.2s", color: "var(--accent)" }} />
                    </div>
                    {openFaq === i && <div className="faq-a">{faq.a}</div>}
                  </div>
                ))}
              </div>


            </motion.div>

            {/* ── Form ── */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div key="success" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
                    style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "20px", padding: "3rem 2rem", textAlign: "center" }}>
                    <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 0.5 }}>
                      <CheckCircle size={48} style={{ color: "var(--accent-3)", margin: "0 auto 1.25rem" }} />
                    </motion.div>
                    <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", color: "var(--text)", marginBottom: "0.75rem" }}>message received!</h2>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.84rem", lineHeight: 1.75, maxWidth: "340px", margin: "0 auto 1.5rem" }}>
                      thanks for reaching out. we'll review your details and be in touch within 24–48 hours.
                    </p>
                    <a href="https://calendly.com/kinzaqasim789/strategy-call-60-min" target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", background: "var(--accent)", color: "#fff", borderRadius: "100px", padding: "0.72rem 1.4rem", fontSize: "0.8rem", fontWeight: 600, textDecoration: "none" }}>
                      <PhoneCall size={13} /> also book a free audit call
                    </a>
                  </motion.div>
                ) : (
                  <motion.div key="form">
                    <form
                      name="contact"
                      method="POST"
                      data-netlify="true"
                      onSubmit={handleSubmit}
                      style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "20px", padding: "2rem", boxShadow: "var(--shadow)" }}
                    >
                      <input type="hidden" name="form-name" value="contact" />
                      <input name="bot-field" style={{ display: "none" }} />

                      <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", color: "var(--text)", marginBottom: "0.5rem" }}>have a general question?</h2>
                      <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                        partnership idea, or need more info before booking? reach out below.
                      </p>

                      <hr style={{ border: "none", borderTop: "1px solid var(--border)", marginBottom: "1.5rem" }} />

                      {/* Name + Email */}
                      <div className="form-row" style={{ marginBottom: "1rem" }}>
                        <div>
                          <label style={labelStyle}>full name *</label>
                          <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="jane smith" style={inputStyle} />
                        </div>
                        <div>
                          <label style={labelStyle}>email address *</label>
                          <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="jane@yourbrand.com" style={inputStyle} />
                        </div>
                      </div>

                      {/* Brand + Website */}
                      <div className="form-row" style={{ marginBottom: "1rem" }}>
                        <div>
                          <label style={labelStyle}>brand name *</label>
                          <input type="text" name="brand" required value={formData.brand} onChange={handleChange} placeholder="your brand" style={inputStyle} />
                        </div>
                        <div>
                          <label style={labelStyle}>website</label>
                          <input type="url" name="website" value={formData.website} onChange={handleChange} placeholder="https://yourbrand.com" style={inputStyle} />
                        </div>
                      </div>

                      {/* Service */}
                      <div style={{ marginBottom: "1rem" }}>
                        <label style={labelStyle}>what do you need? *</label>
                        <select name="service" required value={formData.service} onChange={handleChange} style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}>
                          <option value="">select a service...</option>
                          {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>

                      {/* Message */}
                      <div style={{ marginBottom: "1.5rem" }}>
                        <label style={labelStyle}>tell us about your brand & goals *</label>
                        <textarea
                          name="message" required rows={4}
                          value={formData.message} onChange={handleChange}
                          placeholder="We're a 7-figure DTC skincare brand. We have 45K subscribers on Klaviyo but our flow revenue is under 20%. We want to fix that..."
                          style={{ ...inputStyle, resize: "vertical", minHeight: "110px", lineHeight: 1.65 }}
                        />
                      </div>

                      {error && (
                        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", background: "rgba(248,113,113,0.1)", border: "1px solid rgba(248,113,113,0.3)", borderRadius: "10px", padding: "0.75rem 1rem", marginBottom: "1rem" }}>
                          <AlertCircle size={14} style={{ color: "#F87171", flexShrink: 0 }} />
                          <span style={{ fontSize: "0.76rem", color: "#B91C1C" }}>something went wrong. please email us directly at kinza@launchbackend.online</span>
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={loading}
                        style={{
                          display: "flex", alignItems: "center", justifyContent: "center", gap: "0.45rem",
                          width: "100%", background: loading ? "var(--text-muted)" : "var(--accent)",
                          color: "#fff", border: "none", borderRadius: "100px",
                          padding: "0.88rem 1.5rem", fontSize: "0.85rem", fontWeight: 600,
                          cursor: loading ? "not-allowed" : "pointer",
                          transition: "transform 0.2s, box-shadow 0.2s",
                          fontFamily: "var(--font-sans)",
                        }}
                        onMouseEnter={e => { if (!loading) { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 26px rgba(128,168,255,0.45)"; } }}
                        onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
                      >
                        {loading ? "sending..." : <><Send size={14} /> send message</>}
                      </button>

                      <p style={{ fontSize: "0.68rem", color: "var(--text-muted)", textAlign: "center", marginTop: "0.75rem" }}>
                        no spam. no commitment. just a conversation.
                      </p>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}