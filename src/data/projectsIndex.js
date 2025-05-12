// Archivo índice que importa todos los proyectos individuales
import project1 from './projects/project1';
import project2 from './projects/project2';
import project3 from './projects/project3';
import project4 from './projects/project4';
import project5 from './projects/project5';
// Importa aquí los nuevos proyectos que vayas agregando

// Array con todos los proyectos
const projects = [
  project5,
  project4,
  project3,
  project2,
  project1,
  // Agrega aquí los nuevos proyectos importados
];

// Función para obtener todos los proyectos
export const getAllProjects = () => projects;

// Función para obtener proyectos destacados
export const getFeaturedProjects = (limit = 4) => {
  return projects
    .filter(project => project.featured)
    .sort((a, b) => new Date(b.dateRaw) - new Date(a.dateRaw))
    .slice(0, limit);
};

// Función para obtener un proyecto por su ID
export const getProjectById = id => {
  return projects.find(project => project.id === parseInt(id));
};

export default projects;
