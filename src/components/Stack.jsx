import { stack } from '../data/stack'

// Sección "Stack": un cuadro por grupo de src/data/stack.js
export default function Stack() {
  return (
    <section className="stack" id="stack">
      <div className="wrap">
        <div className="eyebrow">Stack</div>
        <h2>Con qué construyo.</h2>
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
