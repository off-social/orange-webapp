import { ResponsiveSlideImage } from "./HeroSlideImage";

/**
 * Hero slide — India ITME 2026 exhibition banner (4–9 Dec 2026, Hall 5,
 * Stall 5). All copy is baked into the artwork, so the alt text carries it.
 *
 * The 1440 and 393 posters are taller than the carousel frame at their widths,
 * so `cover` trims them vertically. Centre is safe for the 1440 one; the 393
 * one is anchored to the top so the headline survives and the machines at the
 * bottom take the trim.
 */

const ITME_IMAGES = [
  {
    src: "/ITME-2026-393.webp",
    display: { block: "0px", none: "441px" },
    objectPosition: "center top",
  },
  { src: "/ITME-2026-500.webp", display: { block: "441px", none: "601px" } },
  { src: "/ITME-2026-768.webp", display: { block: "601px", none: "1025px" } },
  { src: "/ITME-2026-1440.webp", display: { block: "1025px", none: "1441px" } },
  { src: "/ITME-2026.webp", display: { block: "1441px", none: "" } },
];

export default function SlideItme2026() {
  return (
    <>
      {ITME_IMAGES.map((img) => (
        <ResponsiveSlideImage
          key={img.src}
          src={img.src}
          alt="The future of printing is calling. Visit us at India ITME 2026, 4–9 Dec 2026, Hall 5, Stall 5, India Exposition Mart (IEML), Greater Noida"
          showFrom={img.display.block}
          hideFrom={img.display.none}
          objectPosition={img.objectPosition}
        />
      ))}
    </>
  );
}
