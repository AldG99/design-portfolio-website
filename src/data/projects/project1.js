// Proyecto 1: Mikky Jump - Videojuego de plataforma 2D
const project1 = {
  id: 1,
  title: 'Mikky Jump',
  shortDescription:
    'Videojuego de plataforma 2D con estilo pixel art, mecánicas de juego fluidas y niveles desafiantes para entusiastas del género.',
  description:
    'Mikky Jump es un videojuego de plataformas 2D estilo pixel art que combina mecánicas de juego clásicas con elementos modernos. Desarrollado con Unity, ofrece una experiencia de juego fluida y desafiante a través de 24 niveles distribuidos en 4 mundos temáticos únicos.',
  thumbnail: '/assets/images/projects/project1/thumbnail.jpg',
  images: [
    '/assets/images/projects/project1/detail1.jpg',
    '/assets/images/projects/project1/detail2.jpg',
    '/assets/images/projects/project1/detail3.jpg',
    '/assets/images/projects/project1/mobile1.jpg',
    '/assets/images/projects/project1/mobile2.jpg',
  ],
  date: 'Junio 2021 - Febrero 2022',
  dateRaw: '2022-04-01', // Formato para ordenar cronológicamente
  tools: ['Unity', 'C#', 'Pixel Art', 'Blender', 'Audacity'],
  teamRole: 'Game Designer & Developer',
  objective:
    'Crear un videojuego de plataformas 2D con controles precisos, diseño de niveles desafiante y progresivo, y una estética visual cohesiva que atraiga tanto a jugadores casuales como a entusiastas del género.',
  research:
    'Se realizaron pruebas con jugadores de diferentes niveles de experiencia, analizando patrones de juego, puntos de frustración y momentos de satisfacción para calibrar la dificultad y mejorar la experiencia general.',
  users:
    'Jugadores de 12 a 35 años, con experiencia previa en juegos de plataformas, que buscan desafíos progresivos y valor de rejugabilidad.',
  designArchitecture:
    'El juego se estructuró en cuatro mundos temáticos distintos con seis niveles cada uno. Cada mundo introduce nuevas mecánicas y enemigos, aumentando gradualmente la dificultad. Se implementó un sistema de guardado automático y puntos de control estratégicos.',
  wireframes:
    'Se desarrollaron bocetos de los niveles en papel, seguidos de prototipos jugables con gráficos básicos para probar las mecánicas y el flujo de juego antes de implementar el arte final.',
  userTesting:
    'Se realizaron sesiones semanales de playtesting con 15 jugadores diferentes durante todo el desarrollo, ajustando la dificultad, respuesta de controles y diseño de niveles según la retroalimentación recibida.',
  prototypes:
    'Se crearon varios prototipos jugables, iterando sobre las mecánicas principales, la física de salto y las colisiones. Se experimentó con diferentes poderes y habilidades antes de seleccionar las óptimas para la experiencia final.',
  finalDesigns:
    'El arte final implementa un estilo pixel art colorido y detallado, con animaciones fluidas para el personaje principal y los enemigos. Cada mundo tiene una paleta de colores distintiva y elementos ambientales únicos.',
  results:
    'El juego alcanzó más de 50,000 descargas en su primer mes, con una puntuación promedio de 4.7/5 en tiendas digitales. Los jugadores destacaron la precisión de los controles y el diseño de niveles como sus aspectos más fuertes.',
  conclusion:
    'Mikky Jump demostró que un juego de plataformas bien ejecutado sigue siendo atractivo en el mercado actual. Las mecánicas pulidas y un diseño de niveles cuidadoso fueron clave para su recepción positiva.',
  impact:
    'El juego sentó las bases para una posible secuela y estableció una pequeña comunidad de jugadores dedicados que comparten trucos, speedruns y creaciones de fan art.',
  learnings:
    'La importancia del playtesting continuo, la iteración constante de las mecánicas y el equilibrio entre desafío y accesibilidad en el diseño de niveles.',
  url: 'https://mikky-jump.ejemplo.com',
  featured: true,

  // Campos específicos para videojuego
  gameDesign: {
    genre: 'Plataformas 2D',
    mechanics: 'Salto, doble salto, dash, coleccionables, enemigos, trampas',
    levels: '24 niveles distribuidos en 4 mundos temáticos',
    progression:
      'Dificultad progresiva, nuevas mecánicas introducidas gradualmente',
    artStyle: 'Pixel art de 16-bit con paletas de colores vibrantes por mundo',
  },

  // Análisis competitivo específico
  competitors: [
    {
      name: 'Super Platformer X',
      description:
        'Juego de gran éxito comercial con mecánicas similares pero mayor presupuesto. Destacaba por su diseño de niveles y sistema de progresión.',
    },
    {
      name: 'Indie Jump',
      description:
        'Título independiente con enfoque artístico único y comunidad de nicho leal. Implementaba mecánicas experimentales que expandían el género.',
    },
    {
      name: 'Classic Runner Mobile',
      description:
        'Adaptación móvil de un clásico que dominaba las descargas en tiendas de aplicaciones. Su monetización se basaba en micropagos cosméticos.',
    },
  ],

  // Metas específicas
  goals: [
    'Crear una experiencia de juego divertida y desafiante',
    'Desarrollar mecánicas de juego intuitivas',
    'Diseñar niveles progresivamente más complejos',
    'Implementar un sistema de puntuación atractivo',
    'Lograr una estética visual cohesiva y atractiva',
  ],

  // Hallazgos de investigación
  researchFindings: [
    'Los jugadores priorizaban la respuesta de los controles por encima de los gráficos',
    'Preferencia por niveles cortos que pudieran completarse en sesiones de 3-5 minutos',
    'La curva de dificultad debía ser gradual pero constante para mantener el interés',
    'Los sistemas de coleccionables y logros eran altamente valorados',
  ],

  // Lecciones aprendidas
  professionalLessons: [
    'La iteración constante basada en feedback real es crucial para pulir las mecánicas de juego',
    'Un buen diseño de niveles puede compensar limitaciones técnicas o presupuestarias',
    'La consistencia en controles y física del juego es fundamental para la experiencia del jugador',
    'Las sesiones cortas de testing frecuente son más efectivas que pocas sesiones largas',
  ],

  personalLessons: [
    'Aprendí a recibir críticas constructivas sin tomarlas personalmente',
    'Desarrollé mayor paciencia para iterar repetidamente sobre el mismo elemento hasta perfeccionarlo',
    'Descubrí la importancia de jugar otros títulos del género como investigación continua',
  ],

  // Consideraciones finales
  finalConsiderations:
    'El desarrollo de Mikky Jump demostró que incluso con un equipo pequeño y presupuesto limitado, es posible crear una experiencia de juego pulida y atractiva cuando se prioriza la jugabilidad y se mantiene un enfoque iterativo basado en feedback constante. Este proyecto estableció metodologías de trabajo que seguimos utilizando en desarrollos posteriores.',
};

export default project1;
