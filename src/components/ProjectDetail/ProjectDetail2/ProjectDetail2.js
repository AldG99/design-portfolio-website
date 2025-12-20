import React, { useEffect, useState } from 'react';
import { useScrollReveal } from '../../../context/ScrollRevealContext';
import '../ProjectDetail.scss';

const ProjectDetail2 = () => {
  const { revealRef } = useScrollReveal();
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Cell-AR — Alfredo García`;
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
              src="/assets/images/projects/project2/thumbnail.png"
              alt="Cell-AR"
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

          <h1 className="project-title">Cell-AR</h1>

          <div className="project-detail__meta">
            <div className="project-detail__meta-item">
              <span className="meta-value">Enero - Mayo 2024</span>
            </div>
          </div>
          <div className="project-detail__tools">
            <span className="tool-tag tool-tag--figma">Figma</span>
            <span className="tool-tag tool-tag--blender">Blender</span>
            <span className="tool-tag tool-tag--unity">Unity</span>
          </div>
        </header>

        <section className="project-detail__overview">
          <h2 className="subsection-title-with-border">RESUMEN DEL PROYECTO</h2>
          <p className="overview-text">
            Diseño un prototipo de alta fidelidad para una aplicación móvil
            educativa que utiliza realidad aumentada para transformar el
            aprendizaje de biología celular a nivel superior. Cell-AR permite a
            estudiantes universitarios visualizar, explorar e interactuar con
            modelos 3D de células eucariotas, procariotas, vegetales y animales
            directamente desde sus dispositivos móviles, convirtiendo cualquier
            superficie en un laboratorio de biología avanzado y accesible.
          </p>
        </section>

        <section className="project-detail__section">
          <div className="project-detail__problem-goal-container">
            <div className="project-detail__problem">
              <h3 className="subsection-title">PROBLEMA</h3>
              <p className="problem-text">
                La educación tradicional en biología brinda teoría, pero no
                facilita la visualización 3D de estructuras celulares, lo que
                dificulta la comprensión de procesos avanzados. Los estudiantes
                dependen de diagramas estáticos y microscopios limitados, y
                muchas instituciones carecen de equipos modernos para prácticas
                adecuadas.
              </p>
            </div>

            <div className="project-detail__goal">
              <h3 className="subsection-title">OBJETIVO</h3>
              <p className="goal-text">
                Diseñé Cell-AR, una aplicación educativa de realidad aumentada
                que convierte smartphones en herramientas para explorar células
                y organelos a nivel molecular. La app ofrece una experiencia
                inmersiva que mejora la comprensión y retención de procesos
                celulares, beneficiando a estudiantes en ciencias de la vida,
                medicina y biotecnología.
              </p>
            </div>
          </div>

          <div className="project-detail__role">
            <h3 className="subsection-title">MI ROL</h3>
            <p className="role-text">
              Participo en todo el proceso de diseño centrado en el usuario,
              desde la conceptualización hasta el prototipo final, para una
              aplicación de realidad aumentada de células biológicas. Realizo
              investigación con estudiantes y profesores, guío la ideación y el
              prototipado iterativo aplicando design thinking, y valido la
              experiencia con pruebas de usabilidad. La aplicación se programa
              en C# con Unity, incluyendo la creación de modelos 3D interactivos
              y la detección de imágenes para la carga de las células,
              permitiendo una exploración educativa y visualmente atractiva.
            </p>
          </div>

          <div className="project-detail__responsibilities">
            <h3 className="subsection-title">RESPONSABILIDADES</h3>
            <ul className="responsibilities-list">
              <li className="responsibility-item">
                Diseño de tareas específicas que evalúan comprensión de interfaz
                AR, efectividad de herramientas de aprendizaje y satisfacción
                general del usuario.
              </li>
              <li className="responsibility-item">
                Desarrollo de wireframes de baja y alta fidelidad utilizando
                Figma.
              </li>
              <li className="responsibility-item">
                Modelado 3D científicamente preciso de células eucariotas,
                procariotas, vegetales y animales utilizando Blender para crear
                assets optimizados para experiencias AR móviles.
              </li>
            </ul>
          </div>
        </section>

        <section className="project-detail__section">
          <h2 className="subsection-title-with-border">INVESTIGACIÓN</h2>

          <div className="project-detail__understanding">
            <p className="understanding-text">
              Se realizó{' '}
              <strong style={{ fontWeight: 600 }}>
                investigación cuantitativa
              </strong>{' '}
              con estudiantes y profesores para identificar dificultades en{' '}
              <strong style={{ fontWeight: 600 }}>estructuras celulares</strong>
              , evaluar métodos tradicionales y medir apertura hacia{' '}
              <strong style={{ fontWeight: 600 }}>
                realidad aumentada en educación
              </strong>
              .
            </p>
            <div className="understanding-image">
              <img
                src="/assets/images/projects/project2/research.png"
                alt="Investigación de usuario"
              />
            </div>

            <h3 className="subsection-title">
              INVESTIGACIÓN DE USUARIOS: PUNTOS DÉBILES
            </h3>
            <ol className="key-issues-list">
              <li className="key-issue-item">
                Dificultad para visualizar{' '}
                <strong style={{ fontWeight: 600 }}>
                  estructuras celulares en tres dimensiones
                </strong>
                , impidiendo comprensión espacial de organelos.
              </li>
              <li className="key-issue-item">
                Carencia de herramientas para comprender{' '}
                <strong style={{ fontWeight: 600 }}>
                  escalas y proporciones microscópicas
                </strong>
                , generando confusión sobre tamaños relativos.
              </li>
              <li className="key-issue-item">
                Dificultad para retener información sobre{' '}
                <strong style={{ fontWeight: 600 }}>
                  funciones específicas de organelos
                </strong>
                , evidenciando enfoque memorístico sin comprensión profunda.
              </li>
            </ol>

            <h3 className="subsection-title">ANÁLISIS COMPETITIVO</h3>
            <div className="project-detail__competition">
              <div className="competitive-table">
                <div className="competitive-row competitive-row--names">
                  <div className="competitive-cell competitive-cell--empty"></div>
                  <div className="competitive-cell competitive-cell--name">
                    <h3 className="competitor-name">Complete HeartX</h3>
                  </div>
                  <div className="competitive-cell competitive-cell--name">
                    <h3 className="competitor-name">Bacteria 3D AR</h3>
                  </div>
                  <div className="competitive-cell competitive-cell--name">
                    <h3 className="competitor-name">
                      Cell & Cell Structure 3D
                    </h3>
                  </div>
                </div>

                <div className="competitive-row competitive-row--overview">
                  <div className="competitive-cell competitive-cell--label"></div>
                  <div
                    className="competitive-cell competitive-cell--images"
                    data-competitor="Complete HeartX"
                  >
                    <div className="competitor-images">
                      <img
                        src="/assets/images/projects/project2/competitor/competitor1.png"
                        alt="Complete HeartX captura 1"
                      />
                    </div>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--images"
                    data-competitor="Bacteria 3D AR"
                  >
                    <div className="competitor-images">
                      <img
                        src="/assets/images/projects/project2/competitor/competitor2.png"
                        alt="Bacteria 3D AR captura 1"
                      />
                    </div>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--images"
                    data-competitor="Cell & Cell Structure 3D"
                  >
                    <div className="competitor-images">
                      <img
                        src="/assets/images/projects/project2/competitor/competitor3.png"
                        alt="Cell & Cell Structure 3D captura 1"
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
                    data-competitor="Complete HeartX"
                  >
                    <p className="competitor-description">
                      App de realidad aumentada de Stanford Medicine que permite
                      explorar un corazón humano en 3D con animaciones y modelos
                      anatómicos detallados.
                    </p>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="Bacteria 3D AR"
                  >
                    <p className="competitor-description">
                      App de realidad aumentada especializada en microbiología
                      que visualiza bacterias y microorganismos en 3D con
                      procesos celulares interactivos.
                    </p>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="Cell & Cell Structure 3D"
                  >
                    <p className="competitor-description">
                      App educativa 3D enfocada en células y organelos con
                      modelos detallados de estructuras eucariotas y
                      procariotas.
                    </p>
                  </div>
                </div>

                <div className="competitive-row competitive-row--strengths">
                  <div className="competitive-cell competitive-cell--label">
                    <h4 className="row-label">FORTALEZAS</h4>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="Complete HeartX"
                  >
                    <ul className="competitor-list strengths">
                      <li>
                        Modelos 3D precisos validados por Stanford Medicine
                      </li>
                      <li>Animaciones fluidas de función cardíaca</li>
                      <li>Interface AR intuitiva con gestos naturales</li>
                      <li>Respaldo de institución médica prestigiosa</li>
                    </ul>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="Bacteria 3D AR"
                  >
                    <ul className="competitor-list strengths">
                      <li>Modelos AR específicos de células procariotas</li>
                      <li>Visualización de procesos bacterianos únicos</li>
                      <li>Información sobre patogenicidad y biotecnología</li>
                    </ul>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="Cell & Cell Structure 3D"
                  >
                    <ul className="competitor-list strengths">
                      <li>Enfoque específico en biología celular</li>
                      <li>Comparación directa eucariotas vs procariotas</li>
                      <li>Información científica integrada</li>
                      <li>Interface simplificada para estudiantes</li>
                    </ul>
                  </div>
                </div>

                <div className="competitive-row competitive-row--weaknesses">
                  <div className="competitive-cell competitive-cell--label">
                    <h4 className="row-label">DEBILIDADES</h4>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="Complete HeartX"
                  >
                    <ul className="competitor-list weaknesses">
                      <li>Limitado únicamente al sistema cardiovascular</li>
                      <li>Sin funciones de evaluación o progreso</li>
                    </ul>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="Bacteria 3D AR"
                  >
                    <ul className="competitor-list weaknesses">
                      <li>Solo microorganismos procariotas</li>
                      <li>Interface técnica requiere conocimiento previo</li>
                      <li>
                        Contenido avanzado para estudiantes introductorios
                      </li>
                    </ul>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="Cell & Cell Structure 3D"
                  >
                    <ul className="competitor-list weaknesses">
                      <li>Modelos 3D estáticos sin realidad aumentada</li>
                      <li>Gráficos de calidad básica</li>
                    </ul>
                  </div>
                </div>

                <div className="competitive-row competitive-row--audience">
                  <div className="competitive-cell competitive-cell--label">
                    <h4 className="row-label">AUDIENCIA OBJETIVO</h4>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="Complete HeartX"
                  >
                    <div className="competitor-audience">
                      <p>
                        Estudiantes de medicina, enfermería y profesionales de
                        la salud (18-35 años) con presupuesto para apps premium.
                      </p>
                    </div>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="Bacteria 3D AR"
                  >
                    <div className="competitor-audience">
                      <p>
                        Estudiantes universitarios de microbiología y
                        biotecnología (20-26 años) e investigadores
                        especializados.
                      </p>
                    </div>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="Cell & Cell Structure 3D"
                  >
                    <div className="competitor-audience">
                      <p>
                        Estudiantes de biología de nivel medio y primeros años
                        universitarios (15-20 años) y educadores.
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
            <div className="personas-horizontal-grid" data-count="1">
              <div className="persona-card">
                <div className="persona-statement">
                  <div className="persona-image">
                    <img
                      src="/assets/images/projects/project2/persona/persona1.png"
                      alt="Sofía - Estudiante de Biología"
                      onClick={() =>
                        openImageModal(
                          '/assets/images/projects/project2/persona/persona1.png'
                        )
                      }
                      className="clickable-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="project-detail__empathy-map">
            <h3 className="subsection-title">EMPATHY MAP</h3>
            <div className="empathy-map-image">
              <img
                src="/assets/images/projects/project2/empathy/empathy1.png"
                alt="Mapa de empatía del usuario"
                onClick={() =>
                  openImageModal(
                    '/assets/images/projects/project2/empathy/empathy1.png'
                  )
                }
                className="clickable-image"
              />
            </div>
          </div>

          <div className="project-detail__journey-maps">
            <h3 className="subsection-title">MAPAS DE RECORRIDO DEL USUARIO</h3>
            <div className="journey-maps-vertical">
              <div className="journey-card">
                <h4 className="journey-title">Michelle Hernández</h4>
                <p className="journey-description">
                  Estudiante destacada de 4to semestre - trabajando medio tiempo
                  en laboratorio clínico, buscando recursos tecnológicos
                  innovadores para dominar biología celular.
                </p>
                <div className="journey-image">
                  <img
                    src="/assets/images/projects/project2/map/map1.jpg"
                    alt="Mapa de recorrido de Michelle Hernández"
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
                src="/assets/images/projects/project2/sitemap.svg"
                alt="Mapa del sitio"
                onClick={() =>
                  openImageModal('/assets/images/projects/project2/sitemap.svg')
                }
                className="clickable-image"
              />
            </div>
          </div>

          <div className="design-section">
            <h3 className="subsection-title">USER FLOW</h3>
            <div className="design-image">
              <img
                src="/assets/images/projects/project2/userflow.svg"
                alt="Flujo de usuario"
                onClick={() =>
                  openImageModal(
                    '/assets/images/projects/project2/userflow.svg'
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
            <div className="paper-wireframes-grid" data-count="1">
              <img
                src="/assets/images/projects/project2/paper/paper1.png"
                alt="Wireframe en papel 1"
              />
            </div>
          </div>

          <div className="design-section">
            <h3 className="subsection-title">WIREFRAMES DIGITALES</h3>
            <div className="design-image">
              <img
                src="/assets/images/projects/project2/wireframes.png"
                alt="Wireframes digitales"
              />
            </div>
          </div>
        </section>

        <section className="project-detail__section">
          <div className="design-section">
            <h3 className="subsection-title">PROTOTIPO DE BAJA FIDELIDAD</h3>
            <p className="design-text">
              Crear un prototipo de baja fidelidad permite validar rápidamente
              conceptos educativos y la experiencia de usuario sin invertir en
              elementos visuales complejos. Solo después de confirmar la
              estructura y flujos se desarrolla el prototipo de alta fidelidad
              con modelos 3D detallados.
            </p>
            <div className="design-image">
              <img
                src="/assets/images/projects/project2/prototype.png"
                alt="Prototipo de baja fidelidad"
              />
            </div>
            <div className="prototype-link">
              <a
                href="https://www.figma.com/proto/jB0EVKQ5uoIbvAaQy1PAx3/Cell-App?page-id=0%3A1&node-id=115-690&p=f&viewport=-1435%2C-240%2C0.19&t=ZqeIroaqav6sLgn4-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=115%3A690"
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
                <span className="detail-value">
                  Facultad de Ciencias Biológicas
                </span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Participantes:</span>
                <span className="detail-value">
                  1 Docente (46 años) y 5 Estudiantes universitarios (19-22
                  años)
                </span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Duración:</span>
                <span className="detail-value">
                  20-25 minutos por participante
                </span>
              </div>
            </div>
          </div>

          <h3 className="subsection-title">PRINCIPALES HALLAZGOS</h3>
          <div className="findings-list">
            {/* Finding 1 */}
            <div className="finding-item">
              <h4 className="finding-area">Interfaz y Navegación General</h4>
              <p className="finding-description">
                La interfaz es limpia e intuitiva, pero algunos elementos
                necesitan mayor claridad visual.
              </p>
              <div className="finding-quotes">
                <blockquote className="user-quote">
                  <strong style={{ fontWeight: 600 }}>P01:</strong> "La pantalla
                  principal está muy bien organizada, encuentro todo fácilmente.
                  Los iconos son claros y el menú principal no está saturado."
                </blockquote>
                <blockquote className="user-quote">
                  <strong style={{ fontWeight: 600 }}>P03:</strong> "La barra de
                  navegación inferior está muy bien, pero me gustaría que
                  incluyera los nombres de las secciones."
                </blockquote>
              </div>
            </div>

            {/* Finding 2 */}
            <div className="finding-item">
              <h4 className="finding-area">Navegación entre Tipos Celulares</h4>
              <p className="finding-description">
                La transición entre células eucariotas y procariotas es
                valorada, pero falta comparación directa.
              </p>
              <div className="finding-quotes">
                <blockquote className="user-quote">
                  <strong style={{ fontWeight: 600 }}>P05:</strong> "La
                  información sobre cada organelo está bien organizada, pero
                  cuando cambio de célula prokariota a eukariota pierdo el
                  contexto de lo que estaba viendo antes."
                </blockquote>
              </div>
            </div>
          </div>

          <h2 className="subsection-title-with-border">REFINANDO EL DISEÑO</h2>
          <div className="mockups-section">
            <div className="mockup-item">
              <p className="mockup-description">
                Se identificaron{' '}
                <strong style={{ fontWeight: 600 }}>oportunidades clave</strong>{' '}
                para mejorar la experiencia. Los usuarios valoraron la interfaz
                limpia pero necesitaban mayor{' '}
                <strong style={{ fontWeight: 600 }}>
                  contextualización de información celular
                </strong>{' '}
                y mejor organización educativa. Los puntos críticos fueron
                pérdida de contexto al cambiar tipos celulares y falta de{' '}
                <strong style={{ fontWeight: 600 }}>
                  información persistente sobre organelos
                </strong>
                .
              </p>
              <div className="mockup-image">
                <img
                  src="/assets/images/projects/project2/mockups/mockups1.png"
                  alt="Mockup 1"
                />
              </div>
              <div className="design-decisions">
                <h4 className="decisions-title">DECISIONES DE DISEÑO:</h4>
                <ul className="decisions-list">
                  <li>
                    Implementar un{' '}
                    <strong style={{ fontWeight: 600 }}>panel fijo</strong> que
                    mantenga visible la información del organelo seleccionado.
                  </li>
                  <li>
                    Implementar{' '}
                    <strong style={{ fontWeight: 600 }}>
                      etiquetas flotantes
                    </strong>{' '}
                    con información instantánea de cada componente celular sin
                    interrumpir la exploración.
                  </li>
                  <li>
                    Agregar{' '}
                    <strong style={{ fontWeight: 600 }}>
                      títulos a los iconos de navegación
                    </strong>{' '}
                    para que los usuarios comprendan inmediatamente la función
                    de cada sección.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="project-detail__section">
          <h2 className="subsection-title-with-border">DISEÑO VISUAL</h2>

          <div className="screen-variations">
            <h3 className="subsection-title">TAMAÑO DE PANTALLA ORIGINAL</h3>
            <p className="strategy-description">
              Cell-AR es más efectiva en móviles debido a su accesibilidad,
              portabilidad y compatibilidad nativa con AR. Usa smartphones que
              ya tienen los estudiantes, evita costos de equipos y ofrece una
              experiencia educativa inmersiva, democratizando el acceso a
              tecnología avanzada sin hardware extra.
            </p>
            <ul className="strategy-decisions">
              <li className="strategy-item">
                Los estudiantes pueden acceder en cualquier momento, usando solo
                su smartphone, sin requerir equipos especiales.
              </li>
              <li className="strategy-item">
                Cada estudiante puede explorar los modelos celulares a su ritmo,
                repitiendo visualizaciones y adaptando la experiencia a su
                estilo de aprendizaje.
              </li>
              <li className="strategy-item">
                La pantalla táctil permite manipular estructuras celulares con
                gestos familiares, facilitando la comprensión de conceptos
                complejos como organelos y procesos celulares.
              </li>
            </ul>
            <div className="screen-image">
              <img
                src="/assets/images/projects/project2/screen.png"
                alt="Tamaño original"
              />
            </div>
          </div>

          <div className="design-section">
            <h3 className="subsection-title">PROTOTIPO DE ALTA FIDELIDAD</h3>
            <div className="high-fidelity-section">
              <p className="high-fidelity-text">
                El prototipo de alta fidelidad de Cell-AR valida la experiencia
                visual completa, evaluando claridad de etiquetas, usabilidad,
                legibilidad y coherencia visual. También es clave para comunicar
                el potencial de la app a desarrolladores y educadores antes del
                desarrollo final.
              </p>
              <div className="high-fidelity-image">
                <img
                  src="/assets/images/projects/project2/high_fidelity.png"
                  alt="Prototipo de alta fidelidad"
                />
              </div>
              <div className="prototype-links">
                <a
                  href="https://www.figma.com/proto/jB0EVKQ5uoIbvAaQy1PAx3/Cell-App?page-id=115%3A2&node-id=115-9&p=f&viewport=491%2C415%2C0.2&t=zaOIqY0vvWiuLmAz-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=115%3A9"
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
              El sistema de iconos de Cell-AR combina{' '}
              <strong style={{ fontWeight: 600 }}>
                símbolos universales con iconografía educativa especializada
              </strong>
              . Se diseñaron iconos personalizados que reflejan la esencia de la
              aplicación: un{' '}
              <strong style={{ fontWeight: 600 }}>
                microscopio para la sección "Explorar"
              </strong>
              , simbolizando la exploración de células en 3D, y{' '}
              <strong style={{ fontWeight: 600 }}>
                libros para la sección "Aprender"
              </strong>
              , representando el estudio y conocimiento científico. Para
              mantener la{' '}
              <strong style={{ fontWeight: 600 }}>coherencia visual</strong>, se
              utilizaron iconos estándar reconocibles: una casa para "Inicio" y
              un usuario para "Perfil", facilitando la navegación intuitiva.
            </p>

            <div className="iconography-grid">
              <div className="icon-showcase">
                <img
                  src="/assets/images/projects/project2/iconography.png"
                  alt="Sistema de iconografía de Cell-AR"
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
                    Precisión científica:
                  </strong>{' '}
                  Los iconos representan fielmente las formas y estructuras de
                  organelos , facilitando el reconocimiento y aprendizaje.
                </li>
                <li>
                  <strong style={{ fontWeight: 600 }}>Claridad en AR:</strong>{' '}
                  Diseñados para ser legibles tanto en pantalla como en
                  etiquetas flotantes sobre modelos 3D en realidad aumentada.
                </li>
                <li>
                  <strong style={{ fontWeight: 600 }}>
                    Diferenciación celular:
                  </strong>{' '}
                  Sistema visual que distingue claramente entre células
                  eucariotas, procariotas, animales y vegetales.
                </li>
                <li>
                  <strong style={{ fontWeight: 600 }}>Escalabilidad:</strong>{' '}
                  Funcionan perfectamente en diferentes tamaños, desde
                  miniaturas en menús hasta iconos grandes en pantallas de
                  información detallada.
                </li>
              </ul>
            </div>
          </div>

          <h3 className="subsection-title">CONSIDERACIONES DE ACCESIBILIDAD</h3>
          <ol className="accessibility-list">
            <li className="accessibility-item">
              Seleccioné fuentes legibles, como Roboto, con un tamaño mínimo de
              16sp para asegurar una lectura cómoda y accesible en todo tipo de
              dispositivos.
            </li>
            <li className="accessibility-item">
              Mantuve un buen espaciado entre líneas para facilitar la lectura,
              evitando que el texto se vea saturado y mejorando la claridad
              visual del contenido.
            </li>
            <li className="accessibility-item">
              Usé una jerarquía tipográfica clara para organizar la información,
              diferenciando títulos, subtítulos y texto principal mediante
              tamaños.
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
              Cell-AR demostró ser una{' '}
              <strong style={{ fontWeight: 600 }}>solución efectiva</strong>{' '}
              para transformar el aprendizaje de biología celular con realidad
              aumentada. El prototipo de alta fidelidad validó la viabilidad de
              ofrecer{' '}
              <strong style={{ fontWeight: 600 }}>
                experiencias inmersivas y accesibles
              </strong>{' '}
              desde smartphones. El diseño centrado en el usuario permitió
              abordar necesidades clave como la comprensión de{' '}
              <strong style={{ fontWeight: 600 }}>
                escalas y relaciones espaciales
              </strong>{' '}
              entre organelos, manteniendo una experiencia intuitiva.
            </p>
          </div>

          <div className="results-section">
            <h3 className="subsection-title">IMPACTO</h3>
            <p className="impact-text">
              Cell-AR demostró potencial para revolucionar la{' '}
              <strong style={{ fontWeight: 600 }}>
                enseñanza de biología celular{' '}
              </strong>
              mediante{' '}
              <strong style={{ fontWeight: 600 }}>
                visualización en realidad aumentada
              </strong>
              . Puede integrarse en planes de estudio y abrir posibilidades para
              enseñanza científica compleja con{' '}
              <strong style={{ fontWeight: 600 }}>
                tecnologías inmersivas
              </strong>
              .
            </p>
          </div>
          <div className="results-section">
            <h3 className="subsection-title">LO QUE APRENDÍ</h3>
            <p className="learnings-text">
              Comprendí que las apps educativas AR dependen de{' '}
              <strong style={{ fontWeight: 600 }}>
                diseño sencillo y centrado en el usuario
              </strong>
              , priorizando usabilidad sobre efectos visuales complejos. Es
              posible ofrecer{' '}
              <strong style={{ fontWeight: 600 }}>
                experiencia de calidad en dispositivos de gama media
              </strong>{' '}
              con planificación estratégica, garantizando{' '}
              <strong style={{ fontWeight: 600 }}>
                acceso más amplio y equitativo
              </strong>
              .
            </p>
            <div className="lessons-grid">
              <div className="lessons-section">
                <h4 className="lessons-title">Lecciones profesionales</h4>
                <ul className="lessons-list">
                  <li className="lesson-item">
                    Las{' '}
                    <strong style={{ fontWeight: 600 }}>
                      iteraciones basadas en feedback
                    </strong>{' '}
                    superan las suposiciones iniciales y mejoran la experiencia
                    del usuario.
                  </li>
                  <li className="lesson-item">
                    <strong style={{ fontWeight: 600 }}>
                      Involucrar a educadores
                    </strong>{' '}
                    desde etapas tempranas mejora el diseño con conocimientos
                    prácticos.
                  </li>
                </ul>
              </div>
              <div className="lessons-section">
                <h4 className="lessons-title">Lecciones personales</h4>
                <ul className="lessons-list">
                  <li className="lesson-item">
                    Aprendí{' '}
                    <strong style={{ fontWeight: 600 }}>
                      modelado 3D con Blender
                    </strong>{' '}
                    para crear prototipos más visuales en entornos
                    tridimensionales.
                  </li>
                  <li className="lesson-item">
                    Entendí la importancia de estar{' '}
                    <strong style={{ fontWeight: 600 }}>
                      actualizado en tecnologías emergentes
                    </strong>
                    .
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="results-section">
            <h3 className="subsection-title">PRÓXIMOS PASOS</h3>
            <ol className="next-steps-list">
              <li className="next-step-item">
                Implementar{' '}
                <strong style={{ fontWeight: 600 }}>
                  sistema de contenido personalizado
                </strong>{' '}
                basado en nivel educativo específico.
              </li>
              <li className="next-step-item">
                Crear{' '}
                <strong style={{ fontWeight: 600 }}>módulos adicionales</strong>{' '}
                que aborden otros temas de biología, como genética, evolución y
                ecosistemas, para ampliar el alcance educativo de Cell-AR.
              </li>
              <li className="next-step-item">
                Investigar la{' '}
                <strong style={{ fontWeight: 600 }}>
                  efectividad de Cell-AR
                </strong>{' '}
                en comparación con otros métodos de enseñanza inmersiva ayudará
                a entender mejor sus ventajas, así como a confirmar su{' '}
                <strong style={{ fontWeight: 600 }}>
                  impacto en el aprendizaje
                </strong>
                .
              </li>
            </ol>
          </div>

          <div className="results-section">
            <h3 className="subsection-title">CONSIDERACIONES FINALES</h3>
            <p className="final-text">
              Cell-AR es más que un proyecto de diseño; es una muestra de cómo
              la tecnología puede{' '}
              <strong style={{ fontWeight: 600 }}>
                ampliar el acceso a una educación de calidad
              </strong>
              . Me enseñó que un diseño centrado en el usuario puede crear
              soluciones innovadoras que integran{' '}
              <strong style={{ fontWeight: 600 }}>
                realidad aumentada, accesibilidad y pedagogía efectiva
              </strong>
              , sin sacrificar usabilidad. El feedback positivo confirma la
              necesidad de este tipo de herramientas, que combinan ciencia, buen
              diseño y accesibilidad. Este proyecto fortaleció mi capacidad para
              enfrentar{' '}
              <strong style={{ fontWeight: 600 }}>desafíos complejos</strong>{' '}
              mediante investigación, colaboración y compromiso con el{' '}
              <strong style={{ fontWeight: 600 }}>
                impacto real en los usuarios
              </strong>
              .
            </p>
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

export default ProjectDetail2;
