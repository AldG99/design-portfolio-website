import React, { useState } from 'react';
import useScrollReveal from '../../../hooks/useScrollReveal';
import Button from '../../common/Button/Button';
import './Projects.scss';

const Projects = () => {
  const titleRef = useScrollReveal({
    direction: 'up',
    distance: 30,
    delay: 100,
  });

  const filtersRef = useScrollReveal({
    direction: 'up',
    distance: 30,
    delay: 200,
  });

  const projectsRef = useScrollReveal({
    direction: 'up',
    distance: 30,
    delay: 300,
  });

  // Categorías de proyectos
  const categories = ['Todos', 'Web', 'Mobile', 'UI/UX', 'Otros'];

  // Estado para el filtro activo
  const [activeFilter, setActiveFilter] = useState('Todos');

  // Datos de proyectos
  const projectsData = [
    {
      id: 1,
      title: 'E-commerce Dashboard',
      description:
        'Panel de administración para tienda online con análisis de ventas y gestión de productos.',
      category: 'Web',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Redux', 'SCSS', 'Firebase'],
      demo: 'https://example.com',
      code: 'https://github.com',
    },
    {
      id: 2,
      title: 'App de Finanzas Personales',
      description:
        'Aplicación móvil para controlar gastos y gestionar presupuestos mensuales.',
      category: 'Mobile',
      image: '/api/placeholder/600/400',
      technologies: ['React Native', 'GraphQL', 'TypeScript'],
      demo: 'https://example.com',
      code: 'https://github.com',
    },
    {
      id: 3,
      title: 'Rediseño de Plataforma Educativa',
      description:
        'Rediseño de experiencia de usuario para plataforma de cursos online.',
      category: 'UI/UX',
      image: '/api/placeholder/600/400',
      technologies: ['Figma', 'Adobe XD', 'Photoshop'],
      demo: 'https://example.com',
      code: 'https://github.com',
    },
    {
      id: 4,
      title: 'Sistema de Gestión de Tareas',
      description:
        'Aplicación web para gestionar tareas y proyectos en equipo con calendario y notificaciones.',
      category: 'Web',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      demo: 'https://example.com',
      code: 'https://github.com',
    },
    {
      id: 5,
      title: 'Landing Page para Startup',
      description:
        'Diseño y desarrollo de landing page moderna con animaciones y formulario de contacto.',
      category: 'Web',
      image: '/api/placeholder/600/400',
      technologies: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
      demo: 'https://example.com',
      code: 'https://github.com',
    },
    {
      id: 6,
      title: 'Chatbot para Servicio al Cliente',
      description:
        'Desarrollo de chatbot inteligente para responder preguntas frecuentes de clientes.',
      category: 'Otros',
      image: '/api/placeholder/600/400',
      technologies: ['Node.js', 'NLP', 'Express', 'MongoDB'],
      demo: 'https://example.com',
      code: 'https://github.com',
    },
  ];

  // Filtrar proyectos según la categoría seleccionada
  const filteredProjects =
    activeFilter === 'Todos'
      ? projectsData
      : projectsData.filter(project => project.category === activeFilter);

  // Cambiar filtro
  const handleFilterClick = category => {
    setActiveFilter(category);
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 ref={titleRef} className="section__title projects__title">
          Mis Proyectos
        </h2>

        <div ref={filtersRef} className="projects__filters">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`projects__filter ${
                activeFilter === category ? 'projects__filter--active' : ''
              }`}
              onClick={() => handleFilterClick(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div ref={projectsRef} className="projects__grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="projects__card">
              <div className="projects__card-image">
                <img src={project.image} alt={project.title} />
                <div className="projects__card-overlay">
                  <div className="projects__card-buttons">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="primary" size="sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                          />
                          <path
                            fillRule="evenodd"
                            d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                          />
                        </svg>
                        Demo
                      </Button>
                    </a>

                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                        </svg>
                        Código
                      </Button>
                    </a>
                  </div>
                </div>
              </div>

              <div className="projects__card-content">
                <h3 className="projects__card-title">{project.title}</h3>
                <p className="projects__card-description">
                  {project.description}
                </p>

                <div className="projects__card-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="projects__card-tech">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects__more">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="lg">
              Ver más proyectos en GitHub
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                />
              </svg>
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
