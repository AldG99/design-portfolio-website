// Proyecto 3: Plataforma de Mentoría Cognitiva
const project3 = {
  id: 3,
  title: 'Educación',
  shortDescription:
    'Plataforma web que conecta mentores con estudiantes para sesiones de mentoría cognitiva personalizada, facilitando aprendizaje colaborativo y seguimiento de progreso.',
  description:
    'Educación es una plataforma web innovadora que facilita conexiones significativas entre mentores experimentados y estudiantes, a través de un sistema inteligente de emparejamiento y herramientas colaborativas diseñadas específicamente para optimizar el proceso de mentoría cognitiva. La plataforma integra videoconferencias, documentos compartidos, seguimiento de objetivos y análisis de progreso.',
  thumbnail: '/assets/images/projects/project3/thumbnail.jpg',
  images: [
    '/assets/images/projects/project3/detail1.jpg',
    '/assets/images/projects/project3/detail2.jpg',
    '/assets/images/projects/project3/mobile1.jpg',
    '/assets/images/projects/project3/mobile2.jpg',
    '/assets/images/projects/project3/mobile3.jpg',
    '/assets/images/projects/project3/web1.jpg',
    '/assets/images/projects/project3/web2.jpg',
    '/assets/images/projects/project3/web_dashboard.jpg',
    '/assets/images/projects/project3/wireframe1.jpg',
    '/assets/images/projects/project3/wireframe2.jpg',
    '/assets/images/projects/project3/prototype1.jpg',
    '/assets/images/projects/project3/user_testing.jpg',
  ],
  date: 'Julio - Octubre 2024',
  dateRaw: '2024-10-24', // Formato para ordenar cronológicamente
  tools: ['Figma', 'React', 'Firebase', 'SCSS', 'WebRTC', 'Node.js'],
  teamRole: 'UX/UI Designer & Product Manager',

  // Sección de función en el equipo
  teamFunction:
    'Como UX/UI Designer y Product Manager, fui responsable de liderar el proceso de diseño desde la investigación inicial hasta la implementación, colaborando estrechamente con desarrolladores backend y frontend. Mis responsabilidades incluyeron:',
  teamResponsibilities: [
    'Planificación y conducción de la investigación de usuarios',
    'Definición de la arquitectura de información y flujos de usuario',
    'Creación de wireframes, prototipos y especificaciones de diseño',
    'Facilitación de sesiones de testing con usuarios',
    'Priorización del backlog de producto y gestión de sprints',
    'Colaboración directa con stakeholders para alinear visión y objetivos',
    'Supervisión del desarrollo para asegurar fidelidad de implementación',
  ],

  objective:
    'Desarrollar una plataforma que democratice el acceso a mentoría de calidad, optimizando el emparejamiento mentor-estudiante mediante algoritmos de compatibilidad y proporcionando herramientas específicas para facilitar sesiones efectivas y seguimiento de progreso.',

  // Sección de objetivo del producto expandida
  productObjective: {
    main: 'Desarrollar una plataforma que democratice el acceso a mentoría de calidad, optimizando el emparejamiento mentor-estudiante mediante algoritmos de compatibilidad y proporcionando herramientas específicas para facilitar sesiones efectivas y seguimiento de progreso.',
    businessGoals: [
      'Crear un modelo sostenible que conecte mentores y estudiantes a escala',
      'Reducir la fricción en el proceso de búsqueda y emparejamiento',
      'Aumentar la retención y compromiso de usuarios mediante mejoras en la efectividad de las sesiones',
      'Establecer métricas claras para medir el impacto del proceso de mentoría',
    ],
    userGoals: [
      'Para estudiantes: Encontrar mentores cualificados que se ajusten a sus necesidades específicas y estilo de aprendizaje',
      'Para mentores: Optimizar su tiempo e impacto, con herramientas que faciliten la estructuración y seguimiento de las sesiones',
      'Para ambos: Establecer relaciones de mentoría efectivas y medibles, con clara visualización de progreso',
    ],
  },

  research:
    'Se realizaron entrevistas con mentores profesionales, estudiantes de diversos campos, y expertos en aprendizaje, complementadas con análisis de plataformas existentes de mentoría y educación online para identificar brechas y oportunidades.',

  // Sección de investigación expandida
  detailedResearch: {
    methods: [
      'Entrevistas en profundidad con 15 mentores profesionales de diversas disciplinas',
      'Grupos focales con 3 cohortes de estudiantes universitarios y profesionales en desarrollo',
      'Encuestas online a 250+ potenciales usuarios sobre necesidades de mentoría',
      'Análisis competitivo de 8 plataformas existentes de mentoría y educación',
      'Revisión de literatura académica sobre efectividad en relaciones de mentoría',
      'Shadow sessions de 5 relaciones mentor-estudiante establecidas',
    ],
    keyInsights: [
      'El 78% de los estudiantes reportó dificultades para encontrar mentores adecuados a sus necesidades específicas',
      'Los mentores dedicaban promedio 40% de su tiempo a tareas administrativas vs. mentoría efectiva',
      'La falta de estructura y seguimiento era la causa principal de abandono en relaciones de mentoría',
      'Las plataformas existentes se enfocaban en el emparejamiento inicial pero ofrecían poco soporte para el proceso continuo',
      'La compatibilidad de horarios y estilos de comunicación resultaron factores críticos para el éxito',
    ],
    personas: [
      {
        name: 'Carlos, 28 años',
        role: 'Desarrollador buscando mentorías',
        goals:
          'Encontrar guía para transición a management, feedback estructurado, networking',
        painPoints:
          'Dificultad para encontrar mentores específicos, falta de tiempo, dudas sobre efectividad',
      },
      {
        name: 'Elena, 42 años',
        role: 'Mentora ejecutiva',
        goals:
          'Compartir experiencia eficientemente, seguimiento estructurado, impacto medible',
        painPoints:
          'Exceso de tareas administrativas, falta de herramientas específicas, dificultad para seguimiento',
      },
    ],
  },

  users:
    'Estudiantes universitarios y profesionales en desarrollo (21-45 años) que buscan guía especializada, y mentores experimentados (30-65 años) que desean compartir conocimientos de manera estructurada.',

  // Sección de usuarios expandida
  detailedUsers: {
    primaryUsers: [
      {
        segment: 'Estudiantes universitarios (21-25 años)',
        needs:
          'Orientación académica, desarrollo de carrera temprana, habilidades técnicas específicas',
        behaviors:
          'Usan principalmente móvil, prefieren sesiones frecuentes y cortas, valoran retroalimentación inmediata',
      },
      {
        segment: 'Profesionales en desarrollo (26-45 años)',
        needs:
          'Avance de carrera, desarrollo de liderazgo, transición a nuevos roles o industrias',
        behaviors:
          'Usan múltiples dispositivos, prefieren sesiones estructuradas, valoran conexiones de networking',
      },
      {
        segment: 'Mentores profesionales (30-65 años)',
        needs:
          'Optimización de tiempo, herramientas de seguimiento, medición de impacto',
        behaviors:
          'Prefieren desktop para sesiones importantes, valoran personalización, buscan eficiencia',
      },
    ],
    userJourney: [
      {
        stage: 'Descubrimiento',
        touchpoints:
          'Marketing digital, recomendaciones, búsqueda de soluciones de aprendizaje',
        emotions: 'Esperanza, escepticismo, curiosidad',
        opportunities:
          'Comunicar valor único, testimonios específicos, prueba gratuita',
      },
      {
        stage: 'Onboarding',
        touchpoints:
          'Registro, cuestionario de objetivos, emparejamiento inicial',
        emotions: 'Expectativa, impaciencia, incertidumbre',
        opportunities:
          'Simplificar proceso, valor inmediato, expectativas claras',
      },
      {
        stage: 'Primera interacción',
        touchpoints:
          'Videoconferencia, herramientas colaborativas, establecimiento de objetivos',
        emotions: 'Nerviosismo, evaluación, adaptación',
        opportunities: 'Templates, guías, soporte durante la sesión',
      },
      {
        stage: 'Uso continuo',
        touchpoints:
          'Sesiones recurrentes, seguimiento, herramientas de progreso',
        emotions: 'Confianza creciente, validación, compromiso',
        opportunities:
          'Recordatorios, celebración de hitos, sugerencias contextuales',
      },
    ],
  },

  designArchitecture:
    'La plataforma se estructuró en tres áreas principales: emparejamiento inteligente (con perfiles detallados y algoritmo de compatibilidad), espacio de colaboración (con herramientas síncronas y asíncronas), y sistema de seguimiento y evaluación (con métricas de progreso y feedback).',

  // Sección de arquitectura de diseño expandida
  architectureDetails: {
    informationArchitecture: [
      {
        section: 'Sistema de emparejamiento',
        components: [
          'Perfiles enriquecidos con habilidades, objetivos y preferencias',
          'Algoritmo de compatibilidad basado en múltiples factores',
          'Proceso de descubrimiento y solicitud',
          'Sistema de revisiones y recomendaciones',
        ],
      },
      {
        section: 'Espacio de colaboración',
        components: [
          'Videoconferencia integrada con grabación opcional',
          'Pizarra virtual compartida con templates',
          'Sistema de documentos colaborativos',
          'Chat persistente y compartición de recursos',
        ],
      },
      {
        section: 'Seguimiento y evaluación',
        components: [
          'Dashboard personalizado de progreso',
          'Sistema de objetivos SMART',
          'Herramientas de retroalimentación estructurada',
          'Visualización de métricas y análisis',
        ],
      },
      {
        section: 'Comunidad y recursos',
        components: [
          'Grupos temáticos por áreas',
          'Biblioteca de recursos compartidos',
          'Eventos y webinars',
          'Foros de discusión moderados',
        ],
      },
    ],
    userFlows: [
      'Registro y onboarding personalizado',
      'Búsqueda y solicitud de mentoría',
      'Configuración de sesión y objetivos',
      'Conducción de sesión virtual',
      'Seguimiento post-sesión y asignación de tareas',
      'Evaluación de progreso y ajustes',
      'Renovación o conclusión de relación de mentoría',
    ],
  },

  wireframes:
    'Se desarrollaron wireframes detallados para los flujos de registro y onboarding diferenciados para mentores y estudiantes, dashboard personalizado, espacio de sesión virtual, y sistema de seguimiento de objetivos.',

  // Sección de wireframes expandida
  wireframesDetails: {
    process:
      'Comenzamos con sketches a mano para explorar rápidamente múltiples conceptos de estructura. Tras validar direcciones generales con stakeholders, desarrollamos wireframes digitales de fidelidad media en Figma para definir la arquitectura de información y flujos clave.',
    keyScreens: [
      {
        name: 'Dashboard personalizado',
        purpose: 'Centro de control adaptado al rol (mentor o estudiante)',
        elements:
          'Próximas sesiones, objetivos activos, progreso, notificaciones',
        iterations:
          'Tres iteraciones principales para optimizar jerarquía y priorización',
      },
      {
        name: 'Espacio de sesión virtual',
        purpose: 'Entorno integrado para videoconferencia y colaboración',
        elements: 'Video, chat, pizarra, notas compartidas, timer, agenda',
        iterations:
          'Cinco iteraciones basadas en pruebas de usabilidad para equilibrar funcionalidad y simplicidad',
      },
      {
        name: 'Sistema de objetivos',
        purpose: 'Establecimiento y seguimiento de metas SMART',
        elements:
          'Creación guiada, visualización de progreso, hitos, recordatorios',
        iterations:
          'Múltiples iteraciones para simplificar proceso sin sacrificar efectividad',
      },
      {
        name: 'Perfiles y emparejamiento',
        purpose: 'Presentación rica pero sintética de información relevante',
        elements: 'Experiencia, habilidades, disponibilidad, compatibilidad',
        iterations: 'Refinamiento continuo para mejorar relevancia de matches',
      },
    ],
  },

  userTesting:
    'Se realizaron pruebas A/B con 25 pares mentor-estudiante reales durante un mes, identificando oportunidades de mejora en la comunicación asíncrona y el establecimiento de objetivos medibles.',

  // Sección de pruebas con usuarios expandida
  userTestingDetails: {
    methodology: [
      {
        phase: 'Pruebas conceptuales',
        participants: '10 mentores y 15 estudiantes potenciales',
        format: 'Entrevistas exploratorias con sketches y wireframes',
        goals: 'Validar concepto general, identificar gaps y oportunidades',
        insights:
          'Confirmación de valor percibido, identificación de preocupaciones sobre complejidad',
      },
      {
        phase: 'Pruebas de usabilidad formativas',
        participants: '8 pares mentor-estudiante',
        format:
          'Tareas guiadas con prototipos interactivos, think-aloud protocol',
        goals:
          'Evaluar eficacia de flujos principales e identificar puntos de fricción',
        insights:
          'Simplificación necesaria en proceso de establecimiento de objetivos, confusión en navegación',
      },
      {
        phase: 'Pruebas A/B',
        participants: '25 pares mentor-estudiante divididos en grupos',
        format:
          'Uso real de la plataforma en versiones alternativas por 30 días',
        goals:
          'Comparar eficacia de diferentes enfoques para funcionalidades clave',
        insights:
          'Versión simplificada de dashboard mostró 28% más engagement, preferencia por comunicación mixta síncrona/asíncrona',
      },
      {
        phase: 'Beta testing',
        participants: '50 usuarios pioneros',
        format: 'Uso real con retroalimentación continua durante 60 días',
        goals: 'Validar producto en condiciones reales, refinamiento final',
        insights:
          'Identificación de problemas de rendimiento en videoconferencias múltiples, solicitud de funcionalidades adicionales para seguimiento',
      },
    ],
    keyMetrics: [
      'Tasa de completado de tareas: 92% tras iteraciones finales',
      'Tiempo promedio para completar tareas clave: reducción del 35%',
      'Puntuación SUS (System Usability Scale): 87/100',
      'Net Promoter Score (NPS): 72',
    ],
  },

  prototypes:
    'Se crearon prototipos interactivos de alta fidelidad en Figma para validar la experiencia del usuario, complementados con prototipos funcionales para probar la videoconferencia integrada y las herramientas colaborativas.',

  // Sección de prototipos expandida
  prototypesDetails: {
    evolutionProcess:
      'Evolucionamos desde wireframes de fidelidad media a prototipos de alta fidelidad a través de iteraciones basadas en feedback continuo. Cada fase incorporó mayor detalle visual, interactividad y contenido realista.',
    types: [
      {
        type: 'Prototipo Figma interactivo',
        coverage:
          'Flujos completos de usuario para todos los escenarios principales',
        fidelity:
          'Alta fidelidad visual e interactiva con transiciones y micro-interacciones',
        testing:
          'Usado para pruebas de usabilidad remotas y presenciales, presentaciones a stakeholders',
      },
      {
        type: 'Prototipo funcional web',
        coverage:
          'Videoconferencia integrada, pizarra colaborativa, chat en tiempo real',
        fidelity:
          'Funcionalidad real con backend simplificado, enfocado en experiencia sincrónica',
        testing:
          'Pruebas extendidas con mentores y estudiantes en sesiones reales',
      },
      {
        type: 'Prototipo móvil responsivo',
        coverage: 'Versión adaptada para smartphones y tablets',
        fidelity:
          'Alta fidelidad con adaptaciones para touch y pantallas pequeñas',
        testing: 'Pruebas de usabilidad contextuales en entornos móviles',
      },
    ],
    iterationExamples: [
      'Simplificación del proceso de establecimiento de objetivos de 8 a 3 pasos',
      'Rediseño del espacio de sesión virtual para priorizar interacción sobre funcionalidades secundarias',
      'Implementación de sistema de navegación contextual basado en rol y etapa de mentoría',
      'Optimización de experiencia móvil para consultas rápidas y notificaciones',
    ],
  },

  finalDesigns:
    'Diseño limpio y profesional con código de colores que distingue áreas funcionales, tipografía legible optimizada para lectura prolongada, y sistema responsivo que adapta la experiencia a diferentes dispositivos y contextos de uso.',

  // Sección de diseños finales expandida
  finalDesignsDetails: {
    visualStyle: {
      colors:
        'Paleta principal en azules y verdes que transmite confianza y crecimiento, con sistema de acentos para diferenciar funcionalidades',
      typography:
        'Sistema jerárquico con Inter para texto general y Poppins para encabezados, optimizado para legibilidad en múltiples dispositivos',
      iconography:
        'Sistema de iconos personalizados con estilo uniforme, enfocados en claridad y reconocimiento intuitivo',
      spacing:
        'Sistema de espaciado consistente basado en múltiplos de 8px para mantener armonía visual',
    },
    components: [
      {
        name: 'Sistema de tarjetas',
        variations: 'Perfiles, sesiones, objetivos, recursos',
        considerations:
          'Consistencia estructural con variaciones contextuales claras',
      },
      {
        name: 'Controles de navegación',
        variations: 'Principal, contextual, breadcrumbs, filtros',
        considerations:
          'Balance entre descubrimiento y eficiencia para usuarios frecuentes',
      },
      {
        name: 'Visualizaciones de datos',
        variations: 'Progreso, calendario, estadísticas, compatibilidad',
        considerations:
          'Claridad interpretativa sobre complejidad, significado sobre estética',
      },
      {
        name: 'Espacios colaborativos',
        variations: 'Video, documentos, pizarra, chat',
        considerations:
          'Integración visual coherente de múltiples herramientas sin sobrecarga',
      },
    ],
    responsiveApproach:
      'Diseño mobile-first con adaptaciones específicas para tablet y desktop, priorizando funcionalidad sobre complejidad en dispositivos pequeños',
    accessibilityConsiderations:
      'Cumplimiento WCAG 2.1 AA, contraste optimizado, soporte completo para navegación por teclado, etiquetas descriptivas para lectores de pantalla, y múltiples opciones de personalización de interfaz',
  },

  results:
    'La plataforma logró un 82% de retención de usuarios tras 3 meses, con calificaciones promedio de 4.8/5 para la calidad de las sesiones y 4.6/5 para la usabilidad de la plataforma.',

  // Sección de resultados y conclusiones expandida
  resultsAndConclusions: {
    businessImpact: [
      'Retención de usuarios del 82% tras 3 meses (vs. 45% en plataformas similares)',
      'Tiempo promedio de sesión de 47 minutos (vs. objetivo inicial de 30 minutos)',
      'NPS de 72, ubicando la plataforma en el cuartil superior de soluciones SaaS',
      'Tasa de conversión de plan gratuito a premium del 18%',
      'Reducción del 40% en costos de adquisición de usuarios gracias a recomendaciones',
    ],
    userImpact: [
      'Estudiantes reportaron mejora promedio del 35% en claridad de objetivos profesionales',
      'Mentores reportaron aumento del 28% en eficiencia de sesiones',
      'El 92% de los usuarios encontró "muy valioso" el sistema de seguimiento de objetivos',
      'Reducción del 65% en cancelaciones de sesiones gracias a recordatorios inteligentes',
      'El 88% de los usuarios consideró la experiencia "significativamente mejor" que alternativas',
    ],
    keyLearnings: [
      'La cuidadosa selección de herramientas colaborativas específicas supera a soluciones genéricas',
      'El seguimiento estructurado de progreso es tan importante como la calidad de las sesiones mismas',
      'La flexibilidad en formatos de comunicación (síncrona/asíncrona) aumenta significativamente la retención',
      'El algoritmo de compatibilidad debe equilibrar múltiples factores más allá de simple coincidencia de habilidades',
      'El diseño responsivo no solo debe adaptar layout sino priorizar funcionalidades según contexto de uso',
    ],
    futureOpportunities: [
      'Expansión a mentorías grupales y comunidades de práctica',
      'Integración con plataformas educativas y de desarrollo profesional',
      'Implementación de recomendaciones personalizadas basadas en machine learning',
      'Desarrollo de herramientas específicas para industrias particulares',
      'Expansión a nuevos mercados internacionales con adaptaciones culturales',
    ],
  },

  conclusion:
    'El proyecto demostró que el factor diferenciador en plataformas de mentoría no es solo la conexión entre personas, sino las herramientas específicas que facilitan un proceso estructurado y medible.',
  impact:
    'La plataforma ha facilitado más de 5,000 relaciones de mentoría efectivas, con reportes consistentes de impacto positivo en desarrollo profesional, claridad de objetivos y bienestar general de los usuarios.',
  learnings:
    'La importancia de diseñar considerando ambos lados de la relación mentor-estudiante, equilibrando estructura y flexibilidad, y cómo la tecnología puede potenciar pero nunca reemplazar la conexión humana en procesos de aprendizaje.',
  url: 'https://educacion-mentoria.ejemplo.com',
  featured: true,

  // Campos específicos para plataforma de mentoría
  mentoringSystem: {
    matchingAlgorithm:
      'Sistema de emparejamiento basado en objetivos, habilidades, experiencia y compatibilidad de horarios',
    collaborationTools:
      'Videoconferencia integrada, pizarra compartida, documentos colaborativos, chat persistente',
    trackingSystem:
      'Dashboard de progreso, establecimiento de objetivos SMART, evaluaciones periódicas, visualización de crecimiento',
    communityFeatures:
      'Grupos temáticos, recursos compartidos, eventos virtuales, reconocimientos públicos',
    accessibilityFeatures:
      'Compatible con lectores de pantalla, transcripción automática de sesiones, ajustes de contraste',
  },

  // Análisis competitivo específico
  competitors: [
    {
      name: 'MentorMatch',
      description:
        'Plataforma consolidada con enfoque corporativo y tarifas premium. Ofrecía herramientas avanzadas de analítica y seguimiento.',
    },
    {
      name: 'LearnPair',
      description:
        'Solución gratuita con modelo freemium basado en funcionalidades avanzadas. Gran comunidad de voluntarios en diversas disciplinas.',
    },
    {
      name: 'SkillShare Connect',
      description:
        'Plataforma enfocada en habilidades creativas y técnicas específicas. Su fortaleza era la integración con cursos online complementarios.',
    },
  ],

  // Metas específicas
  goals: [
    'Conectar mentores y estudiantes de forma eficiente mediante algoritmos inteligentes',
    'Facilitar sesiones de mentoría virtual efectivas con herramientas colaborativas',
    'Implementar sistemas robustos de seguimiento del progreso y logro de objetivos',
    'Crear comunidades de aprendizaje colaborativo por áreas de interés',
    'Desarrollar un sistema de recomendación personalizada para recursos complementarios',
  ],

  // Hallazgos de investigación
  researchFindings: [
    'La compatibilidad de horarios era el principal obstáculo para mantener relaciones de mentoría efectivas',
    'Los usuarios valoraban herramientas que permitieran organizar materiales y recursos compartidos',
    'La retroalimentación estructurada mejoraba significativamente los resultados',
    'Las funciones de comunidad generaban mayor compromiso con la plataforma',
  ],

  // Lecciones aprendidas
  professionalLessons: [
    'El éxito de una plataforma de mentoría depende tanto de la tecnología como de los procesos humanos que facilita',
    'La precisión en el emparejamiento inicial es crucial para la retención a largo plazo',
    'Las herramientas deben adaptarse a diferentes estilos de mentoría y aprendizaje',
    'La visualización de progreso es tan importante como el progreso mismo',
  ],

  personalLessons: [
    'Aprendí a equilibrar datos cuantitativos con insights cualitativos para tomar decisiones de diseño',
    'Desarrollé mayor sensibilidad hacia las diferentes necesidades de diversos perfiles de usuarios',
    'Mejoré mi capacidad para facilitar conversaciones productivas entre stakeholders con prioridades distintas',
  ],

  // Consideraciones finales
  finalConsiderations:
    'La Plataforma de Mentoría Cognitiva representa un enfoque innovador que va más allá de simplemente conectar personas; crea un ecosistema completo que facilita relaciones de aprendizaje significativas y medibles. El proyecto demuestra cómo el diseño centrado en el usuario, combinado con una comprensión profunda de los procesos de mentoría, puede transformar experiencias educativas y de desarrollo profesional.',
};

export default project3;
