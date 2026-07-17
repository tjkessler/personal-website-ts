import { ImageResponse } from "next/og";
import { site } from "@/content";

export const ogSize = {
  width: 1200,
  height: 630,
} as const;

export const ogContentType = "image/png";

type OgImageProps = {
  /** Primary headline (usually the name or page title). */
  title: string;
  /** One-line positioning under the title. */
  subtitle?: string;
  /** Supporting sentence; keep short for the card. */
  description: string;
};

/**
 * Shared Bluesky / Open Graph card art (1200×630).
 * CardyB reads og:title / og:description / og:image from the HTML;
 * this file route supplies the image.
 */
export function createOgImage({
  title,
  subtitle,
  description,
}: OgImageProps): ImageResponse {
  const titlesLine = subtitle ?? site.person.titles.slice(0, 4).join(" · ");

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px 72px",
        background:
          "linear-gradient(145deg, #f8fafc 0%, #eef6f5 48%, #faf6f1 100%)",
        color: "#0f172a",
        fontFamily: "ui-sans-serif, system-ui, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 15% 20%, rgba(15, 118, 110, 0.14), transparent 55%), radial-gradient(ellipse 70% 50% at 90% 85%, rgba(180, 83, 9, 0.12), transparent 50%)",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontWeight: 600,
            letterSpacing: "0.04em",
            color: "#0f766e",
            textTransform: "uppercase",
          }}
        >
          traviskessler.com
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            maxWidth: 1000,
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontWeight: 500,
            color: "#334155",
            maxWidth: 980,
          }}
        >
          {titlesLine}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 26,
            lineHeight: 1.35,
            color: "#64748b",
            maxWidth: 980,
            marginTop: 8,
          }}
        >
          {description}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
          borderTop: "1px solid #cbd5e1",
          paddingTop: 28,
          fontSize: 24,
          color: "#64748b",
        }}
      >
        <div style={{ display: "flex" }}>{site.blueskyHandle}</div>
        <div style={{ display: "flex", color: "#0f766e", fontWeight: 600 }}>
          Full-stack · ML/AI · Scientific computing
        </div>
      </div>
    </div>,
    {
      ...ogSize,
    },
  );
}
