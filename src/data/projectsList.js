const projectsList = [
  {
    id: 5,
    title: 'SportCampus',
    slug: 'sport-campus',
    shortDescription:
      'Diseño de aplicación móvil que digitaliza el deporte universitario, integrando gestión de equipos, estadísticas y eventos multimedia para estudiantes y entrenadores.',
    thumbnail: '/assets/images/projects/project5/thumbnail.png',
    date: 'Abril - Junio 2025',
    dateRaw: '2025-06-01',
    tools: ['Figma', 'React Native Expo', 'Firebase'],
    featured: true,
  },
  {
    id: 4,
    title: 'MediNote',
    slug: 'medi-note',
    shortDescription:
      'Crear una aplicación móvil y web que digitaliza la gestión clínica, integrando historiales digitales, recordatorios de tratamientos y búsquedas avanzadas para doctores y enfermeras.',
    thumbnail: '/assets/images/projects/project4/thumbnail.png',
    date: 'Febrero - Abril 2025',
    dateRaw: '2025-04-01',
    tools: ['Figma', 'SCSS', 'React', 'React Native Expo', 'Firebase'],
    featured: true,
  },
  {
    id: 3,
    title: 'INVENTA-ANALYT',
    slug: 'inventa-analyt',
    shortDescription:
      'Diseño de aplicación móvil y web que digitaliza la gestión de pequeños negocios, integrando inventario, ventas y análisis de rendimiento para propietarios comerciales.',
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
      'Diseño de aplicación móvil educativa con realidad aumentada que digitaliza el aprendizaje de biología celular, integrando visualización 3D interactiva y exploración de modelos celulares.',
    thumbnail: '/assets/images/projects/project2/thumbnail.png',
    date: 'Febrero - Mayo 2024',
    dateRaw: '2024-05-01',
    tools: ['Figma', 'Blender', 'Unity'],
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
