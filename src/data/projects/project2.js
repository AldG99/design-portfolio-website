const project2 = {
  id: 2,
  title: 'Cell-AR',

  // Propiedades faltantes sin valores
  shortDescription: '',
  description:
    'Siguiendo el marco de UCD (User-Centered Design), diseñé un prototipo de alta fidelidad para una aplicación móvil educativa que utiliza realidad aumentada para transformar el aprendizaje de biología celular a nivel media superior y superior. Cell-AR permite a estudiantes de preparatoria y universidad visualizar, explorar e interactuar con modelos 3D de células eucariotas, procariotas, vegetales y animales directamente desde sus dispositivos móviles, convirtiendo cualquier superficie en un laboratorio de biología avanzado y accesible.',
  thumbnail: '/assets/images/projects/project2/thumbnail.png',
  date: 'Febrero - Mayo 2024',
  dateRaw: '2024-05-22',
  tools: ['Figma', 'Blender', 'Unity'],

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
    'La educación tradicional en biología brinda teoría, pero no facilita la visualización 3D de estructuras celulares, lo que dificulta la comprensión de procesos avanzados. Los estudiantes dependen de diagramas estáticos y microscopios limitados, y muchas instituciones carecen de equipos modernos para prácticas adecuadas.',
  goal: 'Diseñé un MVP de una aplicación educativa de realidad aumentada llamada Cell-AR, que convierte smartphones en herramientas para explorar células y organelos con detalle molecular. Esta app ofrece a estudiantes de preparatoria y universidad una experiencia inmersiva que mejora significativamente su comprensión y retención de procesos celulares complejos, preparándolos mejor para carreras en ciencias de la vida, medicina y biotecnología.',
  role: 'Participé en todo el proceso de diseño centrado en el usuario, desde la conceptualización hasta el prototipo final. Realicé investigación con estudiantes y profesores, guié la ideación y el prototipado iterativo aplicando design thinking, y validé la experiencia con pruebas de usabilidad.',
  responsibilities: [
    'Diseño de tareas específicas que evalúan comprensión de interfaz AR, efectividad de herramientas de aprendizaje y satisfacción general del usuario.',
    'Desarrollo de wireframes de baja y alta fidelidad utilizando Figma.',
    'Modelado 3D científicamente preciso de células eucariotas, procariotas, vegetales y animales utilizando Blender para crear assets optimizados para experiencias AR móviles.',
    'Optimización de geometría y texturas para mantener alta calidad visual mientras se asegura rendimiento fluido en dispositivos móviles de gama media.',
  ],

  research: {
    summary:
      'Se realizó una investigación cuantitativa mediante encuestas dirigidas a estudiantes y profesores para comprender las necesidades en el aprendizaje de biología celular. El objetivo fue identificar dificultades en la comprensión de estructuras celulares, evaluar la efectividad de los métodos tradicionales, medir la apertura hacia el uso de realidad aumentada en educación y validar el interés en una solución AR accesible y de alta calidad.',
    researchImage: '/assets/images/projects/project2/research.png',
    keyIssues: [
      'Dificultad significativa para visualizar estructuras celulares en tres dimensiones, lo que impide la comprensión espacial de organelos y sus relaciones internas.',
      'La carencia de herramientas efectivas para comprender escalas y proporciones microscópicas, generando confusión sobre los tamaños relativos de células y organelos.',
      'Dificultad para retener y organizar información sobre funciones específicas de organelos, evidenciando un enfoque memorístico sin comprensión conceptual profunda.',
    ],
  },

  competitors: [
    {
      name: 'Complete HeartX',
      description:
        'Aplicación de realidad aumentada desarrollada por Stanford Medicine que permite a usuarios explorar un corazón humano completo en 3D. Utiliza modelos anatómicos detallados para enseñar estructura cardíaca, función y patologías comunes. Los usuarios pueden manipular el modelo, activar animaciones de bombeo y explorar diferentes capas del órgano.',
      strengths: [
        'Modelos 3D extremadamente detallados y científicamente precisos validados por Stanford Medicine',
        'Animaciones fluidas que muestran función cardíaca en tiempo real',
        'Interface intuitiva con gestos AR naturales para rotación y zoom',
        'Contenido respaldado por institución médica prestigiosa',
      ],
      weaknesses: [
        'Enfoque limitado únicamente al sistema cardiovascular',
        'Falta de funciones de evaluación o seguimiento de progreso',
      ],
      targetAudience:
        'Estudiantes de medicina, enfermería y profesionales de la salud (18-35 años). Principalmente usuarios de instituciones con presupuesto para apps educativas premium.',
      competitiveImage: [
        '/assets/images/projects/project2/competitor/competitor1.png',
      ],
    },
    {
      name: 'Bacteria 3D AR',
      description:
        'Aplicación de realidad aumentada especializada en microbiología que permite visualizar diferentes tipos de bacterias y microorganismos en 3D. Los usuarios pueden explorar estructuras procariotas, observar procesos como división celular bacteriana y comparar morfologías de diferentes especies microbianas mediante modelos AR interactivos colocados en superficies reales.',
      strengths: [
        'Modelos AR específicos de células procariotas con precisión microbiológica',
        'Visualización de procesos únicos como conjugación bacteriana y esporulación',
        'Información contextualizada sobre patogenicidad y aplicaciones biotecnológicas',
      ],
      weaknesses: [
        'Limitado exclusivamente a microorganismos procariotas sin células eucariotas',
        'Interface técnica que requiere conocimiento previo de microbiología',
        'Contenido científico avanzado que puede resultar abrumador para estudiantes introductorios',
      ],
      targetAudience:
        'Estudiantes universitarios de microbiología, biotecnología y ciencias biomédicas (20-26 años). Investigadores y profesionales especializados en microbiología clínica e industrial.',
      competitiveImage: [
        '/assets/images/projects/project2/competitor/competitor2.png',
      ],
    },
    {
      name: 'Cell & Cell Structure 3D',
      description:
        'Aplicación educativa 3D enfocada específicamente en la visualización de células y organelos celulares. Permite explorar modelos detallados de células eucariotas y procariotas, con funciones de zoom para examinar estructuras subcelulares como núcleo, mitocondrias, ribosomas y retículo endoplásmico. Incluye información textual sobre función de cada organelo y comparaciones entre tipos celulares.',
      strengths: [
        'Enfoque específico en biología celular con modelos dedicados de organelos',
        'Comparación directa entre células eucariotas y procariotas en una misma plataforma',
        'Información científica básica integrada sobre función de cada estructura celular',
        'Interface simplificada diseñada para estudiantes de nivel medio y superior',
      ],
      weaknesses: [
        'Modelos 3D estáticos sin capacidades de realidad aumentada',
        'Gráficos de calidad básica que no aprovechan tecnología móvil moderna',
      ],
      targetAudience:
        'Estudiantes de biología de nivel medio superior y primeros años universitarios (15-20 años). Educadores buscando herramientas visuales básicas para complementar enseñanza tradicional.',
      competitiveImage: [
        '/assets/images/projects/project2/competitor/competitor3.png',
      ],
    },
  ],

  userProfiles: [
    {
      problemStatement:
        'Sofía es una estudiante apasionada por las ciencias biológicas. Desde secundaria mostró interés por la biología, especialmente después de una clase sobre células donde pudo usar un microscopio por primera vez. Actualmente cursa materias como Biología Celular y Molecular, Bioquímica y Genética.',
      problemStatementImage:
        '/assets/images/projects/project2/persona/persona1.png',
    },
  ],

  userEmpathyMap: {
    userEmpathyMapImage:
      '/assets/images/projects/project2/empathy/empathy1.png',
  },

  userJourneyMap: [
    {
      userJourneyMapPersona: 'Michelle Hernández',
      userJourneyMap:
        'Estudiante destacada de 4to semestre - trabajando medio tiempo en laboratorio clínico, buscando recursos tecnológicos innovadores para dominar biología celular.',
      userJourneyMapImage: '/assets/images/projects/project2/map/map1.jpg',
    },
  ],

  informationArchitecture: {
    sitemap: {
      sitemapImage: '/assets/images/projects/project2/sitemap.svg',
    },
    userFlow: {
      userFlowImage: '/assets/images/projects/project2/userflow.svg',
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

export default project2;
