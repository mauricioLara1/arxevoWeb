// Junta los textos de cada idioma en un solo objeto: idiomas.es / idiomas.en
import { perfil as perfilEs } from '../data/es/perfil'
import { ui as uiEs } from '../data/es/ui'
import { arquitectura as arquitecturaEs } from '../data/es/arquitectura'
import { navegacion as navegacionEs } from '../data/es/navegacion'
import { stack as stackEs } from '../data/es/stack'
import { perfil as perfilEn } from '../data/en/perfil'
import { ui as uiEn } from '../data/en/ui'
import { arquitectura as arquitecturaEn } from '../data/en/arquitectura'
import { navegacion as navegacionEn } from '../data/en/navegacion'
import { stack as stackEn } from '../data/en/stack'

export const idiomas = {
  es: { perfil: perfilEs, ui: uiEs, arquitectura: arquitecturaEs, navegacion: navegacionEs, stack: stackEs },
  en: { perfil: perfilEn, ui: uiEn, arquitectura: arquitecturaEn, navegacion: navegacionEn, stack: stackEn },
}
