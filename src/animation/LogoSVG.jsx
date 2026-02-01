import "./logo.css";

export default function LogoSVG() {
  return (
    <svg
      className="logo"
      viewBox="0 0 100 140"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <mask id="emblem-mask">
          <path
            d="
              M50 105
              C48 83 35 77 20 75
              L80 75
              C65 77 52 83 50 105
              Z
            "
            fill="white"
          />
        </mask>
      </defs>

      {/* Final layout positions */}
      <g className="layout-group">
        {/* Star */}
        <g className="star-layout" transform="translate(50, 82)">
          <g className="star-motion">
            <path
              d="
                M0 -40
                C0 -15 15 0 40 0
                C15 0 0 15 0 40
                C0 15 -15 0 -40 0
                C-15 0 0 -15 0 -40
                Z
              "
              className="logo-fill"
            />
          </g>
        </g>

        {/* Emblem */}
        <g className="emblem-layout" transform="translate(0, 30)">
          <g className="emblem-group">
            <path
              className="logo-outline arm left-arm"
              d="M50 105 C48 83 35 77 20 75"
            />
            <path
              className="logo-outline arm right-arm"
              d="M50 105 C52 83 65 77 80 75"
            />
            <path className="logo-outline top-edge" d="M20 75 L80 75" />

            <g mask="url(#emblem-mask)">
              <rect
                className="logo-fill-sweep"
                x="-90"
                y="60"
                width="200"
                height="60"
              />
            </g>
          </g>
        </g>

        {/* Text */}
        <g className="text-layout" transform="translate(55, 160)">
          <text textAnchor="middle" className="logo-text">
            ELEVATE
          </text>
        </g>
      </g>
    </svg>
  );
}
