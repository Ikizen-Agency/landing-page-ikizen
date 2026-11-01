import { ogImageSize, renderOgImage } from "@/components/brand/renderOgImage";
import { getDictionary } from "@/i18n";

const { meta } = getDictionary("es");

export const alt = meta.ogImageAlt;
export const size = ogImageSize;
export const contentType = "image/png";

export default function OpengraphImage() {
  return renderOgImage(meta.ogTagline);
}
