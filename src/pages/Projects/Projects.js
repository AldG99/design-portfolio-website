import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllProjects } from '../../data/projectsIndex';
import './Projects.scss';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    // Set document title
    document.title = 'Portafolio | Trabajo';
    // Get all projects and sort by date (newest first)
    const allProjects = getAllProjects();
    const sortedProjects = [...allProjects].sort(
      (a, b) => new Date(b.dateRaw) - new Date(a.dateRaw)
    );
    setProjects(sortedProjects);
  }, []);

  // Función para generar slug a partir del título del proyecto
  const getProjectSlug = title => {
    return title.toLowerCase().replace(/\s+/g, '-');
  };

  return (
    <main className="projects-page">
      <div className="container">
        <header className="projects-page__header">
          <h1 className="section-title">Mi trabajo 🚀 🧩</h1>
          <p className="projects-page__description">
            Una colección de mis trabajos recientes en diseño UX/UI y
            desarrollo. Cada proyecto representa un desafío único y una
            oportunidad para crear soluciones centradas en el usuario.
          </p>
        </header>
        <div className="projects-page__list">
          {projects.map(project => (
            <div className="project-item" key={project.id}>
              <Link
                to={`/${getProjectSlug(project.title)}`}
                className="project-item__thumbnail-link"
              >
                <div className="project-item__thumbnail">
                  <img src={project.thumbnail} alt={project.title} />
                </div>
              </Link>
              <div className="project-item__content">
                <div className="project-item__date">{project.date}</div>
                <h3 className="project-item__title">{project.title}</h3>
                <p className="project-item__description">
                  {project.shortDescription}
                </p>
                <div className="project-item__tools">
                  {project.tools.map((tool, index) => (
                    <span
                      key={index}
                      className={`project-item__tool project-item__tool--${tool
                        .toLowerCase()
                        .replace(/\s+/g, '-')}`}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/${getProjectSlug(project.title)}`}
                  className="project-item__button"
                >
                  Ver proyecto
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;
