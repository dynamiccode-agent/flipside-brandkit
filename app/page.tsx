"use client";

import { useState } from "react";

// ─── Colour Swatch Component ─────────────────────────────────────────────────
function Swatch({
  name,
  hex,
  rgb,
  usage,
  textDark = false,
  large = false,
}: {
  name: string;
  hex: string;
  rgb: string;
  usage: string;
  textDark?: boolean;
  large?: boolean;
}) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      onClick={copy}
      className={`group relative rounded-2xl overflow-hidden transition-transform hover:scale-105 cursor-pointer border border-white/10 ${large ? "h-48" : "h-40"}`}
      style={{ backgroundColor: hex }}
      title={`Click to copy ${hex}`}
    >
      <div className={`absolute inset-0 flex flex-col justify-end p-4 ${textDark ? "text-[#111111]" : "text-white"}`}>
        <p className="font-bold text-sm leading-tight" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800 }}>
          {name}
        </p>
        <p className="text-xs opacity-80 mt-0.5" style={{ fontFamily: "'Poppins', sans-serif" }}>
          {hex}
        </p>
        <p className="text-xs opacity-60" style={{ fontFamily: "'Poppins', sans-serif" }}>
          {rgb}
        </p>
        <p className="text-xs opacity-50 mt-1 leading-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
          {usage}
        </p>
      </div>
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity ${copied ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
        style={{ background: "rgba(0,0,0,0.45)" }}
      >
        <span className="text-white text-sm font-bold" style={{ fontFamily: "'Poppins', sans-serif" }}>
          {copied ? "✓ Copied!" : "Copy Hex"}
        </span>
      </div>
    </button>
  );
}

// ─── Nav ─────────────────────────────────────────────────────────────────────
function Nav() {
  const links = [
    { label: "Story", href: "#story" },
    { label: "Products", href: "#products" },
    { label: "Logo", href: "#logo" },
    { label: "Colours", href: "#colours" },
    { label: "Typography", href: "#typography" },
    { label: "Font Downloads", href: "#fonts" },
    { label: "Product Titles", href: "#product-titles" },
    { label: "Voice", href: "#voice" },
    { label: "Messaging", href: "#messaging" },
    { label: "Flavours", href: "#flavours" },
    { label: "Iconography", href: "#iconography" },
    { label: "Founders", href: "#founders" },
    { label: "Buttons", href: "#buttons" },
    { label: "Headlines", href: "#headlines" },
    { label: "Social", href: "#social" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10"
      style={{ backgroundColor: "rgba(17,17,17,0.95)", backdropFilter: "blur(12px)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
        <img src="/images/flipside-logo.png" alt="Flipside" className="h-7 w-auto" />
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs font-bold text-white/60 hover:text-white transition-colors uppercase tracking-widest"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 900 }}
            >
              {l.label}
            </a>
          ))}
        </div>
        <span
          className="text-xs font-bold text-white/40 uppercase tracking-widest"
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
        >
          v1.0
        </span>
      </div>
    </nav>
  );
}

