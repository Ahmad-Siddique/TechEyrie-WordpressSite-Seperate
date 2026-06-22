"use client";

import { getPageSectionPics } from "../../lib/pageImages";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PROJECT_PICS = getPageSectionPics("icomatWork", "projects");

const PROJECTS = [
  {
    id: "syntax-studios",
    category: "SYNTAX STUDIOS",
    title: "Marketing site for a US software agency building blockchain, AI, and product engineering solutions",
    href: "/case-studies/syntaxstudios",
    image: "/case-studies/syntaxstudios/all-devices-white.png",
    imageAlt: "Syntax Studios responsive website mockups",
    layout: "big",
  },
  {
    id: "fueled",
    category: "FUELED",
    title: "Marketing site for a digital product agency—AI, mobile apps, enterprise web, and WordPress VIP delivery",
    href: "/case-studies/fueled",
    image: "/case-studies/fueled/all-devices-white.png",
    imageAlt: "Fueled responsive website mockups",
    layout: "big",
  },
  {
    id: "nectafy",
    category: "NECTAFY",
    title: "Marketing site for a human content agency turning expert conversations into credible video and written content",
    href: "/case-studies/nectafy",
    image: "/case-studies/nectafy/all-devices-white.png",
    imageAlt: "Nectafy responsive website mockups",
    layout: "big",
  },
  {
    id: "fadna",
    category: "FADNA",
    title: "E-commerce site for a Sri Lankan wellness brand blending Ayurvedic heritage with modern life science",
    href: "/case-studies/fadna",
    image: "/case-studies/fadna/all-devices-white.png",
    imageAlt: "Fadna responsive website mockups",
    layout: "big",
  },
  {
    id: "echtsocial",
    category: "ECHT SOCIAL",
    title: "Marketing site for a boutique Sri Lankan digital agency specialising in social, design, SEO, and content",
    href: "/case-studies/echtsocial",
    image: "/case-studies/echtsocial/all-devices-white.png",
    imageAlt: "Echt Social responsive website mockups",
    layout: "big",
  },
  {
    id: "cleindy",
    category: "CLE INDY",
    title: "Marketing site for a leadership and career consultancy empowering professionals and organizations",
    href: "/case-studies/cleindy",
    image: "/case-studies/cleindy/all-devices-white.png",
    imageAlt: "CLE Indy responsive website mockups",
    layout: "big",
  },
  {
    id: "brincdrones",
    category: "BRINC",
    title: "Marketing site for a public safety drone company serving 900+ agencies across all 50 states",
    href: "/case-studies/brincdrones",
    image: "/case-studies/brincdrones/all-devices-white.png",
    imageAlt: "BRINC responsive website mockups",
    layout: "big",
  },
  {
    id: "ufomammoot",
    category: "UFOMAMMOOT",
    title: "Marketing site for a Berlin digital agency building interactive work for adidas, Netflix, and Comedy Central",
    href: "/case-studies/ufomammoot",
    image: "/case-studies/ufomammoot/all-devices-white.png",
    imageAlt: "UFOMAMMOOT responsive website mockups",
    layout: "big",
  },
  // 1. Big card row
  {
    id: "seeding-action",
    category: "SEEDING ACTION",
    title: '"Air We Share" Initiative Landing Page',
    href: "#seeding-action",
    image: PROJECT_PICS[0],
    imageAlt: "Seedlings growing in soil",
    layout: "big",
  },

  // 2. Two-card row
  {
    id: "grasshopper",
    category: "GRASSHOPPER GARDENS",
    title: "Full Website Redesign and WooCommerce Store Build for Grasshopper Gardens",
    href: "#grasshopper",
    image: PROJECT_PICS[1],
    imageAlt: "Grasshopper Gardens website",
    layout: "pair",
  },
  {
    id: "paint-supply",
    category: "PAINT SUPPLY",
    title: "Full WooCommerce rebuild and infrastructure modernization for Paint Supply",
    href: "#paint-supply",
    image: PROJECT_PICS[2],
    imageAlt: "Paint supply store website",
    layout: "pair",
  },

  // 3. Big card row
  {
    id: "northern-trust",
    category: "NORTHERN TRUST",
    title: "Corporate website overhaul with custom WordPress blocks and accessibility audit",
    href: "#northern-trust",
    image: PROJECT_PICS[3],
    imageAlt: "Corporate office interior",
    layout: "big",
  },

  // 4. Two-card row
  {
    id: "bloom-studio",
    category: "BLOOM STUDIO",
    title: "Brand-led portfolio website with bespoke animations for Bloom Creative Studio",
    href: "#bloom-studio",
    image: PROJECT_PICS[4],
    imageAlt: "Creative studio workspace",
    layout: "pair",
  },
  {
    id: "harvest-co",
    category: "HARVEST CO.",
    title: "E-commerce WordPress build with custom product configurator for Harvest Co.",
    href: "#harvest-co",
    image: PROJECT_PICS[5],
    imageAlt: "Harvest co produce",
    layout: "pair",
  },

  // 5. Two-card row
  {
    id: "vela-agency",
    category: "VELA AGENCY",
    title: "Complete brand refresh and headless WordPress build for Vela Creative Agency",
    href: "#vela-agency",
    image: PROJECT_PICS[6],
    imageAlt: "Agency team at work",
    layout: "pair",
  },
  {
    id: "meridian-law",
    category: "MERIDIAN LAW",
    title: "Professional services website rebuild with multilingual support for Meridian Law",
    href: "#meridian-law",
    image: PROJECT_PICS[7],
    imageAlt: "Law firm office",
    layout: "pair",
  },

  // 6. Two-card row
  {
    id: "summit-health",
    category: "SUMMIT HEALTH",
    title: "Patient-facing portal redesign and WordPress multisite setup for Summit Health",
    href: "#summit-health",
    image: PROJECT_PICS[8],
    imageAlt: "Health clinic interior",
    layout: "pair",
  },
  {
    id: "folio-press",
    category: "FOLIO PRESS",
    title: "Editorial WordPress theme build with custom Gutenberg blocks for Folio Press",
    href: "#folio-press",
    image: PROJECT_PICS[9],
    imageAlt: "Magazine editorial spread",
    layout: "pair",
  },

  // 7. Two-card row
  {
    id: "arc-architects",
    category: "ARC ARCHITECTS",
    title: "Portfolio website with project filtering and 3D model integration for Arc Architects",
    href: "#arc-architects",
    image: PROJECT_PICS[10],
    imageAlt: "Architecture building exterior",
    layout: "pair",
  },
  {
    id: "kinship-coffee",
    category: "KINSHIP COFFEE",
    title: "Brand-new WooCommerce subscription store and loyalty programme for Kinship Coffee",
    href: "#kinship-coffee",
    image: PROJECT_PICS[11],
    imageAlt: "Coffee shop interior",
    layout: "pair",
  },
];

