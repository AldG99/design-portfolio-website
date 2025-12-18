const projectsList = [
  {
    id: 5,
    title: 'SportCampus',
    slug: 'sport-campus',
    shortDescription:
      'Diseño y desarrollo del front-end de una app móvil que digitaliza el deporte universitario, integrando gestión de equipos, estadísticas y eventos multimedia para estudiantes y entrenadores.',
    thumbnail: '/assets/images/projects/project5/thumbnail.png',
    date: 'Mayo - Julio 2025',
    dateRaw: '2025-07-08',
    tools: ['Figma', 'React Native Expo'],
    featured: true,
  },
  {
    id: 4,
    title: 'MediNote',
    slug: 'medi-note',
    shortDescription:
      'Crear una aplicación móvil y web que digitaliza la gestión clínica, integrando historiales digitales, recordatorios de tratamientos y búsquedas avanzadas para doctores y enfermeras.',
    thumbnail: '/assets/images/projects/project4/thumbnail.png',
    date: 'Febrero - Mayo 2025',
    dateRaw: '2025-05-01',
    tools: ['Figma', 'SCSS', 'React', 'React Native Expo', 'Firebase'],
    featured: true,
  },
  {
    id: 3,
    title: 'INVENTA-ANALYT',
    slug: 'inventa-analyt',
    shortDescription:
      'Diseño y desarrollo de aplicación móvil y web para digitalizar la gestión de pequeños negocios, integrando control de inventario, registro de ventas y análisis de rendimiento para propietarios comerciales.',
    thumbnail: '/assets/images/projects/project3/thumbnail.png',
    date: 'Diciembre 2024 - Febrero 2025',
    dateRaw: '2025-02-01',
    tools: ['Figma', 'SCSS', 'React', 'React Native Expo', 'Firebase'],
    featured: true,
  },
  {
    id: 2,
    title: 'Cell-AR',
    slug: 'cell-ar',
    shortDescription:
      'Diseño y desarrollo de una aplicación móvil educativa con realidad aumentada, que digitaliza el aprendizaje de biología celular mediante visualización 3D interactiva y exploración de modelos celulares.',
    thumbnail: '/assets/images/projects/project2/thumbnail.png',
    date: 'Enero - Mayo 2024',
    dateRaw: '2024-05-01',
    tools: ['Figma', 'Blender', 'Unity'],
    featured: true,
  },
  {
    id: 1,
    title: 'Mikky Jump',
    slug: 'mikky-jump',
    shortDescription:
      'Desarrollo de un juego de plataforma 2D, con saltos precisos y obstáculos, optimizando la interfaz para garantizar una navegación clara, fluida y accesible.',
    thumbnail: '/assets/images/projects/project1/thumbnail.png',
    date: 'Septiembre - Diciembre 2023',
    dateRaw: '2023-12-01',
    tools: ['Figma', 'Unity'],
    featured: true,
  },
];

// Funciones helper simplificadas
export const getAllProjects = () => projectsList;

export const getFeaturedProjects = (limit = 4) => {
  return projectsList
    .filter(project => project.featured)
    .sort((a, b) => new Date(b.dateRaw) - new Date(a.dateRaw))
    .slice(0, limit);
};

export const getProjectBySlug = slug => {
  return projectsList.find(project => project.slug === slug);
};

export default projectsList;
