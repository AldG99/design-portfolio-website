import React, { useEffect, useState } from 'react';
import { useScrollReveal } from '../../../context/ScrollRevealContext';
import '../ProjectDetail.scss';

const ProjectDetail2 = () => {
  const { revealRef } = useScrollReveal();
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Alfredo García Diseñador UX/UI & Desarrollador - Cell-AR`;
  }, []);

  const openImageModal = imageUrl => {
    setSelectedImage(imageUrl);
    document.body.style.overflow = 'hidden';
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
          </div>

          <h1 className="project-title">Cell-AR</h1>

          <div className="project-detail__meta">
            <div className="project-detail__meta-item">
              <span className="meta-value">Febrero - Mayo 2024</span>
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
            Diseñé un prototipo de alta fidelidad para una aplicación móvil
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
                Diseñé una aplicación educativa de realidad aumentada llamada
                Cell-AR, que convierte smartphones en herramientas para explorar
                células y organelos con detalle molecular. Esta app ofrece a
                estudiantes una experiencia inmersiva que mejora
                significativamente su comprensión y retención de procesos
                celulares complejos, preparándolos mejor para carreras en
                ciencias de la vida, medicina y biotecnología.
              </p>
            </div>
          </div>

          <div className="project-detail__role">
            <h3 className="subsection-title">MI ROL</h3>
            <p className="role-text">
              Participé en todo el proceso de diseño centrado en el usuario,
              desde la conceptualización hasta el prototipo final. Realicé
              investigación con estudiantes y profesores, guié la ideación y el
              prototipado iterativo aplicando design thinking, y validé la
              experiencia con pruebas de usabilidad.
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
              <li className="responsibility-item">
                Optimización de geometría y texturas para mantener alta calidad
                visual mientras se asegura rendimiento fluido en dispositivos
                móviles de gama media.
              </li>
            </ul>
          </div>
        </section>

        <section className="project-detail__section">
          <h2 className="subsection-title-with-border">INVESTIGACIÓN</h2>

          <div className="project-detail__understanding">
            <p className="understanding-text">
              Se realizó una <strong>investigación cuantitativa</strong>{' '}
              mediante encuestas dirigidas a estudiantes y profesores para
              comprender las necesidades en el aprendizaje de biología celular.
              El objetivo fue identificar dificultades en la comprensión de{' '}
              <strong>estructuras celulares</strong>, evaluar la efectividad de
              los métodos tradicionales, medir la apertura hacia el uso de{' '}
              <strong>realidad aumentada en educación</strong> y validar el
              interés en una solución AR accesible y de alta calidad.
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
                Dificultad significativa para visualizar{' '}
                <strong>estructuras celulares en tres dimensiones</strong>, lo
                que impide la comprensión espacial de organelos y sus relaciones
                internas.
              </li>
              <li className="key-issue-item">
                La carencia de herramientas efectivas para comprender{' '}
                <strong>escalas y proporciones microscópicas</strong>, generando
                confusión sobre los tamaños relativos de células y organelos.
              </li>
              <li className="key-issue-item">
                Dificultad para retener y organizar información sobre{' '}
                <strong>funciones específicas de organelos</strong>,
                evidenciando un enfoque memorístico sin comprensión conceptual
                profunda.
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
                      Aplicación de realidad aumentada desarrollada por Stanford
                      Medicine que permite a usuarios explorar un corazón humano
                      completo en 3D. Utiliza modelos anatómicos detallados para
                      enseñar estructura cardíaca, función y patologías comunes.
                      Los usuarios pueden manipular el modelo, activar
                      animaciones de bombeo y explorar diferentes capas del
                      órgano.
                    </p>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="Bacteria 3D AR"
                  >
                    <p className="competitor-description">
                      Aplicación de realidad aumentada especializada en
                      microbiología que permite visualizar diferentes tipos de
                      bacterias y microorganismos en 3D. Los usuarios pueden
                      explorar estructuras procariotas, observar procesos como
                      división celular bacteriana y comparar morfologías de
                      diferentes especies microbianas mediante modelos AR
                      interactivos colocados en superficies reales.
                    </p>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="Cell & Cell Structure 3D"
                  >
                    <p className="competitor-description">
                      Aplicación educativa 3D enfocada específicamente en la
                      visualización de células y organelos celulares. Permite
                      explorar modelos detallados de células eucariotas y
                      procariotas, con funciones de zoom para examinar
                      estructuras subcelulares como núcleo, mitocondrias,
                      ribosomas y retículo endoplásmico. Incluye información
                      textual sobre función de cada organelo y comparaciones
                      entre tipos celulares.
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
                        Modelos 3D extremadamente detallados y científicamente
                        precisos validados por Stanford Medicine
                      </li>
                      <li>
                        Animaciones fluidas que muestran función cardíaca en
                        tiempo real
                      </li>
                      <li>
                        Interface intuitiva con gestos AR naturales para
                        rotación y zoom
                      </li>
                      <li>
                        Contenido respaldado por institución médica prestigiosa
                      </li>
                    </ul>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="Bacteria 3D AR"
                  >
                    <ul className="competitor-list strengths">
                      <li>
                        Modelos AR específicos de células procariotas con
                        precisión microbiológica
                      </li>
                      <li>
                        Visualización de procesos únicos como conjugación
                        bacteriana y esporulación
                      </li>
                      <li>
                        Información contextualizada sobre patogenicidad y
                        aplicaciones biotecnológicas
                      </li>
                    </ul>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="Cell & Cell Structure 3D"
                  >
                    <ul className="competitor-list strengths">
                      <li>
                        Enfoque específico en biología celular con modelos
                        dedicados de organelos
                      </li>
                      <li>
                        Comparación directa entre células eucariotas y
                        procariotas en una misma plataforma
                      </li>
                      <li>
                        Información científica básica integrada sobre función de
                        cada estructura celular
                      </li>
                      <li>
                        Interface simplificada diseñada para estudiantes de
                        nivel medio y superior
                      </li>
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
                      <li>
                        Enfoque limitado únicamente al sistema cardiovascular
                      </li>
                      <li>
                        Falta de funciones de evaluación o seguimiento de
                        progreso
                      </li>
                    </ul>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="Bacteria 3D AR"
                  >
                    <ul className="competitor-list weaknesses">
                      <li>
                        Limitado exclusivamente a microorganismos procariotas
                        sin células eucariotas
                      </li>
                      <li>
                        Interface técnica que requiere conocimiento previo de
                        microbiología
                      </li>
                      <li>
                        Contenido científico avanzado que puede resultar
                        abrumador para estudiantes introductorios
                      </li>
                    </ul>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="Cell & Cell Structure 3D"
                  >
                    <ul className="competitor-list weaknesses">
                      <li>
                        Modelos 3D estáticos sin capacidades de realidad
                        aumentada
                      </li>
                      <li>
                        Gráficos de calidad básica que no aprovechan tecnología
                        móvil moderna
                      </li>
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
                        la salud (18-35 años). Principalmente usuarios de
                        instituciones con presupuesto para apps educativas
                        premium.
                      </p>
                    </div>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="Bacteria 3D AR"
                  >
                    <div className="competitor-audience">
                      <p>
                        Estudiantes universitarios de microbiología,
                        biotecnología y ciencias biomédicas (20-26 años).
                        Investigadores y profesionales especializados en
                        microbiología clínica e industrial.
                      </p>
                    </div>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="Cell & Cell Structure 3D"
                  >
                    <div className="competitor-audience">
                      <p>
                        Estudiantes de biología de nivel medio superior y
                        primeros años universitarios (15-20 años). Educadores
                        buscando herramientas visuales básicas para complementar
                        enseñanza tradicional.
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
              los conceptos educativos fundamentales e iterar sobre la
              experiencia de usuario sin invertir tiempo en elementos visuales
              complejos. Solo después de confirmar que la estructura y los
              flujos funcionan correctamente, tiene sentido crear el prototipo
              de alta fidelidad con modelos 3D detallados.
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
                <span className="detail-value">Remoto</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Participantes:</span>
                <span className="detail-value">
                  6 Estudiantes universitarios (19-22 años)
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
                  <strong>P01:</strong> "La pantalla principal está muy bien
                  organizada, encuentro todo fácilmente. Los iconos son claros y
                  el menú principal no está saturado."
                </blockquote>
                <blockquote className="user-quote">
                  <strong>P03:</strong> "La barra de navegación inferior está
                  muy bien, pero me gustaría que incluyera los nombres de las
                  secciones."
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
                  <strong>P05:</strong> "La información sobre cada organelo está
                  bien organizada, pero cuando cambio de célula prokariota a
                  eukariota pierdo el contexto de lo que estaba viendo antes."
                </blockquote>
              </div>
            </div>
          </div>

          <h2 className="subsection-title-with-border">REFINANDO EL DISEÑO</h2>
          <div className="mockups-section">
            <div className="mockup-item">
              <p className="mockup-description">
                Se identificaron <strong>oportunidades clave</strong> para
                mejorar la experiencia del usuario. Los usuarios valoraron la
                interfaz limpia, pero expresaron necesidad de mayor{' '}
                <strong>contextualización de la información celular</strong> y
                mejor organización de los componentes educativos. La pérdida de
                contexto al cambiar entre tipos celulares y la falta de{' '}
                <strong>información persistente sobre organelos</strong> fueron
                los puntos más críticos a resolver.
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
                    Implementar un <strong>panel fijo</strong> que mantenga
                    visible la información del organelo seleccionado.
                  </li>
                  <li>
                    Implementar <strong>etiquetas flotantes</strong> con
                    información instantánea de cada componente celular sin
                    interrumpir la exploración.
                  </li>
                  <li>
                    Agregar <strong>títulos a los iconos de navegación</strong>{' '}
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
              Cell-AR es más efectiva en móviles por su accesibilidad,
              portabilidad y compatibilidad nativa con AR. Aprovecha los
              smartphones que ya poseen los estudiantes, evita equipos costosos
              y permite una experiencia educativa inmersiva e intuitiva,
              democratizando el acceso a tecnologías avanzadas sin necesidad de
              hardware adicional.
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
                El prototipo de alta fidelidad de Cell-AR se creó para validar
                la experiencia visual completa, permitiendo evaluar la claridad
                de etiquetas, usabilidad de controles, legibilidad y coherencia
                visual. Además, sirve como herramienta clave para comunicar el
                potencial de la aplicación a desarrolladores y educadores antes
                del desarrollo final.
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
              Cell-AR demostró ser una <strong>solución efectiva</strong> para
              transformar el aprendizaje de biología celular con realidad
              aumentada. El prototipo de alta fidelidad validó la viabilidad de
              ofrecer <strong>experiencias inmersivas y accesibles</strong>{' '}
              desde smartphones. El diseño centrado en el usuario permitió
              abordar necesidades clave como la comprensión de{' '}
              <strong>escalas y relaciones espaciales</strong> entre organelos,
              manteniendo una experiencia intuitiva.
            </p>
          </div>

          <div className="results-section">
            <h3 className="subsection-title">IMPACTO</h3>
            <p className="impact-text">
              Cell-AR demostró su potencial para revolucionar la{' '}
              <strong>enseñanza de la biología celular</strong>, mejorando la
              comprensión de los estudiantes mediante{' '}
              <strong>visualización en realidad aumentada</strong>. Puede
              integrarse eficazmente en los planes de estudio y abrir nuevas
              posibilidades para la enseñanza de contenidos científicos
              complejos mediante <strong>tecnologías inmersivas</strong>.
            </p>
          </div>

          <div className="results-section">
            <h3 className="subsection-title">LO QUE APRENDÍ</h3>
            <p className="learnings-text">
              En el desarrollo de Cell-AR comprendí que una aplicación educativa
              en realidad aumentada depende de un{' '}
              <strong>
                diseño sencillo, accesible y centrado en el usuario
              </strong>
              , que priorice la usabilidad y el feedback claro por encima de
              efectos visuales complejos. Además, es posible ofrecer una{' '}
              <strong>
                experiencia de calidad en dispositivos de gama media
              </strong>{' '}
              si se realiza una planificación estratégica desde el inicio, lo
              que garantiza un <strong>acceso más amplio y equitativo</strong> a
              la tecnología educativa.
            </p>

            <div className="lessons-grid">
              <div className="lessons-section">
                <h4 className="lessons-title">Lecciones profesionales</h4>
                <ul className="lessons-list">
                  <li className="lesson-item">
                    Las <strong>iteraciones basadas en feedback</strong> suelen
                    superar las suposiciones iniciales del diseñador porque se
                    ajustan a las necesidades de los usuarios. Este proceso
                    ayuda a{' '}
                    <strong>corregir errores y mejorar la experiencia</strong>,
                    haciendo que el producto sea más efectivo y útil.
                  </li>
                  <li className="lesson-item">
                    <strong>Involucrar a educadores</strong> desde etapas
                    tempranas mejora notablemente el diseño final, ya que
                    aportan conocimientos prácticos y necesidades que guían el
                    desarrollo hacia una{' '}
                    <strong>solución más útil y efectiva</strong>.
                  </li>
                </ul>
              </div>

              <div className="lessons-section">
                <h4 className="lessons-title">Lecciones personales</h4>
                <ul className="lessons-list">
                  <li className="lesson-item">
                    Aprendí <strong>habilidades básicas de modelado 3D</strong>{' '}
                    con Blender, aplicándolas al diseño UX para crear prototipos
                    más visuales y mejorar la experiencia del usuario en{' '}
                    <strong>entornos tridimensionales</strong>.
                  </li>
                  <li className="lesson-item">
                    Entendí la importancia de estar siempre{' '}
                    <strong>actualizado en tecnologías emergentes</strong> para
                    poder aplicar las mejores herramientas y técnicas en mis
                    proyectos.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="results-section">
            <h3 className="subsection-title">PRÓXIMOS PASOS</h3>
            <ol className="next-steps-list">
              <li className="next-step-item">
                Implementar <strong>sistema de contenido personalizado</strong>{' '}
                basado en nivel educativo específico.
              </li>
              <li className="next-step-item">
                Crear <strong>módulos adicionales</strong> que aborden otros
                temas de biología, como genética, evolución y ecosistemas, para
                ampliar el alcance educativo de Cell-AR.
              </li>
              <li className="next-step-item">
                Investigar la <strong>efectividad de Cell-AR</strong> en
                comparación con otros métodos de enseñanza inmersiva ayudará a
                entender mejor sus ventajas, así como a confirmar su{' '}
                <strong>impacto en el aprendizaje</strong>.
              </li>
            </ol>
          </div>

          <div className="results-section">
            <h3 className="subsection-title">CONSIDERACIONES FINALES</h3>
            <p className="final-text">
              Cell-AR es más que un proyecto de diseño; es una muestra de cómo
              la tecnología puede{' '}
              <strong>ampliar el acceso a una educación de calidad</strong>. Me
              enseñó que un diseño centrado en el usuario puede crear soluciones
              innovadoras que integran{' '}
              <strong>
                realidad aumentada, accesibilidad y pedagogía efectiva
              </strong>
              , sin sacrificar usabilidad. El feedback positivo confirma la
              necesidad de este tipo de herramientas, que combinan ciencia, buen
              diseño y accesibilidad. Este proyecto fortaleció mi capacidad para
              enfrentar <strong>desafíos complejos</strong> mediante
              investigación, colaboración y compromiso con el{' '}
              <strong>impacto real en los usuarios</strong>.
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

export default ProjectDetail2;
