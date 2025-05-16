import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllProjects, getProjectSlug } from '../../data/projectsIndex';
import { useScrollReveal } from '../../context/ScrollRevealContext';
import './Projects.scss';

const Projects = () => {
  const { revealRef } = useScrollReveal();

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Portafolio | Trabajo';
    const allProjects = getAllProjects();
    const processedProjects = allProjects.map(project => ({
      ...project,
      title: project.title || `Proyecto ${project.id}`,
      shortDescription:
        project.shortDescription || 'Sin descripción disponible',
      date: project.date || 'Sin fecha',
      tools: project.tools || [],
      thumbnail: project.thumbnail || '/assets/images/placeholder.jpg',
      dateRaw: project.dateRaw || new Date().toISOString(),
    }));
    const sortedProjects = [...processedProjects].sort(
      (a, b) => new Date(b.dateRaw) - new Date(a.dateRaw)
    );
    setProjects(sortedProjects);
  }, []);

  return (
    <main className="projects-page">
      <div className="container">
        <div className="projects-page__list">
          {projects.map((project, index) => (
            <div
              className="project-item"
              key={project.id}
              ref={revealRef}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Link
                to={`/${getProjectSlug(project.title)}`}
                className="project-item__thumbnail-link"
              >
                <div className="project-item__thumbnail">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    draggable="false"
                    className="no-save"
                    onContextMenu={e => e.preventDefault()}
                  />
                </div>
              </Link>
              <div className="project-item__content">
                <div className="project-item__date">{project.date}</div>
                <h3 className="project-item__title">{project.title}</h3>
                <p className="project-item__description">
                  {project.shortDescription}
                </p>
                <div className="project-item__tools">
                  {Array.isArray(project.tools) && project.tools.length > 0 ? (
                    project.tools.map((tool, index) => (
                      <span
                        key={index}
                        className={`project-item__tool project-item__tool--${tool
                          .toLowerCase()
                          .replace(/\s+/g, '-')}`}
                      >
                        {tool}
                      </span>
                    ))
                  ) : (
                    <span className="project-item__tool">
                      Sin tecnologías especificadas
                    </span>
                  )}
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
