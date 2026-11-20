import { useEffect, useState } from 'react'
import { IdiomaContext } from './IdiomaContext'
import { idiomas } from './datos'

const CLAVE = 'idioma'

// Idioma de arranque: el que el visitante eligió antes; si no, el de su navegador (es o en).
function idiomaInicial() {
  try {
    const guardado = localStorage.getItem(CLAVE)
    if (Object.hasOwn(idiomas, guardado)) return guardado
  } catch {
    /* el navegador bloquea el almacenamiento: seguimos sin recordar */
  }
  return navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en'
}

export default function IdiomaProvider({ children }) {
  const [idioma, setIdioma] = useState(idiomaInicial)
  const datos = idiomas[idioma]

  // Cada vez que cambia el idioma: actualiza <html lang>, el título de la pestaña y lo recuerda.
  useEffect(() => {
    document.documentElement.lang = datos.ui.htmlLang
    document.title = datos.ui.tituloPagina
    try {
      localStorage.setItem(CLAVE, idioma)
    } catch {
      /* sin almacenamiento */
    }
  }, [idioma, datos])

  const alternar = () => setIdioma((actual) => (actual === 'es' ? 'en' : 'es'))

  return <IdiomaContext.Provider value={{ idioma, alternar, ...datos }}>{children}</IdiomaContext.Provider>
}
