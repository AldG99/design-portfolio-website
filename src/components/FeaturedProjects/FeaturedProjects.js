import React from 'react';
import { Link } from 'react-router-dom';
import { getFeaturedProjects } from '../../data/projectsIndex';
import './FeaturedProjects.scss';

const FeaturedProjects = () => {
  // Obtenemos 4 proyectos en lugar de 3
  const featuredProjects = getFeaturedProjects(4);

  // Función para generar slug a partir del título del proyecto
  const getProjectSlug = title => {
    return title.toLowerCase().replace(/\s+/g, '-');
  };

  return (
    <section className="featured-projects" id="proyectos">
      <div className="container">
        <h2 className="section-title">Proyectos 🚀 🧩</h2>
        <div className="featured-projects__grid">
          {featuredProjects.map(project => (
            <div key={project.id} className="featured-projects__item">
              <div className="featured-projects__content">
                {/* Usar slug en lugar de ID */}
                <Link
                  to={`/${getProjectSlug(project.title)}`}
                  className="featured-projects__image-link"
                >
                  <div className="featured-projects__image">
                    <img src={project.thumbnail} alt={project.title} />
                  </div>
                </Link>
                <div className="featured-projects__info">
                  <span className="featured-projects__date">
                    {project.date}
                  </span>
                  <h3 className="featured-projects__title">{project.title}</h3>
                  <p className="featured-projects__description">
                    {project.shortDescription}
                  </p>
                  <div className="featured-projects__tools">
                    {project.tools.map((tool, index) => (
                      <span
                        key={index}
                        className={`featured-projects__tool featured-projects__tool--${tool
                          .toLowerCase()
                          .replace(/\s+/g, '-')}`}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Línea divisoria en la parte inferior */}
                <div className="featured-projects__divider"></div>
              </div>
            </div>
          ))}
        </div>
        <div className="featured-projects__more">
          {/* Cambiar a /trabajo en lugar de /projects */}
          <Link to="/trabajo" className="btn">
            Más proyectos 💁‍♂️
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
