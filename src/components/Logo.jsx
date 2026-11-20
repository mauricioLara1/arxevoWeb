// Logo de Arxevo: la "A" con la curva azul, dibujado en SVG.
// `id` debe ser único si pones dos logos en la misma página.
const CURVA = 'M22 90 C50 66 92 60 120 40 C96 76 56 92 22 90 Z'
const LETRA_A = 'M12 108 L60 12 L108 108 L86 108 L60 56 L34 108 Z'

export default function Logo({ id = 'arxevo-hueco' }) {
  return (
    <svg className="logo-icono" viewBox="0 0 120 120" aria-hidden="true">
      <defs>
        <mask id={id} maskUnits="userSpaceOnUse" x="-10" y="-10" width="150" height="150">
          <rect x="-10" y="-10" width="150" height="150" fill="#fff" />
          <path d={CURVA} fill="#000" stroke="#000" strokeWidth="8" strokeLinejoin="round" />
        </mask>
      </defs>
      <path d={LETRA_A} fill="#fff" mask={`url(#${id})`} />
      <path d={CURVA} fill="#3D78FF" />
    </svg>
  )
}
