const project5 = {
  id: 5,
  title: 'MediNote',
  shortDescription: 'Gestión de registros médicos',
  description:
    'MediNote es una aplicación móvil de gestión médica diseñada para doctores y enfermeras. Permite registrar pacientes con datos completos, crear distintos tipos de historiales clínicos, gestionar recordatorios y alertas por prioridad y fecha, y realizar búsquedas avanzadas. Cuenta con navegación intuitiva y acceso seguro para cada profesional. Está orientada a clínicas pequeñas y medianas, consultorios privados y médicos independientes que buscan digitalizar y optimizar su práctica médica.',
  thumbnail: '/assets/images/projects/project5/thumbnail.png',
  date: 'Mayo 2025',
  dateRaw: '2025-05-02',
  tools: ['Figma', 'SCSS', 'React', 'React Native Expo', 'Firebase'],
  repositories: {
    mobile: {
      url: 'https://github.com/AldG99/primary-care-clinic-app',
      label: 'Versión móvil (React Native)',
      icon: '📱',
    },
    web: {
      url: 'https://github.com/AldG99/primary-care-clinic',
      label: 'Versión web (React)',
      icon: '💻',
    },
  },

  // Propiedades faltantes sin valores
  problem:
    'En clínicas pequeñas y consultorios privados, la falta de herramientas digitales adecuadas dificulta la gestión eficiente de la información médica. Esto genera pérdida de datos, demoras en el acceso a historiales, ausencia de recordatorios automatizados y sobrecarga administrativa. Como resultado, se afecta la calidad de atención y se reduce la productividad del personal médico.',
  goal: 'Desarrollar una solución digital integral que permita a los profesionales de la salud gestionar de manera organizada y eficiente la información de sus pacientes, incluyendo historiales clínicos, registros médicos y recordatorios. Esta herramienta busca optimizar los procesos administrativos y clínicos, mejorar la atención al paciente y aumentar la productividad del personal, eliminando prácticas desactualizadas y poco efectivas.',
  role: 'Responsable del diseño e implementación completa de MediNote desde la conceptualización hasta el despliegue. Mi función se centra en el desarrollo frontend móvil, el diseño de la experiencia de usuario, la implementación de sistemas de seguridad y la optimización del rendimiento, con el objetivo de crear una solución digital integral que transforme la gestión médica tradicional en un ecosistema moderno, eficiente y escalable, adaptado a las necesidades de los profesionales de la salud.',
  responsibilities: [
    'Analizar necesidades y comportamientos de doctores y enfermeras para definir requisitos de diseño.',
    'Estructurar y organizar contenido médico de manera lógica y accesible para profesionales de la salud',
    'Crear bocetos, mockups interactivos y prototipos navegables para validar conceptos de diseño',
    'Diseñar interfaces intuitivas adaptadas al flujo de trabajo médico con búsqueda y filtrado eficientes.',
    'Realizar pruebas con usuarios reales para validar diseños y optimizar la experiencia basada en feedback médico',
  ],

  research: {
    summary:
      'La investigación utilizó metodología mixta con profesionales médicos de clínicas pequeñas y consultorios privados, identificando que el 30-40% del tiempo se invierte en búsqueda manual de expedientes físicos y el 60% reporta olvidos frecuentes de citas, con problemas principales de búsqueda ineficiente, falta de recordatorios sistematizados y riesgo de pérdida de información. Tras evaluar tres conceptos de diseño, se seleccionó un enfoque que equilibra funcionalidad y simplicidad, resultando en una arquitectura de seis módulos (Inicio, Pacientes, Registros, Búsqueda, Alertas, Perfil) con principios centrados en eficiencia clínica, acceso rápido y confiabilidad, validada mediante wireframes y feedback de 5 profesionales médicos con flujos críticos priorizados para consulta rápida, registro de pacientes y gestión diaria.',
    researchImage: '/assets/images/projects/project5/research.png',
    keyIssues: [
      'Pérdida significativa de tiempo en búsqueda manual de información que podría dedicarse a atención médica',
      'Información dispersa en múltiples formatos físicos sin conexión ni organización centralizada',
      'Ausencia de sistema de recordatorios que garantice continuidad en tratamientos y citas',
      'Imposibilidad de consultar información fuera del consultorio para emergencias o referencias',
    ],
  },

  competitors: [
    {
      name: 'Doctoralia',
      description:
        'Doctoralia es una plataforma digital disponible como app móvil y sitio web que conecta a pacientes con profesionales de la salud.',
      strengths: [
        'Permite buscar por especialidad, ubicación, nombre o servicios médicos',
        'Buen rendimiento en dispositivos móviles, manteniendo consistencia visual y navegación intuitiva',
        'Permite agendar citas directamente desde la app',
      ],
      weaknesses: [
        'Visibilidad limitada sobre el estado de la cita o funciones complementarias como recordatorios integrados.',
        'Sistema de alertas básico sin inteligencia contextual',
        'No ofrece un sistema unificado de historias clínicas para seguimiento a largo plazo',
        'No se integra con historiales médicos ni con otros sistemas clínicos profundos',
      ],
      targetAudience:
        'Usuarios que necesitan encontrar y agendar citas médicas de forma rápida y sin complicaciones, principalmente en entornos urbanos. La plataforma es especialmente útil para personas con conocimientos digitales funcionales.',
      competitiveImage: [
        '/assets/images/projects/project5/competitor/competitor1.png',
      ],
    },
    {
      name: 'MedicApp',
      description:
        'MedicApp es una aplicación web y móvil diseñada específicamente para fisioterapeutas, que permite digitalizar la gestión clínica y mejorar el seguimiento terapéutico de los pacientes.',
      strengths: [
        'Facilita el monitoreo de la evolución del paciente entre sesiones sin necesidad de visitas presenciales',
        'Disponible como aplicación móvil y también en versión web, lo que facilita el trabajo desde distintos dispositivos.',
        'Automatización de tareas como agendamiento y creación de fichas',
      ],
      weaknesses: [
        'Funcionalidades limitadas en reportes y análisis',
        'Navegación básica, que en algunos casos puede resultar demasiado simplificada para usuarios que buscan más información o control.',
        'Algunos fisioterapeutas pueden encontrar la plataforma compleja si no están familiarizados con herramientas digitales',
      ],
      targetAudience:
        'Usuarios que valoran la inmediatez y simplicidad para acceder a consultas médicas, principalmente personas con necesidades urgentes o que prefieren soluciones digitales rápidas.',
      competitiveImage: [
        '/assets/images/projects/project5/competitor/competitor2.png',
      ],
    },
    {
      name: 'ClinicPoint',
      description:
        'ClinicPoint es una plataforma digital que permite a los usuarios acceder a servicios de salud privados sin necesidad de seguro médico, mediante un modelo de pago por uso.',
      strengths: [
        'Navegación jerárquica intuitiva, permitiendo filtrar servicios por especialidad y ubicación con facilidad',
        'Adaptabilidad móvil eficiente, manteniendo coherencia visual y funcional en distintos dispositivos',
        'Uso correcto del espacio visual, con una interfaz limpia que facilita la lectura y reduce la sobrecarga cognitiva.',
      ],
      weaknesses: [
        'El seguimiento post-reserva no es completamente visible, lo que podría afectar la continuidad de la experiencia.',
        'Algunos bloques de contenido dependen mucho del texto, y podrían mejorarse con recursos visuales complementarios.',
        'Complejidad excesiva para usuarios básicos',
      ],
      targetAudience:
        'Usuarios que buscan resolver necesidades médicas puntuales sin complicaciones administrativas, especialmente aquellos sin seguro médico o con coberturas parciales.',
      competitiveImage: [
        '/assets/images/projects/project5/competitor/competitor3.png',
      ],
    },
  ],

  userProfiles: [
    {
      problemStatement:
        'Dr. Carlos Mendoza es médico general con consultorio privado y necesita digitalizar expedientes médicos desde su teléfono porque pierde mucho tiempo buscando información en papel durante las consultas.',
      problemStatementImage:
        '/assets/images/projects/project5/persona/persona1.png',
    },
  ],

  userJourneyMap: [
    {
      userJourneyMapPersona: 'Dr. Carlos Mendoza',
      userJourneyMap:
        'Mostrar cómo el Dr. Carlos administra su consultorio médico, desde agendar citas y atender pacientes hasta llevar el control de historiales clínicos y analizar estadísticas de salud.',
      userJourneyMapImage: '/assets/images/projects/project5/map/map1.jpg',
    },
  ],

  improvementOpportunities: {
    opportunities: [
      {
        title: 'Acceso inmediato',
        description: 'Eliminar búsqueda de expedientes físicos',
      },
      {
        title: 'Información clara',
        description: 'Historial digital organizado cronológicamente',
      },
      {
        title: 'Recordatorios',
        description: 'Sistema de alertas para seguimientos',
      },
      {
        title: 'Reportes automáticos',
        description: 'Generación de documentos médicos',
      },
    ],
  },

  informationArchitecture: {
    sitemap: {
      sitemapImage: '/assets/images/projects/project5/sitemap.svg',
    },
    userFlow: {
      userFlowImage: '/assets/images/projects/project5/userflow.svg',
    },
  },

  wireframing: {
    paperWireframes: {
      paperWireframesImage: [],
      refinedWireframesImage: '',
    },
    digitalWireframes: {
      digitalWireframesImage: '',
      sizeVariationsImage: [],
      deviceVariationsImage: [],
    },
  },

  prototyping: {
    lowFidelity: {
      description: '',
      prototypeImage: '/assets/images/projects/project5/prototype.png',
      prototypeUrl: '',
    },
  },

  usabilityStudy: {
    parameters: {
      type: 'Estudio de usabilidad sin moderación',
      location: 'Remoto',
      participants: '12 practicantes de medicina',
      time: '20-30 minutos por participante',
    },
    keyFindings: [
      {
        area: 'Navegación General',
        finding: 'La búsqueda desde la pantalla de inicio es efectiva',
        quotes: [
          'P08: "Me gusta que el botón de + esté siempre visible. No tengo que buscar dónde agregar algo nuevo."',
          'P04: "Los iconos son claros. Inmediatamente sé dónde están mis pacientes y dónde puedo buscar."',
        ],
      },
      {
        area: 'Creación de Registros Médicos',
        finding:
          'Una parte significativa de los casos se perdió durante el paso de selección de pacientes.',
        quotes: [
          'P09: "Los tipos de registro están bien, pero ¿puedo crear mis propios tipos?',
          'P10: "Me gusta poder revisar todo antes de guardar. Los datos médicos son muy importantes."',
        ],
      },
    ],
    refiningDesign: [
      {
        mockups: '',
        mockupsImage: '',
        designDecisions: [],
      },
    ],
  },

  visualDesign: {
    colorPalette: {
      60: '',
      30: '',
      10: '',
      reasoning: '',
    },
    responsiveDesign: {
      strategy: '',
      keyDecisions: [],
      screenExamples: '',
      screenSizeVariationsImage: [],
      originalScreenSize: '',
    },
    highFidelity: {
      description: [],
      highFidelityImage: '/assets/images/projects/project5/high_fidelity.png',
      viewPrototypes: [],
    },
    accessibility: {
      considerations: [
        'Estructurar formularios médicos con agrupación visual clara, etiquetas consistentes, espaciado generoso y señales visuales para estados de error y éxito mediante colores, iconos y texto descriptivo.',
        'Desarrollar un sistema de iconos coherente y accesible con iconografía universal, tamaños mínimos de 24x24px, etiquetas de texto, estilo visual uniforme y formas distintivas que no dependan solo del color.',
      ],
    },
  },

  conclusion: {
    summary:
      'El diseño de MediNote logró crear una solución digital integral que aborda las necesidades reales de profesionales de la salud en el manejo de información de pacientes, registros médicos y alertas. A través de un proceso de diseño centrado en el usuario, se desarrolló una aplicación que equilibra funcionalidad médica crítica con usabilidad intuitiva.',
    impact:
      'MediNote contribuye a la reducción de la brecha digital entre hospitales de gran escala y la práctica médica independiente, ofreciendo una solución accesible y funcional para distintos niveles de infraestructura. Su enfoque adaptable y centrado en el usuario permite establecer un modelo de adopción replicable en otros países en desarrollo, donde los recursos tecnológicos y médicos son limitados. Además, al priorizar una experiencia de usuario clara y eficiente, MediNote establece un estándar de usabilidad que eleva las expectativas para futuras soluciones de salud digital.',
    learnings:
      'Diseñar para profesionales médicos exige un conocimiento profundo de los flujos de trabajo clínicos, la terminología especializada y los contextos particulares en los que se utiliza la tecnología en entornos de salud. Esto implica comprender cómo se toman decisiones bajo presión, cómo se prioriza la información crítica y cómo interactúan diferentes roles dentro del equipo médico. Una interfaz efectiva no solo debe ser funcional, sino también reducir la carga cognitiva, minimizar errores y adaptarse a situaciones variables, desde consultorios hasta unidades de emergencia.',
    professionalLessons: [
      'Patrones de interacción familiares reducen curva de aprendizaje significativamente',
      'Interfaces que funcionan bajo presión en entornos médicos, especialmente en situaciones de emergencia, donde los profesionales no pueden detenerse a pensar en cómo usar una aplicación; esta debe ser completamente intuitiva.',
    ],
    personalLessons: [
      'Los requisitos médicos cambian constantemente debido a regulaciones y emergencias como COVID-19, por lo que aprendí a diseñar sistemas flexibles y a manejar la incertidumbre como parte normal del trabajo.',
    ],
    nextSteps: [
      'Explorar necesidades específicas por especialidad médica para adaptar funcionalidades y flujos según los contextos clínicos particulares',
      'Desarrollar el módulo de facturación y gestión administrativa que permita registrar pagos, emitir facturas y optimizar procesos financieros',
    ],
    finalConsiderations:
      'El desarrollo de MediNote representó un desafío significativo que combinó complejidad técnica, necesidades humanas críticas y un alto grado de responsabilidad social. No se trató solo de construir una herramienta funcional, sino de diseñar una solución capaz de integrarse con entornos clínicos reales, donde cada decisión puede impactar directamente en la salud y el bienestar de las personas.',
  },
};

export default project5;
