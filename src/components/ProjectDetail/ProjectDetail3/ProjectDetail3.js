import React, { useEffect, useState } from 'react';
import { useScrollReveal } from '../../../context/ScrollRevealContext';
import '../ProjectDetail.scss';

const ProjectDetail3 = () => {
  const { revealRef } = useScrollReveal();
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `INVENTA-ANALYT — Alfredo García`;
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
              src="/assets/images/projects/project3/thumbnail.png"
              alt="INVENTA-ANALYT"
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

          <h1 className="project-title">INVENTA-ANALYT</h1>

          <div className="project-detail__meta">
            <div className="project-detail__meta-item">
              <span className="meta-value">Diciembre 2024 - Febrero 2025</span>
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
            INVENTA-ANALYT es una aplicación móvil y web para la gestión de
            pequeños negocios que integra control de inventario, registro de
            ventas, consulta de transacciones y análisis avanzados. La
            plataforma se destaca por su interfaz intuitiva, que permite a los
            propietarios monitorear existencias en tiempo real y acceder al
            historial completo de operaciones.
          </p>
        </section>

        <section className="project-detail__section">
          <div className="project-detail__problem-goal-container">
            <div className="project-detail__problem">
              <h3 className="subsection-title">PROBLEMA</h3>
              <p className="problem-text">
                Pequeños comerciantes usan métodos manuales o herramientas
                desconectadas para gestionar inventario y ventas, causando
                errores y pérdida de información, lo que limita su capacidad
                para optimizar operaciones y crecer.
              </p>
            </div>

            <div className="project-detail__goal">
              <h3 className="subsection-title">OBJETIVO</h3>
              <p className="goal-text">
                Crear una app móvil intuitiva que digitalice completamente
                operaciones de inventario y ventas, integrando análisis
                predictivos y recomendaciones automatizadas para optimizar la
                gestión del negocio y facilitar la toma de decisiones
                estratégicas basadas en datos reales.
              </p>
            </div>
          </div>

          <div className="project-detail__role">
            <h3 className="subsection-title">MI ROL</h3>
            <p className="role-text">
              Diseño e implemento la interfaz de usuario de la aplicación móvil
              INVENTA-ANALYT, enfocándome en crear una experiencia intuitiva y
              atractiva mediante programación en React Native. Mi trabajo
              incluye garantizar la usabilidad de los elementos visuales, la
              navegación fluida entre módulos y un diseño responsive, así como
              el desarrollo de funcionalidades clave como agregar productos,
              registrar usuarios y gestionar la creación de ventas, optimizando
              la experiencia del usuario en diferentes dispositivos.
            </p>
          </div>

          <div className="project-detail__responsibilities">
            <h3 className="subsection-title">RESPONSABILIDADES</h3>
            <ul className="responsibilities-list">
              <li className="responsibility-item">
                Diseñar la arquitectura de información y sistema de navegación
              </li>
              <li className="responsibility-item">
                Desarrollar el sistema de diseño y componentes reutilizables
              </li>
              <li className="responsibility-item">
                Construir un sistema responsivo adaptable a diferentes
                dispositivos, asegurar una experiencia fluida y consistente en
                smartphones y computadoras.
              </li>
            </ul>
          </div>
        </section>

        <section className="project-detail__section">
          <h2 className="subsection-title-with-border">INVESTIGACIÓN</h2>

          <div className="project-detail__understanding">
            <p className="understanding-text">
              Investigué con cuatro propietarios de pequeños negocios para
              entender sus necesidades. Los comerciantes priorizaban{' '}
              <strong style={{ fontWeight: 600 }}>
                rapidez en el registro de ventas
              </strong>{' '}
              y querían{' '}
              <strong style={{ fontWeight: 600 }}>
                predicciones sencillas
              </strong>{' '}
              de reabastecimiento sin estadísticas complejas. Esto me llevó a
              desarrollar una{' '}
              <strong style={{ fontWeight: 600 }}>
                interfaz ágil para ventas
              </strong>{' '}
              y sistema de análisis automatizado.
            </p>
            <div className="understanding-image">
              <img
                src="/assets/images/projects/project3/research.png"
                alt="Investigación de usuario"
              />
            </div>

            <h3 className="subsection-title">
              INVESTIGACIÓN DE USUARIOS: PUNTOS DÉBILES
            </h3>
            <ol className="key-issues-list">
              <li className="key-issue-item">
                Dificultad para gestionar ventas e inventario en horas pico
                llevó a implementar interfaz de venta rápida con{' '}
                <strong style={{ fontWeight: 600 }}>
                  sincronización automática
                </strong>
                .
              </li>
              <li className="key-issue-item">
                Los usuarios no interpretaban{' '}
                <strong style={{ fontWeight: 600 }}>datos de ventas</strong>, se
                desarrolló sistema de recomendaciones automáticas con{' '}
                <strong style={{ fontWeight: 600 }}>
                  visualizaciones simples
                </strong>
                .
              </li>
              <li className="key-issue-item">
                La frustración con{' '}
                <strong style={{ fontWeight: 600 }}>
                  configuración inicial
                </strong>{' '}
                inspiró el enfoque de "configuración mínima" con plantillas.
              </li>
            </ol>

            <h3 className="subsection-title">ANÁLISIS COMPETITIVO</h3>
            <div className="project-detail__competition">
              <div className="competitive-table">
                <div className="competitive-row competitive-row--names">
                  <div className="competitive-cell competitive-cell--empty"></div>
                  <div className="competitive-cell competitive-cell--name">
                    <h3 className="competitor-name">StockTracker Lite</h3>
                  </div>
                  <div className="competitive-cell competitive-cell--name">
                    <h3 className="competitor-name">QuickStock POS</h3>
                  </div>
                  <div className="competitive-cell competitive-cell--name">
                    <h3 className="competitor-name">InvenTrack Basic</h3>
                  </div>
                </div>

                <div className="competitive-row competitive-row--overview">
                  <div className="competitive-cell competitive-cell--label"></div>
                  <div
                    className="competitive-cell competitive-cell--images"
                    data-competitor="StockTracker Lite"
                  >
                    <div className="competitor-images">
                      <img
                        src="/assets/images/projects/project3/competitor/competitor1.png"
                        alt="StockTracker Lite captura 1"
                      />
                    </div>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--images"
                    data-competitor="QuickStock POS"
                  >
                    <div className="competitor-images">
                      <img
                        src="/assets/images/projects/project3/competitor/competitor2.png"
                        alt="QuickStock POS captura 1"
                      />
                    </div>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--images"
                    data-competitor="InvenTrack Basic"
                  >
                    <div className="competitor-images">
                      <img
                        src="/assets/images/projects/project3/competitor/competitor3.png"
                        alt="InvenTrack Basic captura 1"
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
                    data-competitor="StockTracker Lite"
                  >
                    <p className="competitor-description">
                      App básica para gestión de inventario en tiendas
                      minoristas con registro de productos y reportes simples.
                    </p>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="QuickStock POS"
                  >
                    <p className="competitor-description">
                      Sistema de punto de venta con gestión de inventario
                      integrada, enfocado en el proceso de venta.
                    </p>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="InvenTrack Basic"
                  >
                    <p className="competitor-description">
                      App de gestión de inventario centrada en trazabilidad de
                      productos y alertas de stock bajo.
                    </p>
                  </div>
                </div>

                <div className="competitive-row competitive-row--strengths">
                  <div className="competitive-cell competitive-cell--label">
                    <h4 className="row-label">FORTALEZAS</h4>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="StockTracker Lite"
                  >
                    <ul className="competitor-list strengths">
                      <li>Interfaz sencilla y fácil de aprender</li>
                      <li>Bajo costo (versión gratuita disponible)</li>
                      <li>Configuración rápida para negocios pequeños</li>
                    </ul>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="QuickStock POS"
                  >
                    <ul className="competitor-list strengths">
                      <li>Proceso de venta eficiente y rápido</li>
                      <li>Catálogo de productos con imágenes</li>
                      <li>Múltiples métodos de pago</li>
                    </ul>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="InvenTrack Basic"
                  >
                    <ul className="competitor-list strengths">
                      <li>Seguimiento detallado de movimientos</li>
                      <li>Alertas de stock configurables</li>
                      <li>Categorización flexible de productos</li>
                    </ul>
                  </div>
                </div>

                <div className="competitive-row competitive-row--weaknesses">
                  <div className="competitive-cell competitive-cell--label">
                    <h4 className="row-label">DEBILIDADES</h4>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="StockTracker Lite"
                  >
                    <ul className="competitor-list weaknesses">
                      <li>Sin análisis predictivo o avanzado</li>
                      <li>No ofrece visualizaciones gráficas</li>
                      <li>Sin punto de venta integrado</li>
                    </ul>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="QuickStock POS"
                  >
                    <ul className="competitor-list weaknesses">
                      <li>Sin predicciones de reabastecimiento</li>
                      <li>Interfaz menos intuitiva</li>
                    </ul>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="InvenTrack Basic"
                  >
                    <ul className="competitor-list weaknesses">
                      <li>Sin punto de venta integrado</li>
                      <li>Visualización gráfica limitada</li>
                      <li>Configuración inicial compleja</li>
                    </ul>
                  </div>
                </div>

                <div className="competitive-row competitive-row--audience">
                  <div className="competitive-cell competitive-cell--label">
                    <h4 className="row-label">AUDIENCIA OBJETIVO</h4>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="StockTracker Lite"
                  >
                    <div className="competitor-audience">
                      <p>
                        Microempresas y emprendedores con presupuesto limitado
                        que necesitan control básico de inventario.
                      </p>
                    </div>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="QuickStock POS"
                  >
                    <div className="competitor-audience">
                      <p>
                        Pequeños comercios minoristas que priorizan velocidad de
                        ventas sobre gestión de inventario.
                      </p>
                    </div>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="InvenTrack Basic"
                  >
                    <div className="competitor-audience">
                      <p>
                        Pequeños almacenes y talleres que necesitan controlar
                        existencias y movimientos de materiales.
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
            <div className="personas-horizontal-grid" data-count="2">
              {/* Persona 1 */}
              <div className="persona-card">
                <div className="persona-statement">
                  <div className="persona-image">
                    <img
                      src="/assets/images/projects/project3/persona/persona1.png"
                      alt="Guadalupe Lumbreras"
                      onClick={() =>
                        openImageModal(
                          '/assets/images/projects/project3/persona/persona1.png'
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
                      src="/assets/images/projects/project3/persona/persona2.png"
                      alt="Araceli Mendoza"
                      onClick={() =>
                        openImageModal(
                          '/assets/images/projects/project3/persona/persona2.png'
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
                <h4 className="journey-title">Guadalupe Lumbreras</h4>
                <p className="journey-description">
                  Gestionar su dulcería desde el ordenador mientras atiende a
                  sus clientes.
                </p>
                <div className="journey-image">
                  <img
                    src="/assets/images/projects/project3/map/map1.jpg"
                    alt="Mapa de recorrido de Guadalupe Lumbreras"
                  />
                </div>
              </div>

              {/* Journey Map 2 */}
              <div className="journey-card">
                <h4 className="journey-title">Araceli Mendoza</h4>
                <p className="journey-description">
                  Mostrar cómo Alicia gestiona su ferretería, desde localizar
                  productos hasta analizar ventas y controlar inventario.
                </p>
                <div className="journey-image">
                  <img
                    src="/assets/images/projects/project3/map/map2.jpg"
                    alt="Mapa de recorrido de Araceli Mendoza"
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
                src="/assets/images/projects/project3/sitemap.svg"
                alt="Mapa del sitio"
                onClick={() =>
                  openImageModal('/assets/images/projects/project3/sitemap.svg')
                }
                className="clickable-image"
              />
            </div>
          </div>

          <div className="design-section">
            <h3 className="subsection-title">USER FLOW</h3>
            <div className="design-image">
              <img
                src="/assets/images/projects/project3/userflow.svg"
                alt="Flujo de usuario"
                onClick={() =>
                  openImageModal(
                    '/assets/images/projects/project3/userflow.svg'
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
            <div className="paper-wireframes-grid" data-count="2">
              <img
                src="/assets/images/projects/project3/paper/paper1.jpg"
                alt="Wireframe en papel 1"
              />
              <img
                src="/assets/images/projects/project3/paper/paper2.jpg"
                alt="Wireframe en papel 2"
              />
            </div>
          </div>

          <div className="design-section">
            <div className="design-image">
              <img
                src="/assets/images/projects/project3/paper/paper.png"
                alt="Wireframes refinados"
              />
            </div>
          </div>

          <div className="design-section">
            <h3 className="subsection-title">
              WIREFRAME EN PAPEL - VARIACIONES DE TAMAÑO DE PANTALLA
            </h3>
            <div className="design-images">
              <img
                src="/assets/images/projects/project3/variations.png"
                alt="Variación de dispositivo"
              />
            </div>
          </div>

          <div className="design-section">
            <h3 className="subsection-title">WIREFRAMES DIGITALES</h3>
            <div className="design-image">
              <img
                src="/assets/images/projects/project3/wireframes.png"
                alt="Wireframes digitales"
              />
            </div>
          </div>

          <div className="design-section">
            <h3 className="subsection-title">VARIACIONES DIGITALES</h3>
            <div className="design-images">
              <img
                src="/assets/images/projects/project3/digital.png"
                alt="Variación digital"
              />
            </div>
          </div>
        </section>

        <section className="project-detail__section">
          <div className="design-section">
            <h3 className="subsection-title">PROTOTIPO DE BAJA FIDELIDAD</h3>
            <p className="design-text">
              Los prototipos se simplificaron tras la retroalimentación: reducir
              pasos en el flujo de ventas, limpiar el dashboard, optimizar la
              gestión de inventario, enfocar los análisis en insights
              accionables y reorganizar la configuración.
            </p>
            <div className="design-image">
              <img
                src="/assets/images/projects/project3/prototype.png"
                alt="Prototipo de baja fidelidad"
              />
            </div>
            <div className="prototype-link">
              <a
                href="https://www.figma.com/proto/RAdwsM7P1y7tdQhynTxtmT/INVENTA-ANALYT?page-id=0%3A1&node-id=1-3735&p=f&viewport=464%2C442%2C0.08&t=aLixr3jttXbgePOx-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A3735"
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
                  2 propietarios de pequeños comercios
                </span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Duración:</span>
                <span className="detail-value">20-30 minutos</span>
              </div>
            </div>
          </div>

          <h3 className="subsection-title">PRINCIPALES HALLAZGOS</h3>
          <div className="findings-list">
            {/* Finding 1 */}
            <div className="finding-item">
              <h4 className="finding-area">Ventas</h4>
              <p className="finding-description">
                El registro de ventas fue rápido e intuitivo, aunque la búsqueda
                por categoría causó confusión.
              </p>
              <div className="finding-quotes">
                <blockquote className="user-quote">
                  "La pantalla de ventas es clara, pero me perdí buscando
                  productos por categoría" -{' '}
                  <strong style={{ fontWeight: 600 }}>Participante 2</strong>
                </blockquote>
              </div>
            </div>

            {/* Finding 2 */}
            <div className="finding-item">
              <h4 className="finding-area">Análisis</h4>
              <p className="finding-description">
                Los usuarios valoraron los datos, pero tuvieron dificultades
                para interpretar los gráficos y aplicar los insights.
              </p>
              <div className="finding-quotes">
                <blockquote className="user-quote">
                  "Entiendo que hay información valiosa aquí, pero no sé
                  exactamente qué debo hacer con ella" -{' '}
                  <strong style={{ fontWeight: 600 }}>Participante 1</strong>
                </blockquote>
              </div>
            </div>

            {/* Finding 3 */}
            <div className="finding-item">
              <h4 className="finding-area">Productos</h4>
              <p className="finding-description">
                El formulario fue lento por el exceso de campos y todos buscaron
                una opción de importación masiva.
              </p>
              <div className="finding-quotes">
                <blockquote className="user-quote">
                  "Si tuviera que cargar todos mis productos así, me tomaría una
                  semana" -{' '}
                  <strong style={{ fontWeight: 600 }}>Participante 1</strong>
                </blockquote>
              </div>
            </div>
          </div>

          <h2 className="subsection-title-with-border">REFINANDO EL DISEÑO</h2>
          <div className="mockups-section">
            {/* Mockup 1 */}
            <div className="mockup-item">
              <p className="mockup-description">
                Se agregó en la parte inferior de la descripción del producto
                una{' '}
                <strong style={{ fontWeight: 600 }}>
                  sección de categoría
                </strong>
                , donde el usuario podrá crear una nueva categoría para el
                producto o seleccionar una ya existente, facilitando así una{' '}
                <strong style={{ fontWeight: 600 }}>
                  mejor organización y clasificación
                </strong>{' '}
                de los productos.
              </p>
              <div className="mockup-image">
                <img
                  src="/assets/images/projects/project3/mockups/mockups1.png"
                  alt="Mockup 1"
                />
              </div>
              <div className="design-decisions">
                <h4 className="decisions-title">DECISIONES DE DISEÑO:</h4>
                <ul className="decisions-list">
                  <li>
                    Implementar un{' '}
                    <strong style={{ fontWeight: 600 }}>
                      campo de autocompletado
                    </strong>{' '}
                    con las categorías existentes para reducir errores de
                    digitación
                  </li>
                </ul>
              </div>
            </div>

            {/* Mockup 2 */}
            <div className="mockup-item">
              <p className="mockup-description">
                En el registro de ventas actualmente solo se muestra un resumen
                de ventas e inventario. El diseño podría mejorar su estructura e
                incluir recomendaciones más directas, como visualizar{' '}
                <strong style={{ fontWeight: 600 }}>
                  patrones del negocio
                </strong>{' '}
                y alertar sobre productos que están por agotarse.
              </p>
              <div className="mockup-image">
                <img
                  src="/assets/images/projects/project3/mockups/mockups2.png"
                  alt="Mockup 2"
                />
              </div>
              <div className="design-decisions">
                <h4 className="decisions-title">DECISIONES DE DISEÑO:</h4>
                <ul className="decisions-list">
                  <li>
                    Transformar visualizaciones complejas en{' '}
                    <strong style={{ fontWeight: 600 }}>
                      tarjetas de "¿Sabías que?"
                    </strong>{' '}
                    con lenguaje cotidiano
                  </li>
                  <li>
                    Implementar{' '}
                    <strong style={{ fontWeight: 600 }}>
                      acciones directas
                    </strong>{' '}
                    desde las alertas para reducir la fricción (ej: "Reabastecer
                    ahora" desde una alerta de stock bajo)
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

          <h3 className="subsection-title">PALETA DE COLORES</h3>
          <div className="visual-choices">
            <div className="color-palette">
              <ul className="palette-list">
                <li className="palette-item">
                  <span className="palette-percent">60%:</span>
                  <span className="palette-color">
                    <span
                      className="color-sample"
                      style={{ backgroundColor: '#F6F7F8' }}
                    ></span>
                    #F6F7F8 (Gris claro)
                  </span>
                </li>
                <li className="palette-item">
                  <span className="palette-percent">30%:</span>
                  <span className="palette-color">
                    <span
                      className="color-sample"
                      style={{ backgroundColor: '#2D3748' }}
                    ></span>
                    #2D3748 (Gris oscuro)
                  </span>
                </li>
                <li className="palette-item">
                  <span className="palette-percent">10%:</span>
                  <span className="palette-color">
                    <span
                      className="color-sample"
                      style={{ backgroundColor: '#6C63FF' }}
                    ></span>
                    #6C63FF (Violeta)
                  </span>
                </li>
              </ul>
              <p className="palette-reasoning">
                Se eligió el violeta (#6C63FF) porque transmite profesionalismo
                y modernidad. Al usarse con moderación solo en elementos
                interactivos clave, mantiene una jerarquía visual clara.
              </p>
            </div>
          </div>

          <div className="screen-variations">
            <h3 className="subsection-title">TAMAÑO DE PANTALLA ORIGINAL</h3>
            <p className="strategy-description">
              Implementar un enfoque "desktop-first" con adaptación progresiva
              hacia dispositivos móviles
            </p>
            <ul className="strategy-decisions">
              <li className="strategy-item">
                Diseñar componentes flexibles que se adaptan desde diseño
                completo hasta versiones compactas
              </li>
              <li className="strategy-item">
                Densidad de información adaptativa: layout completo en desktop,
                simplificación progresiva en móvil
              </li>
              <li className="strategy-item">
                Simplificación progresiva: dashboard completo → widgets
                principales → métricas esenciales
              </li>
            </ul>
            <div className="screen-image">
              <img
                src="/assets/images/projects/project3/screen.png"
                alt="Tamaño original"
              />
            </div>

            <div className="screen-variations-images">
              <h3 className="subsection-title">
                VARIACIONES DE TAMAÑO DE PANTALLA
              </h3>
              <p className="screen-description">
                En el desarrollo se priorizó un diseño responsivo adaptable a
                distintos tamaños de pantalla, usando unidades proporcionales
                para una experiencia fluida. Se optimizaron navegación,
                visualización y entrada de datos según el dispositivo, clave
                para usuarios que alternan entre varios dispositivos en sus
                tareas.
              </p>
              <img
                src="/assets/images/projects/project3/size_variation.png"
                alt="Variación de pantalla"
              />
            </div>
          </div>

          <div className="design-section">
            <h3 className="subsection-title">PROTOTIPO DE ALTA FIDELIDAD</h3>
            <div className="high-fidelity-section">
              <p className="high-fidelity-text">
                El prototipo refleja un diseño iterativo basado en investigación
                y retroalimentación de los usuarios. Utiliza el color violeta
                por su profesionalismo y accesibilidad. Se diferencia de la
                mayoría de aplicaciones empresariales que usan azul o verde.
              </p>
              <div className="high-fidelity-image">
                <img
                  src="/assets/images/projects/project3/high_fidelity.png"
                  alt="Prototipo de alta fidelidad"
                />
              </div>
              <div className="prototype-links">
                <a
                  href="https://www.figma.com/proto/RAdwsM7P1y7tdQhynTxtmT/INVENTA-ANALYT?page-id=9%3A3&node-id=9-255&p=f&viewport=-697%2C920%2C0.49&t=EjVEKXgOrGAS1ywH-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=9%3A255"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--outline"
                >
                  Ver prototipo web
                </a>
                <a
                  href="https://www.figma.com/proto/RAdwsM7P1y7tdQhynTxtmT/INVENTA-ANALYT?page-id=9%3A2378&node-id=9-3538&p=f&viewport=178%2C70%2C0.17&t=jEaGwxBrqb8fsq27-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=9%3A3538"
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
              Se desarrolló un orden de navegación lógico que permitió a los
              usuarios completar todas las operaciones esenciales, desde añadir
              productos hasta registrar ventas.
            </li>
            <li className="accessibility-item">
              Se diseñaron todas las áreas táctiles (botones, enlaces y otros
              elementos interactivos) con un espaciado adecuado entre ellas,
              para facilitar una interacción precisa, especialmente para
              usuarios con limitaciones motoras.
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
              Los usuarios consideraron la app{' '}
              <strong style={{ fontWeight: 600 }}>muy fácil de usar</strong>,
              destacando su diseño intuitivo. Su{' '}
              <strong style={{ fontWeight: 600 }}>
                estructura clara y simple
              </strong>{' '}
              les permitió gestionar, agregar y vender productos de manera{' '}
              <strong style={{ fontWeight: 600 }}>rápida y eficiente</strong>{' '}
              sin experiencia previa, reduciendo la{' '}
              <strong style={{ fontWeight: 600 }}>curva de aprendizaje</strong>.
            </p>
          </div>
          <div className="results-section">
            <h3 className="subsection-title">IMPACTO</h3>
            <p className="impact-text">
              La reorganización de elementos y mejora en navegación permitió
              gestionar productos y realizar ventas{' '}
              <strong style={{ fontWeight: 600 }}>
                más rápida y eficientemente
              </strong>
              . Las predicciones de reabastecimiento más claras minimizaron
              situaciones de{' '}
              <strong style={{ fontWeight: 600 }}>desabastecimiento</strong>.
            </p>
          </div>
          <div className="results-section">
            <h3 className="subsection-title">LO QUE APRENDÍ</h3>
            <p className="learnings-text">
              Los{' '}
              <strong style={{ fontWeight: 600 }}>
                cambios pequeños en el diseño
              </strong>{' '}
              pueden mejorar significativamente la experiencia del usuario. Esto
              me enseñó a{' '}
              <strong style={{ fontWeight: 600 }}>
                priorizar las necesidades reales
              </strong>{' '}
              al desarrollar funcionalidades.
            </p>

            <div className="lessons-grid">
              <div className="lessons-section">
                <h4 className="lessons-title">Lecciones profesionales</h4>
                <ul className="lessons-list">
                  <li className="lesson-item">
                    Diseñar con{' '}
                    <strong style={{ fontWeight: 600 }}>
                      accesibilidad en mente
                    </strong>{' '}
                    para que todos los usuarios puedan interactuar
                    efectivamente.
                  </li>
                  <li className="lesson-item">
                    La{' '}
                    <strong style={{ fontWeight: 600 }}>
                      retroalimentación constante
                    </strong>{' '}
                    revela áreas de mejora no evidentes al inicio.
                  </li>
                  <li className="lesson-item">
                    Es necesario{' '}
                    <strong style={{ fontWeight: 600 }}>
                      iterar rápidamente
                    </strong>
                    , testear con usuarios reales y ajustar sobre la marcha.
                  </li>
                </ul>
              </div>
              <div className="lessons-section">
                <h4 className="lessons-title">Lecciones personales</h4>
                <ul className="lessons-list">
                  <li className="lesson-item">
                    Desarrollé mayor apreciación por el{' '}
                    <strong style={{ fontWeight: 600 }}>
                      diseño responsivo
                    </strong>{' '}
                    en entornos de trabajo diversos.
                  </li>
                  <li className="lesson-item">
                    Ahora valoro más el{' '}
                    <strong style={{ fontWeight: 600 }}>
                      feedback negativo
                    </strong>
                    , pues ofrece oportunidades concretas de mejora.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="results-section">
            <h3 className="subsection-title">PRÓXIMOS PASOS</h3>
            <ol className="next-steps-list">
              <li className="next-step-item">
                Optimizar el proceso en{' '}
                <strong style={{ fontWeight: 600 }}>
                  dispositivos móviles
                </strong>
                , reducir el número de toques necesarios y mejorar el tamaño de
                los elementos interactivos.
              </li>
              <li className="next-step-item">
                Mejorar la{' '}
                <strong style={{ fontWeight: 600 }}>
                  visualización de datos
                </strong>{' '}
                en el panel de análisis, implementando gráficos más sencillos
                con etiquetas claras y mensajes explicativos.
              </li>
              <li className="next-step-item">
                Desarrollar un{' '}
                <strong style={{ fontWeight: 600 }}>
                  sistema de notificaciones
                </strong>{' '}
                más claro y personalizado, que permita a los usuarios recibir
                alertas relevantes sin sentirse abrumados.
              </li>
            </ol>
          </div>

          <div className="results-section">
            <h3 className="subsection-title">CONSIDERACIONES FINALES</h3>
            <p className="final-text">
              INVENTA-ANALYT ha representado una solución integral, mucho más
              que un simple sistema de gestión de inventarios. Su enfoque en la{' '}
              <strong style={{ fontWeight: 600 }}>
                rapidez para tareas frecuentes
              </strong>
              , la visualización simplificada de datos complejos y la
              automatización inteligente demuestra que un diseño centrado en el
              usuario puede generar un{' '}
              <strong style={{ fontWeight: 600 }}>
                impacto tangible en negocios reales
              </strong>
              . Manteniendo siempre la simplicidad como principio fundamental,
              INVENTA-ANALYT no es solo un producto tecnológico, sino una{' '}
              <strong style={{ fontWeight: 600 }}>
                herramienta de transformación
              </strong>{' '}
              para negocios que buscan prosperar en un entorno cada vez más
              competitivo.
            </p>
          </div>

          <div className="project-detail__links project-detail__links--final">
            <h2 className="subsection-title-with-border">
              REPOSITORIO DEL PROYECTO
            </h2>

            <div className="development-section">
              <h3 className="subsection-title">DESARROLLO</h3>
              <p className="summary-text">
                El proyecto se desarrolló inicialmente en React con JavaScript
                para crear la versión web, y una vez completado, se adaptó a
                React Native para dispositivos móviles, ajustando los
                componentes y la interfaz para una experiencia óptima en
                pantallas más pequeñas. Para la gestión de datos, se utilizó
                Firebase, integrando funcionalidades clave como control de
                inventario y registro de ventas, lo que permitió que la
                aplicación de gestión de negocios operara de manera eficiente y
                confiable tanto en web como en móvil.
              </p>
            </div>

            <div className="project-detail__repository-links">
              <a
                href="https://github.com/AldG99/inventory-control-app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--outline"
              >
                Versión móvil (React Native)
              </a>
              <a
                href="https://github.com/AldG99/inventory-control-web-app"
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

export default ProjectDetail3;