// ── "View case study" lime pill button ───────────────────────
function CaseStudyBtn({ href }) {
  const btnRef = useRef(null);

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;
    const onEnter = () => gsap.to(btn, { backgroundColor: "#b8e03a", scale: 1.04, duration: 0.22, ease: "power2.out" });
    const onLeave = () => gsap.to(btn, { backgroundColor: "#c8f04a", scale: 1.0,  duration: 0.22, ease: "power2.out" });
    const onDown  = () => gsap.to(btn, { scale: 0.97, duration: 0.1 });
    const onUp    = () => gsap.to(btn, { scale: 1.04, duration: 0.12 });
    btn.addEventListener("mouseenter", onEnter);
    btn.addEventListener("mouseleave", onLeave);
    btn.addEventListener("mousedown",  onDown);
    btn.addEventListener("mouseup",    onUp);
    return () => {
      btn.removeEventListener("mouseenter", onEnter);
      btn.removeEventListener("mouseleave", onLeave);
      btn.removeEventListener("mousedown",  onDown);
      btn.removeEventListener("mouseup",    onUp);
    };
  }, []);

  return (
    <a
      ref={btnRef}
      href={href}
      style={{
        display: "inline-flex",
        alignSelf: "flex-start",
        alignItems: "center",
        padding: "12px 26px",
        background: "#c8f04a",
        borderRadius: "999px",
        textDecoration: "none",
        fontFamily: "Inter, Arial, sans-serif",
        fontSize: "0.82rem",
        fontWeight: 600,
        color: "#0a2a12",
        letterSpacing: "0.01em",
        whiteSpace: "nowrap",
        willChange: "transform",
      }}
    >
      View case study
    </a>
  );
}

