import Icon from './Icon'
import { perfil, enlaceWhatsapp } from '../data/perfil'
import { arquitectura } from '../data/arquitectura'

// Portada: titular, presentación, botones y tarjeta "Cómo construyo".
export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="wrap hero-grid">
        <div>
          <div className="eyebrow">{perfil.etiqueta}</div>
          <h1>{perfil.titularInicio} <span>{perfil.titularResaltado}</span></h1>
          <p className="lead">Soy <strong>{perfil.nombre}</strong>, {perfil.presentacion}</p>
          <div className="actions">
            <a className="btn btn-primary" href={enlaceWhatsapp}>Hablemos de tu proyecto ↗</a>
            <a className="btn btn-ghost" href={perfil.cv}>Ver mi CV</a>
          </div>
          <ul className="meta">
            <li><Icon nombre="ubicacion" />{perfil.ubicacion}</li>
            <li><Icon nombre="codigo" />{perfil.especialidades}</li>
          </ul>
        </div>

        <div className="diagram" role="img" aria-label="Esquema de cómo construyo: interfaz, lógica y datos">
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
