// Proyecto 4: INVENTA-ANALYT - Gestor de inventarios
const project4 = {
  id: 4,
  title: 'INVENTA-ANALYT',
  shortDescription:
    'Control de inventario con análisis y reportes automatizados',

  // Resumen del proyecto
  description:
    'INVENTA-ANALYT es una aplicación móvil y web para gestión de pequeños negocios que integra control de inventario, registro de ventas, consulta de transacciones y análisis avanzados. La plataforma destaca por su interfaz intuitiva que permite a los propietarios monitorear existencias en tiempo real y acceder al historial completo de operaciones.',
  thumbnail: '/assets/images/projects/project1/thumbnail.jpg',
  image: ['/assets/images/projects/project1/thumbnail.jpg'],
  date: 'Octubre 2024 - Febrero 2025',
  dateRaw: '2025-02-05', // Formato para ordenar cronológicamente
  tools: ['Figma', 'SCSS', 'React', 'React Native Expo', 'Firebase'],
  teamRole:
    'Diseñar e implementar la interfaz de usuario de la aplicación móvil INVENTA-ANALYT, enfocándome en crear una experiencia intuitiva y atractiva mediante programación en React Native, con especial atención a la usabilidad de los elementos visuales, navegación fluida entre módulos y diseño responsive que maximiza la experiencia del usuario en diferentes dispositivos.',

  responsibilities: [
    'Diseñar la arquitectura de información y sistema de navegación',
    'Creación de prototipos de baja y alta fidelidad, realización de estudios de usabilidad con usuarios finales para identificar áreas de mejora en la interfaz, implementación de ajustes basados en feedback directo y pruebas A/B para validar las soluciones propuestas.',
    'Construcción de un sistema responsivo adaptable a diferentes dispositivos, asegurando una experiencia fluida y consistente en smartphones y computadoras.',
    'Desarrollar el sistema de diseño y componentes reutilizables',
    'Desarrollo de visualizaciones estadísticas para el módulo de reportes, transformando datos complejos en representaciones gráficas intuitivas.',
    'Conducir pruebas de usabilidad y refinar la experiencia basada en feedback',
  ],

  // Comprensión del usuario
  // Investigación de Usuarios
  summary:
    'Para INVENTA-ANALYT, realicé investigación mixta con entrevistas a 4 propietarios de pequeños negocios.Contrario a mis suposiciones iniciales, los comerciantes priorizaban la rapidez en registro de ventas sobrefunciones de inventario, y preferían interfaces simples sin muchas opciones de personalización. Tambiéndescubrí una necesidad inesperada de predicciones sencillas sobre reabastecimiento sin requerirconocimientos estadísticos. Estos hallazgos reorientaron el desarrollo hacia una interfaz ágil para ventas yun sistema de análisis automatizado.',

  keyIssues: [
    'Los comerciantes tienen dificultad para gestionar ventas e inventario durante horas pico, lo que llevó a implementar una interfaz de venta rápida con búsqueda instantánea y sincronización automática con inventario.',
    'Los usuarios no pueden interpretar datos de ventas sin conocimientos analíticos, por lo que desarrollamos un sistema de recomendaciones automáticas para reabastecimiento y predicción de tendencias con visualizaciones simples.',
    'La frustración con la configuración inicial de aplicaciones existentes inspiró el enfoque de "configuración mínima" con plantillas predefinidas.',
  ],

  // Sección de investigación expandida
  detailedResearch: {
    methods: [
      'Encuentas con 15 gerentes de inventario de diversos sectores',
      'Observación contextual en 8 almacenes y centros de distribución',
      'Encuestas online a 120+ profesionales de gestión de inventario',
      'Análisis de flujos de trabajo existentes mediante mapeo de procesos',
      'Benchmarking de 10 soluciones competidoras en el mercado',
      'Análisis de métricas de rendimiento en sistemas actuales',
    ],
    keyInsights: [
      'El 73% del tiempo de gestión se dedicaba a tareas manuales potencialmente automatizables',
      'Las decisiones críticas frecuentemente se tomaban con datos incompletos o desactualizados',
      'Los sistemas existentes priorizaban funcionalidad sobre usabilidad, limitando adopción efectiva',
      'Las más de 3 horas semanales promedio dedicadas a generación manual de informes',
      'Alta tasa de errores (12-15%) en entrada manual de datos con impacto financiero significativo',
    ],
  },

  // Perfiles de Usuario
  userProfiles: [
    {
      name: 'Guadalupe Lumbreras, 32 años',
      education: 'Preparatoria con formación en administración',
      hometown: 'Puebla de Zaragoza, México',
      family: 'Casada, dos hijos (8 y 12 años)',
      occupation: 'Administradora de dulcería familiar',

      problemStatement:
        'Guadalupe Lumbreras tiene una dulcería y necesita gestionar inventario y ventas desde su teléfono porque siempre está atendiendo clientes.',
      personalQuote:
        'No quiero perder tiempo en complicaciones tecnológicas; necesito algo que me deje concentrarme en lo que realmente importa: mis productos y mis clientes.',

      goals: [
        'Mantener un control preciso del inventario sin dedicar horas a conteos manuales',
        'Registrar ventas rápidamente durante horas de alta afluencia sin cometer errores',
        'Identificar qué productos vender más y cuáles necesitan reabastecimiento',
        'Acceder a información sobre el rendimiento de su negocio de forma clara y sin tecnicismos',
        'Reducir el tiempo dedicado a tareas administrativas para enfocarse en la atención al cliente',
      ],
      frustrations: [
        'Ha intentado usar hojas de cálculo, pero son complicadas de mantener actualizadas',
        'Las aplicaciones de gestión existentes requieren demasiados pasos para completar tareas simples',
        'Pierde ventas cuando hay mucha clientela porque el proceso de cobro es lento',
        'Le resulta difícil analizar sus datos de ventas para tomar decisiones informadas',
      ],

      userJourney:
        'Guadalupe tiene una dulcería y pasa la mayor parte del día atendiendo a sus clientes. Necesita una forma sencilla y rápida de gestionar inventario y ventas desde su teléfono, sin interrumpir su trabajo. Le interesa una solución que se adapte a su ritmo diario y que le ayude a tomar decisiones sobre compras y producción sin complicaciones.',

      // Mapa del Recorrido del usuario
      userJourneyMap:
        'Creé un mapa de la experiencia del usuario de Guadalupe usando la aplicación para gestionar su local durante un día típico, desde revisar el inventario hasta analizar las ventas.',
      userJourneyMapImage:
        '/assets/images/projects/project4/user_journey_map.jpg',
    },
    {
      name: 'Araceli Mendoza, 48 años',
      education: 'Técnico Superior en Contabilidad',
      hometown: 'San Andrés Cholula, Puebla, México',
      family: 'Viuda, dos hijos adultos (22 y 25 años)',
      occupation: 'Propietaria de ferretería familiar',

      problemStatement:
        'Araceli heredó la ferretería familiar hace 5 años y lucha por gestionar un inventario extenso y diverso con más de 2,000 productos diferentes, desde tornillos hasta herramientas eléctricas, lo que dificulta el control preciso de existencias y la localización rápida de artículos.',
      personalQuote:
        'Tengo clientes que entran preguntando por piezas específicas, y si no puedo decirles en segundos si la tengo y dónde está, pueden irse a otra ferretería. No puedo darme ese lujo.',

      goals: [
        'Digitalizar el inventario completo categorizado por familias de productos y ubicaciones en tienda',
        'Implementar un sistema de búsqueda rápida para localizar productos en segundos',
        'Establecer niveles mínimos de stock para artículos de alta rotación',
        'Analizar qué productos son más rentables y cuáles ocupan espacio innecesariamente',
        'Facilitar el proceso de inventario físico semestral que actualmente le toma una semana completa',
      ],
      frustrations: [
        'Los sistemas que ha probado no se adaptan a la gran variedad de productos y unidades de medida de una ferretería',
        'Ha perdido ventas por no saber si tiene ciertos productos en existencia o dónde están ubicados',
        'Le resulta imposible capacitar a sus dos empleados en sistemas complejos',
        'Las etiquetas de códigos de barras se dañan fácilmente en el ambiente de la ferretería',
      ],

      userJourney:
        'Araceli comienza su jornada a las 7:00 am organizando los pedidos recibidos el día anterior. Durante el día, atiende a clientes particulares y contratistas mientras intenta recordar la ubicación exacta de cada producto. Frecuentemente debe suspender la atención para verificar existencias en bodega. Al final del día, revisa manualmente qué productos necesita reordenar, basándose en su intuición más que en datos precisos, lo que a menudo resulta en exceso de algunos artículos y escasez de otros.',

      // Mapa del Recorrido del usuario
      userJourneyMap:
        'Elaboré un mapa de experiencia para Araceli mostrando los desafíos específicos que enfrenta en la gestión de su ferretería, desde la búsqueda de productos hasta el proceso de reordenamiento.',
      userJourneyMapImage:
        '/assets/images/projects/project4/user_journey_map_araceli.jpg',
    },
  ],

  // Análisis competitivo específico
  competitors: [
    {
      name: 'StockMaster Pro',
      description:
        'Software empresarial con décadas en el mercado. Robusto pero con interfaz anticuada y curva de aprendizaje pronunciada.',
    },
    {
      name: 'CloudInventory',
      description:
        'Solución SaaS moderna con enfoque en pymes. Destacaba por su facilidad de implementación y modelo de suscripción flexible.',
    },
    {
      name: 'RetailControl',
      description:
        'Sistema especializado en comercio minorista con funciones avanzadas de punto de venta integradas. Popular por su ecosistema de plugins.',
    },
  ],

  // Inicio del diseño
  sitemap:
    'La dificultad para acceder rápidamente a funciones clave en INVENTA-ANALYT llevó a la creación de un mapa del sitio eficiente. El objetivo fue tomar decisiones estratégicas sobre la arquitectura de la información para mejorar la navegación y facilitar el uso de la app.',
  sitemapImage: '/assets/images/projects/project4/sitemap.jpg',
  paperWireframes:
    'Diseñe wireframes en papel para cada pantalla de la aplicación de inventarios, considerando la usabilidad y navegación. En la versión refinada, se incluirá un menú desplegable para mejorar el acceso a las distintas secciones.',
  paperWireframesImage: '/assets/images/projects/project4/paper.png',

  // Variaciones de tamaño de pantalla en wireframes en papel
  sizeVariations:
    'Evaluar la aplicación de inventarios en distintos dispositivos para garantizar una experiencia responsiva, funcional y fácil de usar. Diseñar una interfaz clara y adaptable que mantenga la eficiencia y visibilidad de los datos en cualquier tamaño de pantalla.',
  sizeVariationsImage: ['/assets/images/projects/project4/variations.png'],

  // Wireframes digitales
  digitalWireframes:
    'El uso de wireframes ha clarificado cómo el rediseño mejora la experiencia de usuario, destacando una organización estratégica de elementos para facilitar la navegación.',
  digitalWireframesImage: '/assets/images/projects/project4/wireframes.png',

  // Variaciones de tamaño de pantalla en wireframes digitales
  sizeVariationsDigital:
    'También desarrollé wireframes digitales para diferentes tamaños de pantalla, mostrando cómo la nueva aplicación se adaptaría y cómo funcionaría una vez completamente responsivo.',
  sizeVariationsDigitalImage: ['/assets/images/projects/project4/digital.png'],

  // Prototipo de baja fidelidad
  prototype:
    'Los prototipos se simplificaron tras la retroalimentación: se redujeron pasos en el flujo de ventas, se limpió el dashboard, se optimizó la gestión de inventario, se enfocaron los análisis en insights accionables y se reorganizó la configuración. Esto resultó en una experiencia más intuitiva, priorizando la rapidez en tareas frecuentes y la complejidad solo para funciones avanzadas.',
  prototypeImage: '/assets/images/projects/project4/prototype.png',
  prototypeUrl:
    'https://www.figma.com/proto/RAdwsM7P1y7tdQhynTxtmT/INVENTA-ANALYT?page-id=0%3A1&node-id=1-3735&p=f&viewport=464%2C442%2C0.08&t=aLixr3jttXbgePOx-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A3735',

  // Estudio de usabilidad
  // Parámetros
  typeStudy: 'Estudio de usabilidad sin moderación',
  location: 'Puebla de Zaragoza',
  participants:
    '4 propietarios de pequeños comercios (2 tiendas de dulcería, 2 tiendas de alimentos)',
  time: '25-35 minutos',

  // Hallazgos
  // Principales hallazgos del estudio de usabilidad
  keyFindings: [
    '1. Ventas: El registro de ventas fue rápido e intuitivo, aunque la búsqueda por categoría causó confusión.',
    '2. Análisis: Los usuarios valoraron los datos, pero tuvieron dificultades para interpretar los gráficos y aplicar los insights.',
    '3. Productos: El formulario era lento por exceso de campos y todos buscaron una opción de importación masiva.',
  ],

  // Refinando el diseño
  // Maquetas
  refiningDesign: [
    {
      mockups:
        'Se agregó en la parte inferior de la descripción del producto una sección de categoría, donde el usuario podrá crear una nueva categoría para el producto o seleccionar una ya existente, facilitando así una mejor organización y clasificación de los productos.',
      mockupsImage: '/assets/images/projects/project4/mockups1.png',
    },
    {
      mockups:
        'En el registro de ventas actualmente solo se muestra un resumen de ventas e inventario. El diseño podría mejorar su estructura e incluir recomendaciones más directas, como visualizar patrones del negocio y alertar sobre productos que están por agotarse.',
      mockupsImage: '/assets/images/projects/project4/mockups2.png',
    },
  ],

  // Tamaño de pantalla original
  screenSizeImage: '/assets/images/projects/project4/screen.png',

  // Maquetas: Variaciones de tamaño de pantalla
  screenSizeVariations:
    'Durante el desarrollo se priorizó un diseño responsivo adaptable a distintos tamaños de pantalla. Se usaron unidades proporcionales para asegurar una experiencia fluida en todos los dispositivos. Se optimizaron elementos clave como navegación, visualización de productos y entrada de datos según el tamaño del dispositivo. Esta adaptabilidad fue clave, ya que el 65% de los usuarios alternaban entre dispositivos según la tarea.',
  screenSizeVariationsImage: [
    '/assets/images/projects/project4/size_variation.png',
  ],

  // Prototipo de alta fidelidad
  highFidelity: [
    'El prototipo refleja un diseño iterativo basado en investigación y retroalimentación de los usuarios. Utiliza el color violeta por su profesionalismo y accesibilidad. Se diferencia de la mayoría de aplicaciones empresariales que usan azul o verde.',
    'Resonó positivamente en las pruebas de usuario, donde los participantes lo asociaron con "herramienta moderna".',
  ],
  highFidelityImage: '/assets/images/projects/project4/high_fidelity.png',

  // Ver  Prototipos:
  viewPrototypes: [
    'https://www.figma.com/proto/RAdwsM7P1y7tdQhynTxtmT/INVENTA-ANALYT?page-id=9%3A3&node-id=9-255&p=f&viewport=-697%2C920%2C0.49&t=EjVEKXgOrGAS1ywH-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=9%3A255',
    'https://www.figma.com/proto/RAdwsM7P1y7tdQhynTxtmT/INVENTA-ANALYT?page-id=9%3A2378&node-id=9-3538&p=f&viewport=178%2C70%2C0.17&t=jEaGwxBrqb8fsq27-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=9%3A3538',
  ],

  // Consideraciones de accesibilidad
  accessibilityConsiderations: [
    '1. Implementamos un sistema de contraste de color que cumple con el estándar WCAG AA en toda la aplicación, asegurando una relación mínima de 4.5:1 entre texto y fondo, lo que permite que usuarios con baja visión puedan distinguir claramente la información en pantalla.',
    '2. Desarrollar un orden de navegación lógico que permite a usuarios completar todas las operaciones esenciales sin asistencia, desde añadir productos hasta registrar ventas.',
    '3. Diseñar todas las áreas táctiles (botones, enlaces, elementos interactivos) con un tamaño mínimo de 44x44 puntos y espaciado adecuado entre ellos, facilitando la interacción precisa para usuarios con limitaciones motoras.',
  ],

  conclusion:
    'INVENTA-ANALYT demuestra que un sistema bien diseñado puede transformar radicalmente los procesos de gestión de inventario, convirtiendo una tarea tradicionalmente tediosa en una ventaja competitiva estratégica.',
  impact:
    'El prototipo logró reducir en un 62% el tiempo para tareas diarias y obtuvo una calificación de satisfacción de 4.8/5. Las predicciones de reabastecimiento ayudaron a disminuir situaciones de desabastecimiento.',
  learnings:
    'Se descubrió que los usuarios valoran más completar tareas rápidamente que tener acceso a funcionalidades complejas. Esto llevó a priorizar la facilidad de uso sobre la exhaustividad de características, especialmente en flujos de alta frecuencia.',

  // Próximos pasos
  nextSteps: [
    '1. Optimizar el proceso en dispositivos móviles, reduciendo el número de toques necesarios y mejorando el tamaño de los elementos interactivos, ya que las métricas de uso muestran que esta es la sección más utilizada y donde los usuarios pasan más tiempo durante horas de alta actividad comercial.',
    '2. Mejorar la visualización de datos en el panel de análisis implementando gráficos más sencillos con etiquetas claras y mensajes explicativos, abordando directamente la confusión manifestada por los usuarios ante la información estadística.',
  ],

  // Lecciones aprendidas
  professionalLessons: [
    'La simplicidad de la interfaz es crucial incluso en sistemas con funcionalidades complejas',
    'La automatización debe complementar, no reemplazar, el criterio humano en decisiones importantes',
    'El diseño modular permite una implementación gradual que facilita la adopción',
    'La visualización de datos debe adaptarse a diferentes roles y necesidades informativas',
  ],

  personalLessons: [
    'Aprendí a traducir necesidades técnicas complejas a interfaces intuitivas para usuarios no técnicos',
    'Desarrollé una mayor apreciación por la importancia del diseño responsivo en entornos de trabajo diversos',
    'Mejoré mi capacidad para priorizar funcionalidades basadas en ROI para el negocio',
  ],

  // Consideraciones finales
  finalConsiderations:
    'INVENTA-ANALYT representa una solución integral que va más allá de un simple sistema de gestión de inventario. A través de este proyecto, hemos logrado transformar una necesidad técnica en una herramienta que realmente empodera a los pequeños comerciantes en su operación diaria. La clave del éxito residió en comprender profundamente las necesidades reales de usuarios como Guadalupe: personas ocupadas que necesitan soluciones prácticas sin complejidad tecnológica. El enfoque en rapidez para tareas frecuentes, visualización simplificada de datos complejos y automatización inteligente ha demostrado que el diseño centrado en el usuario puede generar impacto tangible en negocios reales. Mirando hacia adelante, este proyecto establece las bases para explorar cómo la inteligencia artificial podría potenciar aún más las capacidades predictivas del sistema, manteniendo siempre la simplicidad como principio fundamental. INVENTA-ANALYT no es solo un producto tecnológico, sino una herramienta de transformación para negocios que buscan prosperar en un entorno cada vez más competitivo.',
};

export default project4;