// ── Big card — full width, image 65% / text 35% ──────────────
function BigCard({ project }) {
  const cardRef = useRef(null);
  const imgRef  = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const img  = imgRef.current;
    if (!card || !img) return;

    gsap.fromTo(card,
      { opacity: 0, y: 56 },
      {
        opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: card, start: "top 88%", once: true },
      }
    );

    const onEnter = () => gsap.to(img, { scale: 1.04, duration: 0.7, ease: "power2.out" });
    const onLeave = () => gsap.to(img, { scale: 1.0,  duration: 0.7, ease: "power2.inOut" });
    card.addEventListener("mouseenter", onEnter);
    card.addEventListener("mouseleave", onLeave);
    return () => {
      card.removeEventListener("mouseenter", onEnter);
      card.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <article
      ref={cardRef}
      style={{
        display: "grid",
        gridTemplateColumns: "65fr 35fr",
        borderRadius: "20px",
        overflow: "hidden",
        background: "#f0eeea",
        cursor: "pointer",
        minHeight: "500px",
      }}
    >
      <div style={{ overflow: "hidden", position: "relative" }}>
        <img
          ref={imgRef}
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          decoding="async"
          style={{
            width: "100%", height: "100%",
            objectFit: "cover", display: "block",
            transformOrigin: "center",
          }}
        />
      </div>
      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "clamp(36px, 4vw, 56px) clamp(28px, 3vw, 48px)",
        background: "#f0eeea",
      }}>
        <div>
          <p style={{
            fontFamily: "Inter, Arial, sans-serif",
            fontSize: "0.68rem", fontWeight: 700,
            letterSpacing: "0.14em", textTransform: "uppercase",
            color: "#1B4732", margin: "0 0 18px",
          }}>
            {project.category}
          </p>
          <h3 style={{
            fontFamily: "'Yantramanav', Inter, Arial, sans-serif",
            fontSize: "clamp(1.5rem, 2.2vw, 2.2rem)",
            fontWeight: 300, lineHeight: 1.14,
            letterSpacing: "-0.025em", color: "#0a0a09", margin: 0,
          }}>
            {project.title}
          </h3>
        </div>
        <div style={{ marginTop: "36px" }}>
          <CaseStudyBtn href={project.href} />
        </div>
      </div>
    </article>
  );
}

// ── Small card — used in pair rows ────────────────────────────
function SmallCard({ project }) {
  const cardRef = useRef(null);
  const imgRef  = useRef(null);
  const bgRef   = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const img  = imgRef.current;
    const bg   = bgRef.current;
    if (!card || !img) return;

    gsap.fromTo(card,
      { opacity: 0, y: 48 },
      {
        opacity: 1, y: 0, duration: 0.85, ease: "power3.out",
        scrollTrigger: { trigger: card, start: "top 88%", once: true },
      }
    );

    const onEnter = () => {
      gsap.to(img, { scale: 1.05, duration: 0.65, ease: "power2.out" });
      gsap.to(bg,  { opacity: 0.18, duration: 0.4, ease: "power2.out" });
    };
    const onLeave = () => {
      gsap.to(img, { scale: 1.0, duration: 0.65, ease: "power2.inOut" });
      gsap.to(bg,  { opacity: 0, duration: 0.4, ease: "power2.out" });
    };
    card.addEventListener("mouseenter", onEnter);
    card.addEventListener("mouseleave", onLeave);
    return () => {
      card.removeEventListener("mouseenter", onEnter);
      card.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <article
      ref={cardRef}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "28px",
        cursor: "pointer",
      }}
    >
      <div style={{
        borderRadius: "16px",
        overflow: "hidden",
        position: "relative",
        aspectRatio: "4 / 3",
        background: "#e8e6e2",
      }}>
        <img
          ref={imgRef}
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          decoding="async"
          style={{
            width: "100%", height: "100%",
            objectFit: "cover", display: "block",
            transformOrigin: "center",
          }}
        />
        <div
          ref={bgRef}
          style={{
            position: "absolute", inset: 0,
            background: "#1B4732", opacity: 0,
            pointerEvents: "none",
          }}
        />
      </div>

      <div style={{
        display: "flex", flexDirection: "column",
        alignItems: "flex-start", gap: "16px",
      }}>
        <p style={{
          fontFamily: "Inter, Arial, sans-serif",
          fontSize: "0.68rem", fontWeight: 700,
          letterSpacing: "0.14em", textTransform: "uppercase",
          color: "#1B4732", margin: 0,
        }}>
          {project.category}
        </p>
        <h3 style={{
          fontFamily: "'Yantramanav', Inter, Arial, sans-serif",
          fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
          fontWeight: 300, lineHeight: 1.22,
          letterSpacing: "-0.02em", color: "#0a0a09", margin: 0,
        }}>
          {project.title}
        </h3>
        <CaseStudyBtn href={project.href} />
      </div>
    </article>
  );
}

