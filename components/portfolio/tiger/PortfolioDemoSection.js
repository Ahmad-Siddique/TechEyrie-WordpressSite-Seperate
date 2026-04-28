export default function PortfolioDemoSection() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0f241d",
        color: "#f5f7f6",
        padding: "64px 24px",
        fontFamily: "Akkurat, Arial, sans-serif",
      }}
    >
      <section style={{ maxWidth: "960px", margin: "0 auto" }}>
        <p style={{ opacity: 0.72, margin: 0, letterSpacing: "0.08em", textTransform: "uppercase" }}>
          Demo Portfolio
        </p>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.4rem)", margin: "14px 0 18px" }}>
          TIGER
        </h1>
        <p style={{ fontSize: "1.08rem", lineHeight: 1.7, opacity: 0.9 }}>
          This is demo content for the TIGER portfolio page. Replace this with
          finalized project background, platform strategy, deliverables, and
          performance highlights.
        </p>
        <div style={{ marginTop: "30px", padding: "20px", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "14px" }}>
          <h2 style={{ marginTop: 0 }}>Project Snapshot</h2>
          <p style={{ marginBottom: 0, lineHeight: 1.7 }}>
            Industry: Enterprise Services | Scope: Design + Build | Timeline: 10
            weeks | Status: Demo
          </p>
        </div>
      </section>
    </main>
  );
}
