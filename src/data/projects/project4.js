const project4 = {
  id: 4,
  title: 'MediNote',
  shortDescription:
    'Aplicación móvil y web integral diseñada para doctores y enfermeras que permite registrar pacientes, crear historiales clínicos digitales, gestionar recordatorios de citas y tratamientos por prioridad, y realizar búsquedas avanzadas en expedientes, optimizando la práctica médica en clínicas pequeñas y consultorios privados.',

  description:
    'MediNote es una aplicación móvil de gestión médica diseñada para doctores y enfermeras. Permite registrar pacientes con datos completos, crear distintos tipos de historiales clínicos, gestionar recordatorios y alertas por prioridad y fecha, y realizar búsquedas avanzadas. Cuenta con navegación intuitiva y acceso seguro para cada profesional. Está orientada a clínicas pequeñas y medianas, consultorios privados y médicos independientes que buscan digitalizar y optimizar su práctica médica.',
  thumbnail: '/assets/images/projects/project4/thumbnail.png',
  date: 'Febrero - Abril 2025',
  dateRaw: '2025-04-11',
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
    researchImage: '/assets/images/projects/project4/research.png',
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
        '/assets/images/projects/project4/competitor/competitor1.png',
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
        '/assets/images/projects/project4/competitor/competitor2.png',
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
        '/assets/images/projects/project4/competitor/competitor3.png',
      ],
    },
  ],

  userProfiles: [
    {
      problemStatement:
        'Dr. Carlos Mendoza es médico general con consultorio privado y necesita digitalizar expedientes médicos desde su teléfono porque pierde mucho tiempo buscando información en papel durante las consultas.',
      problemStatementImage:
        '/assets/images/projects/project4/persona/persona1.png',
    },
  ],

  userJourneyMap: [
    {
      userJourneyMapPersona: 'Dr. Carlos Mendoza',
      userJourneyMap:
        'Mostrar cómo el Dr. Carlos administra su consultorio médico, desde agendar citas y atender pacientes hasta llevar el control de historiales clínicos y analizar estadísticas de salud.',
      userJourneyMapImage: '/assets/images/projects/project4/map/map1.jpg',
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
      sitemapImage: '/assets/images/projects/project4/sitemap.svg',
    },
    userFlow: {
      userFlowImage: '/assets/images/projects/project4/userflow.svg',
    },
  },

  wireframing: {
    paperWireframes: {
      paperWireframesImage: [
        '/assets/images/projects/project4/paper/paper1.png',
        '/assets/images/projects/project4/paper/paper2.png',
        '/assets/images/projects/project4/paper/paper3.png',
        '/assets/images/projects/project4/paper/paper4.png',
      ],
    },
    digitalWireframes: {
      digitalWireframesImage: '/assets/images/projects/project4/wireframes.png',
      sizeVariationsImage: ['/assets/images/projects/project4/digital.png'],
      deviceVariationsImage: [
        '/assets/images/projects/project4/variations.png',
      ],
    },
  },

  prototyping: {
    lowFidelity: {
      description:
        'El prototipo de baja fidelidad de MediNote se desarrolló mediante wireframes esquemáticos que establecieron la arquitectura de información y flujos de navegación fundamentales de la aplicación. Este prototipo inicial consistió en bocetos simples en papel y diagramas de flujo que definieron la estructura de las cinco pantallas principales: inicio, gestión de pacientes, registros médicos, alertas y perfil de usuario.',
      prototypeImage: '/assets/images/projects/project4/prototype.png',
      prototypeUrl:
        'https://www.figma.com/proto/vTHlOgoKFqKtnHRFZnnrN2/MediNote?page-id=0%3A1&node-id=1-3&p=f&viewport=190%2C986%2C0.4&t=X9MKTny4oxrpNNca-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A3',
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
        area: 'Creación de Alertas',
        finding:
          'Una parte significativa de los casos se perdió durante el paso de selección de pacientes.',
        quotes: [
          'P09: "Las alertas están bien, pero ¿puedo crear mis propios tipos, como tareas?',
          'P10: "Me gusta poder revisar todo antes de guardar. Los datos médicos son muy importantes."',
        ],
      },
    ],
    refiningDesign: [
      {
        mockups:
          'Se implementó una mejora significativa en la lista de registros médicos mediante la ampliación del tamaño de la foto de perfil de los pacientes. Esta actualización incrementó las dimensiones de la imagen desde 20x20 píxeles a 36x36 píxeles, logrando una mejor visibilidad y consistencia visual dentro de la interfaz.',
        mockupsImage: '/assets/images/projects/project4/mockups/mockups1.png',
        designDecisions: [
          'Se eligió el tamaño de 36x36 píxeles para mantener paridad con el icono de registros existente, creando una jerarquía visual coherente',
          'El incremento del tamaño permite distinguir mejor los rasgos faciales y características distintivas de cada paciente',
        ],
      },
      {
        mockups:
          'Se implementó una nueva funcionalidad en el sistema de recordatorios mediante la incorporación del tipo "Tareas", diseñado específicamente para permitir que los médicos gestionen sus recordatorios de tareas personales médicas de manera independiente y organizada. Esta adición crea una clara separación entre los recordatorios relacionados directamente con pacientes y aquellos de carácter profesional-personal del médico.',
        mockupsImage: '/assets/images/projects/project4/mockups/mockups2.png',
        designDecisions: [
          'Se decidió crear una categoría completamente independiente para evitar confusión entre tareas del médico y recordatorios de pacientes',
          'Se eligió el término "Tareas" por su simplicidad y comprensión inmediata en el contexto médico',
          'Incorporación del nuevo tipo dentro de la estructura existente sin romper la lógica establecida',
          'Mayor capacidad de personalizar la experiencia según las necesidades específicas del profesional médico',
        ],
      },
      {
        mockups:
          'Se implementó una mejora en el sistema de comunicación con pacientes mediante la incorporación del correo electrónico como campo adicional en la información de contacto. Esta funcionalidad establece el email como una segunda opción de contacto cuando la comunicación telefónica directa no sea posible o efectiva, garantizando múltiples canales de comunicación.',
        mockupsImage: '/assets/images/projects/project4/mockups/mockups3.png',
        designDecisions: [
          'Se estableció el teléfono como canal primario y el email como secundario, respetando la inmediatez y personalización de la comunicación telefónica',
        ],
      },
    ],
  },

  visualDesign: {
    responsiveDesign: {
      strategy:
        'La implementación de la estrategia "móvil-first" responde a un cambio fundamental en los patrones de uso de tecnología en el sector salud. Los profesionales médicos requieren acceso inmediato y flexible a la información de pacientes, independientemente de su ubicación física, ya sea en consultorios, hospitales, o durante visitas domiciliarias.',
      keyDecisions: [
        'Dominio del Tráfico Móvil - +75% del tráfico médico viene de móviles',
        'Limitaciones de Performance y Recursos - Comenzar con restricciones móviles optimiza todo',
        'Expectativas de Usuario Modernas - Nuevas generaciones de médicos esperan experiencias móvil-first',
      ],
      screenExamples:
        'Se desarrolló variaciones de tamaño de pantalla que permite la adaptación dinámica de la interfaz médica entre dispositivos móviles y web. Esta funcionalidad garantiza una experiencia de usuario óptima en ambas plataformas, manteniendo la funcionalidad completa y la legibilidad tanto en smartphones como en navegadores de escritorio.',
      screenSizeVariationsImage: [
        '/assets/images/projects/project4/size_variation.png',
      ],
      originalScreenSize: '/assets/images/projects/project4/screen.png',
    },
    highFidelity: {
      description: [
        'Este prototipo incorporó una paleta de colores cuidadosamente seleccionada con tonos azules médicos que transmiten confianza y profesionalismo, complementada con colores semánticos para alertas, estados de error y confirmaciones que facilitan la comprensión intuitiva de la información crítica. ',
      ],
      highFidelityImage: '/assets/images/projects/project4/high_fidelity.png',
      viewPrototypes: [
        'https://www.figma.com/proto/vTHlOgoKFqKtnHRFZnnrN2/MediNote?page-id=19%3A2699&node-id=19-3431&p=f&viewport=667%2C886%2C0.1&t=iDMX78zLAayf9Fwf-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=19%3A3431',
        'https://www.figma.com/proto/vTHlOgoKFqKtnHRFZnnrN2/MediNote?page-id=1%3A1963&node-id=12-1531&p=f&viewport=879%2C2196%2C0.42&t=IUPperAV1dtilt13-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=12%3A1966',
      ],
    },
    accessibility: {
      considerations: [
        'Se estructuraron formularios médicos con una agrupación visual clara, etiquetas consistentes, espaciado generoso y señales visuales para los estados de error y éxito, utilizando colores, iconos y texto descriptivo.',
        'Se desarrolló un sistema de iconos coherente y accesible con iconografía universal, etiquetas de texto, estilo visual uniforme y formas distintivas que no dependieran únicamente del color.',
      ],
    },
  },

  conclusion: {
    summary:
      'El desarrollo de MediNote demostró la viabilidad de crear una solución móvil integral para la gestión de registros médicos que satisface las necesidades reales de profesionales de la salud en consultorios y clínicas pequeñas. La aplicación logró consolidar exitosamente múltiples flujos de trabajo médico en una interfaz unificada e intuitiva, desde la gestión de pacientes hasta el seguimiento de tratamientos. Los prototipos validaron que la digitalización de procesos médicos tradicionales puede mejorar tanto la eficiencia operativa como la calidad del cuidado al paciente.',
    impact:
      'La implementación del sistema de design tokens y componentes reutilizables estableció un nuevo estándar de consistencia visual en aplicaciones médicas móviles. El uso estratégico de color, tipografía y espaciado creó una identidad visual que transmite confianza y profesionalismo, elementos cruciales en el sector salud.',
    learnings:
      'Diseñar para profesionales médicos exige un conocimiento profundo de los flujos de trabajo clínicos, la terminología especializada y los contextos particulares en los que se utiliza la tecnología en entornos de salud. Esto implica comprender cómo se toman decisiones bajo presión, cómo se prioriza la información crítica y cómo interactúan diferentes roles dentro del equipo médico. Una interfaz efectiva no solo debe ser funcional, sino también reducir la carga cognitiva, minimizar errores y adaptarse a situaciones variables, desde consultorios hasta unidades de emergencia.',
    professionalLessons: [
      'La importancia de los estados de error y feedback se magnificó en este contexto, donde una confusión en la interfaz puede tener consecuencias graves.',
      'Interfaces que funcionan bajo presión en entornos médicos, especialmente en situaciones de emergencia, donde los profesionales no pueden detenerse a pensar en cómo usar una aplicación; esta debe ser completamente intuitiva.',
    ],
    personalLessons: [
      'La experiencia me hizo más consciente de la importancia de la accesibilidad universal en el diseño, considerando las diversas capacidades y contextos de uso de los profesionales médicos.',
      'Los requisitos médicos cambian constantemente debido a regulaciones y emergencias como COVID-19, por lo que aprendí a diseñar sistemas flexibles y a manejar la incertidumbre como parte normal del trabajo.',
    ],
    nextSteps: [
      'Expandir el sistema de design tokens para incluir variaciones de alta densidad informacional, desarrollar componentes especializados para diferentes especialidades médicas, y crear temas personalizables que se adapten a preferencias individuales sin comprometer la consistencia del sistema.',
      'Desarrollar el módulo de facturación y gestión administrativa que permita registrar pagos, emitir facturas y optimizar procesos financieros',
    ],
    finalConsiderations:
      'El diseño de MediNote validó que la excelencia en experiencia de usuario en el sector salud no es un lujo, sino una necesidad crítica que impacta directamente la calidad del cuidado médico. Este proyecto demostró que cuando el diseño logra volverse transparente para el usuario médico, permite que toda su atención se concentre en el paciente, lo cual es el objetivo último de cualquier herramienta clínica. La experiencia subrayó la responsabilidad ética del diseñador UX/UI en contextos donde las decisiones de interfaz tienen implicaciones que van más allá de la satisfacción del usuario, extendiéndose al bienestar de los pacientes.',
  },
};

export default project4;
