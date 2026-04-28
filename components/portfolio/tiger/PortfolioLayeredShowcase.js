"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PortfolioLayeredShowcase({
  mainScreenshot         = null,
  videoThumbnail         = null,
  testimonialsScreenshot = null,
  logos                  = [],
}) {
  const sectionRef      = useRef(null);
  const mockupRef       = useRef(null);
  const logoCardRef     = useRef(null);
  const videoCardRef    = useRef(null);
  const phonesRef       = useRef(null);
  const testimonialRef  = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.fromTo(mockupRef.current,
        { opacity: 0, y: 32, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: mockupRef.current, start: "top 85%", once: true } }
      );
      gsap.fromTo(logoCardRef.current,
        { opacity: 0, x: -40, y: 20 },
        { opacity: 1, x: 0, y: 0, duration: 0.8, ease: "power3.out", delay: 0.2,
          scrollTrigger: { trigger: mockupRef.current, start: "top 85%", once: true } }
      );
      gsap.fromTo(videoCardRef.current,
        { opacity: 0, x: 40, y: -20 },
        { opacity: 1, x: 0, y: 0, duration: 0.8, ease: "power3.out", delay: 0.3,
          scrollTrigger: { trigger: mockupRef.current, start: "top 85%", once: true } }
      );
      gsap.fromTo(phonesRef.current,
        { opacity: 0, x: -36 },
        { opacity: 1, x: 0, duration: 0.85, ease: "power3.out",
          scrollTrigger: { trigger: phonesRef.current, start: "top 88%", once: true } }
      );
      gsap.fromTo(testimonialRef.current,
        { opacity: 0, x: 36 },
        { opacity: 1, x: 0, duration: 0.85, ease: "power3.out", delay: 0.15,
          scrollTrigger: { trigger: testimonialRef.current, start: "top 88%", once: true } }
      );

    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const displayLogos = logos.length > 0 ? logos : PLACEHOLDER_LOGOS;

  return (
    <section
      ref={sectionRef}
      style={{
        width: "100%",
        backgroundColor: "#162D24",
        boxSizing: "border-box",
        padding: "clamp(64px, 8vw, 112px) clamp(24px, 4vw, 64px)",
        overflow: "hidden",
      }}
    >
      <div style={{
        maxWidth: "1600px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "clamp(40px, 5vw, 64px)",
      }}>

        {/* ════════════════════════════════════════════════
            ROW 1 — unchanged from before
            Lavender bg, main mockup + logo card + video card
        ════════════════════════════════════════════════ */}
        <div style={{
          backgroundColor: "#1F4638",
          borderRadius: "clamp(20px, 2.5vw, 32px)",
          padding: "clamp(40px, 5vw, 72px) clamp(32px, 4vw, 64px)",
          position: "relative",
          overflow: "visible",
        }}>
          <div style={{
            position: "relative",
            paddingBottom: "clamp(80px, 10vw, 120px)",
            paddingLeft: "clamp(60px, 7vw, 120px)",
          }}>

            {/* Main desktop mockup */}
            <div
              ref={mockupRef}
              style={{
                opacity: 0,
                position: "relative",
                zIndex: 1,
                borderRadius: "clamp(10px, 1.2vw, 16px)",
                overflow: "hidden",
                boxShadow: "0 24px 72px rgba(80,40,160,0.22)",
                backgroundColor: "#fff",
              }}
            >
              <div style={{ backgroundColor:"#f0ede8", padding:"10px 16px", display:"flex", alignItems:"center", gap:"6px", borderBottom:"1px solid #e0ddd8" }}>
                {["#ff5f57","#febc2e","#28c840"].map((c,i) => (
                  <span key={i} style={{ width:11, height:11, borderRadius:"50%", backgroundColor:c, display:"inline-block", flexShrink:0 }} />
                ))}
                <div style={{ flex:1, marginLeft:8, backgroundColor:"#fff", borderRadius:4, height:20, display:"flex", alignItems:"center", paddingLeft:8 }}>
                  <span style={{ fontSize:10, color:"#999", fontFamily:"monospace" }}>hrchitect.com</span>
                </div>
              </div>
              {mainScreenshot
                ? <img src={mainScreenshot} alt="HRchitect website" loading="lazy" decoding="async"
                    style={{ width:"100%", display:"block", aspectRatio:"16/9", objectFit:"cover", objectPosition:"top" }} />
                : <MainMockupContent />
              }
            </div>

            {/* Logo card — bottom left */}
            <div
              ref={logoCardRef}
              style={{
                opacity: 0,
                position: "absolute",
                bottom: "clamp(0px,2vw,20px)",
                left: 0,
                width: "clamp(220px,22vw,310px)",
                backgroundColor: "#fff",
                borderRadius: "clamp(12px,1.5vw,18px)",
                padding: "clamp(16px,2vw,24px)",
                boxShadow: "0 16px 48px rgba(60,20,140,0.16), 0 2px 8px rgba(0,0,0,0.08)",
                transform: "rotate(-2.5deg)",
                zIndex: 3,
              }}
            >
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"clamp(10px,1.5vw,18px) clamp(14px,2vw,24px)", alignItems:"center" }}>
                {displayLogos.map((logo, i) => (
                  <div key={i} style={{ display:"flex", alignItems:"center", justifyContent:"center", minHeight:"clamp(28px,3.5vw,44px)" }}>
                    {logo.src
                      ? <img src={logo.src} alt={logo.alt||logo.name} loading="lazy" decoding="async"
                          style={{ maxWidth:"100%", maxHeight:"clamp(22px,2.8vw,34px)", objectFit:"contain", display:"block" }} />
                      : <LogoPlaceholder name={logo.name} color={logo.color} />
                    }
                  </div>
                ))}
              </div>
            </div>

            {/* Video card — top right */}
            <div
              ref={videoCardRef}
              style={{
                opacity: 0,
                position: "absolute",
                top: "clamp(-20px,-2vw,-32px)",
                right: "clamp(-24px,-2.5vw,-40px)",
                width: "clamp(180px,18vw,260px)",
                borderRadius: "clamp(10px,1.2vw,16px)",
                overflow: "hidden",
                boxShadow: "0 16px 48px rgba(60,20,140,0.2), 0 2px 8px rgba(0,0,0,0.12)",
                transform: "rotate(2deg)",
                zIndex: 3,
                cursor: "pointer",
              }}
            >
              <div style={{ position:"relative", aspectRatio:"16/9" }}>
                {videoThumbnail
                  ? <img src={videoThumbnail} alt="Video thumbnail" loading="lazy" decoding="async"
                      style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
                  : <VideoPlaceholder />
                }
                <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center", background:"rgba(0,0,0,0.12)" }}>
                  <div style={{ width:"clamp(32px,3.5vw,44px)", height:"clamp(32px,3.5vw,44px)", borderRadius:"50%", backgroundColor:"rgba(255,255,255,0.92)", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 4px 16px rgba(0,0,0,0.18)" }}>
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="#1a1a2e" style={{ marginLeft:2 }}><polygon points="5,3 19,12 5,21" /></svg>
                  </div>
                </div>
                <div style={{ position:"absolute", bottom:0, left:0, right:0, height:3, backgroundColor:"rgba(255,255,255,0.3)" }}>
                  <div style={{ width:"35%", height:"100%", backgroundColor:"#2196f3" }} />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ════════════════════════════════════════════════
            ROW 2 — two panels, EACH with lavender bg card
            (this is the only new change)
        ════════════════════════════════════════════════ */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(20px, 2.5vw, 36px)",
            alignItems: "stretch",
          }}
          className="row2-grid"
        >

          {/* ── Left panel: lavender card, 3 stacked tilted mockups ── */}
          <div
            ref={phonesRef}
            style={{
              opacity: 0,
              backgroundColor: "#1F4638",
              borderRadius: "clamp(20px, 2.5vw, 32px)",
              padding: "clamp(32px, 4vw, 56px) clamp(24px, 3vw, 48px)",
              position: "relative",
              overflow: "hidden",
              minHeight: "clamp(380px, 42vw, 520px)",
            }}
          >
            {/* Subtle inner glow */}
            <div aria-hidden="true" style={{
              position: "absolute", inset: 0, borderRadius: "inherit",
              background: "radial-gradient(ellipse at 70% 20%, rgba(51,128,96,0.12) 0%, transparent 65%)",
              pointerEvents: "none", zIndex: 0,
            }} />

            {/* CARD 1 — back left, Tech Trends Blog */}
            <div style={{
              position: "absolute",
              left: "clamp(12px, 4%, 32px)",
              top: "clamp(28px, 5%, 52px)",
              width: "clamp(140px, 16vw, 200px)",
              borderRadius: "clamp(10px, 1.2vw, 14px)",
              overflow: "hidden",
              boxShadow: "0 12px 36px rgba(0,0,0,0.18)",
              transform: "rotate(-8deg)",
              zIndex: 1,
            }}>
              <TechBlogCard />
            </div>

            {/* CARD 2 — center */}
            <div style={{
              position: "absolute",
              left: "50%", top: "50%",
              transform: "translateX(-50%) translateY(-50%) rotate(-3deg)",
              width: "clamp(150px, 17vw, 210px)",
              borderRadius: "clamp(10px, 1.2vw, 14px)",
              overflow: "hidden",
              boxShadow: "0 16px 44px rgba(60,20,140,0.22)",
              zIndex: 2,
            }}>
              <PartnerLogosCard />
            </div>

            {/* CARD 3 — right foreground, Testimonials list */}
            <div style={{
              position: "absolute",
              right: "clamp(12px, 4%, 32px)",
              bottom: "clamp(28px, 5%, 52px)",
              width: "clamp(148px, 16vw, 205px)",
              borderRadius: "clamp(10px, 1.2vw, 14px)",
              overflow: "hidden",
              boxShadow: "0 12px 36px rgba(0,0,0,0.18)",
              transform: "rotate(5deg)",
              zIndex: 3,
            }}>
              <TestimonialsListCard />
            </div>
          </div>

          {/* ── Right panel: lavender card, testimonials browser + 3M popup ── */}
          <div
            ref={testimonialRef}
            style={{
              opacity: 0,
              backgroundColor: "#1F4638",
              borderRadius: "clamp(20px, 2.5vw, 32px)",
              padding: "clamp(32px, 4vw, 56px) clamp(24px, 3vw, 48px)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Subtle inner glow */}
            <div aria-hidden="true" style={{
              position: "absolute", inset: 0, borderRadius: "inherit",
              background: "radial-gradient(ellipse at 30% 80%, rgba(51,128,96,0.1) 0%, transparent 65%)",
              pointerEvents: "none", zIndex: 0,
            }} />

            {/* Browser mockup */}
            <div style={{
              position: "relative", zIndex: 1,
              borderRadius: "clamp(8px, 1vw, 14px)",
              overflow: "hidden",
              boxShadow: "0 8px 28px rgba(80,40,160,0.18)",
              backgroundColor: "#fff",
            }}>
              <div style={{ backgroundColor:"#f0ede8", padding:"8px 14px", display:"flex", alignItems:"center", gap:"5px", borderBottom:"1px solid #e0ddd8" }}>
                {["#ff5f57","#febc2e","#28c840"].map((c,i) => (
                  <span key={i} style={{ width:9, height:9, borderRadius:"50%", backgroundColor:c, display:"inline-block", flexShrink:0 }} />
                ))}
                <div style={{ flex:1, marginLeft:6, backgroundColor:"#fff", borderRadius:3, height:16, display:"flex", alignItems:"center", paddingLeft:6 }}>
                  <span style={{ fontSize:9, color:"#999", fontFamily:"monospace" }}>hrchitect.com/clients</span>
                </div>
              </div>
              {testimonialsScreenshot
                ? <img src={testimonialsScreenshot} alt="Testimonials page" loading="lazy" decoding="async"
                    style={{ width:"100%", display:"block", aspectRatio:"4/3", objectFit:"cover", objectPosition:"top" }} />
                : <TestimonialsPageContent />
              }
            </div>

            {/* 3M popup card */}
            <div style={{
              position: "absolute",
              left: "clamp(12px, 4%, 28px)",
              top: "50%",
              transform: "translateY(-10%)",
              width: "clamp(200px, 52%, 300px)",
              backgroundColor: "#fff",
              borderRadius: "clamp(10px, 1.2vw, 16px)",
              padding: "clamp(14px, 2vw, 22px)",
              boxShadow: "0 12px 40px rgba(0,0,0,0.16), 0 2px 8px rgba(0,0,0,0.08)",
              zIndex: 4,
              display: "flex",
              flexDirection: "column",
              gap: "clamp(8px, 1vw, 12px)",
            }}>
              <div style={{ display:"flex", alignItems:"center", gap:"10px" }}>
                <div style={{ width:"clamp(36px,5vw,52px)", height:"clamp(28px,3.5vw,38px)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                  <svg viewBox="0 0 60 32" width="52" height="28" aria-label="3M">
                    <rect width="60" height="32" rx="3" fill="#cc0000"/>
                    <text x="50%" y="22" textAnchor="middle" fill="white" fontSize="18" fontWeight="900" fontFamily="Arial,sans-serif">3M</text>
                  </svg>
                </div>
                <div>
                  <p style={{ margin:0, fontWeight:700, fontSize:"clamp(0.7rem,0.9vw,0.85rem)", color:"#1a1a2e", lineHeight:1.2 }}>3M Talent Solutions</p>
                  <p style={{ margin:"2px 0 0", fontSize:"clamp(0.6rem,0.75vw,0.72rem)", color:"#888" }}>Global Recruiting Technology Manager</p>
                </div>
              </div>
              <p style={{ margin:0, fontSize:"clamp(0.62rem,0.78vw,0.74rem)", color:"#444", lineHeight:1.65 }}>
                "With HRchitect's help, we have implemented our new ATS in 36 countries around the world. Having been completed in less than one year, this is simply an extraordinary example of results delivery! We couldn't have achieved these results without the tireless support, skillful configuration and expert consultation delivered by the HRchitect consultants. We hope to partner with HRchitect on future projects!"
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ── Responsive ── */}
      <style>{`
        @media (max-width: 900px) {
          .row2-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

// ─── Phone card: Tech Trends Blog ────────────────────────────────────────────
function TechBlogCard() {
  return (
    <div style={{ display:"flex", flexDirection:"column", backgroundColor:"#fff" }}>
      <div style={{ background:"linear-gradient(135deg,#1565c0,#1976d2)", padding:"12px 14px" }}>
        <p style={{ margin:0, fontSize:"9px", fontWeight:700, color:"rgba(255,255,255,0.9)", letterSpacing:"0.02em" }}>Tech Trends Blog</p>
      </div>
      <div style={{ padding:"12px 14px", display:"flex", flexDirection:"column", gap:"6px" }}>
        <p style={{ margin:0, fontSize:"9px", fontWeight:700, color:"#1a1a2e", lineHeight:1.3 }}>HCM Tech Trends Blog</p>
        {[100,95,88,92,80,75,85,70].map((w,i) => (
          <div key={i} style={{ width:`${w}%`, height:"5px", borderRadius:"2px", background:"#e0e0e0" }} />
        ))}
        <p style={{ margin:"6px 0 0", fontSize:"8px", fontWeight:600, color:"#1565c0", lineHeight:1.4 }}>
          Considering an HCM Scheduling Solution? Read this NOW!
        </p>
        <p style={{ margin:0, fontSize:"7px", color:"#aaa" }}>April 17, 2024</p>
        {[100,90,82].map((w,i) => (
          <div key={i} style={{ width:`${w}%`, height:"5px", borderRadius:"2px", background:"#e0e0e0" }} />
        ))}
      </div>
    </div>
  );
}

// ─── Phone card: Partner Logos ────────────────────────────────────────────────
function PartnerLogosCard() {
  return (
    <div style={{ display:"flex", flexDirection:"column", backgroundColor:"#fff" }}>
      <div style={{ padding:"12px 14px", display:"flex", flexDirection:"column", gap:"10px", borderBottom:"1px solid #eee" }}>
        {[
          { name:"dayforce",             color:"#1a1a2e", size:13, weight:900 },
          { name:"ORACLE\nCloud Service", color:"#cc0000", size:8,  weight:700 },
          { name:"SAP SuccessFactors",   color:"#1b7ac7", size:9,  weight:700 },
        ].map((p,i) => (
          <div key={i} style={{ padding:"6px 0", borderBottom:i<2?"1px solid #f0f0f0":"none" }}>
            <span style={{ fontSize:`${p.size}px`, fontWeight:p.weight, color:p.color, whiteSpace:"pre-line", display:"block", lineHeight:1.2 }}>{p.name}</span>
          </div>
        ))}
      </div>
      <div style={{ background:"#6a3ec8", padding:"12px 14px" }}>
        <div style={{ display:"flex", alignItems:"center", gap:"6px", marginBottom:"8px" }}>
          <div style={{ width:14, height:14, borderRadius:"3px", background:"#4fc3f7", flexShrink:0 }} />
          <span style={{ fontSize:"9px", fontWeight:700, color:"#fff" }}>HRchitect</span>
          <div style={{ marginLeft:"auto", width:16, height:16, borderRadius:"50%", border:"1.5px solid rgba(255,255,255,0.5)", display:"flex", alignItems:"center", justifyContent:"center" }}>
            <span style={{ fontSize:"8px", color:"#fff" }}>≡</span>
          </div>
        </div>
        <div style={{ width:"70%", height:"16px", borderRadius:"4px", background:"rgba(255,255,255,0.25)", marginBottom:"8px" }} />
        <p style={{ margin:0, fontSize:"10px", fontWeight:700, color:"#fff" }}>About HRchitect</p>
        <div style={{ marginTop:"8px", display:"flex", gap:"8px" }}>
          {["Why Use an Expert?","About HRchitect","Leadership"].map((t,i) => (
            <span key={i} style={{ fontSize:"6px", color:i===1?"#ffd600":"rgba(255,255,255,0.7)", fontWeight:i===1?700:400, borderBottom:i===1?"1px solid #ffd600":"none", paddingBottom:i===1?"2px":"0", whiteSpace:"nowrap" }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Phone card: Testimonials list ───────────────────────────────────────────
function TestimonialsListCard() {
  const items = [
    { logo:"Autodesk",   role:"Sr. Operations Program Manager, HR Talent Acquisition", color:"#000"    },
    { logo:"POWER",      role:"Project Lead, Applications",                            color:"#003087" },
    { logo:"CareOregon", role:"HR Manager",                                            color:"#2e7d32" },
    { logo:"MARY KAY",   role:"Director, Global HR Technology",                        color:"#c2185b" },
    { logo:"CHENEGA",    role:"",                                                       color:"#1a237e" },
  ];
  return (
    <div style={{ display:"flex", flexDirection:"column", backgroundColor:"#fff", padding:"10px 12px", gap:"8px" }}>
      {items.map((item,i) => (
        <div key={i} style={{ display:"flex", flexDirection:"column", gap:"2px", borderBottom:i<items.length-1?"1px solid #f0f0f0":"none", paddingBottom:i<items.length-1?"8px":"0" }}>
          <span style={{ fontSize:"9px", fontWeight:800, color:item.color, letterSpacing:"-0.01em" }}>{item.logo}</span>
          {item.role && <span style={{ fontSize:"7px", color:"#888", lineHeight:1.3 }}>{item.role}</span>}
        </div>
      ))}
    </div>
  );
}

// ─── Testimonials browser page content ───────────────────────────────────────
function TestimonialsPageContent() {
  const logos = ["Autodesk","POWER","CareOregon","Chubb","Workfront","Danfoss","3M","UMB"];
  return (
    <div style={{ backgroundColor:"#f8f8f8", display:"flex", flexDirection:"column" }}>
      <div style={{ backgroundColor:"#fff", padding:"10px 16px", borderBottom:"1px solid #eee" }}>
        <p style={{ margin:0, fontSize:"11px", fontWeight:700, color:"#1a1a2e" }}>Testimonials</p>
      </div>
      <div style={{ padding:"10px 16px", display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"8px 12px" }}>
        {logos.map((name,i) => (
          <div key={i} style={{ padding:"6px 4px", backgroundColor:"#fff", borderRadius:"4px", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column", gap:"3px" }}>
            <span style={{ fontSize:"8px", fontWeight:800, color:"#333", textAlign:"center", lineHeight:1.1 }}>{name}</span>
            <div style={{ width:"80%", height:"4px", borderRadius:"2px", background:"#eee" }} />
            <div style={{ width:"60%", height:"4px", borderRadius:"2px", background:"#eee" }} />
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Main Mockup Content ──────────────────────────────────────────────────────
function MainMockupContent() {
  return (
    <div style={{ width:"100%", backgroundColor:"#fff", display:"flex", flexDirection:"column" }}>
      <div style={{ background:"linear-gradient(90deg,#0077b6,#0096c7)", padding:"10px 20px", display:"flex", alignItems:"center", gap:"16px" }}>
        <div style={{ width:60, height:10, borderRadius:2, background:"rgba(255,255,255,0.9)" }} />
        {["Why We're Different","Services","Clients","HCM Tech Experience","Industry Intelligence","Events","Tech Trends Blog","Contact"].map((item,i) => (
          <div key={i} style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:3 }}>
            <span style={{ fontSize:7, color:"rgba(255,255,255,0.9)", whiteSpace:"nowrap" }}>{item}</span>
            {i<5 && <div style={{ width:"100%", height:2, borderRadius:1, background:["#ffd600","#ff9800","#e91e63","#4caf50","#2196f3"][i] }} />}
          </div>
        ))}
      </div>
      <div style={{ display:"flex", minHeight:180 }}>
        <div style={{ flex:"0 0 52%", background:"#fff", padding:"20px 24px", display:"flex", flexDirection:"column", justifyContent:"center", gap:8 }}>
          <div style={{ width:"90%", height:11, borderRadius:3, background:"#0077b6" }} />
          <div style={{ width:"70%", height:11, borderRadius:3, background:"#0077b6" }} />
          <div style={{ marginTop:6 }}>
            {[100,95,88,72].map((w,i) => (
              <div key={i} style={{ width:`${w}%`, height:6, borderRadius:2, background:"#ccc", marginBottom:4 }} />
            ))}
          </div>
        </div>
        <div style={{ flex:1, background:"linear-gradient(135deg,#90caf9,#64b5f6,#42a5f5)" }} />
      </div>
      <div style={{ display:"flex", borderTop:"1px solid #eee" }}>
        {[{icon:"📊",text:"Why we're different."},{icon:"👥",text:"Who we work with."}].map((item,i) => (
          <div key={i} style={{ flex:1, padding:"10px 16px", backgroundColor:i===0?"#1565c0":"#1976d2", display:"flex", alignItems:"center", gap:8, borderRight:i===0?"1px solid rgba(255,255,255,0.2)":"none" }}>
            <span style={{ fontSize:12 }}>{item.icon}</span>
            <span style={{ fontSize:8, color:"rgba(255,255,255,0.92)", fontWeight:500 }}>{item.text}</span>
          </div>
        ))}
      </div>
      <div style={{ padding:"12px 20px 0", textAlign:"right" }}>
        <span style={{ fontSize:8, color:"#1565c0", fontWeight:500 }}>more thought leadership &gt;&gt;</span>
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:0, padding:"8px 16px 16px" }}>
        {[
          { title:"...luling Solution?",                                           date:"Apr 10, 2024" },
          { title:"Spotlight of the Month: Annegret Theis",                       date:"Apr 10, 2024" },
          { title:"How Erica Niesse, EVP of Implementation Services Inspires Me", date:"Apr 03, 2024" },
        ].map((art,i) => (
          <div key={i} style={{ padding:"10px 12px", borderRight:i<2?"1px solid #eee":"none", display:"flex", flexDirection:"column", gap:5 }}>
            <span style={{ fontSize:8, color:"#1565c0", fontWeight:600, lineHeight:1.3 }}>{art.title}</span>
            <span style={{ fontSize:7, color:"#999" }}>{art.date}</span>
            {[100,90,75].map((w,j) => <div key={j} style={{ width:`${w}%`, height:5, borderRadius:2, background:"#eee", marginBottom:2 }} />)}
            <div style={{ display:"inline-block", width:60, height:16, borderRadius:3, background:"#4caf50", fontSize:6, color:"#fff", textAlign:"center", lineHeight:"16px" }}>Read Article »</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Video Placeholder ────────────────────────────────────────────────────────
function VideoPlaceholder() {
  return (
    <div style={{ width:"100%", height:"100%", background:"linear-gradient(135deg,#b0bec5,#90a4ae)", display:"flex", alignItems:"center", justifyContent:"center", position:"relative" }}>
      <div style={{ width:"55%", height:"75%", borderRadius:"50% 50% 0 0", background:"rgba(0,0,0,0.25)", position:"absolute", bottom:0 }} />
      <div style={{ width:"28%", height:"28%", borderRadius:"50%", background:"rgba(0,0,0,0.2)", position:"absolute", top:"12%" }} />
    </div>
  );
}

// ─── Logo Placeholder ─────────────────────────────────────────────────────────
function LogoPlaceholder({ name, color }) {
  return (
    <span style={{ fontSize:"clamp(8px,0.9vw,11px)", fontWeight:800, color:color||"#333", textAlign:"center", lineHeight:1.1, letterSpacing:"-0.01em", whiteSpace:"nowrap" }}>
      {name}
    </span>
  );
}

// ─── Placeholder logos ────────────────────────────────────────────────────────
const PLACEHOLDER_LOGOS = [
  { name:"BlueCross BlueShield", color:"#005eb8" },
  { name:"FedEx Express",        color:"#4d148c" },
  { name:"SOUTHWEST",            color:"#304cb2" },
  { name:"OfficeMax",            color:"#cc0000" },
  { name:"Capital One",          color:"#004977" },
  { name:"Bristol-Myers Squibb", color:"#003087" },
];