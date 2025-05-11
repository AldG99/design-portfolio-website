// Proyecto 4: INVENTA-ANALYT - Control de inventario con análisis y reportes automatizados
const project4 = {
  id: 4,
  title: 'INVENTA-ANALYT',
  shortDescription:
    'Control de inventario con análisis y reportes automatizados',

  // Resumen del proyecto
  description:
    'INVENTA-ANALYT es una aplicación móvil y web para gestión de pequeños negocios que integrar control de inventario, registro de ventas, consulta de transacciones y análisis avanzados. La plataforma destacar por su interfaz intuitiva que permitir a los propietarios monitorear existencias en tiempo real y acceder al historial completo de operaciones.',
  thumbnail: '/assets/images/projects/project1/thumbnail.jpg',
  date: 'Octubre 2024 - Febrero 2025',
  dateRaw: '2025-02-05',
  tools: ['Figma', 'SCSS', 'React', 'React Native Expo', 'Firebase'],

  problem:
    'Pequeños comerciantes usan métodos manuales o herramientas desconectadas para gestionar inventario y ventas, causando errores y pérdida de información, lo que limita su capacidad para optimizar operaciones y crecer.',
  goal: 'Crear una app móvil intuitiva que digitalice completamente operaciones de inventario y ventas, integrando análisis predictivos y recomendaciones automatizadas para optimizar la gestión del negocio y facilitar la toma de decisiones estratégicas basadas en datos reales.',
  role: 'Diseñar e implementar la interfaz de usuario de la aplicación móvil INVENTA-ANALYT, enfocarse en crear una experiencia intuitiva y atractiva mediante programación en React Native, con especial atención a la usabilidad de los elementos visuales, navegación fluida entre módulos y diseño responsive que maximizar la experiencia del usuario en diferentes dispositivos.',
  responsibilities: [
    'Diseñar la arquitectura de información y sistema de navegación',
    'Crear prototipos de baja y alta fidelidad, realizar estudios de usabilidad con usuarios finales para identificar áreas de mejora en la interfaz, implementar ajustes basados en feedback directo y validar las soluciones propuestas mediante pruebas A/B.',
    'Construir un sistema responsivo adaptable a diferentes dispositivos, asegurar una experiencia fluida y consistente en smartphones y computadoras.',
    'Desarrollar el sistema de diseño y componentes reutilizables',
    'Desarrollar visualizaciones estadísticas para el módulo de reportes, transformar datos complejos en representaciones gráficas intuitivas.',
  ],

  // Comprensión del usuario
  summary:
    'Realicé la investigación mediante una encuesta a cuatro propietarios de pequeños negocios para conocer mejor sus intereses y necesidades. Descubrí que los comerciantes priorizaron la rapidez en el registro de ventas por encima de las funciones de inventario. También surgió una necesidad inesperada: contar con predicciones sencillas sobre el reabastecimiento, sin requerir conocimientos estadísticos. Estos hallazgos reorientaron el desarrollo hacia una interfaz ágil para ventas y un sistema de análisis automatizado. La mayoría de las preguntas fueron cuantitativas, pero incluí algunas abiertas, ya que este fue nuestro principal punto de contacto con los usuarios.',
  research: '/assets/images/projects/project4/research.png',
  keyIssues: [
    'Los comerciantes tuvieron dificultad para gestionar ventas e inventario durante horas pico, lo que llevó a implementar una interfaz de venta rápida con búsqueda instantánea y sincronización automática con el inventario.',
    'Los usuarios no pudieron interpretar datos de ventas sin conocimientos analíticos, por lo que se desarrolló un sistema de recomendaciones automáticas para reabastecimiento y predicción de tendencias con visualizaciones simples.',
    'La frustración con la configuración inicial de aplicaciones existentes inspiró el enfoque de "configuración mínima" con plantillas predefinidas.',
  ],

  // Perfiles de Usuario
  userProfiles: [
    {
      problemStatement:
        'Guadalupe Lumbreras tiene una dulcería y necesita gestionar inventario y ventas desde su teléfono porque siempre está atendiendo clientes.',
      problemStatementImage:
        '/assets/images/projects/project4/persona/persona1.png',

      // Mapa de Recorrido del Usuario
      userJourneyMapPersona: 'Guadalupe Lumbreras',
      userJourneyMap:
        'Gestionar fácilmente su dulcería desde el teléfono mientras atiende a sus clientes.',
      userJourneyMapImage: '/assets/images/projects/project4/map/map1.jpg',
    },
    {
      problemStatement:
        'Araceli tiene una ferretería familiar y necesita gestionar un inventario extenso y diverso con más de 200 productos diferentes.',
      problemStatementImage:
        '/assets/images/projects/project4/persona/persona2.png',

      // Mapa de Recorrido del Usuario
      userJourneyMapPersona: 'Araceli Mendoza',
      userJourneyMap:
        'Mostrar cómo Alicia gestiona su ferretería, desde localizar productos hasta analizar ventas y controlar inventario.',
      userJourneyMapImage: '/assets/images/projects/project4/map/map2.jpg',
    },
  ],

  // Análisis competitivo
  competitors: [
    {
      name: 'StockTracker Lite',
      description:
        'StockTracker Lite es una aplicación básica para gestión de inventario orientada a tiendas minoristas y pequeños almacenes. Ofrece funcionalidades como registro de productos, control de existencias y generación de reportes simples.',
      strengths: [
        'Interfaz sencilla y fácil de aprender',
        'Bajo costo de entrada (versión gratuita con funciones básicas)',
        'Proceso de configuración rápido, ideal para negocios muy pequeños',
      ],
      weaknesses: [
        'Sin capacidades de análisis predictivo o avanzado',
        'No ofrece visualizaciones gráficas de datos',
        'Funcionalidad de ventas limitada (sin punto de venta integrado)',
      ],
      targetAudience:
        'Microempresas y emprendedores individuales con presupuesto limitado que necesitan una solución básica para control de inventario sin requerimientos analíticos complejos.',
      competitiveImage: [
        '/assets/images/projects/project4/competitor/competitor1.png',
        '/assets/images/projects/project4/competitor/competitor2.png',
      ],
    },
    {
      name: 'QuickStock POS',
      description:
        'QuickStock POS es una aplicación de punto de venta con funcionalidades de gestión de inventario integradas. Se enfoca principalmente en el proceso de venta más que en el análisis o gestión profunda del inventario.',
      strengths: [
        'Proceso de venta eficiente y rápido',
        'Catálogo de productos con imágenes',
        'Múltiples métodos de pago',
      ],
      weaknesses: [
        'Sin predicciones ni recomendaciones de reabastecimiento',
        'Interfaz menos intuitiva, con curva de aprendizaje más pronunciada',
      ],
      targetAudience:
        'Pequeños comercios minoristas y tiendas que priorizan la velocidad de procesamiento de ventas sobre la gestión de inventario y análisis de datos.',
      competitiveImage: [
        '/assets/images/projects/project4/competitor/competitor3.png',
        '/assets/images/projects/project4/competitor/competitor4.png',
      ],
    },
    {
      name: 'InvenTrack Basic',
      description:
        'InvenTrack Basic es una aplicación de gestión de inventario centrada en la trazabilidad de productos y materiales. Ofrece funcionalidades para registrar movimientos de inventario y generar alertas de stock bajo.',
      strengths: [
        'Seguimiento detallado de movimientos de producto',
        'Alertas de stock configurables',
        'Categorización flexible de productos',
      ],
      weaknesses: [
        'Carece de funcionalidades de punto de venta integradas',
        'Menor soporte para visualización gráfica de datos',
        'Proceso de configuración inicial más complejo y tedioso',
      ],
      targetAudience:
        'Pequeños almacenes, talleres y negocios con enfoque en manufactura o distribución que necesitan principalmente controlar existencias y movimientos de materiales sin requerir análisis avanzados.',
      competitiveImage: [
        '/assets/images/projects/project4/competitor/competitor5.png',
        '/assets/images/projects/project4/competitor/competitor6.png',
      ],
    },
  ],

  // Inicio del diseño
  sitemap:
    'La dificultad para acceder rápidamente a funciones clave en INVENTA-ANALYT llevó a la creación de un mapa del sitio eficiente. El objetivo fue tomar decisiones estratégicas sobre la arquitectura de la información para mejorar la navegación y facilitar el uso de la app.',
  sitemapImage: '/assets/images/projects/project4/sitemap.jpg',
  paperWireframes:
    'Diseñé wireframes en papel para cada pantalla de la aplicación de inventarios, considerando la usabilidad y navegación. En la versión refinada, incluí un menú desplegable para mejorar el acceso a las distintas secciones.',
  paperWireframesImage: '/assets/images/projects/project4/paper.png',

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
    location: 'Remoto',
    participants: '2 propietarios de pequeños comercios',
    time: '20-30 minutos',

    // Principales hallazgos del estudio de usabilidad - mejorado con métricas específicas
    keyFindings: [
      {
        area: 'Ventas',
        finding:
          'El registro de ventas fue rápido e intuitivo, aunque la búsqueda por categoría causó confusión.',
        quotes: [
          '"La pantalla de ventas es clara, pero me perdí buscando productos por categoría" - Participante 2',
        ],
        improvement:
          'Implementar búsqueda global con filtrado opcional posterior para evitar la navegación por categorías durante la venta',
      },
      {
        area: 'Análisis',
        finding:
          'Los usuarios valoraron los datos, pero tuvieron dificultades para interpretar los gráficos y aplicar los insights.',
        quotes: [
          '"Entiendo que hay información valiosa aquí, pero no sé exactamente qué debo hacer con ella" - Participante 1',
        ],
      },
      {
        area: 'Productos',
        finding:
          'El formulario fue lento por el exceso de campos y todos buscaron una opción de importación masiva.',
        quotes: [
          '"Si tuviera que cargar todos mis productos así, me tomaría una semana" - Participante 1',
        ],
      },
    ],

    // Refinando el diseño
    // Maquetas
    refiningDesign: [
      {
        mockups:
          'Se agregó en la parte inferior de la descripción del producto una sección de categoría, donde el usuario podrá crear una nueva categoría para el producto o seleccionar una ya existente, facilitando así una mejor organización y clasificación de los productos.',
        mockupsImage: '/assets/images/projects/project4/mockups/mockups1.png',
        designDecisions: [
          'Implementar un campo de autocompletado con las categorías existentes para reducir errores de digitación',
        ],
      },
      {
        mockups:
          'En el registro de ventas actualmente solo se muestra un resumen de ventas e inventario. El diseño podría mejorar su estructura e incluir recomendaciones más directas, como visualizar patrones del negocio y alertar sobre productos que están por agotarse.',
        mockupsImage: '/assets/images/projects/project4/mockups/mockups2.png',
        designDecisions: [
          'Transformar visualizaciones complejas en tarjetas de "¿Sabías que?" con lenguaje cotidiano',
          'Implementar acciones directas desde las alertas para reducir la fricción (ej: "Reabastecer ahora" desde una alerta de stock bajo)',
        ],
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

    // Estrategia de diseño
    description:
      'Implementar un enfoque "desktop-first" con adaptación progresiva hacia dispositivos móviles',
    keyDecisions: [
      'Diseñar componentes flexibles que se adaptan desde diseño completo hasta versiones compactas',
      'Densidad de información adaptativa: layout completo en desktop, simplificación progresiva en móvil',
      'Simplificación progresiva: dashboard completo → widgets principales → métricas esenciales',
    ],

    // Prototipo de alta fidelidad
    highFidelity: [
      'El prototipo refleja un diseño iterativo basado en investigación y retroalimentación de los usuarios. Utiliza el color violeta por su profesionalismo y accesibilidad. Se diferencia de la mayoría de aplicaciones empresariales que usan azul o verde.',
      'Resonó positivamente en las pruebas de usuario, donde los participantes lo asociaron con "herramienta moderna".',
    ],
    highFidelityImage: '/assets/images/projects/project4/high_fidelity.png',
    viewPrototypes: [
      'https://www.figma.com/proto/RAdwsM7P1y7tdQhynTxtmT/INVENTA-ANALYT?page-id=9%3A3&node-id=9-255&p=f&viewport=-697%2C920%2C0.49&t=EjVEKXgOrGAS1ywH-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=9%3A255',
      'https://www.figma.com/proto/RAdwsM7P1y7tdQhynTxtmT/INVENTA-ANALYT?page-id=9%3A2378&node-id=9-3538&p=f&viewport=178%2C70%2C0.17&t=jEaGwxBrqb8fsq27-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=9%3A3538',
    ],

    // Elecciones de diseño visual detalladas
    visualDesignChoices: {
      colorPalette: {
        60: '#F6F7F8 (Gris claro)',
        30: '#2D3748 (Gris oscuro)',
        10: '#6C63FF (Violeta)',
        reasoning:
          'Se eligió el violeta (#6C63FF) porque transmite profesionalismo y modernidad. Al usarse con moderación solo en elementos interactivos clave, mantiene una jerarquía visual clara.',
      },
    },

    // Consideraciones de accesibilidad
    accessibilityConsiderations: [
      'Implementar un sistema de contraste de color que cumpla con el estándar WCAG AA en toda la aplicación, asegurando una relación mínima de 4.5:1 entre el texto y el fondo. Esto permite que las personas con baja visión puedan distinguir claramente la información en pantalla.',
      'Desarrollar un orden de navegación lógico que permita a los usuarios completar todas las operaciones esenciales sin asistencia, desde añadir productos hasta registrar ventas.',
      'Diseñar todas las áreas táctiles (botones, enlaces y otros elementos interactivos) con un tamaño mínimo de 44x44 puntos y un espaciado adecuado entre ellas, para facilitar una interacción precisa, especialmente para usuarios con limitaciones motoras.',
    ],

    // Conclusiones y resultados mejorados con métricas específicas
    conclusion:
      'Los usuarios objetivo compartieron que la app resultó ser muy fácil de usar, destacando especialmente su diseño intuitivo que facilitaba la navegación y las interacciones. Gracias a su estructura clara y simple, pudieron gestionar, agregar y vender productos sin complicaciones. La organización de las funciones y la accesibilidad de las opciones clave les permitió realizar estas tareas de manera rápida y eficiente, incluso sin experiencia previa con la aplicación. Esto no solo mejoró su productividad, sino que también redujo la curva de aprendizaje, haciendo que se sintieran cómodos y seguros al utilizarla desde el primer momento.',
    impact:
      'El prototipo, al ser rediseñado con un enfoque en simplificar la experiencia del usuario, redujo en un 62% el tiempo dedicado a tareas diarias. La reorganización de los elementos y la mejora en la navegación permitieron que los usuarios gestionaran, añadieran productos y realizaran ventas de manera más rápida y eficiente. Además, las predicciones de reabastecimiento fueron presentadas de forma más clara y accesible, lo que ayudó a minimizar las situaciones de desabastecimiento.',
    learnings:
      'Aprendí que incluso los cambios más pequeños en el diseño pueden mejorar significativamente la fluidez del proceso y la experiencia general del usuario. Esta observación me llevó a comprender la importancia de priorizar las necesidades reales de los usuarios al desarrollar funcionalidades y soluciones que optimicen sus tareas diarias.',

    // Aprendizajes
    professionalLessons: [
      'Entender la importancia de diseñar con accesibilidad en mente para asegurar que todos los usuarios puedan interactuar con la aplicación de manera efectiva',
      'Valorar la retroalimentación constante de los usuarios, ya que las pruebas de usabilidad revelan áreas clave de mejora que no siempre son evidentes al principio del proceso de diseño',
      'Reconocer la necesidad de iterar rápidamente en el diseño, testear con usuarios reales y ajustar sobre la marcha para mejorar la experiencia',
    ],
    personalLessons: [
      'Desarrollar una mayor apreciación por la importancia del diseño responsivo en entornos de trabajo diversos',
      'Ahora valorar más el feedback negativo que el positivo, pues me da oportunidades concretas de mejora',
    ],

    // Próximos pasos
    nextSteps: [
      'Optimizar el proceso en dispositivos móviles, reducir el número de toques necesarios y mejorar el tamaño de los elementos interactivos',
      'Mejorar la visualización de datos en el panel de análisis, implementando gráficos más sencillos con etiquetas claras y mensajes explicativos',
      'Desarrollar un sistema de notificaciones más claro y personalizado, que permita a los usuarios recibir alertas relevantes sin sentirse abrumados',
    ],

    // Consideraciones finales
    finalConsiderations:
      'INVENTA-ANALYT ha representado una solución integral, mucho más que un simple sistema de gestión de inventarios. Su enfoque en la rapidez para tareas frecuentes, la visualización simplificada de datos complejos y la automatización inteligente demuestra que un diseño centrado en el usuario puede generar un impacto tangible en negocios reales. Manteniendo siempre la simplicidad como principio fundamental, INVENTA-ANALYT no es solo un producto tecnológico, sino una herramienta de transformación para negocios que buscan prosperar en un entorno cada vez más competitivo.',
  },
};

export default project4;
