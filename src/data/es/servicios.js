// SERVICIOS (español): qué ofreces, cómo trabajas y el botón de cotización.
// Para agregar un servicio: copia un bloque de `items`. El `icono` debe existir en components/Icon.jsx.
export const servicios = {
  etiqueta: 'Servicios',
  titulo: 'Empieza simple, crece a tu ritmo.',
  intro: 'En Arxevo trabajo por entregables: me cuentas qué necesitas, acordamos el alcance y el precio de cada pieza.',
  items: [
    { icono: 'pagina', nombre: 'Landing pages', texto: 'Tu negocio visible en internet con una página clara, rápida y pensada para que te contacten.' },
    { icono: 'sistema', nombre: 'Sistemas de gestión', texto: 'Inventario, clientes, pedidos o rentas en un solo lugar, adaptados a cómo trabaja tu negocio.' },
    { icono: 'rayo', nombre: 'Automatización', texto: 'Avisos, reportes y tareas repetitivas que se hacen solos, para que tu equipo se enfoque en vender y atender.' },
  ],
  proceso: {
    etiqueta: 'Cómo trabajo',
    titulo: 'Claro desde el primer día.',
    pasos: [
      { numero: '01', titulo: 'Conversar', texto: 'Me cuentas cómo trabajas hoy y dónde pierdes tiempo.' },
      { numero: '02', titulo: 'Definir el alcance', texto: 'Acordamos entregables concretos y un precio por cada uno.' },
      { numero: '03', titulo: 'Construir', texto: 'Desarrollo por partes y te muestro avances reales.' },
      { numero: '04', titulo: 'Entregar', texto: 'Lo dejo funcionando y documentado, y te explico cómo usarlo.' },
    ],
  },
  cotizar: {
    texto: 'Cuéntame qué necesitas y te preparo una propuesta por entregables.',
    boton: 'Pedir cotización ↗',
    mensajeWhatsapp: 'Hola Mauricio, me gustaría cotizar un proyecto con Arxevo.',
  },
}
