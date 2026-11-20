import { contacto, enlaceWhatsapp } from '../data/contacto'
import { useIdioma } from '../i18n/useIdioma'

// Sección final: llamado a la acción, CV, redes y disponibilidad.
export default function Contacto() {
  const { contactar, perfil } = useIdioma()
  return (
    <section className="contact" id="contacto">
      <div className="wrap">
        <div className="eyebrow">{contactar.etiqueta}</div>
        <h2>{contactar.titulo}</h2>
        <p className="contact-text">{contactar.texto}</p>
        <div className="actions">
          <a className="btn btn-primary" href={enlaceWhatsapp(contactar.mensajeWhatsapp)}>{contactar.botonWhatsapp}</a>
          <a className="btn btn-ghost" href={perfil.cv}>{contactar.cv}</a>
        </div>
        <ul className="contact-links">
          <li><a href={contacto.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></li>
          <li><a href={contacto.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a></li>
        </ul>
        <p className="availability">{contactar.disponibilidad}</p>
      </div>
    </section>
  )
}
