import React, { useEffect, useState } from 'react';
import { useScrollReveal } from '../../../context/ScrollRevealContext';
import '../ProjectDetail.scss';

const ProjectDetail5 = () => {
  const { revealRef } = useScrollReveal();
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `SportCampus — Alfredo García`;
  }, []);

  const openImageModal = imageUrl => {
    setSelectedImage(imageUrl);
    document.body.style.overflow = 'hidden';
  };

  const scrollToTitle = () => {
    const titleElement = document.querySelector('.project-title');
    const headerElement =
      document.querySelector('header') ||
      document.querySelector('.header') ||
      document.querySelector('nav');

    if (titleElement) {
      const titlePosition = titleElement.offsetTop;
      const headerHeight = headerElement ? headerElement.offsetHeight : 80;
      const offset = 24;

      window.scrollTo({
        top: titlePosition - headerHeight - offset,
        behavior: 'smooth',
      });
    }
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <main className="project-detail project-detail--inventa">
      <div className="container">
        <header className="project-detail__hero">
          <div className="hero-image hero-image--full-width" ref={revealRef}>
            <img
              src="/assets/images/projects/project5/thumbnail.png"
              alt="SportCampus"
              draggable="false"
              className="no-save"
              onContextMenu={e => e.preventDefault()}
            />
            <button
              className="scroll-down-btn"
              onClick={scrollToTitle}
              aria-label="Deslizar hacia abajo para ver contenido"
            >
              <span className="scroll-down-text">Deslizar hacia abajo</span>
              <svg
                className="scroll-down-arrow"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M7 10L12 15L17 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <h1 className="project-title">SportCampus</h1>

          <div className="project-detail__meta">
            <div className="project-detail__meta-item">
              <span className="meta-value">Mayo - Julio 2025</span>
            </div>
          </div>
          <div className="project-detail__tools">
            <span className="tool-tag tool-tag--figma">Figma</span>
            <span className="tool-tag tool-tag--react-native-expo">
              React Native Expo
            </span>
          </div>
        </header>

        <section className="project-detail__overview">
          <h2 className="subsection-title-with-border">RESUMEN DEL PROYECTO</h2>
          <p className="overview-text">
            SportCampus es una aplicación móvil universitaria que digitaliza por
            completo la experiencia deportiva estudiantil. Permite gestionar
            equipos, ofrecer estadísticas detalladas y galerías multimedia para
            documentar eventos deportivos. Soporta varios deportes (fútbol,
            basquetbol, voleibol y fútbol americano) y tiene dos tipos de
            usuarios: estudiantes y entrenadores, con navegación adaptada a cada
            rol. Con su diseño responsive y funciones avanzadas, SportCampus
            centraliza todo, desde la inscripción hasta el seguimiento de
            torneos y la gestión de contenidos.
          </p>
        </section>

        <section className="project-detail__section">
          <div className="project-detail__problem-goal-container">
            <div className="project-detail__problem">
              <h3 className="subsection-title">PROBLEMA</h3>
              <p className="problem-text">
                Las universidades tienen dificultades para gestionar sus
                actividades deportivas estudiantiles, ya que la organización de
                equipos, torneos y eventos se realiza de forma manual y
                desarticulada, usando herramientas tradicionales como hojas de
                cálculo. Esto causa desorganización y problemas de comunicación
                entre estudiantes y entrenadores.
              </p>
            </div>

            <div className="project-detail__goal">
              <h3 className="subsection-title">OBJETIVO</h3>
              <p className="goal-text">
                El objetivo es crear una plataforma digital integral que
                centralice la gestión deportiva universitaria, permitiendo
                administrar equipos, jugadores y torneos desde un solo lugar.
                Incluirá seguimiento estadístico automatizado, comunicación
                eficiente, documentación multimedia organizada y una experiencia
                personalizada según el rol del usuario.
              </p>
            </div>
          </div>

          <div className="project-detail__role">
            <h3 className="subsection-title">MI ROL</h3>
            <p className="role-text">
              El proceso inicia con investigación de usuarios (estudiantes y
              entrenadores universitarios) para detectar oportunidades de
              mejora, seguido por la creación de un sistema de diseño con
              componentes reutilizables y prototipos móviles responsivos. Luego
              se desarrollan prototipos interactivos que se validan mediante
              pruebas de usabilidad, y finalmente se implementa el front-end,
              integrando APIs para la búsqueda de jugadores en la base de datos,
              la gestión de su incorporación a equipos y el registro de
              usuarios, asegurando una interfaz intuitiva y coherente con el
              feedback obtenido.
            </p>
          </div>

          <div className="project-detail__responsibilities">
            <h3 className="subsection-title">RESPONSABILIDADES</h3>
            <ul className="responsibilities-list">
              <li className="responsibility-item">
                Estudio y comprensión de los usuarios y sus necesidades
                específicas dentro del ámbito deportivo universitario para
                diseñar soluciones adecuadas.
              </li>
              <li className="responsibility-item">
                Diseño de wireframes y prototipos de baja y alta fidelidad
              </li>
              <li className="responsibility-item">
                Desarrollo de prototipos interactivos con los que los usuarios
                pueden interactuar, y realización de pruebas para mejorar la
                experiencia de uso.
              </li>
              <li className="responsibility-item">
                Diseñar componentes reutilizables (Cards, Buttons)
              </li>
            </ul>
          </div>
        </section>

        <section className="project-detail__section">
          <h2 className="subsection-title-with-border">INVESTIGACIÓN</h2>

          <div className="project-detail__understanding">
            <p className="understanding-text">
              Para comprender las necesidades y comportamientos actuales en el
              ámbito deportivo universitario, se realizó una{' '}
              <strong style={{ fontWeight: 600 }}>
                investigación cuantitativa
              </strong>{' '}
              mediante encuestas estructuradas dirigidas a estudiantes y
              entrenadores de instituciones de educación superior. El objetivo
              principal fue identificar los principales{' '}
              <strong style={{ fontWeight: 600 }}>pain points</strong> en la
              gestión de actividades deportivas, evaluar el nivel de
              satisfacción con los métodos actuales de comunicación y
              organización.
            </p>
            <div className="understanding-image">
              <img
                src="/assets/images/projects/project5/research.png"
                alt="Investigación de usuario"
              />
            </div>

            <h3 className="subsection-title">
              INVESTIGACIÓN DE USUARIOS: PUNTOS DÉBILES
            </h3>
            <ol className="key-issues-list">
              <li className="key-issue-item">
                Una{' '}
                <strong style={{ fontWeight: 600 }}>
                  falta de información clara
                </strong>{' '}
                sobre los equipos disponibles, lo que dificulta conocer las
                opciones existentes
              </li>
              <li className="key-issue-item">
                Se evidencia una notable{' '}
                <strong style={{ fontWeight: 600 }}>
                  falta de claridad y organización
                </strong>{' '}
                en la comunicación de los horarios
              </li>
              <li className="key-issue-item">
                <strong style={{ fontWeight: 600 }}>
                  Dificultad significativa
                </strong>{' '}
                para seguir el desarrollo del torneo, ya que no se conocen los
                resultados de los demás partidos
              </li>
              <li className="key-issue-item">
                La carencia para{' '}
                <strong style={{ fontWeight: 600 }}>
                  notificar cambios de último minuto
                </strong>{' '}
                y mantener la información organizada
              </li>
            </ol>

            <h3 className="subsection-title">ANÁLISIS COMPETITIVO</h3>
            <div className="project-detail__competition">
              <div className="competitive-table">
                <div className="competitive-row competitive-row--names">
                  <div className="competitive-cell competitive-cell--empty"></div>
                  <div className="competitive-cell competitive-cell--name">
                    <h3 className="competitor-name">TeamSnap</h3>
                  </div>
                  <div className="competitive-cell competitive-cell--name">
                    <h3 className="competitor-name">SportsEngine</h3>
                  </div>
                  <div className="competitive-cell competitive-cell--name">
                    <h3 className="competitor-name">GameChanger</h3>
                  </div>
                </div>

                <div className="competitive-row competitive-row--overview">
                  <div className="competitive-cell competitive-cell--label"></div>
                  <div
                    className="competitive-cell competitive-cell--images"
                    data-competitor="TeamSnap"
                  >
                    <div className="competitor-images">
                      <img
                        src="/assets/images/projects/project5/competitor/competitor1.png"
                        alt="TeamSnap captura 1"
                      />
                    </div>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--images"
                    data-competitor="SportsEngine"
                  >
                    <div className="competitor-images">
                      <img
                        src="/assets/images/projects/project5/competitor/competitor2.png"
                        alt="SportsEngine captura 1"
                      />
                    </div>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--images"
                    data-competitor="GameChanger"
                  >
                    <div className="competitor-images">
                      <img
                        src="/assets/images/projects/project5/competitor/competitor3.png"
                        alt="GameChanger captura 1"
                      />
                    </div>
                  </div>
                </div>

                <div className="competitive-row competitive-row--description">
                  <div className="competitive-cell competitive-cell--label">
                    <h4 className="row-label">DESCRIPCIÓN</h4>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="TeamSnap"
                  >
                    <p className="competitor-description">
                      Plataforma líder en gestión de equipos deportivos que
                      centraliza comunicación, programación y organización con
                      interfaz intuitiva.
                    </p>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="SportsEngine"
                  >
                    <p className="competitor-description">
                      Plataforma integral para organizaciones deportivas con
                      gestión completa de ligas, torneos, sitios web y
                      herramientas administrativas.
                    </p>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="GameChanger"
                  >
                    <p className="competitor-description">
                      App especializada en seguimiento en vivo de partidos
                      deportivos con registro de estadísticas detalladas y
                      análisis post-partido.
                    </p>
                  </div>
                </div>

                <div className="competitive-row competitive-row--strengths">
                  <div className="competitive-cell competitive-cell--label">
                    <h4 className="row-label">FORTALEZAS</h4>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="TeamSnap"
                  >
                    <ul className="competitor-list strengths">
                      <li>Sistema de comunicación robusto</li>
                      <li>Gestión eficiente de calendarios</li>
                      <li>Confirmación de asistencia automatizada</li>
                      <li>Amplia adopción en el mercado</li>
                    </ul>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="SportsEngine"
                  >
                    <ul className="competitor-list strengths">
                      <li>Gestión completa de torneos</li>
                      <li>Sistema de registro y pagos integrado</li>
                      <li>Soporte para múltiples deportes</li>
                      <li>Reportes y analytics institucionales</li>
                    </ul>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="GameChanger"
                  >
                    <ul className="competitor-list strengths">
                      <li>Registro de estadísticas en tiempo real</li>
                      <li>Análisis estadístico avanzado</li>
                      <li>Interfaz optimizada para captura rápida</li>
                    </ul>
                  </div>
                </div>

                <div className="competitive-row competitive-row--weaknesses">
                  <div className="competitive-cell competitive-cell--label">
                    <h4 className="row-label">DEBILIDADES</h4>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="TeamSnap"
                  >
                    <ul className="competitor-list weaknesses">
                      <li>Enfoque principalmente en deportes juveniles</li>
                      <li>Carece de análisis avanzado de rendimiento</li>
                      <li>Funcionalidades de galería básicas</li>
                    </ul>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="SportsEngine"
                  >
                    <ul className="competitor-list weaknesses">
                      <li>Interfaz compleja y curva de aprendizaje alta</li>
                      <li>Más enfocado en administradores</li>
                      <li>Poco enfoque en experiencia del usuario final</li>
                    </ul>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="GameChanger"
                  >
                    <ul className="competitor-list weaknesses">
                      <li>Carece de sistema de torneos</li>
                      <li>No incluye calendario o programación</li>
                      <li>Ausencia de funcionalidades administrativas</li>
                    </ul>
                  </div>
                </div>

                <div className="competitive-row competitive-row--audience">
                  <div className="competitive-cell competitive-cell--label">
                    <h4 className="row-label">AUDIENCIA OBJETIVO</h4>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="TeamSnap"
                  >
                    <div className="competitor-audience">
                      <p>
                        Entrenadores de deportes juveniles, padres de familia,
                        ligas recreativas y escuelas secundarias.
                      </p>
                    </div>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="SportsEngine"
                  >
                    <div className="competitor-audience">
                      <p>
                        Coordinadores deportivos universitarios, administradores
                        de ligas, organizaciones deportivas institucionales y
                        federaciones regionales.
                      </p>
                    </div>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="GameChanger"
                  >
                    <div className="competitor-audience">
                      <p>
                        Entrenadores de béisbol y softball, scouts, padres,
                        jugadores que buscan análisis detallado y ligas amateur.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="project-detail__section">
          <h2 className="subsection-title-with-border">PERSONAS</h2>

          <div className="project-detail__personas">
            <div className="personas-horizontal-grid" data-count="3">
              {/* Persona 1 */}
              <div className="persona-card">
                <div className="persona-statement">
                  <div className="persona-image">
                    <img
                      src="/assets/images/projects/project5/persona/persona1.png"
                      alt="Carlos Eduardo Ramírez Mendoza"
                      onClick={() =>
                        openImageModal(
                          '/assets/images/projects/project5/persona/persona1.png'
                        )
                      }
                      className="clickable-image"
                    />
                  </div>
                </div>
              </div>

              {/* Persona 2 */}
              <div className="persona-card">
                <div className="persona-statement">
                  <div className="persona-image">
                    <img
                      src="/assets/images/projects/project5/persona/persona2.png"
                      alt="Andrea Sofía Hernández López"
                      onClick={() =>
                        openImageModal(
                          '/assets/images/projects/project5/persona/persona2.png'
                        )
                      }
                      className="clickable-image"
                    />
                  </div>
                </div>
              </div>

              {/* Persona 3 */}
              <div className="persona-card">
                <div className="persona-statement">
                  <div className="persona-image">
                    <img
                      src="/assets/images/projects/project5/persona/persona3.png"
                      alt="Miguel Ángel Torres Castillo"
                      onClick={() =>
                        openImageModal(
                          '/assets/images/projects/project5/persona/persona3.png'
                        )
                      }
                      className="clickable-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="project-detail__journey-maps">
            <h3 className="subsection-title">MAPAS DE RECORRIDO DEL USUARIO</h3>
            <div className="journey-maps-vertical">
              {/* Journey Map 1 */}
              <div className="journey-card">
                <h4 className="journey-title">Mtro. Carlos Ramírez</h4>
                <p className="journey-description">
                  Gestión semanal integral del equipo de fútbol de Ingeniería -
                  coordinando entrenamientos, registrando estadísticas
                  manualmente y preparando estrategias para torneos
                  inter-facultades.
                </p>
                <div className="journey-image">
                  <img
                    src="/assets/images/projects/project5/map/map1.jpg"
                    alt="Mapa de recorrido de Mtro. Carlos Ramírez"
                  />
                </div>
              </div>

              {/* Journey Map 2 */}
              <div className="journey-card">
                <h4 className="journey-title">Andrea Hernández</h4>
                <p className="journey-description">
                  Participación competitiva como capitana del equipo femenil de
                  voleibol de Psicología - liderando entrenamientos, buscando
                  mejorar estadísticas personales y documentando logros para
                  crear portafolio deportivo.
                </p>
                <div className="journey-image">
                  <img
                    src="/assets/images/projects/project5/map/map2.jpg"
                    alt="Mapa de recorrido de Andrea Hernández"
                  />
                </div>
              </div>

              {/* Journey Map 3 */}
              <div className="journey-card">
                <h4 className="journey-title">Miguel Torres</h4>
                <p className="journey-description">
                  Participación como jugador principiante en el equipo de fútbol
                  de Sistemas - navegando la integración social, adaptándose a
                  dinámicas de equipo y intentando mantenerse informado sobre
                  actividades grupales.
                </p>
                <div className="journey-image">
                  <img
                    src="/assets/images/projects/project5/map/map3.jpg"
                    alt="Mapa de recorrido de Miguel Torres"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="project-detail__section">
          <h2 className="subsection-title-with-border">INICIO DEL DISEÑO</h2>

          <div className="design-section">
            <h3 className="subsection-title">SITEMAP</h3>
            <div className="design-image">
              <img
                src="/assets/images/projects/project5/sitemap.svg"
                alt="Mapa del sitio"
                onClick={() =>
                  openImageModal('/assets/images/projects/project5/sitemap.svg')
                }
                className="clickable-image"
              />
            </div>
          </div>

          <div className="design-section">
            <h3 className="subsection-title">USER FLOW</h3>
            <div className="design-image">
              <img
                src="/assets/images/projects/project5/userflow.svg"
                alt="Flujo de usuario"
                onClick={() =>
                  openImageModal(
                    '/assets/images/projects/project5/userflow.svg'
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
            <div className="paper-wireframes-grid" data-count="6">
              <img
                src="/assets/images/projects/project5/paper/paper1.png"
                alt="Wireframe en papel 1"
              />
              <img
                src="/assets/images/projects/project5/paper/paper2.png"
                alt="Wireframe en papel 2"
              />
              <img
                src="/assets/images/projects/project5/paper/paper3.png"
                alt="Wireframe en papel 3"
              />
              <img
                src="/assets/images/projects/project5/paper/paper4.png"
                alt="Wireframe en papel 4"
              />
              <img
                src="/assets/images/projects/project5/paper/paper5.png"
                alt="Wireframe en papel 5"
              />
              <img
                src="/assets/images/projects/project5/paper/paper6.png"
                alt="Wireframe en papel 6"
              />
            </div>
          </div>

          <div className="design-section">
            <h3 className="subsection-title">
              WIREFRAME EN PAPEL - VARIACIONES DE TAMAÑO DE PANTALLA
            </h3>
            <div className="design-images">
              <img
                src="/assets/images/projects/project5/variations.png"
                alt="Variación de dispositivo"
              />
            </div>
          </div>

          <div className="design-section">
            <h3 className="subsection-title">WIREFRAMES DIGITALES</h3>
            <div className="design-image">
              <img
                src="/assets/images/projects/project5/wireframes.png"
                alt="Wireframes digitales"
              />
            </div>
          </div>

          <div className="design-section">
            <h3 className="subsection-title">VARIACIONES DIGITALES</h3>
            <div className="design-images">
              <img
                src="/assets/images/projects/project5/digital.png"
                alt="Variación digital"
              />
            </div>
          </div>
        </section>

        <section className="project-detail__section">
          <div className="design-section">
            <h3 className="subsection-title">PROTOTIPO DE BAJA FIDELIDAD</h3>
            <p className="design-text">
              Los wireframes de SportCampus son prototipos de baja fidelidad que
              definen la estructura y experiencia de usuario de la plataforma.
              Incluyen flujos de navegación, componentes y funciones clave,
              sirviendo como base técnica para el desarrollo y ayudando a
              validar decisiones desde etapas tempranas, reduciendo riesgos.
            </p>
            <div className="design-image">
              <img
                src="/assets/images/projects/project5/prototype.png"
                alt="Prototipo de baja fidelidad"
              />
            </div>
            <div className="prototype-link">
              <a
                href="https://www.figma.com/proto/EIoAaj7YwhbKmOFqTcRNuf/SportCampus?page-id=0%3A1&node-id=1-1697&p=f&viewport=479%2C390%2C0.1&t=GGsTDt2SaPL0ePCU-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A1697"
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
                  Estudio de usabilidad sin moderación
                </span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Ubicación:</span>
                <span className="detail-value">Remoto</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Participantes:</span>
                <span className="detail-value">
                  2 Entrenadores (25-45 años) y 4 Estudiantes (18-25 años)
                </span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Duración:</span>
                <span className="detail-value">
                  15-20 minutos por participante
                </span>
              </div>
            </div>
          </div>

          <h3 className="subsection-title">PRINCIPALES HALLAZGOS</h3>
          <div className="findings-list">
            {/* Finding 1 */}
            <div className="finding-item">
              <h4 className="finding-area">Navegación General</h4>
              <p className="finding-description">
                La navegación por pestañas es intuitiva para la mayoría de
                usuarios
              </p>
              <div className="finding-quotes">
                <blockquote className="user-quote">
                  <strong style={{ fontWeight: 600 }}>E01:</strong> "La
                  navegación me gusta, pero cuando tengo que administrar más de
                  2 equipos se vuelve confusa. Ocupa demasiado espacio en
                  pantalla y tengo que hacer mucho desplazamiento para ver todos
                  mis equipos."
                </blockquote>
                <blockquote className="user-quote">
                  <strong style={{ fontWeight: 600 }}>E02:</strong> "Me encanta
                  que pueda ver todos mis equipos desde la pantalla principal.
                  Todo está donde lo esperaba."
                </blockquote>
              </div>
            </div>

            {/* Finding 2 */}
            <div className="finding-item">
              <h4 className="finding-area">Visualización de Estadísticas</h4>
              <p className="finding-description">
                Los gráficos son atractivos pero algunos usuarios necesitan más
                contexto
              </p>
              <div className="finding-quotes">
                <blockquote className="user-quote">
                  <strong style={{ fontWeight: 600 }}>P04:</strong> "Ver mi
                  progreso en gráficos me motiva mucho. Puedo ver claramente
                  cómo he mejorado en remates."
                </blockquote>
              </div>
            </div>

            {/* Finding 3 */}
            <div className="finding-item">
              <h4 className="finding-area">Visualización de Torneos</h4>
              <p className="finding-description">
                La visualización es muy valorada por todos los tipos de usuario,
                pero falta información específica
              </p>
              <div className="finding-quotes">
                <blockquote className="user-quote">
                  <strong style={{ fontWeight: 600 }}>P01:</strong> "Me gusta
                  poder ver cuándo juega mi equipo y contra quién. La
                  información está muy organizada."
                </blockquote>
                <blockquote className="user-quote">
                  <strong style={{ fontWeight: 600 }}>P04:</strong> "Puedo ver
                  los detalles del torneo, pero ¿cómo voy a saber cuánto va a
                  durar el torneo completo? Necesito planificar los
                  entrenamientos y no veo las fechas de inicio y fin
                  claramente."
                </blockquote>
              </div>
            </div>
          </div>

          <h2 className="subsection-title-with-border">REFINANDO EL DISEÑO</h2>
          <div className="mockups-section">
            {/* Mockup 1 */}
            <div className="mockup-item">
              <p className="mockup-description">
                En el módulo del entrenador, los botones para cambiar el equipo
                actualmente se organizan de forma vertical. El diseño podría{' '}
                <strong style={{ fontWeight: 600 }}>
                  optimizar mejor el espacio disponible
                </strong>{' '}
                en pantalla y mejorar la experiencia del usuario al reorganizar
                estos elementos de manera más eficiente.
              </p>
              <div className="mockup-image">
                <img
                  src="/assets/images/projects/project5/mockups/mockups1.png"
                  alt="Mockup 1"
                />
              </div>
              <div className="design-decisions">
                <h4 className="decisions-title">DECISIONES DE DISEÑO:</h4>
                <ul className="decisions-list">
                  <li>
                    Reorganizar los botones de cambio de equipo de{' '}
                    <strong style={{ fontWeight: 600 }}>
                      vertical a horizontal
                    </strong>{' '}
                    para maximizar el aprovechamiento del espacio en pantalla
                  </li>
                  <li>
                    Implementar un{' '}
                    <strong style={{ fontWeight: 600 }}>
                      diseño más compacto
                    </strong>{' '}
                    que permita una navegación más fluida entre las opciones del
                    entrenador
                  </li>
                </ul>
              </div>
            </div>

            {/* Mockup 2 */}
            <div className="mockup-item">
              <p className="mockup-description">
                En la sección de detalles del torneo actualmente falta{' '}
                <strong style={{ fontWeight: 600 }}>
                  información temporal clara
                </strong>{' '}
                sobre la duración del evento. El diseño podría mejorar la
                transparencia y planificación al mostrar de manera prominente
                las{' '}
                <strong style={{ fontWeight: 600 }}>
                  fechas programadas por los administradores
                </strong>
                .
              </p>
              <div className="mockup-image">
                <img
                  src="/assets/images/projects/project5/mockups/mockups2.png"
                  alt="Mockup 2"
                />
              </div>
              <div className="design-decisions">
                <h4 className="decisions-title">DECISIONES DE DISEÑO:</h4>
                <ul className="decisions-list">
                  <li>
                    Agregar un{' '}
                    <strong style={{ fontWeight: 600 }}>
                      campo visible con las fechas de duración del torneo
                    </strong>{' '}
                    que los administradores han programado
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="project-detail__section">
          <h2 className="subsection-title-with-border">
            DISEÑO VISUAL Y CONSIDERACIONES
          </h2>
          <h3 className="subsection-title">CONTRASTE DE COLORES</h3>
          <div className="color-palette-section">
            <p className="color-palette-reasoning">
              La paleta de colores inicial presentaba problemas de contraste que
              afectaban la legibilidad, especialmente en dispositivos móviles
              bajo diferentes condiciones de iluminación. Se rediseñó
              completamente priorizando la accesibilidad y la identidad
              deportiva universitaria.
            </p>

            <div className="color-evolution">
              <div className="color-evolution-image">
                <img
                  src="/assets/images/projects/project5/color.png"
                  alt="Evolución de la paleta de colores"
                />
              </div>
              <p className="color-evolution-description">
                Colores con bajo contraste a una paleta deportiva accesible que
                cumple con estándares WCAG 2.1 AA.
              </p>
            </div>
          </div>

          <div className="design-elements-section">
            <h3 className="subsection-title">ELEMENTOS VISUALES Y EFECTOS</h3>
            <p className="design-elements-description">
              Se implementaron efectos visuales modernos que refuerzan la
              identidad deportiva y mejoran la jerarquía visual, manteniendo el
              rendimiento y la accesibilidad como prioridades.
            </p>

            <div className="design-techniques">
              <div className="technique-item">
                <p className="technique-description">
                  Se aplicó{' '}
                  <strong style={{ fontWeight: 600 }}>
                    efecto de desenfoque (blur)
                  </strong>{' '}
                  en cards y modales para crear profundidad visual y jerarquía.
                  Este efecto permite que el contenido de fondo sea parcialmente
                  visible, generando una sensación de{' '}
                  <strong style={{ fontWeight: 600 }}>
                    capas y transparencia sofisticada
                  </strong>{' '}
                  que mejora la legibilidad sin sacrificar el contexto visual.
                </p>
                {/* Grid horizontal para los dos GIFs */}
                <div className="technique-gifs-grid">
                  <div className="gif-container">
                    <img
                      src="/assets/images/projects/project5/screenshots/screenshots-1.gif"
                      alt="Demostración del menú principal"
                      draggable="false"
                      className="no-save"
                      onContextMenu={e => e.preventDefault()}
                      onDragStart={e => e.preventDefault()}
                      onSelectStart={e => e.preventDefault()}
                    />
                  </div>
                  <div className="gif-container">
                    <img
                      src="/assets/images/projects/project5/screenshots/screenshots-2.gif"
                      alt="Ejemplo de blur effect aplicado"
                      draggable="false"
                      className="no-save"
                      onContextMenu={e => e.preventDefault()}
                      onDragStart={e => e.preventDefault()}
                      onSelectStart={e => e.preventDefault()}
                    />
                  </div>
                </div>
                <br />
                <p className="technique-description">
                  El desenfoque ayuda a que los{' '}
                  <strong style={{ fontWeight: 600 }}>
                    elementos principales
                  </strong>
                  , como el encabezado y el bottom navigation, sean{' '}
                  <strong style={{ fontWeight: 600 }}>
                    más visibles sin bloquear el fondo
                  </strong>
                  . Cards, modales y la barra de navegación se integran de
                  manera{' '}
                  <strong style={{ fontWeight: 600 }}>equilibrada</strong> en la
                  interfaz, manteniendo la{' '}
                  <strong style={{ fontWeight: 600 }}>
                    claridad y un orden visual agradable
                  </strong>
                  .
                </p>
              </div>
            </div>
          </div>

          <div className="screen-variations">
            <h3 className="subsection-title">TAMAÑO DE PANTALLA ORIGINAL</h3>
            <p className="strategy-description">
              SportCampus fue diseñado con una estrategia mobile-first,
              respondiendo al cambio en los hábitos tecnológicos del deporte
              universitario. Esto permite que estudiantes y entrenadores accedan
              de forma inmediata y flexible a la información deportiva, sin
              importar su ubicación.
            </p>
            <ul className="strategy-decisions">
              <li className="strategy-item">
                Dominio del Tráfico Móvil - +89% del tráfico deportivo
                universitario viene de móviles
              </li>
              <li className="strategy-item">
                Contexto de Uso Dinámico - Usuarios acceden durante
                entrenamientos y eventos deportivos
              </li>
            </ul>
            <div className="screen-image">
              <img
                src="/assets/images/projects/project5/screen.png"
                alt="Tamaño original"
              />
            </div>

            <div className="screen-variations-images">
              <h3 className="subsection-title">
                VARIACIONES DE TAMAÑO DE PANTALLA
              </h3>
              <p className="screen-description">
                Se desarrolló un sistema de adaptación visual que ajusta
                dinámicamente los componentes según el dispositivo y contexto de
                uso. Esto garantiza una experiencia óptima y funcional tanto
                para estudiantes en móviles como para coordinadores en
                computadoras, sin afectar la usabilidad.
              </p>
              <img
                src="/assets/images/projects/project5/size_variation.png"
                alt="Variación de pantalla"
              />
            </div>
          </div>
          <div className="design-section">
            <h3 className="subsection-title">PROTOTIPO DE ALTA FIDELIDAD</h3>
            <div className="high-fidelity-section">
              <p className="high-fidelity-text">
                Este diseño integró un sistema visual unificado inspirado en la
                identidad deportiva de la universidad, utilizando una paleta de
                colores centrada en el azul institucional y complementada con
                gradientes dinámicos que transmiten movimiento y energía.
              </p>
              <div className="high-fidelity-image">
                <img
                  src="/assets/images/projects/project5/high_fidelity.png"
                  alt="Prototipo de alta fidelidad"
                />
              </div>
              <div className="prototype-links">
                <a
                  href="https://www.figma.com/proto/EIoAaj7YwhbKmOFqTcRNuf/SportCampus?page-id=4%3A16&node-id=9-1849&p=f&viewport=479%2C417%2C0.06&t=mkFB5H99xp4xtpL4-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=9%3A1849"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--outline"
                >
                  Ver prototipo web
                </a>
                <a
                  href="https://www.figma.com/proto/EIoAaj7YwhbKmOFqTcRNuf/SportCampus?page-id=1%3A3847&node-id=1-7598&p=f&viewport=479%2C395%2C0.1&t=Hqg0cXGAsEdSlbCG-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A7598"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--outline"
                >
                  Ver prototipo móvil
                </a>
              </div>
            </div>
          </div>

          <div className="iconography-section">
            <h3 className="subsection-title">ICONOGRAFÍA</h3>
            <p className="iconography-description">
              El sistema de iconos de SportCampus combina{' '}
              <strong style={{ fontWeight: 600 }}>
                símbolos deportivos universales con iconografía del contexto
                universitario
              </strong>
              . Se diseñaron iconos personalizados que reflejan la naturaleza
              dinámica de la aplicación: un{' '}
              <strong style={{ fontWeight: 600 }}>
                calendario para "Torneos"
              </strong>{' '}
              y{' '}
              <strong style={{ fontWeight: 600 }}>
                gráficas para "Estadísticas"
              </strong>
              . Para mantener la{' '}
              <strong style={{ fontWeight: 600 }}>coherencia visual</strong>, se
              utilizaron iconos estándar reconocibles como cámara y usuario,
              facilitando la navegación intuitiva.
            </p>

            <div className="iconography-grid">
              <div className="icon-showcase">
                <img
                  src="/assets/images/projects/project5/iconography.png"
                  alt="Sistema de iconografía de SportCampus"
                  draggable="false"
                  className="no-save"
                  onContextMenu={e => e.preventDefault()}
                />
              </div>
            </div>

            <div className="iconography-principles">
              <h4 className="principles-title">PRINCIPIOS DE DISEÑO:</h4>
              <ul className="principles-list">
                <li>
                  <strong style={{ fontWeight: 600 }}>
                    Reconocimiento deportivo instantáneo:
                  </strong>{' '}
                  Los iconos utilizan formas familiares del mundo deportivo que
                  los usuarios reconocen inmediatamente, reduciendo la curva de
                  aprendizaje.
                </li>
                <li>
                  <strong style={{ fontWeight: 600 }}>
                    Diferenciación por deporte:
                  </strong>{' '}
                  Sistema visual que distingue claramente entre fútbol,
                  basquetbol, voleibol y fútbol americano mediante siluetas
                  características.
                </li>
                <li>
                  <strong style={{ fontWeight: 600 }}>Escalabilidad:</strong>{' '}
                  Diseñados a{' '}
                  <strong style={{ fontWeight: 600 }}>512×512 px</strong>,
                  funcionan perfectamente en diferentes tamaños, desde
                  miniaturas en navegación hasta iconos grandes en pantallas de
                  detalle, manteniendo nitidez en displays Retina.
                </li>
              </ul>
            </div>
          </div>

          <h3 className="subsection-title">CONSIDERACIONES DE ACCESIBILIDAD</h3>
          <ol className="accessibility-list">
            <li className="accessibility-item">
              Los componentes fueron diseñados con un enfoque modular que
              permite escalabilidad visual, incorporando cards adaptativas con
              elevación progresiva.
            </li>
            <li className="accessibility-item">
              Combina símbolos deportivos universales con elementos propios del
              contexto universitario, garantizando un reconocimiento inmediato y
              una navegación intuitiva para todo tipo de usuarios dentro del
              ecosistema SportCampus.
            </li>
          </ol>
        </section>

        <section className="project-detail__section">
          <h2 className="subsection-title-with-border">
            RESULTADOS Y REFLEXIÓN
          </h2>

          <div className="results-section">
            <h3 className="subsection-title">CONCLUSIONES</h3>
            <p className="conclusion-text">
              SportCampus demostró{' '}
              <strong style={{ fontWeight: 600 }}>
                demanda por una plataforma deportiva universitaria integrada
              </strong>
              . Los principales problemas eran{' '}
              <strong style={{ fontWeight: 600 }}>comunicación dispersa</strong>{' '}
              y falta de información centralizada. El{' '}
              <strong style={{ fontWeight: 600 }}>
                enfoque mobile-first funcionó bien
              </strong>{' '}
              y las interfaces diferenciadas cubrieron las necesidades de cada
              grupo. Logré crear una experiencia que integra comunicación,
              estadísticas y gestión de torneos como{' '}
              <strong style={{ fontWeight: 600 }}>
                punto de partida para modernizar el deporte universitario
              </strong>
              .
            </p>
          </div>
          <div className="results-section">
            <h3 className="subsection-title">IMPACTO</h3>
            <p className="impact-text">
              SportCampus es una{' '}
              <strong style={{ fontWeight: 600 }}>
                plataforma digital que facilita la gestión deportiva
              </strong>{' '}
              universitaria con interfaz simple y funciones especializadas,
              transformando la experiencia deportiva y fomentando{' '}
              <strong style={{ fontWeight: 600 }}>mayor participación</strong>.
            </p>
          </div>
          <div className="results-section">
            <h3 className="subsection-title">LO QUE APRENDÍ</h3>
            <p className="learnings-text">
              Es fundamental entender las{' '}
              <strong style={{ fontWeight: 600 }}>
                necesidades emocionales y sociales
              </strong>{' '}
              de usuarios que buscan competencia y pertenencia. La{' '}
              <strong style={{ fontWeight: 600 }}>
                simplicidad en el diseño
              </strong>{' '}
              facilita acceso rápido en contextos activos, y la accesibilidad
              debe contemplar diversidad de habilidades y edades.
            </p>

            <div className="lessons-grid">
              <div className="lessons-section">
                <h4 className="lessons-title">Lecciones profesionales</h4>
                <ul className="lessons-list">
                  <li className="lesson-item">
                    Los{' '}
                    <strong style={{ fontWeight: 600 }}>
                      estados de comunicación claros
                    </strong>{' '}
                    son críticos en deportes, donde confusiones causan pérdida
                    de oportunidades y frustración.
                  </li>
                  <li className="lesson-item">
                    Interfaces{' '}
                    <strong style={{ fontWeight: 600 }}>
                      intuitivas y de una mano
                    </strong>{' '}
                    son esenciales bajo presión deportiva.
                  </li>
                </ul>
              </div>
              <div className="lessons-section">
                <h4 className="lessons-title">Lecciones personales</h4>
                <ul className="lessons-list">
                  <li className="lesson-item">
                    La vulnerabilidad del deporte me enseñó la{' '}
                    <strong style={{ fontWeight: 600 }}>
                      responsabilidad ética
                    </strong>{' '}
                    de crear experiencias que empoderen estudiantes.
                  </li>
                  <li className="lesson-item">
                    Los calendarios deportivos cambian constantemente, aprendí a
                    diseñar{' '}
                    <strong style={{ fontWeight: 600 }}>
                      sistemas flexibles
                    </strong>{' '}
                    para el ecosistema deportivo.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="results-section">
            <h3 className="subsection-title">PRÓXIMOS PASOS</h3>
            <ol className="next-steps-list">
              <li className="next-step-item">
                <strong style={{ fontWeight: 600 }}>
                  Optimización de jerarquía visual
                </strong>{' '}
                en notificaciones aumentando contraste, tamaño de badges y
                mejorando micro-interacciones para mayor visibilidad.
              </li>
              <li className="next-step-item">
                <strong style={{ fontWeight: 600 }}>
                  Iteración de componentes estadísticos
                </strong>{' '}
                incorporando data visualization más intuitiva con tooltips
                contextuales y comparaciones visuales claras.
              </li>
              <li className="next-step-item">
                <strong style={{ fontWeight: 600 }}>
                  Optimización de navegación para multi-equipos
                </strong>{' '}
                creando patrones de UI que manejen eficientemente múltiples
                contextos deportivos.
              </li>
            </ol>
          </div>

          <div className="results-section">
            <h3 className="subsection-title">CONSIDERACIONES FINALES</h3>
            <p className="final-text">
              SportCampus no es solo una herramienta tecnológica, sino una{' '}
              <strong style={{ fontWeight: 600 }}>
                propuesta de transformación
              </strong>{' '}
              que reconoce el deporte universitario como parte esencial del
              desarrollo estudiantil. El proyecto reafirmó que el{' '}
              <strong style={{ fontWeight: 600 }}>
                diseño UX/UI va más allá de lo visual
              </strong>
              , al centrarse en entender necesidades humanas reales y crear
              soluciones empáticas. A través de{' '}
              <strong style={{ fontWeight: 600 }}>
                investigación rigurosa, pruebas con usuarios y mejoras continuas
              </strong>
              , se logró una experiencia que no solo organiza y comunica mejor,
              sino que impulsa la participación estudiantil y fortalece las
              comunidades deportivas. Este caso refleja mi evolución como
              diseñador y mi compromiso con crear tecnología significativa,
              adaptada al contexto y orientada a generar{' '}
              <strong style={{ fontWeight: 600 }}>
                impacto positivo en la vida de las personas
              </strong>
              .
            </p>
          </div>

          <div className="project-detail__links project-detail__links--final">
            <h2 className="subsection-title-with-border">
              REPOSITORIO DEL PROYECTO
            </h2>

            <div className="development-section">
              <h3 className="subsection-title">DESARROLLO</h3>
              <p className="summary-text">
                Desarrollé la aplicación con React Native, creando el entorno
                front-end a partir de componentes reutilizables que facilitaron
                la consistencia y el mantenimiento del código. También,
                participé en el desarrollo del backend utilizando Supabase, una
                plataforma BaaS que proporciona bases de datos, autenticación y
                almacenamiento listos para usar. Esto permitió gestionar de
                manera eficiente los usuarios y mantener el contenido
                actualizado en tiempo real, asegurando que la aplicación
                funcionara de forma fluida y confiable.
              </p>
            </div>

            <div className="project-detail__repository-links">
              <a
                href="https://github.com/AldG99/team-sports-training-app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--outline"
              >
                Versión móvil (React Native)
              </a>
            </div>
          </div>
        </section>
      </div>

      {selectedImage && (
        <div className="image-modal" onClick={closeImageModal}>
          <div className="image-modal__content">
            <img src={selectedImage} alt="Imagen ampliada" />
          </div>
        </div>
      )}
    </main>
  );
};

export default ProjectDetail5;
