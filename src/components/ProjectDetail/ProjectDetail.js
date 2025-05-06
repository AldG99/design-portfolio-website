import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faExternalLinkAlt,
} from '@fortawesome/free-solid-svg-icons';
import { getProjectById } from '../../data/projectsIndex';
import './ProjectDetail.scss';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);

    const projectData = getProjectById(parseInt(id));

    if (projectData) {
      setProject(projectData);
      document.title = `Portafolio | ${projectData.title}`;
    } else {
      // Si no se encuentra el proyecto, redirigir a la página de proyectos
      navigate('/projects');
    }

    setLoading(false);
  }, [id, navigate]);

  const handleImageClick = index => {
    setActiveImage(index);
  };

  const goBack = () => {
    navigate(-1);
  };

  if (loading) {
    return (
      <div className="project-detail project-detail--loading">
        <div className="container">
          <div className="project-detail__loader">Cargando proyecto...</div>
        </div>
      </div>
    );
  }

  if (!project) {
    return null;
  }

  return (
    <div className="project-detail">
      <div className="container">
        {/* Botón de volver */}
        <button className="project-detail__back" onClick={goBack}>
          <FontAwesomeIcon icon={faArrowLeft} /> Volver
        </button>

        {/* Encabezado del proyecto */}
        <header className="project-detail__header">
          <div className="project-detail__meta">
            <p className="project-detail__date">{project.date}</p>
            <h1 className="project-detail__title">{project.title}</h1>
          </div>
        </header>

        {/* Visor de imágenes */}
        <div className="project-detail__gallery">
          <div className="project-detail__main-image">
            <img
              src={project.images[activeImage]}
              alt={`${project.title} - Vista ${activeImage + 1}`}
            />
          </div>

          <div className="project-detail__thumbnails">
            {project.images.map((image, index) => (
              <div
                key={index}
                className={`project-detail__thumbnail ${
                  index === activeImage
                    ? 'project-detail__thumbnail--active'
                    : ''
                }`}
                onClick={() => handleImageClick(index)}
              >
                <img
                  src={image}
                  alt={`${project.title} - Miniatura ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Información general */}
        <div className="project-detail__info">
          <div className="project-detail__col">
            <h2 className="project-detail__section-title">Rol en el equipo</h2>
            <p>{project.teamRole}</p>

            <h2 className="project-detail__section-title">Herramientas</h2>
            <div className="project-detail__tools">
              {project.tools.map((tool, index) => (
                <span key={index} className="project-detail__tool">
                  {tool}
                </span>
              ))}
            </div>

            {project.url && (
              <>
                <h2 className="project-detail__section-title">Ver proyecto</h2>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-detail__link"
                >
                  Visitar sitio <FontAwesomeIcon icon={faExternalLinkAlt} />
                </a>
              </>
            )}
          </div>

          <div className="project-detail__col project-detail__col--wide">
            <h2 className="project-detail__section-title">Descripción</h2>
            <p className="project-detail__description">{project.description}</p>

            <h2 className="project-detail__section-title">Objetivo</h2>
            <p>{project.objective}</p>
          </div>
        </div>

        {/* Estudio de caso detallado */}
        <div className="project-detail__case-study">
          <h2 className="project-detail__main-title">Estudio de caso</h2>

          <div className="project-detail__section">
            <h3 className="project-detail__section-title">Investigación</h3>
            <p>{project.research}</p>
          </div>

          <div className="project-detail__section">
            <h3 className="project-detail__section-title">Usuarios</h3>
            <p>{project.users}</p>
          </div>

          <div className="project-detail__section">
            <h3 className="project-detail__section-title">
              Arquitectura del diseño
            </h3>
            <p>{project.designArchitecture}</p>
          </div>

          <div className="project-detail__section">
            <h3 className="project-detail__section-title">Wireframes</h3>
            <p>{project.wireframes}</p>
          </div>

          <div className="project-detail__section">
            <h3 className="project-detail__section-title">
              Pruebas con usuarios
            </h3>
            <p>{project.userTesting}</p>
          </div>

          <div className="project-detail__section">
            <h3 className="project-detail__section-title">Prototipos</h3>
            <p>{project.prototypes}</p>
          </div>

          <div className="project-detail__section">
            <h3 className="project-detail__section-title">Diseño final</h3>
            <p>{project.finalDesigns}</p>
          </div>

          <div className="project-detail__section">
            <h3 className="project-detail__section-title">Resultados</h3>
            <p>{project.results}</p>
          </div>

          <div className="project-detail__section">
            <h3 className="project-detail__section-title">Conclusión</h3>
            <p>{project.conclusion}</p>
          </div>
        </div>

        {/* Sección de impacto y aprendizaje */}
        <div className="project-detail__impact-learning">
          <div className="project-detail__impact">
            <h3 className="project-detail__section-title">Impacto</h3>
            <p>{project.impact}</p>
          </div>

          <div className="project-detail__learning">
            <h3 className="project-detail__section-title">Aprendizaje</h3>
            <p>{project.learnings}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
