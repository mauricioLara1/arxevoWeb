import { contacto } from '../data/contacto'
import { useIdioma } from '../i18n/useIdioma'

export default function Footer() {
  const { ui } = useIdioma()
  return (
    <footer className="footer">
      <div className="wrap">© Arxevo · {contacto.nombre} · {ui.pie}</div>
    </footer>
  )
}
