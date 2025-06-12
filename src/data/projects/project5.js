const project5 = {
  id: 5,
  title: 'SportCampus',

  // Propiedades faltantes sin valores
  shortDescription: 'Tu plataforma deportiva universitaria',
  description:
    'SportCampus es una aplicación móvil universitaria que digitaliza por completo la experiencia deportiva estudiantil. Permite gestionar equipos, ofrece estadísticas detalladas y galerías multimedia para documentar eventos deportivos. Soporta varios deportes (fútbol, basquetbol, voleibol y fútbol americano) y tiene dos tipos de usuarios: estudiantes y entrenadores, con navegación adaptada a cada rol. Con su diseño responsive y funciones avanzadas, SportCampus centraliza todo, desde la inscripción hasta el seguimiento de torneos y la gestión de contenidos.',
  thumbnail: '/assets/images/projects/project5/thumbnail.png',
  date: 'Abril - Junio 2025',
  dateRaw: '2025-05-06',
  tools: ['Figma', 'React Native Expo', 'Firebase'],

  repositories: {
    mobile: {
      url: '',
      label: '',
      icon: '',
    },
    web: {
      url: '',
      label: '',
      icon: '',
    },
  },

  problem:
    'Las universidades enfrentan desafíos significativos en la gestión de sus actividades deportivas estudiantiles, pues la organización de equipos, torneos y eventos se realiza de manera fragmentada y manual, utilizando métodos tradicionales como hojas de cálculo y tableros físicos. Esto genera desorganización por la información dispersa sobre equipos, jugadores y torneos; comunicación ineficiente que dificulta la coordinación entre estudiantes y entrenadores.',
  goal: 'El objetivo es desarrollar una plataforma digital integral que centralice y optimice toda la gestión deportiva universitaria, proporcionando una gestión unificada de equipos, jugadores y torneos en una sola plataforma; seguimiento estadístico automatizado del rendimiento deportivo individual y grupal; comunicación eficiente entre todos los actores del ecosistema deportivo; documentación multimedia organizada de eventos y actividades deportivas; experiencia personalizada según el rol del usuario (estudiante o entrenador).',
  role: ' Se realizará investigación con estudiantes y entrenadores del ecosistema deportivo universitario para entender su comportamiento actual en la gestión de actividades deportivas, identificar puntos críticos y oportunidades de mejora. En el diseño de interfaz, se creará un sistema de diseño deportivo universitario con componentes reutilizables y prototipos de alta fidelidad responsivos para móviles. Para concluir, se desarrollarán prototipos interactivos para pruebas de usabilidad con usuarios reales, se iterarán los diseños según el feedback y métricas de uso, y se documentarán las especificaciones para el desarrollo.',
  responsibilities: [
    'Estudio y comprensión de los usuarios y sus necesidades específicas dentro del ámbito deportivo universitario para diseñar soluciones adecuadas.',
    'Diseño de wireframes y prototipos de baja y alta fidelidad',
    'Desarrollo de prototipos con los que los usuarios pueden interactuar, y realización de pruebas para mejorar la experiencia de uso.',
    'Diseñar componentes reutilizables (Cards, Buttons)',
  ],

  research: {
    summary:
      'Para comprender las necesidades y comportamientos actuales en el ámbito deportivo universitario, se realizó una investigación cuantitativa mediante encuestas estructuradas dirigidas a estudiantes y entrenadores de instituciones de educación superior. El objetivo principal fue identificar los principales pain points en la gestión de actividades deportivas, evaluar el nivel de satisfacción con los métodos actuales de comunicación y organización, y validar la demanda potencial de una solución digital integral.',
    researchImage: '/assets/images/projects/project5/research.png',
    keyIssues: [
      'Una falta de información clara sobre los equipos disponibles, lo que dificulta conocer las opciones existentes',
      'Se evidencia una notable falta de claridad y organización en la comunicación de los horarios',
      'Dificultad significativa para seguir el desarrollo del torneo, ya que no se conocen los resultados de los demás partidos',
      'La carencia para notificar cambios de último minuto y mantener la información organizada',
    ],
  },

  competitors: [
    {
      name: 'TeamSnap',
      description:
        'Plataforma líder en gestión de equipos deportivos que centraliza la comunicación, programación y organización de equipos. Permite a entrenadores, padres y jugadores mantenerse conectados y organizados a través de una interfaz intuitiva que maneja desde calendarios hasta mensajería grupal.',
      strengths: [
        'Sistema de comunicación robusto con mensajería grupal',
        'Gestión eficiente de calendarios y eventos',
        'Confirmación de asistencia automatizada',
        'Amplia adopción en el mercado norteamericano',
      ],
      weaknesses: [
        'Enfoque principalmente en deportes juveniles, no universitarios',
        'Carece de análisis avanzado de rendimiento',
        'Funcionalidades de galería muy básicas',
      ],
      targetAudience:
        'Entrenadores de deportes juveniles (6-18 años), padres de familia involucrados en los deportes de sus hijos, ligas recreativas y semi-profesionales, así como equipos de escuelas secundarias.',
      competitiveImage: [
        '/assets/images/projects/project5/competitor/competitor1.png',
      ],
    },
    {
      name: 'SportsEngine',
      description:
        'Plataforma integral para organizaciones deportivas que ofrece gestión completa de ligas, torneos y equipos. Incluye creación de sitios web, registro de jugadores, programación de juegos y herramientas administrativas para organizaciones deportivas de gran escala.',
      strengths: [
        'Gestión completa de torneos y competencias',
        'Sistema de registro y pagos integrado',
        'Soporte para múltiples deportes simultáneamente',
        'Reportes y analytics institucionales',
      ],
      weaknesses: [
        'Interfaz compleja y con curva de aprendizaje alta',
        'Más enfocado en administradores que en jugadores',
        'Poco enfoque en experiencia del usuario final (estudiantes)',
      ],
      targetAudience:
        'Coordinadores deportivos universitarios, administradores de ligas deportivas, organizaciones deportivas institucionales, escuelas preparatorias y universidades, y federaciones deportivas regionales.',
      competitiveImage: [
        '/assets/images/projects/project5/competitor/competitor2.png',
      ],
    },
    {
      name: 'GameChanger',
      description:
        'Aplicación especializada en seguimiento en vivo de partidos deportivos, principalmente béisbol y softball. Permite registrar estadísticas detalladas durante el juego, streaming en vivo y análisis post-partido con enfoque en captura precisa de datos deportivos.',
      strengths: [
        'Registro de estadísticas muy detallado y en tiempo real',
        'Análisis estadístico avanzado individual',
        'Interfaz optimizada para captura rápida durante juegos',
      ],
      weaknesses: [
        'Carece de sistema de torneos',
        'No incluye calendario o programación de eventos',
        'Ausencia de funcionalidades administrativas',
      ],
      targetAudience:
        'Entrenadores de béisbol y softball, scouts y reclutadores deportivos, padres que siguen el rendimiento de sus hijos, jugadores que buscan análisis detallado de su desempeño, y ligas de béisbol amateur y semi-profesional.',
      competitiveImage: [
        '/assets/images/projects/project5/competitor/competitor3.png',
      ],
    },
  ],

  userProfiles: [
    {
      problemStatement:
        'Carlos Eduardo Ramírez Mendoza, entrenador de 34 años con 8 años de experiencia en la BUAP, busca herramientas digitales integradas para optimizar la gestión y comunicación con su equipo, ya que dedica demasiado tiempo a tareas administrativas, limitando su potencial deportivo.',
      problemStatementImage:
        '/assets/images/projects/project5/persona/persona1.png',
    },
    {
      problemStatement:
        'Andrea Sofía Hernández López, de 21 años y capitana de equipo, necesita acceso a sus estadísticas deportivas y mejor comunicación con su equipo para documentar su progreso y aspirar a nuevas oportunidades.',
      problemStatementImage:
        '/assets/images/projects/project5/persona/persona2.png',
    },
    {
      problemStatement:
        'Miguel Ángel Torres Castillo es un estudiante de 19 años que necesita una app deportiva intuitiva para mantenerse informado e integrarse al equipo, ya que la falta de comunicación organizada lo desconecta y limita su crecimiento deportivo-social.',
      problemStatementImage:
        '/assets/images/projects/project5/persona/persona3.png',
    },
  ],

  userJourneyMap: [
    {
      userJourneyMapPersona: 'Mtro. Carlos Ramírez',
      userJourneyMap:
        'Gestión semanal integral del equipo de fútbol de Ingeniería - coordinando entrenamientos, registrando estadísticas manualmente y preparando estrategias para torneos inter-facultades.',
      userJourneyMapImage: '/assets/images/projects/project5/map/map1.jpg',
    },
    {
      userJourneyMapPersona: 'Andrea Hernández',
      userJourneyMap:
        'Participación competitiva como capitana del equipo femenil de voleibol de Psicología - liderando entrenamientos, buscando mejorar estadísticas personales y documentando logros para crear portafolio deportivo.',
      userJourneyMapImage: '/assets/images/projects/project5/map/map2.jpg',
    },
    {
      userJourneyMapPersona: 'Miguel Torres',
      userJourneyMap:
        'Participación como jugador principiante en el equipo de fútbol de Sistemas - navegando la integración social, adaptándose a dinámicas de equipo y intentando mantenerse informado sobre actividades grupales.',
      userJourneyMapImage: '/assets/images/projects/project5/map/map3.jpg',
    },
  ],

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
