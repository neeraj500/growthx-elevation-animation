<svg>
  <g id="start" />
  <g id="outline" />
  <g id="fill" />
</svg>;

import "./logo.css";

export default function LogoSVG() {
  return (
    <svg
      className="logo"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Star */}
      <g id="star">
        <path
          d="
            M50 18
            C55 22 58 25 62 30
            C58 35 55 38 50 42
            C45 38 42 35 38 30
            C42 25 45 22 50 18
          "
          className="logo-fill"
        />
      </g>

      {/* Bottom emblem */}
      <g id="emblem">
        <path
          d="
            M20 60
            C30 62 40 68 50 90
            C60 68 70 62 80 60
            C60 58 40 58 20 60
            Z
          "
          className="logo-fill"
        />
      </g>
    </svg>
  );
}
