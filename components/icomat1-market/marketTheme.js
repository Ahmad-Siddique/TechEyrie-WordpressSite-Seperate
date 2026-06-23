/** Shared palette for /markets sections (matches WordPress light sections). */
export const GREEN = "#162D24";
export const BODY = "rgba(22, 45, 36, 0.82)";
export const MUTED = "rgba(22, 45, 36, 0.45)";

export const sectionPadding = {
  width: "100%",
  backgroundColor: "#ffffff",
  boxSizing: "border-box",
  padding: "clamp(56px, 7vw, 96px) clamp(16px, 4vw, 72px) clamp(64px, 8vw, 112px)",
};

export const headingStyle = {
  margin: 0,
  fontWeight: 700,
  fontSize: "clamp(1.85rem, 3.4vw, 2.85rem)",
  lineHeight: 1.12,
  letterSpacing: "-0.025em",
  color: GREEN,
};

export const introStyle = {
  margin: "clamp(16px, 2vw, 22px) auto 0",
  maxWidth: "min(68ch, 100%)",
  fontWeight: 400,
  fontSize: "clamp(1.05rem, 1.25vw, 1.2rem)",
  lineHeight: 1.75,
  color: BODY,
};

export const cellStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "clamp(8px, 1vw, 12px)",
  minHeight: "40px",
  minWidth: 0,
  padding: "clamp(6px, 0.8vw, 10px) 0",
  color: "rgba(22, 45, 36, 0.9)",
  fontSize: "clamp(1rem, 1.15vw, 1.18rem)",
  fontWeight: 500,
  letterSpacing: "-0.01em",
  lineHeight: 1.35,
  borderRadius: "6px",
};
