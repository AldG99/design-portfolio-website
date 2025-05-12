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
        </section>

        {/* Problem and Goal - ahora en layout horizontal */}
        <section className="project-detail__problem-goal-container">
          <div className="project-detail__problem">
            <h2 className="section-subtitle">Problema</h2>
            <p className="problem-text">{project4.problem}</p>
          </div>

          <div className="project-detail__goal">
            <h2 className="section-subtitle">Objetivo</h2>
            <p className="goal-text">{project4.goal}</p>
          </div>
        </section>

        {/* Role */}
        <section className="project-detail__role">
          <h2 className="section-subtitle">Mi rol</h2>
          <p className="role-text">{project4.role}</p>
        </section>

        {/* Responsibilities */}
        <section className="project-detail__responsibilities">
          <h2 className="section-subtitle">Responsabilidades</h2>
          <ul className="responsibilities-list">
            {project4.responsibilities.map((responsibility, index) => (
              <li key={index} className="responsibility-item">
                {responsibility}
              </li>
            ))}
          </ul>
        </section>

        {/* User Understanding */}
        <section className="project-detail__understanding">
          <h2 className="section-subtitle">Comprensión del usuario</h2>
          <p className="understanding-text">{project4.summary}</p>
          <div className="understanding-image">
            <img src={project4.research} alt="Investigación de usuario" />
          </div>

          <h3 className="subsection-title">Problemas clave</h3>
          <ol className="key-issues-list">
            {project4.keyIssues.map((issue, index) => (
              <li key={index} className="key-issue-item">
                {issue}
              </li>
            ))}
          </ol>
        </section>

        {/* User Personas */}
        <section className="project-detail__personas">
          <h2 className="section-subtitle">Perfiles de usuario</h2>
          <div className="personas-horizontal-grid">
            {project4.userProfiles.map((profile, index) => (
              <div key={index} className="persona-card">
                <div className="persona-statement">
                  <h3 className="subsection-title">Declaración de problema</h3>
                  <p className="persona-problem">{profile.problemStatement}</p>
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
        </section>

        {/* User Journey Maps */}
        <section className="project-detail__journey-maps">
          <h2 className="section-subtitle">Mapas de recorrido del usuario</h2>
          <div className="journey-maps-vertical">
            {project4.userJourneyMap.map((journey, index) => (
              <div key={index} className="journey-card">
                <h4 className="journey-title">
                  {journey.userJourneyMapPersona}
                </h4>
                <p className="journey-description">{journey.userJourneyMap}</p>
                <div className="journey-image">
                  <img
                    src={journey.userJourneyMapImage}
                    alt={`Mapa de recorrido de ${journey.userJourneyMapPersona}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Competitive Analysis */}
        <section className="project-detail__competition">
          <h2 className="section-subtitle">Análisis competitivo</h2>
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
        </section>

        {/* Design Process */}
        <section className="project-detail__design">
          <h2 className="section-subtitle">Inicio del diseño</h2>

          <div className="design-section">
            <h3 className="subsection-title">SITEMAP</h3>
            <p className="design-text">{project4.sitemap}</p>
            <div className="design-image">
              <img src={project4.sitemapImage} alt="Mapa del sitio" />
            </div>
          </div>

          <div className="design-section">
            <h3 className="subsection-title">WIREFRAMES</h3>
            <p className="design-text">{project4.paperWireframes}</p>
            <div className="design-images">
              {project4.paperWireframesImage.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Wireframe en papel ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="design-section">
            <p className="design-text">{project4.wireframes}</p>
            <div className="design-image">
              <img src={project4.wireframesImage} alt="Wireframes refinados" />
            </div>
          </div>

          <div className="design-section">
            <h3 className="subsection-title">Wireframes digitales</h3>
            <p className="design-text">{project4.digitalWireframes}</p>
            <div className="design-image">
              <img
                src={project4.digitalWireframesImage}
                alt="Wireframes digitales"
              />
            </div>
          </div>

          <div className="design-section">
            <h3 className="subsection-title">Variaciones digitales</h3>
            <p className="design-text">{project4.sizeVariationsDigital}</p>
            <div className="design-images">
              {project4.sizeVariationsDigitalImage.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Variación digital ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="design-section">
            <h3 className="subsection-title">Prototipo de baja fidelidad</h3>
            <p className="design-text">{project4.prototype}</p>
            <div className="design-image">
              <img
                src={project4.prototypeImage}
                alt="Prototipo de baja fidelidad"
              />
            </div>
            <div className="prototype-link">
              <a
                href={project4.prototypeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--outline"
              >
                Ver prototipo interactivo
              </a>
            </div>
          </div>
        </section>

        {/* Usability Study */}
        <section className="project-detail__usability">
          <h2 className="section-subtitle">Estudio de usabilidad</h2>

          <div className="usability-info">
            <div className="usability-details">
              <div className="detail-item">
                <span className="detail-label">Tipo:</span>
                <span className="detail-value">
                  {project4.usabilityStudy.type}
                </span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Ubicación:</span>
                <span className="detail-value">
                  {project4.usabilityStudy.location}
                </span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Participantes:</span>
                <span className="detail-value">
                  {project4.usabilityStudy.participants}
                </span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Duración:</span>
                <span className="detail-value">
                  {project4.usabilityStudy.time}
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

          <h3 className="subsection-title">
            Variaciones de tamaño de pantalla
          </h3>
          <div className="screen-variations">
            <div className="screen-image">
              <img
                src={project4.usabilityStudy.screenSizeImage}
                alt="Tamaño original"
              />
            </div>
            <p className="screen-description">
              {project4.usabilityStudy.screenSizeVariations}
            </p>
            <div className="screen-variations-images">
              {project4.usabilityStudy.screenSizeVariationsImage.map(
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

          <h3 className="subsection-title">Estrategia de diseño</h3>
          <p className="strategy-description">
            {project4.usabilityStudy.description}
          </p>
          <ul className="strategy-decisions">
            {project4.usabilityStudy.keyDecisions.map((decision, index) => (
              <li key={index} className="strategy-item">
                {decision}
              </li>
            ))}
          </ul>

          <h3 className="subsection-title">Prototipo de alta fidelidad</h3>
          <div className="high-fidelity-section">
            {project4.usabilityStudy.highFidelity.map((text, index) => (
              <p key={index} className="high-fidelity-text">
                {text}
              </p>
            ))}
            <div className="high-fidelity-image">
              <img
                src={project4.usabilityStudy.highFidelityImage}
                alt="Prototipo de alta fidelidad"
              />
            </div>
            <div className="prototype-links">
              {project4.usabilityStudy.viewPrototypes.map((url, index) => (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--outline"
                >
                  Ver prototipo {index + 1}
                </a>
              ))}
            </div>
          </div>

          <h3 className="subsection-title">Elecciones de diseño visual</h3>
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
                        backgroundColor:
                          project4.usabilityStudy.visualDesignChoices
                            .colorPalette['60'],
                        display: 'inline-block',
                        width: '20px',
                        height: '20px',
                        borderRadius: '4px',
                        marginRight: '8px',
                        verticalAlign: 'middle',
                      }}
                    ></span>
                    {
                      project4.usabilityStudy.visualDesignChoices.colorPalette[
                        '60'
                      ]
                    }
                  </span>
                </li>
                <li className="palette-item">
                  <span className="palette-percent">30%:</span>
                  <span className="palette-color">
                    <span
                      className="color-sample"
                      style={{
                        backgroundColor:
                          project4.usabilityStudy.visualDesignChoices
                            .colorPalette['30'],
                        display: 'inline-block',
                        width: '20px',
                        height: '20px',
                        borderRadius: '4px',
                        marginRight: '8px',
                        verticalAlign: 'middle',
                      }}
                    ></span>
                    {
                      project4.usabilityStudy.visualDesignChoices.colorPalette[
                        '30'
                      ]
                    }
                  </span>
                </li>
                <li className="palette-item">
                  <span className="palette-percent">10%:</span>
                  <span className="palette-color">
                    <span
                      className="color-sample"
                      style={{
                        backgroundColor:
                          project4.usabilityStudy.visualDesignChoices
                            .colorPalette['10'],
                        display: 'inline-block',
                        width: '20px',
                        height: '20px',
                        borderRadius: '4px',
                        marginRight: '8px',
                        verticalAlign: 'middle',
                      }}
                    ></span>
                    {
                      project4.usabilityStudy.visualDesignChoices.colorPalette[
                        '10'
                      ]
                    }
                  </span>
                </li>
              </ul>
              <p className="palette-reasoning">
                {
                  project4.usabilityStudy.visualDesignChoices.colorPalette
                    .reasoning
                }
              </p>
            </div>
          </div>

          <h3 className="subsection-title">Consideraciones de accesibilidad</h3>
          <ol className="accessibility-list">
            {project4.usabilityStudy.accessibilityConsiderations.map(
              (consideration, index) => (
                <li key={index} className="accessibility-item">
                  {consideration}
                </li>
              )
            )}
          </ol>
        </section>

        {/* Results and Conclusions */}
        <section className="project-detail__results">
          <h2 className="section-subtitle">Resultados</h2>

          <div className="results-section">
            <h3 className="subsection-title">Conclusiones</h3>
            <p className="conclusion-text">
              {project4.usabilityStudy.conclusion}
            </p>
          </div>

          <div className="results-section">
            <h3 className="subsection-title">Impacto</h3>
            <p className="impact-text">{project4.usabilityStudy.impact}</p>
          </div>

          <div className="results-section">
            <h3 className="subsection-title">Aprendizajes</h3>
            <p className="learnings-text">
              {project4.usabilityStudy.learnings}
            </p>

            <div className="lessons-grid">
              <div className="lessons-section">
                <h4 className="lessons-title">Lecciones profesionales</h4>
                <ul className="lessons-list">
                  {project4.usabilityStudy.professionalLessons.map(
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
                  {project4.usabilityStudy.personalLessons.map(
                    (lesson, index) => (
                      <li key={index} className="lesson-item">
                        {lesson}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>

          <div className="results-section">
            <h3 className="subsection-title">Próximos pasos</h3>
            <ol className="next-steps-list">
              {project4.usabilityStudy.nextSteps.map((step, index) => (
                <li key={index} className="next-step-item">
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div className="results-section">
            <h3 className="subsection-title">Consideraciones finales</h3>
            <p className="final-text">
              {project4.usabilityStudy.finalConsiderations}
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
