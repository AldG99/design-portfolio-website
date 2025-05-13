import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import project4 from '../../../data/projects/project4';
import './ProjectDetail4.scss';

const ProjectDetail4 = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    // Set document title
    document.title = `Portafolio | ${project4.title}`;
  }, []);

  return (
    <main className="project-detail project-detail--inventa">
      <div className="container">
        {/* Hero Section */}
        <header className="project-detail__hero">
          {/* Imagen principal al inicio - ahora a ancho completo */}
          <div className="hero-image hero-image--full-width">
            <img src={project4.thumbnail} alt={project4.title} />
          </div>

          <h1 className="section-title">{project4.title}</h1>
          <p className="project-detail__subtitle">
            {project4.shortDescription}
          </p>

          <div className="project-detail__meta">
            <div className="project-detail__meta-item">
              <span className="meta-value">{project4.date}</span>
            </div>
            {/* Tools moved below date */}
          </div>

          {/* Tools ahora están fuera del meta container y debajo de la fecha */}
          <div className="project-detail__tools">
            {project4.tools.map((tool, index) => (
              <span
                key={index}
                className={`tool-tag tool-tag--${tool
                  .toLowerCase()
                  .replace(/\s+/g, '-')}`}
              >
                {tool}
              </span>
            ))}
          </div>
        </header>

        {/* Project Overview */}
        <section className="project-detail__overview">
          <h2 className="section-subtitle">Resumen del proyecto</h2>
          <p className="overview-text">{project4.description}</p>

          {/* Enlaces a repositorios */}
          {project4.repositories && (
            <div className="project-detail__links">
              <h3 className="subsection-title">Enlaces al código</h3>
              <div className="project-detail__repository-links">
                {project4.repositories.mobile && (
                  <a
                    href={project4.repositories.mobile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="repository-link"
                  >
                    <span className="repository-icon">
                      {project4.repositories.mobile.icon}
                    </span>
                    {project4.repositories.mobile.label}
                  </a>
                )}
                {project4.repositories.web && (
                  <a
                    href={project4.repositories.web.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="repository-link"
                  >
                    <span className="repository-icon">
                      {project4.repositories.web.icon}
                    </span>
                    {project4.repositories.web.label}
                  </a>
                )}
              </div>
            </div>
          )}
        </section>

        {/* 1. DEFINICIÓN DEL PROYECTO */}
        <section className="project-detail__section">
          <h2 className="section-subtitle">1. Definición del Proyecto</h2>

          {/* Problem and Goal - ahora en layout horizontal */}
          <div className="project-detail__problem-goal-container">
            <div className="project-detail__problem">
              <h3 className="subsection-title">Problema</h3>
              <p className="problem-text">{project4.problem}</p>
            </div>

            <div className="project-detail__goal">
              <h3 className="subsection-title">Objetivo</h3>
              <p className="goal-text">{project4.goal}</p>
            </div>
          </div>

          {/* Role */}
          <div className="project-detail__role">
            <h3 className="subsection-title">Mi rol</h3>
            <p className="role-text">{project4.role}</p>
          </div>

          {/* Responsibilities */}
          <div className="project-detail__responsibilities">
            <h3 className="subsection-title">Responsabilidades</h3>
            <ul className="responsibilities-list">
              {project4.responsibilities.map((responsibility, index) => (
                <li key={index} className="responsibility-item">
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 2. INVESTIGACIÓN Y DESCUBRIMIENTO */}
        <section className="project-detail__section">
          <h2 className="section-subtitle">
            2. Investigación y Descubrimiento
          </h2>

          <div className="project-detail__understanding">
            <p className="understanding-text">{project4.research.summary}</p>
            <div className="understanding-image">
              <img
                src={project4.research.researchImage}
                alt="Investigación de usuario"
              />
            </div>

            <h3 className="subsection-title">Problemas clave</h3>
            <ol className="key-issues-list">
              {project4.research.keyIssues.map((issue, index) => (
                <li key={index} className="key-issue-item">
                  {issue}
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 3. USUARIOS */}
        <section className="project-detail__section">
          <h2 className="section-subtitle">3. Usuarios</h2>

          {/* User Personas */}
          <div className="project-detail__personas">
            <h3 className="subsection-title">Perfiles de usuario</h3>
            <div className="personas-horizontal-grid">
              {project4.userProfiles.map((profile, index) => (
                <div key={index} className="persona-card">
                  <div className="persona-statement">
                    <h4 className="subsection-title">
                      Declaración de problema
                    </h4>
                    <p className="persona-problem">
                      {profile.problemStatement}
                    </p>
                    <div className="persona-image">
                      <img
                        src={profile.problemStatementImage}
                        alt={`Persona ${index + 1}`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* User Journey Maps */}
          <div className="project-detail__journey-maps">
            <h3 className="subsection-title">Mapas de recorrido del usuario</h3>
            <div className="journey-maps-vertical">
              {project4.userJourneyMap.map((journey, index) => (
                <div key={index} className="journey-card">
                  <h4 className="journey-title">
                    {journey.userJourneyMapPersona}
                  </h4>
                  <p className="journey-description">
                    {journey.userJourneyMap}
                  </p>
                  <div className="journey-image">
                    <img
                      src={journey.userJourneyMapImage}
                      alt={`Mapa de recorrido de ${journey.userJourneyMapPersona}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. ANÁLISIS COMPETITIVO */}
        <section className="project-detail__section">
          <h2 className="section-subtitle">4. Análisis Competitivo</h2>

          <div className="project-detail__competition">
            <div className="competitors-grid">
              {project4.competitors.map((competitor, index) => (
                <div key={index} className="competitor-card">
                  <h3 className="competitor-name">{competitor.name}</h3>
                  <p className="competitor-description">
                    {competitor.description}
                  </p>

                  <div className="competitor-details">
                    <div className="competitor-section">
                      <h4 className="competitor-section-title">Fortalezas</h4>
                      <ul className="competitor-list strengths">
                        {competitor.strengths.map((strength, i) => (
                          <li key={i}>{strength}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="competitor-section">
                      <h4 className="competitor-section-title">Debilidades</h4>
                      <ul className="competitor-list weaknesses">
                        {competitor.weaknesses.map((weakness, i) => (
                          <li key={i}>{weakness}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="competitor-audience">
                    <h4 className="competitor-section-title">
                      Audiencia objetivo
                    </h4>
                    <p>{competitor.targetAudience}</p>
                  </div>

                  <div className="competitor-images">
                    {competitor.competitiveImage.map((image, i) => (
                      <img
                        key={i}
                        src={image}
                        alt={`${competitor.name} captura ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. ARQUITECTURA DE INFORMACIÓN */}
        <section className="project-detail__section">
          <h2 className="section-subtitle">5. Arquitectura de Información</h2>

          <div className="design-section">
            <h3 className="subsection-title">SITEMAP</h3>
            <p className="design-text">
              {project4.informationArchitecture.sitemap.description}
            </p>
            <div className="design-image">
              <img
                src={project4.informationArchitecture.sitemap.sitemapImage}
                alt="Mapa del sitio"
              />
            </div>
          </div>

          <div className="design-section">
            <h3 className="subsection-title">FLUJO DE USUARIO</h3>
            <p className="design-text">
              {project4.informationArchitecture.userFlow.description}
            </p>
            <div className="design-image">
              <img
                src={project4.informationArchitecture.userFlow.userFlowImage}
                alt="Flujo de usuario"
              />
            </div>
          </div>
        </section>

        {/* 6. DISEÑO DE WIREFRAMES */}
        <section className="project-detail__section">
          <h2 className="section-subtitle">6. Diseño de Wireframes</h2>

          <div className="design-section">
            <h3 className="subsection-title">Wireframes en papel</h3>
            <p className="design-text">
              {project4.wireframing.paperWireframes.description}
            </p>
            <div className="design-images">
              {project4.wireframing.paperWireframes.paperWireframesImage.map(
                (image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Wireframe en papel ${index + 1}`}
                  />
                )
              )}
            </div>
          </div>

          <div className="design-section">
            <p className="design-text">
              {project4.wireframing.paperWireframes.refinedWireframes}
            </p>
            <div className="design-image">
              <img
                src={
                  project4.wireframing.paperWireframes.refinedWireframesImage
                }
                alt="Wireframes refinados"
              />
            </div>
          </div>

          <div className="design-section">
            <h3 className="subsection-title">Variaciones de dispositivo</h3>
            <p className="design-text">
              {project4.wireframing.digitalWireframes.deviceVariations}
            </p>
            <div className="design-images">
              {project4.wireframing.digitalWireframes.deviceVariationsImage.map(
                (image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Variación de dispositivo ${index + 1}`}
                  />
                )
              )}
            </div>
          </div>

          <div className="design-section">
            <h3 className="subsection-title">Wireframes digitales</h3>
            <p className="design-text">
              {project4.wireframing.digitalWireframes.description}
            </p>
            <div className="design-image">
              <img
                src={
                  project4.wireframing.digitalWireframes.digitalWireframesImage
                }
                alt="Wireframes digitales"
              />
            </div>
          </div>

          <div className="design-section">
            <h3 className="subsection-title">Variaciones digitales</h3>
            <p className="design-text">
              {project4.wireframing.digitalWireframes.sizeVariations}
            </p>
            <div className="design-images">
              {project4.wireframing.digitalWireframes.sizeVariationsImage.map(
                (image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Variación digital ${index + 1}`}
                  />
                )
              )}
            </div>
          </div>
        </section>

        {/* 7. PROTOTIPADO */}
        <section className="project-detail__section">
          <h2 className="section-subtitle">7. Prototipado</h2>

          <div className="design-section">
            <h3 className="subsection-title">Prototipo de baja fidelidad</h3>
            <p className="design-text">
              {project4.prototyping.lowFidelity.description}
            </p>
            <div className="design-image">
              <img
                src={project4.prototyping.lowFidelity.prototypeImage}
                alt="Prototipo de baja fidelidad"
              />
            </div>
            <div className="prototype-link">
              <a
                href={project4.prototyping.lowFidelity.prototypeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--outline"
              >
                Ver prototipo interactivo
              </a>
            </div>
          </div>
        </section>

        {/* 8. ESTUDIO DE USABILIDAD Y REFINAMIENTO */}
        <section className="project-detail__section">
          <h2 className="section-subtitle">
            8. Estudio de Usabilidad y Refinamiento
          </h2>

          <div className="usability-info">
            <div className="usability-details">
              <div className="detail-item">
                <span className="detail-label">Tipo:</span>
                <span className="detail-value">
                  {project4.usabilityStudy.parameters.type}
                </span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Ubicación:</span>
                <span className="detail-value">
                  {project4.usabilityStudy.parameters.location}
                </span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Participantes:</span>
                <span className="detail-value">
                  {project4.usabilityStudy.parameters.participants}
                </span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Duración:</span>
                <span className="detail-value">
                  {project4.usabilityStudy.parameters.time}
                </span>
              </div>
            </div>
          </div>

          <h3 className="subsection-title">Principales hallazgos</h3>
          <div className="findings-list">
            {project4.usabilityStudy.keyFindings.map((finding, index) => (
              <div key={index} className="finding-item">
                <h4 className="finding-area">{finding.area}</h4>
                <p className="finding-description">{finding.finding}</p>
                <div className="finding-quotes">
                  {finding.quotes.map((quote, i) => (
                    <blockquote key={i} className="user-quote">
                      {quote}
                    </blockquote>
                  ))}
                </div>
                {finding.improvement && (
                  <div className="finding-improvement">
                    <span className="improvement-label">Mejora:</span>
                    <p className="improvement-text">{finding.improvement}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <h3 className="subsection-title">Refinando el diseño</h3>
          <div className="mockups-section">
            {project4.usabilityStudy.refiningDesign.map((mockup, index) => (
              <div key={index} className="mockup-item">
                <p className="mockup-description">{mockup.mockups}</p>
                <div className="mockup-image">
                  <img src={mockup.mockupsImage} alt={`Mockup ${index + 1}`} />
                </div>
                <div className="design-decisions">
                  <h4 className="decisions-title">Decisiones de diseño:</h4>
                  <ul className="decisions-list">
                    {mockup.designDecisions.map((decision, i) => (
                      <li key={i}>{decision}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 9. DISEÑO VISUAL Y CONSIDERACIONES */}
        <section className="project-detail__section">
          <h2 className="section-subtitle">
            9. Diseño Visual y Consideraciones
          </h2>

          <h3 className="subsection-title">Paleta de colores</h3>
          <div className="visual-choices">
            <div className="color-palette">
              <h4 className="palette-title">Paleta de colores</h4>
              <ul className="palette-list">
                <li className="palette-item">
                  <span className="palette-percent">60%:</span>
                  <span className="palette-color">
                    <span
                      className="color-sample"
                      style={{
                        backgroundColor: '#F6F7F8',
                        display: 'inline-block',
                        width: '20px',
                        height: '20px',
                        borderRadius: '4px',
                        marginRight: '8px',
                        verticalAlign: 'middle',
                      }}
                    ></span>
                    {project4.visualDesign.colorPalette['60']}
                  </span>
                </li>
                <li className="palette-item">
                  <span className="palette-percent">30%:</span>
                  <span className="palette-color">
                    <span
                      className="color-sample"
                      style={{
                        backgroundColor: '#2D3748',
                        display: 'inline-block',
                        width: '20px',
                        height: '20px',
                        borderRadius: '4px',
                        marginRight: '8px',
                        verticalAlign: 'middle',
                      }}
                    ></span>
                    {project4.visualDesign.colorPalette['30']}
                  </span>
                </li>
                <li className="palette-item">
                  <span className="palette-percent">10%:</span>
                  <span className="palette-color">
                    <span
                      className="color-sample"
                      style={{
                        backgroundColor: '#6C63FF',
                        display: 'inline-block',
                        width: '20px',
                        height: '20px',
                        borderRadius: '4px',
                        marginRight: '8px',
                        verticalAlign: 'middle',
                      }}
                    ></span>
                    {project4.visualDesign.colorPalette['10']}
                  </span>
                </li>
              </ul>
              <p className="palette-reasoning">
                {project4.visualDesign.colorPalette.reasoning}
              </p>
            </div>
          </div>

          <h3 className="subsection-title">Diseño responsivo</h3>
          <div className="screen-variations">
            <p className="strategy-description">
              {project4.visualDesign.responsiveDesign.strategy}
            </p>
            <ul className="strategy-decisions">
              {project4.visualDesign.responsiveDesign.keyDecisions.map(
                (decision, index) => (
                  <li key={index} className="strategy-item">
                    {decision}
                  </li>
                )
              )}
            </ul>
            <p className="screen-description">
              {project4.visualDesign.responsiveDesign.screenExamples}
            </p>
            <div className="screen-image">
              <img
                src={project4.visualDesign.responsiveDesign.originalScreenSize}
                alt="Tamaño original"
              />
            </div>
            <div className="screen-variations-images">
              {project4.visualDesign.responsiveDesign.screenSizeVariationsImage.map(
                (image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Variación de pantalla ${index + 1}`}
                  />
                )
              )}
            </div>
          </div>

          <div className="design-section">
            <h3 className="subsection-title">Prototipo de alta fidelidad</h3>
            <div className="high-fidelity-section">
              {project4.prototyping.highFidelity.description.map(
                (text, index) => (
                  <p key={index} className="high-fidelity-text">
                    {text}
                  </p>
                )
              )}
              <div className="high-fidelity-image">
                <img
                  src={project4.prototyping.highFidelity.highFidelityImage}
                  alt="Prototipo de alta fidelidad"
                />
              </div>
              <div className="prototype-links">
                <a
                  href={project4.prototyping.highFidelity.viewPrototypes[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--outline"
                >
                  Ver prototipo web
                </a>
                <a
                  href={project4.prototyping.highFidelity.viewPrototypes[1]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--outline"
                >
                  Ver prototipo móvil
                </a>
              </div>
            </div>
          </div>

          <h3 className="subsection-title">Consideraciones de accesibilidad</h3>
          <ol className="accessibility-list">
            {project4.visualDesign.accessibility.considerations.map(
              (consideration, index) => (
                <li key={index} className="accessibility-item">
                  {consideration}
                </li>
              )
            )}
          </ol>
        </section>

        {/* 10. RESULTADOS Y REFLEXIÓN */}
        <section className="project-detail__section">
          <h2 className="section-subtitle">10. Resultados y Reflexión</h2>

          <div className="results-section">
            <h3 className="subsection-title">Conclusiones</h3>
            <p className="conclusion-text">{project4.conclusion.summary}</p>
          </div>

          <div className="results-section">
            <h3 className="subsection-title">Impacto</h3>
            <p className="impact-text">{project4.conclusion.impact}</p>
          </div>

          <div className="results-section">
            <h3 className="subsection-title">Aprendizajes</h3>
            <p className="learnings-text">{project4.conclusion.learnings}</p>

            <div className="lessons-grid">
              <div className="lessons-section">
                <h4 className="lessons-title">Lecciones profesionales</h4>
                <ul className="lessons-list">
                  {project4.conclusion.professionalLessons.map(
                    (lesson, index) => (
                      <li key={index} className="lesson-item">
                        {lesson}
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div className="lessons-section">
                <h4 className="lessons-title">Lecciones personales</h4>
                <ul className="lessons-list">
                  {project4.conclusion.personalLessons.map((lesson, index) => (
                    <li key={index} className="lesson-item">
                      {lesson}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="results-section">
            <h3 className="subsection-title">Próximos pasos</h3>
            <ol className="next-steps-list">
              {project4.conclusion.nextSteps.map((step, index) => (
                <li key={index} className="next-step-item">
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div className="results-section">
            <h3 className="subsection-title">Consideraciones finales</h3>
            <p className="final-text">
              {project4.conclusion.finalConsiderations}
            </p>
          </div>
        </section>

        {/* Back to projects */}
        <section className="project-detail__navigation">
          <Link to="/trabajo" className="btn btn--outline">
            ← Volver a todos los proyectos
          </Link>
          <Link to="/" className="btn">
            Ir al inicio
          </Link>
        </section>
      </div>
    </main>
  );
};

export default ProjectDetail4;
