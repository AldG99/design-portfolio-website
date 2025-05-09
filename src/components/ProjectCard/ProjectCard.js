import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.scss';

const ProjectCard = ({ project, isFeature = false }) => {
  // Función para generar slug a partir del título del proyecto
  const getProjectSlug = title => {
    return title.toLowerCase().replace(/\s+/g, '-');
  };

  // Función para asignar una clase de color según la herramienta
  const getToolClass = tool => {
    const toolLower = tool.toLowerCase();
    if (toolLower.includes('figma')) return 'project-card__tool--figma';
    if (toolLower.includes('scss')) return 'project-card__tool--scss';
    if (toolLower.includes('react')) return 'project-card__tool--react';
    if (toolLower.includes('native')) return 'project-card__tool--react-native';
    if (toolLower.includes('expo')) return 'project-card__tool--expo';
    if (toolLower.includes('firebase')) return 'project-card__tool--firebase';
    return ''; // Clase por defecto
  };

  return (
    <div className={`project-card ${isFeature ? 'project-card--feature' : ''}`}>
      <Link
        to={`/${getProjectSlug(project.title)}`}
        className="project-card__link"
      >
        <div className="project-card__thumbnail">
          <img src={project.thumbnail} alt={project.title} />
        </div>
        <div className="project-card__content">
          <div className="project-card__date">{project.date}</div>
          <h3 className="project-card__title">{project.title}</h3>
          <p className="project-card__description">
            {project.shortDescription}
          </p>
          <div className="project-card__tools">
            {project.tools.map((tool, index) => (
              <span
                key={index}
                className={`project-card__tool ${getToolClass(tool)}`}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
