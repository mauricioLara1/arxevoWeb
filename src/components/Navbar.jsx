import Logo from './Logo'
import { perfil, enlaceWhatsapp } from '../data/perfil'
import { navegacion } from '../data/navegacion'

// Barra superior: logo, enlaces de sección, CV y botón de contacto.
export default function Navbar() {
  return (
    <header className="nav">
      <div className="wrap">
        <a className="brand" href="#inicio" aria-label="Arxevo, inicio">
          <Logo id="arxevo-hueco-nav" />
          <span>Arx<b>evo</b></span>
        </a>
        <nav className="nav-links" aria-label="Principal">
          {navegacion.map((enlace) => (
            <a key={enlace.href} className="solo-pantalla-grande" href={enlace.href}>{enlace.texto}</a>
          ))}
          <a href={perfil.cv}>CV</a>
          <a className="nav-cta" href={enlaceWhatsapp}>Hablemos ↗</a>
        </nav>
      </div>
    </header>
  )
}
