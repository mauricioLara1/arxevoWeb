import Logo from './Logo'
import { enlaceWhatsapp } from '../data/contacto'
import { useIdioma } from '../i18n/useIdioma'

// Barra superior: logo, enlaces, CV, contacto y botón de idioma.
export default function Navbar() {
  const { perfil, ui, navegacion, alternar } = useIdioma()
  return (
    <header className="nav">
      <div className="wrap">
        <a className="brand" href="#inicio" aria-label={ui.inicioAria}>
          <Logo id="arxevo-hueco-nav" />
          <span>Arx<b>evo</b></span>
        </a>
        <nav className="nav-links" aria-label={ui.navAria}>
          {navegacion.map((enlace) => (
            <a key={enlace.href} className="solo-pantalla-grande" href={enlace.href}>{enlace.texto}</a>
          ))}
          <a href={perfil.cv}>{ui.cv}</a>
          <a className="nav-cta" href={enlaceWhatsapp(ui.mensajeWhatsapp)}>{ui.hablemos}</a>
          <button type="button" className="btn-idioma" onClick={alternar} aria-label={ui.botonIdiomaAria}>
            {ui.botonIdioma}
          </button>
        </nav>
      </div>
    </header>
  )
}
