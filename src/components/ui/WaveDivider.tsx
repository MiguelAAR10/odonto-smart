export function WaveDivider() {
  return (
    <div className="pointer-events-none absolute bottom-0 left-0 z-20 w-full translate-y-[10%]" aria-hidden="true">
      <div className="w-full">
        <svg
          viewBox="0 0 1440 220"
          className="h-auto w-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGlow" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#41d4cb" stopOpacity="0.08" />
              <stop offset="55%" stopColor="#ffffff" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#de1bce" stopOpacity="0.08" />
            </linearGradient>
            <linearGradient id="waveStroke" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#41d4cb" stopOpacity="0.26" />
              <stop offset="100%" stopColor="#de1bce" stopOpacity="0.22" />
            </linearGradient>
          </defs>
          <path
            d="M0 128C181 172 349 184 521 168C664 154 782 112 930 112C1086 112 1209 150 1354 171C1396 177 1425 179 1440 180V220H0V128Z"
            fill="url(#waveGlow)"
          />
          <path
            d="M0 146C163 184 324 194 486 182C632 170 748 136 900 136C1054 136 1180 168 1324 186C1376 192 1413 194 1440 196V220H0V146Z"
            fill="#f7fafc"
            fillOpacity="0.98"
          />
          <path
            d="M0 146C163 184 324 194 486 182C632 170 748 136 900 136C1054 136 1180 168 1324 186C1376 192 1413 194 1440 196"
            stroke="url(#waveStroke)"
            strokeWidth="1.5"
          />
        </svg>
      </div>
    </div>
  );
}
