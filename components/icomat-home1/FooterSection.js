"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ── SVG: Eyrion stacked-waves logo ────────────────────────────
const WavesLogo = () => (
  <svg width="88" height="72" viewBox="0 0 88 72" fill="none" aria-label="Eyrion waves mark">
    <path d="M4  14 Q22  2 44 14 Q66  2 84 14" stroke="white" strokeWidth="2.2" strokeLinecap="round" fill="none" opacity="0.55"/>
    <path d="M4  26 Q22 14 44 26 Q66 14 84 26" stroke="white" strokeWidth="2.2" strokeLinecap="round" fill="none" opacity="0.68"/>
    <path d="M4  38 Q22 26 44 38 Q66 26 84 38" stroke="white" strokeWidth="2.2" strokeLinecap="round" fill="none" opacity="0.82"/>
    <path d="M4  50 Q22 38 44 50 Q66 38 84 50" stroke="white" strokeWidth="2.2" strokeLinecap="round" fill="none" opacity="0.92"/>
    <path d="M4  62 Q22 50 44 62 Q66 50 84 62" stroke="white" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
  </svg>
);

// ── Social icons ───────────────────────────────────────────────
const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452H17.21v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.985V9h3.101v1.561h.046c.433-.818 1.49-1.681 3.065-1.681 3.275 0 3.879 2.156 3.879 4.961v6.611zM5.337 7.433a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6zM6.927 20.452H3.742V9h3.185v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.734-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
  </svg>
);
const YouTubeIcon = () => (
  <svg width="20" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

// Section titles — lime accent + title case (reference layout)
const FOOTER_HEADING_COLOR = "#d4ff6a";
const FOOTER_LINK_COLOR = "rgba(255,255,255,0.92)";

// ── WordPress service routes (match `src/app/wordpress/<slug>/page.js`) ──
const WORDPRESS_SERVICE_LINKS = [
  { label: "WordPress website design", href: "/wordpress/design" },
  { label: "WordPress retained services", href: "/wordpress/retained-services" },
  { label: "WordPress backups", href: "/wordpress/backups" },
  { label: "WordPress conversion", href: "/wordpress/convert" },
  { label: "WordPress security", href: "/wordpress/security" },
  { label: "WordPress search engine optimization", href: "/wordpress/search-engine-optimization" },
  { label: "WordPress support", href: "/wordpress/support" },
  { label: "WooCommerce developer", href: "/wordpress/woocommerce" },
  { label: "WordPress development", href: "/wordpress/development" },
  { label: "WordPress hosting", href: "/wordpress/hosting" },
  { label: "WordPress compliance", href: "/wordpress/compliance" },
  { label: "WordPress Divi theme", href: "/wordpress/divi" },
  { label: "WordPress migration", href: "/wordpress/migration" },
  { label: "WordPress GDPR compliance", href: "/wordpress/gdpr-compliance" },
  { label: "WordPress theme experts", href: "/wordpress/theme" },
  { label: "Sell my web design company", href: "/wordpress/sell-my-design-company" },
  { label: "WordPress maintenance", href: "/wordpress/maintenance" },
  { label: "WordPress ADA compliance", href: "/wordpress/ada-compliance" },
  { label: "Marketing Pro", href: "/wordpress/marketing-pro" },
  { label: "WordPress Elementor builder", href: "/wordpress/elementor" },
  { label: "WordPress PCI compliance", href: "/wordpress/pci-compliance" },
  { label: "WordPress speed optimization", href: "/wordpress/speed-optimization" },
  { label: "WordPress white label", href: "/wordpress/white-label-wordpress" },
];

// ── Nav data ──────────────────────────────────────────────────
const NAV_WORK_LINKS = [
  { label: "Markets we serve", href: "/markets" },
  { label: "Industries we serve", href: "/industries" },
];

const NAV_ABOUT_LINKS = [
  { label: "Why Eyrion", href: "/why-eyrion" },
  { label: "Read the blog", href: "/blog" },
  { label: "How to sell your agency guide", href: "/sell-my-agency" },
  { label: "WordPress resource guides", href: "/resources" },
  { label: "WordPress security bulletins", href: "/security-bulletins" },
  { label: "Compare WordPress agencies", href: "/reviews" },
  { label: "Privacy policy", href: "/privacy-policy" },
  { label: "AI disclosure (llms.txt)", href: "/llms.txt" },
];

const NAV_MAIN = [
  {
    label: "Our services",
    href: "/wordpress",
    sub: WORDPRESS_SERVICE_LINKS,
  },
  {
    label: "Our work",
    href: "/work",
    sub: NAV_WORK_LINKS,
  },
  {
    label: "About us",
    href: "/about-us",
    sub: NAV_ABOUT_LINKS,
  },
];

const NAV_LEGAL = [
  { label: "LEGAL", href: "/about-us", bold: true },
  { label: "PRIVACY POLICY", href: "/privacy-policy", bold: false },
];

const SOCIALS = [
  { icon: <LinkedInIcon />, href: "#linkedin", label: "LinkedIn" },
  { icon: <XIcon />,        href: "#x",        label: "X (Twitter)" },
  { icon: <YouTubeIcon />,  href: "#youtube",  label: "YouTube" },
];

/** Fill column 1 top→bottom, then column 2… (matches reference mega-menu columns). */
function splitSubsIntoSequentialColumns(subs, columnCount) {
  if (columnCount <= 1) return [subs];
  const n = subs.length;
  const base = Math.floor(n / columnCount);
  const rem = n % columnCount;
  const cols = [];
  let idx = 0;
  for (let c = 0; c < columnCount; c++) {
    const take = base + (c < rem ? 1 : 0);
    cols.push(subs.slice(idx, idx + take));
    idx += take;
  }
  return cols;
}

const SUB_LINK_STYLE = {
  color: FOOTER_LINK_COLOR,
  fontSize: "clamp(0.7rem, 0.82vw, 0.8rem)",
  fontWeight: 400,
  letterSpacing: "0.02em",
  lineHeight: 1.35,
  textDecoration: "none",
  transition: "color 0.2s",
};

function FooterSubLink({ item }) {
  return (
    <a
      href={item.href}
      className="footer-hover-line min-w-0 max-w-full whitespace-normal break-words [overflow-wrap:anywhere]"
      style={SUB_LINK_STYLE}
      onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
      onMouseLeave={(e) => (e.currentTarget.style.color = FOOTER_LINK_COLOR)}
    >
      {item.label}
    </a>
  );
}

function FooterServicesLinks({ subs }) {
  const wrapRef = useRef(null);
  const [columnCount, setColumnCount] = useState(3);

  useLayoutEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const applyWidth = (w) => {
      if (w < 320) setColumnCount(1);
      else if (w < 480) setColumnCount(2);
      else setColumnCount(3);
    };
    applyWidth(el.getBoundingClientRect().width);
    const ro = new ResizeObserver(([entry]) => {
      applyWidth(entry.contentRect.width);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const columns = useMemo(
    () => splitSubsIntoSequentialColumns(subs, columnCount),
    [subs, columnCount]
  );

  return (
    <div
      ref={wrapRef}
      className="flex w-full min-w-0 items-start gap-x-[clamp(14px,2vw,28px)]"
    >
      {columns.map((chunk, i) => (
        <div key={i} className="flex min-w-0 flex-1 flex-col gap-[0.35rem]">
          {chunk.map((item) => (
            <FooterSubLink key={item.label} item={item} />
          ))}
        </div>
      ))}
    </div>
  );
}

// ── Wave lines background ──────────────────────────────────────
function WaveLines() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let W = 0, H = 0, raf = null, tick = 0;

    const LINE_SPACING = 22;
    const AMPLITUDE    = 6;
    const WAVELENGTH   = 220;
    const SPEED        = 0.6;
    const BASE_OPACITY = 0.055;
    const LINE_WIDTH   = 0.85;
    const TILT         = 0.18;

    function resize() {
      const rect = canvas.getBoundingClientRect();
      W = canvas.width  = Math.round(rect.width)  || canvas.offsetWidth;
      H = canvas.height = Math.round(rect.height) || canvas.offsetHeight;
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      tick += SPEED;

      const rowCount = Math.ceil(H / LINE_SPACING) + 2;
      ctx.lineWidth = LINE_WIDTH;

      for (let r = -1; r < rowCount; r++) {
        const baseY = r * LINE_SPACING;
        const opacityMod = 0.7 + 0.3 * ((r % 5) / 5);
        ctx.strokeStyle = `rgba(255,255,255,${(BASE_OPACITY * opacityMod).toFixed(4)})`;
        ctx.beginPath();

        for (let x = 0; x <= W; x += 2) {
          const tiltY = x * TILT;
          const phase = (r * 0.55) + (tick / WAVELENGTH) * (Math.PI * 2);
          const waveY = Math.sin((x / WAVELENGTH) * Math.PI * 2 - phase) * AMPLITUDE;
          const y = baseY + tiltY + waveY;
          if (x === 0) ctx.moveTo(x, y);
          else         ctx.lineTo(x, y);
        }

        ctx.stroke();
      }

      raf = requestAnimationFrame(draw);
    }

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();
    draw();

    return () => {
      ro.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        display: "block",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}

/** Matches UnlockingSection page end so the veil reads as the prior section sliding away. */
const PRE_FOOTER_SURFACE = "#f7f7f5";

// ── Footer ─────────────────────────────────────────────────────
export default function FooterSection() {
  const footerRef = useRef(null);
  const veilRef   = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const footer = footerRef.current;
      const veil   = veilRef.current;
      if (!footer || !veil) return;

      gsap.set(veil, { yPercent: 0 });

      ScrollTrigger.create({
        trigger: footer,
        start: "top bottom",
        end: "top 22%",
        scrub: 1.15,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const p = self.progress;
          gsap.set(veil, {
            yPercent: -100 * p,
            force3D: true,
          });
        },
        onLeaveBack: () => {
          gsap.to(veil, {
            yPercent: 0,
            duration: 0.55,
            ease: "power2.out",
            overwrite: true,
          });
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      style={{
        position: "relative",
        width: "100%",
        minHeight: "720px",
        background: "#162D24",
        overflow: "hidden",
        padding: "clamp(16px, 2.5vw, 28px) clamp(16px, 5vw, 72px) 36px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >

      {/* All footer chrome + copy: fixed in layout; revealed by veil sliding up (inverse of RTS panel sliding over). */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flex: 1,
          minHeight: 0,
        }}
      >

      <WaveLines />

      {/* Radial glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-10%", right: "-5%",
          width: "55%",   height: "80%",
          background: "radial-gradient(ellipse at 80% 70%, rgba(80,80,70,0.18) 0%, transparent 68%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* ── TOP ROW ───────────────────────────────────────────── */}
      <div style={{ position: "relative", zIndex: 1, marginTop: 0, paddingTop: 0 }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "20px",
            marginBottom: "22px",
          }}
        >
          <div style={{ marginTop: 0, paddingTop: 0 }}>
            <img
              src="/logo/Eyrion_real_logo.png"
              alt="Eyrion"
              style={{
                height: "clamp(56px, 5vw, 76px)",
                width: "auto",
                objectFit: "contain",
              }}
            />
          </div>
          <div style={{ marginTop: 0, paddingTop: 0, textAlign: "right" }}>
            <span style={{
              display: "block",
              fontFamily: "'Arial Black', 'Arial', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2.1rem, 11vw, 9rem)",
              letterSpacing: "-0.02em",
              color: "rgba(210,215,220,0.9)",
              lineHeight: 1,
              userSelect: "none",
            }}>
              EYRION
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px", width: "100%" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "stretch", gap: "20px", width: "100%", marginTop: "48px" }}>
            <nav aria-label="Footer navigation" className="w-full min-w-0">
              <div
                className="footer-nav-row grid w-full min-w-0 items-start text-left grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-[minmax(0,2.2fr)_minmax(0,1fr)_minmax(0,1fr)]"
                style={{
                  width: "100%",
                  columnGap: "clamp(16px, 2.5vw, 40px)",
                }}
              >
                {NAV_MAIN.map((item) => (
                  <div
                    key={item.label}
                    className={`flex min-w-0 max-w-full flex-col items-stretch ${
                      item.label === "Our services" ? "sm:col-span-2 lg:col-span-1" : ""
                    }`}
                    style={{ gap: "10px" }}
                  >
                    <a
                      href={item.href}
                      className="footer-hover-line whitespace-normal break-words max-w-full"
                      style={{
                        color: FOOTER_HEADING_COLOR,
                        fontSize: "clamp(0.62rem, 0.72vw, 0.72rem)",
                        fontWeight: 600,
                        letterSpacing: "0.05em",
                        textDecoration: "none",
                        transition: "opacity 0.2s, color 0.2s",
                        lineHeight: 1.2,
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                      onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                    >
                      {item.label}
                    </a>
                    {item.sub &&
                      (item.label === "Our services" ? (
                        <FooterServicesLinks subs={item.sub} />
                      ) : (
                        <div className="flex min-w-0 max-w-full flex-col" style={{ gap: "0.35rem" }}>
                          {item.sub.map((sub) => (
                            <FooterSubLink key={sub.label} item={sub} />
                          ))}
                        </div>
                      ))}
                  </div>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* ── BOTTOM ROW ────────────────────────────────────────── */}
      <div style={{ position: "relative", zIndex: 1, marginTop: "clamp(24px, 4vw, 48px)" }}>
        <div style={{
          width: "100%", height: "1px",
          background: "rgba(255,255,255,0.08)",
          marginBottom: "28px",
        }} />

        <div
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div>
              <p style={{
                color: "rgba(255,255,255,0.9)",
                fontSize: "clamp(1rem, 1.6vw, 1.35rem)",
                fontWeight: 700, lineHeight: 1.25,
                letterSpacing: "-0.01em", margin: 0,
              }}>The WordPress</p>
              <p style={{
                color: "rgba(255,255,255,0.9)",
                fontSize: "clamp(1rem, 1.6vw, 1.35rem)",
                fontWeight: 700, lineHeight: 1.25,
                letterSpacing: "-0.01em", margin: 0,
              }}>partner you've been looking for.</p>
            </div>
            <p style={{
              color: "rgba(255,255,255,0.28)",
              fontSize: "clamp(0.58rem, 0.65vw, 0.65rem)",
              fontWeight: 500, letterSpacing: "0.04em", margin: 0,
            }}>
              ©2026 Eyrion. All rights reserved.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "6px", alignSelf: "flex-start" }}>
            {NAV_LEGAL.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="footer-hover-line"
                style={{
                  color: item.bold ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.32)",
                  fontSize: "clamp(0.58rem, 0.65vw, 0.65rem)",
                  fontWeight: item.bold ? 700 : 500,
                  letterSpacing: "0.1em",
                  textDecoration: "none",
                  transition: "color 0.2s",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.75)"}
                onMouseLeave={(e) => e.currentTarget.style.color = item.bold ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.32)"}
              >
                {item.label}
              </a>
            ))}

            <div style={{
              width: "100%", height: "1px",
              background: "rgba(255,255,255,0.07)",
              margin: "8px 0",
            }} />

            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center",
                    width: "32px", height: "32px",
                    borderRadius: "50%",
                    border: "1px solid rgba(255,255,255,0.14)",
                    color: "rgba(255,255,255,0.6)",
                    textDecoration: "none",
                    transition: "border-color 0.2s, color 0.2s, background 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#fff";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.45)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.14)";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      </div>

      {/* Continuation of Unlocking surface — slides up (opposite of RTS panel B rising over content). */}
      <div
        ref={veilRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 4,
          background: PRE_FOOTER_SURFACE,
          pointerEvents: "none",
          willChange: "transform",
        }}
      />

      <style>{`
        .footer-hover-line {
          position: relative;
          display: inline-block;
          width: fit-content;
          max-width: 100%;
          align-self: flex-start;
          vertical-align: top;
          padding-bottom: 3px;
        }
        .footer-hover-line::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 1px;
          background: currentColor;
          opacity: 0.9;
          transform: scaleX(0);
          transform-origin: left center;
          transition: transform 0.38s cubic-bezier(0.22, 1, 0.36, 1);
          pointer-events: none;
        }
        .footer-hover-line:hover::after,
        .footer-hover-line:focus-visible::after {
          transform: scaleX(1);
        }
        .footer-hover-line:focus-visible {
          outline: none;
        }
      `}</style>
    </footer>
  );
}