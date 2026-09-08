import { ImageResponse } from "next/og";
import { siteConfig } from "@/content/site";

export const alt = `${siteConfig.name} | Membantu Bisnis Bertumbuh`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const colors = {
  primary: "#2563eb",
  primaryDark: "#1d4ed8",
  navy: "#0b1b3f",
  secondary: "#10b981",
  ink: "#0f1b33",
  muted: "#55617a",
  surface: "#fbfcfe",
  line: "#e6eaf2",
};

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: colors.surface,
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -120,
            width: 520,
            height: 520,
            borderRadius: 520,
            background:
              "radial-gradient(circle at center, rgba(37,99,235,0.18), rgba(37,99,235,0))",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -200,
            left: -140,
            width: 480,
            height: 480,
            borderRadius: 480,
            background:
              "radial-gradient(circle at center, rgba(16,185,129,0.16), rgba(16,185,129,0))",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <svg width="72" height="72" viewBox="0 0 1000 1000">
            <g
              fill="none"
              stroke={colors.navy}
              strokeWidth="110"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M160 130H840L588.3 548.9" />
              <path d="M840 870H160L411.7 451.1" />
            </g>
            <g fill="none" stroke={colors.navy} strokeWidth="71">
              <circle cx="527.5" cy="650" r="82.5" />
              <circle cx="472.5" cy="350" r="82.5" />
            </g>
          </svg>
          <div style={{ fontSize: 44, fontWeight: 700, color: colors.ink }}>
            {siteConfig.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 58,
              fontWeight: 800,
              color: colors.ink,
              lineHeight: 1.15,
              maxWidth: 940,
            }}
          >
            Membantu Bisnis Bertumbuh lewat Teknologi, Desain, dan Pemasaran
          </div>
          <div
            style={{
              fontSize: 30,
              color: colors.muted,
              lineHeight: 1.4,
              maxWidth: 880,
            }}
          >
            Digital growth partner dan pengadaan industri, di bawah grup yang
            dipercaya sejak 2008.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "12px 28px",
              borderRadius: 999,
              background: colors.primary,
              color: "#fff",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            {siteConfig.domain}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "12px 28px",
              borderRadius: 999,
              border: `2px solid ${colors.line}`,
              color: colors.muted,
              fontSize: 26,
            }}
          >
            Konsultasi gratis via WhatsApp
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
