import type { SVGProps } from "react";

/**
 * Full Finlete logo lockup: F-mark (white parallelogram + green accent
 * forming the stylised F) plus the FINLETE wordmark to its right.
 *
 * Measurements extracted from the live Framer site via Claude_Preview_inspect:
 *   F-mark parallelogram  viewBox 0 0 24.4 12.075    — rendered 25×12 px
 *   F-mark green accent   viewBox 0 0 19.151 15.056  — rendered 19×15 px, offset inside the parallelogram
 *   Wordmark              viewBox 0 0 97.292 15.132  — rendered 98×15 px
 *
 * When rendered at `height=24` the full lockup measures ≈128×24 px, matching
 * the live header exactly.
 */
export function FinleteLogo({
  height = 24,
  className,
  wordmarkColor = "#fafafa",
  ...props
}: Omit<SVGProps<SVGSVGElement>, "color"> & {
  height?: number;
  wordmarkColor?: string;
}) {
  // The lockup is 128 units wide by 24 tall in our local coordinate system.
  const aspect = 128 / 24;
  const width = height * aspect;

  return (
    <svg
      viewBox="0 0 128 24"
      width={width}
      height={height}
      className={className}
      role="img"
      aria-label="Finlete"
      {...props}
    >
      {/* ---- F-mark (white parallelogram body) — drawn first so the green accent sits on top ---- */}
      <g transform="translate(0, 0)">
        {/* Scale original 24.4×12.075 to our 25×12 slot */}
        <g transform="scale(1.025 0.994)">
          <path
            d="M 6.973 6.037 L 20.915 6.037 L 24.4 0 L 3.486 0 L 0 6.037 L 3.486 12.075 L 6.973 6.037 Z"
            fill={wordmarkColor}
          />
        </g>
      </g>

      {/* ---- F-mark (green accent) ---- */}
      <g transform="translate(4, 9)">
        {/* Scale original 19.151×15.056 to our 19×15 slot */}
        <g transform="scale(0.992 0.996)">
          <path
            d="M 19.151 0 L 15.665 6.037 L 8.694 6.037 L 5.229 12.038 L 5.207 12.075 L 3.487 15.056 L 0 9.019 L 1.722 6.037 L 1.743 6 L 5.207 0 Z"
            fill="#44a647"
          />
        </g>
      </g>

      {/* ---- FINLETE wordmark ---- */}
      <g transform="translate(31, 5)">
        {/* Scale original 97.292×15.132 to fit our 97×15 slot */}
        <g transform="scale(0.997 0.991)">
          {/* F */}
          <path
            fill={wordmarkColor}
            d="M 10.693 8.928 L 4.539 8.928 L 3.658 15.132 L 0 15.132 L 2.12 0 L 13.215 0 L 12.786 3.154 L 5.351 3.154 L 4.948 6.078 L 11.101 6.078 L 10.693 8.928 Z"
          />
          {/* I */}
          <path
            fill={wordmarkColor}
            d="M 18.46 15.132 L 14.804 15.132 L 16.922 0 L 20.578 0 Z"
          />
          {/* N */}
          <path
            fill={wordmarkColor}
            d="M 36.567 15.132 L 33.741 15.132 L 27.715 6.305 L 26.479 15.132 L 22.854 15.132 L 24.966 0 L 27.791 0 L 33.844 8.676 L 35.054 0 L 38.685 0 L 36.567 15.132 Z"
          />
          {/* L */}
          <path
            fill={wordmarkColor}
            d="M 40.955 15.132 L 43.073 0 L 46.73 0 L 45.066 11.979 L 51.824 11.979 L 51.371 15.132 L 40.955 15.132 Z"
          />
          {/* E */}
          <path
            fill={wordmarkColor}
            d="M 65.567 8.903 L 59.415 8.903 L 58.986 11.979 L 66.324 11.979 L 65.871 15.132 L 54.875 15.132 L 56.993 0 L 67.989 0 L 67.561 3.154 L 60.222 3.154 L 59.818 6.053 L 65.972 6.053 Z"
          />
          {/* T */}
          <path
            fill={wordmarkColor}
            d="M 70.737 0 L 82.914 0 L 82.459 3.154 L 78.203 3.154 L 76.513 15.132 L 72.855 15.132 L 74.545 3.154 L 70.284 3.154 Z"
          />
          {/* E (second) */}
          <path
            fill={wordmarkColor}
            d="M 94.868 8.903 L 88.718 8.903 L 88.289 11.979 L 95.627 11.979 L 95.174 15.132 L 84.179 15.132 L 86.298 0 L 97.292 0 L 96.863 3.154 L 89.525 3.154 L 89.121 6.053 L 95.274 6.053 Z"
          />
        </g>
      </g>
    </svg>
  );
}

/**
 * Compact F-mark only (no wordmark). Useful for favicons, avatars, compact spots.
 */
export function FinleteFMark({
  height = 24,
  className,
  ...props
}: SVGProps<SVGSVGElement> & { height?: number }) {
  const width = (height * 25) / 24;
  return (
    <svg
      viewBox="0 0 25 24"
      width={width}
      height={height}
      className={className}
      role="img"
      aria-label="Finlete"
      {...props}
    >
      <path
        d="M 6.973 6.037 L 20.915 6.037 L 24.4 0 L 3.486 0 L 0 6.037 L 3.486 12.075 L 6.973 6.037 Z"
        fill="#fafafa"
      />
      <g transform="translate(4, 9)">
        <path
          d="M 19.151 0 L 15.665 6.037 L 8.694 6.037 L 5.229 12.038 L 5.207 12.075 L 3.487 15.056 L 0 9.019 L 1.722 6.037 L 1.743 6 L 5.207 0 Z"
          fill="#44a647"
        />
      </g>
    </svg>
  );
}
