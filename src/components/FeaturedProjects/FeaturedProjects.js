import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../ProjectCard/ProjectCard';
import { getFeaturedProjects } from '../../data/projectsIndex';
import './FeaturedProjects.scss';

const FeaturedProjects = () => {
  const featuredProjects = getFeaturedProjects(3);

  return (
    <section className="featured-projects" id="proyectos">
      <div className="container">
        <h2 className="section-title">Proyectos 🚀 🧩</h2>

        <div className="featured-projects__grid">
          {featuredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="featured-projects__more">
          <Link to="/projects" className="btn">
            Más proyectos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
