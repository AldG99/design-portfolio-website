import React, { useEffect, useState } from 'react';
import { useScrollReveal } from '../../../context/ScrollRevealContext';
import '../ProjectDetail.scss';

const ProjectDetail1 = () => {
  const { revealRef } = useScrollReveal();
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Mikky Jump — Alfredo García`;
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
              src="/assets/images/projects/project1/thumbnail.png"
              alt="Mikky Jump - Game UI Design"
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

          <h1 className="project-title">Mikky Jump</h1>

          <div className="project-detail__meta">
            <div className="project-detail__meta-item">
              <span className="meta-value">Septiembre - Diciembre 2023</span>
            </div>
          </div>
          <div className="project-detail__tools">
            <span className="tool-tag tool-tag--figma">Figma</span>
            <span className="tool-tag tool-tag--unity">Unity</span>
          </div>
        </header>

        <section className="project-detail__overview">
          <h2 className="subsection-title-with-border">RESUMEN DEL PROYECTO</h2>
          <p className="overview-text">
            Diseño y desarrollo un juego de plataforma 2D con mecánicas de salto
            precisas para ofrecer una experiencia adictiva y desafiante.
            Ambientado en una ciudad nocturna, los jugadores deben saltar sobre
            plataformas de ladrillo y esquivar bloques con púas para rescatar a
            las princesas. Implemento una jugabilidad clásica que pone a prueba
            los reflejos mediante obstáculos variados y efectos visuales simples
            pero efectivos. También mejoro la interfaz visual y la experiencia
            de usuario, garantizando una navegación clara, fluida y accesible,
            logrando un equilibrio entre funcionalidad y estilo retro que
            potencia la nostalgia sin comprometer la diversión.
          </p>
        </section>

        <section className="project-detail__section">
          <div className="project-detail__problem-goal-container">
            <div className="project-detail__problem">
              <h3 className="subsection-title">PROBLEMA</h3>
              <p className="problem-text">
                Crear una interfaz de usuario intuitiva para un juego de
                plataformas clásico que no interfiera con la precisión del
                gameplay. Los elementos de UI deben ser visibles sin obstruir la
                acción, mientras mantienen la estética retro del juego.
              </p>
            </div>

            <div className="project-detail__goal">
              <h3 className="subsection-title">OBJETIVO</h3>
              <p className="goal-text">
                Desarrollar una experiencia de usuario fluida que permita a los
                jugadores casuales disfrutar de mecánicas familiares pero
                desafiantes, con una interfaz que respete el rendimiento en
                Unity 2D y complemente los efectos visuales del ambiente
                nocturno.
              </p>
            </div>
          </div>

          <div className="project-detail__role">
            <h3 className="subsection-title">MI ROL</h3>
            <p className="role-text">
              Diseño y desarrollo toda la experiencia de usuario del juego en
              Unity, desde la investigación hasta la implementación técnica.
              Creo una interfaz mínima que se adapta tanto a jugadores
              experimentados como a novatos, optimizando cada elemento (gestos,
              retroalimentación visual y controles) para lograr una jugabilidad
              fluida e intuitiva en dispositivos móviles. Además, desarrollo
              mecánicas de salto, movimiento, colisiones y puntaje en C# y Unity
              2D, asegurando que la experiencia de juego sea dinámica y
              consistente.
            </p>
          </div>

          <div className="project-detail__responsibilities">
            <h3 className="subsection-title">RESPONSABILIDADES</h3>
            <ul className="responsibilities-list">
              <li className="responsibility-item">
                Análisis de comportamiento de usuarios en juegos de plataformas
                similares para identificar patrones de interacción efectivos
              </li>
              <li className="responsibility-item">
                Diseño de wireframes y prototipos para interfaces de juego
              </li>
              <li className="responsibility-item">
                Implementación técnica de componentes UI en Unity con C#,
                optimizados para rendimiento móvil
              </li>
              <li className="responsibility-item">
                Testing de usabilidad con jugadores de diferentes niveles de
                experiencia y iteración basada en feedback
              </li>
            </ul>
          </div>
        </section>

        <section className="project-detail__section">
          <h2 className="subsection-title-with-border">INVESTIGACIÓN</h2>

          <div className="project-detail__understanding">
            <p className="understanding-text">
              Realicé un{' '}
              <strong style={{ fontWeight: 600 }}>análisis competitivo</strong>{' '}
              de juegos de plataformas exitosos y apliqué{' '}
              <strong style={{ fontWeight: 600 }}>
                encuestas con preguntas cuantitativas
              </strong>{' '}
              a jugadores casuales para entender sus expectativas y
              frustraciones con las interfaces de juegos móviles.
            </p>
            <div className="understanding-image">
              <img
                src="/assets/images/projects/project1/research.png"
                alt="Investigación de usuario"
              />
            </div>

            <h3 className="subsection-title">PUNTOS DÉBILES</h3>
            <ol className="key-issues-list">
              <li className="key-issue-item">
                Los jugadores se frustran con{' '}
                <strong style={{ fontWeight: 600 }}>
                  controles que no responden de manera consistente
                </strong>
              </li>
              <li className="key-issue-item">
                La falta de{' '}
                <strong style={{ fontWeight: 600 }}>
                  feedback visual claro
                </strong>{' '}
                sobre el progreso causa abandono
              </li>
              <li className="key-issue-item">
                Las{' '}
                <strong style={{ fontWeight: 600 }}>
                  interfaces sobrecargadas
                </strong>{' '}
                distraen del gameplay principal
              </li>
            </ol>

            <h3 className="subsection-title">OPORTUNIDADES</h3>
            <ol className="key-issues-list">
              <li className="key-issue-item">
                Implementación de{' '}
                <strong style={{ fontWeight: 600 }}>
                  controles gestuales intuitivos y responsivos
                </strong>
              </li>
              <li className="key-issue-item">
                Integración de{' '}
                <strong style={{ fontWeight: 600 }}>efectos visuales</strong>{' '}
                que enriquezcan la experiencia de juego
              </li>
              <li className="key-issue-item">
                Diseño de un{' '}
                <strong style={{ fontWeight: 600 }}>
                  sistema de progreso visual
                </strong>{' '}
                que motive al jugador
              </li>
            </ol>

            <h3 className="subsection-title">ANÁLISIS COMPETITIVO</h3>
            <div className="project-detail__competition">
              <div className="competitive-table">
                <div className="competitive-row competitive-row--names">
                  <div className="competitive-cell competitive-cell--empty"></div>
                  <div className="competitive-cell competitive-cell--name">
                    <h3 className="competitor-name">Alto's Odyssey</h3>
                  </div>
                  <div className="competitive-cell competitive-cell--name">
                    <h3 className="competitor-name">Doodle Jump</h3>
                  </div>
                  <div className="competitive-cell competitive-cell--name">
                    <h3 className="competitor-name">Jump King Mobile</h3>
                  </div>
                </div>

                <div className="competitive-row competitive-row--overview">
                  <div className="competitive-cell competitive-cell--label"></div>
                  <div
                    className="competitive-cell competitive-cell--images"
                    data-competitor="alto"
                  >
                    <div className="competitor-images">
                      <img
                        src="/assets/images/projects/project1/competitor/competitor1.png"
                        alt="Alto's Odyssey UI"
                      />
                    </div>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--images"
                    data-competitor="doodle"
                  >
                    <div className="competitor-images">
                      <img
                        src="/assets/images/projects/project1/competitor/competitor2.png"
                        alt="Doodle Jump UI"
                      />
                    </div>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--images"
                    data-competitor="jumpking"
                  >
                    <div className="competitor-images">
                      <img
                        src="/assets/images/projects/project1/competitor/competitor3.png"
                        alt="Jump King Mobile UI"
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
                    data-competitor="alto"
                  >
                    <p className="competitor-description">
                      Endless runner con controles de tap y hold, enfocado en
                      atmosfera zen
                    </p>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="doodle"
                  >
                    <p className="competitor-description">
                      Plataformero infinito con controles de inclinación y tap
                      simple
                    </p>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="jumpking"
                  >
                    <p className="competitor-description">
                      Plataformero desafiante con controles precisos de salto y
                      caída
                    </p>
                  </div>
                </div>

                <div className="competitive-row competitive-row--strengths">
                  <div className="competitive-cell competitive-cell--label">
                    <h4 className="row-label">FORTALEZAS</h4>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="alto"
                  >
                    <ul className="competitor-list strengths">
                      <li>Interfaz completamente minimalista</li>
                      <li>Un solo control táctil intuitivo</li>
                      <li>Efectos visuales atmosféricos</li>
                      <li>Experiencia zen sin distracciones</li>
                    </ul>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="doodle"
                  >
                    <ul className="competitor-list strengths">
                      <li>Controles ultra simples (inclinación)</li>
                      <li>HUD mínimo no invasivo</li>
                      <li>Feedback visual claro al saltar</li>
                      <li>Progresión vertical satisfactoria</li>
                    </ul>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="jumpking"
                  >
                    <ul className="competitor-list strengths">
                      <li>Controles precisos y responsivos</li>
                      <li>Feedback táctil excelente</li>
                      <li>Interfaz que no obstruye gameplay</li>
                      <li>Sistema de progreso visual claro</li>
                    </ul>
                  </div>
                </div>

                <div className="competitive-row competitive-row--weaknesses">
                  <div className="competitive-cell competitive-cell--label">
                    <h4 className="row-label">DEBILIDADES</h4>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="alto"
                  >
                    <ul className="competitor-list weaknesses">
                      <li>Falta de variedad en mecánicas</li>
                      <li>Puede resultar demasiado minimalista</li>
                      <li>Limitado sistema de progresión</li>
                    </ul>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="doodle"
                  >
                    <ul className="competitor-list weaknesses">
                      <li>Controles de inclinación imprecisos</li>
                      <li>Gráficos básicos y anticuados</li>
                      <li>Falta de feedback visual moderno</li>
                    </ul>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="jumpking"
                  >
                    <ul className="competitor-list weaknesses">
                      <li>Curva de dificultad muy pronunciada</li>
                      <li>Puede generar frustración extrema</li>
                      <li>No optimizado para sesiones cortas</li>
                    </ul>
                  </div>
                </div>

                <div className="competitive-row competitive-row--audience">
                  <div className="competitive-cell competitive-cell--label">
                    <h4 className="row-label">AUDIENCIA OBJETIVO</h4>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="alto"
                  >
                    <div className="competitor-audience">
                      <p>
                        Jugadores casuales que buscan experiencias relajantes
                      </p>
                    </div>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="doodle"
                  >
                    <div className="competitor-audience">
                      <p>
                        Jugadores casuales y nostálgicos de juegos clásicos
                        móviles
                      </p>
                    </div>
                  </div>
                  <div
                    className="competitive-cell competitive-cell--content"
                    data-competitor="jumpking"
                  >
                    <div className="competitor-audience">
                      <p>Jugadores hardcore que buscan desafíos extremos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="project-detail__section">
          <h2 className="subsection-title-with-border">PROCESO DE DISEÑO</h2>

          <div className="design-section">
            <h3 className="subsection-title">WIREFRAMES DIGITALES</h3>
            <p className="design-text">
              Desarrollé wireframes enfocados en la jerarquía visual y el flujo
              de información, priorizando elementos críticos del gameplay.
            </p>
            <div className="design-image">
              <img
                src="/assets/images/projects/project1/wireframes.png"
                alt="Wireframes digitales"
              />
            </div>
          </div>

          <div className="design-section">
            <h3 className="subsection-title">USER FLOW</h3>
            <p className="design-text">
              Mapeé cada punto de interacción desde el primer lanzamiento hasta
              la mecánica de rescate de princesas.
            </p>
            <div className="design-image">
              <img
                src="/assets/images/projects/project1/userflow.svg"
                alt="Flujo de usuario"
                onClick={() =>
                  openImageModal(
                    '/assets/images/projects/project1/userflow.svg'
                  )
                }
                className="clickable-image"
              />
            </div>
          </div>
        </section>

        <section className="project-detail__section">
          <h2 className="subsection-title-with-border">
            ELEMENTOS DE UX/UI DESARROLLADOS
          </h2>

          <div className="design-section">
            <h3 className="subsection-title">INTERFAZ DE JUEGO (HUD)</h3>
            <p className="design-text">
              El HUD de este juego de plataformas 2D en Unity está diseñado para
              ser minimalista y funcional. En lugar de mostrar información
              tradicional como vidas o puntaje, se enfoca en cuadros de diálogo,
              íconos y textos contextuales que acompañan la exploración y la
              narrativa. Estos elementos aparecen en momentos clave, guiando al
              jugador sin saturar la pantalla ni interrumpir la jugabilidad.
            </p>
            <div className="design-image">
              <img
                src="/assets/images/projects/project1/game-hud.png"
                alt="Interfaz de juego HUD"
              />
            </div>
          </div>
        </section>

        <section className="project-detail__section">
          <h2 className="subsection-title-with-border">
            DECISIONES DE DISEÑO JUSTIFICADAS
          </h2>
          <div className="design-section">
            <h3 className="subsection-title">PALETA DE COLORES</h3>
            <p className="design-text">
              Esta paleta de colores corresponde al escenario del juego. Los
              tonos fueron seleccionados para crear la ambientación adecuada y
              mantener la coherencia visual del entorno.
            </p>
            <div className="design-image">
              <img
                src="/assets/images/projects/project1/color-palette.png"
                alt="Paleta de colores"
              />
            </div>
          </div>
          <div className="design-section">
            <h3 className="subsection-title">TIPOGRAFÍA</h3>
            <p className="design-text">
              La tipografía fue diseñada específicamente para este juego. No se
              utilizó ninguna fuente existente, sino que cada letra fue dibujada
              y desarrollada desde cero para capturar la esencia única del
              proyecto y crear una identidad visual distintiva que complementara
              perfectamente la experiencia de juego.
            </p>
            <div className="design-image">
              <img
                src="/assets/images/projects/project1/typography.png"
                alt="Tipografía"
              />
            </div>
          </div>

          <div className="design-section">
            <h3 className="subsection-title">
              JERARQUÍA VISUAL Y RESPONSIVE DESIGN
            </h3>

            <div className="project-detail__hierarchy-opportunities">
              <div className="opportunities-grid">
                <div className="opportunity-card">
                  <h4 className="finding-area">Personaje y obstáculos</h4>
                  <p className="finding-description">
                    Elementos principales del gameplay con máxima prioridad
                    visual
                  </p>
                </div>
                <div className="opportunity-card">
                  <h4 className="finding-area">Información (puntuación)</h4>
                  <p className="finding-description">
                    Datos críticos del juego mostrados de forma clara y
                    accesible
                  </p>
                </div>
                <div className="opportunity-card">
                  <h4 className="finding-area">Elementos secundarios</h4>
                  <p className="finding-description">
                    Componentes de apoyo que complementan la experiencia
                  </p>
                </div>
              </div>

              <p className="hierarchy-explanation">
                Priorización clara que adapta elementos según el tamaño de
                pantalla, manteniendo siempre visible la información esencial
                del gameplay.
              </p>
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
                <span className="detail-value">Playtesting presencial</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Ubicación:</span>
                <span className="detail-value">
                  Facultad de Ciencias de la Computación
                </span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Participantes:</span>
                <span className="detail-value">6 jugadores</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Duración:</span>
                <span className="detail-value">15 - 20 minutos por sesión</span>
              </div>
            </div>
          </div>

          <h3 className="subsection-title">PRINCIPALES HALLAZGOS</h3>
          <div className="findings-list">
            <div className="finding-item">
              <h4 className="finding-area">Precisión de Controles</h4>
              <p className="finding-description">
                Los jugadores necesitaban mayor feedback visual para timing
                perfecto en saltos.
              </p>
              <div className="finding-quotes">
                <blockquote className="user-quote">
                  <strong style={{ fontWeight: 600 }}>María, 24:</strong> "No
                  estoy segura si el salto va a alcanzar la plataforma"
                </blockquote>
                <blockquote className="user-quote">
                  <strong style={{ fontWeight: 600 }}>Carlos, 19:</strong> "Me
                  gustaría ver mejor cuándo puedo saltar doble"
                </blockquote>
              </div>
            </div>

            <div className="finding-item">
              <h4 className="finding-area">Progresión y Feedback</h4>
              <p className="finding-description">
                Los jugadores querían más claridad sobre cuántas princesas
                faltaban por rescatar.
              </p>
              <div className="finding-quotes">
                <blockquote className="user-quote">
                  <strong style={{ fontWeight: 600 }}>Ana, 22:</strong> "No sé
                  qué tan cerca estoy de completar el nivel"
                </blockquote>
              </div>
            </div>
          </div>

          <h2 className="subsection-title-with-border">REFINANDO EL DISEÑO</h2>
          <div className="mockups-section">
            <div className="mockup-item">
              <p className="mockup-description">
                Basándome en el feedback del playtesting, refiné la interfaz
                para incluir indicadores más claros de progreso y feedback
                visual mejorado.
              </p>
              <div className="design-decisions">
                <h4 className="decisions-title">DECISIONES DE DISEÑO:</h4>
                <ul className="decisions-list">
                  <li>Agregué indicadores visuales para el timing de salto</li>
                  <li>
                    Implementé un contador de princesas rescatadas más visible
                  </li>
                  <li>
                    Mejoré el contraste de elementos UI para mejor legibilidad
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="project-detail__section">
          <h2 className="subsection-title-with-border">
            IMPLEMENTACIÓN TÉCNICA
          </h2>
          <div className="design-section">
            <h3 className="subsection-title">
              COMPONENTES UNITY DESARROLLADOS
            </h3>
            <pre
              className="code-block"
              style={{
                fontSize: '12px',
                userSelect: 'none',
                WebkitUserSelect: 'none',
                MozUserSelect: 'none',
                msUserSelect: 'none',
                pointerEvents: 'none',
              }}
            >
              <code>{`using UnityEngine;
using UnityEngine.UI;

public class GameScoreManager : MonoBehaviour
{
    [Header("UI Referencias")]
    [SerializeField] private Text recordScoreText;
    [SerializeField] private Text currentScoreText;
    [SerializeField] private Text gameOverScoreText;
    [SerializeField] private GameObject gameOverPanel;
    
    [Header("Configuración de Puntuación")]
    [SerializeField] private int pointsPerPlatform = 1;
    
    // Variables de puntuación
    private int recordScore = 0; // Récord inicial
    private int currentScore = 0;  // Puntuación actual de la partida
    private bool isGameActive = true;
    
    // Eventos para notificar cambios de puntuación
    public System.Action<int> OnCurrentScoreChanged;
    public System.Action<int> OnRecordBroken;
    
    // Singleton para fácil acceso desde otros scripts
    public static GameScoreManager Instance;
    
    private void Awake()
    {
        // Configurar Singleton
        if (Instance == null)
        {
            Instance = this;
            DontDestroyOnLoad(gameObject);
        }
        else
        {
            Destroy(gameObject);
        }
    }
    
    private void Start()
    {
        InitializeGame();
    }
    
    private void InitializeGame()
    {
        // Cargar el récord guardado
        LoadRecordScore();
        
        // Resetear puntuación actual
        currentScore = 0;
        isGameActive = true;
        
        // Ocultar panel de Game Over
        if (gameOverPanel != null)
            gameOverPanel.SetActive(false);
        
        // Actualizar UI
        UpdateUI();
    }
    
    public void AddScore()
    {
        if (!isGameActive) return;
        
        // Incrementar puntuación actual
        currentScore += pointsPerPlatform;
        
        // Verificar si se ha superado el récord
        if (currentScore > recordScore)
        {
            // Actualizar el récord en tiempo real
            recordScore = currentScore;
            
            // Guardar el nuevo récord
            SaveRecordScore();
            
            // Notificar que se rompió el récord
            OnRecordBroken?.Invoke(recordScore);
            
            Debug.Log($"¡Nuevo récord! {recordScore} puntos");
        }
        
        // Notificar cambio de puntuación
        OnCurrentScoreChanged?.Invoke(currentScore);
        
        // Actualizar UI
        UpdateUI();
    }
    
    public void GameOver()
    {
        isGameActive = false;
        
        // Mostrar panel de Game Over con la puntuación final
        if (gameOverPanel != null)
        {
            gameOverPanel.SetActive(true);
            
            if (gameOverScoreText != null)
            {
                if (currentScore > recordScore)
                {
                    gameOverScoreText.text = $"¡Nuevo Récord!\nPuntuación: {currentScore}";
                }
                else
                {
                    gameOverScoreText.text = $"Puntuación Final: {currentScore}\nRécord: {recordScore}";
                }
            }
        }
        
        Debug.Log($"Game Over - Puntuación final: {currentScore}, Récord: {recordScore}");
    }
    
    public void RestartGame()
    {
        InitializeGame();
    }
    
    private void UpdateUI()
    {
        // Actualizar texto del récord
        if (recordScoreText != null)
            recordScoreText.text = $"Récord: {recordScore}";
        
        // Actualizar texto de puntuación actual
        if (currentScoreText != null)
            currentScoreText.text = $"Puntuación: {currentScore}";
    }
    
    private void SaveRecordScore()
    {
        PlayerPrefs.SetInt("RecordScore", recordScore);
        PlayerPrefs.Save();
    }
    
    private void LoadRecordScore()
    {
        recordScore = PlayerPrefs.GetInt("RecordScore", 0); // 0 como valor por defecto para nuevos jugadores
    }
    
    // Métodos públicos para obtener información
    public int GetCurrentScore()
    {
        return currentScore;
    }
    
    public int GetRecordScore()
    {
        return recordScore;
    }
    
    public bool IsNewRecord()
    {
        return currentScore > recordScore;
    }
    
    public bool IsGameActive()
    {
        return isGameActive;
    }
    
    // Método para resetear el récord (útil para testing)
    [ContextMenu("Reset Record Score")]
    public void ResetRecordScore()
    {
        recordScore = 0;
        SaveRecordScore();
        UpdateUI();
        Debug.Log("Récord reseteado a 0 puntos");
    }
    
    // Método para agregar puntos manualmente (útil para testing)
    [ContextMenu("Add Score")]
    public void AddScoreTest()
    {
        AddScore();
    }
}`}</code>
            </pre>
          </div>
          <div className="screen-variations">
            <h3 className="subsection-title">OPTIMIZACIONES DE RENDIMIENTO</h3>
            <ul className="strategy-decisions">
              <li className="strategy-item">
                Object pooling para efectos de UI y partículas
              </li>
              <li className="strategy-item">
                Canvas estáticos para elementos que no cambian
              </li>
              <li className="strategy-item">
                Sprites atlas optimizados para reducir draw calls
              </li>
              <li className="strategy-item">
                Sistema de eventos para comunicación UI-Gameplay
              </li>
            </ul>
          </div>
        </section>

        <section className="project-detail__section">
          <h2 className="subsection-title-with-border">PROTOTIPO</h2>
          <div className="gameplay-demo">
            <div className="demo-section">
              <div className="demo-image">
                <img
                  src="/assets/images/projects/project1/gameplay/gameplay-demo-1.gif"
                  alt="Demostración del menú principal"
                  draggable="false"
                  className="no-save"
                  onContextMenu={e => e.preventDefault()}
                  onDragStart={e => e.preventDefault()}
                  onSelectStart={e => e.preventDefault()}
                />
              </div>
              <p className="demo-caption">Menú del juego</p>
            </div>
            <div className="demo-section">
              <div className="demo-image">
                <img
                  src="/assets/images/projects/project1/gameplay/gameplay-demo-2.gif"
                  alt="Demostración del gameplay"
                  draggable="false"
                  className="no-save"
                  onContextMenu={e => e.preventDefault()}
                  onDragStart={e => e.preventDefault()}
                  onSelectStart={e => e.preventDefault()}
                />
              </div>
              <p className="demo-caption">Parte del gameplay</p>
            </div>
          </div>
        </section>

        <section className="project-detail__section">
          <h2 className="subsection-title-with-border">
            RESULTADOS Y REFLEXIÓN
          </h2>

          <div className="results-section">
            <h3 className="subsection-title">CONCLUSIONES</h3>
            <p className="conclusion-text">
              Logré crear una{' '}
              <strong style={{ fontWeight: 600 }}>
                experiencia de usuario fluida
              </strong>{' '}
              que mantiene a los jugadores comprometidos mediante{' '}
              <strong style={{ fontWeight: 600 }}>controles precisos</strong> y
              un sistema de retroalimentación visual claro y coherente. Cada
              acción del jugador tiene una{' '}
              <strong style={{ fontWeight: 600 }}>
                respuesta inmediata y comprensible
              </strong>
              , lo que refuerza la sensación de control y dominio dentro del
              juego. La{' '}
              <strong style={{ fontWeight: 600 }}>interfaz minimalista</strong>{' '}
              no solo evita distracciones innecesarias, sino que también
              complementa perfectamente la{' '}
              <strong style={{ fontWeight: 600 }}>estética retro</strong> del
              juego, integrándose de manera natural con su estilo visual y
              reforzando la inmersión. Los elementos de la UI aparecen solo
              cuando son necesarios, permitiendo que la atención del jugador se
              centre en la acción y la exploración del entorno.
            </p>
          </div>

          <div className="results-section">
            <h3 className="subsection-title">IMPACTO</h3>
            <p className="impact-text">
              El juego alcanzó una{' '}
              <strong style={{ fontWeight: 600 }}>retención del 65%</strong>{' '}
              durante la primera semana, con un{' '}
              <strong style={{ fontWeight: 600 }}>
                tiempo promedio de sesión de 12 minutos
              </strong>
              , lo que indica un alto nivel de compromiso por parte de los
              jugadores. En las evaluaciones y comentarios, los usuarios
              destacaron especialmente la{' '}
              <strong style={{ fontWeight: 600 }}>
                precisión de los controles
              </strong>
              , que permitió una experiencia de juego fluida y satisfactoria.
            </p>
          </div>

          <div className="results-section">
            <h3 className="subsection-title">LO QUE APRENDÍ</h3>
            <p className="learnings-text">
              Este proyecto me enseñó la importancia crucial del{' '}
              <strong style={{ fontWeight: 600 }}>feedback inmediato</strong> en
              juegos que requieren precisión, donde cada acción del jugador debe
              ser reflejada claramente para mantener la{' '}
              <strong style={{ fontWeight: 600 }}>sensación de control</strong>.
              Además, aprendí a balancear cuidadosamente la cantidad de
              información mostrada en pantalla, priorizando solo lo esencial
              para evitar saturar al jugador y mantener una{' '}
              <strong style={{ fontWeight: 600 }}>simplicidad visual</strong>{' '}
              que favorezca la inmersión y la concentración en la jugabilidad.
            </p>

            <div className="lessons-grid">
              <div className="lessons-section">
                <h4 className="lessons-title">Lecciones profesionales</h4>
                <ul className="lessons-list">
                  <li className="lesson-item">
                    Realizar{' '}
                    <strong style={{ fontWeight: 600 }}>
                      pruebas constantes desde etapas tempranas
                    </strong>{' '}
                    ayuda a identificar problemas y mejorar la jugabilidad
                    basándose en la{' '}
                    <strong style={{ fontWeight: 600 }}>
                      experiencia real de los jugadores
                    </strong>
                    .
                  </li>
                  <li className="lesson-item">
                    Una{' '}
                    <strong style={{ fontWeight: 600 }}>UI optimizada</strong>{' '}
                    considera las necesidades tanto de jugadores novatos como
                    experimentados, ofreciendo{' '}
                    <strong style={{ fontWeight: 600 }}>
                      claridad y opciones adaptables
                    </strong>{' '}
                    para mejorar la experiencia de todos.
                  </li>
                </ul>
              </div>

              <div className="lessons-section">
                <h4 className="lessons-title">Lecciones personales</h4>
                <ul className="lessons-list">
                  <li className="lesson-item">
                    Comprendí mejor las{' '}
                    <strong style={{ fontWeight: 600 }}>
                      distintas formas en que los jugadores interactúan
                    </strong>{' '}
                    con el juego y cómo adaptar la experiencia para atender esas
                    diferencias.
                  </li>
                  <li className="lesson-item">
                    Mejoré mi capacidad para hacer{' '}
                    <strong style={{ fontWeight: 600 }}>
                      ajustes ágiles en el diseño
                    </strong>{' '}
                    del juego tomando en cuenta las opiniones recibidas durante
                    las pruebas.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="results-section">
            <h3 className="subsection-title">PRÓXIMOS PASOS</h3>
            <ol className="next-steps-list">
              <li className="next-step-item">
                Desarrollar un{' '}
                <strong style={{ fontWeight: 600 }}>
                  sistema que motive al jugador
                </strong>{' '}
                mediante logros y recompensas para aumentar el compromiso y la
                rejugabilidad.
              </li>
              <li className="next-step-item">
                Crear un{' '}
                <strong style={{ fontWeight: 600 }}>tutorial dinámico</strong>{' '}
                que guíe a los nuevos jugadores de forma clara y práctica,
                facilitando su adaptación al juego.
              </li>
              <li className="next-step-item">
                Ajustar la interfaz para que se adapte correctamente a{' '}
                <strong style={{ fontWeight: 600 }}>
                  diferentes tamaños de pantalla
                </strong>
                , garantizando una experiencia cómoda en tablets.
              </li>
            </ol>
          </div>

          <div className="results-section">
            <h3 className="subsection-title">CONSIDERACIONES FINALES</h3>
            <p className="final-text">
              Mikky Jump es un ejemplo de cómo un{' '}
              <strong style={{ fontWeight: 600 }}>
                diseño centrado en el usuario{' '}
              </strong>
              puede elevar significativamente la experiencia de juego. El reto
              principal fue equilibrar una{' '}
              <strong style={{ fontWeight: 600 }}>
                estética retro con una funcionalidad moderna
              </strong>
              , diseñando interfaces que resultaran{' '}
              <strong style={{ fontWeight: 600 }}>
                invisibles pero efectivas
              </strong>
              , y optimizando cada elemento para un{' '}
              <strong style={{ fontWeight: 600 }}>
                rendimiento óptimo en dispositivos móviles
              </strong>
              . La{' '}
              <strong style={{ fontWeight: 600 }}>
                colaboración cercana con el equipo de desarrollo
              </strong>{' '}
              de Infiedie fue fundamental para lograr una integración coherente
              entre diseño y funcionalidad. Además, la combinación de{' '}
              <strong style={{ fontWeight: 600 }}>
                investigación, prototipado rápido y pruebas constantes
              </strong>{' '}
              fue clave para alcanzar los objetivos del proyecto.
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

export default ProjectDetail1;
