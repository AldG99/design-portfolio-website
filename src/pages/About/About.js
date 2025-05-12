import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
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
              <p className="about__bio-text">TEXTO</p>
              <p className="about__bio-text">TEXTO</p>
              <p className="about__bio-text">TEXTO</p>
            </div>

            <div className="about__image">
              <img
                src="/assets/images/profile/profile2.jpg"
                alt="Foto de perfil"
              />
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
            <p className="about__answer">TEXT</p>
            <p className="about__answer">TEXT</p>

            <div className="about__quote">
              <blockquote>
                "One of the stated goals for the Macintosh project was that the
                computer should be friendly and appeal to non-technical users."
                <cite>— Susan Kare</cite>
              </blockquote>
            </div>
          </div>

          <div className="about__cta">
            <Link to="/contact" className="btn btn--lg">
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
