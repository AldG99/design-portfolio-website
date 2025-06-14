const project5 = {
  id: 5,
  title: 'SportCampus',

  // Propiedades faltantes sin valores
  shortDescription:
    'Diseñada una aplicación móvil que digitaliza completamente la experiencia deportiva universitaria, permitiendo gestionar equipos, visualizar estadísticas detalladas y documentar eventos deportivos con galerías multimedia, adaptándose a estudiantes y entrenadores para centralizar desde inscripciones hasta seguimiento de torneos.',
  description:
    'SportCampus es una aplicación móvil universitaria que digitaliza por completo la experiencia deportiva estudiantil. Permite gestionar equipos, ofrece estadísticas detalladas y galerías multimedia para documentar eventos deportivos. Soporta varios deportes (fútbol, basquetbol, voleibol y fútbol americano) y tiene dos tipos de usuarios: estudiantes y entrenadores, con navegación adaptada a cada rol. Con su diseño responsive y funciones avanzadas, SportCampus centraliza todo, desde la inscripción hasta el seguimiento de torneos y la gestión de contenidos.',
  thumbnail: '/assets/images/projects/project5/thumbnail.png',
  date: 'Abril - Junio 2025',
  dateRaw: '2025-05-06',
  tools: ['Figma', 'React Native Expo', 'Firebase'],

  repositories: {
    mobile: {
      url: 'https://github.com/AldG99/team-sports-training-app',
      label: 'Versión móvil (React Native)',
      icon: '📱',
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
      paperWireframesImage: [
        '/assets/images/projects/project5/paper/paper1.png',
        '/assets/images/projects/project5/paper/paper2.png',
        '/assets/images/projects/project5/paper/paper3.png',
        '/assets/images/projects/project5/paper/paper4.png',
      ],
    },
    digitalWireframes: {
      digitalWireframesImage: '/assets/images/projects/project5/wireframes.png',
      sizeVariationsImage: ['/assets/images/projects/project5/digital.png'],
      deviceVariationsImage: [
        '/assets/images/projects/project5/variations.png',
      ],
    },
  },

  prototyping: {
    lowFidelity: {
      description:
        'Los wireframes de SportCampus son un prototipo de baja fidelidad detallado que define la estructura y experiencia de usuario de la plataforma. Incluyen flujos de navegación, componentes, comportamientos responsivos y aspectos funcionales clave. Sirven como base técnica para el desarrollo, reduciendo riesgos al validar decisiones importantes desde etapas tempranas.',
      prototypeImage: '/assets/images/projects/project5/prototype.png',
      prototypeUrl:
        'https://www.figma.com/proto/EIoAaj7YwhbKmOFqTcRNuf/SportCampus?page-id=0%3A1&node-id=1-1697&p=f&viewport=479%2C390%2C0.1&t=GGsTDt2SaPL0ePCU-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A1697',
    },
  },

  usabilityStudy: {
    parameters: {
      type: 'Estudio de usabilidad sin moderación',
      location: 'Remoto',
      participants: '2 Entrenadores (25-45 años) y 8 Estudiantes (18-25 años)',
      time: '15-20 minutos por participante',
    },
    keyFindings: [
      {
        area: 'Navegación General',
        finding:
          'La navegación por pestañas es intuitiva para la mayoría de usuarios',
        quotes: [
          'E01: "La navegación me gusta, pero cuando tengo que administrar más de 2 equipos se vuelve confusa. Ocupa demasiado espacio en pantalla y tengo que hacer mucho desplazamiento para ver todos mis equipos."',
          'E02: "Me encanta que pueda ver todos mis equipos desde la pantalla principal. Todo está donde lo esperaba."',
        ],
      },
      {
        area: 'Visualización de Estadísticas',
        finding:
          'Los gráficos son atractivos pero algunos usuarios necesitan más contexto',
        quotes: [
          'P04: "Ver mi progreso en gráficos me motiva mucho. Puedo ver claramente cómo he mejorado en remates."',
        ],
      },
      {
        area: 'Visualización de Torneos',
        finding:
          'La visualización es muy valorada por todos los tipos de usuario, pero falta información específica',
        quotes: [
          'P01: "Me gusta poder ver cuándo juega mi equipo y contra quién. La información está muy organizada."',
          'P06: "Puedo ver los detalles del torneo, pero ¿cómo voy a saber cuánto va a durar el torneo completo? Necesito planificar los entrenamientos y no veo las fechas de inicio y fin claramente."',
        ],
      },
    ],
    refiningDesign: [
      {
        mockups:
          'En el módulo del entrenador, los botones para cambiar el equipo actualmente se organizan de forma vertical. El diseño podría optimizar mejor el espacio disponible en pantalla y mejorar la experiencia del usuario al reorganizar estos elementos de manera más eficiente.',
        mockupsImage: '/assets/images/projects/project5/mockups/mockups1.png',
        designDecisions: [
          'Reorganizar los botones de cambio de equipo de vertical a horizontal para maximizar el aprovechamiento del espacio en pantalla',
          'Implementar un diseño más compacto que permita una navegación más fluida entre las opciones del entrenador',
        ],
      },
      {
        mockups:
          'En la sección de detalles del torneo actualmente falta información temporal clara sobre la duración del evento. El diseño podría mejorar la transparencia y planificación al mostrar de manera prominente las fechas programadas por los administradores.',
        mockupsImage: '/assets/images/projects/project5/mockups/mockups2.png',
        designDecisions: [
          'Agregar un campo visible con las fechas de duración del torneo que los administradores han programado',
        ],
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
      viewPrototypes: [
        'https://www.figma.com/proto/EIoAaj7YwhbKmOFqTcRNuf/SportCampus?page-id=4%3A16&node-id=9-1849&p=f&viewport=479%2C417%2C0.06&t=mkFB5H99xp4xtpL4-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=9%3A1849',
        'https://www.figma.com/proto/EIoAaj7YwhbKmOFqTcRNuf/SportCampus?page-id=1%3A3847&node-id=1-7598&p=f&viewport=479%2C395%2C0.1&t=Hqg0cXGAsEdSlbCG-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A7598',
      ],
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
