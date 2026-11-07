// Each text is a { es, en } pair; see src/i18n.js. kind separates jobs from education in the CV.
export const experience = [
  {
    title: { es: 'Product Developer', en: 'Product Developer' },
    time: { es: 'Febrero 2023 — Hoy', en: 'February 2023 — Present' },
    organization: 'Audiense',
    kind: 'work',
    body: {
      es: [
        'Desarrollo producto en una aplicación de análisis de datos agregados de redes sociales. Participo en el desarrollo de front end, back end, ETL y plataforma.'
      ],
      en: [
        'I develop product for an application that analyses aggregated social media data. I work on the front end, back end, ETL and platform.'
      ]
    },
    learnMoreLink: 'https://www.audiense.com'
  },
  {
    title: { es: 'Desarrollador de Software', en: 'Software Developer' },
    time: { es: 'Marzo 2021 — Enero 2023', en: 'March 2021 — January 2023' },
    organization: 'Lean Mind',
    kind: 'work',
    body: {
      es: [
        'En 2021 tuve el honor de ser contratado en el equipo de Carlos Blé, una empresa de desarrollo de software y consultoría afincada en Tenerife. En Lean Mind tuve la oportunidad de trabajar y aprender en equipos de alto rendimiento enfocados en metodologías Agile.',
        'Optimicé y desarrollé procesos ETL y construí un blog comercial.',
        'Allí aprendí mucho de buenas prácticas de desarrollo, mantenimiento de código y testing con TDD.'
      ],
      en: [
        "In 2021 I had the honour of joining Carlos Blé's team, a software development and consulting company based in Tenerife. At Lean Mind I had the chance to work and learn in high-performing teams focused on Agile methodologies.",
        'I optimised and built ETL processes and developed a commercial blog.',
        'There I learned a lot about good development practices, code maintenance and testing with TDD.'
      ]
    },
    learnMoreLink: 'https://www.leanmind.es/es/'
  },
  {
    title: { es: 'Bootcamp Fullstack', en: 'Full Stack Bootcamp' },
    time: { es: 'Septiembre 2020 — Febrero 2021', en: 'September 2020 — February 2021' },
    organization: 'Escuela de Organización Industrial',
    kind: 'education',
    body: {
      es: ['Completé la 5ª edición del Curso de Programación Fullstack de la EOI dirigido por ManzDev.'],
      en: ["Completed the 5th edition of EOI's Full Stack Programming Course, led by ManzDev."]
    },
    learnMoreLink:
      'https://www.eoi.es/es/cursos/90441/curso-de-programacion-fullstack-presencia-virtual-online-tenerife-5a-edicion'
  },
  {
    title: {
      es: 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)',
      en: 'Higher Technician in Multiplatform Application Development (DAM)'
    },
    time: { es: '2018 — 2020', en: '2018 — 2020' },
    organization: 'CIFP César Manrique',
    kind: 'education',
    body: {
      es: ['Ciclo formativo de grado superior en el CIFP César Manrique, Santa Cruz de Tenerife.'],
      en: ['Higher vocational training at CIFP César Manrique, Santa Cruz de Tenerife.']
    },
    learnMoreLink: 'https://www3.gobiernodecanarias.org/medusa/edublog/cifpcesarmanrique/'
  }
]
