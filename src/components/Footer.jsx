import { perfil } from '../data/perfil'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">© Arxevo · {perfil.nombre} · Cali, Colombia</div>
    </footer>
  )
}
