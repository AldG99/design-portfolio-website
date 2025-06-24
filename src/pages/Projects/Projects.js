import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllProjects } from '../../data/projectsList';
import { useScrollReveal } from '../../context/ScrollRevealContext';
import './Projects.scss';

const Projects = () => {
  const { revealRef } = useScrollReveal();
  const projects = getAllProjects().sort(
    (a, b) => new Date(b.dateRaw) - new Date(a.dateRaw)
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Alfredo García Diseñador UX/UI & Desarrollador - Trabajo';
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
                to={`/${project.slug}`}
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
                <Link to={`/${project.slug}`} className="project-item__button">
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
