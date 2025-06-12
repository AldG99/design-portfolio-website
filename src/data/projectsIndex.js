import project1 from './projects/project1';
import project2 from './projects/project2';
import project3 from './projects/project3';
import project4 from './projects/project4';
import project5 from './projects/project5';

const projects = [project5, project4, project3, project2, project1];

export const getAllProjects = () => projects;

export const getFeaturedProjects = (limit = 4) => {
  return projects
    .sort((a, b) => new Date(b.dateRaw || 0) - new Date(a.dateRaw || 0))
    .slice(0, limit)
    .map(project => ({
      ...project,
      title: project.title || `Proyecto ${project.id}`,
      shortDescription:
        project.shortDescription || 'Sin descripción disponible',
      date: project.date || 'Sin fecha',
      tools: project.tools || [],
      thumbnail: project.thumbnail || '/assets/images/placeholder.jpg',
    }));
};

export const getProjectById = id => {
  return projects.find(project => project.id === parseInt(id));
};

export const getProjectBySlug = slug => {
  return projects.find(
    project => project.title.toLowerCase().replace(/\s+/g, '-') === slug
  );
};

export const getProjectSlug = title => {
  if (title === 'Proyecto 1') return 'proyecto-1';
  if (title === 'Proyecto 2') return 'proyecto-2';
  if (title === 'INVENTA-ANALYT') return 'inventa-analyt';
  if (title === 'MediNote') return 'medi-note';
  if (title === 'SportCampus') return 'sport-campus';

  return title.toLowerCase().replace(/\s+/g, '-');
};

export default projects;
