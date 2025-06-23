import React, { useEffect, useState } from 'react';
import { useScrollReveal } from '../../../context/ScrollRevealContext';
import '../ProjectDetail.scss';

const ProjectDetail3 = () => {
  const { revealRef } = useScrollReveal();
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Alfredo García Diseñador UX/UI & Desarrollador - INVENTA-ANALYT`;
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
              src="/assets/images/projects/project3/thumbnail.png"
              alt="INVENTA-ANALYT"
              draggable="false"
              className="no-save"
              onContextMenu={e => e.preventDefault()}
            />
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
            INVENTA-ANALYT es una aplicación móvil y web para gestión de
            pequeños negocios que integra control de inventario, registro de
            ventas, consulta de transacciones y análisis avanzados. La
            plataforma destaca por su interfaz intuitiva que permite a los
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
              Diseñar e implementar la interfaz de usuario de la aplicación
              móvil INVENTA-ANALYT, enfocándose en crear una experiencia
              intuitiva y atractiva mediante programación en React Native, con
              especial atención a la usabilidad de los elementos visuales,
              navegación fluida entre módulos y diseño responsive que maximiza
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
                Crear prototipos de baja y alta fidelidad, realizar estudios de
                usabilidad con usuarios finales para identificar áreas de mejora
                en la interfaz, implementar ajustes basados en feedback directo
                y validar las soluciones propuestas mediante pruebas A/B.
              </li>
              <li className="responsibility-item">
                Construir un sistema responsivo adaptable a diferentes
                dispositivos, asegurar una experiencia fluida y consistente en
                smartphones y computadoras.
              </li>
              <li className="responsibility-item">
                Desarrollar el sistema de diseño y componentes reutilizables
              </li>
              <li className="responsibility-item">
                Desarrollar visualizaciones estadísticas para el módulo de
                reportes, transformar datos complejos en representaciones
                gráficas intuitivas.
              </li>
            </ul>
          </div>
        </section>

        <section className="project-detail__section">
          <h2 className="subsection-title-with-border">INVESTIGACIÓN</h2>

          <div className="project-detail__understanding">
            <p className="understanding-text">
              Hice una investigación con una encuesta a cuatro propietarios de
              pequeños negocios para entender mejor sus intereses y necesidades.
              Descubrí que los comerciantes priorizaban la{' '}
              <strong>rapidez en el registro de ventas</strong> por encima de
              las funciones de inventario. También encontré una necesidad
              inesperada: querían <strong>predicciones sencillas</strong> sobre
              cuándo reabastecer productos, pero sin necesidad de entender
              estadísticas complejas. Estos hallazgos me llevaron a reorientar
              el desarrollo hacia una <strong>interfaz ágil para ventas</strong>{' '}
              y un sistema de análisis automatizado. La mayoría de las preguntas
              fueron cuantitativas, pero incluí algunas abiertas ya que este fue
              mi principal punto de contacto con los usuarios.
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
                Los comerciantes tuvieron dificultad para gestionar ventas e
                inventario durante horas pico, lo que llevó a implementar una
                interfaz de venta rápida con búsqueda instantánea y{' '}
                <strong>sincronización automática</strong> con el inventario.
              </li>
              <li className="key-issue-item">
                Los usuarios no pudieron interpretar{' '}
                <strong>datos de ventas</strong> sin conocimientos analíticos,
                por lo que se desarrolló un sistema de recomendaciones
                automáticas para reabastecimiento y predicción de tendencias con{' '}
                <strong>visualizaciones simples</strong>.
              </li>
              <li className="key-issue-item">
                La frustración con la <strong>configuración inicial</strong> de
                aplicaciones existentes inspiró el enfoque de "configuración
                mínima" con plantillas predefinidas.
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
                      StockTracker Lite es una aplicación básica para gestión de
                      inventario orientada a tiendas minoristas y pequeños
                      almacenes. Ofrece funcionalidades como registro de
                      productos, control de existencias y generación de reportes
                      simples.
                    </p>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="QuickStock POS"
                  >
                    <p className="competitor-description">
                      QuickStock POS es una aplicación de punto de venta con
                      funcionalidades de gestión de inventario integradas. Se
                      enfoca principalmente en el proceso de venta más que en el
                      análisis o gestión profunda del inventario.
                    </p>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="InvenTrack Basic"
                  >
                    <p className="competitor-description">
                      InvenTrack Basic es una aplicación de gestión de
                      inventario centrada en la trazabilidad de productos y
                      materiales. Ofrece funcionalidades para registrar
                      movimientos de inventario y generar alertas de stock bajo.
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
                      <li>
                        Bajo costo de entrada (versión gratuita con funciones
                        básicas)
                      </li>
                      <li>
                        Proceso de configuración rápido, ideal para negocios muy
                        pequeños
                      </li>
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
                      <li>Seguimiento detallado de movimientos de producto</li>
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
                      <li>Sin capacidades de análisis predictivo o avanzado</li>
                      <li>No ofrece visualizaciones gráficas de datos</li>
                      <li>
                        Funcionalidad de ventas limitada (sin punto de venta
                        integrado)
                      </li>
                    </ul>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="QuickStock POS"
                  >
                    <ul className="competitor-list weaknesses">
                      <li>
                        Sin predicciones ni recomendaciones de reabastecimiento
                      </li>
                      <li>
                        Interfaz menos intuitiva, con curva de aprendizaje más
                        pronunciada
                      </li>
                    </ul>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="InvenTrack Basic"
                  >
                    <ul className="competitor-list weaknesses">
                      <li>
                        Carece de funcionalidades de punto de venta integradas
                      </li>
                      <li>Menor soporte para visualización gráfica de datos</li>
                      <li>
                        Proceso de configuración inicial más complejo y tedioso
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
                    data-competitor="StockTracker Lite"
                  >
                    <div className="competitor-audience">
                      <p>
                        Microempresas y emprendedores individuales con
                        presupuesto limitado que necesitan una solución básica
                        para control de inventario sin requerimientos analíticos
                        complejos.
                      </p>
                    </div>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="QuickStock POS"
                  >
                    <div className="competitor-audience">
                      <p>
                        Pequeños comercios minoristas y tiendas que priorizan la
                        velocidad de procesamiento de ventas sobre la gestión de
                        inventario y análisis de datos.
                      </p>
                    </div>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="InvenTrack Basic"
                  >
                    <div className="competitor-audience">
                      <p>
                        Pequeños almacenes, talleres y negocios con enfoque en
                        manufactura o distribución que necesitan principalmente
                        controlar existencias y movimientos de materiales sin
                        requerir análisis avanzados.
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
              accionables y reorganizar la configuración. Esto resultó en una
              experiencia más intuitiva, priorizando la rapidez en tareas
              frecuentes y la complejidad solo para funciones avanzadas.
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
                  productos por categoría" - <strong>Participante 2</strong>
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
                  <strong>Participante 1</strong>
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
                  semana" - <strong>Participante 1</strong>
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
                una <strong>sección de categoría</strong>, donde el usuario
                podrá crear una nueva categoría para el producto o seleccionar
                una ya existente, facilitando así una{' '}
                <strong>mejor organización y clasificación</strong> de los
                productos.
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
                    Implementar un <strong>campo de autocompletado</strong> con
                    las categorías existentes para reducir errores de digitación
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
                <strong>patrones del negocio</strong> y alertar sobre productos
                que están por agotarse.
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
                    <strong>tarjetas de "¿Sabías que?"</strong> con lenguaje
                    cotidiano
                  </li>
                  <li>
                    Implementar <strong>acciones directas</strong> desde las
                    alertas para reducir la fricción (ej: "Reabastecer ahora"
                    desde una alerta de stock bajo)
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
                Durante el desarrollo se priorizó un diseño responsivo adaptable
                a distintos tamaños de pantalla. Se usaron unidades
                proporcionales para asegurar una experiencia fluida en todos los
                dispositivos. Se optimizaron elementos clave como navegación,
                visualización de productos y entrada de datos según el tamaño
                del dispositivo. Esta adaptabilidad fue clave, ya que el 65% de
                los usuarios alternaban entre dispositivos según la tarea.
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
              <p className="high-fidelity-text">
                Resonó positivamente en las pruebas de usuario, donde los
                participantes lo asociaron con "herramienta moderna".
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
              Los usuarios objetivo compartieron que la app resultó ser{' '}
              <strong>muy fácil de usar</strong>, destacando especialmente su
              diseño intuitivo que facilitaba la navegación y las interacciones.
              Gracias a su <strong>estructura clara y simple</strong>, pudieron
              gestionar, agregar y vender productos sin complicaciones. La
              organización de las funciones y la accesibilidad de las opciones
              clave les permitió realizar estas tareas de manera{' '}
              <strong>rápida y eficiente</strong>, incluso sin experiencia
              previa con la aplicación. Esto no solo mejoró su productividad,
              sino que también redujo la <strong>curva de aprendizaje</strong>,
              haciendo que se sintieran cómodos y seguros al utilizarla desde el
              primer momento.
            </p>
          </div>

          <div className="results-section">
            <h3 className="subsection-title">IMPACTO</h3>
            <p className="impact-text">
              La reorganización de los elementos y la mejora en la navegación
              permitieron que los usuarios gestionaran, añadieran productos y
              realizaran ventas de manera{' '}
              <strong>más rápida y eficiente</strong>. Además, las predicciones
              de reabastecimiento fueron presentadas de forma más clara y
              accesible, lo que ayudó a minimizar las situaciones de{' '}
              <strong>desabastecimiento</strong>.
            </p>
          </div>

          <div className="results-section">
            <h3 className="subsection-title">LO QUE APRENDÍ</h3>
            <p className="learnings-text">
              Aprendí que incluso los{' '}
              <strong>cambios más pequeños en el diseño</strong> pueden mejorar
              significativamente la fluidez del proceso y la experiencia general
              del usuario. Esta observación me llevó a comprender la importancia
              de <strong>priorizar las necesidades reales</strong>
              de los usuarios al desarrollar funcionalidades y soluciones que
              optimicen sus tareas diarias.
            </p>

            <div className="lessons-grid">
              <div className="lessons-section">
                <h4 className="lessons-title">Lecciones profesionales</h4>
                <ul className="lessons-list">
                  <li className="lesson-item">
                    Entender la importancia de diseñar con{' '}
                    <strong>accesibilidad en mente</strong> para asegurar que
                    todos los usuarios puedan interactuar con la aplicación de
                    manera efectiva
                  </li>
                  <li className="lesson-item">
                    Valorar la <strong>retroalimentación constante</strong> de
                    los usuarios, ya que las pruebas de usabilidad revelan áreas
                    clave de mejora que no siempre son evidentes al principio
                    del proceso de diseño
                  </li>
                  <li className="lesson-item">
                    Reconocer la necesidad de{' '}
                    <strong>iterar rápidamente</strong> en el diseño, testear
                    con usuarios reales y ajustar sobre la marcha para mejorar
                    la experiencia
                  </li>
                </ul>
              </div>

              <div className="lessons-section">
                <h4 className="lessons-title">Lecciones personales</h4>
                <ul className="lessons-list">
                  <li className="lesson-item">
                    Desarrollar una mayor apreciación por la importancia del{' '}
                    <strong>diseño responsivo</strong> en entornos de trabajo
                    diversos
                  </li>
                  <li className="lesson-item">
                    Ahora valoro más el <strong>feedback negativo</strong> que
                    el positivo, pues me da oportunidades concretas de mejora
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="results-section">
            <h3 className="subsection-title">PRÓXIMOS PASOS</h3>
            <ol className="next-steps-list">
              <li className="next-step-item">
                Optimizar el proceso en <strong>dispositivos móviles</strong>,
                reducir el número de toques necesarios y mejorar el tamaño de
                los elementos interactivos.
              </li>
              <li className="next-step-item">
                Mejorar la <strong>visualización de datos</strong> en el panel
                de análisis, implementando gráficos más sencillos con etiquetas
                claras y mensajes explicativos.
              </li>
              <li className="next-step-item">
                Desarrollar un <strong>sistema de notificaciones</strong> más
                claro y personalizado, que permita a los usuarios recibir
                alertas relevantes sin sentirse abrumados.
              </li>
            </ol>
          </div>

          <div className="results-section">
            <h3 className="subsection-title">CONSIDERACIONES FINALES</h3>
            <p className="final-text">
              INVENTA-ANALYT ha representado una solución integral, mucho más
              que un simple sistema de gestión de inventarios. Su enfoque en la{' '}
              <strong>rapidez para tareas frecuentes</strong>, la visualización
              simplificada de datos complejos y la automatización inteligente
              demuestra que un diseño centrado en el usuario puede generar un{' '}
              <strong>impacto tangible en negocios reales</strong>. Manteniendo
              siempre la simplicidad como principio fundamental, INVENTA-ANALYT
              no es solo un producto tecnológico, sino una{' '}
              <strong>herramienta de transformación</strong> para negocios que
              buscan prosperar en un entorno cada vez más competitivo.
            </p>
          </div>

          <div className="project-detail__links project-detail__links--final">
            <h2 className="subsection-title-with-border">
              REPOSITORIO DEL PROYECTO
            </h2>

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

export default ProjectDetail3;
