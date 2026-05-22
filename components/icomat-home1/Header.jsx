"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NAV_ITEMS = [
  { label: "Our Services", href: "/#solutions", hasMega: true },
  { label: "Our Work",     href: "/work" },
  { label: "About Us",     href: "/about-us" },
];

const NAV_MONO_LABEL = {
  fontFamily: "Inter, Arial, sans-serif",
  fontWeight: 200,
  fontStyle: "normal",
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  textRendering: "geometricPrecision",
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
};

const SERVICES = [
  {
    icon: (
      <svg width="44" height="44" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="4" width="16" height="20" rx="2" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M8 10h8M8 14h5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        <circle cx="20" cy="20" r="5" fill="#c8f04a" stroke="none"/>
        <path d="M18 20l1.5 1.5L22 18" stroke="#0a3a1a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "WordPress website design",
    desc: "Stunning, high-quality websites crafted by expert WordPress designers",
    href: "/wordpress/design",
  },
  {
    icon: (
      <svg width="44" height="44" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="6" width="22" height="16" rx="2" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M9 12l3 3-3 3M14 18h5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "WordPress development",
    desc: "A dedicated WordPress development team with strong technical expertise",
    href: "/wordpress/development",
  },
  {
    icon: (
      <svg width="44" height="44" viewBox="0 0 28 28" fill="none">
        <path d="M14 4l2.5 5 5.5.8-4 3.9.95 5.5L14 16.75 9.05 19.2 10 13.7 6 9.8l5.5-.8L14 4z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
        <path d="M10 22h8M14 19.5V22" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
    title: "WordPress maintenance",
    desc: "Our sites are always secured, always up and always fully functional",
    href: "/wordpress/maintenance",
  },
  {
    icon: (
      <svg width="44" height="44" viewBox="0 0 28 28" fill="none">
        <ellipse cx="14" cy="14" rx="10" ry="6" stroke="currentColor" strokeWidth="1.3"/>
        <ellipse cx="14" cy="14" rx="10" ry="6" stroke="currentColor" strokeWidth="1.3" transform="rotate(60 14 14)"/>
        <ellipse cx="14" cy="14" rx="10" ry="6" stroke="currentColor" strokeWidth="1.3" transform="rotate(120 14 14)"/>
        <circle cx="14" cy="14" r="2" fill="currentColor"/>
      </svg>
    ),
    title: "WordPress managed hosting",
    desc: "Optimized for top-tier security and performance",
    href: "/wordpress/hosting",
  },
  {
    icon: (
      <svg width="44" height="44" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="11" r="5" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M6 24c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        <circle cx="21" cy="10" r="3" fill="#c8f04a"/>
        <path d="M20 10l.8.8L22.2 9" stroke="#0a3a1a" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Premium support",
    desc: "A dedicated contact with fast, priority assistance whenever you need it",
    href: "/wordpress/premium-support",
  },
  {
    icon: (
      <svg width="44" height="44" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M14 4v20M4 14h20" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        <path d="M7 8.5C9 11 11.5 12 14 12s5-1 7-3.5M7 19.5C9 17 11.5 16 14 16s5 1 7 3.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
      </svg>
    ),
    title: "Search engine optimization",
    desc: "Position your website for sustainable, long-term growth",
    href: "/wordpress/search-engine-optimization",
  },
];

// ── Logo color themes ─────────────────────────────────────────
// These are driven by IntersectionObserver watching sections with data-header="light|dark|deep-dark"
// light   → dark charcoal logo (on white/gray sections)
// dark    → logo visible as-is / white (on dark bg sections)
// The logo is a PNG so we use CSS filter to tint it; wordmark color shifts directly

const HEADER_THEMES = {
  dark: {
    // Over dark sections: bright neutral mark/text.
    logoFilter: "brightness(0) invert(1)",
    logoOpacity: 0.95,
    logoBlendMode: "normal",
    wordmarkColor: "#f0f0ee",
    wordmarkGradient: "",
    wordmarkOpacity: 0.95,
  },
  light: {
    // Over light sections: charcoal mark/text.
    logoFilter: "brightness(0) saturate(100%) invert(12%) sepia(8%) saturate(328%) hue-rotate(8deg) brightness(98%) contrast(90%)",
    logoOpacity: 0.72,
    logoBlendMode: "multiply",
    wordmarkColor: "#54595e",
    wordmarkGradient: "",
    wordmarkOpacity: 0.78,
  },
  media: {
    // Over vivid media/gradients: warm metallic tint similar to reference.
    logoFilter: "brightness(0) saturate(100%) invert(67%) sepia(10%) saturate(1024%) hue-rotate(355deg) brightness(95%) contrast(89%)",
    logoOpacity: 0.92,
    logoBlendMode: "screen",
    wordmarkColor: "#b4a47d",
    wordmarkGradient: "linear-gradient(115deg, #a89467 0%, #c2b188 45%, #8b7b57 100%)",
    wordmarkOpacity: 0.9,
  },
  adaptive: {
    // Mixed/split backgrounds in the same section (e.g. CTA transitions):
    // use blend-driven auto-contrast so mark stays visible over light and dark.
    logoFilter: "brightness(0) invert(1)",
    logoOpacity: 0.98,
    logoBlendMode: "difference",
    wordmarkColor: "#ffffff",
    wordmarkGradient: "",
    wordmarkOpacity: 0.98,
    wordmarkBlendMode: "difference",
  },
};

// Keep navigation controls visually fixed; only logo + wordmark shift by section.
const HEADER_CONTROLS = {
  navLinkColor: "rgba(255,255,255,0.82)",
  ctaBg: "#ffffff",
  ctaColor: "#0a0a09",
  ctaBorder: "#ffffff",
  burgerColor: "rgba(255,255,255,0.82)",
};

function BrandLogo({ height = "30px", logoFilter = "none", logoOpacity = 1, logoBlendMode = "normal" }) {
  return (
    <img
      src="/logo/Eyrion_real_logo.png"
      alt="Eyrion"
      style={{
        height,
        width: "auto",
        objectFit: "contain",
        filter: logoFilter,
        opacity: logoOpacity,
        mixBlendMode: logoBlendMode,
        transition: "filter 1.2s cubic-bezier(0.22, 1, 0.36, 1), opacity 1.1s cubic-bezier(0.22, 1, 0.36, 1), mix-blend-mode 1.1s cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    />
  );
}

function BrandWordmark({ color = "#f8f8f8", gradient = "", opacity = 1, blendMode = "normal" }) {
  return (
    <span style={{
      fontFamily: "Inter, Arial, sans-serif",
      fontWeight: 600,
      fontSize: "1.8rem",
      letterSpacing: "0.06em",
      color: gradient ? "transparent" : color,
      backgroundImage: gradient || "none",
      backgroundClip: gradient ? "text" : "border-box",
      WebkitBackgroundClip: gradient ? "text" : "border-box",
      lineHeight: 1,
      opacity,
      mixBlendMode: blendMode,
      userSelect: "none",
      transition: "color 1.2s cubic-bezier(0.22, 1, 0.36, 1), opacity 1.1s cubic-bezier(0.22, 1, 0.36, 1), background-image 1.2s cubic-bezier(0.22, 1, 0.36, 1)",
    }}>
      Eyrion
    </span>
  );
}

// ── Get a Quote Drawer ────────────────────────────────────────
function QuoteDrawer({ open, onClose }) {
  const overlayRef = useRef(null);
  const drawerRef  = useRef(null);
  const tlRef      = useRef(null);
  const [portalTarget, setPortalTarget] = useState(null);

  useLayoutEffect(() => {
    setPortalTarget(document.body);
  }, []);

  const [form, setForm] = useState({
    fullName: "", email: "", phone: "", company: "", project: "",
  });
  const [focused,   setFocused]   = useState(null);
  const [errors,    setErrors]    = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = "Required";
    if (!form.email.trim())    e.email    = "Required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid email address";
    if (!form.company.trim())  e.company  = "Required";
    if (!form.project.trim())  e.project  = "Required";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setSubmitted(true);
  };

  const handleChange = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    if (errors[field]) setErrors((er) => { const n = { ...er }; delete n[field]; return n; });
  };

  useEffect(() => {
    if (!open) {
      const t = setTimeout(() => {
        setForm({ fullName: "", email: "", phone: "", company: "", project: "" });
        setErrors({});
        setSubmitted(false);
        setFocused(null);
      }, 500);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    const overlay = overlayRef.current;
    const drawer  = drawerRef.current;
    if (!overlay || !drawer) return;
    tlRef.current?.kill();
    tlRef.current = gsap.timeline();
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (open) {
      gsap.set(overlay, { display: "block" });
      gsap.set(drawer, { display: "flex", clearProps: "transform" });
      if (isMobile) {
        gsap.set(drawer, { x: 0, y: "100%" });
        tlRef.current
          .fromTo(overlay, { opacity: 0 }, { opacity: 1, duration: 0.4, ease: "power2.out" }, 0)
          .fromTo(drawer, { y: "100%" }, { y: "0%", duration: 0.5, ease: "power4.out" }, 0);
      } else {
        gsap.set(drawer, { x: "110%", y: 0 });
        tlRef.current
          .fromTo(overlay, { opacity: 0 }, { opacity: 1, duration: 0.4, ease: "power2.out" }, 0)
          .fromTo(drawer, { x: "110%" }, { x: "0%", duration: 0.58, ease: "power4.out" }, 0);
      }
    } else if (isMobile) {
      tlRef.current
        .to(drawer, { y: "100%", duration: 0.42, ease: "power4.inOut" }, 0)
        .to(overlay, { opacity: 0, duration: 0.38, ease: "power2.in" }, 0.05)
        .set([overlay, drawer], { display: "none", clearProps: "transform" });
    } else {
      tlRef.current
        .to(drawer, { x: "110%", duration: 0.45, ease: "power4.inOut" }, 0)
        .to(overlay, { opacity: 0, duration: 0.38, ease: "power2.in" }, 0.05)
        .set([overlay, drawer], { display: "none", clearProps: "transform" });
    }
    return () => tlRef.current?.kill();
  }, [open]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const fieldStyle = (name, isTextarea = false) => ({
    width: "100%",
    background: focused === name ? "rgba(200,240,74,0.05)" : "rgba(255,255,255,0.04)",
    border: `1px solid ${
      errors[name]     ? "rgba(255,90,70,0.55)"  :
      focused === name ? "rgba(200,240,74,0.35)"  :
                         "rgba(255,255,255,0.1)"
    }`,
    borderRadius: "10px",
    padding: isTextarea ? "15px 17px" : "13px 17px",
    color: "#f8f8f4",
    fontSize: "0.875rem",
    fontFamily: "Inter, Arial, sans-serif",
    fontWeight: 300,
    lineHeight: isTextarea ? 1.65 : 1,
    outline: "none",
    resize: isTextarea ? "none" : undefined,
    minHeight: isTextarea ? "120px" : undefined,
    transition: "border-color 0.25s, background 0.25s",
    caretColor: "#c8f04a",
    boxSizing: "border-box",
    display: "block",
  });

  const labelStyle = {
    display: "block",
    color: "rgba(255,255,255,0.4)",
    fontSize: "0.62rem",
    fontFamily: "Inter, Arial, sans-serif",
    fontWeight: 500,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    marginBottom: "8px",
  };

  const errorStyle = {
    display: "block",
    color: "rgba(255,100,80,0.9)",
    fontSize: "0.64rem",
    fontFamily: "Inter, Arial, sans-serif",
    fontWeight: 400,
    marginTop: "5px",
    letterSpacing: "0.03em",
  };

  const drawerUi = (
    <>
      <div
        ref={overlayRef}
        className="quote-drawer-overlay"
        onClick={onClose}
        style={{
          display: "none",
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
        }}
      />

      <div
        ref={drawerRef}
        className="quote-drawer-panel"
        style={{
          display: "none",
          position: "fixed",
          flexDirection: "column",
          background: "linear-gradient(160deg, #162D24 0%, #162D24 50%, #1B4732 100%)",
          border: "1px solid rgba(200,240,74,0.12)",
          boxShadow: `
            0 32px 80px rgba(0,0,0,0.55),
            0 0 0 1px rgba(255,255,255,0.04),
            inset 0 1px 0 rgba(255,255,255,0.06)
          `,
          overflow: "hidden",
        }}
      >
        <div style={{
          position: "absolute",
          bottom: "-60px", right: "-40px",
          width: "320px", height: "320px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(200,240,74,0.09) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }} />

        <div
          className="quote-scroll-inner"
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            flex: 1,
            overflowY: "scroll",
            overflowX: "hidden",
          }}
        >
          <div className="quote-drawer-header" style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexShrink: 0,
          }}>
            <BrandLogo height="39px" />
            <button
              onClick={onClose}
              aria-label="Close"
              style={{
                width: "32px", height: "32px",
                borderRadius: "30%",
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.05)",
                color: "rgba(255,255,255,0.45)",
                fontSize: "0.75rem",
                cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
                transition: "background 0.2s, color 0.2s, border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(200,240,74,0.12)";
                e.currentTarget.style.color = "#c8f04a";
                e.currentTarget.style.borderColor = "rgba(200,240,74,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                e.currentTarget.style.color = "rgba(255,255,255,0.45)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
              }}
            >✕</button>
          </div>

          <div className="quote-drawer-intro" style={{ flexShrink: 0 }}>
            <h2 className="quote-drawer-title" style={{
              color: "#f8f8f4",
              fontSize: "clamp(1.9rem, 3vw, 2.6rem)",
              fontWeight: 300,
              fontFamily: "'Yantramanav', Inter, Arial, sans-serif",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              margin: "0 0 10px",
            }}>
              Get a quote
            </h2>
            <p style={{
              color: "rgba(255,255,255,0.38)",
              fontSize: "0.8rem",
              fontFamily: "Inter, Arial, sans-serif",
              fontWeight: 300,
              lineHeight: 1.7,
              margin: "0 0 22px",
              maxWidth: "36ch",
            }}>
              Tell us about your project and we'll get back to you within 24 hours.
            </p>
            <div style={{
              height: "1px",
              background: "linear-gradient(to right, rgba(200,240,74,0.2), rgba(200,240,74,0.04) 60%, transparent)",
            }} />
          </div>

          <div className="quote-drawer-body" style={{ flex: 1 }}>
            {submitted ? (
              <div style={{
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center",
                textAlign: "center", paddingTop: "40px", gap: "20px",
              }}>
                <div style={{
                  width: "72px", height: "72px", borderRadius: "50%",
                  background: "rgba(200,240,74,0.12)",
                  border: "1px solid rgba(200,240,74,0.3)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: "0 0 32px rgba(200,240,74,0.12)",
                }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12l5 5L20 7" stroke="#c8f04a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p style={{ color: "#f8f8f4", fontSize: "1.1rem", fontWeight: 400, fontFamily: "Inter, Arial, sans-serif", margin: "0 0 8px", letterSpacing: "-0.01em" }}>Message sent!</p>
                  <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.82rem", fontFamily: "Inter, Arial, sans-serif", fontWeight: 300, lineHeight: 1.65, margin: 0 }}>We'll be in touch within 24 hours.</p>
                </div>
                <button onClick={onClose} style={{
                  marginTop: "8px", padding: "13px 36px",
                  background: "#c8f04a", border: "none", borderRadius: "8px",
                  color: "#0a3a1a", fontSize: "0.68rem", fontWeight: 700,
                  fontFamily: "Inter, Arial, sans-serif", letterSpacing: "0.12em",
                  textTransform: "uppercase", cursor: "pointer",
                  transition: "background 0.2s, transform 0.15s",
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "#d8ff5a"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "#c8f04a"; e.currentTarget.style.transform = "translateY(0)"; }}
                >Close</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div>
                  <label style={labelStyle}>Full name <span style={{ color: "#c8f04a" }}>*</span></label>
                  <input type="text" placeholder="Jane Smith" value={form.fullName}
                    onChange={handleChange("fullName")}
                    onFocus={() => setFocused("fullName")} onBlur={() => setFocused(null)}
                    style={fieldStyle("fullName")} />
                  {errors.fullName && <span style={errorStyle}>{errors.fullName}</span>}
                </div>

                <div className="quote-form-row-2">
                  <div>
                    <label style={labelStyle}>Email <span style={{ color: "#c8f04a" }}>*</span></label>
                    <input type="email" placeholder="jane@company.com" value={form.email}
                      onChange={handleChange("email")}
                      onFocus={() => setFocused("email")} onBlur={() => setFocused(null)}
                      style={fieldStyle("email")} />
                    {errors.email && <span style={errorStyle}>{errors.email}</span>}
                  </div>
                  <div>
                    <label style={labelStyle}>Phone</label>
                    <input type="tel" placeholder="+44 7700 900000" value={form.phone}
                      onChange={handleChange("phone")}
                      onFocus={() => setFocused("phone")} onBlur={() => setFocused(null)}
                      style={fieldStyle("phone")} />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Company <span style={{ color: "#c8f04a" }}>*</span></label>
                  <input type="text" placeholder="Acme Ltd." value={form.company}
                    onChange={handleChange("company")}
                    onFocus={() => setFocused("company")} onBlur={() => setFocused(null)}
                    style={fieldStyle("company")} />
                  {errors.company && <span style={errorStyle}>{errors.company}</span>}
                </div>

                <div>
                  <label style={labelStyle}>Tell us about your project <span style={{ color: "#c8f04a" }}>*</span></label>
                  <textarea
                    placeholder="Describe your goals, timeline, budget, or anything else you'd like us to know..."
                    value={form.project}
                    onChange={handleChange("project")}
                    onFocus={() => setFocused("project")} onBlur={() => setFocused(null)}
                    style={fieldStyle("project", true)} />
                  {errors.project && <span style={errorStyle}>{errors.project}</span>}
                </div>

                <button type="submit" style={{
                  marginTop: "6px", width: "100%", padding: "16px 24px",
                  background: "#c8f04a", border: "none", borderRadius: "10px",
                  color: "#0a2a12", fontSize: "0.7rem", fontWeight: 700,
                  fontFamily: "Inter, Arial, sans-serif", letterSpacing: "0.14em",
                  textTransform: "uppercase", cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
                  transition: "background 0.2s, transform 0.15s, box-shadow 0.2s",
                  boxShadow: "0 4px 20px rgba(200,240,74,0.2)",
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "#d8ff5a"; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(200,240,74,0.32)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "#c8f04a"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(200,240,74,0.2)"; }}
                  onMouseDown={(e)  => { e.currentTarget.style.transform = "translateY(1px)"; }}
                  onMouseUp={(e)    => { e.currentTarget.style.transform = "translateY(-2px)"; }}
                >
                  Send message
                  <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                    <path d="M3 9h12M11 5l4 4-4 4" stroke="#0a2a12" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                <p style={{
                  color: "rgba(255,255,255,0.2)", fontSize: "0.62rem",
                  fontFamily: "Inter, Arial, sans-serif", fontWeight: 300,
                  lineHeight: 1.7, textAlign: "center", margin: 0,
                }}>
                  By submitting you agree to our{" "}
                  <a href="#privacy" style={{ color: "rgba(200,240,74,0.45)", textDecoration: "underline", textUnderlineOffset: "2px" }}>
                    Privacy Policy
                  </a>
                  . We'll never share your data.
                </p>
              </form>
            )}
          </div>

          <div className="quote-drawer-footer" style={{
            flexShrink: 0,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "auto",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}>
            <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.57rem", fontFamily: "Inter, Arial, sans-serif", fontWeight: 400, letterSpacing: "0.06em", textTransform: "uppercase" }}>
              COMPANY REG NO. 11771620
            </span>
            <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.57rem", fontFamily: "Inter, Arial, sans-serif", fontWeight: 400, letterSpacing: "0.06em", textTransform: "uppercase" }}>
              VAT REG. NO. 326574685
            </span>
          </div>
        </div>
      </div>
    </>
  );

  if (!portalTarget) return null;
  return createPortal(drawerUi, portalTarget);
}

// ── Service item ──────────────────────────────────────────────
function ServiceItem({ service, bottomBorder }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link href={service.href} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex", flexDirection: "column", gap: "14px",
        padding: "36px 24px 36px 20px",
        borderBottom: bottomBorder ? "1px solid rgba(255,255,255,0.08)" : "none",
        backgroundColor: hovered ? "#ffffff" : "transparent",
        borderRadius: "14px",
        textDecoration: "none", cursor: "pointer",
        transition: "background-color 0.22s ease, border-color 0.22s ease",
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", gap: "18px" }}>
        <span style={{
          color: hovered ? "#0a0a09" : "rgba(255,255,255,0.7)",
          flexShrink: 0, marginTop: "2px", display: "block",
          transform: hovered ? "translateY(-3px)" : "translateY(0)",
          transition: "transform 0.25s ease, color 0.25s ease",
        }}>{service.icon}</span>
        <span style={{
          color: hovered ? "#0a0a09" : "rgba(255,255,255,0.88)",
          fontSize: "0.86rem", lineHeight: 1.6, transition: "color 0.2s",
          ...NAV_MONO_LABEL,
        }}>{service.title}</span>
      </div>
      <p style={{
        color: hovered ? "rgba(10,10,9,0.68)" : "rgba(255,255,255,0.35)",
        fontSize: "0.86rem", lineHeight: 1.6, margin: 0, paddingLeft: "62px",
        transition: "color 0.2s",
        fontFamily: "Inter, Arial, sans-serif",
        fontWeight: 400, fontStyle: "normal",
        letterSpacing: "0.06em",
        textRendering: "geometricPrecision",
        WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale",
      }}>{service.desc}</p>
    </Link>
  );
}

// ── Mega dropdown ─────────────────────────────────────────────
function MegaDropdown({ visible, onMouseEnter, onMouseLeave, onQuoteClick }) {
  const panelRef = useRef(null);
  useEffect(() => {
    if (!panelRef.current) return;
    if (visible) {
      gsap.fromTo(panelRef.current,
        { opacity: 0, y: -16, pointerEvents: "none" },
        { opacity: 1, y: 0, pointerEvents: "auto", duration: 0.38, ease: "power3.out" }
      );
    } else {
      gsap.to(panelRef.current, { opacity: 0, y: -10, pointerEvents: "none", duration: 0.24, ease: "power2.in" });
    }
  }, [visible]);

  return (
    <div ref={panelRef} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
      style={{
        position: "fixed", top: "56px", left: 0, right: 0, zIndex: 140,
        background: "#0a0a09", borderBottom: "1px solid rgba(255,255,255,0.07)",
        boxShadow: "0 32px 80px rgba(0,0,0,0.6)", opacity: 0, pointerEvents: "none",
        padding: "clamp(18px, 2.2vw, 28px) clamp(32px, 5vw, 80px)",
      }}
    >
      <div style={{
        display: "grid", gridTemplateColumns: "1fr 1fr 1fr 320px",
        gap: "0 clamp(24px, 3vw, 56px)", maxWidth: "1400px", margin: "0 auto", alignItems: "stretch",
      }}>
        <div style={{
          gridColumn: "1 / 4", display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
          gap: "0 clamp(24px, 3vw, 56px)",
          borderRight: "1px solid rgba(255,255,255,0.07)",
          paddingRight: "clamp(24px, 3vw, 56px)",
        }}>
          {SERVICES.map((s, i) => <ServiceItem key={i} service={s} bottomBorder={i < 3} />)}
        </div>
        <div style={{ display: "flex", alignItems: "center", padding: "36px 0 36px clamp(24px, 2.5vw, 44px)" }}>
          <div style={{
            background: "#f4f1ea", borderRadius: "20px", padding: "36px 32px",
            display: "flex", flexDirection: "column", justifyContent: "space-between",
            width: "100%", minHeight: "200px", border: "1px solid rgba(22,45,36,0.08)",
          }}>
            <p style={{
              color: "#162D24", fontSize: "0.92rem", fontWeight: 500,
              letterSpacing: "0.04em", textTransform: "uppercase", lineHeight: 1.5,
              fontFamily: "Inter, Arial, sans-serif", margin: 0,
            }}>Get a quote</p>
            <button
              type="button"
              onClick={() => onQuoteClick?.()}
              style={{
                marginTop: "36px", display: "inline-flex", alignItems: "center", justifyContent: "center",
                width: "56px", height: "56px", borderRadius: "50%", background: "#162D24",
                border: "none", textDecoration: "none", transition: "transform 0.22s, background 0.22s", cursor: "pointer",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.12)"; e.currentTarget.style.background = "#1f4638"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.background = "#162D24"; }}
            >
              <svg width="24" height="24" viewBox="0 0 18 18" fill="none">
                <path d="M3 9h12M11 5l4 4-4 4" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Animated nav link ─────────────────────────────────────────
function AnimatedNavLink({ label, href, dimmed = false, onHoverStart, onHoverEnd, hasMega, megaOpen, linkColor }) {
  const wrapRef = useRef(null), textRef = useRef(null), cloneRef = useRef(null), tlRef = useRef(null);
  useEffect(() => {
    const wrap = wrapRef.current, text = textRef.current, clone = cloneRef.current;
    if (!wrap || !text || !clone) return;
    const H = wrap.offsetHeight;
    gsap.set(clone, { y: H, opacity: 1 });
    gsap.set(text,  { y: 0, opacity: 1 });
    const onEnter = () => {
      tlRef.current?.kill();
      tlRef.current = gsap.timeline({ defaults: { duration: 0.52, ease: "power3.inOut" } });
      tlRef.current.to(text, { y: -H }, 0).to(clone, { y: 0 }, 0)
        .to(clone, { scale: 1.08, duration: 0.14, ease: "power1.out" }, 0.50)
        .to(clone, { scale: 1.0,  duration: 0.13, ease: "power1.inOut" }, 0.64);
    };
    const onLeave = () => {
      tlRef.current?.kill();
      tlRef.current = gsap.timeline({ defaults: { duration: 0.48, ease: "power3.inOut" } });
      tlRef.current.to(clone, { y: H }, 0).to(text, { y: 0 }, 0);
    };
    wrap.addEventListener("mouseenter", onEnter);
    wrap.addEventListener("mouseleave", onLeave);
    return () => { wrap.removeEventListener("mouseenter", onEnter); wrap.removeEventListener("mouseleave", onLeave); tlRef.current?.kill(); };
  }, []);

  return (
    <a ref={wrapRef}
      href={hasMega ? undefined : href}
      onClick={hasMega ? (e) => e.preventDefault() : undefined}
      onMouseEnter={() => onHoverStart?.(label)}
      onMouseLeave={() => { if (!hasMega) onHoverEnd?.(); }}
      style={{
        position: "relative", overflow: "hidden",
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        padding: "5px 6px",
        color: dimmed
          ? (linkColor ? linkColor.replace("0.82", "0.35") : "rgba(255,255,255,0.35)")
          : (linkColor || "rgba(255,255,255,0.82)"),
        fontSize: "10px", lineHeight: 1.6,
        textDecoration: "none", whiteSpace: "nowrap", cursor: "pointer",
        transition: "color 0.5s ease",
        willChange: "transform",
        ...NAV_MONO_LABEL,
      }}
    >
      <span ref={textRef} style={{ display: "block", lineHeight: 1.6, whiteSpace: "nowrap" }}>
        <span style={NAV_MONO_LABEL}>
          {label}
        </span>
        {hasMega && (
          <svg width="8" height="5" viewBox="0 0 8 5" fill="none" style={{ display: "inline-block", marginLeft: "5px", verticalAlign: "middle", transition: "transform 0.25s", transform: megaOpen ? "rotate(180deg)" : "rotate(0deg)" }}>
            <path d="M1 1l3 3 3-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </span>
      <span ref={cloneRef} aria-hidden="true" style={{ display: "block", lineHeight: 1.6, whiteSpace: "nowrap", color: linkColor || "#ffffff", position: "absolute" }}>
        <span style={NAV_MONO_LABEL}>
          {label}
        </span>
        {hasMega && (
          <svg width="8" height="5" viewBox="0 0 8 5" fill="none" style={{ display: "inline-block", marginLeft: "5px", verticalAlign: "middle" }}>
            <path d="M1 1l3 3 3-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </span>
    </a>
  );
}

// ── Animated CTA button ───────────────────────────────────────
function AnimatedCTAButton({ label, href, onClick, ctaBg, ctaColor, ctaBorder }) {
  const wrapRef = useRef(null), textRef = useRef(null), cloneRef = useRef(null), tlRef = useRef(null);

  // Keep a ref to always have latest theme values in the event handlers
  const themeRef = useRef({ ctaBg, ctaColor, ctaBorder });
  useEffect(() => { themeRef.current = { ctaBg, ctaColor, ctaBorder }; }, [ctaBg, ctaColor, ctaBorder]);

  useEffect(() => {
    const wrap = wrapRef.current, text = textRef.current, clone = cloneRef.current;
    if (!wrap || !text || !clone) return;
    const H = wrap.offsetHeight;
    gsap.set(clone, { y: H, opacity: 1 });
    gsap.set(text,  { y: 0, opacity: 1 });
    const onEnter = () => {
      const { ctaBg: bg } = themeRef.current;
      // Invert: hover bg is the text color of current theme
      const hoverBg = bg === "#ffffff" ? "#0a0a09" : "#ffffff";
      tlRef.current?.kill();
      gsap.to(wrap, { backgroundColor: hoverBg, borderColor: hoverBg, duration: 0.35, ease: "power2.out" });
      tlRef.current = gsap.timeline({ defaults: { duration: 0.52, ease: "power3.inOut" } });
      tlRef.current.to(text, { y: -H }, 0).to(clone, { y: 0 }, 0)
        .to(clone, { scale: 1.08, duration: 0.14, ease: "power1.out" }, 0.50)
        .to(clone, { scale: 1.0,  duration: 0.13, ease: "power1.inOut" }, 0.64);
    };
    const onLeave = () => {
      const { ctaBg: bg, ctaBorder: border } = themeRef.current;
      tlRef.current?.kill();
      gsap.to(wrap, { backgroundColor: bg, borderColor: border, duration: 0.35, ease: "power2.out" });
      tlRef.current = gsap.timeline({ defaults: { duration: 0.48, ease: "power3.inOut" } });
      tlRef.current.to(clone, { y: H }, 0).to(text, { y: 0 }, 0);
    };
    wrap.addEventListener("mouseenter", onEnter);
    wrap.addEventListener("mouseleave", onLeave);
    return () => { wrap.removeEventListener("mouseenter", onEnter); wrap.removeEventListener("mouseleave", onLeave); tlRef.current?.kill(); };
  }, []);

  return (
    <a ref={wrapRef}
      href={onClick ? undefined : href}
      onClick={onClick ? (e) => { e.preventDefault(); onClick(); } : undefined}
      style={{
        position: "relative", overflow: "hidden",
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        padding: "6px 12px",
        background: ctaBg || "#ffffff",
        border: `1px solid ${ctaBorder || "#ffffff"}`,
        borderRadius: "7px",
        color: ctaColor || "#0a0a09",
        fontSize: "0.72rem", fontWeight: 700,
        fontFamily: "Inter, Arial, sans-serif", letterSpacing: "0.13em",
        textDecoration: "none", whiteSpace: "nowrap", cursor: "pointer",
        transition: "background 0.5s ease, border-color 0.5s ease, color 0.5s ease",
      }}
    >
      <span ref={textRef} style={{ display: "block", lineHeight: 1, color: ctaColor || "#0a0a09", whiteSpace: "nowrap", transition: "color 0.5s ease" }}>{label}</span>
      <span ref={cloneRef} aria-hidden="true" style={{ display: "block", lineHeight: 1, color: ctaBg === "#0a0a09" ? "#ffffff" : "#ffffff", whiteSpace: "nowrap", position: "absolute" }}>{label}</span>
    </a>
  );
}

// ── Animated mobile menu link ─────────────────────────────────
function AnimatedMobileMenuLink({ label, href, onClose }) {
  const wrapRef = useRef(null), textRef = useRef(null), cloneRef = useRef(null), tlRef = useRef(null);
  useEffect(() => {
    const wrap = wrapRef.current, text = textRef.current, clone = cloneRef.current;
    if (!wrap || !text || !clone) return;
    const H = wrap.offsetHeight;
    gsap.set(clone, { y: H, opacity: 0 });
    gsap.set(text,  { y: 0, opacity: 1 });
    const onEnter = () => {
      tlRef.current?.kill();
      tlRef.current = gsap.timeline({ defaults: { duration: 0.65, ease: "power4.inOut" } });
      tlRef.current.to(text, { y: -H, opacity: 0 }, 0).to(clone, { y: 0, opacity: 1 }, 0);
    };
    const onLeave = () => {
      tlRef.current?.kill();
      tlRef.current = gsap.timeline({ defaults: { duration: 0.55, ease: "power4.inOut" } });
      tlRef.current.to(clone, { y: H, opacity: 0 }, 0).to(text, { y: 0, opacity: 1 }, 0);
    };
    wrap.addEventListener("mouseenter", onEnter);
    wrap.addEventListener("mouseleave", onLeave);
    return () => { wrap.removeEventListener("mouseenter", onEnter); wrap.removeEventListener("mouseleave", onLeave); tlRef.current?.kill(); };
  }, []);

  return (
    <a ref={wrapRef} href={href} onClick={onClose} style={{
      position: "relative", overflow: "hidden", display: "block",
      padding: "14px 0", borderBottom: "1px solid rgba(255,255,255,0.06)",
      textDecoration: "none", cursor: "pointer",
    }}>
      <span ref={textRef} style={{
        display: "block", lineHeight: 1.6, whiteSpace: "nowrap",
        color: "rgba(255,255,255,0.82)",
        fontSize: "clamp(1.4rem, 4.05vw, 1.87rem)",
        willChange: "transform",
        ...NAV_MONO_LABEL,
      }}>{label}</span>
      <span ref={cloneRef} aria-hidden="true" style={{
        display: "block", lineHeight: 1.6, whiteSpace: "nowrap",
        color: "#ffffff", position: "absolute", top: "14px", left: 0,
        fontSize: "clamp(1.4rem, 4.05vw, 1.87rem)",
        willChange: "transform",
        ...NAV_MONO_LABEL,
      }}>{label}</span>
    </a>
  );
}

// ── Mobile menu ───────────────────────────────────────────────
function MobileMenu({ open, onClose, onQuoteClick }) {
  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 200,
      background: "rgba(10,10,9,0.97)",
      backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
      display: "flex", flexDirection: "column",
      padding: "80px 32px 48px",
      opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none",
      transform: open ? "translateY(0)" : "translateY(-12px)",
      transition: "opacity 0.3s ease, transform 0.3s ease",
    }}>
      <button onClick={onClose} aria-label="Close menu" style={{
        position: "absolute", top: "20px", right: "24px",
        background: "none", border: "none",
        color: "rgba(255,255,255,0.6)", fontSize: "1.4rem",
        cursor: "pointer", lineHeight: 1, padding: "8px",
      }}>✕</button>
      <nav style={{ display: "flex", flexDirection: "column" }}>
        {NAV_ITEMS.map((item) => (
          <AnimatedMobileMenuLink key={item.label} label={item.label} href={item.href} onClose={onClose} />
        ))}
      </nav>
      <a href="#contact" onClick={(e) => { e.preventDefault(); onQuoteClick?.(); onClose?.(); }} style={{
        marginTop: "40px", display: "inline-block",
        padding: "14px 32px", border: "1px solid rgba(255,255,255,0.5)",
        borderRadius: "999px", color: "#fff", fontSize: "0.7rem",
        fontWeight: 700, letterSpacing: "0.14em", textDecoration: "none",
        textAlign: "center", transition: "background 0.2s, border-color 0.2s",
      }}
        onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.borderColor = "#fff"; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)"; }}
      >GET A QUOTE</a>
    </div>
  );
}

// ── Burger icon ───────────────────────────────────────────────
function BurgerIcon({ open, color = "white" }) {
  return (
    <svg viewBox="0 0 14 7" fill="none" width="14" height="7">
      {[0,2,4,6,8,10,12].map((x, i) => (
        <circle key={`t${i}`} cx={x * 0.999 + 0.665} cy="0.665" r="0.665"
          fill={open ? "rgba(255,255,255,0.4)" : color} style={{ transition: "fill 0.5s ease" }} />
      ))}
      {[0,2,4,6,8,10,12].map((x, i) => (
        <circle key={`b${i}`} cx={x * 0.999 + 0.665} cy="5.692" r="0.665"
          fill={color} style={{ transition: "fill 0.5s ease" }} />
      ))}
    </svg>
  );
}

// ── Header ────────────────────────────────────────────────────
export default function Header({ quoteOpen, setQuoteOpen }) {
  const headerRef       = useRef(null);
  const megaRef         = useRef(null);
  const closeTimerRef   = useRef(null);

  const [menuOpen,            setMenuOpen]            = useState(false);
  const [hoveredNav,          setHoveredNav]          = useState(null);
  const [megaOpen,            setMegaOpen]            = useState(false);
  const [internalQuoteOpen,   setInternalQuoteOpen]   = useState(false);
  const [headerHidden,        setHeaderHidden]        = useState(false);

  // ── NEW: tracks which section the header is currently over ──
  const [headerTheme, setHeaderTheme] = useState("dark"); // "dark" | "light" | "media"

  const lastScrollYRef = useRef(0);
  const isQuoteControlled = typeof quoteOpen === "boolean" && typeof setQuoteOpen === "function";
  const resolvedQuoteOpen = isQuoteControlled ? quoteOpen : internalQuoteOpen;

  const openQuoteDrawer  = () => { if (isQuoteControlled) setQuoteOpen(true);  else setInternalQuoteOpen(true);  };
  const closeQuoteDrawer = () => { if (isQuoteControlled) setQuoteOpen(false); else setInternalQuoteOpen(false); };

  useEffect(() => {
    document.body.style.overflow = (menuOpen || resolvedQuoteOpen) ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen, resolvedQuoteOpen]);

  // ── Hide/show header on scroll ───────────────────────────────
  useEffect(() => {
    if (megaOpen || menuOpen || resolvedQuoteOpen) {
      setHeaderHidden(false);
      lastScrollYRef.current = typeof window !== "undefined" ? window.scrollY : 0;
      return;
    }
    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      const prev = lastScrollYRef.current;
      const delta = y - prev;
      lastScrollYRef.current = y;
      if (y < 36) {
        setHeaderHidden(false);
        return;
      }

      // Hide only on intentional downward scroll; reveal quickly on slight reverse scroll.
      if (delta > 18 && y > 150) setHeaderHidden(true);
      else if (delta < -2) setHeaderHidden(false);
    };
    lastScrollYRef.current = window.scrollY || 0;
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [megaOpen, menuOpen, resolvedQuoteOpen]);

  // ── Section-aware brand theming (logo + wordmark only) ──────
  useEffect(() => {
    const normalizeTheme = (theme) => {
      if (theme === "light" || theme === "dark" || theme === "media" || theme === "adaptive") return theme;
      if (theme === "deep-dark") return "dark";
      return "dark";
    };

    const parseRgb = (bg) => {
      const m = bg?.match?.(/rgba?\(([^)]+)\)/i);
      if (!m) return null;
      const [r, g, b, a = "1"] = m[1].split(",").map((v) => v.trim());
      return { r: Number(r), g: Number(g), b: Number(b), a: Number(a) };
    };

    const getLuminance = ({ r, g, b }) => {
      const toLinear = (c) => {
        const x = c / 255;
        return x <= 0.03928 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4;
      };
      return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
    };

    const inferThemeFromElement = (el) => {
      let node = el;
      while (node && node !== document.body) {
        if (node?.dataset?.header) return normalizeTheme(node.dataset.header);

        const tag = node?.tagName?.toLowerCase?.();
        if (tag === "video" || tag === "canvas" || tag === "img") return "media";

        const cs = window.getComputedStyle(node);
        const opacity = Number(cs.opacity || "1");
        if (cs.backgroundImage && cs.backgroundImage !== "none" && opacity > 0.08) return "media";
        const rgb = parseRgb(cs.backgroundColor);
        if (rgb && rgb.a * opacity > 0.12) {
          return getLuminance(rgb) > 0.6 ? "light" : "dark";
        }
        node = node.parentElement;
      }
      return "dark";
    };

    const inferThemeFromStack = (stack) => {
      for (const el of stack) {
        if (
          el === document.documentElement ||
          el === document.body ||
          headerRef.current?.contains(el) ||
          megaRef.current?.contains(el)
        ) {
          continue;
        }

        // First try element itself; if it's just text/transparent, fallback to ancestors.
        const theme = inferThemeFromElement(el);
        if (theme) return theme;
      }
      return "dark";
    };

    let raf = null;
    const lastAppliedThemeRef = { current: "dark" };
    const pendingThemeRef = { current: "dark" };
    const stableCountRef = { current: 0 };

    const commitTheme = (nextTheme) => {
      if (nextTheme !== lastAppliedThemeRef.current) {
        lastAppliedThemeRef.current = nextTheme;
        setHeaderTheme(nextTheme);
      }
    };

    const updateTheme = () => {
      const headerH = 56;
      // Sample around the actual logo + wordmark region so theme follows what brand sits over.
      const brandLeft = 28;
      const brandRight = Math.min(360, window.innerWidth - 20);
      const sampleXs = [brandLeft, 88, 148, 220, 300, brandRight]
        .map((x) => Math.max(18, Math.min(Math.round(x), window.innerWidth - 18)));
      const sampleYs = [headerH + 6, headerH + 18, headerH + 32]
        .map((y) => Math.max(8, Math.min(y, window.innerHeight - 2)));

      const score = { light: 0, dark: 0, media: 0 };
      sampleXs.forEach((x) => {
        sampleYs.forEach((y) => {
          const stack = document.elementsFromPoint(x, y);
          const theme = inferThemeFromStack(stack);
          score[theme] += 1;
        });
      });

      // If section is visually mixed (split bg/gradients), use adaptive contrast mode.
      const lightHits = score.light;
      const darkHits = score.dark;
      const mediaHits = score.media;
      const totalHits = lightHits + darkHits + mediaHits || 1;
      const mixedLightDark =
        lightHits / totalHits > 0.25 &&
        darkHits / totalHits > 0.25 &&
        Math.abs(lightHits - darkHits) <= Math.max(2, Math.round(totalHits * 0.25));

      let matched = "dark";
      if (mixedLightDark) {
        matched = "adaptive";
      } else {
        matched = Object.entries(score).sort((a, b) => b[1] - a[1])[0]?.[0] || "dark";
      }

      const nextTheme = normalizeTheme(matched);
      if (nextTheme === pendingThemeRef.current) {
        stableCountRef.current += 1;
      } else {
        pendingThemeRef.current = nextTheme;
        stableCountRef.current = 1;
      }

      // Require more stable reads for smoother, slower transitions.
      if (stableCountRef.current >= 3 || nextTheme === lastAppliedThemeRef.current) {
        commitTheme(nextTheme);
      }
    };

    const requestUpdate = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        raf = null;
        updateTheme();
      });
    };

    updateTheme(); // run once on mount
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    return () => {
      if (raf) window.cancelAnimationFrame(raf);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  useEffect(() => {
    const onOpenQuoteDrawer = () => openQuoteDrawer();
    window.addEventListener("open-quote-drawer", onOpenQuoteDrawer);
    return () => window.removeEventListener("open-quote-drawer", onOpenQuoteDrawer);
  }, [isQuoteControlled, setQuoteOpen]);

  useEffect(() => {
    const onClick = (e) => {
      const clickedInsideHeader = headerRef.current?.contains(e.target);
      const clickedInsideMega   = megaRef.current?.contains(e.target);
      if (!clickedInsideHeader && !clickedInsideMega) setMegaOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const openMega  = () => { clearTimeout(closeTimerRef.current); setMegaOpen(true);  };
  const closeMega = () => { closeTimerRef.current = setTimeout(() => setMegaOpen(false), 140); };

  // Derive current theme values — force dark theme when mega is open
  const logoTheme = megaOpen ? HEADER_THEMES.dark : (HEADER_THEMES[headerTheme] || HEADER_THEMES.dark);

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 150,
          transform: headerHidden ? "translateY(calc(-100% - 40px))" : "translateY(0)",
          transition: "transform 0.95s cubic-bezier(0.33, 1, 0.28, 1)",
          willChange: "transform",
          pointerEvents: headerHidden ? "none" : "auto",
        }}
      >
        <header ref={headerRef} style={{
          position: "relative",
          width: "100%",
          height: "56px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "4px clamp(14px, 2.5vw, 28px) 0",
          background: "transparent",
          backdropFilter: "none",
          WebkitBackdropFilter: "none",
          borderBottom: "none",
          transition: "none",
        }}>

          {/* ── Logo + Wordmark — colors shift with theme ── */}
          <Link href="/" aria-label="Eyrion — Back home"
            style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
            <BrandLogo
              height="48px"
              logoFilter={logoTheme.logoFilter}
              logoOpacity={logoTheme.logoOpacity}
              logoBlendMode={logoTheme.logoBlendMode}
            />
            <BrandWordmark
              color={logoTheme.wordmarkColor}
              gradient={logoTheme.wordmarkGradient}
              opacity={logoTheme.wordmarkOpacity}
              blendMode={logoTheme.wordmarkBlendMode || "normal"}
            />
          </Link>

          <div style={{ display: "flex", alignItems: "center", gap: "clamp(10px, 1.5vw, 16px)" }}>
            <nav aria-label="Primary navigation" className="header-desktop-nav" style={{
              display: "flex", alignItems: "center",
              gap: "clamp(6px, 1.4vw, 22px)",
              marginTop: "16px",
              background: "rgba(0,0,0,0.72)",
              backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "10px", padding: "6px 10px",
            }}>
              {NAV_ITEMS.map((item) => (
                <div key={item.label}
                  onMouseEnter={() => { if (item.hasMega) openMega(); setHoveredNav(item.label); }}
                  onMouseLeave={() => { if (item.hasMega) closeMega(); setHoveredNav(null); }}
                  style={{ position: "relative" }}
                >
                  <AnimatedNavLink
                    label={item.label}
                    href={item.href}
                    hasMega={item.hasMega}
                    megaOpen={item.hasMega && megaOpen}
                    dimmed={hoveredNav !== null && hoveredNav !== item.label}
                    onHoverStart={setHoveredNav}
                    onHoverEnd={() => setHoveredNav(null)}
                    linkColor={HEADER_CONTROLS.navLinkColor}
                  />
                </div>
              ))}
              <AnimatedCTAButton
                label="GET A QUOTE"
                href="#contact"
                onClick={() => openQuoteDrawer()}
                ctaBg={HEADER_CONTROLS.ctaBg}
                ctaColor={HEADER_CONTROLS.ctaColor}
                ctaBorder={HEADER_CONTROLS.ctaBorder}
              />
            </nav>

            {/* ── Burger — color shifts with theme ── */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-pressed={menuOpen}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="header-burger"
              style={{
                display: "flex", alignItems: "center", gap: "8px",
                background: "none", border: "none", cursor: "pointer", padding: "4px",
              }}
            >
              <span style={{
                fontSize: "0.6rem", fontWeight: 700,
                letterSpacing: "0.14em",
                color: HEADER_CONTROLS.burgerColor,
                transition: "color 0.5s ease",
              }}>
                {menuOpen ? "CLOSE" : "MENU"}
              </span>
              <BurgerIcon open={menuOpen} color={HEADER_CONTROLS.burgerColor} />
            </button>
          </div>
        </header>

        <div ref={megaRef}>
          <MegaDropdown
            visible={megaOpen}
            onMouseEnter={openMega}
            onMouseLeave={closeMega}
            onQuoteClick={() => { setMegaOpen(false); openQuoteDrawer(); }}
          />
        </div>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} onQuoteClick={openQuoteDrawer} />
      <QuoteDrawer open={resolvedQuoteOpen} onClose={closeQuoteDrawer} />

      <style>{`
        @media (max-width: 768px) { .header-desktop-nav { display: none !important; } }
        @media (min-width: 769px) { .header-burger      { display: none !important; } }

        .quote-scroll-inner                     { scrollbar-width: none; }
        .quote-scroll-inner::-webkit-scrollbar  { display: none; }

        input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.2); }
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus {
          -webkit-box-shadow: 0 0 0 1000px #162D24 inset !important;
          -webkit-text-fill-color: #f8f8f4 !important;
          caret-color: #c8f04a;
        }
      `}</style>
    </>
  );
}