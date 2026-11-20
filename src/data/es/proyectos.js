// PROYECTOS (español). Para agregar uno: copia un bloque dentro de `destacados` y cambia los textos.
// - estado:     etiqueta corta (ej. 'Versión 1 cerrada · Oct 2026')
// - tecnologias: lista; si la dejas vacía [], no se muestra
// - enlaces:    lista; ej. { texto: 'Código', url: 'https://github.com/mauricioLara1/NOMBRE-DEL-REPO' }
export const proyectos = {
  etiqueta: 'Proyectos',
  titulo: 'Lo que he construido.',
  verGithub: 'Ver más en GitHub',
  otros: 'También: una plataforma veterinaria full-stack (React, Node.js, PostgreSQL, JWT), una API REST de ventas (Spring Boot, Kotlin, Swagger) y un backend de e-commerce.',
  destacados: [
    {
      nombre: 'Menú virtual multisucursal',
      estado: 'Versión 1 cerrada · Oct 2026',
      resumen: 'Menú público para negocios con varias sucursales y un panel de administración con roles de dueño y administrador de sucursal.',
      puntos: [
        'Modelo de 8 tablas con borrado suave y API REST por capas, con transacciones y auditoría.',
        'Login con JWT en cookie httpOnly, permisos por rol y sucursal, y límite de intentos de login.',
        'Despliegue con Docker Compose (base de datos, API y Caddy), README y documentación de arquitectura.',
      ],
      tecnologias: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Caddy', 'JWT'],
      enlaces: [],
    },
    {
      nombre: 'Sistema modular de inventario, ventas y rentas',
      estado: 'En diseño · desde Oct 2026',
      resumen: 'Sistema adaptable para controlar inventario por lotes, ventas y rentas de unidades físicas, con roles por sucursal.',
      puntos: [
        'Inventario por lotes: proveedor, precio, cantidad y caducidad.',
        'Rentas con unidades físicas, cargos y pagos.',
        'Módulos independientes y roles por sucursal (repositorio con tag v0.1.0).',
      ],
      tecnologias: [], // completa con las tecnologías reales del proyecto
      enlaces: [],
    },
    {
      nombre: 'Seguridad y CTF',
      estado: 'En formación · 2026',
      resumen: 'Práctica documentada de seguridad ofensiva: retos CTF y herramientas propias.',
      puntos: [
        'Writeups documentados de OverTheWire Bandit.',
        'Escáner de puertos en Python con análisis de banners SMTP.',
      ],
      tecnologias: ['Python', 'Linux', 'Wireshark'],
      enlaces: [],
    },
  ],
}
