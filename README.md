# miscomm-courier
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Miscomm Logistics — Columbus, Ohio</title>
  <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800;900&family=Barlow:wght@300;400;500&display=swap" rel="stylesheet" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --black: #080b0f;
      --charcoal: #111518;
      --steel: #1a1f26;
      --mid: #252b34;
      --accent: #e8a020;
      --accent-dark: #c4851a;
      --blue: #2563eb;
      --blue-light: rgba(37,99,235,0.12);
      --white: #f2f0eb;
      --muted: #7a8291;
      --border: rgba(232,160,32,0.15);
      --border-blue: rgba(37,99,235,0.28);
    }

    html { scroll-behavior: smooth; }
    body {
      background: var(--black);
      color: var(--white);
      font-family: 'Barlow', sans-serif;
      font-weight: 400;
      line-height: 1.6;
      overflow-x: hidden;
    }

    @keyframes fadeDown { from { opacity:0; transform:translateY(-16px); } to { opacity:1; transform:none; } }
    @keyframes fadeUp   { from { opacity:0; transform:translateY(28px);  } to { opacity:1; transform:none; } }
    @keyframes ticker   { from { transform:translateX(0); } to { transform:translateX(-50%); } }
    @keyframes pulse    { 0%,100%{opacity:1;} 50%{opacity:0.4;} }

    /* NAV */
    nav {
      position:fixed; top:0; left:0; right:0; z-index:100;
      display:flex; align-items:center; justify-content:space-between;
      padding:1rem 4rem;
      background:rgba(8,11,15,0.96);
      backdrop-filter:blur(18px);
      border-bottom:1px solid var(--border);
      animation:fadeDown 0.7s ease both;
    }
    .nav-logo {
      font-family:'Barlow Condensed',sans-serif;
      font-weight:900; font-size:1.55rem; letter-spacing:0.08em;
      color:var(--white); text-decoration:none;
    }
    .nav-logo span { color:var(--accent); }
    .nav-links { display:flex; gap:2rem; list-style:none; align-items:center; }
    .nav-links a {
      font-family:'Barlow Condensed',sans-serif;
      font-weight:600; font-size:0.8rem;
      letter-spacing:0.18em; text-transform:uppercase;
      color:var(--muted); text-decoration:none; transition:color 0.2s;
    }
    .nav-links a:hover { color:var(--accent); }
    .nav-cta {
      background:var(--accent); color:var(--black) !important;
      padding:0.5rem 1.3rem; font-weight:800 !important;
      transition:background 0.2s !important;
    }
    .nav-cta:hover { background:var(--accent-dark) !important; }

    /* HERO BANNER — full width photo */
    .hero-banner {
      position:relative; width:100%;
      height:480px; overflow:hidden;
      margin-top:62px;
    }
    .hero-banner img {
      width:100%; height:100%;
      object-fit:cover; object-position:center 28%;
      filter:brightness(0.72);
    }
    .hero-banner-overlay {
      position:absolute; inset:0;
      background:linear-gradient(
        to bottom,
        rgba(8,11,15,0.1) 0%,
        rgba(8,11,15,0.05) 25%,
        rgba(8,11,15,0.65) 75%,
        rgba(8,11,15,1) 100%
      );
    }
    .hero-banner-content {
      position:absolute; bottom:0; left:0; right:0;
      padding:2.2rem 4rem;
      display:flex; align-items:flex-end; justify-content:space-between;
      gap:2rem; flex-wrap:wrap;
    }
    .hero-banner-left { animation:fadeUp 0.8s 0.2s ease both; }
    .hero-name {
      font-family:'Barlow Condensed',sans-serif;
      font-weight:900; font-size:clamp(2rem,4vw,3.2rem);
      letter-spacing:0.03em; text-transform:uppercase;
      line-height:1; margin-bottom:0.3rem;
    }
    .hero-name span { color:var(--accent); }
    .hero-role { font-size:0.97rem; color:rgba(242,240,235,0.75); margin-bottom:0.25rem; }
    .hero-location {
      font-family:'Barlow Condensed',sans-serif;
      font-weight:700; font-size:0.72rem;
      letter-spacing:0.2em; text-transform:uppercase; color:var(--accent);
    }
    .hero-banner-right {
      display:flex; gap:0.45rem; flex-wrap:wrap; justify-content:flex-end;
      animation:fadeUp 0.8s 0.35s ease both;
    }
    .twic-pill {
      background:var(--blue);
      padding:0.36rem 0.88rem;
      font-family:'Barlow Condensed',sans-serif;
      font-weight:800; font-size:0.67rem;
      letter-spacing:0.15em; text-transform:uppercase;
      color:#fff; display:flex; align-items:center; gap:0.38rem;
    }
    .banner-cert {
      padding:0.36rem 0.88rem;
      background:rgba(232,160,32,0.15);
      border:1px solid rgba(232,160,32,0.3);
      font-family:'Barlow Condensed',sans-serif;
      font-weight:700; font-size:0.64rem;
      letter-spacing:0.13em; text-transform:uppercase;
      color:var(--accent); backdrop-filter:blur(6px);
    }

    /* HERO — tagline + CTA */
    .hero {
      padding:4rem 4rem 5rem;
      display:grid; grid-template-columns:1.2fr 0.8fr;
      align-items:center; gap:4rem;
      position:relative; overflow:hidden;
    }
    .hero-bg-grid {
      position:absolute; inset:0; pointer-events:none;
      background-image:
        linear-gradient(rgba(232,160,32,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(232,160,32,0.03) 1px, transparent 1px);
      background-size:68px 68px;
    }
    .hero-glow {
      position:absolute; top:-10%; right:-5%;
      width:600px; height:600px;
      background:radial-gradient(circle, rgba(232,160,32,0.06) 0%, transparent 65%);
      pointer-events:none;
    }
    .hero-left { position:relative; z-index:1; animation:fadeUp 0.9s 0.15s ease both; }
    .eyebrow {
      display:flex; align-items:center; gap:0.9rem;
      font-family:'Barlow Condensed',sans-serif;
      font-weight:700; font-size:0.73rem;
      letter-spacing:0.3em; text-transform:uppercase;
      color:var(--accent); margin-bottom:1.5rem;
    }
    .eyebrow-line { width:32px; height:2px; background:var(--accent); flex-shrink:0; }
    .hero-title {
      font-family:'Barlow Condensed',sans-serif;
      font-weight:900;
      font-size:clamp(3.5rem,6.5vw,7rem);
      line-height:0.9; letter-spacing:-0.01em;
      text-transform:uppercase; margin-bottom:1.8rem;
    }
    .hero-title .amber { color:var(--accent); }
    .hero-title .outline {
      -webkit-text-stroke:2px rgba(242,240,235,0.55);
      color:transparent;
    }
    .hero-desc {
      font-size:1rem; color:var(--muted);
      max-width:480px; line-height:1.78; margin-bottom:2.5rem;
    }
    .hero-actions { display:flex; gap:1rem; align-items:center; flex-wrap:wrap; }
    .btn-primary {
      background:var(--accent); color:var(--black);
      padding:0.9rem 2rem;
      font-family:'Barlow Condensed',sans-serif;
      font-weight:800; font-size:0.86rem;
      letter-spacing:0.18em; text-transform:uppercase;
      text-decoration:none; border:none; cursor:pointer;
      transition:background 0.2s, transform 0.15s; display:inline-block;
    }
    .btn-primary:hover { background:var(--accent-dark); transform:translateY(-2px); }
    .btn-ghost {
      color:var(--white);
      font-family:'Barlow Condensed',sans-serif;
      font-weight:700; font-size:0.83rem;
      letter-spacing:0.15em; text-transform:uppercase;
      text-decoration:none; padding:0.9rem 1.8rem;
      border:1px solid rgba(255,255,255,0.14);
      transition:border-color 0.2s, color 0.2s;
    }
    .btn-ghost:hover { border-color:var(--accent); color:var(--accent); }

    /* Certs summary card */
    .hero-right { position:relative; z-index:1; animation:fadeUp 0.9s 0.35s ease both; }
    .stats-card {
      background:var(--steel); border:1px solid var(--border);
      padding:2.2rem; position:relative;
    }
    .stats-card::before {
      content:''; position:absolute; top:0; left:0;
      width:3px; height:100%; background:var(--accent);
    }
    .stats-card-title {
      font-family:'Barlow Condensed',sans-serif;
      font-weight:800; font-size:0.72rem;
      letter-spacing:0.22em; text-transform:uppercase;
      color:var(--accent); margin-bottom:1.4rem;
    }
    .cert-row {
      display:flex; align-items:center; justify-content:space-between;
      padding:0.75rem 0; border-bottom:1px solid var(--border);
    }
    .cert-row:last-child { border-bottom:none; }
    .cert-row-name {
      font-family:'Barlow Condensed',sans-serif;
      font-weight:700; font-size:0.9rem;
      letter-spacing:0.05em; text-transform:uppercase;
    }
    .cert-row-sub { font-size:0.72rem; color:var(--muted); }
    .cert-row-check {
      width:22px; height:22px; border-radius:50%; flex-shrink:0;
      background:rgba(74,222,128,0.13);
      border:1px solid rgba(74,222,128,0.35);
      display:flex; align-items:center; justify-content:center;
      font-size:0.6rem; color:#4ade80;
    }
    .mini-certs { display:flex; flex-wrap:wrap; gap:0.45rem; }
    .mini-cert {
      display:flex; align-items:center; gap:0.35rem;
      padding:0.28rem 0.65rem;
      background:rgba(232,160,32,0.07);
      border:1px solid rgba(232,160,32,0.18);
      font-family:'Barlow Condensed',sans-serif;
      font-weight:700; font-size:0.63rem;
      letter-spacing:0.12em; text-transform:uppercase; color:var(--accent);
    }
    .mini-cert.blue { background:var(--blue-light); border-color:var(--border-blue); color:#93c5fd; }

    /* TICKER */
    .ticker { background:var(--accent); overflow:hidden; padding:0.6rem 0; }
    .ticker-track {
      display:flex; width:max-content;
      animation:ticker 34s linear infinite;
    }
    .ticker-item {
      font-family:'Barlow Condensed',sans-serif;
      font-weight:800; font-size:0.8rem;
      letter-spacing:0.2em; text-transform:uppercase;
      color:var(--black); padding:0 2.2rem;
      display:flex; align-items:center; gap:1.4rem; white-space:nowrap;
    }
    .ticker-sep { opacity:0.3; }

    /* SECTION BASE */
    .section { padding:7rem 4rem; }
    .section-eyebrow {
      display:flex; align-items:center; gap:0.8rem;
      font-family:'Barlow Condensed',sans-serif;
      font-weight:700; font-size:0.72rem;
      letter-spacing:0.3em; text-transform:uppercase;
      color:var(--accent); margin-bottom:0.9rem;
    }
    .section-eyebrow::before { content:''; width:26px; height:2px; background:var(--accent); }
    .section-title {
      font-family:'Barlow Condensed',sans-serif;
      font-weight:900; font-size:clamp(2.2rem,4.5vw,4rem);
      line-height:0.93; text-transform:uppercase;
    }
    .section-title span { color:var(--accent); }
    .section-desc {
      color:var(--muted); font-size:0.95rem;
      line-height:1.75; max-width:520px; margin-top:0.9rem;
    }

    /* SERVICES */
    .services-grid {
      display:grid; grid-template-columns:repeat(3,1fr);
      border:1px solid var(--border); gap:1px; background:var(--border);
      margin-top:3.5rem;
    }
    .service-card {
      background:var(--charcoal); padding:2.5rem 2.1rem;
      position:relative; overflow:hidden; transition:background 0.3s;
    }
    .service-card:hover { background:var(--steel); }
    .service-card::after {
      content:''; position:absolute; bottom:0; left:0;
      width:0; height:3px; background:var(--accent);
      transition:width 0.4s ease;
    }
    .service-card:hover::after { width:100%; }
    .service-num {
      position:absolute; top:1.4rem; right:1.5rem;
      font-family:'Barlow Condensed',sans-serif; font-weight:900;
      font-size:4.5rem; color:rgba(232,160,32,0.05); line-height:1;
    }
    .service-icon { font-size:1.9rem; margin-bottom:1.2rem; display:block; }
    .service-title {
      font-family:'Barlow Condensed',sans-serif;
      font-weight:800; font-size:1.2rem;
      letter-spacing:0.06em; text-transform:uppercase; margin-bottom:0.6rem;
    }
    .service-desc { color:var(--muted); font-size:0.87rem; line-height:1.65; }
    .stag {
      display:inline-block; margin-top:0.9rem;
      font-family:'Barlow Condensed',sans-serif; font-weight:700;
      font-size:0.62rem; letter-spacing:0.15em; text-transform:uppercase;
      padding:0.25rem 0.62rem;
      background:rgba(232,160,32,0.09); border:1px solid rgba(232,160,32,0.2);
      color:var(--accent);
    }
    .stag + .stag { margin-left:0.3rem; }
    .stag.blue { background:var(--blue-light); border-color:var(--border-blue); color:#93c5fd; }

    /* CERTIFICATIONS */
    .certs-section { background:var(--charcoal); }
    .certs-layout {
      display:grid; grid-template-columns:1fr 1fr;
      gap:3.5rem; align-items:start; margin-top:3.5rem;
    }
    .cert-grid { display:grid; grid-template-columns:1fr 1fr; gap:1rem; }
    .cert-card {
      background:var(--steel); border:1px solid var(--border);
      padding:1.7rem 1.4rem; position:relative;
      transition:border-color 0.3s, transform 0.2s;
    }
    .cert-card:hover { border-color:rgba(232,160,32,0.4); transform:translateY(-3px); }
    .cert-icon { font-size:1.7rem; margin-bottom:0.8rem; display:block; }
    .cert-name {
      font-family:'Barlow Condensed',sans-serif;
      font-weight:800; font-size:1rem;
      letter-spacing:0.06em; text-transform:uppercase; margin-bottom:0.25rem;
    }
    .cert-desc { font-size:0.77rem; color:var(--muted); line-height:1.5; }
    .cert-check {
      position:absolute; top:0.8rem; right:0.8rem;
      width:20px; height:20px; border-radius:50%;
      background:rgba(74,222,128,0.14); border:1px solid rgba(74,222,128,0.35);
      display:flex; align-items:center; justify-content:center;
      font-size:0.58rem; color:#4ade80;
    }

    .twic-spotlight {
      background:var(--steel); border:1px solid var(--border-blue);
      padding:2.5rem; position:relative; overflow:hidden;
    }
    .twic-spotlight::before {
      content:''; position:absolute; top:0; left:0;
      width:4px; height:100%; background:var(--blue);
    }
    .twic-head { display:flex; align-items:center; gap:1rem; margin-bottom:1.3rem; }
    .twic-box {
      background:var(--blue); padding:0.5rem 1rem;
      font-family:'Barlow Condensed',sans-serif; font-weight:900;
      font-size:1.1rem; letter-spacing:0.1em; color:#fff;
    }
    .twic-lbl {
      font-family:'Barlow Condensed',sans-serif; font-weight:700;
      font-size:0.68rem; letter-spacing:0.2em; text-transform:uppercase;
      color:#93c5fd; margin-bottom:0.1rem;
    }
    .twic-ttl {
      font-family:'Barlow Condensed',sans-serif; font-weight:900;
      font-size:1.2rem; text-transform:uppercase;
    }
    .twic-body { color:var(--muted); font-size:0.88rem; line-height:1.72; }
    .twic-tags { display:flex; flex-wrap:wrap; gap:0.5rem; margin-top:1.3rem; }
    .twic-tag {
      font-family:'Barlow Condensed',sans-serif; font-weight:700;
      font-size:0.63rem; letter-spacing:0.13em; text-transform:uppercase;
      padding:0.28rem 0.72rem;
      border:1px solid var(--border-blue);
      color:#93c5fd; background:var(--blue-light);
    }

    /* ABOUT */
    .features-grid {
      display:grid; grid-template-columns:repeat(2,1fr);
      gap:1rem; margin-top:3.5rem;
    }
    .feature {
      display:flex; gap:1.3rem; padding:1.5rem;
      border:1px solid transparent;
      transition:border-color 0.3s, background 0.3s;
    }
    .feature:hover { border-color:var(--border); background:var(--steel); }
    .feat-icon {
      width:44px; height:44px; flex-shrink:0;
      background:rgba(232,160,32,0.08);
      border:1px solid rgba(232,160,32,0.2);
      display:flex; align-items:center; justify-content:center;
      font-size:1.2rem;
    }
    .feat-title {
      font-family:'Barlow Condensed',sans-serif; font-weight:700;
      font-size:1rem; letter-spacing:0.07em; text-transform:uppercase;
      margin-bottom:0.25rem;
    }
    .feat-desc { font-size:0.86rem; color:var(--muted); line-height:1.6; }

    /* CONTACT */
    .contact-section { background:var(--steel); }
    .contact-inner {
      display:grid; grid-template-columns:1.1fr 0.9fr;
      gap:5rem; align-items:start;
    }
    .form { display:flex; flex-direction:column; gap:1rem; }
    .form-row { display:grid; grid-template-columns:1fr 1fr; gap:1rem; }
    .form-group { display:flex; flex-direction:column; gap:0.32rem; }
    .form-label {
      font-family:'Barlow Condensed',sans-serif; font-weight:700;
      font-size:0.68rem; letter-spacing:0.18em; text-transform:uppercase;
      color:var(--muted);
    }
    .form-input, .form-select, .form-textarea {
      background:var(--charcoal); border:1px solid rgba(255,255,255,0.07);
      color:var(--white); padding:0.78rem 1rem;
      font-family:'Barlow',sans-serif; font-size:0.91rem;
      outline:none; transition:border-color 0.2s; width:100%; appearance:none;
    }
    .form-input::placeholder, .form-textarea::placeholder { color:rgba(122,130,145,0.4); }
    .form-input:focus, .form-select:focus, .form-textarea:focus { border-color:var(--accent); }
    .form-select option { background:var(--charcoal); }
    .form-textarea { resize:vertical; min-height:100px; }

    .owner-card {
      display:flex; align-items:center; gap:1.2rem;
      padding:1.3rem; background:var(--charcoal);
      border:1px solid var(--border); margin-bottom:1rem;
    }
    .owner-avatar {
      width:56px; height:56px; border-radius:50%;
      border:2px solid var(--accent); overflow:hidden; flex-shrink:0;
    }
    .owner-avatar img {
      width:100%; height:100%;
      object-fit:cover; object-position:center 10%;
    }
    .owner-name {
      font-family:'Barlow Condensed',sans-serif; font-weight:800;
      font-size:1.1rem; text-transform:uppercase; letter-spacing:0.05em;
    }
    .owner-role-text { font-size:0.8rem; color:var(--muted); }

    .cblocks { display:flex; flex-direction:column; gap:0.9rem; margin-top:0.5rem; }
    .cblock {
      display:flex; gap:1rem; align-items:flex-start;
      padding:1.1rem; background:var(--charcoal);
      border-left:3px solid var(--accent);
    }
    .cicon { font-size:1.1rem; flex-shrink:0; margin-top:0.1rem; }
    .clabel {
      font-family:'Barlow Condensed',sans-serif; font-weight:700;
      font-size:0.67rem; letter-spacing:0.18em; text-transform:uppercase;
      color:var(--accent); margin-bottom:0.1rem;
    }
    .cvalue { font-size:0.93rem; font-weight:500; }

    /* FOOTER */
    footer {
      background:var(--charcoal); border-top:1px solid var(--border);
      padding:4rem 4rem 2rem;
    }
    .footer-top {
      display:grid; grid-template-columns:2fr 1fr 1fr;
      gap:3.5rem; margin-bottom:3rem;
    }
    .footer-logo {
      font-family:'Barlow Condensed',sans-serif; font-weight:900;
      font-size:1.65rem; letter-spacing:0.08em; margin-bottom:0.8rem;
    }
    .footer-logo span { color:var(--accent); }
    .footer-tagline { color:var(--muted); font-size:0.85rem; line-height:1.65; max-width:240px; }
    .footer-certs { display:flex; flex-wrap:wrap; gap:0.45rem; margin-top:1.1rem; }
    .fcert {
      font-family:'Barlow Condensed',sans-serif; font-weight:700;
      font-size:0.6rem; letter-spacing:0.12em; text-transform:uppercase;
      padding:0.25rem 0.58rem; border:1px solid var(--border); color:var(--muted);
    }
    .footer-col-title {
      font-family:'Barlow Condensed',sans-serif; font-weight:800;
      font-size:0.72rem; letter-spacing:0.22em; text-transform:uppercase;
      color:var(--accent); margin-bottom:1.2rem;
    }
    .footer-links { list-style:none; display:flex; flex-direction:column; gap:0.58rem; }
    .footer-links a {
      color:var(--muted); text-decoration:none; font-size:0.85rem; transition:color 0.2s;
    }
    .footer-links a:hover { color:var(--white); }
    .footer-bottom {
      border-top:1px solid var(--border); padding-top:1.7rem;
      display:flex; justify-content:space-between; align-items:center;
      flex-wrap:wrap; gap:1rem;
    }
    .footer-copy { font-size:0.77rem; color:var(--muted); }
    .footer-socials { display:flex; gap:0.65rem; }
    .social-btn {
      width:32px; height:32px; border:1px solid var(--border);
      display:flex; align-items:center; justify-content:center;
      color:var(--muted); text-decoration:none; font-size:0.78rem;
      transition:border-color 0.2s, color 0.2s;
    }
    .social-btn:hover { border-color:var(--accent); color:var(--accent); }

    /* RESPONSIVE */
    @media (max-width:900px) {
      nav { padding:1rem 1.5rem; }
      .nav-links { display:none; }
      .hero-banner { height:320px; }
      .hero-banner-content { padding:1.5rem; flex-direction:column; align-items:flex-start; gap:1rem; }
      .hero-banner-right { justify-content:flex-start; }
      .hero { grid-template-columns:1fr; padding:3rem 1.5rem 4rem; gap:3rem; }
      .section { padding:5rem 1.5rem; }
      .services-grid { grid-template-columns:1fr; }
      .certs-layout, .cert-grid { grid-template-columns:1fr; }
      .features-grid { grid-template-columns:1fr; }
      .contact-inner { grid-template-columns:1fr; gap:3rem; }
      .form-row { grid-template-columns:1fr; }
      .footer-top { grid-template-columns:1fr; gap:2rem; }
    }
  </style>
</head>
<body>

<!-- NAV -->
<nav>
  <a href="#" class="nav-logo">MISCOMM LOGISTICS<span>.</span></a>
  <ul class="nav-links">
    <li><a href="#services">Services</a></li>
    <li><a href="#certifications">Certifications</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#contact" class="nav-cta">Book a Pickup</a></li>
  </ul>
</nav>

<!-- HERO BANNER — full-width photo -->
<div class="hero-banner">
  <img src="data:image/jpeg;base64,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igAooooAKKKKAP/W/n/ooooAKKKKACiiigAooooA/9f+f+iiigAooooAKKKKACiiigD/0P5/6KKKACiiigAooooA/QD/AIIX/wDNUv8AuE/+3tFH/BC//mqX/cJ/9vaKAP/R/n/ooooAKKKKACiiigAooooA/9L+f+iiigAooooAKKKKACiiigD/0/5/6KKKACiiigAooooAKKKKAP/U/n/ooooAKKKKACiiigAooooA/9X+f+iiigAooooAKKKKACiiigD/1v5/6KKKACiiigAooooAKKKKAP/X/n/ooooAKKKKACiiigAooooA/9D+f+iiigAooooAKKKKACiiigD/0f5/6KKKACiiigAooooAKKKKAP/S/n/ooooAKKKKACiiigAooooA/9P+f+iiigAooooAKKKKACiiigD/1P5/6KKKACiiigAooooAKKKKAP/V/n/ooooAKKKKACiiigAooooA/9b+f+iiigAooooAKKKKACiiigD/1/5/6KKKACiiigAooooAKKKKAP/Q/n/ooooAKKKKACiiigAooooA/9H+f+iiigAooooAKKKKAP0A/wCCF/8AzVL/ALhP/t7RR/wQv/5ql/3Cf/b2igD/0v5/6KKKACiiigAooooAKKKKAP/T/n/ooooAKKKKACiiigAooooA/9T+f+iiigAooooAKKKKACiiigD/1f5/6KKKACiiigAooooAKKKKAP/W/n/ooooAKKKKACiiigAooooA/9f+f+iiigAooooAKKKKACiiigD/0P5/6KKKACiiigAooooAKKKKAP/R/n/ooooAKKKKACiiigAooooA/9L+f+rGmaVda1eJbWdtcXdxIQEihjMjsScAADk8kfnVev2v/wCDSf4+3fxZ/aA1n4X674a8DX3h/wANeGH1Kyun0CBtSWZLqPazXBBY/wCsb8l9KqKu7Cbsrn4t65oF/wCGNSez1Kyu9PvIgC8FzC0UqAjIyrAEZBB/Gqlfc/8AwciQJa/8Fjfi3HGiRxpLYqqqMBR9ig4Ar4YpNWdhoKKOMe9dB8MPhT4k+NPjK38PeE9F1DxBrd2kkkVlZRGSV1jQu7YHYKpJPtSA5+inTwvbTPHIpR42Ksp6qRwRTaAP/9P+f+iiigAooooAKKKKACiiigD/1P5/6KKKACiiigAooooAKKKKAP/V/n/ooooAKKKK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kLvkDNgeteB0Umwsf//V/n/ooooAKKKKACiiigAooooA/9b+f+iiigAooooAKKKKACiiigD/1/5/6KKKACiiigAooooAKKKKAP/Q/n/ooooAKKKKACiiigAooooA/9H+f+iiigAooooAKKKKACiiigD/0v5/6KKKACiiigAooooAKKKKAP/T/n/ooooAKKKKACiiigAooooA/9T+f+iiigAooooAKKKKAP0A/wCCF/8AzVL/ALhP/t7RR/wQv/5ql/3Cf/b2igD/1f5/6KKKACiiigAooooAKKKKAP/W/n/ooooAKKKKACiiigAooooA/9f+f+iiigAooooAKKKKACiiigD/0P5/6KKKACiiigAooooAKKKKAP/R/n/ooooAKKKKACiiigAooooA/9L+f+iiigAooooAKKKKACiiigD/0/5/6KKKACiiigAooooAKKKKAP/U/n/ooooAKKKKACiiigAooooA/9X+f+iiigAooooAKKKKACiiigD/1v5/6KKKACiiigAooooAKKKKAP/X/n/ooooAKKKKACiiigAooooA/9D+f+iiigAooooAKKKKACiiigD/0f5/6KKKACiiigAooooAKKKKAP/S/n/ooooAKKKKACiiigAooooA/9P+f+iiigAooooAKKKKACiiigD/1P5/6KKKACiiigAooooAKKKKAP/V/n/ooooAKKKKACiiigD9AP8Aghf/AM1S/wC4T/7e0Uf8EL/+apf9wn/29ooA/9b+f+iiigAooooAKKKKACiiigD/1/5/6KKKACiiigAooooAKKKKAP/Q/n/ooooAKKKKACiiigAooooA/9H+f+iiigAooooAKKKKACiiigD/0v5/6KKKACiiigAooooAKKKKAP/T/n/ooooAKKKKACiiigAooooA/9T+f+iiigAooooAKKKKACiiigD/1f5/6KKKACiiigAooooAKKKKAP/W/n/ooooAKKKKACiiigAooooA/9f+f+iiigAooooAKKKKACiiigD/0P5/6KKKACiiigAooooAKKKKAP/R/n/ooooAKKKKACiiigAooooA/9L+f+iiigAooooAKKKKACiiigD/0/5/6KKKACiiigAooooAKKKKAP/U/n/ooooAKKKKACiiigAooooA/9X+f+iiigAooooAKKKKACiiigD/1v5/6KKKACiiigAo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