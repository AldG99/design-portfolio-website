/*
import React, { useEffect, useState } from 'react';
import { useScrollReveal } from '../../../context/ScrollRevealContext';
import project1 from '../../../data/projects/project1';
import '../ProjectDetail.scss';

const ProjectDetail1 = () => {
  const { revealRef } = useScrollReveal();
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Alfredo García Diseñador UX/UI & Desarrollador - ${project1.title}`;
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
    return profileText.includes('Kristina') || profileText.includes('game');
  };

  return (
    <main className="project-detail project-detail--inventa">
      <div className="container">
        <header className="project-detail__hero">
          <div className="hero-image hero-image--full-width" ref={revealRef}>
            <img
              src={project1.thumbnail}
              alt={project1.title}
              draggable="false"
              className="no-save"
              onContextMenu={e => e.preventDefault()}
            />
          </div>

          <h1 className="project-title">Mikky Jump</h1>

          <div className="project-detail__meta">
            <div className="project-detail__meta-item">
              <span className="meta-value">Junio - Septiembre 2023</span>
            </div>
          </div>

          <div className="project-detail__tools">
            {project1.tools.map((tool, index) => (
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
          <h2 className="subsection-title-with-border">RESUMEN DEL PROYECTO</h2>
          <p className="overview-text">{project1.description}</p>
        </section>

        <section className="project-detail__section">
          <div className="project-detail__problem-goal-container">
            <div className="project-detail__problem">
              <h3 className="subsection-title">PROBLEMA</h3>
              <p className="problem-text">{project1.problem}</p>
            </div>

            <div className="project-detail__goal">
              <h3 className="subsection-title">OBJETIVO</h3>
              <p className="goal-text">{project1.goal}</p>
            </div>
          </div>

          <div className="project-detail__role">
            <h3 className="subsection-title">MI ROL</h3>
            <p className="role-text">{project1.role}</p>
          </div>

          <div className="project-detail__responsibilities">
            <h3 className="subsection-title">RESPONSABILIDADES</h3>
            <ul className="responsibilities-list">
              {project1.responsibilities.map((responsibility, index) => (
                <li key={index} className="responsibility-item">
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="project-detail__section">
          <h2 className="subsection-title-with-border">INVESTIGACIÓN</h2>

          <div className="project-detail__understanding">
            <p className="understanding-text">{project1.research.summary}</p>
            <div className="understanding-image">
              <img
                src={project1.research.researchImage}
                alt="Investigación de usuario"
              />
            </div>
            <h3 className="subsection-title">
              INVESTIGACIÓN DE USUARIOS: PUNTOS DÉBILES
            </h3>
            <ol className="key-issues-list">
              {project1.research.keyIssues.map((issue, index) => (
                <li key={index} className="key-issue-item">
                  {issue}
                </li>
              ))}
            </ol>
            <h3 className="subsection-title">ANÁLISIS COMPETITIVO</h3>
            <div className="project-detail__competition">
              <div className="competitive-table">
                <div className="competitive-row competitive-row--names">
                  <div className="competitive-cell competitive-cell--empty"></div>
                  {project1.competitors.map((competitor, index) => (
                    <div
                      key={index}
                      className="competitive-cell competitive-cell--name"
                    >
                      <h3 className="competitor-name">{competitor.name}</h3>
                    </div>
                  ))}
                </div>

                <div className="competitive-row competitive-row--overview">
                  <div className="competitive-cell competitive-cell--label"></div>
                  {project1.competitors.map((competitor, index) => (
                    <div
                      key={index}
                      className="competitive-cell competitive-cell--images"
                      data-competitor={competitor.name}
                    >
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

                <div className="competitive-row competitive-row--description">
                  <div className="competitive-cell competitive-cell--label">
                    <h4 className="row-label">DESCRIPCIÓN</h4>
                  </div>
                  {project1.competitors.map((competitor, index) => (
                    <div
                      key={index}
                      className="competitive-cell competitive-cell--content"
                      data-competitor={competitor.name}
                    >
                      <p className="competitor-description">
                        {competitor.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="competitive-row competitive-row--strengths">
                  <div className="competitive-cell competitive-cell--label">
                    <h4 className="row-label">FORTALEZAS</h4>
                  </div>
                  {project1.competitors.map((competitor, index) => (
                    <div
                      key={index}
                      className="competitive-cell competitive-cell--content"
                      data-competitor={competitor.name}
                    >
                      <ul className="competitor-list strengths">
                        {competitor.strengths.map((strength, i) => (
                          <li key={i}>{strength}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="competitive-row competitive-row--weaknesses">
                  <div className="competitive-cell competitive-cell--label">
                    <h4 className="row-label">DEBILIDADES</h4>
                  </div>
                  {project1.competitors.map((competitor, index) => (
                    <div
                      key={index}
                      className="competitive-cell competitive-cell--content"
                      data-competitor={competitor.name}
                    >
                      <ul className="competitor-list weaknesses">
                        {competitor.weaknesses.map((weakness, i) => (
                          <li key={i}>{weakness}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="competitive-row competitive-row--audience">
                  <div className="competitive-cell competitive-cell--label">
                    <h4 className="row-label">AUDIENCIA OBJETIVO</h4>
                  </div>
                  {project1.competitors.map((competitor, index) => (
                    <div
                      key={index}
                      className="competitive-cell competitive-cell--content"
                      data-competitor={competitor.name}
                    >
                      <div className="competitor-audience">
                        <p>{competitor.targetAudience}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="project-detail__section">
          <h2 className="subsection-title-with-border">PERSONAS</h2>

          <div className="project-detail__personas">
            <div
              className="personas-horizontal-grid"
              data-count={project1.userProfiles.length}
            >
              {project1.userProfiles.map((profile, index) => (
                <div key={index} className="persona-card">
                  <div className="persona-statement">
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

          <div className="project-detail__empathy-map">
            <h3 className="subsection-title">EMPATHY MAP</h3>
            <div className="empathy-map-image">
              <img
                src={project1.userEmpathyMap.userEmpathyMapImage}
                alt="Mapa de empatía del usuario"
                onClick={() =>
                  openImageModal(project1.userEmpathyMap.userEmpathyMapImage)
                }
                className="clickable-image"
              />
            </div>
          </div>

          <div className="project-detail__journey-maps">
            <h3 className="subsection-title">MAPAS DE RECORRIDO DEL USUARIO</h3>
            <div className="journey-maps-vertical">
              {project1.userJourneyMap.map((journey, index) => (
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

        <section className="project-detail__section">
          <h2 className="subsection-title-with-border">INICIO DEL DISEÑO</h2>

          <div className="design-section">
            <h3 className="subsection-title">SITEMAP</h3>
            <div className="design-image">
              <img
                src={project1.informationArchitecture.sitemap.sitemapImage}
                alt="Mapa del sitio"
                onClick={() =>
                  openImageModal(
                    project1.informationArchitecture.sitemap.sitemapImage
                  )
                }
                className="clickable-image"
              />
            </div>
          </div>

          <div className="design-section">
            <h3 className="subsection-title">USER FLOW</h3>
            <div className="design-image">
              <img
                src={project1.informationArchitecture.userFlow.userFlowImage}
                alt="Flujo de usuario"
                onClick={() =>
                  openImageModal(
                    project1.informationArchitecture.userFlow.userFlowImage
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
            <div
              className="paper-wireframes-grid"
              data-count={
                project1.wireframing.paperWireframes.paperWireframesImage.length
              }
            >
              {project1.wireframing.paperWireframes.paperWireframesImage.map(
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
            <h3 className="subsection-title">WIREFRAMES DIGITALES</h3>
            <div className="design-image">
              <img
                src={
                  project1.wireframing.digitalWireframes.digitalWireframesImage
                }
                alt="Wireframes digitales"
              />
            </div>
          </div>
        </section>

        <section className="project-detail__section">
          <div className="design-section">
            <h3 className="subsection-title">PROTOTIPO DE BAJA FIDELIDAD</h3>
            <p className="design-text">
              {project1.prototyping.lowFidelity.description}
            </p>
            <div className="design-image">
              <img
                src={project1.prototyping.lowFidelity.prototypeImage}
                alt="Prototipo de baja fidelidad"
              />
            </div>
            <div className="prototype-link">
              <a
                href={project1.prototyping.lowFidelity.prototypeUrl}
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
                  {project1.usabilityStudy.parameters.type}
                </span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Ubicación:</span>
                <span className="detail-value">
                  {project1.usabilityStudy.parameters.location}
                </span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Participantes:</span>
                <span className="detail-value">
                  {project1.usabilityStudy.parameters.participants}
                </span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Duración:</span>
                <span className="detail-value">
                  {project1.usabilityStudy.parameters.time}
                </span>
              </div>
            </div>
          </div>

          <h3 className="subsection-title">PRINCIPALES HALLAZGOS</h3>
          <div className="findings-list">
            {project1.usabilityStudy.keyFindings.map((finding, index) => (
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

          <h2 className="subsection-title-with-border">REFINANDO EL DISEÑO</h2>
          <div className="mockups-section">
            {project1.usabilityStudy.refiningDesign.map((mockup, index) => (
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
          <h2 className="subsection-title-with-border">DISEÑO VISUAL</h2>

          <div className="screen-variations">
            <h3 className="subsection-title">TAMAÑO DE PANTALLA ORIGINAL</h3>
            <p className="strategy-description">
              {project1.visualDesign.responsiveDesign.strategy}
            </p>
            <ul className="strategy-decisions">
              {project1.visualDesign.responsiveDesign.keyDecisions.map(
                (decision, index) => (
                  <li key={index} className="strategy-item">
                    {decision}
                  </li>
                )
              )}
            </ul>
            <div className="screen-image">
              <img
                src={project1.visualDesign.responsiveDesign.originalScreenSize}
                alt="Tamaño original"
              />
            </div>
          </div>

          <div className="design-section">
            <h3 className="subsection-title">PROTOTIPO DE ALTA FIDELIDAD</h3>
            <div className="high-fidelity-section">
              {project1.visualDesign.highFidelity.description.map(
                (text, index) => (
                  <p key={index} className="high-fidelity-text">
                    {text}
                  </p>
                )
              )}
              <div className="high-fidelity-image">
                <img
                  src={project1.visualDesign.highFidelity.highFidelityImage}
                  alt="Prototipo de alta fidelidad"
                />
              </div>
              <div className="prototype-links">
                <a
                  href={project1.visualDesign.highFidelity.viewPrototypes[0]}
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
            {project1.visualDesign.accessibility.considerations.map(
              (consideration, index) => (
                <li key={index} className="accessibility-item">
                  {consideration}
                </li>
              )
            )}
          </ol>
        </section>

        <section className="project-detail__section">
          <h2 className="subsection-title-with-border">
            RESULTADOS Y REFLEXIÓN
          </h2>

          <div className="results-section">
            <h3 className="subsection-title">CONCLUSIONES</h3>
            <p className="conclusion-text">{project1.conclusion.summary}</p>
          </div>

          <div className="results-section">
            <h3 className="subsection-title">IMPACTO</h3>
            <p className="impact-text">{project1.conclusion.impact}</p>
          </div>

          <div className="results-section">
            <h3 className="subsection-title">LO QUE APRENDÍ</h3>
            <p className="learnings-text">{project1.conclusion.learnings}</p>

            <div className="lessons-grid">
              <div className="lessons-section">
                <h4 className="lessons-title">Lecciones profesionales</h4>
                <ul className="lessons-list">
                  {project1.conclusion.professionalLessons.map(
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
                  {project1.conclusion.personalLessons.map((lesson, index) => (
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
              {project1.conclusion.nextSteps.map((step, index) => (
                <li key={index} className="next-step-item">
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div className="results-section">
            <h3 className="subsection-title">CONSIDERACIONES FINALES</h3>
            <p className="final-text">
              {project1.conclusion.finalConsiderations}
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

export default ProjectDetail1;
*/
