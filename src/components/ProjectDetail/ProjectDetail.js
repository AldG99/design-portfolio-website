import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faExternalLinkAlt,
} from '@fortawesome/free-solid-svg-icons';
import { getAllProjects } from '../../data/projectsIndex';
import './ProjectDetail.scss';

const ProjectDetail = () => {
  // Usar slug en lugar de id
  const { projectSlug } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Buscar el proyecto por slug en lugar de ID
    const allProjects = getAllProjects();
    const foundProject = allProjects.find(
      p => p.title.toLowerCase().replace(/\s+/g, '-') === projectSlug
    );

    if (foundProject) {
      setProject(foundProject);
      document.title = `Portafolio | ${foundProject.title}`;
    } else {
      // Si no se encuentra el proyecto, redirigir a la página de trabajo
      navigate('/trabajo');
    }

    setLoading(false);
  }, [projectSlug, navigate]);

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

  // Función para renderizar información específica según el tipo de proyecto
  const renderProjectSpecificInfo = () => {
    const projectId = project.id;

    switch (projectId) {
      case 1: // Videojuego de plataforma
        return project.gameDesign ? (
          <div className="project-detail__specific">
            <h3 className="project-detail__section-title">Diseño de Juego</h3>
            <ul className="project-detail__specific-list">
              <li>
                <strong>Género:</strong> {project.gameDesign.genre}
              </li>
              <li>
                <strong>Mecánicas:</strong> {project.gameDesign.mechanics}
              </li>
              <li>
                <strong>Niveles:</strong> {project.gameDesign.levels}
              </li>
              <li>
                <strong>Progresión:</strong> {project.gameDesign.progression}
              </li>
              <li>
                <strong>Estilo artístico:</strong> {project.gameDesign.artStyle}
              </li>
            </ul>
          </div>
        ) : null;

      case 2: // App AR educativa
        return project.arImplementation ? (
          <div className="project-detail__specific">
            <h3 className="project-detail__section-title">
              Implementación de Realidad Aumentada
            </h3>
            <ul className="project-detail__specific-list">
              <li>
                <strong>Tecnología:</strong>{' '}
                {project.arImplementation.technology}
              </li>
              <li>
                <strong>Modelos:</strong> {project.arImplementation.models}
              </li>
              <li>
                <strong>Interacciones:</strong>{' '}
                {project.arImplementation.interactions}
              </li>
              <li>
                <strong>Módulos de aprendizaje:</strong>{' '}
                {project.arImplementation.learningModules}
              </li>
              <li>
                <strong>Precisión científica:</strong>{' '}
                {project.arImplementation.scientificAccuracy}
              </li>
            </ul>
          </div>
        ) : null;

      case 3: // Plataforma de Mentoría
        return project.mentoringSystem ? (
          <div className="project-detail__specific">
            <h3 className="project-detail__section-title">
              Sistema de Mentoría
            </h3>
            <ul className="project-detail__specific-list">
              <li>
                <strong>Algoritmo de emparejamiento:</strong>{' '}
                {project.mentoringSystem.matchingAlgorithm}
              </li>
              <li>
                <strong>Herramientas de colaboración:</strong>{' '}
                {project.mentoringSystem.collaborationTools}
              </li>
              <li>
                <strong>Sistema de seguimiento:</strong>{' '}
                {project.mentoringSystem.trackingSystem}
              </li>
              <li>
                <strong>Funcionalidades de comunidad:</strong>{' '}
                {project.mentoringSystem.communityFeatures}
              </li>
              <li>
                <strong>Accesibilidad:</strong>{' '}
                {project.mentoringSystem.accessibilityFeatures}
              </li>
            </ul>
          </div>
        ) : null;

      case 4: // Sistema de inventario
        return project.inventorySystem ? (
          <div className="project-detail__specific">
            <h3 className="project-detail__section-title">
              Sistema de Gestión de Inventario
            </h3>
            <ul className="project-detail__specific-list">
              <li>
                <strong>Arquitectura de datos:</strong>{' '}
                {project.inventorySystem.dataArchitecture}
              </li>
              <li>
                <strong>Automatización:</strong>{' '}
                {project.inventorySystem.automationFeatures}
              </li>
              <li>
                <strong>Integraciones:</strong>{' '}
                {project.inventorySystem.integrations}
              </li>
              <li>
                <strong>Sistema de reportes:</strong>{' '}
                {project.inventorySystem.reportingSystem}
              </li>
              <li>
                <strong>Seguridad:</strong>{' '}
                {project.inventorySystem.securityFeatures}
              </li>
            </ul>
          </div>
        ) : null;

      case 5: // App documentación médica
        return project.medicalDocumentation ? (
          <div className="project-detail__specific">
            <h3 className="project-detail__section-title">
              Sistema de Documentación Médica
            </h3>
            <ul className="project-detail__specific-list">
              <li>
                <strong>Seguridad y cumplimiento:</strong>{' '}
                {project.medicalDocumentation.securityCompliance}
              </li>
              <li>
                <strong>Plantillas clínicas:</strong>{' '}
                {project.medicalDocumentation.clinicalTemplates}
              </li>
              <li>
                <strong>Capacidades offline:</strong>{' '}
                {project.medicalDocumentation.offlineCapabilities}
              </li>
              <li>
                <strong>Gestión de pacientes:</strong>{' '}
                {project.medicalDocumentation.patientManagement}
              </li>
              <li>
                <strong>Accesibilidad:</strong>{' '}
                {project.medicalDocumentation.accessibilityFeatures}
              </li>
            </ul>
          </div>
        ) : null;

      default:
        return null;
    }
  };

  // Renderizar sección de función en el equipo si existe
  const renderTeamFunction = () => {
    if (!project.teamFunction) return null;

    return (
      <div className="project-detail__section">
        <h3 className="project-detail__section-title">
          Mi Función en el Equipo
        </h3>
        <p>{project.teamFunction}</p>
        {project.teamResponsibilities && (
          <ul className="project-detail__responsibilities">
            {project.teamResponsibilities.map((resp, index) => (
              <li key={index}>{resp}</li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  // Renderizar sección de objetivo del producto expandida si existe
  const renderProductObjective = () => {
    if (!project.productObjective) return null;

    return (
      <div className="project-detail__section">
        <h3 className="project-detail__section-title">Objetivo del Producto</h3>
        <p>{project.productObjective.main}</p>

        <div className="project-detail__subsection">
          <h4 className="project-detail__subsection-title">
            Objetivos de Negocio
          </h4>
          <ul className="project-detail__bullet-list">
            {project.productObjective.businessGoals.map((goal, index) => (
              <li key={index}>{goal}</li>
            ))}
          </ul>
        </div>

        <div className="project-detail__subsection">
          <h4 className="project-detail__subsection-title">
            Objetivos de Usuario
          </h4>
          <ul className="project-detail__bullet-list">
            {project.productObjective.userGoals.map((goal, index) => (
              <li key={index}>{goal}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  // Renderizar sección de investigación detallada si existe
  const renderDetailedResearch = () => {
    if (!project.detailedResearch) return null;

    return (
      <div className="project-detail__section">
        <h3 className="project-detail__section-title">Investigación</h3>
        <p>{project.research}</p>

        <div className="project-detail__subsection">
          <h4 className="project-detail__subsection-title">Métodos</h4>
          <ul className="project-detail__bullet-list">
            {project.detailedResearch.methods.map((method, index) => (
              <li key={index}>{method}</li>
            ))}
          </ul>
        </div>

        <div className="project-detail__subsection">
          <h4 className="project-detail__subsection-title">Hallazgos Clave</h4>
          <ul className="project-detail__bullet-list">
            {project.detailedResearch.keyInsights.map((insight, index) => (
              <li key={index}>{insight}</li>
            ))}
          </ul>
        </div>

        {project.detailedResearch.personas && (
          <div className="project-detail__subsection">
            <h4 className="project-detail__subsection-title">Personas</h4>
            <div className="project-detail__personas">
              {project.detailedResearch.personas.map((persona, index) => (
                <div key={index} className="project-detail__persona">
                  <h5 className="project-detail__persona-name">
                    {persona.name}
                  </h5>
                  <p>
                    <strong>Rol:</strong> {persona.role}
                  </p>
                  <p>
                    <strong>Objetivos:</strong> {persona.goals}
                  </p>
                  <p>
                    <strong>Puntos de dolor:</strong> {persona.painPoints}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  // Renderizar sección de usuarios detallados si existe
  const renderDetailedUsers = () => {
    if (!project.detailedUsers) return null;

    return (
      <div className="project-detail__section">
        <h3 className="project-detail__section-title">Usuarios</h3>
        <p>{project.users}</p>

        <div className="project-detail__subsection">
          <h4 className="project-detail__subsection-title">
            Usuarios Primarios
          </h4>
          <div className="project-detail__users-grid">
            {project.detailedUsers.primaryUsers.map((user, index) => (
              <div key={index} className="project-detail__user-card">
                <h5 className="project-detail__user-segment">{user.segment}</h5>
                <p>
                  <strong>Necesidades:</strong> {user.needs}
                </p>
                <p>
                  <strong>Comportamientos:</strong> {user.behaviors}
                </p>
              </div>
            ))}
          </div>
        </div>

        {project.detailedUsers.userJourney && (
          <div className="project-detail__subsection">
            <h4 className="project-detail__subsection-title">
              Journey de Usuario
            </h4>
            <div className="project-detail__journey">
              {project.detailedUsers.userJourney.map((stage, index) => (
                <div key={index} className="project-detail__journey-stage">
                  <div className="project-detail__journey-header">
                    <h5 className="project-detail__journey-title">
                      {stage.stage}
                    </h5>
                    <span className="project-detail__journey-number">
                      {index + 1}
                    </span>
                  </div>
                  <p>
                    <strong>Puntos de contacto:</strong> {stage.touchpoints}
                  </p>
                  <p>
                    <strong>Emociones:</strong> {stage.emotions}
                  </p>
                  <p>
                    <strong>Oportunidades:</strong> {stage.opportunities}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  // Renderizar arquitectura de diseño detallada si existe
  const renderArchitectureDetails = () => {
    if (!project.architectureDetails) return null;

    return (
      <div className="project-detail__section">
        <h3 className="project-detail__section-title">
          Arquitectura del Diseño
        </h3>
        <p>{project.designArchitecture}</p>

        <div className="project-detail__subsection">
          <h4 className="project-detail__subsection-title">
            Arquitectura de Información
          </h4>
          <div className="project-detail__architecture-grid">
            {project.architectureDetails.informationArchitecture.map(
              (section, index) => (
                <div
                  key={index}
                  className="project-detail__architecture-section"
                >
                  <h5 className="project-detail__architecture-title">
                    {section.section}
                  </h5>
                  <ul className="project-detail__architecture-components">
                    {section.components.map((component, idx) => (
                      <li key={idx}>{component}</li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>
        </div>

        <div className="project-detail__subsection">
          <h4 className="project-detail__subsection-title">
            Flujos de Usuario
          </h4>
          <ul className="project-detail__flows-list">
            {project.architectureDetails.userFlows.map((flow, index) => (
              <li key={index}>{flow}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  // Renderizar wireframes detallados si existe
  const renderWireframesDetails = () => {
    if (!project.wireframesDetails) return null;

    return (
      <div className="project-detail__section">
        <h3 className="project-detail__section-title">Wireframes</h3>
        <p>{project.wireframes}</p>
        <p>{project.wireframesDetails.process}</p>

        <div className="project-detail__subsection">
          <h4 className="project-detail__subsection-title">Pantallas Clave</h4>
          <div className="project-detail__wireframes-grid">
            {project.wireframesDetails.keyScreens.map((screen, index) => (
              <div key={index} className="project-detail__wireframe-card">
                <h5 className="project-detail__wireframe-title">
                  {screen.name}
                </h5>
                <p>
                  <strong>Propósito:</strong> {screen.purpose}
                </p>
                <p>
                  <strong>Elementos:</strong> {screen.elements}
                </p>
                <p>
                  <strong>Iteraciones:</strong> {screen.iterations}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Renderizar pruebas de usuario detalladas si existe
  const renderUserTestingDetails = () => {
    if (!project.userTestingDetails) return null;

    return (
      <div className="project-detail__section">
        <h3 className="project-detail__section-title">Pruebas con usuarios</h3>
        <p>{project.userTesting}</p>

        <div className="project-detail__subsection">
          <h4 className="project-detail__subsection-title">Metodología</h4>
          <div className="project-detail__testing-phases">
            {project.userTestingDetails.methodology.map((phase, index) => (
              <div key={index} className="project-detail__testing-phase">
                <h5 className="project-detail__testing-title">{phase.phase}</h5>
                <p>
                  <strong>Participantes:</strong> {phase.participants}
                </p>
                <p>
                  <strong>Formato:</strong> {phase.format}
                </p>
                <p>
                  <strong>Objetivos:</strong> {phase.goals}
                </p>
                <p>
                  <strong>Insights:</strong> {phase.insights}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="project-detail__subsection">
          <h4 className="project-detail__subsection-title">Métricas Clave</h4>
          <ul className="project-detail__metrics-list">
            {project.userTestingDetails.keyMetrics.map((metric, index) => (
              <li key={index}>{metric}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  // Renderizar prototipos detallados si existe
  const renderPrototypesDetails = () => {
    if (!project.prototypesDetails) return null;

    return (
      <div className="project-detail__section">
        <h3 className="project-detail__section-title">Prototipos</h3>
        <p>{project.prototypes}</p>
        <p>{project.prototypesDetails.evolutionProcess}</p>

        <div className="project-detail__subsection">
          <h4 className="project-detail__subsection-title">
            Tipos de Prototipos
          </h4>
          <div className="project-detail__prototypes-grid">
            {project.prototypesDetails.types.map((type, index) => (
              <div key={index} className="project-detail__prototype-card">
                <h5 className="project-detail__prototype-title">{type.type}</h5>
                <p>
                  <strong>Cobertura:</strong> {type.coverage}
                </p>
                <p>
                  <strong>Fidelidad:</strong> {type.fidelity}
                </p>
                <p>
                  <strong>Pruebas:</strong> {type.testing}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="project-detail__subsection">
          <h4 className="project-detail__subsection-title">
            Ejemplos de Iteración
          </h4>
          <ul className="project-detail__iteration-list">
            {project.prototypesDetails.iterationExamples.map(
              (example, index) => (
                <li key={index}>{example}</li>
              )
            )}
          </ul>
        </div>
      </div>
    );
  };

  // Renderizar diseños finales detallados si existe
  const renderFinalDesignsDetails = () => {
    if (!project.finalDesignsDetails) return null;

    return (
      <div className="project-detail__section">
        <h3 className="project-detail__section-title">Diseño final</h3>
        <p>{project.finalDesigns}</p>

        <div className="project-detail__subsection">
          <h4 className="project-detail__subsection-title">Estilo Visual</h4>
          <ul className="project-detail__visual-style">
            <li>
              <strong>Colores:</strong>{' '}
              {project.finalDesignsDetails.visualStyle.colors}
            </li>
            <li>
              <strong>Tipografía:</strong>{' '}
              {project.finalDesignsDetails.visualStyle.typography}
            </li>
            <li>
              <strong>Iconografía:</strong>{' '}
              {project.finalDesignsDetails.visualStyle.iconography}
            </li>
            <li>
              <strong>Espaciado:</strong>{' '}
              {project.finalDesignsDetails.visualStyle.spacing}
            </li>
          </ul>
        </div>

        <div className="project-detail__subsection">
          <h4 className="project-detail__subsection-title">Componentes</h4>
          <div className="project-detail__components-grid">
            {project.finalDesignsDetails.components.map((component, index) => (
              <div key={index} className="project-detail__component-card">
                <h5 className="project-detail__component-title">
                  {component.name}
                </h5>
                <p>
                  <strong>Variaciones:</strong> {component.variations}
                </p>
                <p>
                  <strong>Consideraciones:</strong> {component.considerations}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="project-detail__subsection">
          <h4 className="project-detail__subsection-title">
            Enfoque Responsive
          </h4>
          <p>{project.finalDesignsDetails.responsiveApproach}</p>
        </div>

        <div className="project-detail__subsection">
          <h4 className="project-detail__subsection-title">
            Consideraciones de Accesibilidad
          </h4>
          <p>{project.finalDesignsDetails.accessibilityConsiderations}</p>
        </div>
      </div>
    );
  };

  // Renderizar resultados y conclusiones detallados si existe
  const renderResultsAndConclusions = () => {
    if (!project.resultsAndConclusions) return null;

    return (
      <div className="project-detail__section">
        <h3 className="project-detail__section-title">Resultados</h3>
        <p>{project.results}</p>

        <div className="project-detail__subsection">
          <h4 className="project-detail__subsection-title">
            Impacto de Negocio
          </h4>
          <ul className="project-detail__impact-list">
            {project.resultsAndConclusions.businessImpact.map(
              (impact, index) => (
                <li key={index}>{impact}</li>
              )
            )}
          </ul>
        </div>

        <div className="project-detail__subsection">
          <h4 className="project-detail__subsection-title">
            Impacto para Usuarios
          </h4>
          <ul className="project-detail__impact-list">
            {project.resultsAndConclusions.userImpact.map((impact, index) => (
              <li key={index}>{impact}</li>
            ))}
          </ul>
        </div>

        <div className="project-detail__subsection">
          <h4 className="project-detail__subsection-title">
            Aprendizajes Clave
          </h4>
          <ul className="project-detail__learnings-list">
            {project.resultsAndConclusions.keyLearnings.map(
              (learning, index) => (
                <li key={index}>{learning}</li>
              )
            )}
          </ul>
        </div>

        <div className="project-detail__subsection">
          <h4 className="project-detail__subsection-title">
            Oportunidades Futuras
          </h4>
          <ul className="project-detail__opportunities-list">
            {project.resultsAndConclusions.futureOpportunities.map(
              (opportunity, index) => (
                <li key={index}>{opportunity}</li>
              )
            )}
          </ul>
        </div>
      </div>
    );
  };

  // Renderizar análisis competitivo si existe
  const renderCompetitiveAnalysis = () => {
    if (!project.competitors) return null;

    return (
      <div className="project-detail__section">
        <h3 className="project-detail__section-title">Análisis Competitivo</h3>
        <div className="project-detail__competitors">
          {project.competitors.map((competitor, index) => (
            <div key={index} className="project-detail__competitor">
              <h4 className="project-detail__competitor-name">
                {competitor.name}
              </h4>
              <p>{competitor.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Renderizar lecciones aprendidas si existen
  const renderLessons = () => {
    if (!project.professionalLessons && !project.personalLessons) return null;

    return (
      <div className="project-detail__lessons">
        <h3 className="project-detail__section-title">Lecciones Aprendidas</h3>

        {project.professionalLessons && (
          <div className="project-detail__subsection">
            <h4 className="project-detail__subsection-title">
              A nivel profesional
            </h4>
            <ul className="project-detail__professional-lessons">
              {project.professionalLessons.map((lesson, index) => (
                <li key={index}>{lesson}</li>
              ))}
            </ul>
          </div>
        )}

        {project.personalLessons && (
          <div className="project-detail__subsection">
            <h4 className="project-detail__subsection-title">
              A nivel personal
            </h4>
            <ul className="project-detail__personal-lessons">
              {project.personalLessons.map((lesson, index) => (
                <li key={index}>{lesson}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };

  // Renderizar consideraciones finales si existen
  const renderFinalConsiderations = () => {
    if (!project.finalConsiderations) return null;

    return (
      <div className="project-detail__final-considerations">
        <h3 className="project-detail__section-title">
          Consideraciones Finales
        </h3>
        <p>{project.finalConsiderations}</p>
      </div>
    );
  };

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
            {project.images.slice(0, 6).map((image, index) => (
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
            {project.images.length > 6 && (
              <div className="project-detail__more-images">
                +{project.images.length - 6} imágenes
              </div>
            )}
          </div>
        </div>

        {/* ===== VISIÓN GENERAL ===== */}
        <div className="project-detail__content-section">
          <h2 className="project-detail__main-title">Visión General</h2>

          {/* Información general */}
          <div className="project-detail__info">
            <div className="project-detail__col">
              <h3 className="project-detail__section-title">
                Rol en el equipo
              </h3>
              <p>{project.teamRole}</p>

              <h3 className="project-detail__section-title">Herramientas</h3>
              <div className="project-detail__tools">
                {project.tools.map((tool, index) => (
                  <span
                    key={index}
                    className={`project-detail__tool project-detail__tool--${tool
                      .toLowerCase()
                      .replace(/\s+/g, '-')}`}
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {project.url && (
                <>
                  <h3 className="project-detail__section-title">
                    Ver proyecto
                  </h3>
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

              {/* Información específica del tipo de proyecto */}
              {renderProjectSpecificInfo()}

              {/* Metas */}
              {project.goals && (
                <div className="project-detail__goals">
                  <h3 className="project-detail__section-title">
                    Metas del Proyecto
                  </h3>
                  <ul className="project-detail__goals-list">
                    {project.goals.map((goal, index) => (
                      <li key={index}>{goal}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="project-detail__col project-detail__col--wide">
              <h3 className="project-detail__section-title">Descripción</h3>
              <p className="project-detail__description">
                {project.description}
              </p>

              <h3 className="project-detail__section-title">Objetivo</h3>
              <p>{project.objective}</p>

              {/* Análisis competitivo */}
              {renderCompetitiveAnalysis()}
            </div>
          </div>
        </div>

        {/* ===== PROCESO DE DISEÑO ===== */}
        <div className="project-detail__content-section">
          <h2 className="project-detail__main-title">Proceso de Diseño</h2>

          {/* Mi Función en el Equipo */}
          {renderTeamFunction()}

          {/* Objetivo del Producto */}
          {renderProductObjective()}

          {/* Investigación */}
          {renderDetailedResearch()}

          {/* Usuarios */}
          {renderDetailedUsers()}

          {/* Arquitectura de Diseño */}
          {renderArchitectureDetails()}

          {/* Wireframes */}
          {renderWireframesDetails()}

          {/* Pruebas con Usuarios */}
          {renderUserTestingDetails()}

          {/* Prototipos */}
          {renderPrototypesDetails()}

          {/* Diseños Finales */}
          {renderFinalDesignsDetails()}
        </div>

        {/* ===== RESULTADOS ===== */}
        <div className="project-detail__content-section">
          <h2 className="project-detail__main-title">
            Resultados y Conclusiones
          </h2>

          {/* Resultados y Conclusiones */}
          {renderResultsAndConclusions()}

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

          {/* Lecciones Aprendidas */}
          {renderLessons()}

          {/* Consideraciones Finales */}
          {renderFinalConsiderations()}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
