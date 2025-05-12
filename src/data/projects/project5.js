// Proyecto 5: MediNote - App de documentación médica
const project5 = {
  id: 5,
  title: 'MediNote',
  shortDescription:
    'Aplicación móvil que permite a médicos y enfermeras documentar, almacenar y consultar registros de pacientes en consultorios de atención primaria de forma segura y eficiente.',
  description:
    'MediNote es una aplicación móvil diseñada para optimizar la documentación clínica en consultorios de atención primaria. Permite a médicos y enfermeras crear, editar y consultar historias clínicas de forma rápida y segura, integrando texto, imágenes, notas de voz y plantillas personalizables. El sistema prioriza la seguridad de datos sensibles y la usabilidad en entornos clínicos dinámicos.',
  thumbnail: '/assets/images/projects/project2/thumbnail.jpg',
  images: [
    '/assets/images/projects/project2/detail1.jpg',
    '/assets/images/projects/project2/detail2.jpg',
    '/assets/images/projects/project2/desktop1.jpg',
    '/assets/images/projects/project2/desktop2.jpg',
    '/assets/images/projects/project2/mobile1.jpg',
    '/assets/images/projects/project5/patient_list.jpg',
    '/assets/images/projects/project5/consultation_form.jpg',
    '/assets/images/projects/project5/medical_record.jpg',
    '/assets/images/projects/project5/tablet_view.jpg',
    '/assets/images/projects/project5/offline_mode.jpg',
    '/assets/images/projects/project5/wireframe1.jpg',
    '/assets/images/projects/project5/wireframe2.jpg',
    '/assets/images/projects/project5/prototype1.jpg',
    '/assets/images/projects/project5/user_testing.jpg',
    '/assets/images/projects/project5/design_system.jpg',
  ],
  date: 'Febrero - Mayo 2025',
  dateRaw: '2025-05-06', // Formato para ordenar cronológicamente
  tools: ['Figma', 'React Native', 'Firebase', 'SCSS', 'Node.js', 'Express'],
  teamRole: 'UX Lead & UI Designer',

  // Sección de función en el equipo
  teamFunction:
    'Como UX Lead y UI Designer, fui responsable de dirigir todo el proceso de diseño centrado en el usuario. Mi función incluyó:',
  teamResponsibilities: [
    'Planificación y conducción de investigación contextual en consultorios médicos',
    'Facilitación de entrevistas y sesiones de observación con profesionales médicos',
    'Definición de arquitectura de información y flujos de trabajo clínicos',
    'Creación de wireframes, prototipos y especificaciones de diseño',
    'Desarrollo del sistema de diseño adaptado a entornos médicos',
    'Colaboración con desarrolladores para asegurar implementación fiel',
    'Conducción de pruebas de usabilidad en entornos simulados y reales',
    'Coordinación con especialistas en seguridad y privacidad médica',
    'Iteración del diseño basada en métricas de uso y feedback cualitativo',
  ],

  objective:
    'Diseñar una aplicación móvil que agilice y optimice la documentación clínica en consultorios de atención primaria, reduciendo el tiempo dedicado a tareas administrativas, minimizando errores, y asegurando el cumplimiento de estándares de privacidad y seguridad.',

  // Sección de objetivo del producto expandida
  productObjective: {
    main: 'Diseñar una aplicación móvil que agilice y optimice la documentación clínica en consultorios de atención primaria, reduciendo el tiempo dedicado a tareas administrativas, minimizando errores, y asegurando el cumplimiento de estándares de privacidad y seguridad.',
    businessGoals: [
      'Reducir en 40% el tiempo dedicado a documentación clínica',
      'Mejorar en 30% la completitud de registros médicos',
      'Minimizar errores de documentación que puedan afectar la calidad asistencial',
      'Garantizar cumplimiento de regulaciones de privacidad y seguridad médica',
      'Aumentar tiempo efectivo de interacción médico-paciente en consulta',
    ],
    userGoals: [
      'Para médicos: Documentar consultas de forma rápida y precisa sin interferir con la atención al paciente',
      'Para enfermeras: Registrar procedimientos, signos vitales y seguimientos de forma estructurada',
      'Para ambos: Acceder rápidamente a historiales completos, incluso en condiciones de conectividad limitada',
      'Para pacientes indirectamente: Recibir atención más personalizada gracias a mejor acceso a su historial',
    ],
  },

  research:
    'Se realizaron observaciones contextuales en 5 consultorios, entrevistas a 12 médicos y 8 enfermeras, y análisis de flujos de trabajo con papel. Se identificaron ineficiencias, riesgos de error y oportunidades de mejora en el proceso de documentación clínica.',

  // Sección de investigación expandida
  detailedResearch: {
    methods: [
      'Observación contextual en 5 consultorios de atención primaria durante jornadas completas',
      'Entrevistas en profundidad con 12 médicos y 8 enfermeras de diferentes perfiles',
      'Mapeo de procesos de documentación actuales (papel y digital)',
      'Análisis de tiempos y movimientos en tareas de documentación',
      'Evaluación de sistemas existentes y sus limitaciones',
      'Revisión de estándares de documentación clínica y requisitos regulatorios',
    ],
    keyInsights: [
      'Los profesionales dedicaban entre 35-40% de su tiempo a tareas de documentación',
      'Las interrupciones constantes generaban documentación incompleta o con errores',
      'La búsqueda de información relevante en historiales podía tomar hasta 5 minutos por paciente',
      'El uso de documentación física generaba problemas de disponibilidad y duplicación',
      'Los sistemas digitales existentes estaban diseñados para hospitales, no para el ritmo de consultorios',
      'La introducción de datos en consulta competía con la atención al paciente',
      'Las plantillas genéricas no se adaptaban a diferentes tipos de consulta y especialidades',
    ],
    personas: [
      {
        name: 'Dra. Patricia, 42 años',
        role: 'Médica de familia en consultorio urbano',
        goals:
          'Atender eficientemente a 25-30 pacientes diarios, mantener registros precisos, minimizar trabajo administrativo',
        painPoints:
          'Tiempo insuficiente para documentación, sistemas complejos, dificultad para seguimientos',
      },
      {
        name: 'Carlos, 35 años',
        role: 'Enfermero en atención primaria',
        goals:
          'Documentar procedimientos y seguimientos, acceder rápidamente a historiales, coordinar con médicos',
        painPoints:
          'Sistemas desconectados, interfaces complejas, duplicación de entrada de datos',
      },
      {
        name: 'Dra. Isabel, 58 años',
        role: 'Médica con consultorio particular',
        goals:
          'Ofrecer atención personalizada, mantener registros completos, asegurar continuidad asistencial',
        painPoints:
          'Baja adaptabilidad tecnológica, preocupación por privacidad, resistencia al cambio',
      },
    ],
  },

  users:
    'Médicos de atención primaria (30-65 años) y personal de enfermería (25-60 años) con distintos niveles de confort tecnológico, trabajando en entornos de ritmo acelerado con tiempo limitado para tareas administrativas.',

  // Sección de usuarios expandida
  detailedUsers: {
    primaryUsers: [
      {
        segment: 'Médicos de atención primaria (30-65 años)',
        needs:
          'Documentación rápida, acceso instantáneo a historiales, plantillas personalizables, dictado por voz',
        behaviors:
          'Consultas de 10-15 minutos, multitarea constante, preferencia por eficiencia sobre diseño',
      },
      {
        segment: 'Personal de enfermería (25-60 años)',
        needs:
          'Protocolos estructurados, formularios específicos, comunicación con médicos, seguimiento de casos',
        behaviors:
          'Distribución de tareas durante la jornada, documentación más detallada, mayor continuidad',
      },
      {
        segment: 'Administrativos médicos (30-55 años)',
        needs:
          'Programación, informes básicos, acceso limitado a datos según permisos',
        behaviors:
          'Gestión simultánea de múltiples tareas, enfoque en eficiencia organizativa',
      },
    ],
    userJourney: [
      {
        stage: 'Preparación de consulta',
        touchpoints:
          'Revisión de agenda, consulta rápida de historiales previos',
        emotions: 'Presión temporal, necesidad de contexto rápido',
        opportunities:
          'Resúmenes inteligentes, acceso predictivo a información relevante',
      },
      {
        stage: 'Durante la consulta',
        touchpoints:
          'Documentación en tiempo real, consulta de información específica',
        emotions:
          'División de atención, presión por mantener contacto con paciente',
        opportunities:
          'Entrada de datos simplificada, detección de patrones, asistencia contextual',
      },
      {
        stage: 'Finalización y seguimiento',
        touchpoints:
          'Completar registros, prescripciones, programar seguimientos',
        emotions:
          'Presión para completar antes de siguiente paciente, preocupación por precisión',
        opportunities:
          'Automatización de datos repetitivos, validación inteligente, continuidad asistencial',
      },
      {
        stage: 'Análisis retrospectivo',
        touchpoints:
          'Revisión de casos, búsqueda de patrones, preparación de informes',
        emotions: 'Analítico, reflexivo, orientado a mejora',
        opportunities:
          'Visualizaciones significativas, búsqueda avanzada, detección de tendencias',
      },
    ],
  },

  designArchitecture:
    'La aplicación se estructuró en módulos principales: expedientes de pacientes, registro de consultas, biblioteca de plantillas, búsqueda avanzada, historial médico, y administración. La navegación priorizó el acceso rápido a funciones frecuentes y la eficiencia en situaciones de presión temporal.',

  // Sección de arquitectura de diseño expandida
  architectureDetails: {
    informationArchitecture: [
      {
        section: 'Gestión de pacientes',
        components: [
          'Lista de pacientes con búsqueda instantánea y filtros inteligentes',
          'Perfiles completos con datos demográficos y médicos esenciales',
          'Indicadores visuales de estado, alertas y prioridades',
          'Sistema de etiquetado personalizable para organización',
        ],
      },
      {
        section: 'Documentación clínica',
        components: [
          'Plantillas personalizables por tipo de consulta y especialidad',
          'Sistema de entrada mixto (texto, voz, selección, dibujo)',
          'Captura de imágenes médicas con anotaciones',
          'Validación inteligente de datos para prevenir errores',
        ],
      },
      {
        section: 'Historia clínica',
        components: [
          'Visualización cronológica de eventos médicos',
          'Agrupación temática de información relacionada',
          'Sistema de búsqueda avanzada con filtros clínicos',
          'Visualización de tendencias en valores y métricas',
        ],
      },
      {
        section: 'Funcionalidades complementarias',
        components: [
          'Sistema de comunicación segura entre profesionales',
          'Gestión de prescripciones y referencias',
          'Calendario integrado para seguimientos',
          'Biblioteca de recursos médicos de referencia',
        ],
      },
    ],
    userFlows: [
      'Inicio de sesión seguro con autenticación biométrica',
      'Revisión rápida de agenda diaria y preparación',
      'Selección de paciente y consulta de historia previa',
      'Registro de consulta actual con plantillas contextuales',
      'Documentación de diagnósticos, tratamientos y planes',
      'Sincronización automática y trabajo offline',
      'Generación de documentos para pacientes',
      'Análisis de cohortes y tendencias clínicas',
    ],
  },

  wireframes:
    'Se desarrollaron wireframes para los principales flujos: registro de consulta, búsqueda de pacientes, documentación de hallazgos, prescripción de medicamentos, y revisión de historiales. Se iteró con profesionales médicos para validar estructura y nomenclatura.',

  // Sección de wireframes expandida
  wireframesDetails: {
    process:
      'Comenzamos con sketches rápidos en papel durante sesiones colaborativas con médicos y enfermeras, evolucionando hacia wireframes digitales de media fidelidad que permitieron validar estructura, navegación y terminología antes de invertir en detalles visuales.',
    keyScreens: [
      {
        name: 'Lista de pacientes',
        purpose:
          'Punto de entrada principal con acceso rápido a la información relevante',
        elements:
          'Búsqueda predictiva, filtros contextuales, indicadores de estado, acciones rápidas',
        iterations:
          'Cuatro iteraciones para optimizar densidad informativa y velocidad de acceso',
      },
      {
        name: 'Formulario de consulta',
        purpose:
          'Documentación estructurada pero flexible del encuentro clínico',
        elements:
          'Plantillas adaptativas, entrada multimodal, sugerencias contextuales, validación en tiempo real',
        iterations:
          'Múltiples iteraciones para balancear completitud con eficiencia',
      },
      {
        name: 'Vista de historia clínica',
        purpose: 'Visualización integral del historial del paciente',
        elements:
          'Línea temporal, agrupación temática, filtros clínicos, visualización de tendencias',
        iterations:
          'Refinamiento continuo basado en patrones de consulta observados',
      },
      {
        name: 'Sistema de búsqueda',
        purpose:
          'Localización rápida de información específica en historiales extensos',
        elements:
          'Búsqueda por tipo de evento, fechas, términos médicos, resultados contextualizados',
        iterations: 'Optimización progresiva basada en casos de uso reales',
      },
    ],
  },

  userTesting:
    'Se realizaron pruebas de usabilidad con 8 médicos y 6 enfermeras utilizando prototipos en entornos simulados de consulta, identificando y solucionando problemas relacionados con interrupción de flujos, entrada de datos clínicos complejos y acceso rápido a información crítica.',

  // Sección de pruebas con usuarios expandida
  userTestingDetails: {
    methodology: [
      {
        phase: 'Validación de conceptos',
        participants: '5 médicos y 3 enfermeras de diferentes perfiles',
        format: 'Revisión de wireframes y discusión estructurada',
        goals:
          'Validar enfoque general, terminología y estructura de información',
        insights:
          'Necesidad de adaptar estructura a diferentes estilos de práctica clínica, mayor énfasis en entrada rápida',
      },
      {
        phase: 'Pruebas de usabilidad formativas',
        participants: '8 profesionales médicos',
        format:
          'Tareas guiadas con prototipos interactivos, escenarios simulados',
        goals: 'Evaluar eficacia y eficiencia de flujos principales',
        insights:
          'Identificación de obstáculos en navegación profunda, confusión en terminología especializada',
      },
      {
        phase: 'Pruebas contextuales',
        participants: '4 médicos en consultorios reales',
        format:
          'Uso de prototipo funcional en situaciones controladas con pacientes simulados',
        goals:
          'Evaluar usabilidad en contexto real con presiones temporales auténticas',
        insights:
          'Necesidad de optimizar para interrupciones, mayor énfasis en recuperación de estado',
      },
      {
        phase: 'Prueba piloto',
        participants: '2 consultorios completos durante 2 semanas',
        format:
          'Implementación controlada en entorno real con soporte constante',
        goals:
          'Validar valor en uso prolongado y detectar problemas emergentes',
        insights:
          'Identificación de patrones de uso no anticipados, optimización de funciones frecuentes',
      },
    ],
    keyMetrics: [
      'Tiempo de documentación: reducción del 42% vs. métodos anteriores',
      'Tasa de completitud de registros clínicos: mejora del 35%',
      'Precisión en entrada de datos: reducción de inconsistencias del 65%',
      'Satisfacción de usuario (CSUQ): 4.8/5.0 tras iteraciones finales',
      'Tiempo para localizar información crítica: reducción del 78%',
    ],
  },

  prototypes:
    'Se crearon prototipos de alta fidelidad que simulaban condiciones reales de uso, incluyendo escenarios de conectividad intermitente, consultas con premura de tiempo, y necesidad de documentación multimedio (texto, imágenes, audio).',

  // Sección de prototipos expandida
  prototypesDetails: {
    evolutionProcess:
      'Desarrollamos prototipos de fidelidad creciente, comenzando con navegacionales básicos hasta llegar a simulaciones altamente realistas que incorporaban datos médicos representativos y condiciones auténticas de uso clínico.',
    types: [
      {
        type: 'Prototipo navegacional Figma',
        coverage:
          'Flujos completos para todos los escenarios principales de uso',
        fidelity:
          'Alta fidelidad visual con interactividad avanzada simulando respuestas del sistema',
        testing:
          'Utilizado para evaluación inicial de navegación y comprensión de conceptos',
      },
      {
        type: 'Prototipo funcional React Native',
        coverage:
          'Funcionalidad core: documentación de consultas, búsqueda, historia clínica',
        fidelity: 'App nativa con backend simulado y datos médicos realistas',
        testing:
          'Implementado en tablets y smartphones para pruebas en entorno simulado de consulta',
      },
      {
        type: 'Prototipo de prueba de campo',
        coverage:
          'Sistema completo con sincronización, modo offline y seguridad implementada',
        fidelity:
          'Versión preliminar completamente funcional con datos anonimizados',
        testing:
          'Desplegado en consultorios seleccionados para validación extendida',
      },
    ],
    iterationExamples: [
      'Rediseño completo del sistema de plantillas para mayor flexibilidad clínica',
      'Implementación de entrada contextual que redujo clics necesarios en un 60%',
      'Desarrollo de sistema de recuperación rápida para manejo de interrupciones',
      'Optimización de rendimiento en dispositivos de gama media para mayor accesibilidad',
      'Creación de modo nocturno especial para uso en guardias y entornos de baja iluminación',
    ],
  },

  finalDesigns:
    'Diseño minimalista optimizado para uso en contextos clínicos, con contraste adecuado para diversas condiciones de iluminación, tamaños de toque amplios para uso con una sola mano, y atajos contextuales para acelerar tareas frecuentes.',

  // Sección de diseños finales expandida
  finalDesignsDetails: {
    visualStyle: {
      colors:
        'Paleta principal en tonos azules con acentos estratégicos para indicar prioridad y estado, optimizada para legibilidad en diversas condiciones de iluminación',
      typography:
        'Sistema jerárquico con SF Pro y pesos variables, optimizado para legibilidad en pantallas pequeñas y lectura rápida',
      iconography:
        'Sistema personalizado con alto contraste y reconocimiento instantáneo, validado con profesionales médicos',
      spacing:
        'Diseño espacioso con áreas de toque amplias optimizadas para uso con una mano en movimiento',
    },
    components: [
      {
        name: 'Tarjetas de paciente',
        variations: 'Completa, compacta, urgente, seguimiento',
        considerations:
          'Priorización visual de información crítica, acceso directo a acciones frecuentes',
      },
      {
        name: 'Formularios médicos',
        variations: 'General, especialidad, seguimiento, procedimiento',
        considerations:
          'Balance entre estructura y flexibilidad, adaptabilidad a diferentes flujos de trabajo',
      },
      {
        name: 'Visualizaciones clínicas',
        variations:
          'Tendencias temporales, comparativas, valores anormales, patrones',
        considerations:
          'Interpretabilidad inmediata, contextualización con rangos normales, accesibilidad',
      },
      {
        name: 'Controles de entrada',
        variations: 'Texto rápido, dictado, selección, numérico, dibujo',
        considerations:
          'Optimización para entrada eficiente en contexto clínico con interrupciones',
      },
    ],
    responsiveApproach:
      'Diseño adaptativo priorizando smartphone vertical para uso móvil durante rondas, tablet horizontal para documentación detallada, y escritorio para análisis retrospectivo',
    accessibilityConsiderations:
      'Conformidad WCAG 2.1 AA+, modo de alto contraste para condiciones variables de iluminación, soporte para magnificación de texto, navegación completa por teclado para uso en estaciones fijas',
  },

  results:
    'Las pruebas piloto mostraron una reducción del 40% en tiempo dedicado a documentación, mejora del 35% en completitud de registros clínicos, y satisfacción de usuario de 4.8/5 entre profesionales médicos.',

  // Sección de resultados y conclusiones expandida
  resultsAndConclusions: {
    businessImpact: [
      'Reducción del 40% en tiempo dedicado a documentación clínica',
      'Mejora del 35% en completitud de registros médicos',
      'Aumento del 27% en tiempo efectivo de consulta con pacientes',
      'Reducción de 65% en errores de documentación con potencial impacto clínico',
      'Mejora de 30% en continuidad asistencial entre diferentes profesionales',
      'ROI estimado de 320% en primer año por aumento de productividad',
    ],
    userImpact: [
      'Satisfacción de usuario de 4.8/5 entre profesionales médicos',
      'Adopción voluntaria por personal inicialmente reticente (86%)',
      'Reducción de estrés reportado asociado a tareas administrativas',
      'Mejora en percepción de calidad asistencial por parte de pacientes',
      'Mayor colaboración entre profesionales gracias a mejor acceso a información',
    ],
    keyLearnings: [
      'La eficiencia en contexto clínico depende más de adaptabilidad que de funcionalidad exhaustiva',
      'La validación con usuarios reales en entornos auténticos reveló necesidades imposibles de anticipar',
      'Las soluciones para manejo de interrupciones resultaron tan importantes como las funcionalidades principales',
      'El equilibrio entre estandarización y personalización fue clave para adopción exitosa',
      'La privacidad y seguridad deben ser integradas desde el inicio, no como capa adicional',
    ],
    futureOpportunities: [
      'Integración con sistemas de historial clínico electrónico más amplios',
      'Implementación de asistentes basados en IA para documentación y apoyo diagnóstico',
      'Expansión a comunicación segura con pacientes y seguimiento remoto',
      'Desarrollo de módulos específicos para especialidades médicas',
      'Analítica avanzada para identificación de patrones poblacionales y apoyo a investigación',
    ],
  },

  conclusion:
    'MediNote demuestra que el diseño centrado en el usuario, cuando se aplica a flujos de trabajo clínicos, puede transformar significativamente la eficiencia y calidad de la atención médica al liberar tiempo para la interacción con pacientes.',
  impact:
    'La aplicación ha sido adoptada por 15 consultorios que reportan mejoras en satisfacción de pacientes debido a mayor tiempo de consulta efectiva y reducción de errores en documentación clínica y prescripciones.',
  learnings:
    'La importancia de adaptar interfaces a contextos de uso específicos, el balance entre funcionalidad completa y simplicidad, y la necesidad de diseñar considerando interrupciones frecuentes en flujos de trabajo clínicos.',
  url: 'https://medinote-app.ejemplo.com',
  featured: true,

  // Campos específicos para app médica
  medicalDocumentation: {
    securityCompliance:
      'Cumplimiento con HIPAA y regulaciones locales de privacidad médica, cifrado de extremo a extremo, controles de acceso basados en roles',
    clinicalTemplates:
      'Plantillas personalizables para diferentes tipos de consulta y especialidades, textos predictivos para diagnósticos comunes',
    offlineCapabilities:
      'Funcionamiento completo sin conexión, sincronización automática al reconectar, resolución de conflictos de edición',
    patientManagement:
      'Perfiles completos de pacientes, historial médico cronológico, seguimiento de medicamentos, alertas de interacciones',
    accessibilityFeatures:
      'Modo oscuro para uso nocturno, ajustes de tamaño de texto, dictado por voz, scanning de documentos físicos',
  },

  // Análisis competitivo específico
  competitors: [
    {
      name: 'MedRecPro',
      description:
        'Sistema completo de historias clínicas electrónicas orientado a grandes hospitales. Robusto pero con excesiva complejidad para consultorios pequeños.',
    },
    {
      name: 'DocNotes',
      description:
        'Aplicación simple para notas médicas con enfoque en la velocidad de documentación. Limitada en funcionalidades de seguimiento y análisis.',
    },
    {
      name: 'ClinicCloud',
      description:
        'Plataforma integral para gestión de consultorios con módulo de documentación incluido. Su fortaleza era la integración con facturación y citas.',
    },
  ],

  // Metas específicas
  goals: [
    'Digitalizar el proceso de documentación médica de manera intuitiva y eficiente',
    'Agilizar la consulta de historiales médicos con búsqueda avanzada',
    'Garantizar la privacidad y seguridad de datos sensibles de pacientes',
    'Optimizar flujos de trabajo para médicos y enfermeras en entornos de alta presión',
    'Facilitar la continuidad de la atención médica con información actualizada y accesible',
  ],

  // Hallazgos de investigación
  researchFindings: [
    'El tiempo promedio para documentar una consulta era excesivo con los métodos actuales',
    'La búsqueda rápida en historiales era la función más solicitada por los médicos',
    'La capacidad de adjuntar fotos o grabaciones de voz ahorraba tiempo significativo',
    'La integración con sistemas de laboratorio y farmacia era considerada esencial',
  ],

  // Lecciones aprendidas
  professionalLessons: [
    'El diseño para contextos médicos requiere priorizar la eficiencia incluso sobre la estética',
    'Los sistemas de documentación deben adaptarse a diferentes estilos de práctica clínica',
    'La confiabilidad y disponibilidad constante son cruciales en aplicaciones de uso clínico',
    'La terminología y organización debe reflejar los modelos mentales de los profesionales médicos',
  ],

  personalLessons: [
    'Aprendí la importancia de observar el contexto real de uso antes de comenzar a diseñar',
    'Desarrollé mayor apreciación por las necesidades específicas de usuarios profesionales',
    'Mejoré mi capacidad para balancear requisitos regulatorios estrictos con experiencia de usuario fluida',
  ],

  // Consideraciones finales
  finalConsiderations:
    'MediNote ilustra cómo el diseño centrado en el usuario puede transformar procesos críticos en entornos sanitarios. El proyecto demuestra que incluso en campos altamente regulados y con flujos de trabajo complejos, una aplicación bien diseñada puede mejorar significativamente la eficiencia, satisfacción y resultados. La clave fue entender profundamente el contexto clínico y adaptar cada aspecto de la interfaz a las realidades y presiones únicas de la atención médica primaria.',
};

export default project5;
