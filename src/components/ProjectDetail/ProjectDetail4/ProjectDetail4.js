import React, { useEffect, useState } from 'react';
import { useScrollReveal } from '../../../context/ScrollRevealContext';
import '../ProjectDetail.scss';

const ProjectDetail4 = () => {
  const { revealRef } = useScrollReveal();
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `MediNote — Alfredo García`;
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
              src="/assets/images/projects/project4/thumbnail.png"
              alt="MediNote"
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

          <h1 className="project-title">MediNote</h1>

          <div className="project-detail__meta">
            <div className="project-detail__meta-item">
              <span className="meta-value">Febrero - Mayo 2025</span>
            </div>
          </div>
          <div className="project-detail__tools">
            <span className="tool-tag tool-tag--figma">Figma</span>
            <span className="tool-tag tool-tag--scss">SCSS</span>
            <span className="tool-tag tool-tag--react">React</span>
            <span className="tool-tag tool-tag--react-native-expo">
              React Native Expo
            </span>
            <span className="tool-tag tool-tag--firebase">Firebase</span>
          </div>
        </header>

        <section className="project-detail__overview">
          <h2 className="subsection-title-with-border">RESUMEN DEL PROYECTO</h2>
          <p className="overview-text">
            MediNote es una aplicación móvil de gestión médica diseñada para
            doctores y enfermeras. Permite registrar pacientes con datos
            completos, crear distintos tipos de historiales clínicos, gestionar
            recordatorios y alertas por prioridad y fecha, y realizar búsquedas
            avanzadas. Cuenta con navegación intuitiva y acceso seguro para cada
            profesional. Está orientada a clínicas pequeñas y medianas,
            consultorios privados y médicos independientes que buscan
            digitalizar y optimizar su práctica médica.
          </p>
        </section>

        <section className="project-detail__section">
          <div className="project-detail__problem-goal-container">
            <div className="project-detail__problem">
              <h3 className="subsection-title">PROBLEMA</h3>
              <p className="problem-text">
                En clínicas pequeñas y consultorios privados, la falta de
                herramientas digitales dificulta la gestión de la información
                médica, provocando pérdida de datos, demoras en el acceso a
                historiales, falta de recordatorios automatizados y sobrecarga
                administrativa, lo que afecta la calidad de atención y la
                productividad del personal.
              </p>
            </div>

            <div className="project-detail__goal">
              <h3 className="subsection-title">OBJETIVO</h3>
              <p className="goal-text">
                Desarrollar una solución digital integral para que los
                profesionales de la salud gestionen de forma eficiente
                historiales clínicos, registros y recordatorios, optimizando
                procesos administrativos y clínicos, mejorando la atención al
                paciente y aumentando la productividad del personal.
              </p>
            </div>
          </div>

          <div className="project-detail__role">
            <h3 className="subsection-title">MI ROL</h3>
            <p className="role-text">
              Responsable del diseño e implementación completa de MediNote desde
              la conceptualización hasta el despliegue. Mi función se centra
              primero en el diseño de la experiencia de usuario y prototipos en
              Figma, para luego enfocarme en el desarrollo del front-end para
              móvil y web, implementando funcionalidades para la búsqueda de
              pacientes y gestión de sus registros médicos, con el objetivo de
              crear una solución digital integral que transforme la gestión
              médica tradicional en un ecosistema moderno, eficiente y
              escalable, adaptado a las necesidades de los profesionales de la
              salud.
            </p>
          </div>

          <div className="project-detail__responsibilities">
            <h3 className="subsection-title">RESPONSABILIDADES</h3>
            <ul className="responsibilities-list">
              <li className="responsibility-item">
                Analizar necesidades y comportamientos de doctores y enfermeras
                para definir requisitos de diseño.
              </li>
              <li className="responsibility-item">
                Estructurar y organizar contenido médico de manera lógica y
                accesible para profesionales de la salud
              </li>
              <li className="responsibility-item">
                Crear bocetos, mockups interactivos y prototipos navegables para
                validar conceptos de diseño
              </li>
              <li className="responsibility-item">
                Realizar pruebas con usuarios reales para validar diseños y
                optimizar la experiencia basada en feedback médico
              </li>
            </ul>
          </div>
        </section>

        <section className="project-detail__section">
          <h2 className="subsection-title-with-border">INVESTIGACIÓN</h2>

          <div className="project-detail__understanding">
            <p className="understanding-text">
              Realicé{' '}
              <strong style={{ fontWeight: 600 }}>investigación mixta</strong>{' '}
              con profesionales médicos identificando problemas de búsqueda
              ineficiente, falta de recordatorios y riesgo de pérdida de
              información. Elegí un enfoque que balancea{' '}
              <strong style={{ fontWeight: 600 }}>
                funcionalidad y simplicidad
              </strong>
              , creando seis módulos con principios de eficiencia clínica,
              acceso rápido y confiabilidad.
            </p>
            <div className="understanding-image">
              <img
                src="/assets/images/projects/project4/research.png"
                alt="Investigación de usuario"
              />
            </div>

            <h3 className="subsection-title">
              INVESTIGACIÓN DE USUARIOS: PUNTOS DÉBILES
            </h3>
            <ul className="key-issues-list">
              <li className="key-issue-item">
                <strong style={{ fontWeight: 600 }}>
                  Pérdida significativa de tiempo
                </strong>{' '}
                en búsqueda manual de información que podría dedicarse a
                atención médica
              </li>
              <li className="key-issue-item">
                Información dispersa en{' '}
                <strong style={{ fontWeight: 600 }}>
                  múltiples formatos físicos
                </strong>{' '}
                sin conexión ni organización centralizada
              </li>
              <li className="key-issue-item">
                <strong style={{ fontWeight: 600 }}>
                  Ausencia de sistema de recordatorios
                </strong>{' '}
                que garantice continuidad en tratamientos y citas
              </li>
              <li className="key-issue-item">
                Imposibilidad de consultar información{' '}
                <strong style={{ fontWeight: 600 }}>
                  fuera del consultorio
                </strong>{' '}
                para emergencias o referencias
              </li>
            </ul>

            <h3 className="subsection-title">ANÁLISIS COMPETITIVO</h3>
            <div className="project-detail__competition">
              <div className="competitive-table">
                <div className="competitive-row competitive-row--names">
                  <div className="competitive-cell competitive-cell--empty"></div>
                  <div className="competitive-cell competitive-cell--name">
                    <h3 className="competitor-name">Doctoralia</h3>
                  </div>
                  <div className="competitive-cell competitive-cell--name">
                    <h3 className="competitor-name">MedicApp</h3>
                  </div>
                  <div className="competitive-cell competitive-cell--name">
                    <h3 className="competitor-name">ClinicPoint</h3>
                  </div>
                </div>

                <div className="competitive-row competitive-row--overview">
                  <div className="competitive-cell competitive-cell--label"></div>
                  <div
                    className="competitive-cell competitive-cell--images"
                    data-competitor="Doctoralia"
                  >
                    <div className="competitor-images">
                      <img
                        src="/assets/images/projects/project4/competitor/competitor1.png"
                        alt="Doctoralia captura 1"
                      />
                    </div>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--images"
                    data-competitor="MedicApp"
                  >
                    <div className="competitor-images">
                      <img
                        src="/assets/images/projects/project4/competitor/competitor2.png"
                        alt="MedicApp captura 1"
                      />
                    </div>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--images"
                    data-competitor="ClinicPoint"
                  >
                    <div className="competitor-images">
                      <img
                        src="/assets/images/projects/project4/competitor/competitor3.png"
                        alt="ClinicPoint captura 1"
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
                    data-competitor="Doctoralia"
                  >
                    <p className="competitor-description">
                      Plataforma digital que conecta pacientes con profesionales
                      de la salud para agendar citas médicas.
                    </p>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="MedicApp"
                  >
                    <p className="competitor-description">
                      App diseñada para fisioterapeutas que digitaliza la
                      gestión clínica y mejora el seguimiento terapéutico.
                    </p>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="ClinicPoint"
                  >
                    <p className="competitor-description">
                      Plataforma que permite acceder a servicios de salud
                      privados sin seguro médico, mediante pago por uso.
                    </p>
                  </div>
                </div>

                <div className="competitive-row competitive-row--strengths">
                  <div className="competitive-cell competitive-cell--label">
                    <h4 className="row-label">FORTALEZAS</h4>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="Doctoralia"
                  >
                    <ul className="competitor-list strengths">
                      <li>Búsqueda por especialidad, ubicación y servicios</li>
                      <li>Buen rendimiento móvil y navegación intuitiva</li>
                      <li>Agendamiento directo desde la app</li>
                    </ul>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="MedicApp"
                  >
                    <ul className="competitor-list strengths">
                      <li>Monitoreo de evolución del paciente remoto</li>
                      <li>Disponible en móvil y web</li>
                      <li>Automatización de tareas administrativas</li>
                    </ul>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="ClinicPoint"
                  >
                    <ul className="competitor-list strengths">
                      <li>Navegación jerárquica intuitiva</li>
                      <li>Adaptabilidad móvil eficiente</li>
                      <li>Interfaz limpia y funcional</li>
                    </ul>
                  </div>
                </div>

                <div className="competitive-row competitive-row--weaknesses">
                  <div className="competitive-cell competitive-cell--label">
                    <h4 className="row-label">DEBILIDADES</h4>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="Doctoralia"
                  >
                    <ul className="competitor-list weaknesses">
                      <li>Visibilidad limitada del estado de citas</li>
                      <li>Sistema de alertas básico</li>
                      <li>Sin historias clínicas unificadas</li>
                      <li>Falta integración con sistemas clínicos</li>
                    </ul>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="MedicApp"
                  >
                    <ul className="competitor-list weaknesses">
                      <li>Reportes y análisis limitados</li>
                      <li>Navegación demasiado simplificada</li>
                      <li>Complejidad para usuarios no digitales</li>
                    </ul>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="ClinicPoint"
                  >
                    <ul className="competitor-list weaknesses">
                      <li>Seguimiento post-reserva no visible</li>
                      <li>Dependencia excesiva del texto</li>
                      <li>Complejidad excesiva para usuarios básicos</li>
                    </ul>
                  </div>
                </div>

                <div className="competitive-row competitive-row--audience">
                  <div className="competitive-cell competitive-cell--label">
                    <h4 className="row-label">AUDIENCIA OBJETIVO</h4>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="Doctoralia"
                  >
                    <div className="competitor-audience">
                      <p>
                        Usuarios urbanos con conocimientos digitales que buscan
                        agendar citas médicas rápidamente.
                      </p>
                    </div>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="MedicApp"
                  >
                    <div className="competitor-audience">
                      <p>
                        Usuarios que valoran inmediatez y simplicidad,
                        especialmente con necesidades médicas urgentes.
                      </p>
                    </div>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="ClinicPoint"
                  >
                    <div className="competitor-audience">
                      <p>
                        Usuarios sin seguro médico o con coberturas parciales
                        que buscan resolver necesidades médicas puntuales.
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
                      src="/assets/images/projects/project4/persona/persona1.png"
                      alt="Dr. Carlos Mendoza"
                      onClick={() =>
                        openImageModal(
                          '/assets/images/projects/project4/persona/persona1.png'
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
              <div className="journey-card">
                <h4 className="journey-title">Dr. Carlos Mendoza</h4>
                <p className="journey-description">
                  Mostrar cómo el Dr. Carlos administra su consultorio médico,
                  desde agendar citas y atender pacientes hasta llevar el
                  control de historiales clínicos y analizar estadísticas de
                  salud.
                </p>
                <div className="journey-image">
                  <img
                    src="/assets/images/projects/project4/map/map1.jpg"
                    alt="Mapa de recorrido de Dr. Carlos Mendoza"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="design-section">
            <h3 className="subsection-title">OPORTUNIDADES DE MEJORA</h3>

            <div className="project-detail__improvement-opportunities">
              <div className="opportunities-grid">
                <div className="opportunity-card">
                  <h4 className="finding-area">Acceso inmediato</h4>
                  <p className="finding-description">
                    Eliminar búsqueda de expedientes físicos
                  </p>
                </div>
                <div className="opportunity-card">
                  <h4 className="finding-area">Información clara</h4>
                  <p className="finding-description">
                    Historial digital organizado cronológicamente
                  </p>
                </div>
                <div className="opportunity-card">
                  <h4 className="finding-area">Recordatorios</h4>
                  <p className="finding-description">
                    Sistema de alertas para seguimientos
                  </p>
                </div>
                <div className="opportunity-card">
                  <h4 className="finding-area">Reportes automáticos</h4>
                  <p className="finding-description">
                    Generación de documentos médicos
                  </p>
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
                src="/assets/images/projects/project4/sitemap.svg"
                alt="Mapa del sitio"
                onClick={() =>
                  openImageModal('/assets/images/projects/project4/sitemap.svg')
                }
                className="clickable-image"
              />
            </div>
          </div>

          <div className="design-section">
            <h3 className="subsection-title">USER FLOW</h3>
            <div className="design-image">
              <img
                src="/assets/images/projects/project4/userflow.svg"
                alt="Flujo de usuario"
                onClick={() =>
                  openImageModal(
                    '/assets/images/projects/project4/userflow.svg'
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
            <div className="paper-wireframes-grid" data-count="4">
              <img
                src="/assets/images/projects/project4/paper/paper1.png"
                alt="Wireframe en papel 1"
              />
              <img
                src="/assets/images/projects/project4/paper/paper2.png"
                alt="Wireframe en papel 2"
              />
              <img
                src="/assets/images/projects/project4/paper/paper3.png"
                alt="Wireframe en papel 3"
              />
              <img
                src="/assets/images/projects/project4/paper/paper4.png"
                alt="Wireframe en papel 4"
              />
            </div>
          </div>

          <div className="design-section">
            <h3 className="subsection-title">
              WIREFRAME EN PAPEL - VARIACIONES DE TAMAÑO DE PANTALLA
            </h3>
            <div className="design-images">
              <img
                src="/assets/images/projects/project4/variations.png"
                alt="Variación de dispositivo"
              />
            </div>
          </div>

          <div className="design-section">
            <h3 className="subsection-title">WIREFRAMES DIGITALES</h3>
            <div className="design-image">
              <img
                src="/assets/images/projects/project4/wireframes.png"
                alt="Wireframes digitales"
              />
            </div>
          </div>

          <div className="design-section">
            <h3 className="subsection-title">VARIACIONES DIGITALES</h3>
            <div className="design-images">
              <img
                src="/assets/images/projects/project4/digital.png"
                alt="Variación digital"
              />
            </div>
          </div>
        </section>

        <section className="project-detail__section">
          <div className="design-section">
            <h3 className="subsection-title">PROTOTIPO DE BAJA FIDELIDAD</h3>
            <p className="design-text">
              El prototipo de baja fidelidad de MediNote se creó con wireframes
              esquemáticos, usando bocetos en papel y diagramas de flujo para
              definir la arquitectura y navegación de cinco pantallas
              principales: inicio, gestión de pacientes, registros médicos,
              alertas y perfil de usuario.
            </p>
            <div className="design-image">
              <img
                src="/assets/images/projects/project4/prototype.png"
                alt="Prototipo de baja fidelidad"
              />
            </div>
            <div className="prototype-link">
              <a
                href="https://www.figma.com/proto/vTHlOgoKFqKtnHRFZnnrN2/MediNote?page-id=0%3A1&node-id=1-3&p=f&viewport=190%2C986%2C0.4&t=X9MKTny4oxrpNNca-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A3"
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
                <span className="detail-value">6 practicantes de medicina</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Duración:</span>
                <span className="detail-value">
                  20-30 minutos por participante
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
                La búsqueda desde la pantalla de inicio es efectiva
              </p>
              <div className="finding-quotes">
                <blockquote className="user-quote">
                  <strong style={{ fontWeight: 600 }}>P02:</strong> "Me gusta
                  que el botón de + esté siempre visible. No tengo que buscar
                  dónde agregar algo nuevo."
                </blockquote>
                <blockquote className="user-quote">
                  <strong style={{ fontWeight: 600 }}>P04:</strong> "Los iconos
                  son claros. Inmediatamente sé dónde están mis pacientes y
                  dónde puedo buscar."
                </blockquote>
              </div>
            </div>

            {/* Finding 2 */}
            <div className="finding-item">
              <h4 className="finding-area">Creación de Alertas</h4>
              <p className="finding-description">
                Una parte significativa de los casos se perdió durante el paso
                de selección de pacientes .
              </p>
              <div className="finding-quotes">
                <blockquote className="user-quote">
                  <strong style={{ fontWeight: 600 }}>P01:</strong> "Las alertas
                  están bien, pero ¿puedo crear mis propios tipos, como tareas?
                </blockquote>
                <blockquote className="user-quote">
                  <strong style={{ fontWeight: 600 }}>P06:</strong> "Me gusta
                  poder revisar todo antes de guardar. Los datos médicos son muy
                  importantes."
                </blockquote>
              </div>
            </div>
          </div>

          <h2 className="subsection-title-with-border">REFINANDO EL DISEÑO</h2>
          <div className="mockups-section">
            {/* Mockup 1 */}
            <div className="mockup-item">
              <p className="mockup-description">
                Se implementó una mejora significativa en la lista de registros
                médicos mediante la{' '}
                <strong style={{ fontWeight: 600 }}>
                  ampliación del tamaño de la foto de perfil
                </strong>{' '}
                de los pacientes. Esta actualización incrementó las dimensiones
                de la imagen desde 20x20 píxeles a 36x36 píxeles, logrando una{' '}
                <strong style={{ fontWeight: 600 }}>
                  mejor visibilidad y consistencia visual
                </strong>{' '}
                dentro de la interfaz.
              </p>
              <div className="mockup-image">
                <img
                  src="/assets/images/projects/project4/mockups/mockups1.png"
                  alt="Mockup 1"
                />
              </div>
              <div className="design-decisions">
                <h4 className="decisions-title">DECISIONES DE DISEÑO:</h4>
                <ul className="decisions-list">
                  <li>
                    Se eligió el tamaño de{' '}
                    <strong style={{ fontWeight: 600 }}>36x36 píxeles</strong>{' '}
                    para mantener paridad con el icono de registros existente,
                    creando una jerarquía visual coherente
                  </li>
                  <li>
                    El incremento del tamaño permite{' '}
                    <strong style={{ fontWeight: 600 }}>
                      distinguir mejor los rasgos faciales
                    </strong>{' '}
                    y características distintivas de cada paciente
                  </li>
                </ul>
              </div>
            </div>

            {/* Mockup 2 */}
            <div className="mockup-item">
              <p className="mockup-description">
                Se implementó el tipo{' '}
                <strong style={{ fontWeight: 600 }}>"Tareas"</strong> en
                recordatorios para que médicos gestionen sus{' '}
                <strong style={{ fontWeight: 600 }}>
                  tareas personales médicas
                </strong>{' '}
                de manera independiente, separando recordatorios de pacientes de
                los profesional-personales.
              </p>
              <div className="mockup-image">
                <img
                  src="/assets/images/projects/project4/mockups/mockups2.png"
                  alt="Mockup 2"
                />
              </div>
              <div className="design-decisions">
                <h4 className="decisions-title">DECISIONES DE DISEÑO:</h4>
                <ul className="decisions-list">
                  <li>
                    Se decidió crear una{' '}
                    <strong style={{ fontWeight: 600 }}>
                      categoría completamente independiente
                    </strong>{' '}
                    para evitar confusión entre tareas del médico y
                    recordatorios de pacientes
                  </li>
                  <li>
                    Se eligió el término{' '}
                    <strong style={{ fontWeight: 600 }}>"Tareas"</strong> por su
                    simplicidad y comprensión inmediata en el contexto médico
                  </li>
                  <li>
                    Incorporación del nuevo tipo dentro de la{' '}
                    <strong style={{ fontWeight: 600 }}>
                      estructura existente
                    </strong>{' '}
                    sin romper la lógica establecida
                  </li>
                  <li>
                    Mayor capacidad de{' '}
                    <strong style={{ fontWeight: 600 }}>
                      personalizar la experiencia
                    </strong>{' '}
                    según las necesidades específicas del profesional médico
                  </li>
                </ul>
              </div>
            </div>

            {/* Mockup 3 */}
            <div className="mockup-item">
              <p className="mockup-description">
                Se incorporó{' '}
                <strong style={{ fontWeight: 600 }}>correo electrónico</strong>{' '}
                en la información de contacto como{' '}
                <strong style={{ fontWeight: 600 }}>
                  segunda opción de contacto
                </strong>{' '}
                cuando la comunicación telefónica no sea posible.
              </p>
              <div className="mockup-image">
                <img
                  src="/assets/images/projects/project4/mockups/mockups3.png"
                  alt="Mockup 3"
                />
              </div>
              <div className="design-decisions">
                <h4 className="decisions-title">DECISIONES DE DISEÑO:</h4>
                <ul className="decisions-list">
                  <li>
                    Se estableció el{' '}
                    <strong style={{ fontWeight: 600 }}>
                      teléfono como canal primario
                    </strong>{' '}
                    y el email como secundario, respetando la inmediatez y
                    personalización de la comunicación telefónica
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

          <div className="screen-variations">
            <h3 className="subsection-title">TAMAÑO DE PANTALLA ORIGINAL</h3>
            <p className="strategy-description">
              La estrategia móvil-first en el sector salud responde al cambio en
              el uso tecnológico, permitiendo a los profesionales acceder de
              forma inmediata y flexible a la información de pacientes, sin
              importar si están en consultorios, hospitales o visitas
              domiciliarias.
            </p>
            <ul className="strategy-decisions">
              <li className="strategy-item">
                Dominio del Tráfico Móvil - +75% del tráfico médico viene de
                móviles
              </li>
              <li className="strategy-item">
                Limitaciones de Performance y Recursos - Comenzar con
                restricciones móviles optimiza todo
              </li>
              <li className="strategy-item">
                Expectativas de Usuario Modernas - Nuevas generaciones de
                médicos esperan experiencias móvil-first
              </li>
            </ul>
            <div className="screen-image">
              <img
                src="/assets/images/projects/project4/screen.png"
                alt="Tamaño original"
              />
            </div>

            <div className="screen-variations-images">
              <h3 className="subsection-title">
                VARIACIONES DE TAMAÑO DE PANTALLA
              </h3>
              <p className="screen-description">
                Se crearon variaciones de tamaño de pantalla para que la
                interfaz médica se adapte dinámicamente a dispositivos móviles y
                web, asegurando una experiencia óptima con funcionalidad
                completa y buena legibilidad en smartphones y escritorios.
              </p>
              <img
                src="/assets/images/projects/project4/size_variation.png"
                alt="Variación de pantalla"
              />
            </div>
          </div>

          <div className="design-section">
            <h3 className="subsection-title">PROTOTIPO DE ALTA FIDELIDAD</h3>
            <div className="high-fidelity-section">
              <p className="high-fidelity-text">
                Este prototipo incorporó una paleta de colores cuidadosamente
                seleccionada con tonos azules médicos que transmiten confianza y
                profesionalismo, complementada con colores semánticos para
                alertas, estados de error y confirmaciones que facilitan la
                comprensión intuitiva de la información crítica.
              </p>
              <div className="high-fidelity-image">
                <img
                  src="/assets/images/projects/project4/high_fidelity.png"
                  alt="Prototipo de alta fidelidad"
                />
              </div>
              <div className="prototype-links">
                <a
                  href="https://www.figma.com/proto/vTHlOgoKFqKtnHRFZnnrN2/MediNote?page-id=19%3A2699&node-id=19-3431&p=f&viewport=667%2C886%2C0.1&t=iDMX78zLAayf9Fwf-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=19%3A3431"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--outline"
                >
                  Ver prototipo web
                </a>
                <a
                  href="https://www.figma.com/proto/vTHlOgoKFqKtnHRFZnnrN2/MediNote?page-id=1%3A1963&node-id=12-1531&p=f&viewport=879%2C2196%2C0.42&t=IUPperAV1dtilt13-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=12%3A1966"
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
              Se estructuraron formularios médicos con una agrupación visual
              clara, etiquetas consistentes, espaciado generoso y señales
              visuales para los estados de error y éxito, utilizando colores,
              iconos y texto descriptivo.
            </li>
            <li className="accessibility-item">
              Se desarrolló un sistema de iconos coherente y accesible con
              iconografía universal, etiquetas de texto, estilo visual uniforme
              y formas distintivas que no dependieran únicamente del color.
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
              MediNote demostró la{' '}
              <strong style={{ fontWeight: 600 }}>
                viabilidad de una solución móvil integral
              </strong>{' '}
              para gestión de registros médicos en consultorios y clínicas
              pequeñas. La app consolidó{' '}
              <strong style={{ fontWeight: 600 }}>
                múltiples flujos de trabajo médico
              </strong>{' '}
              en una interfaz unificada, validando que la digitalización mejora
              eficiencia operativa y calidad del cuidado.
            </p>
          </div>
          <div className="results-section">
            <h3 className="subsection-title">IMPACTO</h3>
            <p className="impact-text">
              El{' '}
              <strong style={{ fontWeight: 600 }}>
                sistema de design tokens y componentes reutilizables
              </strong>{' '}
              estableció consistencia visual en aplicaciones médicas móviles,
              creando una identidad que transmite confianza y profesionalismo en
              el <strong style={{ fontWeight: 600 }}>sector salud</strong>.
            </p>
          </div>
          <div className="results-section">
            <h3 className="subsection-title">LO QUE APRENDÍ</h3>
            <p className="learnings-text">
              Diseñar para profesionales médicos exige{' '}
              <strong style={{ fontWeight: 600 }}>
                conocimiento de flujos de trabajo clínicos
              </strong>
              , terminología especializada y contextos de uso en entornos de
              salud. Una interfaz efectiva debe{' '}
              <strong style={{ fontWeight: 600 }}>
                reducir la carga cognitiva
              </strong>
              , minimizar errores y adaptarse desde consultorios hasta
              emergencias.
            </p>
            <div className="lessons-grid">
              <div className="lessons-section">
                <h4 className="lessons-title">Lecciones profesionales</h4>
                <ul className="lessons-list">
                  <li className="lesson-item">
                    Los{' '}
                    <strong style={{ fontWeight: 600 }}>
                      estados de error y feedback
                    </strong>{' '}
                    son críticos en contexto médico, donde confusiones pueden
                    tener consecuencias graves.
                  </li>
                  <li className="lesson-item">
                    Interfaces completamente{' '}
                    <strong style={{ fontWeight: 600 }}>intuitivas</strong> son
                    esenciales bajo presión en entornos médicos y emergencias.
                  </li>
                </ul>
              </div>
              <div className="lessons-section">
                <h4 className="lessons-title">Lecciones personales</h4>
                <ul className="lessons-list">
                  <li className="lesson-item">
                    La experiencia me hizo consciente de la{' '}
                    <strong style={{ fontWeight: 600 }}>
                      accesibilidad universal
                    </strong>{' '}
                    considerando diversas capacidades de profesionales médicos.
                  </li>
                  <li className="lesson-item">
                    Los requisitos médicos cambian constantemente, aprendí a
                    diseñar{' '}
                    <strong style={{ fontWeight: 600 }}>
                      sistemas flexibles
                    </strong>{' '}
                    y manejar la incertidumbre.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="results-section">
            <h3 className="subsection-title">PRÓXIMOS PASOS</h3>
            <ol className="next-steps-list">
              <li className="next-step-item">
                Expandir el{' '}
                <strong style={{ fontWeight: 600 }}>
                  sistema de design tokens
                </strong>{' '}
                para incluir variaciones de alta densidad informacional,
                desarrollar componentes especializados para diferentes
                especialidades médicas, y crear temas personalizables que se
                adapten a preferencias individuales sin comprometer la{' '}
                <strong style={{ fontWeight: 600 }}>
                  consistencia del sistema
                </strong>
                .
              </li>
              <li className="next-step-item">
                Desarrollar el{' '}
                <strong style={{ fontWeight: 600 }}>
                  módulo de facturación y gestión administrativa
                </strong>{' '}
                que permita registrar pagos, emitir facturas y optimizar
                procesos financieros.
              </li>
            </ol>
          </div>

          <div className="results-section">
            <h3 className="subsection-title">CONSIDERACIONES FINALES</h3>
            <p className="final-text">
              El diseño de MediNote validó que la{' '}
              <strong style={{ fontWeight: 600 }}>
                excelencia en experiencia de usuario
              </strong>{' '}
              en el sector salud no es un lujo, sino una{' '}
              <strong style={{ fontWeight: 600 }}>necesidad crítica</strong> que
              impacta directamente la calidad del cuidado médico. Este proyecto
              demostró que cuando el diseño logra volverse transparente para el
              usuario médico, permite que toda su atención se concentre en el
              paciente, lo cual es el{' '}
              <strong style={{ fontWeight: 600 }}>
                objetivo último de cualquier herramienta clínica
              </strong>
              . La experiencia subrayó la responsabilidad ética del diseñador
              UX/UI en contextos donde las decisiones de interfaz tienen
              implicaciones que van más allá de la satisfacción del usuario,
              extendiéndose al{' '}
              <strong style={{ fontWeight: 600 }}>
                bienestar de los pacientes
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
                Participé en el proceso de migración de la aplicación, pasando
                de React Native con Expo a React con SCSS. Durante esta
                transición, trabajé en adaptar los componentes, ajustar los
                estilos y optimizar la estructura para mejorar el rendimiento y
                la experiencia en la versión web. También, configuré e integré
                Firebase, incluyendo Firestore para la gestión de datos en
                tiempo real, Authentication para el control de usuarios y
                Storage para el manejo de archivos clínicos, lo que permitió una
                gestión más eficiente y escalable de la información y facilitó
                el trabajo del equipo de desarrollo.
              </p>
            </div>

            <div className="project-detail__repository-links">
              <a
                href="https://github.com/AldG99/primary-care-clinic-app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--outline"
              >
                Versión móvil (React Native)
              </a>
              <a
                href="https://github.com/AldG99/primary-care-clinic"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--outline"
              >
                Versión web (React)
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

export default ProjectDetail4;
