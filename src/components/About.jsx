import Icon from './Icon'
import { perfil } from '../data/perfil'

// Sección "Sobre mí" (fondo claro): foto o iniciales, texto y datos rápidos.
export default function About() {
  const { sobreMi, foto, nombre, iniciales } = perfil
  return (
    <section className="about" id="sobre-mi">
      <div className="wrap about-grid">
        <div className="photo">
          {foto ? <img src={foto} alt={`Foto de ${nombre}`} /> : <span aria-hidden="true">{iniciales}</span>}
        </div>
        <div>
          <div className="eyebrow">Sobre mí</div>
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
