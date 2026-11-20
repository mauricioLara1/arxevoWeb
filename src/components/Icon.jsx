// Íconos de línea. Uso: <Icon nombre="ubicacion" />
// Para agregar uno: suma una entrada en `iconos` (viewBox 24x24).
const iconos = {
  ubicacion: (<><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></>),
  codigo: (<><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></>),
  birrete: (<><path d="M22 10L12 5 2 10l10 5 10-5z" /><path d="M6 12v5c3 2 9 2 12 0v-5" /></>),
  maletin: (<><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /></>),
  pagina: (<><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 9h20" /></>),
  sistema: (<><path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-4" /></>),
  rayo: (<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />),
}

export default function Icon({ nombre }) {
  return (
    <svg className="icon" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {iconos[nombre]}
    </svg>
  )
}
