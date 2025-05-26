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

  competitors: [
    {
      name: '',
      description: '',
      strengths: [],
      weaknesses: [],
      targetAudience: '',
      competitiveImage: [],
    },
  ],

  informationArchitecture: {
    sitemap: {
      sitemapImage: '',
    },
    userFlow: {
      userFlowImage: '',
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
      prototypeImage: '',
      prototypeUrl: '',
    },
  },

  usabilityStudy: {
    parameters: {
      type: '',
      location: '',
      participants: '',
      time: '',
    },
    keyFindings: [
      {
        area: '',
        finding: '',
        quotes: [],
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
      highFidelityImage: '',
      viewPrototypes: [],
    },
    accessibility: {
      considerations: [],
    },
  },

  conclusion: {
    summary: '',
    impact: '',
    learnings: '',
    professionalLessons: [],
    personalLessons: [],
    nextSteps: [],
    finalConsiderations: '',
  },
};

export default project5;
