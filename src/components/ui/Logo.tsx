export function Logo({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0 }}
    >
      {/* Outer Hexagon */}
      <path
        d="M16 2 L29 9.5 V22.5 L16 30 L3 22.5 V9.5 L16 2Z"
        stroke="var(--accent-blue)"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Inner Hexagon */}
      <path
        d="M16 8 L23 12 V20 L16 24 L9 20 V12 L16 8Z"
        stroke="var(--accent-green)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Nodes representing data points/mentorship */}
      <circle cx="16" cy="16" r="3" fill="var(--accent-blue)" />
      <circle cx="9" cy="12" r="2" fill="var(--accent-green)" />
      <circle cx="23" cy="20" r="2" fill="var(--accent-green)" />
      <circle cx="9" cy="20" r="2" fill="var(--accent-green)" />
      <circle cx="23" cy="12" r="2" fill="var(--accent-green)" />
      {/* Connections representing network/analysis */}
      <path
        d="M9 12 L16 16 L23 20"
        stroke="var(--accent-blue)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M9 20 L16 16 L23 12"
        stroke="var(--accent-blue)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