// ── Pair row — 2 small cards side by side ─────────────────────
function PairRow({ projects }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "clamp(20px, 2.5vw, 36px)",
    }}>
      {projects.map((p) => (
        <SmallCard key={p.id} project={p} />
      ))}
    </div>
  );
}

// ── Build rows from flat list ─────────────────────────────────
function buildRows(projects) {
  const rows = [];
  let i = 0;
  while (i < projects.length) {
    const p = projects[i];
    if (p.layout === "big") {
      rows.push({ type: "big", project: p });
      i++;
    } else if (p.layout === "pair") {
      const pair = [];
      while (i < projects.length && projects[i].layout === "pair" && pair.length < 2) {
        pair.push(projects[i]);
        i++;
      }
      rows.push({ type: "pair", projects: pair });
    } else {
      rows.push({ type: "single", project: p });
      i++;
    }
  }
  return rows;
}

// ── Main Section ──────────────────────────────────────────────
export default function WorkSection() {
  const headingRef = useRef(null);
  const subRef     = useRef(null);
  const rows       = buildRows(PROJECTS);

  useEffect(() => {
    gsap.fromTo(
      [headingRef.current, subRef.current],
      { opacity: 0, y: 32 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.1,
        scrollTrigger: { trigger: headingRef.current, start: "top 88%", once: true },
      }
    );
  }, []);

  return (
    <section style={{
      width: "100%",
      background: "#f7f6f2",
      padding: "clamp(80px, 10vw, 140px) clamp(24px, 5vw, 80px)",
    }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "clamp(56px, 8vw, 100px)" }}>
          <h2
            ref={headingRef}
            style={{
              fontFamily: "'Yantramanav', Inter, Arial, sans-serif",
              fontSize: "clamp(2.4rem, 5vw, 5rem)",
              fontWeight: 700, lineHeight: 1.04,
              letterSpacing: "-0.03em", color: "#0d2b1e",
              margin: "0 0 20px",
            }}
          >
            Featured projects
          </h2>
          <p
            ref={subRef}
            style={{
              fontFamily: "Inter, Arial, sans-serif",
              fontSize: "clamp(0.95rem, 1.2vw, 1.1rem)",
              fontWeight: 300, color: "rgba(10,10,9,0.5)",
              margin: 0, lineHeight: 1.7,
            }}
          >
            Take a deeper look at our projects to learn about our clients' challenges and success.
          </p>
        </div>

        {/* All rows */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "clamp(28px, 4vw, 56px)",
        }}>
          {rows.map((row, idx) => {
            if (row.type === "big")  return <BigCard  key={idx} project={row.project} />;
            if (row.type === "pair") return <PairRow  key={idx} projects={row.projects} />;
            return null;
          })}
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          article { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          div[style*="repeat(2, 1fr)"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}