import { contacto } from '../data/contacto'
import { useIdioma } from '../i18n/useIdioma'

// Sección "Proyectos": una tarjeta por proyecto de data/<idioma>/proyectos.js
export default function Proyectos() {
  const { proyectos } = useIdioma()
  return (
    <section className="projects" id="proyectos">
      <div className="wrap">
        <div className="eyebrow">{proyectos.etiqueta}</div>
        <h2>{proyectos.titulo}</h2>
        <div className="projects-grid">
          {proyectos.destacados.map((p) => (
            <article className="project" key={p.nombre}>
              <span className="status">{p.estado}</span>
              <h3>{p.nombre}</h3>
              <p className="project-sum">{p.resumen}</p>
              <ul className="project-points">
                {p.puntos.map((punto) => <li key={punto}>{punto}</li>)}
              </ul>
              {p.tecnologias.length > 0 && (
                <div className="chips">
                  {p.tecnologias.map((t) => <span className="chip" key={t}>{t}</span>)}
                </div>
              )}
              {p.enlaces.length > 0 && (
                <div className="project-links">
                  {p.enlaces.map((e) => (
                    <a key={e.url} href={e.url} target="_blank" rel="noopener noreferrer">{e.texto} ↗</a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
        <p className="projects-more">{proyectos.otros}</p>
        <a className="btn btn-ghost" href={contacto.github} target="_blank" rel="noopener noreferrer">
          {proyectos.verGithub} ↗
        </a>
      </div>
    </section>
  )
}
