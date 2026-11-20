import { useIdioma } from '../i18n/useIdioma'

// Sección "Stack": un cuadro por grupo de data/<idioma>/stack.js
export default function Stack() {
  const { stack, ui } = useIdioma()
  return (
    <section className="stack" id="stack">
      <div className="wrap">
        <div className="eyebrow">{ui.stack}</div>
        <h2>{ui.stackTitulo}</h2>
        <div className="stack-grid">
          {stack.map((grupo) => (
            <div className="group" key={grupo.grupo}>
              <h3>{grupo.grupo}</h3>
              <div className="chips">
                {grupo.items.map((item) => <span className="chip" key={item}>{item}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
