import React from 'react';
import { Link } from 'react-router-dom';
import { getFeaturedProjects, getProjectSlug } from '../../data/projectsIndex';
import './FeaturedProjects.scss';

const FeaturedProjects = () => {
  // Obtenemos los 4 proyectos más recientes
  const featuredProjects = getFeaturedProjects(4);

  return (
    <section className="featured-projects" id="proyectos">
      <div className="container">
        <h2 className="section-title">Proyectos 🚀 🧩</h2>
        <div className="featured-projects__grid">
          {featuredProjects.map(project => (
            <div key={project.id} className="featured-projects__item">
              <div className="featured-projects__content">
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
                    {/* Verificar que project.tools existe y es un array */}
                    {Array.isArray(project.tools) &&
                    project.tools.length > 0 ? (
                      project.tools.map((tool, index) => (
                        <span
                          key={index}
                          className={`featured-projects__tool featured-projects__tool--${tool
                            .toLowerCase()
                            .replace(/\s+/g, '-')}`}
                        >
                          {tool}
                        </span>
                      ))
                    ) : (
                      <span className="featured-projects__tool">
                        Sin tecnologías especificadas
                      </span>
                    )}
                  </div>
                </div>
                {/* Línea divisoria en la parte inferior */}
                <div className="featured-projects__divider"></div>
              </div>
            </div>
          ))}
        </div>
        <div className="featured-projects__more">
          <Link to="/trabajo" className="btn">
            Más proyectos 💁‍♂️
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
