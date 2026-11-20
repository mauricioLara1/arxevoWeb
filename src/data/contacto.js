// CONTACTO: datos que NO cambian con el idioma. Se editan una sola vez, aquí.
export const contacto = {
  nombre: 'Mauricio Lara',
  iniciales: 'ML',
  foto: '/foto.png', // archivo dentro de /public
  whatsapp: '573152657048', // indicativo + número, sin "+" ni espacios
  linkedin: 'https://www.linkedin.com/in/yhonnmauriciol',
  github: 'https://github.com/mauricioLara1',
}

// Enlace de WhatsApp con un mensaje inicial ya escrito (cada idioma tiene el suyo)
export function enlaceWhatsapp(mensaje = '') {
  return `https://wa.me/${contacto.whatsapp}?text=${encodeURIComponent(mensaje)}`
}
