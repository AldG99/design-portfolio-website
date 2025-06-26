import React, { useEffect, useState } from 'react';
import { useScrollReveal } from '../../../context/ScrollRevealContext';
import '../ProjectDetail.scss';

const ProjectDetail4 = () => {
  const { revealRef } = useScrollReveal();
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Alfredo García Diseñador UX/UI & Desarrollador - MediNote`;
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
              src="/assets/images/projects/project4/thumbnail.png"
              alt="MediNote"
              draggable="false"
              className="no-save"
              onContextMenu={e => e.preventDefault()}
            />
          </div>

          <h1 className="project-title">MediNote</h1>

          <div className="project-detail__meta">
            <div className="project-detail__meta-item">
              <span className="meta-value">Febrero - Abril 2025</span>
            </div>
          </div>
          {/*
          <div className="project-detail__tools">
            <span className="tool-tag tool-tag--figma">Figma</span>
            <span className="tool-tag tool-tag--scss">SCSS</span>
            <span className="tool-tag tool-tag--react">React</span>
            <span className="tool-tag tool-tag--react-native-expo">
              React Native Expo
            </span>
            <span className="tool-tag tool-tag--firebase">Firebase</span>
          </div>
          */}
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
                herramientas digitales adecuadas dificulta la gestión eficiente
                de la información médica. Esto genera pérdida de datos, demoras
                en el acceso a historiales, ausencia de recordatorios
                automatizados y sobrecarga administrativa. Como resultado, se
                afecta la calidad de atención y se reduce la productividad del
                personal médico.
              </p>
            </div>

            <div className="project-detail__goal">
              <h3 className="subsection-title">OBJETIVO</h3>
              <p className="goal-text">
                Desarrollar una solución digital integral que permita a los
                profesionales de la salud gestionar de manera organizada y
                eficiente la información de sus pacientes, incluyendo
                historiales clínicos, registros médicos y recordatorios. Esta
                herramienta busca optimizar los procesos administrativos y
                clínicos, mejorar la atención al paciente y aumentar la
                productividad del personal, eliminando prácticas desactualizadas
                y poco efectivas.
              </p>
            </div>
          </div>

          <div className="project-detail__role">
            <h3 className="subsection-title">MI ROL</h3>
            <p className="role-text">
              Responsable del diseño e implementación completa de MediNote desde
              la conceptualización hasta el despliegue. Mi función se centra en
              el desarrollo frontend móvil, el diseño de la experiencia de
              usuario, la implementación de sistemas de seguridad y la
              optimización del rendimiento, con el objetivo de crear una
              solución digital integral que transforme la gestión médica
              tradicional en un ecosistema moderno, eficiente y escalable,
              adaptado a las necesidades de los profesionales de la salud.
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
                Diseñar interfaces intuitivas adaptadas al flujo de trabajo
                médico con búsqueda y filtrado eficientes.
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
              Realicé una <strong>investigación mixta</strong> con profesionales
              médicos de clínicas pequeñas y consultorios privados, con
              problemas principales de búsqueda ineficiente, falta de
              recordatorios y riesgo de pérdida de información. Después de
              evaluar tres conceptos de diseño, elegí un enfoque que balancea{' '}
              <strong>funcionalidad y simplicidad</strong>, creando una
              arquitectura de seis módulos (Inicio, Pacientes, Registros,
              Búsqueda, Alertas, Perfil) con principios enfocados en eficiencia
              clínica, acceso rápido y confiabilidad.
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
                <strong>Pérdida significativa de tiempo</strong> en búsqueda
                manual de información que podría dedicarse a atención médica
              </li>
              <li className="key-issue-item">
                Información dispersa en{' '}
                <strong>múltiples formatos físicos</strong> sin conexión ni
                organización centralizada
              </li>
              <li className="key-issue-item">
                <strong>Ausencia de sistema de recordatorios</strong> que
                garantice continuidad en tratamientos y citas
              </li>
              <li className="key-issue-item">
                Imposibilidad de consultar información{' '}
                <strong>fuera del consultorio</strong> para emergencias o
                referencias
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
                      Doctoralia es una plataforma digital disponible como app
                      móvil y sitio web que conecta a pacientes con
                      profesionales de la salud.
                    </p>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="MedicApp"
                  >
                    <p className="competitor-description">
                      MedicApp es una aplicación web y móvil diseñada
                      específicamente para fisioterapeutas, que permite
                      digitalizar la gestión clínica y mejorar el seguimiento
                      terapéutico de los pacientes.
                    </p>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="ClinicPoint"
                  >
                    <p className="competitor-description">
                      ClinicPoint es una plataforma digital que permite a los
                      usuarios acceder a servicios de salud privados sin
                      necesidad de seguro médico, mediante un modelo de pago por
                      uso.
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
                      <li>
                        Permite buscar por especialidad, ubicación, nombre o
                        servicios médicos
                      </li>
                      <li>
                        Buen rendimiento en dispositivos móviles, manteniendo
                        consistencia visual y navegación intuitiva
                      </li>
                      <li>Permite agendar citas directamente desde la app</li>
                    </ul>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="MedicApp"
                  >
                    <ul className="competitor-list strengths">
                      <li>
                        Facilita el monitoreo de la evolución del paciente entre
                        sesiones sin necesidad de visitas presenciales
                      </li>
                      <li>
                        Disponible como aplicación móvil y también en versión
                        web, lo que facilita el trabajo desde distintos
                        dispositivos.
                      </li>
                      <li>
                        Automatización de tareas como agendamiento y creación de
                        fichas
                      </li>
                    </ul>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="ClinicPoint"
                  >
                    <ul className="competitor-list strengths">
                      <li>
                        Navegación jerárquica intuitiva, permitiendo filtrar
                        servicios por especialidad y ubicación con facilidad
                      </li>
                      <li>
                        Adaptabilidad móvil eficiente, manteniendo coherencia
                        visual y funcional en distintos dispositivos
                      </li>
                      <li>
                        Uso correcto del espacio visual, con una interfaz limpia
                        que facilita la lectura y reduce la sobrecarga
                        cognitiva.
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
                    data-competitor="Doctoralia"
                  >
                    <ul className="competitor-list weaknesses">
                      <li>
                        Visibilidad limitada sobre el estado de la cita o
                        funciones complementarias como recordatorios integrados.
                      </li>
                      <li>
                        Sistema de alertas básico sin inteligencia contextual
                      </li>
                      <li>
                        No ofrece un sistema unificado de historias clínicas
                        para seguimiento a largo plazo
                      </li>
                      <li>
                        No se integra con historiales médicos ni con otros
                        sistemas clínicos profundos
                      </li>
                    </ul>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="MedicApp"
                  >
                    <ul className="competitor-list weaknesses">
                      <li>Funcionalidades limitadas en reportes y análisis</li>
                      <li>
                        Navegación básica, que en algunos casos puede resultar
                        demasiado simplificada para usuarios que buscan más
                        información o control.
                      </li>
                      <li>
                        Algunos fisioterapeutas pueden encontrar la plataforma
                        compleja si no están familiarizados con herramientas
                        digitales
                      </li>
                    </ul>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="ClinicPoint"
                  >
                    <ul className="competitor-list weaknesses">
                      <li>
                        El seguimiento post-reserva no es completamente visible,
                        lo que podría afectar la continuidad de la experiencia.
                      </li>
                      <li>
                        Algunos bloques de contenido dependen mucho del texto, y
                        podrían mejorarse con recursos visuales complementarios.
                      </li>
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
                        Usuarios que necesitan encontrar y agendar citas médicas
                        de forma rápida y sin complicaciones, principalmente en
                        entornos urbanos. La plataforma es especialmente útil
                        para personas con conocimientos digitales funcionales.
                      </p>
                    </div>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="MedicApp"
                  >
                    <div className="competitor-audience">
                      <p>
                        Usuarios que valoran la inmediatez y simplicidad para
                        acceder a consultas médicas, principalmente personas con
                        necesidades urgentes o que prefieren soluciones
                        digitales rápidas.
                      </p>
                    </div>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="ClinicPoint"
                  >
                    <div className="competitor-audience">
                      <p>
                        Usuarios que buscan resolver necesidades médicas
                        puntuales sin complicaciones administrativas,
                        especialmente aquellos sin seguro médico o con
                        coberturas parciales.
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
              El prototipo de baja fidelidad de MediNote se desarrolló mediante
              wireframes esquemáticos que establecieron la arquitectura de
              información y flujos de navegación fundamentales de la aplicación.
              Este prototipo inicial consistió en bocetos simples en papel y
              diagramas de flujo que definieron la estructura de las cinco
              pantallas principales: inicio, gestión de pacientes, registros
              médicos, alertas y perfil de usuario.
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
                  <strong>P02:</strong> "Me gusta que el botón de + esté siempre
                  visible. No tengo que buscar dónde agregar algo nuevo."
                </blockquote>
                <blockquote className="user-quote">
                  <strong>P04:</strong> "Los iconos son claros. Inmediatamente
                  sé dónde están mis pacientes y dónde puedo buscar."
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
                  <strong>P01:</strong> "Las alertas están bien, pero ¿puedo
                  crear mis propios tipos, como tareas?
                </blockquote>
                <blockquote className="user-quote">
                  <strong>P06:</strong> "Me gusta poder revisar todo antes de
                  guardar. Los datos médicos son muy importantes."
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
                <strong>ampliación del tamaño de la foto de perfil</strong> de
                los pacientes. Esta actualización incrementó las dimensiones de
                la imagen desde 20x20 píxeles a 36x36 píxeles, logrando una{' '}
                <strong>mejor visibilidad y consistencia visual</strong> dentro
                de la interfaz.
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
                    Se eligió el tamaño de <strong>36x36 píxeles</strong> para
                    mantener paridad con el icono de registros existente,
                    creando una jerarquía visual coherente
                  </li>
                  <li>
                    El incremento del tamaño permite{' '}
                    <strong>distinguir mejor los rasgos faciales</strong> y
                    características distintivas de cada paciente
                  </li>
                </ul>
              </div>
            </div>

            {/* Mockup 2 */}
            <div className="mockup-item">
              <p className="mockup-description">
                Se implementó una nueva funcionalidad en el sistema de
                recordatorios mediante la incorporación del tipo{' '}
                <strong>"Tareas"</strong>, diseñado específicamente para
                permitir que los médicos gestionen sus{' '}
                <strong>recordatorios de tareas personales médicas</strong> de
                manera independiente y organizada. Esta adición crea una clara
                separación entre los recordatorios relacionados directamente con
                pacientes y aquellos de{' '}
                <strong>carácter profesional-personal del médico</strong>.
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
                    <strong>categoría completamente independiente</strong> para
                    evitar confusión entre tareas del médico y recordatorios de
                    pacientes
                  </li>
                  <li>
                    Se eligió el término <strong>"Tareas"</strong> por su
                    simplicidad y comprensión inmediata en el contexto médico
                  </li>
                  <li>
                    Incorporación del nuevo tipo dentro de la{' '}
                    <strong>estructura existente</strong> sin romper la lógica
                    establecida
                  </li>
                  <li>
                    Mayor capacidad de{' '}
                    <strong>personalizar la experiencia</strong> según las
                    necesidades específicas del profesional médico
                  </li>
                </ul>
              </div>
            </div>

            {/* Mockup 3 */}
            <div className="mockup-item">
              <p className="mockup-description">
                Se implementó una mejora en el sistema de comunicación con
                pacientes mediante la incorporación del{' '}
                <strong>correo electrónico</strong> como campo adicional en la
                información de contacto. Esta funcionalidad establece el email
                como una <strong>segunda opción de contacto</strong> cuando la
                comunicación telefónica directa no sea posible o efectiva,
                garantizando múltiples canales de comunicación.
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
                    <strong>teléfono como canal primario</strong> y el email
                    como secundario, respetando la inmediatez y personalización
                    de la comunicación telefónica
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
              La implementación de la estrategia "móvil-first" responde a un
              cambio fundamental en los patrones de uso de tecnología en el
              sector salud. Los profesionales médicos requieren acceso inmediato
              y flexible a la información de pacientes, independientemente de su
              ubicación física, ya sea en consultorios, hospitales, o durante
              visitas domiciliarias.
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
                Se desarrolló variaciones de tamaño de pantalla que permite la
                adaptación dinámica de la interfaz médica entre dispositivos
                móviles y web. Esta funcionalidad garantiza una experiencia de
                usuario óptima en ambas plataformas, manteniendo la
                funcionalidad completa y la legibilidad tanto en smartphones
                como en navegadores de escritorio.
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
              El desarrollo de MediNote demostró la{' '}
              <strong>viabilidad de crear una solución móvil integral</strong>{' '}
              para la gestión de registros médicos que satisface las necesidades
              reales de profesionales de la salud en consultorios y clínicas
              pequeñas. La aplicación logró consolidar exitosamente{' '}
              <strong>múltiples flujos de trabajo médico</strong> en una
              interfaz unificada e intuitiva, desde la gestión de pacientes
              hasta el seguimiento de tratamientos. Los prototipos validaron que
              la{' '}
              <strong>digitalización de procesos médicos tradicionales</strong>{' '}
              puede mejorar tanto la eficiencia operativa como la calidad del
              cuidado al paciente.
            </p>
          </div>

          <div className="results-section">
            <h3 className="subsection-title">IMPACTO</h3>
            <p className="impact-text">
              La implementación del{' '}
              <strong>
                sistema de design tokens y componentes reutilizables
              </strong>{' '}
              estableció un nuevo estándar de consistencia visual en
              aplicaciones médicas móviles. El uso estratégico de color,
              tipografía y espaciado creó una <strong>identidad visual</strong>{' '}
              que transmite confianza y profesionalismo, elementos cruciales en
              el <strong>sector salud</strong>.
            </p>
          </div>

          <div className="results-section">
            <h3 className="subsection-title">LO QUE APRENDÍ</h3>
            <p className="learnings-text">
              Diseñar para profesionales médicos exige un{' '}
              <strong>
                conocimiento profundo de los flujos de trabajo clínicos
              </strong>
              , la terminología especializada y los contextos particulares en
              los que se utiliza la tecnología en entornos de salud. Esto
              implica comprender cómo se toman decisiones bajo presión, cómo se
              prioriza la <strong>información crítica</strong> y cómo
              interactúan diferentes roles dentro del equipo médico. Una
              interfaz efectiva no solo debe ser funcional, sino también{' '}
              <strong>reducir la carga cognitiva</strong>, minimizar errores y
              adaptarse a situaciones variables, desde consultorios hasta
              unidades de emergencia.
            </p>

            <div className="lessons-grid">
              <div className="lessons-section">
                <h4 className="lessons-title">Lecciones profesionales</h4>
                <ul className="lessons-list">
                  <li className="lesson-item">
                    La importancia de los{' '}
                    <strong>estados de error y feedback</strong> se magnificó en
                    este contexto, donde una confusión en la interfaz puede
                    tener <strong>consecuencias graves</strong>.
                  </li>
                  <li className="lesson-item">
                    Interfaces que funcionan{' '}
                    <strong>bajo presión en entornos médicos</strong>,
                    especialmente en situaciones de emergencia, donde los
                    profesionales no pueden detenerse a pensar en cómo usar una
                    aplicación; esta debe ser completamente{' '}
                    <strong>intuitiva</strong>.
                  </li>
                </ul>
              </div>

              <div className="lessons-section">
                <h4 className="lessons-title">Lecciones personales</h4>
                <ul className="lessons-list">
                  <li className="lesson-item">
                    La experiencia me hizo más consciente de la importancia de
                    la <strong>accesibilidad universal</strong> en el diseño,
                    considerando las diversas capacidades y contextos de uso de
                    los profesionales médicos.
                  </li>
                  <li className="lesson-item">
                    Los{' '}
                    <strong>requisitos médicos cambian constantemente</strong>{' '}
                    debido a regulaciones y emergencias como COVID-19, por lo
                    que aprendí a diseñar <strong>sistemas flexibles</strong> y
                    a manejar la incertidumbre como parte normal del trabajo.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="results-section">
            <h3 className="subsection-title">PRÓXIMOS PASOS</h3>
            <ol className="next-steps-list">
              <li className="next-step-item">
                Expandir el <strong>sistema de design tokens</strong> para
                incluir variaciones de alta densidad informacional, desarrollar
                componentes especializados para diferentes especialidades
                médicas, y crear temas personalizables que se adapten a
                preferencias individuales sin comprometer la{' '}
                <strong>consistencia del sistema</strong>.
              </li>
              <li className="next-step-item">
                Desarrollar el{' '}
                <strong>módulo de facturación y gestión administrativa</strong>{' '}
                que permita registrar pagos, emitir facturas y optimizar
                procesos financieros.
              </li>
            </ol>
          </div>

          <div className="results-section">
            <h3 className="subsection-title">CONSIDERACIONES FINALES</h3>
            <p className="final-text">
              El diseño de MediNote validó que la{' '}
              <strong>excelencia en experiencia de usuario</strong> en el sector
              salud no es un lujo, sino una <strong>necesidad crítica</strong>{' '}
              que impacta directamente la calidad del cuidado médico. Este
              proyecto demostró que cuando el diseño logra volverse transparente
              para el usuario médico, permite que toda su atención se concentre
              en el paciente, lo cual es el{' '}
              <strong>objetivo último de cualquier herramienta clínica</strong>.
              La experiencia subrayó la responsabilidad ética del diseñador
              UX/UI en contextos donde las decisiones de interfaz tienen
              implicaciones que van más allá de la satisfacción del usuario,
              extendiéndose al <strong>bienestar de los pacientes</strong>.
            </p>
          </div>

          <div className="project-detail__links project-detail__links--final">
            <h2 className="subsection-title-with-border">
              REPOSITORIO DEL PROYECTO
            </h2>

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

export default ProjectDetail4;
