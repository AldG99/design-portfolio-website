import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import './About.scss';

const About = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    // Set document title
    document.title = 'Portafolio | Acerca de mí';
  }, []);

  return (
    <main className="about">
      <div className="container">
        {/* El header ahora usa la misma estructura de contenedor que el contenido */}
        <div className="about__content">
          <header className="about__header">
            <h1 className="section-title">Hola 👋</h1>
          </header>

          <div className="about__profile">
            <div className="about__bio">
              <p className="about__bio-text">
                Soy <strong>curioso</strong> y <strong>comprometido</strong> con{' '}
                <strong>diseño</strong> y <strong>tecnología</strong>. Me
                interesa entender cómo piensan las personas para crear{' '}
                <strong>experiencias digitales funcionales</strong>.
              </p>
              <p className="about__bio-text">
                Me considero <strong>detallista</strong> y busco mejorar cada
                aspecto del producto, desde su <strong>estructura</strong> hasta
                los pequeños <strong>elementos visuales</strong>.
              </p>
              <p className="about__bio-text">
                Me gusta <strong>colaborar</strong> con otros profesionales,
                compartir ideas y construir soluciones que combinan{' '}
                <strong>funcionalidad</strong>, <strong>estética</strong> e
                <strong> innovación</strong>.
              </p>
              <p className="about__bio-text">
                Estudié en la{' '}
                <a
                  href="https://www.cs.buap.mx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about__link"
                >
                  Facultad de Ciencias de la Computación de la Benemérita
                  Universidad Autónoma de Puebla
                </a>{' '}
                y me formé en el programa{' '}
                <strong>Google UX Design Professional</strong>, donde, durante
                este recorrido, adquirí experiencia en la conexión entre
                personas y tecnología, enfocándome en crear{' '}
                <strong>experiencias significativas</strong> más allá de las
                interfaces.
              </p>
              <p className="about__bio-text">
                Gracias por tomarse el tiempo para visitar mi sitio.
              </p>
            </div>

            <div className="about__image">
              <img
                src="/assets/images/profile/profile2.jpg"
                alt="Foto de perfil"
              />
              <div className="about__image-caption">
                <p>
                  <strong>Locación:</strong>{' '}
                  <a
                    href="https://bibliotecas.buap.mx/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="about__caption-link"
                  >
                    Biblioteca Central BUAP 2024
                  </a>
                </p>
                <p>
                  Presente mi trabajo de diseño de tecnología educativa CELL-AR.
                </p>
              </div>
            </div>
          </div>

          <div className="about__details">
            <div className="about__experience">
              <h3 className="about__section-title">Experiencia Laboral</h3>
              <ul className="about__list">
                <li className="about__list-item">
                  <span className="about__company">Empresa Actual</span>
                  <span className="about__position">Diseñador UX/UI</span>
                  <span className="about__period">2022 - Presente</span>
                </li>
                <li className="about__list-item">
                  <span className="about__company">Empresa Anterior</span>
                  <span className="about__position">Diseñador UX/UI</span>
                  <span className="about__period">2019 - 2022</span>
                </li>
              </ul>
            </div>

            <div className="about__education">
              <h3 className="about__section-title">Educación</h3>
              <ul className="about__list">
                <li className="about__list-item">
                  <span className="about__institution">UNI</span>
                  <span className="about__degree">Licenciatura en</span>
                  <span className="about__period">2015 - 2019</span>
                </li>
                <li className="about__list-item">
                  <span className="about__institution">Academia de Diseño</span>
                  <span className="about__degree">
                    Certificación en UX/UI Design
                  </span>
                  <span className="about__period">2018</span>
                </li>
              </ul>
            </div>

            <div className="about__download">
              <a
                href="/assets/resume/cv.pdf"
                download
                className="btn about__download-btn"
              >
                <FontAwesomeIcon icon={faDownload} /> Descargar CV
              </a>
            </div>
          </div>

          <div className="divider"></div>

          <div className="about__philosophy">
            <h3 className="about__question">
              ¿Qué significa el UX para ti? ¿Cómo se lo explicarías a personas
              que no son de la industria?
            </h3>
            <p className="about__answer">
              Para mí, el UX es básicamente crear tecnología que funcione{' '}
              <strong>con las personas</strong>, no contra ellas. Es como cuando
              diseñas una silla: no solo debe verse bonita, sino que debe ser{' '}
              <strong>cómoda</strong> para sentarse,
              <strong> resistente</strong> para no romperse y{' '}
              <strong>adaptarse</strong> al espacio donde irá. Con las apps y
              sitios web es igual - se trata de entender cómo piensa la gente
              real para hacer cosas que de verdad les sirvan y se sientan
              naturales al usarlas.
            </p>
            <p className="about__answer">
              Si me preguntara mi abuela a qué me dedico, le diría: "
              <strong>
                ¿Te has frustrado alguna vez con una app que no entiendes? Mi
                trabajo es evitar que eso pase
              </strong>
              ". El buen diseño UX es casi <strong>invisible</strong> - cuando
              algo está bien diseñado, simplemente funciona y ni siquiera
              piensas en ello. Como cuando usas una puerta y sabes
              instintivamente si debes empujar o jalar. Eso es lo que busco:
              crear experiencias digitales tan <strong>naturales</strong> que
              parezca que no hay diseño de por medio, solo personas haciendo lo
              que necesitan hacer, sin obstáculos ni confusiones.
            </p>

            <div className="about__quote">
              <blockquote>
                "One of the stated goals for the Macintosh project was that the
                computer should be friendly and appeal to non-technical users."
                <cite>— Susan Kare</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
