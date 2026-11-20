import Icon from './Icon'
import { contacto } from '../data/contacto'
import { useIdioma } from '../i18n/useIdioma'

// Sección "Sobre mí": foto o iniciales, texto y datos rápidos.
export default function About() {
  const { perfil, ui } = useIdioma()
  const { sobreMi } = perfil
  const { foto, nombre, iniciales } = contacto
  return (
    <section className="about" id="sobre-mi">
      <div className="wrap about-grid">
        <div className="photo">
          {foto ? <img src={foto} alt={`${ui.fotoDe} ${nombre}`} /> : <span aria-hidden="true">{iniciales}</span>}
        </div>
        <div>
          <div className="eyebrow">{ui.sobreMi}</div>
          <h2>{sobreMi.titulo}</h2>
          {sobreMi.parrafos.map((texto) => <p key={texto}>{texto}</p>)}
          <ul className="facts">
            {sobreMi.datos.map((dato) => (
              <li key={dato.texto}><Icon nombre={dato.icono} />{dato.texto}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
