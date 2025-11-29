import React from 'react';
import { Link } from 'react-router-dom';
import { getFeaturedProjects } from '../../data/projectsList';
import { useScrollReveal } from '../../context/ScrollRevealContext';
import './FeaturedProjects.scss';

const FeaturedProjects = () => {
  const { revealRef } = useScrollReveal();
  const featuredProjects = getFeaturedProjects(4);

  return (
    <section className="featured-projects" id="proyectos">
      <div className="container">
        <h2 className="section-title" ref={revealRef}>
          Trabajo 🚀 🧩
        </h2>
        <div className="featured-projects__grid">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className="featured-projects__item"
              ref={revealRef}
            >
              <div className="featured-projects__content">
                <Link
                  to={`/${project.slug}`}
                  className="featured-projects__image-link"
                >
                  <div className="featured-projects__image">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      draggable="false"
                      className="no-save"
                      onContextMenu={e => e.preventDefault()}
                    />
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
                <div className="featured-projects__divider"></div>
              </div>
            </div>
          ))}
        </div>
        <div className="featured-projects__more" ref={revealRef}>
          <Link to="/trabajo" className="btn">
            Más proyectos 💁‍♂️
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
