// Junta los textos de cada idioma en un solo objeto: idiomas.es / idiomas.en
import { perfil as perfilEs } from '../data/es/perfil'
import { ui as uiEs } from '../data/es/ui'
import { arquitectura as arquitecturaEs } from '../data/es/arquitectura'
import { navegacion as navegacionEs } from '../data/es/navegacion'
import { stack as stackEs } from '../data/es/stack'
import { proyectos as proyectosEs } from '../data/es/proyectos'
import { servicios as serviciosEs } from '../data/es/servicios'
import { contactar as contactarEs } from '../data/es/contactar'
import { perfil as perfilEn } from '../data/en/perfil'
import { ui as uiEn } from '../data/en/ui'
import { arquitectura as arquitecturaEn } from '../data/en/arquitectura'
import { navegacion as navegacionEn } from '../data/en/navegacion'
import { stack as stackEn } from '../data/en/stack'
import { proyectos as proyectosEn } from '../data/en/proyectos'
import { servicios as serviciosEn } from '../data/en/servicios'
import { contactar as contactarEn } from '../data/en/contactar'

export const idiomas = {
  es: { perfil: perfilEs, ui: uiEs, arquitectura: arquitecturaEs, navegacion: navegacionEs, stack: stackEs, proyectos: proyectosEs, servicios: serviciosEs, contactar: contactarEs },
  en: { perfil: perfilEn, ui: uiEn, arquitectura: arquitecturaEn, navegacion: navegacionEn, stack: stackEn, proyectos: proyectosEn, servicios: serviciosEn, contactar: contactarEn },
}
