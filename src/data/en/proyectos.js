// PROJECTS (English). Same keys as es/proyectos.js.
export const proyectos = {
  etiqueta: 'Projects',
  titulo: 'What I have built.',
  verGithub: 'See more on GitHub',
  otros: 'Also: a full-stack veterinary platform (React, Node.js, PostgreSQL, JWT), a sales REST API (Spring Boot, Kotlin, Swagger) and an e-commerce backend.',
  destacados: [
    {
      nombre: 'Multi-branch virtual menu',
      estado: 'Version 1 closed · Oct 2026',
      resumen: 'A public menu for businesses with several branches, plus an admin panel with owner and branch-administrator roles.',
      puntos: [
        'An 8-table data model with soft delete and a layered REST API with transactions and auditing.',
        'JWT login in an httpOnly cookie, permissions by role and branch, and a login attempt limit.',
        'Deployment with Docker Compose (database, API and Caddy), README and architecture documentation.',
      ],
      tecnologias: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Caddy', 'JWT'],
      enlaces: [],
    },
    {
      nombre: 'Modular inventory, sales and rentals system',
      estado: 'In design · since Oct 2026',
      resumen: 'An adaptable system to control inventory by batches, sales and rentals of physical units, with roles per branch.',
      puntos: [
        'Inventory by batches: supplier, price, quantity and expiry.',
        'Rentals with physical units, charges and payments.',
        'Independent modules and roles per branch (repository tagged v0.1.0).',
      ],
      tecnologias: [],
      enlaces: [],
    },
    {
      nombre: 'Security and CTF',
      estado: 'In training · 2026',
      resumen: 'Documented offensive security practice: CTF challenges and my own tools.',
      puntos: [
        'Documented OverTheWire Bandit write-ups.',
        'Python port scanner with SMTP banner analysis.',
      ],
      tecnologias: ['Python', 'Linux', 'Wireshark'],
      enlaces: [],
    },
  ],
}
