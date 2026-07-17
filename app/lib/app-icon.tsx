import { ImageResponse } from "next/og";

export const appIconContentType = "image/png";

/**
 * Shared TK monogram for App Router icon / apple-icon routes.
 * Opaque light background (iOS-safe); brand teal from site tokens / OG art.
 */
export function createAppIcon(size: number): ImageResponse {
  const fontSize = Math.round(size * 0.42);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(145deg, #f8fafc 0%, #eef6f5 55%, #faf6f1 100%)",
        color: "#0f766e",
        fontSize,
        fontWeight: 700,
        letterSpacing: "-0.04em",
        fontFamily: "ui-sans-serif, system-ui, sans-serif",
      }}
    >
      TK
    </div>,
    {
      width: size,
      height: size,
    },
  );
}
