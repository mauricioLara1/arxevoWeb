import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import IdiomaProvider from './i18n/IdiomaProvider.jsx'

// IdiomaProvider envuelve toda la página: así cualquier componente puede leer el idioma.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <IdiomaProvider>
      <App />
    </IdiomaProvider>
  </StrictMode>,
)
