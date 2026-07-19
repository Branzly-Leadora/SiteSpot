// SiteSpot brand mark — the actual brand render, used 1:1: a luminous chrome
// wireframe crystal with a glowing core orb, floating in deep space. The asset
// (public/media/logo-crystal.webp) is a square crop of the original artwork
// (watermark corner cropped away), so it carries its own dark space background
// and simply fills whatever badge tile it sits in (the tiles clip it with
// border-radius + overflow:hidden).
//
// `size` is kept for API compatibility and used as the intrinsic dimension;
// the image stretches to fill its tile via width/height 100% + object-fit.
export function LogoMark({ size = 18, ...rest }) {
  return (
    <img
      src="/media/logo-crystal.webp?v=2"
      width={size}
      height={size}
      alt=""
      aria-hidden="true"
      draggable="false"
      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      {...rest}
    />
  )
}
