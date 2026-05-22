"use client";

/** Image card used where video cards appeared on /home1. */
export default function CardImage({
  src,
  alt,
  badge,
  footerContent,
  aspectRatio = "16/9",
  footerClassName = "bg-[#f5f5f5] border border-[#e0e0e0] py-3 px-3 sm:px-4 min-h-[80px] sm:min-h-[92px] flex items-start",
}) {
  return (
    <div className="flex flex-col overflow-hidden" style={{ borderRadius: "10px" }}>
      <div
        className="relative w-full bg-black overflow-hidden group"
        style={{ aspectRatio }}
      >
        <img
          src={src}
          alt={alt ?? badge ?? "Eyrion WordPress services"}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-all duration-500 pointer-events-none" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-[#2a2a2a]/80 backdrop-blur-sm border border-white/10 rounded-sm px-3 py-1.5 flex items-center gap-2">
            <span className="text-white text-[10px] font-semibold tracking-[0.12em] uppercase">
              {badge}
            </span>
            <span className="w-4 h-4 rounded-sm border border-white/40 flex items-center justify-center text-white text-[9px]">
              +
            </span>
          </div>
        </div>
      </div>
      <div className={footerClassName}>{footerContent}</div>
    </div>
  );
}
