import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PhoneCall, Mail, CheckCircle, AlertCircle, Clock, Send } from "lucide-react";

/* ──────────────────────────────────────────────
   HOW FORM REPLIES WORK (Netlify):
   ─────────────────────────────────────────────
   This form uses Netlify Forms (zero backend needed).
   When deployed to Netlify:
   1. Netlify detects the data-netlify="true" attribute
   2. Submissions appear in your Netlify dashboard under:
      Site → Forms → "contact"
   3. You can set up email notifications in:
      Netlify dashboard → Forms → Notifications
      → Add notification → Email notification
      → Enter YOUR email address
   4. You'll get an email every time someone submits.
   
   NO server, NO API keys, NO backend required.
   Just deploy to Netlify and enable email notifications.
   ─────────────────────────────────────────────── */

const SERVICES = [
  "Full Email Program Management",
  "Klaviyo Setup & Migration",
  "Flow Build (Welcome / Abandon / Winback)",
  "Monthly Campaign Management",
  "Email Copywriting Only",
  "Strategy Audit",
  "Other",
];

const BUDGETS = [
  "< $1,000/mo",
  "$1,000 – $3,000/mo",
  "$3,000 – $6,000/mo",
  "$6,000+/mo",
  "Not sure yet",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "", email: "", brand: "", website: "",
    service: "", budget: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    /* ─────────────────────────────────────────────
       Netlify Forms submission (works on Netlify hosting).
       The form is also rendered as a hidden HTML form below
       so Netlify can detect it at build time.
       ───────────────────────────────────────────── */
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

        @media (max-width: 820px) {
          .contact-layout { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ─── Netlify invisible form (required for Netlify to detect form at build time) ─── */}
      <form name="contact" data-netlify="true" netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="text" name="brand" />
        <input type="text" name="website" />
        <select name="service"></select>
        <select name="budget"></select>
        <textarea name="message"></textarea>
      </form>

      {/* Hero */}
      <section style={{
        padding: "7rem 1.5rem 4rem",
        background: "linear-gradient(180deg, var(--bg-3) 0%, var(--bg) 100%)",
        textAlign: "center",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)", width: "500px", height: "300px", background: "radial-gradient(ellipse, rgba(142,193,222,0.2) 0%, transparent 70%)", pointerEvents: "none" }} />
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
          <span style={{ display: "inline-block", background: "var(--accent-light)", border: "1px solid var(--accent-border)", color: "var(--accent)", fontSize: "0.65rem", fontWeight: 700, padding: "0.28rem 0.85rem", borderRadius: "100px", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "1.2rem" }}>Contact</span>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 3.8rem)", lineHeight: 1.1, letterSpacing: "-0.025em", marginBottom: "1rem" }}>
            Let's build your email system
          </h1>
          <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", maxWidth: "440px", margin: "0 auto", lineHeight: 1.75 }}>
            Tell us about your brand. We'll review your details and get back to you within 24 hours.
          </p>
        </motion.div>
      </section>

      {/* Main */}
      <section style={{ padding: "3rem 1.5rem 7rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div className="contact-layout">

            {/* Left sidebar */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 }}>
              {/* Book a call */}
              <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: "1.5rem", marginBottom: "1rem", borderLeft: "3px solid var(--accent)" }}>
                <div style={{ display: "flex", gap: "0.65rem", alignItems: "flex-start" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "var(--accent-light)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)", flexShrink: 0 }}>
                    <PhoneCall size={15} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.3rem" }}>Book a free call</div>
                    <p style={{ fontSize: "0.74rem", color: "var(--text-muted)", lineHeight: 1.65, marginBottom: "0.75rem" }}>Prefer to talk? Book a 30-min strategy call — no pitch, no pressure.</p>
                    <a href="https://calendly.com" target="_blank" rel="noreferrer" style={{
                      display: "inline-flex", alignItems: "center", gap: "0.35rem",
                      background: "var(--accent)", color: "#fff",
                      borderRadius: "100px", padding: "0.55rem 1.1rem",
                      fontSize: "0.74rem", fontWeight: 600, textDecoration: "none",
                    }}>
                      <PhoneCall size={11} /> Book on Calendly
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", gap: "0.65rem", alignItems: "center" }}>
                  <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "rgba(142,193,222,0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent-3)", flexShrink: 0 }}>
                    <Mail size={13} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.72rem", fontWeight: 600, color: "var(--text)", marginBottom: "0.1rem" }}>Email directly</div>
                    <a href="mailto:hello@launchbackend.com" style={{ fontSize: "0.72rem", color: "var(--accent)", textDecoration: "none" }}>hello@launchbackend.com</a>
                  </div>
                </div>
              </div>

              {/* Response time */}
              <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", gap: "0.65rem", alignItems: "center" }}>
                  <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "rgba(206,181,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent-2)", flexShrink: 0 }}>
                    <Clock size={13} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.72rem", fontWeight: 600, color: "var(--text)", marginBottom: "0.1rem" }}>Response time</div>
                    <div style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>Within 24 hours</div>
                  </div>
                </div>
              </div>

              {/* Netlify note */}
              <div style={{ background: "var(--bg-2)", border: "1px dashed var(--border)", borderRadius: "var(--radius)", padding: "1.1rem" }}>
                <div style={{ fontSize: "0.68rem", fontWeight: 700, color: "var(--text-muted)", marginBottom: "0.4rem", textTransform: "uppercase", letterSpacing: "0.07em" }}>📬 Where replies go</div>
                <p style={{ fontSize: "0.72rem", color: "var(--text-muted)", lineHeight: 1.65 }}>
                  Form submissions are delivered to your inbox via <strong>Netlify Forms</strong>. Set up email notifications in your Netlify dashboard under <em>Site → Forms → Notifications</em>.
                </p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div key="success" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
                    style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "20px", padding: "3rem 2rem", textAlign: "center" }}>
                    <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 0.5 }}>
                      <CheckCircle size={48} style={{ color: "var(--accent-3)", margin: "0 auto 1.25rem" }} />
                    </motion.div>
                    <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", color: "var(--text)", marginBottom: "0.75rem" }}>Message received!</h2>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.84rem", lineHeight: 1.75, maxWidth: "340px", margin: "0 auto 1.5rem" }}>
                      Thanks for reaching out. We'll review your details and be in touch within 24 hours.
                    </p>
                    <a href="https://calendly.com" target="_blank" rel="noreferrer" style={{
                      display: "inline-flex", alignItems: "center", gap: "0.4rem",
                      background: "var(--accent)", color: "#fff",
                      borderRadius: "100px", padding: "0.72rem 1.4rem",
                      fontSize: "0.8rem", fontWeight: 600, textDecoration: "none",
                    }}>
                      <PhoneCall size={13} /> Also book a call
                    </a>
                  </motion.div>
                ) : (
                  <motion.div key="form">
                    <form
                      onSubmit={handleSubmit}
                      style={{
                        background: "#fff",
                        border: "1px solid var(--border)",
                        borderRadius: "20px",
                        padding: "2rem",
                        boxShadow: "var(--shadow)",
                      }}
                    >
                      {/* Hidden Netlify fields */}
                      <input type="hidden" name="form-name" value="contact" />
                      <input name="bot-field" style={{ display: "none" }} />

                      <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", color: "var(--text)", marginBottom: "1.5rem" }}>Tell us about your brand</h2>

                      {/* Name + Email */}
                      <div className="form-row" style={{ marginBottom: "1rem" }}>
                        <div>
                          <label style={labelStyle}>Full name *</label>
                          <input
                            type="text" name="name" required
                            value={formData.name} onChange={handleChange}
                            placeholder="Jane Smith"
                            style={inputStyle}
                          />
                        </div>
                        <div>
                          <label style={labelStyle}>Email address *</label>
                          <input
                            type="email" name="email" required
                            value={formData.email} onChange={handleChange}
                            placeholder="jane@yourbrand.com"
                            style={inputStyle}
                          />
                        </div>
                      </div>

                      {/* Brand + Website */}
                      <div className="form-row" style={{ marginBottom: "1rem" }}>
                        <div>
                          <label style={labelStyle}>Brand name *</label>
                          <input
                            type="text" name="brand" required
                            value={formData.brand} onChange={handleChange}
                            placeholder="Your Brand"
                            style={inputStyle}
                          />
                        </div>
                        <div>
                          <label style={labelStyle}>Website</label>
                          <input
                            type="url" name="website"
                            value={formData.website} onChange={handleChange}
                            placeholder="https://yourbrand.com"
                            style={inputStyle}
                          />
                        </div>
                      </div>

                      {/* Service */}
                      <div style={{ marginBottom: "1rem" }}>
                        <label style={labelStyle}>What do you need? *</label>
                        <select
                          name="service" required
                          value={formData.service} onChange={handleChange}
                          style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}
                        >
                          <option value="">Select a service...</option>
                          {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>

                      {/* Budget */}
                      <div style={{ marginBottom: "1rem" }}>
                        <label style={labelStyle}>Monthly budget range *</label>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
                          {BUDGETS.map(b => (
                            <button
                              key={b}
                              type="button"
                              onClick={() => setFormData(prev => ({ ...prev, budget: b }))}
                              style={{
                                fontSize: "0.72rem", fontWeight: 500,
                                padding: "0.4rem 0.85rem", borderRadius: "100px",
                                border: `1px solid ${formData.budget === b ? "var(--accent)" : "var(--border)"}`,
                                background: formData.budget === b ? "var(--accent-light)" : "#fff",
                                color: formData.budget === b ? "var(--accent)" : "var(--text-muted)",
                                cursor: "pointer", transition: "all 0.15s",
                                fontFamily: "var(--font-sans)",
                              }}
                            >{b}</button>
                          ))}
                        </div>
                      </div>

                      {/* Message */}
                      <div style={{ marginBottom: "1.5rem" }}>
                        <label style={labelStyle}>Tell us more about your brand & goals *</label>
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
                          <span style={{ fontSize: "0.76rem", color: "#B91C1C" }}>Something went wrong. Please try emailing us directly at hello@launchbackend.com</span>
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
                        onMouseEnter={e => { if (!loading) { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 26px rgba(128,168,255,0.45)"; }}}
                        onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
                      >
                        {loading ? "Sending..." : <><Send size={14} /> Send message</>}
                      </button>

                      <p style={{ fontSize: "0.68rem", color: "var(--text-muted)", textAlign: "center", marginTop: "0.75rem" }}>
                        No spam. No commitment. Just a conversation.
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