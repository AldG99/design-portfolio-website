import React, { useEffect, useState } from 'react';
import { useScrollReveal } from '../../../context/ScrollRevealContext';
import project5 from '../../../data/projects/project5';
import './ProjectDetail5.scss';

const ProjectDetail5 = () => {
  const { revealRef } = useScrollReveal();
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Portafolio | ${project5.title}`;
  }, []);

  const openImageModal = imageUrl => {
    setSelectedImage(imageUrl);
    document.body.style.overflow = 'hidden';
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const isUserProfile = profileText => {
    return (
      profileText.includes('Guadalupe') ||
      profileText.includes('dulcería') ||
      profileText.includes('Araceli') ||
      profileText.includes('ferretería')
    );
  };

  return (
    <main className="project-detail project-detail--inventa">
      <div className="container">
        <header className="project-detail__hero">
          <div className="hero-image hero-image--full-width" ref={revealRef}>
            <img
              src={project5.thumbnail}
              alt={project5.title}
              draggable="false"
              className="no-save"
              onContextMenu={e => e.preventDefault()}
            />
          </div>

          <div className="project-detail__meta">
            <div className="project-detail__meta-item">
              <span className="meta-value">Mayo 2025</span>
            </div>
          </div>

          <div className="project-detail__tools">
            {project5.tools.map((tool, index) => (
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

        <section className="project-detail__overview">
          <h2 className="section-subtitle">RESUMEN DEL PROYECTO</h2>
          <p className="overview-text">{project5.description}</p>

          {project5.repositories && (
            <div className="project-detail__links">
              <div className="project-detail__repository-links">
                {project5.repositories.mobile && (
                  <a
                    href={project5.repositories.mobile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="repository-link"
                  >
                    <span className="repository-icon">
                      {project5.repositories.mobile.icon}
                    </span>
                    {project5.repositories.mobile.label}
                  </a>
                )}
                {project5.repositories.web && (
                  <a
                    href={project5.repositories.web.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="repository-link"
                  >
                    <span className="repository-icon">
                      {project5.repositories.web.icon}
                    </span>
                    {project5.repositories.web.label}
                  </a>
                )}
              </div>
            </div>
          )}
        </section>

        <section className="project-detail__section">
          <div className="project-detail__problem-goal-container">
            <div className="project-detail__problem">
              <h3 className="subsection-title">PROBLEMA</h3>
              <p className="problem-text">{project5.problem}</p>
            </div>

            <div className="project-detail__goal">
              <h3 className="subsection-title">OBJETIVO</h3>
              <p className="goal-text">{project5.goal}</p>
            </div>
          </div>

          <div className="project-detail__role">
            <h3 className="subsection-title">MI ROL</h3>
            <p className="role-text">{project5.role}</p>
          </div>

          <div className="project-detail__responsibilities">
            <h3 className="subsection-title">RESPONSABILIDADES</h3>
            <ul className="responsibilities-list">
              {project5.responsibilities.map((responsibility, index) => (
                <li key={index} className="responsibility-item">
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="project-detail__section">
          <h2 className="section-subtitle">INVESTIGACIÓN Y IDEACIÓN</h2>

          <div className="project-detail__understanding">
            <p className="understanding-text">{project5.research.summary}</p>
            <div className="understanding-image">
              <img
                src={project5.research.researchImage}
                alt="Investigación de usuario"
              />
            </div>

            <h3 className="subsection-title">PROBLEMAS CLAVE</h3>
            <ol className="key-issues-list">
              {project5.research.keyIssues.map((issue, index) => (
                <li key={index} className="key-issue-item">
                  {issue}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="project-detail__section">
          <h2 className="section-subtitle">PERSONAS</h2>

          <div className="project-detail__personas">
            <div className="personas-horizontal-grid">
              {project5.userProfiles.map((profile, index) => (
                <div key={index} className="persona-card">
                  <div className="persona-statement">
                    <p className="persona-problem">
                      {profile.problemStatement}
                    </p>
                    <div className="persona-image">
                      <img
                        src={profile.problemStatementImage}
                        alt={`Persona ${index + 1}`}
                        onClick={() =>
                          isUserProfile(profile.problemStatement)
                            ? openImageModal(profile.problemStatementImage)
                            : null
                        }
                        className={
                          isUserProfile(profile.problemStatement)
                            ? 'clickable-image'
                            : ''
                        }
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="project-detail__journey-maps">
            <h3 className="subsection-title">MAPAS DE RECORRIDO DEL USUARIO</h3>
            <div className="journey-maps-vertical">
              {project5.userJourneyMap.map((journey, index) => (
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

          <div className="project-detail__improvement-opportunities">
            <h3 className="subsection-title">OPORTUNIDADES DE MEJORA</h3>
            <div className="opportunities-grid">
              {project5.improvementOpportunities.opportunities.map(
                (opportunity, index) => (
                  <div key={index} className="opportunity-card">
                    <h4 className="opportunity-title">{opportunity.title}</h4>
                    <p className="opportunity-description">
                      {opportunity.description}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        <section className="project-detail__section">
          <h2 className="section-subtitle">ANÁLISIS COMPETITIVO</h2>

          <div className="project-detail__competition">
            <div className="competitors-grid">
              {project5.competitors.map((competitor, index) => (
                <div key={index} className="competitor-card">
                  <h3 className="competitor-name">{competitor.name}</h3>
                  <p className="competitor-description">
                    {competitor.description}
                  </p>

                  <div className="competitor-details">
                    <div className="competitor-section">
                      <h4 className="competitor-section-title">FORTALEZAS</h4>
                      <ul className="competitor-list strengths">
                        {competitor.strengths.map((strength, i) => (
                          <li key={i}>{strength}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="competitor-section">
                      <h4 className="competitor-section-title">DEBILIDADES</h4>
                      <ul className="competitor-list weaknesses">
                        {competitor.weaknesses.map((weakness, i) => (
                          <li key={i}>{weakness}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="competitor-audience">
                    <h4 className="competitor-section-title">
                      AUDIENCIA OBJETIVO
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

        <section className="project-detail__section">
          <h2 className="section-subtitle">INICIO DEL DISEÑO</h2>

          <div className="design-section">
            <h3 className="subsection-title">SITEMAP</h3>
            <div className="design-image">
              <img
                src={project5.informationArchitecture.sitemap.sitemapImage}
                alt="Mapa del sitio"
                onClick={() =>
                  openImageModal(
                    project5.informationArchitecture.sitemap.sitemapImage
                  )
                }
                className="clickable-image"
              />
            </div>
          </div>

          <div className="design-section">
            <h3 className="subsection-title">USUARIO FLOW</h3>
            <div className="design-image">
              <img
                src={project5.informationArchitecture.userFlow.userFlowImage}
                alt="Flujo de usuario"
                onClick={() =>
                  openImageModal(
                    project5.informationArchitecture.userFlow.userFlowImage
                  )
                }
                className="clickable-image"
              />
            </div>
          </div>
        </section>

        <section className="project-detail__section">
          <div className="design-section">
            <h3 className="subsection-title">WIREFRAMES EN PAPEL</h3>
            <div className="design-images">
              {project5.wireframing.paperWireframes.paperWireframesImage.map(
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
            <div className="design-image">
              <img
                src={
                  project5.wireframing.paperWireframes.refinedWireframesImage
                }
                alt="Wireframes refinados"
              />
            </div>
          </div>

          <div className="design-section">
            <h3 className="subsection-title">VARIACIONES DE DISPOSITIVO</h3>
            <div className="design-images">
              {project5.wireframing.digitalWireframes.deviceVariationsImage.map(
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
            <h3 className="subsection-title">WIREFRAMES DIGITALES</h3>
            <div className="design-image">
              <img
                src={
                  project5.wireframing.digitalWireframes.digitalWireframesImage
                }
                alt="Wireframes digitales"
              />
            </div>
          </div>

          <div className="design-section">
            <h3 className="subsection-title">VARIACIONES DIGITALES</h3>
            <div className="design-images">
              {project5.wireframing.digitalWireframes.sizeVariationsImage.map(
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

        <section className="project-detail__section">
          <div className="design-section">
            <h3 className="subsection-title">PROTOTIPO DE BAJA FIDELIDAD</h3>
            <p className="design-text">
              {project5.prototyping.lowFidelity.description}
            </p>
            <div className="design-image">
              <img
                src={project5.prototyping.lowFidelity.prototypeImage}
                alt="Prototipo de baja fidelidad"
              />
            </div>
            <div className="prototype-link">
              <a
                href={project5.prototyping.lowFidelity.prototypeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--outline"
              >
                Ver prototipo interactivo
              </a>
            </div>
          </div>
        </section>

        <section className="project-detail__section">
          <h3 className="subsection-title">
            ESTUDIO DE USABILIDAD: PARÁMETROS
          </h3>

          <div className="usability-info">
            <div className="usability-details">
              <div className="detail-item">
                <span className="detail-label">Tipo:</span>
                <span className="detail-value">
                  {project5.usabilityStudy.parameters.type}
                </span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Ubicación:</span>
                <span className="detail-value">
                  {project5.usabilityStudy.parameters.location}
                </span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Participantes:</span>
                <span className="detail-value">
                  {project5.usabilityStudy.parameters.participants}
                </span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Duración:</span>
                <span className="detail-value">
                  {project5.usabilityStudy.parameters.time}
                </span>
              </div>
            </div>
          </div>

          <h3 className="subsection-title">PRINCIPALES HALLAZGOS</h3>
          <div className="findings-list">
            {project5.usabilityStudy.keyFindings.map((finding, index) => (
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

          <h2 className="section-subtitle">REFINANDO EL DISEÑO</h2>
          <div className="mockups-section">
            {project5.usabilityStudy.refiningDesign.map((mockup, index) => (
              <div key={index} className="mockup-item">
                <p className="mockup-description">{mockup.mockups}</p>
                <div className="mockup-image">
                  <img src={mockup.mockupsImage} alt={`Mockup ${index + 1}`} />
                </div>
                <div className="design-decisions">
                  <h4 className="decisions-title">DECISIONES DE DISEÑO:</h4>
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

        <section className="project-detail__section">
          <h2 className="section-subtitle">DISEÑO VISUAL Y CONSIDERACIONES</h2>

          <h3 className="subsection-title">PALETA DE COLORES</h3>
          <div className="visual-choices">
            <div className="color-palette">
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
                    {project5.visualDesign.colorPalette['60']}
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
                    {project5.visualDesign.colorPalette['30']}
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
                    {project5.visualDesign.colorPalette['10']}
                  </span>
                </li>
              </ul>
              <p className="palette-reasoning">
                {project5.visualDesign.colorPalette.reasoning}
              </p>
            </div>
          </div>

          <div className="screen-variations">
            <h3 className="subsection-title">TAMAÑO DE PANTALLA ORIGINAL</h3>
            <p className="strategy-description">
              {project5.visualDesign.responsiveDesign.strategy}
            </p>
            <ul className="strategy-decisions">
              {project5.visualDesign.responsiveDesign.keyDecisions.map(
                (decision, index) => (
                  <li key={index} className="strategy-item">
                    {decision}
                  </li>
                )
              )}
            </ul>
            <div className="screen-image">
              <img
                src={project5.visualDesign.responsiveDesign.originalScreenSize}
                alt="Tamaño original"
              />
            </div>

            <div className="screen-variations-images">
              <h3 className="subsection-title">
                VARIACIONES DE TAMAÑO DE PANTALLA
              </h3>
              <p className="screen-description">
                {project5.visualDesign.responsiveDesign.screenExamples}
              </p>
              {project5.visualDesign.responsiveDesign.screenSizeVariationsImage.map(
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
            <h3 className="subsection-title">PROTOTIPO DE ALTA FIDELIDAD</h3>
            <div className="high-fidelity-section">
              {project5.visualDesign.highFidelity.description.map(
                (text, index) => (
                  <p key={index} className="high-fidelity-text">
                    {text}
                  </p>
                )
              )}
              <div className="high-fidelity-image">
                <img
                  src={project5.visualDesign.highFidelity.highFidelityImage}
                  alt="Prototipo de alta fidelidad"
                />
              </div>
              <div className="prototype-links">
                <a
                  href={project5.visualDesign.highFidelity.viewPrototypes[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--outline"
                >
                  Ver prototipo web
                </a>
                <a
                  href={project5.visualDesign.highFidelity.viewPrototypes[1]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--outline"
                >
                  Ver prototipo móvil
                </a>
              </div>
            </div>
          </div>

          <h3 className="subsection-title">CONSIDERACIONES DE ACCESIBILIDAD</h3>
          <ol className="accessibility-list">
            {project5.visualDesign.accessibility.considerations.map(
              (consideration, index) => (
                <li key={index} className="accessibility-item">
                  {consideration}
                </li>
              )
            )}
          </ol>
        </section>

        <section className="project-detail__section">
          <h2 className="section-subtitle">RESULTADOS Y REFLEXIÓN</h2>

          <div className="results-section">
            <h3 className="subsection-title">CONCLUSIONES</h3>
            <p className="conclusion-text">{project5.conclusion.summary}</p>
          </div>

          <div className="results-section">
            <h3 className="subsection-title">IMPACTO</h3>
            <p className="impact-text">{project5.conclusion.impact}</p>
          </div>

          <div className="results-section">
            <h3 className="subsection-title">LO QUE APRENDÍ</h3>
            <p className="learnings-text">{project5.conclusion.learnings}</p>

            <div className="lessons-grid">
              <div className="lessons-section">
                <h4 className="lessons-title">Lecciones profesionales</h4>
                <ul className="lessons-list">
                  {project5.conclusion.professionalLessons.map(
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
                  {project5.conclusion.personalLessons.map((lesson, index) => (
                    <li key={index} className="lesson-item">
                      {lesson}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="results-section">
            <h3 className="subsection-title">PRÓXIMOS PASOS</h3>
            <ol className="next-steps-list">
              {project5.conclusion.nextSteps.map((step, index) => (
                <li key={index} className="next-step-item">
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div className="results-section">
            <h3 className="subsection-title">CONSIDERACIONES FINALES</h3>
            <p className="final-text">
              {project5.conclusion.finalConsiderations}
            </p>
          </div>
        </section>
      </div>

      {selectedImage && (
        <div className="image-modal" onClick={closeImageModal}>
          <div className="image-modal__content">
            <span className="image-modal__close" onClick={closeImageModal}>
              &times;
            </span>
            <img src={selectedImage} alt="Imagen ampliada" />
          </div>
        </div>
      )}
    </main>
  );
};

export default ProjectDetail5;
