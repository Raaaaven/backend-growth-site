import { useState } from "react";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("all");

  const cards = [
    { tags: ["campaign","welcome"], brand: "Lumière Beauty", title: "Skin Ritual Welcome Series", rate: "46% open rate · 9.2% CTR", cardTags: ["Welcome","Campaign","Beauty"],
      preview: (
        <div className="em em-1">
          <div className="em-1-header"><div className="em-1-logo">LUMIÈRE</div><div className="em-1-nav"><span>Shop</span><span>Skincare</span><span>Sale</span></div></div>
          <div className="em-1-hero">
            <div className="em-1-kicker">Your skin deserves this</div>
            <div className="em-1-h">Discover your <em>ritual</em></div>
            <div style={{fontSize:"9px",color:"#7a5a3a",marginBottom:"6px"}}>Curated by skin type.</div>
            <div className="em-1-btn">SHOP THE EDIT</div>
          </div>
          <div className="em-1-products">
            <div className="em-1-prod"><div className="em-1-prod-img"></div><div className="em-1-prod-name">Glow Serum</div><div className="em-1-prod-price">$68</div></div>
            <div className="em-1-prod"><div className="em-1-prod-img" style={{background:"linear-gradient(135deg,#E8D0C0,#D4B098)"}}></div><div className="em-1-prod-name">Cream Elixir</div><div className="em-1-prod-price">$92</div></div>
          </div>
        </div>
      )
    },
    { tags: ["campaign","flow"], brand: "Edge Athletics", title: "Flash Sale — 48-Hour Campaign", rate: "53% open rate · 14.1% CTR", cardTags: ["Campaign","Flash Sale"],
      preview: (
        <div className="em em-2">
          <div className="em-2-header"><div className="em-2-logo">EDGE</div><div className="em-2-badge">FLASH SALE</div></div>
          <div className="em-2-hero">
            <div className="em-2-kicker">48 hours only</div>
            <div className="em-2-h">Train harder.<br/>Spend less.</div>
            <div className="em-2-sub">Up to 40% off performance gear — while stock lasts.</div>
            <div className="em-2-btn">CLAIM YOUR DISCOUNT</div>
          </div>
          <div className="em-2-stats">
            <div className="em-2-stat"><div className="em-2-stat-n">40%</div><div className="em-2-stat-l">Off Gear</div></div>
            <div className="em-2-stat"><div className="em-2-stat-n">48H</div><div className="em-2-stat-l">Only</div></div>
            <div className="em-2-stat"><div className="em-2-stat-n">Free</div><div className="em-2-stat-l">Shipping</div></div>
          </div>
        </div>
      )
    },
    { tags: ["winback","flow"], brand: "Bloom Skincare", title: "Win-Back Flow — Lapsed Subscribers", rate: "38% open rate · 11.8% CTR", cardTags: ["Win-Back","Flow"],
      preview: (
        <div className="em em-3">
          <div className="em-3-header"><div className="em-3-logo">Bloom</div><div className="em-3-sub">Beauty Box</div></div>
          <div className="em-3-hero">
            <div className="em-3-kicker">We miss you</div>
            <div className="em-3-h">Your skin has been <strong>waiting</strong></div>
            <div style={{fontSize:"9px",color:"#8a6aaa",marginBottom:"10px"}}>Come back &amp; save 25%</div>
            <div className="em-3-btn">REDEEM MY OFFER</div>
          </div>
          <div className="em-3-items">
            <div className="em-3-item"><div className="em-3-item-circle" style={{background:"#FDE8F0"}}></div><div className="em-3-item-name">Vitamin C</div></div>
            <div className="em-3-item"><div className="em-3-item-circle" style={{background:"#EDE0F8"}}></div><div className="em-3-item-name">Retinol</div></div>
            <div className="em-3-item"><div className="em-3-item-circle" style={{background:"#E0EEF8"}}></div><div className="em-3-item-name">Hyaluronic</div></div>
          </div>
        </div>
      )
    },
    { tags: ["welcome","flow"], brand: "FreshCycle Foods", title: "Welcome Flow — New Subscriber Onboarding", rate: "61% open rate · 18.4% CTR", cardTags: ["Welcome","Flow","Food"],
      preview: (
        <div className="em em-4">
          <div className="em-4-header"><div className="em-4-logo">Fresh<span>Cycle</span></div><div className="em-4-tag">NEW MEMBER</div></div>
          <div className="em-4-hero">
            <div className="em-4-kicker">Welcome to the family</div>
            <div className="em-4-h">Good food, <em>delivered fresh.</em></div>
            <div style={{fontSize:"9px",color:"#3a5a2a",marginBottom:"8px"}}>First box 30% off.</div>
            <div className="em-4-btn">PICK MY PLAN</div>
          </div>
          <div className="em-4-plans">
            <div className="em-4-plan"><div className="em-4-plan-name">Starter</div><div className="em-4-plan-price">$49</div><div className="em-4-plan-unit">/week</div></div>
            <div className="em-4-plan featured"><div className="em-4-plan-name">Family ★</div><div className="em-4-plan-price">$79</div><div className="em-4-plan-unit">/week</div></div>
            <div className="em-4-plan"><div className="em-4-plan-name">Premium</div><div className="em-4-plan-price">$119</div><div className="em-4-plan-unit">/week</div></div>
          </div>
        </div>
      )
    },
    { tags: ["campaign","flow"], brand: "Nomad Gear", title: "Waitlist Drop — Back in Stock", rate: "71% open rate · 22.6% CTR", cardTags: ["Campaign","Drop Launch"],
      preview: (
        <div className="em em-5">
          <div className="em-5-header"><div className="em-5-logo-mark">NX</div><div className="em-5-logo-text">Nomad Gear</div></div>
          <div className="em-5-hero">
            <div className="em-5-kicker"><span className="em-5-kd"></span><span className="em-5-kt">New Drop Available</span></div>
            <div className="em-5-h">Your next adventure starts here</div>
            <div className="em-5-sub">The Nomad Pro backpack is back. 4,000 on the waitlist — you're one of them.</div>
            <div className="em-5-btn">Get Early Access →</div>
          </div>
          <div className="em-5-metrics">
            <div className="em-5-metric"><div className="em-5-mn">4K</div><div className="em-5-ml">Waitlist</div></div>
            <div className="em-5-metric"><div className="em-5-mn">48H</div><div className="em-5-ml">Access</div></div>
            <div className="em-5-metric"><div className="em-5-mn">$120K</div><div className="em-5-ml">Last Drop</div></div>
          </div>
        </div>
      )
    },
    { tags: ["campaign","winback"], brand: "Luxe Living", title: "Private Client Sale — VIP Campaign", rate: "49% open rate · 15.3% CTR", cardTags: ["Campaign","VIP","Luxury"],
      preview: (
        <div className="em em-6">
          <div className="em-6-header"><div className="em-6-logo">LUXE LIVING</div><div className="em-6-tagline">Curated interiors since 2012</div></div>
          <div className="em-6-hero">
            <div className="em-6-corner"></div>
            <div className="em-6-kicker">Private client preview</div>
            <div className="em-6-h">Some things are only<br/>offered once.</div>
            <div className="em-6-sub">Exclusive access · 24 hours only</div>
            <div className="em-6-btn">VIEW PRIVATE SALE</div>
          </div>
          <div className="em-6-strip">
            <div className="em-6-strip-item"><div className="em-6-strip-n">60+</div><div className="em-6-strip-l">Pieces</div></div>
            <div className="em-6-strip-item"><div className="em-6-strip-n">30%</div><div className="em-6-strip-l">Off</div></div>
            <div className="em-6-strip-item"><div className="em-6-strip-n">24H</div><div className="em-6-strip-l">Only</div></div>
          </div>
        </div>
      )
    },
  ];

  const filtered = cards.filter(c => activeTab === "all" || c.tags.includes(activeTab));

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --accent: #80A8FF; --accent2: #CEB5FF; --accent3: #8EC1DE; --accent-soft: #D3D3FF;
          --accent-glow: rgba(128,168,255,0.13); --accent-border: rgba(128,168,255,0.3);
          --dark: #F5F6FF; --dark2: #EDEEFF; --dark3: #ffffff; --dark4: #E6E8FF;
          --text: #1A1B2E; --muted: #6B7280; --soft: #4B5268; --border: rgba(128,168,255,0.18);
          --shadow: 0 4px 24px rgba(128,168,255,0.13);
          --serif: 'Instrument Serif', Georgia, serif; --sans: 'DM Sans', system-ui, sans-serif;
        }
        html { scroll-behavior: smooth; }
        body { background: var(--dark); color: var(--text); font-family: var(--sans); overflow-x: hidden; -webkit-font-smoothing: antialiased; }
        ::selection { background: var(--accent); color: #fff; }
        ::-webkit-scrollbar { width: 3px; } ::-webkit-scrollbar-track { background: var(--dark); } ::-webkit-scrollbar-thumb { background: var(--accent); border-radius: 2px; }

        /* TICKER */
        .ticker-wrap { background: var(--dark2); border-bottom: 1px solid var(--border); overflow: hidden; padding: 8px 0; }
        .ticker-inner { display: flex; width: max-content; animation: ticker 30s linear infinite; }
        @keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .ticker-item { display: flex; align-items: center; gap: 8px; padding: 0 28px; font-size: 11px; font-weight: 500; color: var(--muted); white-space: nowrap; }
        .ticker-dot { color: var(--accent); font-size: 14px; }

        /* HERO */
        .hero { min-height: 82vh; display: flex; align-items: center; padding: 4rem clamp(1.5rem,5vw,4rem); position: relative; overflow: hidden; background: linear-gradient(160deg, var(--dark4) 0%, var(--dark) 60%); }
        .hero::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse 60% 70% at 75% 50%, rgba(128,168,255,0.1) 0%, transparent 70%); }
        .hero-grid { max-width: 1200px; margin: 0 auto; width: 100%; display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center; }
        .hero-pill { display: inline-flex; align-items: center; gap: 6px; background: var(--accent-glow); border: 1px solid var(--accent-border); color: var(--accent); font-size: 11px; font-weight: 600; padding: 5px 12px; border-radius: 100px; letter-spacing: 0.06em; text-transform: uppercase; margin-bottom: 1.5rem; }
        .hero-pill-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--accent); animation: pulse 2s ease-in-out infinite; }
        @keyframes pulse { 0%,100% { opacity:1; transform:scale(1); } 50% { opacity:0.5; transform:scale(0.8); } }
        .hero h1 { font-family: var(--serif); font-size: clamp(2.4rem,5.5vw,4.4rem); line-height: 1.08; letter-spacing: -0.02em; margin-bottom: 1.4rem; color: var(--text); }
        .hero h1 em { font-style: italic; color: var(--accent); }
        .hero p { color: var(--soft); font-size: 15px; line-height: 1.75; max-width: 440px; margin-bottom: 2rem; }
        .hero-highlight { color: var(--accent); font-weight: 600; }
        .hero-btns { display: flex; gap: 12px; align-items: center; flex-wrap: wrap; }
        .btn-cta { background: var(--accent); color: #fff; font-family: var(--sans); font-size: 12px; font-weight: 600; padding: 8px 18px; border-radius: 100px; border: none; cursor: pointer; text-decoration: none; transition: transform 0.2s, box-shadow 0.2s; display: inline-block; }
        .btn-cta:hover { transform: translateY(-2px); box-shadow: 0 8px 26px rgba(128,168,255,0.42); }
        .btn-outline { display: inline-flex; align-items: center; gap: 6px; background: transparent; color: var(--text); font-family: var(--sans); font-size: 12px; font-weight: 600; padding: 9px 20px; border-radius: 100px; border: 1px solid var(--border); cursor: pointer; text-decoration: none; transition: border-color 0.2s, background 0.2s; }
        .btn-outline:hover { border-color: var(--accent-border); background: var(--accent-glow); }

        /* HERO ILLUSTRATION */
        .hero-art { position: relative; display: flex; justify-content: center; align-items: center; height: 420px; }
        .robot-body { width: 120px; height: 160px; background: var(--dark4); border: 2px solid var(--border); border-radius: 16px; position: relative; display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: 0 0 40px rgba(128,168,255,0.18); }
        .robot-head { width: 90px; height: 80px; background: #fff; border: 2px solid var(--accent-border); border-radius: 12px; position: absolute; top: -50px; left: 50%; transform: translateX(-50%); display: flex; align-items: center; justify-content: center; flex-direction: column; gap: 6px; box-shadow: var(--shadow); }
        .robot-eye { font-family: var(--serif); font-size: 28px; font-weight: 700; color: var(--accent); line-height: 1; }
        .robot-mouth { width: 30px; height: 3px; background: var(--accent); border-radius: 2px; opacity: 0.6; }
        .antenna { position: absolute; top: -70px; left: 50%; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; }
        .antenna-stick { width: 2px; height: 18px; background: var(--muted); }
        .antenna-ball { width: 7px; height: 7px; border-radius: 50%; background: var(--accent); animation: blink 1.5s ease-in-out infinite; }
        @keyframes blink { 0%,100% { opacity:1; } 50% { opacity:0.3; } }
        .robot-arm { position: absolute; bottom: 30px; width: 80%; display: flex; justify-content: center; }
        .package { width: 50px; height: 40px; background: var(--accent-glow); border: 1px solid var(--accent-border); border-radius: 6px; display: flex; align-items: center; justify-content: center; color: var(--accent2); font-size: 18px; }
        .email-float { position: absolute; display: flex; flex-direction: column; gap: 3px; background: #fff; border: 1px solid var(--border); border-radius: 8px; padding: 8px 12px; font-size: 11px; animation: float 4s ease-in-out infinite; box-shadow: var(--shadow); }
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        .ef1 { top:10%; left:5%; animation-delay:0s; } .ef2 { top:15%; right:3%; animation-delay:1s; } .ef3 { bottom:22%; left:0; animation-delay:2s; } .ef4 { bottom:15%; right:5%; animation-delay:0.5s; }
        .ef-from { color: var(--muted); font-size: 10px; }
        .ef-subject { color: var(--text); font-weight: 600; font-size: 11px; max-width: 140px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .ef-bar { height: 3px; border-radius: 2px; background: var(--dark4); margin-top: 3px; position: relative; overflow: hidden; }
        .env { position: absolute; width: 28px; height: 22px; border: 1.5px solid var(--accent-border); border-radius: 4px; background: var(--dark4); }
        .e1{top:5%;left:30%;animation:drift 6s ease-in-out infinite} .e2{top:60%;right:15%;animation:drift 5s ease-in-out infinite 1s} .e3{bottom:5%;left:45%;animation:drift 7s ease-in-out infinite 2s} .e4{top:30%;right:2%;animation:drift 5.5s ease-in-out infinite 0.5s}
        @keyframes drift { 0%,100% { transform:rotate(12deg) translateY(0); } 50% { transform:rotate(12deg) translateY(-12px); } }
        .ring { position: absolute; border-radius: 50%; border: 1px dashed rgba(128,168,255,0.2); top: 50%; left: 50%; transform: translate(-50%,-50%); }

        /* DIVIDER MARQUEE */
        .divider { padding: 14px 0; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); overflow: hidden; background: var(--dark2); }
        .mq-inner { display: flex; width: max-content; animation: mq 25s linear infinite; }
        @keyframes mq { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .mq-item { display: flex; align-items: center; gap: 8px; padding: 0 24px; font-size: 11px; font-weight: 600; color: var(--muted); text-transform: uppercase; letter-spacing: 0.08em; white-space: nowrap; }
        .mq-item span { color: var(--accent); }

        /* PORTFOLIO */
        .portfolio { padding: 5rem clamp(1.5rem,5vw,4rem); background: var(--dark); }
        .portfolio-inner { max-width: 1200px; margin: 0 auto; }
        .section-header { text-align: center; margin-bottom: 3.5rem; }
        .section-pill { display: inline-block; background: var(--accent-glow); border: 1px solid var(--accent-border); color: var(--accent); font-size: 10px; font-weight: 600; padding: 4px 12px; border-radius: 100px; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 1rem; }
        .section-title { font-family: var(--serif); font-size: clamp(1.8rem,4vw,3rem); letter-spacing: -0.02em; line-height: 1.12; margin-bottom: 0.8rem; color: var(--text); }
        .section-sub { color: var(--soft); font-size: 14px; max-width: 480px; margin: 0 auto; line-height: 1.7; }
        .filter-tabs { display: flex; gap: 6px; justify-content: center; flex-wrap: wrap; margin-bottom: 3rem; }
        .tab { background: #fff; border: 1px solid var(--border); color: var(--muted); font-family: var(--sans); font-size: 12px; font-weight: 600; padding: 7px 18px; border-radius: 100px; cursor: pointer; transition: all 0.2s; }
        .tab:hover { border-color: var(--accent); color: var(--accent); background: var(--accent-glow); }
        .tab.active { background: var(--accent); border-color: var(--accent); color: #fff; }
        .email-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
        .email-card { background: #fff; border: 1px solid var(--border); border-radius: 16px; overflow: hidden; cursor: pointer; transition: transform 0.25s, border-color 0.25s, box-shadow 0.25s; animation: fadein 0.4s ease both; }
        @keyframes fadein { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
        .email-card:hover { transform: translateY(-4px); border-color: var(--accent-border); box-shadow: 0 16px 40px rgba(128,168,255,0.18); }
        .card-preview { height: 280px; overflow: hidden; position: relative; }
        .card-meta { padding: 1rem 1.1rem; border-top: 1px solid var(--border); }
        .card-brand { font-size: 11px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: var(--accent); margin-bottom: 4px; }
        .card-title { font-size: 13px; font-weight: 600; color: var(--text); margin-bottom: 4px; line-height: 1.35; }
        .card-tags { display: flex; gap: 5px; flex-wrap: wrap; margin-top: 8px; }
        .tag { font-size: 10px; font-weight: 600; padding: 2px 8px; border-radius: 100px; background: var(--accent-glow); color: var(--accent); border: 1px solid var(--accent-border); }
        .card-rate { font-size: 11px; color: var(--soft); margin-top: 6px; display: flex; align-items: center; gap: 4px; }
        .rate-dot { width: 5px; height: 5px; border-radius: 50%; background: #4ade80; flex-shrink: 0; }
        .em { height: 100%; padding: 16px; font-family: var(--sans); display: flex; flex-direction: column; gap: 10px; }
        .btn-load { background: transparent; border: 1px solid var(--border); color: var(--soft); font-family: var(--sans); font-size: 13px; font-weight: 600; padding: 12px 28px; border-radius: 100px; cursor: pointer; transition: all 0.2s; margin-top: 3rem; display: block; margin-left: auto; margin-right: auto; }
        .btn-load:hover { border-color: var(--accent-border); color: var(--accent); background: var(--accent-glow); }

        /* EMAIL PREVIEW INTERNALS — unchanged from original */
        .em-1{background:#FAF8F5;color:#1a1a1a}.em-1-header{display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #e8e0d8;padding-bottom:10px}.em-1-logo{font-size:14px;font-weight:700;letter-spacing:2px;color:#2d1e16;font-family:var(--serif)}.em-1-nav{display:flex;gap:10px}.em-1-nav span{font-size:9px;color:#7a6a5a;font-weight:600;text-transform:uppercase}.em-1-hero{background:linear-gradient(135deg,#F5E6D3,#FADDB6);border-radius:8px;padding:18px;text-align:center}.em-1-kicker{font-size:9px;letter-spacing:0.1em;text-transform:uppercase;color:#B07742;font-weight:700;margin-bottom:6px}.em-1-h{font-family:var(--serif);font-size:18px;color:#2d1e16;line-height:1.2;margin-bottom:8px}.em-1-h em{color:#C4703A;font-style:italic}.em-1-btn{display:inline-block;background:#C4703A;color:#fff;font-size:10px;font-weight:700;padding:7px 18px;border-radius:100px;text-transform:uppercase;margin-top:6px}.em-1-products{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:8px}.em-1-prod{background:#fff;border-radius:6px;padding:8px;text-align:center}.em-1-prod-img{width:100%;height:40px;background:linear-gradient(135deg,#F5DFD0,#EFC9A8);border-radius:4px;margin-bottom:5px}.em-1-prod-name{font-size:9px;color:#4a3826;font-weight:600}.em-1-prod-price{font-size:9px;color:#C4703A;font-weight:700}
        .em-2{background:#0F0F0F;color:#fff}.em-2-header{display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #222;padding-bottom:10px}.em-2-logo{font-size:13px;font-weight:800;letter-spacing:4px;color:#fff;text-transform:uppercase}.em-2-badge{background:#FF3C3C;color:#fff;font-size:8px;font-weight:800;padding:2px 7px;border-radius:2px;text-transform:uppercase}.em-2-hero{background:#181818;border-radius:6px;padding:14px;border:1px solid #2a2a2a}.em-2-kicker{font-size:8px;color:#FF3C3C;font-weight:800;letter-spacing:0.15em;text-transform:uppercase;margin-bottom:6px}.em-2-h{font-size:20px;font-weight:800;line-height:1.1;text-transform:uppercase;margin-bottom:8px}.em-2-sub{font-size:9px;color:#888;line-height:1.5;margin-bottom:10px}.em-2-btn{display:inline-block;background:#FF3C3C;color:#fff;font-size:9px;font-weight:800;padding:7px 16px;border-radius:3px;text-transform:uppercase}.em-2-stats{display:grid;grid-template-columns:1fr 1fr 1fr;gap:4px;margin-top:8px}.em-2-stat{background:#1f1f1f;border-radius:4px;padding:7px;text-align:center}.em-2-stat-n{font-size:13px;font-weight:800;color:#FF3C3C}.em-2-stat-l{font-size:7.5px;color:#666;text-transform:uppercase}
        .em-3{background:#F8F4FB;color:#2a1a3e}.em-3-header{text-align:center;border-bottom:1px solid #E8DCF4;padding-bottom:10px}.em-3-logo{font-family:var(--serif);font-size:16px;font-style:italic;color:#7B4FA6}.em-3-sub{font-size:8px;color:#B089CC;letter-spacing:0.12em;text-transform:uppercase;font-weight:600}.em-3-hero{background:linear-gradient(145deg,#EDE0F8,#F5ECF9);border-radius:10px;padding:16px;text-align:center;margin-top:6px}.em-3-kicker{font-size:8px;color:#9B59B6;font-weight:700;text-transform:uppercase;margin-bottom:4px}.em-3-h{font-family:var(--serif);font-size:17px;line-height:1.25;color:#2a1a3e;margin-bottom:8px}.em-3-h strong{color:#7B4FA6}.em-3-btn{display:inline-block;background:#7B4FA6;color:#fff;font-size:9px;font-weight:700;padding:7px 18px;border-radius:100px}.em-3-items{display:flex;gap:6px;margin-top:8px}.em-3-item{flex:1;background:rgba(255,255,255,0.8);border-radius:7px;padding:8px 6px;text-align:center;border:1px solid rgba(123,79,166,0.12)}.em-3-item-circle{width:30px;height:30px;border-radius:50%;margin:0 auto 5px;border:1.5px solid rgba(123,79,166,0.2)}.em-3-item-name{font-size:8px;color:#5a3a7a;font-weight:700}
        .em-4{background:#FAFEF6;color:#1a2e0e}.em-4-header{display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #D8EFC4;padding-bottom:10px}.em-4-logo{font-size:13px;font-weight:700;color:#2D5A1A}.em-4-logo span{color:#5AA832}.em-4-tag{background:#5AA832;color:#fff;font-size:8px;font-weight:700;padding:2px 8px;border-radius:3px;text-transform:uppercase}.em-4-hero{background:linear-gradient(135deg,#E8F5D6,#C8E69A);border-radius:8px;padding:14px}.em-4-kicker{font-size:8px;color:#2D5A1A;font-weight:700;text-transform:uppercase;margin-bottom:5px}.em-4-h{font-family:var(--serif);font-size:16px;color:#1a2e0e;line-height:1.25;margin-bottom:7px}.em-4-h em{color:#3A8020;font-style:italic}.em-4-btn{display:inline-block;background:#3A8020;color:#fff;font-size:9px;font-weight:700;padding:6px 16px;border-radius:100px}.em-4-plans{display:grid;grid-template-columns:1fr 1fr 1fr;gap:5px;margin-top:8px}.em-4-plan{background:#fff;border-radius:5px;padding:7px 5px;text-align:center;border:1px solid #D8EFC4}.em-4-plan.featured{background:#E8F5D6;border-color:#5AA832}.em-4-plan-name{font-size:8px;font-weight:700;color:#2D5A1A;margin-bottom:2px}.em-4-plan-price{font-size:12px;font-weight:800;color:#3A8020}.em-4-plan-unit{font-size:8px;color:#6a8a5a}
        .em-5{background:#0D1117;color:#E6EDF3}.em-5-header{display:flex;align-items:center;gap:6px;border-bottom:1px solid #21262D;padding-bottom:10px}.em-5-logo-mark{width:22px;height:22px;border-radius:4px;background:linear-gradient(135deg,#58A6FF,#3B82F6);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;color:#fff}.em-5-logo-text{font-size:12px;font-weight:700;color:#E6EDF3}.em-5-hero{background:#161B22;border:1px solid #30363D;border-radius:8px;padding:14px;margin-top:6px}.em-5-kicker{display:flex;align-items:center;gap:5px;margin-bottom:8px}.em-5-kd{width:7px;height:7px;border-radius:50%;background:#3FB950}.em-5-kt{font-size:9px;color:#3FB950;font-weight:700;text-transform:uppercase}.em-5-h{font-size:15px;font-weight:700;line-height:1.3;color:#E6EDF3;margin-bottom:6px}.em-5-sub{font-size:9px;color:#8B949E;line-height:1.55;margin-bottom:10px}.em-5-btn{display:inline-block;background:#238636;color:#fff;font-size:9px;font-weight:700;padding:6px 14px;border-radius:6px;border:1px solid #2EA043}.em-5-metrics{display:flex;gap:6px;margin-top:8px}.em-5-metric{flex:1;background:#161B22;border:1px solid #21262D;border-radius:6px;padding:8px;text-align:center}.em-5-mn{font-size:14px;font-weight:700;color:#58A6FF}.em-5-ml{font-size:8px;color:#8B949E;margin-top:2px}
        .em-6{background:#0C0C08;color:#F5F0E0}.em-6-header{text-align:center;border-bottom:1px solid #2A2615;padding-bottom:10px}.em-6-logo{font-family:var(--serif);font-size:15px;color:#D4B868;letter-spacing:0.18em;text-transform:uppercase}.em-6-tagline{font-size:7px;color:#7A6840;letter-spacing:0.2em;text-transform:uppercase;margin-top:2px}.em-6-hero{background:linear-gradient(145deg,#181508,#221E0A);border:1px solid #2A2615;border-radius:8px;padding:16px;text-align:center;margin-top:6px;position:relative}.em-6-corner{position:absolute;top:0;right:0;width:0;height:0;border-left:30px solid transparent;border-top:30px solid #D4B868}.em-6-kicker{font-size:8px;color:#D4B868;letter-spacing:0.2em;text-transform:uppercase;font-weight:600;margin-bottom:6px}.em-6-h{font-family:var(--serif);font-size:16px;line-height:1.25;color:#F5F0E0;margin-bottom:4px}.em-6-sub{font-size:8px;color:#7A6840;margin-bottom:10px}.em-6-btn{display:inline-block;background:transparent;color:#D4B868;font-size:9px;font-weight:700;padding:6px 18px;border-radius:2px;border:1px solid #D4B868;text-transform:uppercase}.em-6-strip{display:flex;justify-content:center;gap:14px;margin-top:10px;border-top:1px solid #2A2615;padding-top:10px}.em-6-strip-item{text-align:center}.em-6-strip-n{font-family:var(--serif);font-size:14px;color:#D4B868}.em-6-strip-l{font-size:8px;color:#4A3A14;text-transform:uppercase}

        /* CTA BAND */
        .cta-band { padding: 5rem clamp(1.5rem,5vw,4rem); background: var(--dark2); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
        .cta-inner { max-width: 680px; margin: 0 auto; text-align: center; }
        .cta-badge { display: inline-flex; align-items: center; gap: 6px; background: var(--accent-glow); border: 1px solid var(--accent-border); color: var(--accent); font-size: 11px; font-weight: 700; padding: 5px 14px; border-radius: 100px; letter-spacing: 0.06em; text-transform: uppercase; margin-bottom: 1.5rem; }
        .cta-h { font-family: var(--serif); font-size: clamp(2rem,5vw,3.6rem); line-height: 1.08; letter-spacing: -0.02em; margin-bottom: 1rem; color: var(--text); }
        .cta-h em { font-style: italic; color: var(--accent); }
        .cta-p { color: var(--soft); font-size: 14px; line-height: 1.75; margin-bottom: 2rem; max-width: 400px; margin-left: auto; margin-right: auto; }
        .cta-sub { font-size: 12px; color: var(--muted); margin-top: 1rem; }

        @media (max-width: 900px) { .hero-grid { grid-template-columns: 1fr; gap: 2rem; } .hero-art { height: 300px; } .email-grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 580px) { .email-grid { grid-template-columns: 1fr; } }
      `}</style>

      {/* TICKER */}
      <div className="ticker-wrap">
        <div className="ticker-inner">
          {["50+ e-commerce brands served","Average 3.8× revenue lift in 90 days","Klaviyo Certified Partner","$12M+ email-attributed revenue generated","Open rates 2× industry average",
            "50+ e-commerce brands served","Average 3.8× revenue lift in 90 days","Klaviyo Certified Partner","$12M+ email-attributed revenue generated","Open rates 2× industry average"].map((item,i) => (
            <div key={i} className="ticker-item"><span className="ticker-dot">✦</span>{item}</div>
          ))}
        </div>
      </div>

      {/* HERO */}
      <section className="hero">
        <div className="hero-grid">
          <div>
            <div className="hero-pill"><span className="hero-pill-dot"></span>Email Portfolio 2025</div>
            <h1>Emails that look great and <em>actually</em> get opened.</h1>
            <p>A curated library of <span className="hero-highlight">high-converting</span> campaigns, flows, and sequences — engineered for revenue, not just pretty pixels.</p>
            <div className="hero-btns">
              <a href="#portfolio" className="btn-cta">View Work ↓</a>
              <a href="#contact" className="btn-outline">Book a Call</a>
            </div>
          </div>
          <div className="hero-art">
            <div className="ring" style={{width:"320px",height:"320px"}}></div>
            <div className="ring" style={{width:"200px",height:"200px",borderColor:"rgba(128,168,255,0.1)"}}></div>
            <div className="env e1"></div><div className="env e2"></div><div className="env e3"></div><div className="env e4"></div>
            <div className="email-float ef1">
              <div className="ef-from">from: hello@bloomskin.co</div>
              <div className="ef-subject">Your offer expires tonight 🌙</div>
              <div className="ef-bar"><span style={{width:"78%",background:"var(--accent)",position:"absolute",left:0,top:0,height:"100%",borderRadius:"2px"}}></span></div>
            </div>
            <div className="email-float ef2">
              <div className="ef-from">from: team@edgeathletics.co</div>
              <div className="ef-subject">We made something just for you</div>
              <div className="ef-bar"><span style={{width:"52%",background:"var(--accent)",position:"absolute",left:0,top:0,height:"100%",borderRadius:"2px"}}></span></div>
            </div>
            <div className="email-float ef3">
              <div className="ef-from">from: noreply@luxeliving.com</div>
              <div className="ef-subject">You left something behind…</div>
              <div className="ef-bar"><span style={{width:"91%",background:"var(--accent)",position:"absolute",left:0,top:0,height:"100%",borderRadius:"2px"}}></span></div>
            </div>
            <div className="email-float ef4">
              <div className="ef-from">from: hi@freshcycle.io</div>
              <div className="ef-subject">Welcome to the family 🎉</div>
              <div className="ef-bar"><span style={{width:"66%",background:"var(--accent)",position:"absolute",left:0,top:0,height:"100%",borderRadius:"2px"}}></span></div>
            </div>
            <div style={{position:"relative",zIndex:2,display:"flex",justifyContent:"center"}}>
              <div className="robot-body">
                <div className="robot-head">
                  <div className="antenna"><div className="antenna-ball"></div><div className="antenna-stick"></div></div>
                  <div className="robot-eye">LB</div>
                  <div className="robot-mouth"></div>
                </div>
                <div style={{fontSize:"24px",marginTop:"20px"}}>📬</div>
                <div className="robot-arm"><div className="package">✉</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BRIDGE */}
      <div style={{height:"2px",background:"linear-gradient(90deg,transparent,rgba(128,168,255,0.4),transparent)"}}></div>
      <div style={{height:"56px",background:"linear-gradient(180deg,var(--dark) 0%,var(--dark2) 100%)"}}></div>

      {/* MARQUEE */}
      <div className="divider">
        <div className="mq-inner">
          {["Welcome Series","Abandoned Cart","Win-Back","Flash Campaigns","Post-Purchase","VIP Sequences","Browse Abandon","Replenishment",
            "Welcome Series","Abandoned Cart","Win-Back","Flash Campaigns","Post-Purchase","VIP Sequences","Browse Abandon","Replenishment"].map((item,i) => (
            <div key={i} className="mq-item"><span>✦</span>{item}</div>
          ))}
        </div>
      </div>

      {/* PORTFOLIO GRID */}
      <section className="portfolio" id="portfolio">
        <div className="portfolio-inner">
          <div className="section-header">
            <div className="section-pill">Selected Work</div>
            <h2 className="section-title">Emails that earn their place in the inbox</h2>
            <p className="section-sub">Every design is built around one thing: driving revenue predictably.</p>
          </div>
          <div className="filter-tabs">
            {[["all","All Work"],["campaign","Campaigns"],["flow","Flows"],["winback","Win-Back"],["welcome","Welcome"]].map(([val,label]) => (
              <button key={val} className={`tab${activeTab === val ? " active" : ""}`} onClick={() => setActiveTab(val)}>{label}</button>
            ))}
          </div>
          <div className="email-grid">
            {filtered.map((card,i) => (
              <div key={i} className="email-card">
                <div className="card-preview">{card.preview}</div>
                <div className="card-meta">
                  <div className="card-brand">{card.brand}</div>
                  <div className="card-title">{card.title}</div>
                  <div className="card-rate"><span className="rate-dot"></span>{card.rate}</div>
                  <div className="card-tags">{card.cardTags.map(t => <span key={t} className="tag">{t}</span>)}</div>
                </div>
              </div>
            ))}
          </div>
          <button className="btn-load">Load More Work ↓</button>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="cta-band">
        <div className="cta-inner">
          <div className="cta-badge">✦ Free 30-Minute Audit</div>
          <h2 className="cta-h">Ready to turn your list into <em>revenue?</em></h2>
          <p className="cta-p">Get a free email revenue audit. We'll show you exactly how much you're leaving on the table.</p>
          <a href="#contact" className="btn-cta" style={{fontSize:"14px",padding:"13px 28px"}}>📞 Book a Free Call</a>
          <div className="cta-sub">No commitment. No sales pressure. Just clarity.</div>
        </div>
      </section>
    </>
  );
}
