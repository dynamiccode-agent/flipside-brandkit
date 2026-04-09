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
    { label: "Logo", href: "#logo" },
    { label: "Colours", href: "#colours" },
    { label: "Typography", href: "#typography" },
    { label: "Voice", href: "#voice" },
    { label: "Messaging", href: "#messaging" },
    { label: "Flavours", href: "#flavours" },
    { label: "Social", href: "#social" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10"
      style={{ backgroundColor: "rgba(17,17,17,0.95)", backdropFilter: "blur(12px)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
        <span
          className="font-display text-white text-xl tracking-tight"
          style={{ fontFamily: "Impact, 'Arial Narrow', sans-serif", fontWeight: 900, letterSpacing: "-0.02em" }}
        >
          FLIPSIDE
        </span>
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
        style={{ fontFamily: "Impact, 'Arial Narrow', sans-serif", fontWeight: 900, letterSpacing: "-0.02em" }}
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

          <h1
            className="text-[80px] sm:text-[120px] md:text-[160px] lg:text-[200px] leading-none text-[#111111]"
            style={{
              fontFamily: "Impact, 'Arial Narrow', sans-serif",
              fontWeight: 900,
              letterSpacing: "-0.03em",
            }}
          >
            FLIPSIDE
            <br />
            ENERGY
          </h1>

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
                style={{ fontFamily: "Impact, 'Arial Narrow', sans-serif", fontWeight: 900, letterSpacing: "-0.02em" }}
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

      {/* ── 3. LOGO USAGE ── */}
      <Section id="logo" style={{ backgroundColor: "#F5F5F5" }}>
        <SectionHeader label="03 — Logo Usage" title="LOGO SYSTEM" light />

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Dark bg */}
          <div className="rounded-2xl p-10 flex flex-col items-center gap-4 border border-black/10" style={{ backgroundColor: "#111111" }}>
            <div
              className="text-5xl text-white"
              style={{ fontFamily: "Impact, 'Arial Narrow', sans-serif", fontWeight: 900, letterSpacing: "-0.02em" }}
            >
              FLIPSIDE
            </div>
            <p className="text-white/40 text-xs font-bold uppercase tracking-widest text-center" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Logo on Dark
            </p>
          </div>

          {/* Light bg */}
          <div className="rounded-2xl p-10 flex flex-col items-center gap-4 border border-black/10 bg-white">
            <div
              className="text-5xl text-[#111111]"
              style={{ fontFamily: "Impact, 'Arial Narrow', sans-serif", fontWeight: 900, letterSpacing: "-0.02em" }}
            >
              FLIPSIDE
            </div>
            <p className="text-black/40 text-xs font-bold uppercase tracking-widest text-center" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Logo on Light
            </p>
          </div>

          {/* Coloured bg */}
          <div
            className="rounded-2xl p-10 flex flex-col items-center gap-4 border border-black/10"
            style={{ background: "linear-gradient(135deg, #FF9EDB, #8FDCCD)" }}
          >
            <div
              className="text-5xl text-[#111111]"
              style={{ fontFamily: "Impact, 'Arial Narrow', sans-serif", fontWeight: 900, letterSpacing: "-0.02em" }}
            >
              FLIPSIDE
            </div>
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
              { label: "Don't stretch or distort", example: "FLIPSIDE", style: { transform: "scaleX(1.5)" } },
              { label: "Don't add drop shadows", example: "FLIPSIDE", style: { textShadow: "4px 4px 8px rgba(0,0,0,0.5)" } },
              { label: "Don't use low opacity", example: "FLIPSIDE", style: { opacity: 0.2 } },
              { label: "Don't rotate", example: "FLIPSIDE", style: { transform: "rotate(-15deg)" } },
            ].map((d) => (
              <div key={d.label} className="rounded-xl p-5 border-2 border-red-400/30 bg-red-50">
                <div className="flex items-center justify-center h-16 mb-3">
                  <span
                    className="text-2xl text-[#111111] block"
                    style={{
                      fontFamily: "Impact, 'Arial Narrow', sans-serif",
                      fontWeight: 900,
                      letterSpacing: "-0.02em",
                      ...d.style,
                    }}
                  >
                    {d.example}
                  </span>
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
        <SectionHeader label="04 — Colour Palette" title="COLOUR SYSTEM" />

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
        <SectionHeader label="05 — Typography" title="TYPE SYSTEM" />

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
                fontFamily: "Impact, 'Arial Narrow', sans-serif",
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
                fontFamily: "Impact, 'Arial Narrow', sans-serif",
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
                fontFamily: "Impact, 'Arial Narrow', sans-serif",
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
                      ? "Impact, 'Arial Narrow', sans-serif"
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
            style={{ fontFamily: "Impact, 'Arial Narrow', sans-serif", fontWeight: 900, letterSpacing: "-0.02em" }}
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

      {/* ── 6. VOICE & TONE ── */}
      <Section id="voice" style={{ backgroundColor: "#0A0A0A" }}>
        <SectionHeader label="06 — Voice & Tone" title="VOICE & TONE" />

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
                  fontFamily: "Impact, 'Arial Narrow', sans-serif",
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
                  <p className="text-white/50 line-through" style={{ fontFamily: "'Poppins', sans-serif" }}>
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
        <SectionHeader label="07 — Messaging" title="MESSAGING SYSTEM" />

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
                style={{ fontFamily: "Impact, 'Arial Narrow', sans-serif", fontWeight: 900, letterSpacing: "-0.02em" }}
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
                  style={{ fontFamily: "Impact, 'Arial Narrow', sans-serif", fontWeight: 900, letterSpacing: "-0.02em" }}
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
                  style={{ fontFamily: "Impact, 'Arial Narrow', sans-serif", fontWeight: 900, letterSpacing: "-0.02em" }}
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
                  style={{ fontFamily: "Impact, 'Arial Narrow', sans-serif", fontWeight: 900, letterSpacing: "-0.02em" }}
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
        <SectionHeader label="08 — Flavour System" title="FLAVOUR COLOURS" />

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              name: "Blue Ice",
              primary: "#23E1CE",
              secondary: "#74CEBF",
              personality: "Cool, clean, crisp",
              desc: "The refreshing original. Icy cool with a clean finish. The one that started it all.",
              textDark: true,
            },
            {
              name: "Violet Voltage",
              primary: "#BB82EE",
              secondary: "#A66DE9",
              personality: "Electric, bold, vibrant",
              desc: "High voltage energy in every sip. Bold flavour that hits different. No apologies.",
              textDark: true,
            },
            {
              name: "Hypermelon",
              primary: "#8FE9DA",
              secondary: "#74CEBF",
              personality: "Fresh, juicy, smooth",
              desc: "That summer feeling in a can. Fresh and juicy with smooth energy to match.",
              textDark: true,
            },
            {
              name: "Sherbert Bang",
              primary: "#FF6A71",
              secondary: "#E85368",
              personality: "Tangy, fun, explosive",
              desc: "Nostalgia hits different. Sweet, tangy, and absolutely packed with personality.",
              textDark: true,
            },
          ].map((flavour) => (
            <div
              key={flavour.name}
              className="rounded-2xl overflow-hidden border border-white/10"
              style={{ backgroundColor: "#111111" }}
            >
              {/* Gradient header */}
              <div
                className="h-32 relative"
                style={{
                  background: `linear-gradient(135deg, ${flavour.primary}, ${flavour.secondary})`,
                }}
              >
                <div className="absolute inset-0 p-6 flex items-end">
                  <p
                    className="text-4xl text-[#111111]"
                    style={{ fontFamily: "Impact, 'Arial Narrow', sans-serif", fontWeight: 900, letterSpacing: "-0.02em" }}
                  >
                    {flavour.name.toUpperCase()}
                  </p>
                </div>
              </div>

              <div className="p-6 space-y-5">
                {/* Personality */}
                <div>
                  <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800 }}>
                    Personality
                  </p>
                  <p className="text-white font-bold" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
                    {flavour.personality}
                  </p>
                </div>

                {/* Description */}
                <p className="text-white/60 text-sm leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {flavour.desc}
                </p>

                {/* Colour swatches */}
                <div className="flex gap-3">
                  <SwatchMini hex={flavour.primary} label="Primary" />
                  <SwatchMini hex={flavour.secondary} label="Secondary" />
                </div>

                {/* Available variants */}
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
          ))}
        </div>
      </Section>

      {/* ── 9. PHOTOGRAPHY DIRECTION ── */}
      <Section style={{ backgroundColor: "#111111" }} id="photography">
        <SectionHeader label="09 — Creative Direction" title="PHOTOGRAPHY STYLE" />

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
                  <p className="text-white/50 line-through text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>
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
            style={{ fontFamily: "Impact, 'Arial Narrow', sans-serif", fontWeight: 900, letterSpacing: "-0.02em" }}
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
        <SectionHeader label="10 — Social Media" title="SOCIAL GUIDELINES" />

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Handles & hashtags */}
          <div className="space-y-6">
            <div className="rounded-2xl p-8 border border-white/10" style={{ backgroundColor: "#111111" }}>
              <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-4" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800 }}>
                Platform Handle
              </p>
              <p
                className="text-white text-4xl"
                style={{ fontFamily: "Impact, 'Arial Narrow', sans-serif", fontWeight: 900, letterSpacing: "-0.02em" }}
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
                  style={{ fontFamily: "Impact, 'Arial Narrow', sans-serif", fontWeight: 900, letterSpacing: "-0.02em" }}
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
              <p
                className="text-white text-5xl mb-3"
                style={{ fontFamily: "Impact, 'Arial Narrow', sans-serif", fontWeight: 900, letterSpacing: "-0.02em" }}
              >
                FLIPSIDE
                <br />
                ENERGY
              </p>
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
              © 2025 Flipside Energy. All rights reserved. Aussie made & owned.
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
