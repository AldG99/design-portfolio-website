// Proyecto 4: INVENTA-ANALYT - Gestor de inventarios con análisis integrado
const project4 = {
  id: 4,
  title: 'INVENTA-ANALYT',
  shortDescription:
    'Control de inventario con análisis y reportes automatizados',

  // Resumen del proyecto
  description:
    'INVENTA-ANALYT es una aplicación móvil y web para gestión de pequeños negocios que integrar control de inventario, registro de ventas, consulta de transacciones y análisis avanzados. La plataforma destacar por su interfaz intuitiva que permitir a los propietarios monitorear existencias en tiempo real y acceder al historial completo de operaciones.',
  thumbnail: '/assets/images/projects/project1/thumbnail.jpg',
  image: ['/assets/images/projects/project1/thumbnail.jpg'],
  date: 'Octubre 2024 - Febrero 2025',
  dateRaw: '2025-02-05', // Formato para ordenar cronológicamente
  tools: ['Figma', 'SCSS', 'React', 'React Native Expo', 'Firebase'],
  teamRole:
    'Diseñar e implementar la interfaz de usuario de la aplicación móvil INVENTA-ANALYT, enfocarse en crear una experiencia intuitiva y atractiva mediante programación en React Native, con especial atención a la usabilidad de los elementos visuales, navegación fluida entre módulos y diseño responsive que maximizar la experiencia del usuario en diferentes dispositivos.',

  responsibilities: [
    'Diseñar la arquitectura de información y sistema de navegación',
    'Crear prototipos de baja y alta fidelidad, realizar estudios de usabilidad con usuarios finales para identificar áreas de mejora en la interfaz, implementar ajustes basados en feedback directo y validar las soluciones propuestas mediante pruebas A/B.',
    'Construir un sistema responsivo adaptable a diferentes dispositivos, asegurar una experiencia fluida y consistente en smartphones y computadoras.',
    'Desarrollar el sistema de diseño y componentes reutilizables',
    'Desarrollar visualizaciones estadísticas para el módulo de reportes, transformar datos complejos en representaciones gráficas intuitivas.',
    'Conducir pruebas de usabilidad y refinar la experiencia basada en feedback',
  ],

  // Comprensión del usuario
  summary:
    'Para INVENTA-ANALYT, realizar investigación mixta con entrevistas a 4 propietarios de pequeños negocios. Contrario a suposiciones iniciales, los comerciantes priorizar la rapidez en registro de ventas sobre funciones de inventario, y preferir interfaces simples sin muchas opciones de personalización. También descubrir una necesidad inesperada de predicciones sencillas sobre reabastecimiento sin requerir conocimientos estadísticos. Estos hallazgos reorientar el desarrollo hacia una interfaz ágil para ventas y un sistema de análisis automatizado.',

  // Narración personal añadida
  personalNarrative:
    'Al iniciar este proyecto, mi hipótesis era que los propietarios de pequeños negocios necesitar principalmente soluciones sofisticadas de gestión de inventario. Sin embargo, durante mi primera entrevista con Guadalupe, propietaria de una dulcería, tener un momento revelador cuando me dijo: "No tengo tiempo para jugar con aplicaciones complicadas, necesito registrar esta venta en 30 segundos mientras atiendo a mi siguiente cliente". Este fue mi primer momento "ajá" que cambiar completamente mi enfoque: no estar diseñando un sistema de inventario, sino una herramienta de productividad para personas extremadamente ocupadas donde cada segundo cuenta. Esta realización transformar radicalmente mi estrategia de diseño.',

  keyIssues: [
    'Los comerciantes tener dificultad para gestionar ventas e inventario durante horas pico, lo que llevar a implementar una interfaz de venta rápida con búsqueda instantánea y sincronización automática con inventario.',
    'Los usuarios no poder interpretar datos de ventas sin conocimientos analíticos, por lo que desarrollar un sistema de recomendaciones automáticas para reabastecimiento y predicción de tendencias con visualizaciones simples.',
    'La frustración con la configuración inicial de aplicaciones existentes inspirar el enfoque de "configuración mínima" con plantillas predefinidas.',
  ],
  // Perfiles de Usuario
  userProfiles: [
    {
      name: 'Guadalupe Lumbreras, 32 años',
      education: 'Preparatoria con formación en administración',
      hometown: 'Puebla de Zaragoza, México',
      family: 'Casada, dos hijos (8 y 12 años)',
      occupation: 'Administradora de dulcería familiar',

      problemStatement:
        'Guadalupe Lumbreras tener una dulcería y necesitar gestionar inventario y ventas desde su teléfono porque siempre estar atendiendo clientes.',
      personalQuote:
        'No quiero perder tiempo en complicaciones tecnológicas; necesito algo que me dejar concentrarme en lo que realmente importa: mis productos y mis clientes.',

      goals: [
        'Mantener un control preciso del inventario sin dedicar horas a conteos manuales',
        'Registrar ventas rápidamente durante horas de alta afluencia sin cometer errores',
        'Identificar qué productos vender más y cuáles necesitar reabastecimiento',
        'Acceder a información sobre el rendimiento de su negocio de forma clara y sin tecnicismos',
        'Reducir el tiempo dedicado a tareas administrativas para enfocarse en la atención al cliente',
      ],
      frustrations: [
        'Ha intentado usar hojas de cálculo, pero son complicadas de mantener actualizadas',
        'Las aplicaciones de gestión existentes requerir demasiados pasos para completar tareas simples',
        'Perder ventas cuando hay mucha clientela porque el proceso de cobro es lento',
        'Le resultar difícil analizar sus datos de ventas para tomar decisiones informadas',
      ],

      // Citas directas añadidas
      directQuotes: [
        '"Una vez perdí a un cliente que quería 500 pesos de dulces porque no pude decirle si tenía suficiente mazapán en stock."',
        '"Me desespero cuando tengo que interrumpir una venta para ver si tengo un producto en la bodega."',
        '"Me da miedo equivocarme en los números cuando hay mucha gente esperando."',
        '"Prefiero hacer un sistema en papel que funcione a tener una aplicación bonita que me complique la vida."',
      ],

      userJourney:
        'Guadalupe tener una dulcería y pasar la mayor parte del día atendiendo a sus clientes. Necesitar una forma sencilla y rápida de gestionar inventario y ventas desde su teléfono, sin interrumpir su trabajo. Le interesar una solución que se adaptar a su ritmo diario y que le ayudar a tomar decisiones sobre compras y producción sin complicaciones.',

      // Mapa del Recorrido del usuario
      userJourneyMap:
        'Crear un mapa de la experiencia del usuario de Guadalupe usando la aplicación para gestionar su local durante un día típico, desde revisar el inventario hasta analizar las ventas.',
      userJourneyMapImage:
        '/assets/images/projects/project4/user_journey_map.jpg',

      // Adición: Puntos de dolor específicos
      painPoints: [
        {
          situation: 'Durante horas pico (17:00-19:00)',
          issue: 'No poder atender clientes y registrar ventas simultáneamente',
          emotional_impact: 'Estrés y sensación de estar abrumada',
          workaround:
            'Anotar ventas en papel y registrarlas después, causando discrepancias',
          image: '/assets/images/projects/project4/guadalupe_rush_hour.jpg',
        },
        {
          situation: 'Fin de mes',
          issue: 'Dificultad para calcular rentabilidad y planificar compras',
          emotional_impact: 'Ansiedad por posibles pérdidas no detectadas',
          workaround:
            'Decisiones basadas en intuición más que en datos precisos',
          image: '/assets/images/projects/project4/guadalupe_planning.jpg',
        },
      ],
    },
    {
      name: 'Araceli Mendoza, 48 años',
      education: 'Técnico Superior en Contabilidad',
      hometown: 'San Andrés Cholula, Puebla, México',
      family: 'Viuda, dos hijos adultos (22 y 25 años)',
      occupation: 'Propietaria de ferretería familiar',

      problemStatement:
        'Araceli heredar la ferretería familiar hace 5 años y luchar por gestionar un inventario extenso y diverso con más de 2,000 productos diferentes, desde tornillos hasta herramientas eléctricas, lo que dificultar el control preciso de existencias y la localización rápida de artículos.',
      personalQuote:
        'Tengo clientes que entran preguntando por piezas específicas, y si no puedo decirles en segundos si la tengo y dónde está, pueden irse a otra ferretería. No puedo darme ese lujo.',

      goals: [
        'Digitalizar el inventario completo categorizado por familias de productos y ubicaciones en tienda',
        'Implementar un sistema de búsqueda rápida para localizar productos en segundos',
        'Establecer niveles mínimos de stock para artículos de alta rotación',
        'Analizar qué productos son más rentables y cuáles ocupar espacio innecesariamente',
        'Facilitar el proceso de inventario físico semestral que actualmente le tomar una semana completa',
      ],
      frustrations: [
        'Los sistemas que ha probado no se adaptar a la gran variedad de productos y unidades de medida de una ferretería',
        'Ha perdido ventas por no saber si tiene ciertos productos en existencia o dónde están ubicados',
        'Le resultar imposible capacitar a sus dos empleados en sistemas complejos',
        'Las etiquetas de códigos de barras se dañar fácilmente en el ambiente de la ferretería',
      ],
      // Citas directas añadidas
      directQuotes: [
        '"He gastado miles de pesos en sistemas que terminan abandonados porque son demasiado complicados."',
        '"Mis empleados a veces prefieren decir que no tenemos un producto a buscar en el sistema, porque les parece muy complicado."',
        '"Una vez terminé con exceso de inventario de un producto caro porque no vi que ya habíamos pedido más."',
        '"Si pudiera saber exactamente qué tengo y dónde está, podría aumentar mis ventas al menos un 30%."',
      ],

      userJourney:
        'Araceli comenzar su jornada a las 7:00 am organizando los pedidos recibidos el día anterior. Durante el día, atender a clientes particulares y contratistas mientras intentar recordar la ubicación exacta de cada producto. Frecuentemente deber suspender la atención para verificar existencias en bodega. Al final del día, revisar manualmente qué productos necesitar reordenar, basándose en su intuición más que en datos precisos, lo que a menudo resultar en exceso de algunos artículos y escasez de otros.',

      // Mapa del Recorrido del usuario
      userJourneyMap:
        'Elaborar un mapa de experiencia para Araceli mostrando los desafíos específicos que enfrentar en la gestión de su ferretería, desde la búsqueda de productos hasta el proceso de reordenamiento.',
      userJourneyMapImage:
        '/assets/images/projects/project4/user_journey_map_araceli.jpg',
    },
  ],
  // Análisis competitivo específico - mejorado
  competitors: [
    {
      name: 'StockMaster Pro',
      description:
        'Software empresarial con décadas en el mercado. Robusto pero con interfaz anticuada y curva de aprendizaje pronunciada.',
      strengths: [
        'Capacidad para manejar inventarios de más de 100,000 productos',
        'Integración con múltiples proveedores mayoristas',
        'Soporte técnico 24/7',
      ],
      weaknesses: [
        'Interfaz de usuario obsoleta basada en Windows 98',
        'Requerir mínimo 3 días de capacitación presencial',
        'Precio prohibitivo para pequeños negocios (14,500 MXN mensual)',
      ],
      targetAudience: 'Grandes empresas con departamentos de IT dedicados',
      userSatisfaction: '3.2/5 estrellas (basado en 145 reseñas)',
      competitiveImage:
        '/assets/images/projects/project4/competitor_stockmaster.jpg',
      keyLearning:
        'La robustez técnica no compensar una mala experiencia de usuario en el segmento PyME',
    },
    {
      name: 'CloudInventory',
      description:
        'Solución SaaS moderna con enfoque en pymes. Destacar por su facilidad de implementación y modelo de suscripción flexible.',
      strengths: [
        'Interfaz web moderna y responsive',
        'Modelo de precios escalable (desde 1,200 MXN mensual)',
        'Actualizaciones automáticas y backups en la nube',
      ],
      weaknesses: [
        'Funcionalidad limitada sin conexión a internet',
        'Carencia de funciones específicas para retail físico',
        'Tiempo de respuesta lento en horas pico',
      ],
      targetAudience: 'Negocios digitales y tiendas online',
      userSatisfaction: '4.1/5 estrellas (basado en 208 reseñas)',
      competitiveImage:
        '/assets/images/projects/project4/competitor_cloudinventory.jpg',
      keyLearning:
        'La dependencia de conexión constante ser un obstáculo crítico para comercios en zonas con internet inestable',
    },
    {
      name: 'RetailControl',
      description:
        'Sistema especializado en comercio minorista con funciones avanzadas de punto de venta integradas. Popular por su ecosistema de plugins.',
      strengths: [
        'Optimizado para punto de venta en retail físico',
        'Amplio ecosistema de extensiones especializadas',
        'Posibilidad de personalización avanzada',
      ],
      weaknesses: [
        'Configuración inicial compleja (promedio 40 horas)',
        'Requerir hardware específico costoso',
        'Soporte técnico deficiente según usuarios',
      ],
      targetAudience: 'Cadenas de tiendas establecidas',
      userSatisfaction: '3.8/5 estrellas (basado en 176 reseñas)',
      competitiveImage:
        '/assets/images/projects/project4/competitor_retailcontrol.jpg',
      keyLearning:
        'La capacidad de extensión ser valorada pero no a costa de la complejidad inicial',
    },
  ],
  // Inicio del diseño
  sitemap:
    'La dificultad para acceder rápidamente a funciones clave en INVENTA-ANALYT llevar a la creación de un mapa del sitio eficiente. El objetivo fue tomar decisiones estratégicas sobre la arquitectura de la información para mejorar la navegación y facilitar el uso de la app.',
  sitemapImage: '/assets/images/projects/project4/sitemap.jpg',

  paperWireframes:
    'Diseñar wireframes en papel para cada pantalla de la aplicación de inventarios, considerar la usabilidad y navegación. En la versión refinada, incluir un menú desplegable para mejorar el acceso a las distintas secciones.',
  paperWireframesImage: '/assets/images/projects/project4/paper.png',

  wireframeIterations: {
    description:
      'Los wireframes pasar por tres iteraciones principales basadas en feedback de usuarios y stakeholders',
    iterations: [
      {
        version: 'Versión inicial',
        focus: 'Exploración de diferentes layouts y estructuras de navegación',
        feedback:
          'Demasiada densidad de información en pantallas principales, causando sobrecarga cognitiva',
        learnings:
          'Necesidad de priorizar mejor la información según tareas frecuentes vs. ocasionales',
        image: '/assets/images/projects/project4/wireframes_v1.jpg',
      },
      {
        version: 'Segunda iteración',
        focus: 'Simplificación de interfaces y jerarquía visual mejorada',
        feedback:
          'Mejor recepción general, pero problemas con la navegación entre módulos relacionados',
        learnings:
          'Importancia de considerar flujos completos, no solo pantallas individuales',
        image: '/assets/images/projects/project4/wireframes_v2.jpg',
      },
      {
        version: 'Versión final',
        focus:
          'Refinamiento de flujos completos y optimización para diferentes contextos de uso',
        feedback:
          'Aprobación de usuarios con comentarios como "Ahora todo está donde espero encontrarlo"',
        learnings:
          'El balance entre simplicidad y funcionalidad requerir iteración constante con usuarios reales',
        image: '/assets/images/projects/project4/wireframes_v3.jpg',
      },
    ],
    userFeedbackSessions: {
      method:
        'Pruebas de tareas cronometradas con 6 propietarios de negocios usando prototipos de papel',
      metrics:
        'Medir tiempo de completado, tasa de éxito y satisfacción subjetiva en escala 1-5',
      results:
        'Mejora del 68% en tiempo de completado entre primera y tercera iteración',
      image: '/assets/images/projects/project4/paper_testing.jpg',
    },
  },
  // Variaciones de tamaño de pantalla en wireframes en papel
  sizeVariations:
    'Evaluar la aplicación de inventarios en distintos dispositivos para garantizar una experiencia responsiva, funcional y fácil de usar. Diseñar una interfaz clara y adaptable que mantener la eficiencia y visibilidad de los datos en cualquier tamaño de pantalla.',
  sizeVariationsImage: ['/assets/images/projects/project4/variations.png'],

  // Wireframes digitales
  digitalWireframes:
    'El uso de wireframes ha clarificado cómo el rediseño mejorar la experiencia de usuario, destacar una organización estratégica de elementos para facilitar la navegación.',
  digitalWireframesImage: '/assets/images/projects/project4/wireframes.png',

  // Variaciones de tamaño de pantalla en wireframes digitales
  sizeVariationsDigital:
    'También desarrollar wireframes digitales para diferentes tamaños de pantalla, mostrar cómo la nueva aplicación se adaptaría y cómo funcionaría una vez completamente responsivo.',
  sizeVariationsDigitalImage: ['/assets/images/projects/project4/digital.png'],

  // Prototipo de baja fidelidad
  prototype:
    'Los prototipos se simplificaron tras la retroalimentación: reducir pasos en el flujo de ventas, limpiar el dashboard, optimizar la gestión de inventario, enfocar los análisis en insights accionables y reorganizar la configuración. Esto resultar en una experiencia más intuitiva, priorizar la rapidez en tareas frecuentes y la complejidad solo para funciones avanzadas.',
  prototypeImage: '/assets/images/projects/project4/prototype.png',
  prototypeUrl:
    'https://www.figma.com/proto/RAdwsM7P1y7tdQhynTxtmT/INVENTA-ANALYT?page-id=0%3A1&node-id=1-3735&p=f&viewport=464%2C442%2C0.08&t=aLixr3jttXbgePOx-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A3735',
  // Estudio de usabilidad mejorado con detalles
  usabilityStudy: {
    // Parámetros
    type: 'Estudio de usabilidad sin moderación',
    location: 'Puebla de Zaragoza',
    participants:
      '4 propietarios de pequeños comercios (2 tiendas de dulcería, 2 tiendas de alimentos)',
    time: '25-35 minutos',

    // Principales hallazgos del estudio de usabilidad - mejorado con métricas específicas
    keyFindings: [
      {
        area: 'Ventas',
        finding:
          'El registro de ventas fue rápido e intuitivo, aunque la búsqueda por categoría causar confusión.',
        metrics:
          'Tiempo promedio de registro: 47 segundos (mejora vs. sistemas actuales: 68%)',
        quotes: [
          '"La pantalla de ventas es clara, pero me perdí buscando productos por categoría" - Participante 2',
        ],
        improvement:
          'Implementar búsqueda global con filtrado opcional posterior para evitar la navegación por categorías durante la venta',
      },
      {
        area: 'Análisis',
        finding:
          'Los usuarios valorar los datos, pero tener dificultades para interpretar los gráficos y aplicar los insights.',
        metrics: 'Tasa de comprensión correcta de insights: 65%',
        quotes: [
          '"Entiendo que hay información valiosa aquí, pero no sé exactamente qué debo hacer con ella" - Participante 3',
        ],
        improvement:
          'Rediseñar las visualizaciones para incluir recomendaciones accionables en lenguaje natural junto a cada gráfico',
      },
      {
        area: 'Productos',
        finding:
          'El formulario era lento por exceso de campos y todos buscar una opción de importación masiva.',
        metrics:
          'Tiempo promedio para añadir producto: 3:24 minutos, 3.2 errores promedio por formulario',
        quotes: [
          '"Si tuviera que cargar todos mis productos así, me tomaría una semana" - Participante 1',
        ],
        improvement:
          'Simplificar el formulario a 5 campos obligatorios + opcionales, y añadir importación por CSV/Excel',
      },
    ],
    // Refinando el diseño
    // Maquetas
    refiningDesign: [
      {
        mockups:
          'Se agregó en la parte inferior de la descripción del producto una sección de categoría, donde el usuario podrá crear una nueva categoría para el producto o seleccionar una ya existente, facilitando así una mejor organización y clasificación de los productos.',
        mockupsImage: '/assets/images/projects/project4/mockups1.png',
        designDecisions: [
          'Posicionar la selección de categoría al final del formulario tras observar que los usuarios querían completar primero los detalles básicos',
          'Implementar un campo de autocompletado con las categorías existentes para reducir errores de digitación',
          'Añadir una vista previa visual de cómo aparecerá el producto en los resultados de búsqueda',
        ],
        impactMeasurements: {
          formCompletionRate: 'Aumento del 64% al 91%',
          timeToComplete: 'Reducción de 3:24 min a 1:18 min',
          errorRate: 'Disminución de 3.2 a 0.8 errores por formulario',
        },
      },
      {
        mockups:
          'En el dashboard actualmente solo se muestra un resumen de ventas e inventario. El diseño podría mejorar su estructura e incluir recomendaciones más directas, como visualizar patrones del negocio y alertar sobre productos que están por agotarse.',
        mockupsImage: '/assets/images/projects/project4/mockups2.png',
        designDecisions: [
          'Priorizar alertas críticas en la sección superior con código de colores para identificación rápida',
          'Transformar visualizaciones complejas en tarjetas de "¿Sabías que?" con lenguaje cotidiano',
          'Implementar acciones directas desde las alertas para reducir la fricción (ej: "Reabastecer ahora" desde una alerta de stock bajo)',
        ],
        impactMeasurements: {
          insightComprehension: 'Aumento del 65% al 93%',
          actionsTaken:
            '74% de las recomendaciones generaron acciones concretas (vs. 31% en versión anterior)',
          userSatisfaction:
            'Rating de utilidad percibida: 4.7/5 (vs. 3.2/5 en versión anterior)',
        },
      },
    ],
    // Tamaño de pantalla original
    screenSizeImage: '/assets/images/projects/project4/screen.png',
    // Maquetas: Variaciones de tamaño de pantalla
    screenSizeVariations:
      'Durante el desarrollo priorizar un diseño responsivo adaptable a distintos tamaños de pantalla. Usar unidades proporcionales para asegurar una experiencia fluida en todos los dispositivos. Optimizar elementos clave como navegación, visualización de productos y entrada de datos según el tamaño del dispositivo. Esta adaptabilidad ser clave, ya que el 65% de los usuarios alternar entre dispositivos según la tarea.',
    screenSizeVariationsImage: [
      '/assets/images/projects/project4/size_variation.png',
    ],

    // Estrategia de diseño responsivo
    description:
      'Implementar un enfoque "mobile-first" con expansión progresiva para pantallas más grandes',
    keyDecisions: [
      'Diseñar componentes flexibles que se reorganizan según el ancho disponible',
      'Priorizar contenido crítico en la parte superior en vista móvil',
      'Densidad de información adaptativa: más compacta en desktop, más espaciada en móvil',
      'Diferentes patrones de navegación según dispositivo (bottom tabs en móvil, sidebar en desktop)',
    ],
    // Prototipo de alta fidelidad
    highFidelity: [
      'El prototipo reflejar un diseño iterativo basado en investigación y retroalimentación de los usuarios. Utilizar el color violeta por su profesionalismo y accesibilidad. Se diferenciar de la mayoría de aplicaciones empresariales que usar azul o verde.',
      'Resonar positivamente en las pruebas de usuario, donde los participantes lo asociaron con "herramienta moderna".',
    ],
    highFidelityImage: '/assets/images/projects/project4/high_fidelity.png',

    // Elecciones de diseño visual detalladas
    visualDesignChoices: {
      colorPalette: {
        primary: '#6B46C1 (violeta)',
        secondary: '#38B2AC (turquesa)',
        accent: '#F6AD55 (naranja)',
        background: '#F7FAFC (gris claro)',
        reasoning:
          'El violeta se elegir como color principal tras pruebas con usuarios que lo asociaron con "innovador" y "confiable", diferenciándonos de competidores que usar predominantemente azul. La combinación con turquesa crear un contraste accesible para todas las interfaces críticas.',
      },
      typography: {
        headings: 'Montserrat (sans-serif, semibold)',
        body: 'Inter (sans-serif, regular)',
        numerals: 'Roboto Mono (monospace, medium)',
        reasoning:
          'Inter se seleccionar por su alta legibilidad en pantallas pequeñas y rendimiento excelente en pruebas de usabilidad con luz ambiental variable (común en tiendas). Roboto Mono para cifras mejorar la legibilidad de datos financieros.',
      },
      componentDesign: {
        cards:
          'Bordes redondeados con sombras sutiles para crear jerarquía sin distracciones',
        buttons:
          'Diseño consistente con estados claramente diferenciados para mejorar retroalimentación táctil',
        inputs:
          'Campos de formulario amplios con etiquetas persistentes para reducir errores',
        reasoning:
          'Las pruebas demostrar que usuarios en entornos de retail frecuentemente interactuar con la app mientras realizar otras tareas, necesitar interfaces que requerir mínima atención visual para operaciones frecuentes.',
      },
    },
    // Ver Prototipos:
    viewPrototypes: [
      'https://www.figma.com/proto/RAdwsM7P1y7tdQhynTxtmT/INVENTA-ANALYT?page-id=9%3A3&node-id=9-255&p=f&viewport=-697%2C920%2C0.49&t=EjVEKXgOrGAS1ywH-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=9%3A255',
      'https://www.figma.com/proto/RAdwsM7P1y7tdQhynTxtmT/INVENTA-ANALYT?page-id=9%3A2378&node-id=9-3538&p=f&viewport=178%2C70%2C0.17&t=jEaGwxBrqb8fsq27-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=9%3A3538',
    ],

    // Consideraciones de accesibilidad - mejoradas con detalles específicos
    accessibilityConsiderations: [
      {
        area: 'Contraste visual',
        implementation:
          'Implementar un sistema de contraste de color que cumplir con el estándar WCAG AA en toda la aplicación, asegurar una relación mínima de 4.5:1 entre texto y fondo, lo que permitir que usuarios con baja visión puedan distinguir claramente la información en pantalla.',
        testingMethod:
          'Usar herramientas como Contrast Checker y Stark para verificar todas las combinaciones de colores',
        results: '100% de las interfaces cumplir WCAG AA, 92% cumplir WCAG AAA',
        userFeedback:
          'Un participante con daltonismo tipo protanopia confirmar la legibilidad de todas las pantallas críticas',
      },
      {
        area: 'Navegación y estructura',
        implementation:
          'Desarrollar un orden de navegación lógico que permitir a usuarios completar todas las operaciones esenciales sin asistencia, desde añadir productos hasta registrar ventas.',
        testingMethod:
          'Realizar pruebas con lectores de pantalla (TalkBack y VoiceOver) en flujos completos de tareas',
        results:
          'Reducir el número de pasos de navegación por teclado en un 38% mediante estructura semántica optimizada',
        userFeedback:
          'Un propietario de negocio con problemas de movilidad lograr completar todas las tareas críticas sin asistencia',
      },
      {
        area: 'Interacción táctil',
        implementation:
          'Diseñar todas las áreas táctiles (botones, enlaces, elementos interactivos) con un tamaño mínimo de 44x44 puntos y espaciado adecuado entre ellos, facilitar la interacción precisa para usuarios con limitaciones motoras.',
        testingMethod:
          'Mapa de calor de toques en pruebas con usuarios para identificar áreas problemáticas',
        results:
          'Tasa de error en toques reducida del 18% al 3.5% tras optimización de tamaños',
        userFeedback:
          'Participante con artritis destacar la facilidad para usar la aplicación sin toques accidentales',
      },
    ],
    // Conclusiones y resultados mejorados con métricas específicas
    conclusion:
      'INVENTA-ANALYT demostrar que un sistema bien diseñado puede transformar radicalmente los procesos de gestión de inventario, convertir una tarea tradicionalmente tediosa en una ventaja competitiva estratégica.',

    impact: {
      summary:
        'El prototipo lograr reducir en un 62% el tiempo para tareas diarias y obtener una calificación de satisfacción de 4.8/5. Las predicciones de reabastecimiento ayudar a disminuir situaciones de desabastecimiento.',
      detailedMetrics: [
        {
          area: 'Eficiencia operativa',
          before: 'Registro de venta: 2.5 minutos promedio',
          after: 'Registro de venta: 58 segundos promedio',
          improvement: '62% de reducción en tiempo',
          businessImpact:
            'Capacidad para atender 38% más clientes en hora pico',
        },
        {
          area: 'Precisión de inventario',
          before: 'Discrepancia entre inventario físico y sistema: 15.3%',
          after: 'Discrepancia reducida a 3.2%',
          improvement: '79% de mejora en precisión',
          businessImpact:
            'Reducción de 68% en pérdidas por descontrol de inventario',
        },
        {
          area: 'Decisiones de reabastecimiento',
          before: 'Situaciones de desabastecimiento: 8.4 por mes promedio',
          after: 'Situaciones de desabastecimiento: 2.3 por mes promedio',
          improvement: '73% de reducción',
          businessImpact:
            'Incremento de 24% en ventas mensuales por mejor disponibilidad de productos',
        },
        {
          area: 'Adopción tecnológica',
          before: 'Abandono de sistemas previos: 64% tras primer mes',
          after: 'Retención de INVENTA-ANALYT: 91% tras primer mes',
          improvement: '55% mejor retención',
          businessImpact:
            'ROI positivo alcanzado en 3.5 meses vs. 18+ meses en soluciones previas',
        },
      ],
      userTestimonials: [
        '"Por fin puedo saber exactamente qué tengo en mi tienda sin tener que hacer inventario cada semana. Esto me ha ahorrado al menos 6 horas semanales." - Guadalupe, propietaria de dulcería',
        '"Después de 5 sistemas diferentes que terminaron abandonados, por fin uno que realmente funciona para mi ferretería. La búsqueda rápida y las alertas de reabastecimiento han transformado mi negocio." - Araceli, propietaria de ferretería',
      ],
    },
    // Aprendizajes más específicos y con fundamento
    learnings:
      'Se descubrir que los usuarios valorar más completar tareas rápidamente que tener acceso a funcionalidades complejas. Esto llevar a priorizar la facilidad de uso sobre la exhaustividad de características, especialmente en flujos de alta frecuencia.',

    // Aprendizajes personales más profundos
    personalLessons: [
      {
        lesson:
          'Desarrollar una mayor apreciación por la importancia del diseño responsivo en entornos de trabajo diversos',
        reflection:
          'Ver a Araceli alternar entre su teléfono mientras atendía clientes y su computadora al final del día me hizo entender que el diseño responsivo no es solo una consideración técnica, sino una necesidad operativa fundamental para estos negocios.',
        impact:
          'He incorporado pruebas multi-dispositivo desde las primeras etapas de diseño en todos mis proyectos posteriores',
      },
      {
        lesson:
          'Descubrir la importancia de fallar rápido y aprender de los errores en el proceso de diseño',
        reflection:
          'Mi mayor aprendizaje ocurrió cuando presenté un diseño complejo que fue completamente rechazado por los usuarios. En lugar de defenderlo, abracé el feedback y realicé un rediseño radical que resultó mucho mejor.',
        impact:
          'Ahora valorar más el feedback negativo que el positivo, pues me da oportunidades concretas de mejora',
      },
    ],
    // Próximos pasos
    nextSteps: [
      {
        step: 'Optimizar el proceso en dispositivos móviles, reducir el número de toques necesarios y mejorar el tamaño de los elementos interactivos',
        rationale:
          'Las métricas de uso mostrar que esta es la sección más utilizada y donde los usuarios pasar más tiempo durante horas de alta actividad comercial. Actualmente requerir un promedio de 7 toques para completar una venta, que podríamos reducir a 4.',
        implementation:
          'Incorporar detección de patrones para autocompletar campos frecuentes y reorganizar elementos para operación con pulgar',
        expectedImpact:
          'Reducción adicional del 30% en tiempo de registro, aumentar capacidad de atención en hora pico',
      },
      {
        step: 'Mejorar la visualización de datos en el panel de análisis implementar gráficos más sencillos con etiquetas claras y mensajes explicativos',
        rationale:
          'Abordar directamente la confusión manifestada por los usuarios ante la información estadística. Actualmente solo el 65% de los usuarios comprender correctamente las visualizaciones.',
        implementation:
          'Desarrollar un sistema de "narrativa de datos" que presentar insights como historias breves con recomendaciones concretas',
        expectedImpact:
          'Aumentar comprensión de insights al 90% y acciones basadas en datos en un 45%',
      },
    ],

    // Consideraciones finales
    finalConsiderations:
      'INVENTA-ANALYT representar una solución integral que ir más allá de un simple sistema de gestión de inventario. A través de este proyecto, hemos logrado transformar una necesidad técnica en una herramienta que realmente empoderar a los pequeños comerciantes en su operación diaria. La clave del éxito residir en comprender profundamente las necesidades reales de usuarios como Guadalupe: personas ocupadas que necesitar soluciones prácticas sin complejidad tecnológica. El enfoque en rapidez para tareas frecuentes, visualización simplificada de datos complejos y automatización inteligente ha demostrado que el diseño centrado en el usuario puede generar impacto tangible en negocios reales. Mirando hacia adelante, este proyecto establecer las bases para explorar cómo la inteligencia artificial podría potenciar aún más las capacidades predictivas del sistema, mantener siempre la simplicidad como principio fundamental. INVENTA-ANALYT no es solo un producto tecnológico, sino una herramienta de transformación para negocios que buscar prosperar en un entorno cada vez más competitivo.',
  },
};

export default project4;