// ─── Section Wrapper ──────────────────────────────────────────────────────────
function Section({
  id,
  children,
  className = "",
  style,
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <section id={id} className={`py-24 px-4 sm:px-6 ${className}`} style={style}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}

function SectionHeader({ label, title, light = false }: { label: string; title: string; light?: boolean }) {
  return (
    <div className="mb-16">
      <p
        className={`section-label mb-3 ${light ? "text-black/50" : "text-white/40"}`}
        style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase" }}
      >
        {label}
      </p>
      <h2
        className={`font-display text-5xl md:text-7xl ${light ? "text-[#111111]" : "text-white"}`}
        style={{ fontFamily: "'Compacta', Impact, 'Arial Narrow', sans-serif", fontWeight: 900, letterSpacing: "-0.02em" }}
      >
        {title}
      </h2>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Page() {
  return (
    <>
      <Nav />

      {/* ── 1. HERO ── */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #FF9EDB 0%, #EE86B4 30%, #8FDCCD 70%, #BCEFF9 100%)",
        }}
      >
        {/* Background noise texture */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #FF9EDB 0%, transparent 50%), radial-gradient(circle at 80% 20%, #BCEFF9 0%, transparent 50%), radial-gradient(circle at 60% 80%, #8FDCCD 0%, transparent 50%)",
          }}
        />

        <div className="relative z-10 space-y-6">
          <div
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
            style={{
              backgroundColor: "rgba(17,17,17,0.15)",
              color: "#111111",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 900,
            }}
          >
            Brand Guidelines — Version 1.0 | 2025
          </div>

          <img src="/images/flipside-logo.png" alt="Flipside Energy" className="h-32 md:h-48 w-auto mx-auto" />

          <p
            className="text-xl md:text-2xl text-[#282828] font-bold"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
          >
            The Better Side of Energy
          </p>

          <p
            className="text-sm text-[#282828]/60 mt-4"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}
          >
            Aussie Made & Owned — Troy & Adrian
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <p className="text-xs font-bold uppercase tracking-widest text-[#111111]" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Scroll
          </p>
          <div className="w-px h-12 bg-[#111111]/30" />
        </div>
      </section>

      {/* ── 2. BRAND STORY ── */}
      <Section id="story" style={{ backgroundColor: "#0A0A0A" }}>
        <SectionHeader label="02 — Brand Story" title="OUR STORY" />

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <blockquote className="text-lg md:text-xl text-white/80 leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}>
              "Flipside started the same way it does for most people — we were sick of energy drinks that hit hard, then
              disappeared just as fast. The spikes. The crashes. The jitters. The comedown. It never made sense to us."
            </blockquote>
            <p className="text-base text-white/60 leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>
              So we decided to build the other side of energy. Something clean, smooth, and steady. Energy that keeps
              you switched on without burning you out.
            </p>
            <p className="text-sm text-white/40 font-bold uppercase tracking-widest" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 900 }}>
              — Troy & Adrian, Co-founders
            </p>
          </div>

          <div className="space-y-6">
            <div
              className="rounded-2xl p-8 border border-white/10"
              style={{ backgroundColor: "#111111" }}
            >
              <p className="section-label text-white/40 mb-4" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "11px", letterSpacing: "0.2em" }}>
                BRAND MISSION
              </p>
              <p className="text-white/90 text-lg leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}>
                Clean, smooth, steady energy without the crash. No spikes, no jitters, no comedown.
              </p>
            </div>

            {/* Pull quote */}
            <div
              className="rounded-2xl p-8"
              style={{ background: "linear-gradient(135deg, #FF9EDB, #8FDCCD)" }}
            >
              <p
                className="text-[#111111] text-4xl md:text-5xl leading-tight"
                style={{ fontFamily: "'Compacta', Impact, 'Arial Narrow', sans-serif", fontWeight: 900, letterSpacing: "-0.02em" }}
              >
                NO CRASH.
                <br />
                NO B.S.
              </p>
              <p className="text-[#111111]/60 text-sm mt-3 font-bold uppercase tracking-widest" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 900 }}>
                Welcome to the Flipside.
              </p>
            </div>
          </div>
        </div>

        {/* Brand pillars */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { icon: "⚗️", title: "Clean Ingredients", sub: "Phytolin, Caffeine, Guarana, B Vitamins, Taurine" },
            { icon: "⚡", title: "No Crash", sub: "Smooth, steady energy all day" },
            { icon: "🍹", title: "Great Taste", sub: "4 flavours, sugar-free options" },
            { icon: "🦘", title: "Aussie Made", sub: "Authentic, local, real people" },
            { icon: "🤙", title: "Community", sub: "FLIPPY FAM, UGC-driven" },
          ].map((p) => (
            <div key={p.title} className="rounded-xl p-5 border border-white/10" style={{ backgroundColor: "#111111" }}>
              <div className="text-2xl mb-3">{p.icon}</div>
              <p className="text-white font-bold text-sm mb-1" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800 }}>
                {p.title}
              </p>
              <p className="text-white/50 text-xs leading-snug" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {p.sub}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── 3. PRODUCTS SHOWCASE ── */}
      <Section id="products" style={{ backgroundColor: "#111111" }}>
        <SectionHeader label="03 — Products" title="THE RANGE" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { name: "Blue Ice", variant: "Original", image: "/images/blue-ice.jpg", primary: "#23E1CE" },
            { name: "Blue Ice", variant: "Sugar-Free", image: "/images/blue-ice-sf.jpg", primary: "#74CEBF" },
            { name: "Violet Voltage", variant: "Original", image: "/images/violet-voltage.jpg", primary: "#BB82EE" },
            { name: "Violet Voltage", variant: "Sugar-Free", image: "/images/violet-voltage-sf.jpg", primary: "#A66DE9" },
            { name: "Hypermelon", variant: "Original", image: "/images/hypermelon.jpg", primary: "#8FE9DA" },
            { name: "Hypermelon", variant: "Sugar-Free", image: "/images/hypermelon-sf.jpg", primary: "#74CEBF" },
            { name: "Sherbert Bang", variant: "Original", image: "/images/sherbert-bang.jpg", primary: "#FF6A71" },
            { name: "Sherbert Bang", variant: "Sugar-Free", image: "/images/sherbert-bang-sf.jpg", primary: "#E85368" },
          ].map((product) => (
            <div
              key={`${product.name}-${product.variant}`}
              className="rounded-2xl overflow-hidden border border-white/10 group hover:border-white/30 transition-colors"
              style={{ backgroundColor: "#0A0A0A" }}
            >
              <div
                className="relative h-56 flex items-center justify-center p-4"
                style={{ background: `linear-gradient(180deg, ${product.primary}22 0%, ${product.primary}0a 100%)` }}
              >
                <img
                  src={product.image}
                  alt={`${product.name} ${product.variant}`}
                  className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <p className="text-white font-bold text-sm leading-tight" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800 }}>
                  {product.name}
                </p>
                <p className="text-white/50 text-xs mt-0.5" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {product.variant}
                </p>
                <p
                  className="text-sm font-bold mt-2"
                  style={{ color: product.primary, fontFamily: "'Poppins', sans-serif", fontWeight: 900 }}
                >
                  $75 / 24pk
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── 4. LOGO USAGE ── */}
      <Section id="logo" style={{ backgroundColor: "#F5F5F5" }}>
        <SectionHeader label="04 — Logo Usage" title="LOGO SYSTEM" light />

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Dark bg */}
          <div className="rounded-2xl p-10 flex flex-col items-center gap-4 border border-black/10" style={{ backgroundColor: "#111111" }}>
            <img src="/images/flipside-logo.png" alt="Flipside Energy" className="h-16 w-auto" />
            <p className="text-white/40 text-xs font-bold uppercase tracking-widest text-center" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Logo on Dark
            </p>
          </div>

          {/* Light bg */}
          <div className="rounded-2xl p-10 flex flex-col items-center gap-4 border border-black/10 bg-white">
            <img src="/images/flipside-logo.png" alt="Flipside Energy" className="h-16 w-auto" style={{ filter: 'invert(1)' }} />
            <p className="text-black/40 text-xs font-bold uppercase tracking-widest text-center" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Logo on Light
            </p>
          </div>

          {/* Coloured bg */}
          <div
            className="rounded-2xl p-10 flex flex-col items-center gap-4 border border-black/10"
            style={{ backgroundColor: "#FF9EDB" }}
          >
            <img src="/images/flipside-logo.png" alt="Flipside Energy" className="h-16 w-auto" style={{ filter: 'invert(1)' }} />
            <p className="text-[#111111]/50 text-xs font-bold uppercase tracking-widest text-center" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Logo on Colour
            </p>
          </div>
        </div>

        {/* Clear space */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="rounded-2xl p-8 border border-black/10 bg-white">
            <p className="font-bold text-[#111111] mb-3" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800 }}>
              Clear Space
            </p>
            <p className="text-[#666666] text-sm leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Always maintain a minimum clear space equal to the height of the letter "F" in the wordmark around all
              sides of the logo. Never crowd the logo with other elements.
            </p>
          </div>
          <div className="rounded-2xl p-8 border border-black/10 bg-white">
            <p className="font-bold text-[#111111] mb-3" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800 }}>
              Minimum Size
            </p>
            <p className="text-[#666666] text-sm leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Digital minimum: 120px wide. Print minimum: 25mm wide. Below these sizes, legibility is compromised and
              the logo should not be used.
            </p>
          </div>
        </div>

        {/* Don'ts */}
        <div>
          <p
            className="font-bold text-[#111111] mb-6"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "18px" }}
          >
            Logo Don&apos;ts
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Don't stretch or distort", imgStyle: { transform: "scaleX(1.6)", transformOrigin: "center" } },
              { label: "Don't add drop shadows", imgStyle: { filter: "drop-shadow(4px 4px 8px rgba(0,0,0,0.6))" } },
              { label: "Don't use low opacity", imgStyle: { opacity: 0.2 } },
              { label: "Don't rotate", imgStyle: { transform: "rotate(-15deg)" } },
            ].map((d) => (
              <div key={d.label} className="rounded-xl p-5 border-2 border-red-400/30 bg-red-50">
                <div className="flex items-center justify-center h-16 mb-3 overflow-hidden">
                  <img
                    src="/images/flipside-logo.png"
                    alt="Flipside logo"
                    style={{
                      height: "32px",
                      width: "auto",
                      filter: "invert(1)",
                      ...d.imgStyle,
                    }}
                  />
                </div>
                <p className="text-red-500 text-xs font-bold text-center" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
                  ✕ {d.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── 4. COLOUR PALETTE ── */}
      <Section id="colours" style={{ backgroundColor: "#0A0A0A" }}>
        <SectionHeader label="05 — Colour Palette" title="COLOUR SYSTEM" />

        {/* Core */}
        <div className="mb-12">
          <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-6" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800 }}>
            Core Colours
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Swatch name="Brand Black" hex="#111111" rgb="rgb(17,17,17)" usage="Primary dark, nav, blocks" large />
            <Swatch name="Brand White" hex="#FFFFFF" rgb="rgb(255,255,255)" usage="Text on dark, button fills" textDark large />
            <Swatch name="Near Black" hex="#1F1F1F" rgb="rgb(31,31,31)" usage="Section backgrounds" large />
            <Swatch name="Subtle Dark" hex="#282828" rgb="rgb(40,40,40)" usage="Cards, dividers" large />
          </div>
        </div>

        {/* Hero Backgrounds */}
        <div className="mb-12">
          <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-6" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800 }}>
            Hero & Background Colours
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Swatch name="Hot Pink" hex="#FF9EDB" rgb="rgb(255,158,219)" usage="Hero gradient, primary accent" textDark large />
            <Swatch name="Mint Teal" hex="#8FDCCD" rgb="rgb(143,220,205)" usage="Features section, gradient end" textDark large />
            <Swatch name="Light Blue" hex="#BCEFF9" rgb="rgb(188,239,249)" usage="Particle effects, highlights" textDark large />
            <Swatch name="Pink Particle" hex="#EE86B4" rgb="rgb(238,134,180)" usage="UI accents, particles" textDark large />
          </div>
        </div>

        {/* Flavour colours */}
        <div>
          <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-6" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800 }}>
            Flavour Colours
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Swatch name="Blue Ice Primary" hex="#23E1CE" rgb="rgb(35,225,206)" usage="Blue Ice flavour primary" textDark />
            <Swatch name="Blue Ice Secondary" hex="#74CEBF" rgb="rgb(116,206,191)" usage="Blue Ice flavour secondary" textDark />
            <Swatch name="Violet Voltage" hex="#BB82EE" rgb="rgb(187,130,238)" usage="Violet Voltage primary" textDark />
            <Swatch name="Violet Deep" hex="#A66DE9" rgb="rgb(166,109,233)" usage="Violet Voltage secondary" />
            <Swatch name="Hypermelon" hex="#8FE9DA" rgb="rgb(143,233,218)" usage="Hypermelon primary" textDark />
            <Swatch name="Hypermelon Teal" hex="#74CEBF" rgb="rgb(116,206,191)" usage="Hypermelon secondary" textDark />
            <Swatch name="Sherbert Bang" hex="#FF6A71" rgb="rgb(255,106,113)" usage="Sherbert Bang primary" textDark />
            <Swatch name="Sherbert Deep" hex="#E85368" rgb="rgb(232,83,104)" usage="Sherbert Bang secondary" />
          </div>
        </div>
      </Section>

      {/* ── 5. TYPOGRAPHY ── */}
      <Section id="typography" style={{ backgroundColor: "#111111" }}>
        <SectionHeader label="06 — Typography" title="TYPE SYSTEM" />

        {/* Display font */}
        <div className="mb-16 rounded-2xl overflow-hidden border border-white/10">
          <div className="p-8 border-b border-white/10 flex items-center justify-between flex-wrap gap-3">
            <div>
              <p className="text-white font-bold" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800 }}>
                Display Font
              </p>
              <p className="text-white/50 text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>
                DharmaGothicE → Impact, &apos;Arial Narrow&apos; (fallback) | Weight 900 | Tracking -0.02em
              </p>
            </div>
            <span
              className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest"
              style={{ backgroundColor: "#FF9EDB", color: "#111111", fontFamily: "'Poppins', sans-serif", fontWeight: 900 }}
            >
              Headlines Only
            </span>
          </div>
          <div className="p-8 space-y-4" style={{ backgroundColor: "#0A0A0A" }}>
            <p
              className="text-white leading-none"
              style={{
                fontFamily: "'Compacta', Impact, 'Arial Narrow', sans-serif",
                fontWeight: 900,
                letterSpacing: "-0.02em",
                fontSize: "clamp(48px, 10vw, 89px)",
              }}
            >
              FLIP THE SWITCH.
            </p>
            <p
              className="text-white/60 leading-none"
              style={{
                fontFamily: "'Compacta', Impact, 'Arial Narrow', sans-serif",
                fontWeight: 900,
                letterSpacing: "-0.02em",
                fontSize: "56px",
              }}
            >
              CLEAN ENERGY.
            </p>
            <p
              className="text-white/40 leading-none"
              style={{
                fontFamily: "'Compacta', Impact, 'Arial Narrow', sans-serif",
                fontWeight: 900,
                letterSpacing: "-0.02em",
                fontSize: "40px",
              }}
            >
              NO CRASH. NO B.S.
            </p>
          </div>
        </div>

        {/* Poppins weights */}
        <div className="mb-16 rounded-2xl overflow-hidden border border-white/10">
          <div className="p-8 border-b border-white/10">
            <p className="text-white font-bold" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800 }}>
              Body Font — Poppins
            </p>
            <p className="text-white/50 text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Google Fonts | All weights 400–900 | Used for all body, UI, labels, buttons
            </p>
          </div>
          <div className="divide-y divide-white/5">
            {[
              { weight: 400, label: "Regular", usage: "Body text, descriptions", hex: "#666666" },
              { weight: 600, label: "SemiBold", usage: "Labels, captions", hex: "#888888" },
              { weight: 700, label: "Bold", usage: "Footer links, subheads", hex: "#AAAAAA" },
              { weight: 800, label: "ExtraBold", usage: "Eyebrow text, section labels", hex: "#CCCCCC" },
              { weight: 900, label: "Black", usage: "Buttons, nav, badges", hex: "#FFFFFF" },
            ].map((w) => (
              <div key={w.weight} className="px-8 py-5 flex items-center justify-between gap-4" style={{ backgroundColor: "#0A0A0A" }}>
                <p
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: w.weight,
                    fontSize: "20px",
                    color: w.hex,
                  }}
                >
                  The better side of energy.
                </p>
                <div className="text-right shrink-0">
                  <p className="text-white/60 text-xs font-bold" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
                    {w.weight} — {w.label}
                  </p>
                  <p className="text-white/30 text-xs" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {w.usage}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Type scale */}
        <div className="mb-16">
          <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-8" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800 }}>
            Type Scale
          </p>
          <div className="space-y-6">
            {[
              { name: "Display", size: "89px", sample: "WELCOME TO THE FLIPSIDE", display: true },
              { name: "H1", size: "56px", sample: "Clean Energy. No Crash.", display: true },
              { name: "H2", size: "40px", sample: "The Better Side of Energy", display: true },
              { name: "H3", size: "28px", sample: "Flip the switch today.", display: false },
              { name: "Body", size: "16px", sample: "Flipside Energy delivers clean, smooth, steady energy without the crash. Aussie made & owned.", display: false },
              { name: "Small", size: "13px", sample: "Sugar-free available | Taurine 500mg | Caffeine 80mg | Guarana | Phytolin | B Vitamins", display: false },
            ].map((t) => (
              <div key={t.name} className="flex items-start gap-6 border-b border-white/5 pb-6">
                <div className="shrink-0 w-20">
                  <p className="text-white/60 text-xs font-bold" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
                    {t.name}
                  </p>
                  <p className="text-white/30 text-xs" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {t.size}
                  </p>
                </div>
                <p
                  className="text-white flex-1"
                  style={{
                    fontFamily: t.display
                      ? "'Compacta', Impact, 'Arial Narrow', sans-serif"
                      : "'Poppins', sans-serif",
                    fontWeight: t.display ? 900 : 400,
                    fontSize: t.size,
                    letterSpacing: t.display ? "-0.02em" : "normal",
                    lineHeight: "1.1",
                  }}
                >
                  {t.sample}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Font pairing example */}
        <div
          className="rounded-2xl p-10"
          style={{ background: "linear-gradient(135deg, #FF9EDB, #8FDCCD)" }}
        >
          <p className="text-[#111111]/50 text-xs font-bold uppercase tracking-widest mb-6" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800 }}>
            Font Pairing Example
          </p>
          <p
            className="text-[#111111] text-6xl md:text-8xl leading-none mb-4"
            style={{ fontFamily: "'Compacta', Impact, 'Arial Narrow', sans-serif", fontWeight: 900, letterSpacing: "-0.02em" }}
          >
            FLIP THE
            <br />
            SWITCH.
          </p>
          <p className="text-[#111111]/70 text-lg max-w-md" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}>
            Clean energy that keeps you switched on all day. No spikes. No jitters. No comedown. Just the better side
            of energy.
          </p>
          <div className="mt-6 flex gap-3">
            <span
              className="px-5 py-2.5 rounded-full text-sm font-bold"
              style={{ backgroundColor: "#111111", color: "#FFFFFF", fontFamily: "'Poppins', sans-serif", fontWeight: 900 }}
            >
              Shop The Range
            </span>
            <span
              className="px-5 py-2.5 rounded-full text-sm font-bold border-2 border-[#111111]"
              style={{ backgroundColor: "transparent", color: "#111111", fontFamily: "'Poppins', sans-serif", fontWeight: 900 }}
            >
              Learn More
            </span>
          </div>
        </div>
      </Section>

      {/* ── 6.1 FONT DOWNLOADS ── */}
      <Section style={{ backgroundColor: '#ffffff' }} id="fonts">
        <SectionHeader label="06.1 — Font Downloads" title="DOWNLOAD FONTS" light />
        <p style={{ color: '#555', marginBottom: '2rem', fontSize: '0.85rem', lineHeight: 1.7, fontFamily: "'Poppins', sans-serif" }}>
          The Flipside Energy brand uses three typeface families. Download the font files below to use in design tools, print production, and digital assets.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { name: 'Compacta', file: '/fonts/compacta.ttf', usage: 'Hero headlines, display type, large format', weight: 'Black 900', preview: 'FLIPSIDE ENERGY', style: { fontFamily: "'Compacta', Impact, sans-serif", fontSize: '2rem', fontWeight: 900 } },
            { name: 'Batgrexo', file: '/fonts/batgrexo.ttf', usage: 'Product flavour titles only', weight: 'Regular 400', preview: 'BLUE ICE', style: { fontFamily: "'Batgrexo', serif", fontSize: '2rem', fontWeight: 400 } },
            { name: 'Poppins Regular', file: '/fonts/poppins-regular.ttf', usage: 'Body text, descriptions, secondary content', weight: 'Regular 400', preview: 'Clean. Direct. Aussie.', style: { fontFamily: "'Poppins', sans-serif", fontSize: '1.2rem', fontWeight: 400 } },
            { name: 'Poppins ExtraBold', file: '/fonts/poppins-extrabold.ttf', usage: 'Secondary headings, buttons, product card titles', weight: 'ExtraBold 800', preview: 'No Crash. No B.S.', style: { fontFamily: "'Poppins', sans-serif", fontSize: '1.2rem', fontWeight: 800 } },
          ].map((font) => (
            <div key={font.name} style={{ border: '1px solid #E5E5E5', borderRadius: '12px', overflow: 'hidden', background: '#fff' }}>
              {/* Preview area */}
              <div style={{ background: '#f9f9f9', padding: '1.5rem', borderBottom: '1px solid #E5E5E5', minHeight: '80px', display: 'flex', alignItems: 'center' }}>
                <span style={{ ...font.style as React.CSSProperties, color: '#111' }}>{font.preview}</span>
              </div>
              {/* Info + download */}
              <div style={{ padding: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                <div>
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: '#111', fontSize: '0.85rem', marginBottom: '0.2rem' }}>{font.name}</p>
                  <p style={{ fontFamily: "'Poppins', sans-serif", color: '#888', fontSize: '0.7rem' }}>{font.weight} · {font.usage}</p>
                </div>
                <a
                  href={font.file}
                  download
                  style={{
                    background: '#111', color: '#fff', padding: '0.5rem 1.25rem',
                    borderRadius: '24px 4px 24px 4px',
                    boxShadow: '3px -3px 0px 0px #111',
                    border: '2px solid #111',
                    fontSize: '0.65rem', fontFamily: "'Poppins', sans-serif",
                    fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const,
                    textDecoration: 'none', display: 'inline-block', whiteSpace: 'nowrap' as const
                  }}
                >
                  Download ↓
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── 6.2 PRODUCT TITLE TYPOGRAPHY ── */}
      <Section style={{ backgroundColor: '#F5F5F5' }} id="product-titles">
        <SectionHeader label="06.2 — Product Titles" title="BATGREXO STYLE" light />
        <p style={{ color: '#555', marginBottom: '2rem', fontSize: '0.85rem', lineHeight: 1.7, fontFamily: "'Poppins', sans-serif" }}>
          Product flavour names use the <strong>Batgrexo</strong> typeface with a signature layered treatment: black fill text, white border/stroke, with a second black outline. This creates the bold, high-contrast can label style unique to Flipside Energy.
        </p>

        {/* Show the 4 product title images */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {['/images/title-1.png', '/images/title-2.png', '/images/title-3.png', '/images/title-4.png'].map((src, i) => (
            <div key={i} style={{ background: '#111', borderRadius: '8px', padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '80px' }}>
              <img src={src} alt={`Flavour title ${i+1}`} style={{ maxHeight: '60px', width: 'auto', objectFit: 'contain' }} />
            </div>
          ))}
        </div>

        {/* Batgrexo treatment specs */}
        <div style={{ background: '#fff', border: '1px solid #E5E5E5', borderRadius: '12px', padding: '1.5rem' }}>
          <h3 style={{ fontFamily: "'Poppins', sans-serif", color: '#111', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>Layered Text Treatment</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { layer: 'Layer 1 — Fill', spec: 'Black (#111111)', note: 'Base text fill' },
              { layer: 'Layer 2 — Stroke', spec: 'White, 4–6px', note: 'Outer glow/border' },
              { layer: 'Layer 3 — Outline', spec: 'Black (#111111), 2px', note: 'Final definition stroke' },
            ].map((l) => (
              <div key={l.layer} style={{ padding: '1rem', background: '#f9f9f9', borderRadius: '8px' }}>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: '#111', fontSize: '0.72rem', marginBottom: '0.2rem' }}>{l.layer}</p>
                <code style={{ fontFamily: 'monospace', color: '#555', fontSize: '0.65rem', background: '#eee', padding: '2px 8px', borderRadius: '4px' }}>{l.spec}</code>
                <p style={{ fontFamily: "'Poppins', sans-serif", color: '#888', fontSize: '0.65rem', marginTop: '0.3rem' }}>{l.note}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── 6. VOICE & TONE ── */}
      <Section id="voice" style={{ backgroundColor: "#0A0A0A" }}>
        <SectionHeader label="07 — Voice & Tone" title="VOICE & TONE" />

        {/* Tone pillars */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
          {[
            { pillar: "Direct", desc: "Say it straight. No fluff, no filler.", colour: "#FF9EDB" },
            { pillar: "Bold", desc: "Own the room. Never apologise for energy.", colour: "#BB82EE" },
            { pillar: "Clean", desc: "Simple words. Short sentences. Clarity wins.", colour: "#23E1CE" },
            { pillar: "Aussie", desc: "Mates who tell it straight. No corporate BS.", colour: "#8FDCCD" },
            { pillar: "Energetic", desc: "Movement in every line. Feel the momentum.", colour: "#FF6A71" },
          ].map((t) => (
            <div
              key={t.pillar}
              className="rounded-2xl p-6 border border-white/10"
              style={{ backgroundColor: "#111111" }}
            >
              <div
                className="text-2xl font-bold mb-3"
                style={{
                  fontFamily: "'Compacta', Impact, 'Arial Narrow', sans-serif",
                  fontWeight: 900,
                  letterSpacing: "-0.02em",
                  color: t.colour,
                }}
              >
                {t.pillar}
              </div>
              <p className="text-white/60 text-xs leading-snug" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {t.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Do / Don't */}
        <div className="mb-16">
          <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-8" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800 }}>
            Do / Don&apos;t Examples
          </p>
          <div className="space-y-4">
            {[
              { do: "No crash. No B.S.", dont: "Our product provides sustained energy release." },
              { do: "Flip the switch.", dont: "Experience the difference." },
              { do: "Aussie made. No shortcuts.", dont: "Proudly Australian manufactured." },
              { do: "Crack a Flipside and go.", dont: "Enjoy our premium energy beverage product." },
              { do: "Clean energy. All day.", dont: "Long-lasting energy utilising advanced formulation." },
            ].map((item, i) => (
              <div key={i} className="grid md:grid-cols-2 gap-4">
                <div
                  className="rounded-xl p-5 flex items-center gap-4 border border-green-500/20"
                  style={{ backgroundColor: "rgba(34,197,94,0.05)" }}
                >
                  <span className="text-green-400 text-xl shrink-0">✓</span>
                  <p className="text-white font-bold" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
                    &ldquo;{item.do}&rdquo;
                  </p>
                </div>
                <div
                  className="rounded-xl p-5 flex items-center gap-4 border border-red-500/20"
                  style={{ backgroundColor: "rgba(239,68,68,0.05)" }}
                >
                  <span className="text-red-400 text-xl shrink-0">✕</span>
                  <p className="text-white/70" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    &ldquo;{item.dont}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Brand personality */}
        <div
          className="rounded-2xl p-10 border border-white/10"
          style={{ backgroundColor: "#111111" }}
        >
          <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-6" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800 }}>
            Key Phrases
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              "Flip the switch",
              "Break the routine",
              "Move faster",
              "The better side",
              "Clean energy",
              "No crash",
              "Aussie made & owned",
              "FLIPPY FAM",
              "Welcome to the Flipside",
              "No B.S.",
            ].map((phrase) => (
              <span
                key={phrase}
                className="px-4 py-2 rounded-full text-sm font-bold border border-white/20 text-white/80"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
              >
                {phrase}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* ── 7. MESSAGING ── */}
      <Section id="messaging" style={{ backgroundColor: "#111111" }}>
        <SectionHeader label="08 — Messaging" title="MESSAGING SYSTEM" />

        {/* Taglines */}
        <div className="mb-16">
          <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-8" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800 }}>
            Taglines
          </p>
          <div className="space-y-4">
            <div className="rounded-2xl p-8 border-l-4" style={{ backgroundColor: "#0A0A0A", borderLeftColor: "#FF9EDB" }}>
              <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800 }}>
                Primary Tagline
              </p>
              <p
                className="text-white text-4xl md:text-6xl"
                style={{ fontFamily: "'Compacta', Impact, 'Arial Narrow', sans-serif", fontWeight: 900, letterSpacing: "-0.02em" }}
              >
                THE BETTER SIDE OF ENERGY
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl p-8 border-l-4" style={{ backgroundColor: "#0A0A0A", borderLeftColor: "#8FDCCD" }}>
                <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800 }}>
                  Secondary
                </p>
                <p
                  className="text-white text-2xl md:text-3xl"
                  style={{ fontFamily: "'Compacta', Impact, 'Arial Narrow', sans-serif", fontWeight: 900, letterSpacing: "-0.02em" }}
                >
                  FLIPPING DELICIOUS CLEAN ENERGY
                </p>
              </div>
              <div className="rounded-2xl p-8 border-l-4" style={{ backgroundColor: "#0A0A0A", borderLeftColor: "#BB82EE" }}>
                <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800 }}>
                  Tertiary
                </p>
                <p
                  className="text-white text-2xl md:text-3xl"
                  style={{ fontFamily: "'Compacta', Impact, 'Arial Narrow', sans-serif", fontWeight: 900, letterSpacing: "-0.02em" }}
                >
                  WELCOME TO THE FLIPSIDE
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="mb-16">
          <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-8" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800 }}>
            CTA Lines
          </p>
          <div className="flex flex-wrap gap-4">
            {["Crack a Flipside", "Shop The Range", "Join The Flippy Fam"].map((cta) => (
              <div
                key={cta}
                className="px-8 py-4 rounded-full text-xl font-bold"
                style={{
                  backgroundColor: "#FFFFFF",
                  color: "#111111",
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 900,
                }}
              >
                {cta}
              </div>
            ))}
          </div>
        </div>

        {/* Ingredient callouts */}
        <div className="mb-16">
          <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-8" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800 }}>
            Ingredient Callouts
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { name: "Taurine", amount: "500mg" },
              { name: "Caffeine", amount: "80mg" },
              { name: "Guarana", amount: "Extract" },
              { name: "Phytolin", amount: "Blend" },
              { name: "B Vitamins", amount: "Complex" },
            ].map((ing) => (
              <div
                key={ing.name}
                className="rounded-xl p-5 text-center border border-white/10"
                style={{ backgroundColor: "#0A0A0A" }}
              >
                <p
                  className="text-white text-2xl mb-1"
                  style={{ fontFamily: "'Compacta', Impact, 'Arial Narrow', sans-serif", fontWeight: 900, letterSpacing: "-0.02em" }}
                >
                  {ing.amount}
                </p>
                <p className="text-white/50 text-xs font-bold uppercase tracking-widest" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800 }}>
                  {ing.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Key claims */}
        <div>
          <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-8" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800 }}>
            Key Claims
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { claim: "No Crash", colour: "#FF9EDB" },
              { claim: "Sugar-Free Available", colour: "#8FDCCD" },
              { claim: "Aussie Made & Owned", colour: "#BB82EE" },
              { claim: "Clean Energy", colour: "#23E1CE" },
            ].map((c) => (
              <div
                key={c.claim}
                className="rounded-xl p-5 text-center border border-white/10"
                style={{ backgroundColor: "#0A0A0A" }}
              >
                <div
                  className="w-3 h-3 rounded-full mx-auto mb-3"
                  style={{ backgroundColor: c.colour }}
                />
                <p className="text-white font-bold" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800 }}>
                  {c.claim}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── 8. FLAVOUR COLOUR SYSTEM ── */}
      <Section id="flavours" style={{ backgroundColor: "#0A0A0A" }}>
        <SectionHeader label="09 — Flavour System" title="FLAVOUR COLOURS" />

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              name: "Blue Ice",
              primary: "#23E1CE",
              secondary: "#74CEBF",
              personality: "Cool, clean, crisp",
              desc: "The refreshing original. Icy cool with a clean finish. The one that started it all.",
              image: "/images/blue-ice.jpg",
            },
            {
              name: "Violet Voltage",
              primary: "#BB82EE",
              secondary: "#A66DE9",
              personality: "Electric, bold, vibrant",
              desc: "High voltage energy in every sip. Bold flavour that hits different. No apologies.",
              image: "/images/violet-voltage.jpg",
            },
            {
              name: "Hypermelon",
              primary: "#8FE9DA",
              secondary: "#74CEBF",
              personality: "Fresh, juicy, smooth",
              desc: "That summer feeling in a can. Fresh and juicy with smooth energy to match.",
              image: "/images/hypermelon.jpg",
            },
            {
              name: "Sherbert Bang",
              primary: "#FF6A71",
              secondary: "#E85368",
              personality: "Tangy, fun, explosive",
              desc: "Nostalgia hits different. Sweet, tangy, and absolutely packed with personality.",
              image: "/images/sherbert-bang.jpg",
            },
          ].map((flavour) => (
            <div
              key={flavour.name}
              className="rounded-2xl overflow-hidden border border-white/10 flex"
              style={{ backgroundColor: "#111111", minHeight: "280px" }}
            >
              {/* Left: colour header with name + personality + desc + swatches */}
              <div className="flex-1 flex flex-col">
                <div
                  className="p-6 flex flex-col justify-end"
                  style={{
                    background: `linear-gradient(135deg, ${flavour.primary}, ${flavour.secondary})`,
                    minHeight: "120px",
                  }}
                >
                  <p
                    className="text-3xl text-[#111111] leading-tight"
                    style={{ fontFamily: "'Compacta', Impact, 'Arial Narrow', sans-serif", fontWeight: 900, letterSpacing: "-0.02em" }}
                  >
                    {flavour.name.toUpperCase()}
                  </p>
                  <p className="text-[#111111]/60 text-xs font-bold uppercase tracking-widest mt-1" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800 }}>
                    {flavour.personality}
                  </p>
                </div>

                <div className="p-5 space-y-4 flex-1">
                  <p className="text-white/60 text-sm leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {flavour.desc}
                  </p>

                  <div className="flex gap-3">
                    <SwatchMini hex={flavour.primary} label="Primary" />
                    <SwatchMini hex={flavour.secondary} label="Secondary" />
                  </div>

                  <div className="flex gap-2">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-bold border border-white/20 text-white/70"
                      style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
                    >
                      Original
                    </span>
                    <span
                      className="px-3 py-1 rounded-full text-xs font-bold border border-white/20 text-white/70"
                      style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
                    >
                      Sugar-Free
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: product image */}
              <div
                className="w-36 shrink-0 flex items-center justify-center overflow-hidden"
                style={{ background: '#ffffff' }}
              >
                <img
                  src={flavour.image}
                  alt={flavour.name}
                  className="h-full w-full object-contain p-3"
                  style={{ maxHeight: "280px" }}
                />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── ICONOGRAPHY ── */}
      <Section style={{ backgroundColor: "#0A0A0A" }} id="iconography">
        <SectionHeader label="09.5 — Iconography" title="INGREDIENT ICONS" />
        <p style={{ fontFamily: "'Poppins', sans-serif", color: "#888", fontSize: "0.85rem", marginBottom: "2.5rem", lineHeight: 1.7 }}>
          Each Flipside ingredient is represented by a distinct 3D icon. These icons are used across packaging, digital, and marketing materials to communicate key product benefits at a glance.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { icon: "/images/icon-brain.png", label: "ALERTNESS", sublabel: "Improves", desc: "500mg of Taurine", bg: "linear-gradient(135deg, #e8d5f5, #c9a8f0)", border: "#9B6FD4" },
            { icon: "/images/icon-battery.png", label: "GUARANA", sublabel: "Made With", desc: "Lasting Energy", bg: "linear-gradient(135deg, #d5f5d5, #8FE98F)", border: "#4CAF50" },
            { icon: "/images/icon-vitamins.png", label: "VITAMINS", sublabel: "Packed With", desc: "Boosts Vitality", bg: "linear-gradient(135deg, #fdebd0, #f5c98c)", border: "#F5A623" },
            { icon: "/images/icon-lightning.png", label: "ENERGISED", sublabel: "Powerfully", desc: "80mg of Caffeine", bg: "linear-gradient(135deg, #fef9c3, #fde047)", border: "#EAB308" },
            { icon: "/images/icon-leaf.png", label: "PHYTOLIN", sublabel: "Fuelled By", desc: "Natural Energy", bg: "linear-gradient(135deg, #d5f5ec, #8FDCCD)", border: "#10B981" },
          ].map((item) => (
            <div key={item.label} style={{
              borderRadius: "16px", border: `2px solid ${item.border}40`,
              overflow: "hidden", background: "#111"
            }}>
              <div style={{ background: item.bg, padding: "2rem 1rem 1.5rem", display: "flex", justifyContent: "center", alignItems: "center", minHeight: "140px" }}>
                <img src={item.icon} alt={item.label} style={{ height: "90px", width: "90px", objectFit: "contain", filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.15))" }} />
              </div>
              <div style={{ padding: "1rem 1rem 1.25rem" }}>
                <p style={{ fontFamily: "'Poppins', sans-serif", color: item.border, fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.25rem" }}>
                  {item.sublabel}
                </p>
                <p style={{ fontFamily: "'Compacta', Impact, 'Arial Narrow', sans-serif", color: "#F5F5F5", fontSize: "1.1rem", letterSpacing: "0.05em", fontWeight: 900, marginBottom: "0.2rem" }}>
                  {item.label}
                </p>
                <p style={{ fontFamily: "'Poppins', sans-serif", color: "#666", fontSize: "0.7rem" }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "2rem", padding: "1.25rem 1.5rem", background: "#111", border: "1px solid #222", borderRadius: "12px" }}>
          <p style={{ fontFamily: "'Poppins', sans-serif", color: "#888", fontSize: "0.75rem", lineHeight: 1.7 }}>
            <span style={{ color: "#F5F5F5", fontWeight: 600 }}>Usage notes:</span> Icons should always appear on their corresponding gradient backgrounds. Do not recolour, flatten, or apply filters to the 3D icons. Maintain minimum icon size of 48px at all scales. Icons are available as PNG with transparent background.
          </p>
        </div>
      </Section>

      {/* ── FOUNDERS BADGE ── */}
      <Section style={{ backgroundColor: "#ffffff" }} id="founders">
        <SectionHeader label="09.6 — Founders" title="THE FOUNDERS BADGE" light />
        <p style={{ fontFamily: "'Poppins', sans-serif", color: "#444", fontSize: "0.85rem", marginBottom: "3rem", lineHeight: 1.7 }}>
          Troy and Adrian are the face behind Flipside. Their illustrated portrait is a brand asset — used selectively across packaging, social, and campaigns as a stamp of authenticity. It should feel like a discovery, not a feature.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left — the badge */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: "#f5f5f5", borderRadius: "16px", padding: "2rem", display: "flex", justifyContent: "center" }}>
              <img src="/images/founders-badge.png" alt="Troy & Adrian — Flipside founders" style={{ maxHeight: "280px", width: "auto", objectFit: "contain" }} />
            </div>
            <p style={{ fontFamily: "'Poppins', sans-serif", color: "#888", fontSize: "0.7rem", textAlign: "center", letterSpacing: "0.1em", textTransform: "uppercase" }}>Troy & Adrian — Founders, Flipside Energy</p>

            {/* The rhyme */}
            <div style={{ background: "#111", borderRadius: "12px", padding: "1.75rem 2rem", textAlign: "center" }}>
              <p style={{ fontFamily: "'Compacta', Impact, 'Arial Narrow', sans-serif", color: "#111", fontSize: "0.8rem", letterSpacing: "0.08em", lineHeight: 1.8, textTransform: "uppercase", textShadow: "none", userSelect: "none" }}>
                {/* Intentionally near-invisible on dark — mirrors the website footer treatment */}
                ROSES ARE RED, VIOLETS ARE BLUE,<br />
                TROY AND ADRIAN WANT TO RE-ENERGIZE YOU
              </p>
              <p style={{ fontFamily: "'Poppins', sans-serif", color: "#555", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", marginTop: "1rem" }}>
                ↑ Black on black — as used in the website footer
              </p>
            </div>
          </div>

          {/* Right — usage rules */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h3 style={{ fontFamily: "'Poppins', sans-serif", color: "#111", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.5rem" }}>The Brand Rhyme</h3>
            <div style={{ background: "#f9f9f9", border: "1px solid #eee", borderRadius: "12px", padding: "1.5rem 2rem", marginBottom: "0.5rem" }}>
              <p style={{ fontFamily: "'Compacta', Impact, 'Arial Narrow', sans-serif", color: "#111", fontSize: "1rem", letterSpacing: "0.05em", lineHeight: 1.9, textTransform: "uppercase" }}>
                Roses are red,<br />
                Violets are blue,<br />
                Troy and Adrian want<br />
                to re-energize you.
              </p>
            </div>
            <p style={{ fontFamily: "'Poppins', sans-serif", color: "#666", fontSize: "0.78rem", lineHeight: 1.7 }}>
              This rhyme is a core piece of brand identity. It&apos;s the founders&apos; voice — warm, direct, slightly cheeky. It humanises the brand and connects back to Troy and Adrian as real people who made something for you.
            </p>

            <h3 style={{ fontFamily: "'Poppins', sans-serif", color: "#111", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginTop: "1rem" }}>Usage Guidelines</h3>
            {[
              { icon: "✅", text: "Website footer — black on black, subtle. A reward for those who notice." },
              { icon: "✅", text: "Packaging — small, inside the can or on the base. An easter egg." },
              { icon: "✅", text: "Limited edition runs — as a featured design element." },
              { icon: "✅", text: "Campaign activations — where founders are the story." },
              { icon: "✅", text: "The founders badge pairs with the rhyme in storytelling content." },
              { icon: "✕", text: "Don't use on every piece of creative — scarcity makes it land harder." },
              { icon: "✕", text: "Don't use the badge without context — it needs to feel intentional." },
            ].map((item) => (
              <div key={item.text} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <span style={{ color: item.icon === "✅" ? "#10B981" : "#EF4444", fontSize: "0.8rem", marginTop: "2px", flexShrink: 0 }}>{item.icon}</span>
                <p style={{ fontFamily: "'Poppins', sans-serif", color: "#555", fontSize: "0.75rem", lineHeight: 1.6 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── BUTTON STYLES ── */}
      <Section style={{ backgroundColor: "#F5F5F5" }} id="buttons">
        <SectionHeader label="09.7 — UI Components" title="BUTTON STYLE" light />
        <p style={{ fontFamily: "'Poppins', sans-serif", color: "#555", fontSize: "0.85rem", marginBottom: "3rem", lineHeight: 1.7 }}>
          Flipside buttons have a signature asymmetric corner radius — rounded on the top-left and bottom-right, squared on the top-right and bottom-left. Paired with a hard offset drop shadow (no blur), a white fill, and a solid black border. Bold and deliberate.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left — live examples */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <h3 style={{ fontFamily: "'Poppins', sans-serif", color: "#111", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>Live Examples</h3>

            {/* Pink bg */}
            <div style={{ background: "#FF9EDB", borderRadius: "12px", padding: "2.5rem", display: "flex", flexDirection: "column", gap: "1.5rem", alignItems: "flex-start" }}>
              <button style={{
                background: "#ffffff", border: "2px solid #111111", color: "#111111",
                padding: "0.875rem 2rem", fontFamily: "'Compacta', Impact, 'Arial Narrow', sans-serif",
                fontSize: "1rem", fontWeight: 900, letterSpacing: "0.1em", textTransform: "uppercase",
                cursor: "pointer",
                borderRadius: "24px 4px 24px 4px",
                boxShadow: "5px -5px 0px 0px #111111",
              }}>CRACK A FLIPSIDE</button>

              <button style={{
                background: "#ffffff", border: "2px solid #111111", color: "#111111",
                padding: "0.875rem 2rem", fontFamily: "'Compacta', Impact, 'Arial Narrow', sans-serif",
                fontSize: "1rem", fontWeight: 900, letterSpacing: "0.1em", textTransform: "uppercase",
                cursor: "pointer",
                borderRadius: "24px 4px 24px 4px",
                boxShadow: "5px -5px 0px 0px #111111",
              }}>SHOP THE RANGE</button>
            </div>

            {/* Dark bg */}
            <div style={{ background: "#111111", borderRadius: "12px", padding: "2.5rem", display: "flex", flexDirection: "column", gap: "1.5rem", alignItems: "flex-start" }}>
              <button style={{
                background: "#ffffff", border: "2px solid #111111", color: "#111111",
                padding: "0.875rem 2rem", fontFamily: "'Compacta', Impact, 'Arial Narrow', sans-serif",
                fontSize: "1rem", fontWeight: 900, letterSpacing: "0.1em", textTransform: "uppercase",
                cursor: "pointer",
                borderRadius: "24px 4px 24px 4px",
                boxShadow: "5px -5px 0px 0px #ffffff",
              }}>JOIN THE FLIPPY FAM</button>
            </div>
          </div>

          {/* Right — anatomy */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h3 style={{ fontFamily: "'Poppins', sans-serif", color: "#111", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>Button Anatomy</h3>

            {[
              { prop: "Border Radius", value: "24px 4px 24px 4px", note: "Top-left + bottom-right rounded. Top-right + bottom-left squared." },
              { prop: "Box Shadow", value: "5px -5px 0px #111", note: "Hard shadow. No blur. Offset right (+X) and up (-Y). Creates a lifted, retro feel." },
              { prop: "Background", value: "#FFFFFF", note: "Always white fill — works on any coloured background." },
              { prop: "Border", value: "2px solid #111111", note: "Solid black. On dark backgrounds, use white shadow instead." },
              { prop: "Font", value: "Impact / Poppins 900", note: "All caps. Bold. Tight letter-spacing." },
              { prop: "Padding", value: "0.875rem 2rem", note: "Generous horizontal padding. Button should feel weighty." },
            ].map((item) => (
              <div key={item.prop} style={{ padding: "1rem 1.25rem", background: "#fff", border: "1px solid #E5E5E5", borderRadius: "8px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.25rem" }}>
                  <p style={{ fontFamily: "'Poppins', sans-serif", color: "#111", fontSize: "0.72rem", fontWeight: 700 }}>{item.prop}</p>
                  <code style={{ fontFamily: "monospace", background: "#F5F5F5", color: "#555", fontSize: "0.65rem", padding: "2px 8px", borderRadius: "4px" }}>{item.value}</code>
                </div>
                <p style={{ fontFamily: "'Poppins', sans-serif", color: "#888", fontSize: "0.7rem", lineHeight: 1.5 }}>{item.note}</p>
              </div>
            ))}

            <div style={{ marginTop: "0.5rem", padding: "1rem 1.25rem", background: "#fff8e6", border: "1px solid #F5A62340", borderRadius: "8px" }}>
              <p style={{ fontFamily: "'Poppins', sans-serif", color: "#111", fontSize: "0.7rem", fontWeight: 700, marginBottom: "0.25rem" }}>CSS Snippet</p>
              <code style={{ fontFamily: "monospace", color: "#555", fontSize: "0.65rem", lineHeight: 1.8, display: "block", whiteSpace: "pre" }}>
{`border-radius: 24px 4px 24px 4px;
box-shadow: 5px -5px 0px 0px #111;
border: 2px solid #111111;
background: #ffffff;`}
              </code>
            </div>
          </div>
        </div>
      </Section>

      {/* ── HEADLINE HIGHLIGHT STYLE ── */}
      <Section style={{ backgroundColor: "#0A0A0A" }} id="headlines">
        <SectionHeader label="09.8 — Typography" title="HEADLINE HIGHLIGHT STYLE" />
        <p style={{ fontFamily: "'Poppins', sans-serif", color: "#888", fontSize: "0.85rem", marginBottom: "3rem", lineHeight: 1.7 }}>
          Key words in headlines are punched out in a signature black highlight box — slightly rotated, pink border, hard offset shadow. Used to create visual emphasis and energy without relying on colour alone.
        </p>

        {/* Live examples */}
        <div style={{ display: "flex", flexDirection: "column", gap: "3rem", marginBottom: "3rem" }}>

          {/* Example 1 — light blue bg */}
          <div style={{ background: "#BCEFF9", borderRadius: "12px", padding: "2.5rem 2rem", display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
            <span style={{
              fontFamily: "'Compacta', Impact, 'Arial Narrow', sans-serif",
              fontSize: "clamp(1.8rem, 5vw, 2.8rem)", fontWeight: 900,
              color: "#111", letterSpacing: "-0.01em", textTransform: "uppercase"
            }}>CHOOSE YOUR</span>
            <span style={{
              fontFamily: "'Compacta', Impact, 'Arial Narrow', sans-serif",
              fontSize: "clamp(1.8rem, 5vw, 2.8rem)", fontWeight: 900,
              color: "#ffffff", letterSpacing: "-0.01em", textTransform: "uppercase",
              background: "#111111",
              border: "3px solid #FF78B3",
              padding: "0.2em 0.6em",
              display: "inline-block",
              transform: "rotate(-1.5deg)",
              boxShadow: "6px 6px 0px 0px #111111",
              position: "relative",
            }}>ENERGY SIDE KICK</span>
          </div>

          {/* Example 2 — mint bg */}
          <div style={{ background: "#8FDCCD", borderRadius: "12px", padding: "2.5rem 2rem", display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
            <span style={{
              fontFamily: "'Compacta', Impact, 'Arial Narrow', sans-serif",
              fontSize: "clamp(1.8rem, 5vw, 2.8rem)", fontWeight: 900,
              color: "#ffffff", letterSpacing: "-0.01em", textTransform: "uppercase",
              background: "#111111",
              border: "3px solid #FF78B3",
              padding: "0.2em 0.6em",
              display: "inline-block",
              transform: "rotate(-1.5deg)",
              boxShadow: "6px 6px 0px 0px #111111",
            }}>STEADY ENERGY</span>
            <span style={{
              fontFamily: "'Compacta', Impact, 'Arial Narrow', sans-serif",
              fontSize: "clamp(1.8rem, 5vw, 2.8rem)", fontWeight: 900,
              color: "#111", letterSpacing: "-0.01em", textTransform: "uppercase"
            }}>, ALL DAY.</span>
          </div>
        </div>

        {/* Anatomy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h3 style={{ fontFamily: "'Poppins', sans-serif", color: "#F5F5F5", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>Highlight Box Anatomy</h3>
            {[
              { prop: "Background", value: "#111111", note: "Always black. High contrast against any brand colour." },
              { prop: "Border", value: "3px solid #FF78B3", note: "Hot pink border — the Flipside signature." },
              { prop: "Rotation", value: "rotate(-1.5deg)", note: "Slight anti-clockwise tilt. Never more than 2°." },
              { prop: "Box Shadow", value: "6px 6px 0px #111", note: "Hard offset. No blur. Down and right (+X, +Y)." },
              { prop: "Text colour", value: "#FFFFFF", note: "White text inside the box only." },
              { prop: "Font", value: "Impact / DharmaGothicE 900", note: "Same display font as all hero headlines." },
            ].map((item) => (
              <div key={item.prop} style={{ padding: "0.875rem 1.25rem", background: "#111", border: "1px solid #222", borderRadius: "8px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.2rem", gap: "1rem" }}>
                  <p style={{ fontFamily: "'Poppins', sans-serif", color: "#F5F5F5", fontSize: "0.7rem", fontWeight: 700 }}>{item.prop}</p>
                  <code style={{ fontFamily: "monospace", background: "#1A1A1A", color: "#C9A84C", fontSize: "0.6rem", padding: "2px 8px", borderRadius: "4px", whiteSpace: "nowrap" }}>{item.value}</code>
                </div>
                <p style={{ fontFamily: "'Poppins', sans-serif", color: "#666", fontSize: "0.68rem", lineHeight: 1.5 }}>{item.note}</p>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h3 style={{ fontFamily: "'Poppins', sans-serif", color: "#F5F5F5", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>CSS Snippet</h3>
            <div style={{ background: "#111", border: "1px solid #222", borderRadius: "8px", padding: "1.25rem 1.5rem" }}>
              <code style={{ fontFamily: "monospace", color: "#8FE9DA", fontSize: "0.65rem", lineHeight: 2, display: "block", whiteSpace: "pre" }}>
{`background: #111111;
border: 3px solid #FF78B3;
color: #ffffff;
transform: rotate(-1.5deg);
box-shadow: 6px 6px 0px 0px #111111;
padding: 0.2em 0.6em;
display: inline-block;`}
              </code>
            </div>

            <h3 style={{ fontFamily: "'Poppins', sans-serif", color: "#F5F5F5", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginTop: "0.5rem" }}>Usage Rules</h3>
            {[
              { icon: "✅", text: "Highlight 1–3 key words per headline — not the whole thing." },
              { icon: "✅", text: "Works on any Flipside brand colour background." },
              { icon: "✅", text: "Angle should always be slightly anti-clockwise (negative rotation)." },
              { icon: "✅", text: "Pair with un-highlighted plain black text for contrast." },
              { icon: "✕", text: "Don't use on dark/black backgrounds — the shadow disappears." },
              { icon: "✕", text: "Don't highlight more than one phrase per headline." },
              { icon: "✕", text: "Don't rotate more than 2° — subtle tilt only." },
            ].map((item) => (
              <div key={item.text} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <span style={{ color: item.icon === "✅" ? "#10B981" : "#EF4444", fontSize: "0.8rem", marginTop: "2px", flexShrink: 0 }}>{item.icon}</span>
                <p style={{ fontFamily: "'Poppins', sans-serif", color: "#888", fontSize: "0.72rem", lineHeight: 1.6 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── 9. PHOTOGRAPHY DIRECTION ── */}
      <Section style={{ backgroundColor: "#111111" }} id="photography">
        <SectionHeader label="10 — Creative Direction" title="PHOTOGRAPHY STYLE" />

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Do */}
          <div>
            <p className="text-green-400 text-xs font-bold uppercase tracking-widest mb-6" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800 }}>
              ✓ Do
            </p>
            <div className="space-y-3">
              {[
                "Vibrant backgrounds matching flavour colours",
                "Real people, real energy — UGC style preferred",
                "Movement, action, lifestyle shots",
                "Natural light preferred",
                "Authentic moments over staged scenes",
                "High energy, high contrast editing",
                "Bold crop, close product shots",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl p-4 border border-green-500/20" style={{ backgroundColor: "rgba(34,197,94,0.05)" }}>
                  <span className="text-green-400 mt-0.5 shrink-0">✓</span>
                  <p className="text-white/80 text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Don't */}
          <div>
            <p className="text-red-400 text-xs font-bold uppercase tracking-widest mb-6" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800 }}>
              ✕ Don&apos;t
            </p>
            <div className="space-y-3">
              {[
                "Over-produced, studio-perfect shots",
                "Stock photography or generic imagery",
                "Dark, moody, low-energy aesthetics",
                "Corporate or formal styling",
                "Heavy filters that lose the colours",
                "Cluttered or busy backgrounds",
                "Anything that looks like the competition",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl p-4 border border-red-500/20" style={{ backgroundColor: "rgba(239,68,68,0.05)" }}>
                  <span className="text-red-400 mt-0.5 shrink-0">✕</span>
                  <p className="text-white/70 text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Aesthetic summary */}
        <div
          className="rounded-2xl p-10"
          style={{ background: "linear-gradient(135deg, #23E1CE, #BB82EE)" }}
        >
          <p className="text-[#111111]/50 text-xs font-bold uppercase tracking-widest mb-4" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800 }}>
            Aesthetic Summary
          </p>
          <p
            className="text-[#111111] text-3xl md:text-5xl leading-tight"
            style={{ fontFamily: "'Compacta', Impact, 'Arial Narrow', sans-serif", fontWeight: 900, letterSpacing: "-0.02em" }}
          >
            REAL PEOPLE.
            <br />
            REAL ENERGY.
            <br />
            NO FILTER.
          </p>
        </div>
      </Section>

      {/* ── 10. SOCIAL MEDIA ── */}
      <Section id="social" style={{ backgroundColor: "#0A0A0A" }}>
        <SectionHeader label="11 — Social Media" title="SOCIAL GUIDELINES" />

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Handles & hashtags */}
          <div className="space-y-6">
            <div className="rounded-2xl p-8 border border-white/10" style={{ backgroundColor: "#111111" }}>
              <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-4" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800 }}>
                Platform Handle
              </p>
              <p
                className="text-white text-4xl"
                style={{ fontFamily: "'Compacta', Impact, 'Arial Narrow', sans-serif", fontWeight: 900, letterSpacing: "-0.02em" }}
              >
                @flipsideenergy
              </p>
              <p className="text-white/40 text-sm mt-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Instagram · TikTok · Facebook · Twitter/X
              </p>
            </div>

            <div className="rounded-2xl p-8 border border-white/10" style={{ backgroundColor: "#111111" }}>
              <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-4" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800 }}>
                Primary Hashtags
              </p>
              <div className="flex flex-wrap gap-2">
                {["#FlipsideEnergy", "#FlippyFam", "#BetterSideOfEnergy", "#AussieMade"].map((h) => (
                  <span
                    key={h}
                    className="px-4 py-2 rounded-full text-sm font-bold"
                    style={{
                      backgroundColor: "#FF9EDB",
                      color: "#111111",
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 900,
                    }}
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Format guidelines */}
          <div className="space-y-4">
            <div className="rounded-2xl p-6 border border-white/10" style={{ backgroundColor: "#111111" }}>
              <p className="text-white font-bold mb-2" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800 }}>
                📱 Stories / Reels
              </p>
              <p className="text-white/60 text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Vertical 9:16 format. Bold text overlay using display font. Flavour background colours. Fast cuts,
                high energy music. UGC encouraged.
              </p>
            </div>
            <div className="rounded-2xl p-6 border border-white/10" style={{ backgroundColor: "#111111" }}>
              <p className="text-white font-bold mb-2" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800 }}>
                📸 Feed / Grid
              </p>
              <p className="text-white/60 text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Colourful, high energy. Alternating product shots and lifestyle content. Consistent colour treatment
                across flavour ranges. Bold crops.
              </p>
            </div>
            <div className="rounded-2xl p-6 border border-white/10" style={{ backgroundColor: "#111111" }}>
              <p className="text-white font-bold mb-2" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800 }}>
                🤙 Community (FLIPPY FAM)
              </p>
              <p className="text-white/60 text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Repost UGC with credit. Engage in comments with brand voice (direct, fun, Aussie). Celebrate the
                community. Make people feel like insiders.
              </p>
            </div>
            <div className="rounded-2xl p-6 border border-white/10" style={{ backgroundColor: "#111111" }}>
              <p className="text-white font-bold mb-2" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800 }}>
                📝 Caption Style
              </p>
              <p className="text-white/60 text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Short punchy sentences. Lead with the hook. End with CTA or hashtag. Maximum 3–4 lines before the
                hashtag stack. Match the energy of the image.
              </p>
            </div>
          </div>
        </div>

        {/* Platform preview mockups */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { platform: "Instagram", format: "Feed 1:1", colour: "#FF9EDB" },
            { platform: "TikTok", format: "Video 9:16", colour: "#23E1CE" },
            { platform: "Facebook", format: "Post 1.91:1", colour: "#BB82EE" },
            { platform: "Twitter/X", format: "Card 16:9", colour: "#FF6A71" },
          ].map((p) => (
            <div
              key={p.platform}
              className="rounded-xl overflow-hidden border border-white/10"
              style={{ backgroundColor: "#111111" }}
            >
              <div
                className="h-24 flex items-center justify-center"
                style={{ backgroundColor: p.colour }}
              >
                <p
                  className="text-[#111111] text-lg"
                  style={{ fontFamily: "'Compacta', Impact, 'Arial Narrow', sans-serif", fontWeight: 900, letterSpacing: "-0.02em" }}
                >
                  FLIPSIDE
                </p>
              </div>
              <div className="p-4">
                <p className="text-white text-sm font-bold" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800 }}>
                  {p.platform}
                </p>
                <p className="text-white/40 text-xs" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {p.format}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── FOOTER ── */}
      <footer style={{ backgroundColor: "#111111", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <img
                src="/images/flipside-logo.png"
                alt="Flipside Energy"
                style={{ height: "48px", width: "auto", marginBottom: "0.75rem" }}
              />
              <p className="text-white/40 text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Brand Guidelines v1.0 — 2025
              </p>
            </div>

            <div className="text-right">
              <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800 }}>
                Brand Identity by
              </p>
              <a
                href="https://dynamiccode.com.au"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-xl font-bold hover:text-[#FF9EDB] transition-colors"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 900 }}
              >
                Dynamic Code
              </a>
              <p className="text-white/30 text-xs mt-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
                dynamiccode.com.au
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <p className="text-white/30 text-xs" style={{ fontFamily: "'Poppins', sans-serif" }}>
              © 2026 Flipside Energy. All rights reserved. Aussie made & owned.
            </p>
            <div
              className="px-4 py-2 rounded-full text-xs font-bold border border-white/20 text-white/50"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
            >
              No crash. No B.S.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

// ─── Mini swatch for flavour cards ───────────────────────────────────────────
function SwatchMini({ hex, label }: { hex: string; label: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      onClick={copy}
      className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 hover:border-white/30 transition-colors cursor-pointer"
      style={{ backgroundColor: "#0A0A0A" }}
      title={`Copy ${hex}`}
    >
      <div className="w-5 h-5 rounded-md shrink-0" style={{ backgroundColor: hex }} />
      <div className="text-left">
        <p className="text-white/60 text-xs font-bold" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
          {label}
        </p>
        <p className="text-white/30 text-xs" style={{ fontFamily: "'Poppins', sans-serif" }}>
          {copied ? "✓ Copied" : hex}
        </p>
      </div>
    </button>
  );
}
