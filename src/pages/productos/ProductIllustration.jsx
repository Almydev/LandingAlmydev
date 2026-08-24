const S = 2

function Art({ children }) {
  return (
    <svg viewBox="0 0 400 240" fill="none" role="img" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="pArtBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0d1326" />
          <stop offset="55%" stopColor="#111a33" />
          <stop offset="100%" stopColor="#16233f" />
        </linearGradient>
        <linearGradient id="pArtAccent" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
        <radialGradient id="pArtGlow" cx="50%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="240" fill="url(#pArtBg)" />
      <rect width="400" height="240" fill="url(#pArtGlow)" />
      <g stroke="#3b82f6" strokeOpacity="0.08" strokeWidth="1">
        {[80, 160, 240, 320].map((x) => (
          <line key={`v${x}`} x1={x} y1="0" x2={x} y2="240" />
        ))}
        {[60, 120, 180].map((y) => (
          <line key={`h${y}`} x1="0" y1={y} x2="400" y2={y} />
        ))}
      </g>
      <circle cx="346" cy="46" r="52" stroke="url(#pArtAccent)" strokeOpacity="0.25" strokeWidth="1.5" />
      <circle cx="48" cy="204" r="64" stroke="url(#pArtAccent)" strokeOpacity="0.18" strokeWidth="1.5" />
      {children}
    </svg>
  )
}

const arts = {
  'control-gastos': (
    <g strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M158 58h84a8 8 0 018 8v116l-16-10-15 10-15-10-15 10-15-10-16 10V66a8 8 0 018-8z"
        fill="rgba(59,130,246,0.12)"
        stroke="url(#pArtAccent)"
        strokeWidth={S}
      />
      <line x1="180" y1="88" x2="220" y2="88" stroke="#93c5fd" strokeWidth={S} />
      <line x1="180" y1="108" x2="228" y2="108" stroke="#93c5fd" strokeWidth={S} opacity="0.7" />
      <line x1="180" y1="128" x2="212" y2="128" stroke="#93c5fd" strokeWidth={S} opacity="0.45" />
      <circle cx="244" cy="150" r="26" fill="#111a33" stroke="url(#pArtAccent)" strokeWidth={S} />
      <text x="244" y="159" textAnchor="middle" fontSize="26" fontWeight="800" fill="#60a5fa">$</text>
      <path d="M136 176c22 14 42 20 62 18" stroke="#2563eb" strokeWidth={S} strokeDasharray="2 8" opacity="0.8" />
      <rect x="126" y="76" width="14" height="9" rx="2" fill="#2563eb" transform="rotate(-18 133 80)" opacity="0.85" />
      <rect x="118" y="94" width="14" height="9" rx="2" fill="#3b82f6" transform="rotate(-30 125 98)" opacity="0.55" />
    </g>
  ),
  nomina: (
    <g strokeLinecap="round" strokeLinejoin="round">
      <rect x="146" y="56" width="108" height="132" rx="10" fill="rgba(59,130,246,0.12)" stroke="url(#pArtAccent)" strokeWidth={S} />
      <line x1="164" y1="82" x2="212" y2="82" stroke="#93c5fd" strokeWidth={S} />
      <line x1="164" y1="100" x2="236" y2="100" stroke="#93c5fd" strokeWidth={S} opacity="0.7" />
      <line x1="164" y1="118" x2="200" y2="118" stroke="#93c5fd" strokeWidth={S} opacity="0.45" />
      <rect x="164" y="140" width="72" height="30" rx="6" fill="#2563eb" opacity="0.25" />
      <text x="200" y="161" textAnchor="middle" fontSize="15" fontWeight="700" fill="#93c5fd">DIAN</text>
      <circle cx="272" cy="96" r="17" fill="#111a33" stroke="#60a5fa" strokeWidth={S} />
      <path d="M248 130c6-12 14-18 24-18s18 6 24 18" fill="#111a33" stroke="#60a5fa" strokeWidth={S} />
      <path d="M266 148l6 6 12-13" stroke="#4ade80" strokeWidth={S + 0.5} />
    </g>
  ),
  inventarios: (
    <g strokeLinecap="round" strokeLinejoin="round">
      <rect x="140" y="140" width="60" height="48" rx="6" fill="rgba(59,130,246,0.12)" stroke="url(#pArtAccent)" strokeWidth={S} />
      <rect x="208" y="140" width="60" height="48" rx="6" fill="rgba(59,130,246,0.12)" stroke="url(#pArtAccent)" strokeWidth={S} />
      <rect x="174" y="86" width="60" height="46" rx="6" fill="rgba(96,165,250,0.18)" stroke="url(#pArtAccent)" strokeWidth={S} />
      <path d="M174 109h60M204 86v46" stroke="#60a5fa" strokeWidth={S} opacity="0.8" />
      <path d="M170 163h-14M238 163h-14" stroke="#2563eb" strokeWidth={S} opacity="0.5" strokeDasharray="3 6" />
      <path d="M204 78v-14m0 0l-8 8m8-8l8 8" stroke="#4ade80" strokeWidth={S} />
      <circle cx="292" cy="168" r="22" fill="#111a33" stroke="url(#pArtAccent)" strokeWidth={S} />
      <path d="M284 168l6 6 11-12" stroke="#4ade80" strokeWidth={S + 0.5} />
      <path d="M110 92l10-10m0 10l-10-10" stroke="#2563eb" strokeWidth={S} opacity="0.5" />
      <path d="M104 104l14-14" stroke="#2563eb" strokeWidth={S} opacity="0.3" />
    </g>
  ),
  'recursos-humanos': (
    <g strokeLinecap="round" strokeLinejoin="round">
      <rect x="152" y="62" width="96" height="124" rx="10" fill="rgba(59,130,246,0.12)" stroke="url(#pArtAccent)" strokeWidth={S} />
      <rect x="188" y="52" width="24" height="16" rx="5" fill="#2563eb" />
      <circle cx="200" cy="102" r="16" fill="#111a33" stroke="#93c5fd" strokeWidth={S} />
      <path d="M178 134c5-11 12-16 22-16s17 5 22 16" fill="none" stroke="#93c5fd" strokeWidth={S} />
      <line x1="172" y1="154" x2="228" y2="154" stroke="#93c5fd" strokeWidth={S} opacity="0.6" />
      <line x1="182" y1="168" x2="218" y2="168" stroke="#93c5fd" strokeWidth={S} opacity="0.35" />
      <circle cx="278" cy="86" r="15" fill="#111a33" stroke="#60a5fa" strokeWidth={S} opacity="0.9" />
      <path d="M258 116c4-9 11-13 20-13s16 4 20 13" fill="none" stroke="#60a5fa" strokeWidth={S} opacity="0.9" />
      <circle cx="126" cy="112" r="13" fill="#111a33" stroke="#3b82f6" strokeWidth={S} opacity="0.65" />
      <path d="M108 138c4-8 10-12 18-12s14 4 18 12" fill="none" stroke="#3b82f6" strokeWidth={S} opacity="0.65" />
    </g>
  ),
  'finanzas-contabilidad': (
    <g strokeLinecap="round" strokeLinejoin="round">
      <rect x="146" y="132" width="26" height="56" rx="5" fill="rgba(37,99,235,0.35)" stroke="url(#pArtAccent)" strokeWidth={S} />
      <rect x="186" y="108" width="26" height="80" rx="5" fill="rgba(59,130,246,0.3)" stroke="url(#pArtAccent)" strokeWidth={S} />
      <rect x="226" y="84" width="26" height="104" rx="5" fill="rgba(96,165,250,0.32)" stroke="url(#pArtAccent)" strokeWidth={S} />
      <path d="M142 118l38-26 40-14 44-22" stroke="#93c5fd" strokeWidth={S + 0.5} strokeDasharray="1 7" />
      <path d="M264 56l-2 12-12-3" stroke="#93c5fd" strokeWidth={S} />
      <circle cx="290" cy="150" r="21" fill="#111a33" stroke="url(#pArtAccent)" strokeWidth={S} />
      <text x="290" y="157" textAnchor="middle" fontSize="17" fontWeight="800" fill="#60a5fa">%</text>
      <line x1="136" y1="190" x2="266" y2="190" stroke="#3b82f6" strokeWidth={S} opacity="0.5" />
    </g>
  ),
  'crm-ventas': (
    <g strokeLinecap="round" strokeLinejoin="round">
      <path d="M150 68h100l-34 52v40l-32 16v-56l-34-52z" fill="rgba(59,130,246,0.12)" stroke="url(#pArtAccent)" strokeWidth={S} />
      <path d="M156 84h88" stroke="#60a5fa" strokeWidth={S} opacity="0.7" />
      <circle cx="216" cy="196" r="18" fill="rgba(74,222,128,0.14)" stroke="#4ade80" strokeWidth={S} />
      <path d="M209 196l5 5 10-11" stroke="#4ade80" strokeWidth={S + 0.5} />
      <circle cx="286" cy="92" r="24" fill="#111a33" stroke="url(#pArtAccent)" strokeWidth={S} />
      <circle cx="286" cy="92" r="13" fill="none" stroke="#60a5fa" strokeWidth={S} opacity="0.7" />
      <circle cx="286" cy="92" r="4" fill="#60a5fa" />
      <path d="M122 150c10-4 20-4 30 0" stroke="#2563eb" strokeWidth={S} opacity="0.5" />
      <path d="M118 166c12-5 24-5 36 0" stroke="#2563eb" strokeWidth={S} opacity="0.3" />
    </g>
  ),
  'compras-proveedores': (
    <g strokeLinecap="round" strokeLinejoin="round">
      <path d="M138 78h18l16 62h74" fill="none" stroke="url(#pArtAccent)" strokeWidth={S} />
      <path d="M164 96h96l-10 34h-76" fill="rgba(59,130,246,0.12)" stroke="url(#pArtAccent)" strokeWidth={S} />
      <circle cx="186" cy="160" r="11" fill="#111a33" stroke="#93c5fd" strokeWidth={S} />
      <circle cx="232" cy="160" r="11" fill="#111a33" stroke="#93c5fd" strokeWidth={S} />
      <path d="M254 108h22l16 20v18h-14" fill="none" stroke="#60a5fa" strokeWidth={S} />
      <rect x="252" y="112" width="26" height="20" rx="4" fill="#2563eb" opacity="0.35" />
      <circle cx="282" cy="160" r="11" fill="#111a33" stroke="#93c5fd" strokeWidth={S} />
      <path d="M120 132l12-12m0 12l-12-12" stroke="#2563eb" strokeWidth={S} opacity="0.5" />
      <path d="M114 146l16-16" stroke="#2563eb" strokeWidth={S} opacity="0.3" />
    </g>
  ),
}

export default function ProductIllustration({ slug }) {
  return <Art>{arts[slug] ?? null}</Art>
}
