// PERFIL: tus datos y textos principales. Edita aquí, no en los componentes.
export const perfil = {
  nombre: 'Mauricio Lara',
  iniciales: 'ML',
  etiqueta: 'Desarrollo de software · Cali, Colombia',
  titularInicio: 'Software claro para',
  titularResaltado: 'problemas reales.',
  presentacion: 'desarrollador backend y fundador de Arxevo. Construyo soluciones digitales que ordenan procesos y ayudan a los negocios a trabajar mejor.',
  ubicacion: 'Cali, Colombia · remoto',
  especialidades: 'Backend · Sistemas de gestión · Automatización',
  // WhatsApp con indicativo y sin "+" ni espacios. Ej: 573001234567
  whatsapp: '573152657048',
  correo: 'contacto@arxevo.com',
  // Archivos dentro de /public
  cv: '/CV_Yhonn_Mauricio_Lara_ES.pdf',
  foto: '/foto.png',
  sobreMi: {
    titulo: 'Tecnología que se entiende y se usa.',
    parrafos: [
      'Soy Tecnólogo en Sistemas de la Universidad del Valle y trabajo como desarrollador backend. Con Arxevo ayudo a pequeñas y medianas empresas a dejar el desorden manual: páginas web, sistemas de gestión y automatizaciones hechas a su medida.',
      'Me gusta construir por partes, mostrar avances reales y dejar cada entrega funcionando y explicada.',
    ],
    datos: [
      { icono: 'birrete', texto: 'Tecnólogo en Sistemas · Universidad del Valle' },
      { icono: 'ubicacion', texto: 'Cali, Colombia' },
      { icono: 'maletin', texto: 'Fundador de Arxevo · software y automatización para pymes' },
    ],
  },
}

export const enlaceWhatsapp = `https://wa.me/${perfil.whatsapp}`
