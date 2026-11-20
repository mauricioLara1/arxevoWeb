import { useContext } from 'react'
import { IdiomaContext } from './IdiomaContext'

// Uso en un componente: const { perfil, ui, alternar } = useIdioma()
export function useIdioma() {
  return useContext(IdiomaContext)
}
