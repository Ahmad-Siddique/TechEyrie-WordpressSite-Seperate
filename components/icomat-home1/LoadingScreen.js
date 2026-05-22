"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

/** Full-screen loader: logo + GSAP; dark veil drawn on 2D canvas (no footer-style line waves). */
export default function LoadingScreen({ onComplete }) {
  const overlayRef = useRef(null);
  const logoRef = useRef(null);
  const canvasRef = useRef(null);
  const paintState = useRef({ wave: 0, solid: 0 }).current;

  useLayoutEffect(() => {
    const overlay = overlayRef.current;
    const logo = logoRef.current;
    const canvas = canvasRef.current;
    if (!overlay || !logo || !canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const DPR = Math.min(typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1, 2);
    let W = 0;
    let H = 0;

    function resize() {
      const rect = canvas.getBoundingClientRect();
      W = rect.width || window.innerWidth;
      H = rect.height || window.innerHeight;
      canvas.width = Math.max(1, Math.round(W * DPR));
      canvas.height = Math.max(1, Math.round(H * DPR));
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    }

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();

    function drawVeil() {
      const { wave, solid } = paintState;
      const maxD = Math.hypot(W, H) || 1;

      if (wave > 0.001) {
        const cx = W * 0.5;
        const cy = H;
        const r = maxD * (0.06 + wave * 2.5);
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        g.addColorStop(0, `rgba(34,34,34,${0.2 + wave * 0.65})`);
        g.addColorStop(0.42, `rgba(22,22,22,${0.12 + wave * 0.38})`);
        g.addColorStop(1, "rgba(17,17,17,0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, W, H);
      }

      if (solid > 0.001) {
        ctx.fillStyle = `rgba(17,17,17,${solid})`;
        ctx.fillRect(0, 0, W, H);
      }
    }

    const rafRef = { id: 0 };

    function frame() {
      ctx.clearRect(0, 0, W, H);
      drawVeil();
      rafRef.id = requestAnimationFrame(frame);
    }

    rafRef.id = requestAnimationFrame(frame);

    gsap.set(overlay, { opacity: 1, pointerEvents: "all" });
    gsap.set(logo, {
      opacity: 0,
      scale: 0.85,
      transformOrigin: "50% 50%",
      force3D: true,
    });
    gsap.set(paintState, { wave: 0, solid: 0 });

    const finish = () => {
      cancelAnimationFrame(rafRef.id);
      gsap.set(overlay, { display: "none", pointerEvents: "none" });
      onComplete?.();
    };

    const tl = gsap.timeline();

    tl.to(
      logo,
      { opacity: 1, scale: 1, duration: 0.18, ease: "power3.out" },
      0.05,
    )
      .to(
        logo,
        {
          scale: 1.06,
          duration: 0.11,
          ease: "power1.inOut",
          yoyo: true,
          repeat: 1,
        },
        0.25,
      )
      .addLabel("waveStart", 0.5)
      .to(
        paintState,
        {
          wave: 1,
          duration: 1.8,
          ease: "power3.inOut",
        },
        "waveStart",
      )
      .to(
        paintState,
        {
          solid: 1,
          duration: 1.2,
          ease: "power2.inOut",
        },
        "waveStart+=0.6",
      )
      .to(
        logo,
        { opacity: 0, duration: 0.6, ease: "power2.inOut" },
        "waveStart+=0.7",
      )
      // Hold full dark curtain, then cut to page — no overlay opacity fade (that flashed white).
      .to({}, { duration: 0.12 }, "waveStart+=2.05")
      .add(finish, "waveStart+=2.17");

    return () => {
      cancelAnimationFrame(rafRef.id);
      ro.disconnect();
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={overlayRef}
      className="loading-screen-overlay"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        overflow: "hidden",
        width: "100%",
        height: "100%",
        minHeight: "100dvh",
        opacity: 1,
        pointerEvents: "all",
        background: "#162D24",
      }}
    >
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          display: "block",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Fixed center shell — GSAP must not transform this (mobile viewport + flex center drift) */}
      <div className="loading-screen-logo-anchor">
        <div
          ref={logoRef}
          style={{
            opacity: 0,
            transformOrigin: "center center",
            willChange: "transform, opacity",
          }}
        >
          <img
            src="/logo/Eyrion_real_logo.png"
            alt="Eyrion"
            width={83}
            height={83}
            style={{
              display: "block",
              width: "clamp(47px, 5.9vw, 83px)",
              height: "auto",
              maxWidth: "100%",
              objectFit: "contain",
              filter: "brightness(0) invert(1)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
