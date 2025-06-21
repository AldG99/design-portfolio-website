const project2 = {
  id: 2,
  title: 'Cell-AR',

  shortDescription:
    'Diseño de aplicación móvil educativa con realidad aumentada que digitaliza el aprendizaje de biología celular, integrando visualización 3D interactiva y exploración de modelos celulares.',
  description:
    'Siguiendo el marco de UCD (User-Centered Design), diseñé un prototipo de alta fidelidad para una aplicación móvil educativa que utiliza realidad aumentada para transformar el aprendizaje de biología celular a nivel media superior y superior. Cell-AR permite a estudiantes de preparatoria y universidad visualizar, explorar e interactuar con modelos 3D de células eucariotas, procariotas, vegetales y animales directamente desde sus dispositivos móviles, convirtiendo cualquier superficie en un laboratorio de biología avanzado y accesible.',
  thumbnail: '/assets/images/projects/project2/thumbnail.png',
  date: 'Febrero - Mayo 2024',
  dateRaw: '2024-05-22',
  tools: ['Figma', 'Blender', 'Unity'],

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
      paperWireframesImage: [
        '/assets/images/projects/project2/paper/paper1.png',
      ],
      refinedWireframesImage: '',
    },
    digitalWireframes: {
      digitalWireframesImage: '/assets/images/projects/project2/wireframes.png',
      sizeVariationsImage: [],
      deviceVariationsImage: [],
    },
  },

  prototyping: {
    lowFidelity: {
      description:
        'Crear un prototipo de baja fidelidad permite validar rápidamente los conceptos educativos fundamentales e iterar sobre la experiencia de usuario sin invertir tiempo en elementos visuales complejos. Solo después de confirmar que la estructura y los flujos funcionan correctamente, tiene sentido crear el prototipo de alta fidelidad con modelos 3D detallados.',
      prototypeImage: '/assets/images/projects/project2/prototype.png',
      prototypeUrl:
        'https://www.figma.com/proto/jB0EVKQ5uoIbvAaQy1PAx3/Cell-App?page-id=0%3A1&node-id=115-690&p=f&viewport=-1435%2C-240%2C0.19&t=ZqeIroaqav6sLgn4-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=115%3A690',
    },
  },

  usabilityStudy: {
    parameters: {
      type: 'Estudio de usabilidad sin moderación',
      location: 'Remoto',
      participants: '6 Estudiantes universitarios (19-22 años)',
      time: '20-25 minutos por participante',
    },
    keyFindings: [
      {
        area: 'Interfaz y Navegación General',
        finding:
          'La interfaz es limpia e intuitiva, pero algunos elementos necesitan mayor claridad visual',
        quotes: [
          'P01: "La pantalla principal está muy bien organizada, encuentro todo fácilmente. Los iconos son claros y el menú principal no está saturado."',
          'P03: "La barra de navegación inferior está muy bien, pero me gustaría que incluyera los nombres de las secciones."',
        ],
      },
      {
        area: 'Navegación entre Tipos Celulares',
        finding:
          'La transición entre células eucariotas y procariotas es valorada, pero falta comparación directa',
        quotes: [
          'P05: "La información sobre cada organelo está bien organizada, pero cuando cambio de célula prokariota a eukariota pierdo el contexto de lo que estaba viendo antes."',
        ],
      },
    ],
    refiningDesign: [
      {
        mockups:
          'Se identificaron oportunidades clave para mejorar la experiencia del usuario. Los usuarios valoraron la interfaz limpia, pero expresaron necesidad de mayor contextualización de la información celular y mejor organización de los componentes educativos. La pérdida de contexto al cambiar entre tipos celulares y la falta de información persistente sobre organelos fueron los puntos más críticos a resolver.',
        mockupsImage: '/assets/images/projects/project2/mockups/mockups1.png',
        designDecisions: [
          'Implementar un panel fijo que mantenga visible la información del organelo seleccionado.',
          'Implementar etiquetas flotantes con información instantánea de cada componente celular sin interrumpir la exploración.',
          'Agregar títulos a los iconos de navegación para que los usuarios comprendan inmediatamente la función de cada sección.',
        ],
      },
    ],
  },

  visualDesign: {
    responsiveDesign: {
      strategy:
        'Cell-AR es más efectiva en móviles por su accesibilidad, portabilidad y compatibilidad nativa con AR. Aprovecha los smartphones que ya poseen los estudiantes, evita equipos costosos y permite una experiencia educativa inmersiva e intuitiva, democratizando el acceso a tecnologías avanzadas sin necesidad de hardware adicional.',
      keyDecisions: [
        'Los estudiantes pueden acceder en cualquier momento, usando solo su smartphone, sin requerir equipos especiales.',
        'Cada estudiante puede explorar los modelos celulares a su ritmo, repitiendo visualizaciones y adaptando la experiencia a su estilo de aprendizaje.',
        'La pantalla táctil permite manipular estructuras celulares con gestos familiares, facilitando la comprensión de conceptos complejos como organelos y procesos celulares.',
      ],
      screenExamples: '',
      screenSizeVariationsImage: [],
      originalScreenSize: '/assets/images/projects/project2/screen.png',
    },
    highFidelity: {
      description: [
        'El prototipo de alta fidelidad de Cell-AR se creó para validar la experiencia visual completa, permitiendo evaluar la claridad de etiquetas, usabilidad de controles, legibilidad y coherencia visual. Además, sirve como herramienta clave para comunicar el potencial de la aplicación a desarrolladores y educadores antes del desarrollo final.',
      ],
      highFidelityImage: '/assets/images/projects/project2/high_fidelity.png',
      viewPrototypes: [
        'https://www.figma.com/proto/jB0EVKQ5uoIbvAaQy1PAx3/Cell-App?page-id=115%3A2&node-id=115-9&p=f&viewport=491%2C415%2C0.2&t=zaOIqY0vvWiuLmAz-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=115%3A9',
      ],
    },
    accessibility: {
      considerations: [
        'Seleccioné fuentes legibles, como Roboto, con un tamaño mínimo de 16sp para asegurar una lectura cómoda y accesible en todo tipo de dispositivos.',
        'Mantuve un buen espaciado entre líneas para facilitar la lectura, evitando que el texto se vea saturado y mejorando la claridad visual del contenido.',
        'Usé una jerarquía tipográfica clara para organizar la información, diferenciando títulos, subtítulos y texto principal mediante tamaños.',
      ],
    },
  },

  conclusion: {
    summary:
      'Cell-AR demostró ser una solución efectiva para transformar el aprendizaje de biología celular con realidad aumentada. El prototipo de alta fidelidad validó la viabilidad de ofrecer experiencias inmersivas y accesibles desde smartphones. El diseño centrado en el usuario permitió abordar necesidades clave como la comprensión de escalas y relaciones espaciales entre organelos, manteniendo una experiencia intuitiva.',
    impact:
      'Cell-AR su potencial enseñanza de la biología celular, mejorando la comprensión de los estudiantes mediante visualización en realidad aumentada. Integrarse eficazmente en los planes de estudio y abrir nuevas posibilidades para la enseñanza de contenidos científicos complejos mediante tecnologías inmersivas.',
    learnings:
      'En el desarrollo de Cell-AR comprendí que una aplicación educativa en realidad aumentada depende de un diseño sencillo, accesible y centrado en el usuario, que priorice la usabilidad y el feedback claro por encima de efectos visuales complejos. Además, es posible ofrecer una experiencia de calidad en dispositivos de gama media si se realiza una planificación estratégica desde el inicio, lo que garantiza un acceso más amplio y equitativo a la tecnología educativa.',
    professionalLessons: [
      'Las iteraciones basadas en feedback suelen superar las suposiciones iniciales del diseñador porque se ajustan a las necesidades de los usuarios. Este proceso ayuda a corregir errores y mejorar la experiencia, haciendo que el producto sea más efectivo y útil.',
      'Involucrar a educadores desde etapas tempranas mejora notablemente el diseño final, ya que aportan conocimientos prácticos y necesidades que guían el desarrollo hacia una solución más útil y efectiva.',
    ],
    personalLessons: [
      'Aprendí habilidades básicas de modelado 3D con Blender, aplicándolas al diseño UX para crear prototipos más visuales y mejorar la experiencia del usuario en entornos tridimensionales.',
      'Entendí la importancia de estar siempre actualizado en tecnologías emergentes para poder aplicar las mejores herramientas y técnicas en mis proyectos.',
    ],
    nextSteps: [
      'Implementar sistema de contenido personalizado basado en nivel educativo específico.',
      'Crear módulos adicionales que aborden otros temas de biología, como genética, evolución y ecosistemas, para ampliar el alcance educativo de Cell-AR.',
      'Investigar la efectividad de Cell-AR en comparación con otros métodos de enseñanza inmersiva ayudará a entender mejor sus ventajas, así como a confirmar su impacto en el aprendizaje.',
    ],
    finalConsiderations:
      'Cell-AR es más que un proyecto de diseño; es una muestra de cómo la tecnología puede ampliar el acceso a una educación de calidad. Me enseñó que un diseño centrado en el usuario puede crear soluciones innovadoras que integran realidad aumentada, accesibilidad y pedagogía efectiva, sin sacrificar usabilidad. El feedback positivo confirma la necesidad de este tipo de herramientas, que combinan ciencia, buen diseño y accesibilidad. Este proyecto fortaleció mi capacidad para enfrentar desafíos complejos mediante investigación, colaboración y compromiso con el impacto real en los usuarios.',
  },
};

export default project2;
