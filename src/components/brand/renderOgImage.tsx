import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { Mark } from "@/components/brand/Wordmark";

export const ogImageSize = { width: 1200, height: 630 };

// next/og cannot read woff2, so these two TTF instances are vendored for it.
const loadFont = (file: string) => readFile(join(process.cwd(), "src/app/_fonts", file));

export async function renderOgImage(tagline: string) {
  const [display, mono] = await Promise.all([
    loadFont("BricolageGrotesque-Bold.ttf"),
    loadFont("IBMPlexMono-Medium.ttf"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          backgroundColor: "#16120E",
          color: "#F3EADB",
          fontFamily: "Bricolage Grotesque",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <Mark height={196} color="#F4AD46" />
          <div style={{ marginLeft: 36, fontSize: 220, lineHeight: 0.8, letterSpacing: -8 }}>ikizen</div>
          <div
            style={{
              marginLeft: 24,
              fontFamily: "IBM Plex Mono",
              fontSize: 34,
              letterSpacing: 4,
              color: "#F4AD46",
            }}
          >
            STUDIO
          </div>
        </div>
        <div style={{ display: "flex", borderTop: "2px solid #F4AD46", paddingTop: 32, fontSize: 46, letterSpacing: -1 }}>
          {tagline}
        </div>
      </div>
    ),
    {
      ...ogImageSize,
      fonts: [
        { name: "Bricolage Grotesque", data: display, weight: 700, style: "normal" },
        { name: "IBM Plex Mono", data: mono, weight: 500, style: "normal" },
      ],
    },
  );
}
