import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Button from '../components/common/Button/Button';
import useScrollReveal from '../hooks/useScrollReveal';
import '../styles/pages/ProjectDetail.scss';

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  const titleRef = useScrollReveal({
    direction: 'up',
    distance: 30,
    delay: 100,
  });

  const contentRef = useScrollReveal({
    direction: 'up',
    distance: 30,
    delay: 300,
  });

  const galleryRef = useScrollReveal({
    direction: 'up',
    distance: 30,
    delay: 500,
  });

  // Simular carga de datos del proyecto (en una aplicación real, esto se cargaría desde un backend)
  useEffect(() => {
    const fetchProject = async () => {
      // Simular retraso de carga
      await new Promise(resolve => setTimeout(resolve, 800));

      // Datos de ejemplo
      const projectData = {
        id: parseInt(id),
        title: 'Proyecto de Ejemplo',
        subtitle: 'Desarrollo de aplicación web full-stack',
        description: `Este proyecto es un ejemplo detallado de cómo se vería la página de detalle
                     de un proyecto específico en tu portafolio. Incluye información completa sobre
                     el proyecto, tecnologías utilizadas, desafíos enfrentados y soluciones implementadas.
                     
                     Este tipo de página permite mostrar tus proyectos con mayor profundidad, incluyendo
                     múltiples imágenes, descripciones detalladas del proceso de desarrollo y los
                     resultados obtenidos.`,
        client: 'Cliente Ficticio Inc.',
        duration: '3 meses',
        date: 'Enero 2023 - Abril 2023',
        role: 'Desarrollador Frontend',
        technologies: [
          'React',
          'Node.js',
          'Express',
          'MongoDB',
          'SCSS',
          'Redux',
          'JWT',
        ],
        challenge: `El principal desafío de este proyecto fue implementar un sistema de autenticación
                  seguro y robusto que pudiera manejar múltiples roles de usuario y permisos
                  personalizados. Además, el cliente necesitaba una interfaz altamente interactiva
                  con múltiples componentes dinámicos y visualizaciones de datos en tiempo real.`,
        solution: `Desarrollé una arquitectura frontend basada en React con Redux para manejar
                 eficientemente el estado global de la aplicación. Implementé un sistema de
                 autenticación basado en JWT con tokens de actualización para mejorar la seguridad
                 y la experiencia del usuario.
                 
                 Para el backend, utilicé Node.js con Express para crear una API RESTful robusta,
                 y MongoDB como base de datos para almacenar los datos de usuarios y de la aplicación
                 de forma flexible y escalable.`,
        results: `El proyecto se entregó a tiempo y dentro del presupuesto, con todas las
                funcionalidades requeridas implementadas exitosamente. El cliente informó un
                aumento del 40% en la productividad de sus empleados gracias a la nueva herramienta,
                y los usuarios finales valoraron positivamente la experiencia de usuario intuitiva
                y el diseño moderno.`,
        images: [
          {
            url: '/api/placeholder/1200/800',
            alt: 'Vista principal del dashboard',
            caption:
              'Interfaz principal del dashboard con gráficos de analítica',
          },
          {
            url: '/api/placeholder/1200/800',
            alt: 'Página de gestión de usuarios',
            caption: 'Sistema de gestión de usuarios con roles y permisos',
          },
          {
            url: '/api/placeholder/1200/800',
            alt: 'Página de configuración',
            caption: 'Panel de configuración para administradores',
          },
        ],
        demoUrl: 'https://example.com',
        codeUrl: 'https://github.com',
      };

      setProject(projectData);
      setLoading(false);
    };

    fetchProject();
  }, [id]);

  if (loading) {
    return (
      <div className="project-detail__loading">
        <div className="project-detail__spinner"></div>
        <p>Cargando proyecto...</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="project-detail__error">
        <h2>Proyecto no encontrado</h2>
        <p>El proyecto que estás buscando no existe o ha sido eliminado.</p>
        <Link to="/">
          <Button variant="primary">Volver al inicio</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="project-detail">
      <div className="project-detail__header">
        <div className="container">
          <Link to="/#projects" className="project-detail__back-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
            Volver a proyectos
          </Link>

          <div ref={titleRef} className="project-detail__title-container">
            <h1 className="project-detail__title">{project.title}</h1>
            <p className="project-detail__subtitle">{project.subtitle}</p>
          </div>

          <div className="project-detail__links">
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="md">
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
                Ver Demo
              </Button>
            </a>

            <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
                Ver Código
              </Button>
            </a>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="project-detail__content">
          <div ref={contentRef} className="project-detail__info">
            <div className="project-detail__main">
              <div className="project-detail__description">
                <h2 className="project-detail__section-title">
                  Descripción del Proyecto
                </h2>
                <p>{project.description}</p>
              </div>

              <div className="project-detail__challenge">
                <h2 className="project-detail__section-title">Desafío</h2>
                <p>{project.challenge}</p>
              </div>

              <div className="project-detail__solution">
                <h2 className="project-detail__section-title">Solución</h2>
                <p>{project.solution}</p>
              </div>

              <div className="project-detail__results">
                <h2 className="project-detail__section-title">Resultados</h2>
                <p>{project.results}</p>
              </div>
            </div>

            <div className="project-detail__sidebar">
              <div className="project-detail__sidebar-item">
                <h3 className="project-detail__sidebar-title">Cliente</h3>
                <p>{project.client}</p>
              </div>

              <div className="project-detail__sidebar-item">
                <h3 className="project-detail__sidebar-title">Duración</h3>
                <p>{project.duration}</p>
              </div>

              <div className="project-detail__sidebar-item">
                <h3 className="project-detail__sidebar-title">Fecha</h3>
                <p>{project.date}</p>
              </div>

              <div className="project-detail__sidebar-item">
                <h3 className="project-detail__sidebar-title">Rol</h3>
                <p>{project.role}</p>
              </div>

              <div className="project-detail__sidebar-item">
                <h3 className="project-detail__sidebar-title">Tecnologías</h3>
                <div className="project-detail__technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="project-detail__technology">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div ref={galleryRef} className="project-detail__gallery">
            <h2 className="project-detail__section-title">
              Galería del Proyecto
            </h2>
            <div className="project-detail__images">
              {project.images.map((image, index) => (
                <figure key={index} className="project-detail__figure">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="project-detail__image"
                  />
                  <figcaption className="project-detail__caption">
                    {image.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div className="project-detail__navigation">
            <Link
              to={`/project/${parseInt(id) - 1}`}
              className={`project-detail__nav-button ${
                parseInt(id) <= 1 ? 'project-detail__nav-button--disabled' : ''
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
              Proyecto Anterior
            </Link>

            <Link
              to={`/project/${parseInt(id) + 1}`}
              className="project-detail__nav-button"
            >
              Proyecto Siguiente
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
