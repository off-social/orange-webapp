import { ResponsiveSlideImage } from "./HeroSlideImage";

/**
 * Hero slide — India ITME 2026 exhibition banner (4–9 Dec 2026, Hall 5,
 * Stall 5). All copy is baked into the artwork, so the alt text carries it.
 *
 * Phones get the 500×768 poster at every width up to 600: it has exactly the
 * frame's ratio, so nothing is cropped. (The 393×700 poster is taller than the
 * frame and lost the machines at the bottom.) The 1440 poster is also taller
 * than its frame, but only empty background is trimmed.
 */

const ITME_IMAGES = [
  { src: "/ITME-2026-500.webp", display: { block: "0px", none: "601px" } },
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
        />
      ))}
    </>
  );
}
