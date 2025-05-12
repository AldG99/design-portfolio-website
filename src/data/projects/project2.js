// Proyecto 2: Cell-AR - App de realidad aumentada de células
const project2 = {
  id: 2,
  title: 'Cell-AR',
  shortDescription:
    'Aplicación educativa de realidad aumentada que permite visualizar y explorar células y organelos en 3D, facilitando el aprendizaje de biología celular.',
  description:
    'Cell-AR es una aplicación móvil educativa que utiliza realidad aumentada para transformar el aprendizaje de biología celular. Permite a estudiantes y docentes visualizar, manipular e interactuar con modelos tridimensionales detallados de células y sus componentes, complementados con información científica rigurosa.',
  thumbnail: '/assets/images/projects/project2/thumbnail.jpg',
  images: [
    '/assets/images/projects/project2/detail1.jpg',
    '/assets/images/projects/project2/detail2.jpg',
    '/assets/images/projects/project2/desktop1.jpg',
    '/assets/images/projects/project2/desktop2.jpg',
    '/assets/images/projects/project2/mobile1.jpg',
  ],
  date: 'Noviembre 2022 - Abril 2023',
  dateRaw: '2023-04-20', // Formato para ordenar cronológicamente
  tools: ['Figma', 'Blender', 'Unity', 'ARCore', 'ARKit', 'React Native'],
  teamRole: 'UX Lead & AR Design Specialist',
  objective:
    'Crear una herramienta educativa innovadora que facilite la comprensión de conceptos complejos de biología celular mediante visualización 3D interactiva y experiencias de realidad aumentada accesibles en dispositivos móviles.',
  research:
    'Se realizaron entrevistas y sesiones de observación con estudiantes y docentes de biología, analizando los puntos de dolor en el aprendizaje tradicional de citología y las oportunidades que la realidad aumentada podía ofrecer para mejorar la comprensión espacial.',
  users:
    'Estudiantes de educación secundaria y superior (14-22 años) y docentes de biología (25-60 años) con diferentes niveles de familiaridad tecnológica.',
  designArchitecture:
    'La aplicación se organizó en módulos temáticos, con una biblioteca de modelos 3D, modo de realidad aumentada, sección de evaluación interactiva y centro de recursos adicionales. La navegación priorizó la facilidad de acceso a los modelos y el control intuitivo de la visualización AR.',
  wireframes:
    'Se desarrollaron wireframes para los principales flujos de la aplicación: navegación por la biblioteca de células, controles de manipulación AR, acceso a información educativa y sistema de evaluación.',
  userTesting:
    'Se realizaron sesiones de prueba con 10 estudiantes y 5 docentes utilizando prototipos funcionales, identificando problemas de usabilidad en entornos AR y refinando la interacción con los modelos 3D.',
  prototypes:
    'Se crearon prototipos funcionales con modelos 3D simplificados para validar la experiencia de AR, optimizando el rendimiento en distintos dispositivos y entornos de iluminación.',
  finalDesigns:
    'Diseño minimalista con interfaz que no distrae de los modelos 3D, sistema de control gestual intuitivo y balance entre detalle científico y rendimiento técnico. Paleta de colores contrastante para mejorar visibilidad en entornos diversos.',
  results:
    'La aplicación fue adoptada por 15 instituciones educativas, con informes de aumento del 40% en comprensión y retención de conceptos de biología celular en comparación con métodos tradicionales.',
  conclusion:
    'Cell-AR demostró el potencial de la realidad aumentada para transformar experiencias educativas abstractas en visualizaciones tangibles, mejorando significativamente la comprensión de conceptos complejos.',
  impact:
    'La aplicación ha tenido un impacto significativo en la enseñanza de biología celular, con más de 50,000 descargas y adopción curricular en programas educativos formales.',
  learnings:
    'La importancia del balance entre precisión científica y experiencia de usuario, y cómo la tecnología AR debe servir al propósito educativo sin convertirse en una distracción.',
  url: 'https://cell-ar.ejemplo.com',
  featured: true,

  // Campos específicos para app AR
  arImplementation: {
    technology: 'ARCore y ARKit para compatibilidad multiplataforma',
    models:
      'Modelos 3D de células animales, vegetales, bacterianas y sus componentes',
    interactions:
      'Rotación, zoom, explosión de componentes, animaciones de procesos celulares',
    learningModules:
      'Estructura celular, división celular, fotosíntesis, respiración celular',
    scientificAccuracy:
      'Validación por profesores de biología de prestigiosas universidades',
  },

  // Análisis competitivo específico
  competitors: [
    {
      name: 'BioVision AR',
      description:
        'Aplicación académica con modelos de alta precisión pero interfaz compleja. Enfocada exclusivamente en instituciones educativas de nivel superior.',
    },
    {
      name: 'Cell Explorer',
      description:
        'Solución popular con contenido simplificado para educación secundaria. Su punto fuerte era la gamificación del aprendizaje.',
    },
    {
      name: 'AR Anatomy Pro',
      description:
        'Producto premium centrado en anatomía general con algunos módulos celulares. Destacaba por sus animaciones detalladas y contenido audiovisual complementario.',
    },
  ],

  // Metas específicas
  goals: [
    'Visualizar células y componentes celulares en 3D mediante realidad aumentada',
    'Facilitar el aprendizaje de biología celular de forma interactiva',
    'Permitir la manipulación y exploración de modelos 3D detallados',
    'Integrar contenido educativo riguroso y accesible',
    'Crear una experiencia inmersiva y educativa',
  ],

  // Hallazgos de investigación
  researchFindings: [
    'Los estudiantes retenían mejor los conceptos cuando podían manipular modelos 3D',
    'Los profesores necesitaban poder guiar la experiencia AR de forma remota',
    'La aplicación debía funcionar bien en dispositivos de gama media-baja comunes en entornos educativos',
    'Los usuarios valoraban la precisión científica por encima de efectos visuales impresionantes',
  ],

  // Lecciones aprendidas
  professionalLessons: [
    'La tecnología AR necesita ser invisible para el usuario, centrándose en el contenido',
    'Un buen diseño UX puede compensar limitaciones técnicas de dispositivos menos potentes',
    'La validación científica del contenido es tan importante como la calidad técnica',
    'La simplificación de interacciones es crucial para entornos educativos diversos',
  ],

  personalLessons: [
    'Aprendí a colaborar efectivamente con expertos en contenido (biólogos) sin formación técnica',
    'Desarrollé habilidades para equilibrar la visión creativa con restricciones técnicas y educativas',
    'Reforcé mi capacidad para priorizar características basadas en impacto educativo real',
  ],

  // Consideraciones finales
  finalConsiderations:
    'Cell-AR representa un ejemplo exitoso de cómo la tecnología emergente puede aplicarse de manera significativa a desafíos educativos concretos. El proyecto demuestra que el diseño centrado en el usuario, combinado con un propósito educativo claro y validación experta del contenido, puede transformar la manera en que los estudiantes comprenden conceptos científicos complejos.',
};

export default project2;
