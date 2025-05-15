// ARCHIVO MODIFICADO: src/components/FeaturedProjects/FeaturedProjects.js
// Este archivo ha sido modificado para implementar la animación scroll reveal

import React from 'react';
import { Link } from 'react-router-dom';
import { getFeaturedProjects, getProjectSlug } from '../../data/projectsIndex';
// NUEVO: Importar el hook useScrollReveal
import { useScrollReveal } from '../../context/ScrollRevealContext';
import './FeaturedProjects.scss';

const FeaturedProjects = () => {
  // NUEVO: Usar el hook para obtener la referencia de animación
  const { revealRef } = useScrollReveal();

  // Obtenemos los 4 proyectos más recientes
  const featuredProjects = getFeaturedProjects(4);

  return (
    <section className="featured-projects" id="proyectos">
      <div className="container">
        {/* MODIFICADO: Añadir ref al título */}
        <h2 className="section-title" ref={revealRef}>
          Trabajo 🚀 🧩
        </h2>
        <div className="featured-projects__grid">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className="featured-projects__item"
              /* NUEVO: Añadir ref y delay para cada proyecto */
              ref={revealRef}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="featured-projects__content">
                <Link
                  to={`/${getProjectSlug(project.title)}`}
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
        {/* MODIFICADO: Añadir ref al botón "Más proyectos" */}
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
