import Icon from './Icon'
import { enlaceWhatsapp } from '../data/contacto'
import { useIdioma } from '../i18n/useIdioma'

// Sección "Servicios": servicios, cómo trabajo (4 pasos) y botón de cotización.
export default function Servicios() {
  const { servicios } = useIdioma()
  const { proceso, cotizar } = servicios
  return (
    <section className="services" id="servicios">
      <div className="wrap">
        <div className="eyebrow">{servicios.etiqueta}</div>
        <h2>{servicios.titulo}</h2>
        <p className="services-intro">{servicios.intro}</p>
        <div className="services-grid">
          {servicios.items.map((s) => (
            <article className="service" key={s.nombre}>
              <Icon nombre={s.icono} />
              <h3>{s.nombre}</h3>
              <p>{s.texto}</p>
            </article>
          ))}
        </div>

        <div className="process" id="proceso">
          <div className="eyebrow">{proceso.etiqueta}</div>
          <h2>{proceso.titulo}</h2>
          <ol className="steps">
            {proceso.pasos.map((p) => (
              <li className="step" key={p.numero}>
                <div className="step-num">{p.numero}</div>
                <h3>{p.titulo}</h3>
                <p>{p.texto}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="quote-box">
          <p>{cotizar.texto}</p>
          <a className="btn btn-primary" href={enlaceWhatsapp(cotizar.mensajeWhatsapp)}>{cotizar.boton}</a>
        </div>
      </div>
    </section>
  )
}
