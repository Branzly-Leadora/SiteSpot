// SiteSpot brand mark — a hand-drawn geometric "S" stroke with the orbiting
// "spot" dot (the spotlight on your site). Original artwork, no font glyph.
// Draws in currentColor so it works on both light and dark tiles.
export function LogoMark({ size = 18, ...rest }) {
  return (
    <svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      aria-hidden="true"
      {...rest}
    >
      <path
        d="M22.6 9.7C21.4 7.3 18.9 6.1 15.8 6.1c-4.2 0-7.1 2.1-7.1 5.2 0 6.8 14.2 4.2 14.2 11.2 0 3.3-3.1 5.6-7.3 5.6-3.2 0-5.7-1.2-6.9-3.7"
        stroke="currentColor"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      <circle cx="25.9" cy="5.3" r="2.3" fill="currentColor" />
    </svg>
  )
}
