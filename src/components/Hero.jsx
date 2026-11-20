import Icon from './Icon'
import { contacto, enlaceWhatsapp } from '../data/contacto'
import { useIdioma } from '../i18n/useIdioma'

// Portada: titular, presentación, botones y tarjeta "Cómo construyo".
export default function Hero() {
  const { perfil, ui, arquitectura } = useIdioma()
  return (
    <section className="hero" id="inicio">
      <div className="wrap hero-grid">
        <div>
          <div className="eyebrow">{perfil.etiqueta}</div>
          <h1>{perfil.titularInicio} <span>{perfil.titularResaltado}</span></h1>
          <p className="lead">{ui.soy} <strong>{contacto.nombre}</strong>, {perfil.presentacion}</p>
          <div className="actions">
            <a className="btn btn-primary" href={enlaceWhatsapp(ui.mensajeWhatsapp)}>{ui.hablemosProyecto}</a>
            <a className="btn btn-ghost" href={perfil.cv}>{ui.verCv}</a>
          </div>
          <ul className="meta">
            <li><Icon nombre="ubicacion" />{perfil.ubicacion}</li>
            <li><Icon nombre="codigo" />{perfil.especialidades}</li>
          </ul>
        </div>

        <div className="diagram" role="img" aria-label={ui.diagramaAria}>
          <div className="d-head">
            <span>{arquitectura.titulo}</span>
            <span className="ok">{arquitectura.estado}</span>
          </div>
          <div className="d-steps">
            {arquitectura.pasos.map((paso) => (
              <div className="d-step" key={paso.numero}>
                <small>{paso.numero} · {paso.capa}</small>
                <strong>{paso.titulo}</strong>
                <span className="tag">{paso.tecnologia}</span>
              </div>
            ))}
          </div>
          <div className="d-foot">
            <span>{arquitectura.pie}</span>
            <code>{arquitectura.codigo}</code>
          </div>
        </div>
      </div>
    </section>
  )
}
