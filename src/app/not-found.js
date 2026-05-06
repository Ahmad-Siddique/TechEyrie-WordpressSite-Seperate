"use client";

import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { Home, AlertCircle } from "lucide-react";
import Header from "../../components/icomat1/Header";
import FooterSection from "../../components/icomat1/FooterSection";

if (typeof window !== "undefined") {
  gsap.registerPlugin();
}

export default function NotFound() {
  const [theme, setTheme] = useState("light");
  const [quoteOpen, setQuoteOpen] = useState(false);
  const containerRef = useRef(null);
  const numberRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate 404 number
      if (numberRef.current) {
        gsap.from(numberRef.current, {
          scale: 0,
          rotation: 360,
          duration: 1.2,
          ease: "back.out(1.7)",
        });
      }

      // Animate title
      if (titleRef.current) {
        gsap.from(titleRef.current, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          delay: 0.3,
          ease: "power3.out",
        });
      }

      // Animate description
      if (descriptionRef.current) {
        gsap.from(descriptionRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          delay: 0.5,
          ease: "power3.out",
        });
      }

      // Animate button
      if (buttonRef.current) {
        gsap.from(buttonRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          delay: 0.7,
          ease: "power3.out",
        });
      }

      // Floating particles animation
      particlesRef.current.forEach((particle, index) => {
        if (particle) {
          gsap.to(particle, {
            y: `+=${Math.random() * 100 + 50}`,
            x: `+=${Math.random() * 50 - 25}`,
            rotation: Math.random() * 360,
            duration: 3 + Math.random() * 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: index * 0.2,
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [theme]);

  const isDark = theme === "dark";

  return (
    <div
      style={{ position: "relative", zIndex: 1 }}
      data-theme={theme}
      className={isDark ? "bg-[#0a0a0a]" : "bg-white"}
    >
      {/* Theme Toggle Button */}
      <button
        className="theme-toggle-btn"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {theme === "light" ? (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
              fill="currentColor"
            />
          </svg>
        ) : (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 2v2m0 12v2M4.22 4.22l1.42 1.42m8.72 8.72l1.42 1.42M2 10h2m12 0h2M4.22 15.78l1.42-1.42m8.72-8.72l1.42-1.42"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle
              cx="10"
              cy="10"
              r="3"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        )}
      </button>

      <Header quoteOpen={quoteOpen} setQuoteOpen={setQuoteOpen} />

      <main
        ref={containerRef}
        className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
          isDark ? "text-white" : "text-black"
        }`}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating orbs */}
          <div
            className={`absolute top-20 left-10 w-64 h-64 rounded-full ${
              isDark ? "bg-[#74F5A1]/5" : "bg-[#3BC972]/5"
            } blur-3xl animate-pulse`}
          />
          <div
            className={`absolute bottom-20 right-10 w-96 h-96 rounded-full ${
              isDark ? "bg-[#74F5A1]/3" : "bg-[#3BC972]/3"
            } blur-3xl animate-pulse`}
            style={{ animationDelay: "1s" }}
          />
          <div
            className={`absolute top-1/2 left-1/2 w-80 h-80 rounded-full ${
              isDark ? "bg-[#74F5A1]/4" : "bg-[#3BC972]/4"
            } blur-3xl animate-pulse`}
            style={{ animationDelay: "2s" }}
          />

          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `linear-gradient(${
                isDark ? "#74F5A1" : "#3BC972"
              } 1px, transparent 1px), linear-gradient(90deg, ${
                isDark ? "#74F5A1" : "#3BC972"
              } 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />

          {/* Floating particles */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              ref={(el) => (particlesRef.current[i] = el)}
              className={`absolute w-2 h-2 rounded-full ${
                isDark ? "bg-[#74F5A1]/20" : "bg-[#3BC972]/20"
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* 404 Number */}
          <div
            ref={numberRef}
            className="mb-8"
          >
            <h1
              className={`text-[120px] md:text-[180px] lg:text-[220px] font-bold leading-none ${
                isDark ? "text-[#74F5A1]" : "text-[#3BC972]"
              }`}
              style={{
                fontFamily: "'Yantramanav', Inter, Arial, sans-serif",
                textShadow: isDark
                  ? "0 0 40px rgba(116, 245, 161, 0.3)"
                  : "0 0 20px rgba(59, 201, 114, 0.2)",
              }}
            >
              404
            </h1>
          </div>

          {/* Title */}
          <h2
            ref={titleRef}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            style={{
              fontFamily: "'Yantramanav', Inter, Arial, sans-serif",
            }}
          >
            Page Not Found
          </h2>

          {/* Description */}
          <p
            ref={descriptionRef}
            className={`text-lg md:text-xl mb-12 max-w-2xl mx-auto ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
            style={{
              fontFamily: "Inter, Arial, sans-serif",
            }}
          >
            The page you're looking for seems to have vanished into the digital
            void. It might have been moved, deleted, or never existed.
          </p>

          {/* Action Buttons */}
          <div
            ref={buttonRef}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/"
              className={`group flex items-center gap-3 px-6 py-3 rounded-[4px] font-semibold transition-all duration-300 ${
                isDark
                  ? "bg-[#74F5A1] text-black hover:bg-[#5FE08D] hover:scale-105"
                  : "bg-[#3BC972] text-white hover:bg-[#2FA85F] hover:scale-105"
              }`}
              style={{
                fontFamily: "Inter, Arial, sans-serif",
              }}
            >
              <Home className="w-5 h-5" />
              <span>Go Home</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  d="M1 13L13 1M13 1H5M13 1V9"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            <Link
              href="/#contact"
              className={`group flex items-center gap-3 px-6 py-3 rounded-[4px] font-semibold transition-all duration-300 border ${
                isDark
                  ? "border-white/20 bg-black/40 text-white hover:bg-black/60 hover:border-white/30"
                  : "border-black/20 bg-white/80 text-black hover:bg-white hover:border-black/30"
              } hover:scale-105`}
              style={{
                fontFamily: "Inter, Arial, sans-serif",
              }}
            >
              <AlertCircle className="w-5 h-5" />
              <span>Report Issue</span>
            </Link>
          </div>

          {/* Quick Links */}
          <div className="mt-16 pt-8 border-t border-opacity-10">
            <p
              className={`text-sm mb-4 ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}
              style={{
                fontFamily: "Inter, Arial, sans-serif",
              }}
            >
              Popular pages:
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {[
                { label: "Services", href: "/#solutions" },
                { label: "Work", href: "/work" },
                { label: "About", href: "/about-us" },
                { label: "WordPress Design", href: "/wordpress/design" },
                { label: "Contact", href: "/#contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isDark
                      ? "text-gray-300 hover:text-[#74F5A1]"
                      : "text-gray-600 hover:text-[#3BC972]"
                  }`}
                  style={{
                    fontFamily: "Inter, Arial, sans-serif",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
}

