import React, { useEffect } from 'react';
import { useScrollReveal } from '../../context/ScrollRevealContext';
import './About.scss';

const About = () => {
  const { revealRef } = useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title =
      'Alfredo García Diseñador UX/UI & Desarrollador - Acerca de mí';
  }, []);

  return (
    <main className="about">
      <div className="container">
        <div className="about__content">
          <header className="about__header" ref={revealRef}>
            <div className="title-bio-wrapper">
              <h1 className="section-title">Hola 👋</h1>
            </div>
          </header>

          <div className="about__profile">
            <div className="about__bio">
              <p
                className="about__bio-text"
                ref={revealRef}
                style={{ transitionDelay: '100ms' }}
              >
                Soy diseñador UX/UI y desarrollador multidisciplinario que
                combina la sensibilidad del diseño centrado en el usuario con la
                solidez técnica del desarrollo.
              </p>
              <p
                className="about__bio-text"
                ref={revealRef}
                style={{ transitionDelay: '200ms' }}
              >
                Acompaño todo el proceso, desde la investigación inicial hasta
                la implementación, incluyendo wireframes, prototipos y código.
                Esto me permite tomar decisiones de diseño fundamentadas y crear
                experiencias digitales que son intuitivas y funcionales.
              </p>
              <p
                className="about__bio-text"
                ref={revealRef}
                style={{ transitionDelay: '300ms' }}
              >
                Estudié en la{' '}
                <a
                  href="https://www.cs.buap.mx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about__link"
                >
                  Facultad de Ciencias de la Computación de la Benemérita
                  Universidad Autónoma de Puebla
                </a>
                , donde completé la{' '}
                <strong>Ingeniería en Tecnologías de la Información</strong>.
                Posteriormente, me formé en el programa{' '}
                <strong>Google UX Design Professional</strong>, donde adquirí
                experiencia en la interacción entre las personas y la
                tecnología, enfocándome en diseñar soluciones que realmente
                respondan a las necesidades de los usuarios.
              </p>
              <p
                className="about__bio-text"
                ref={revealRef}
                style={{ transitionDelay: '400ms' }}
              >
                Gracias por tomarse el tiempo para visitar mi sitio.
              </p>
            </div>

            <div
              className="about__image"
              ref={revealRef}
              style={{ transitionDelay: '500ms' }}
            >
              <img
                src="/assets/images/profile/profile2.jpg"
                alt="Foto de perfil"
                draggable="false"
                className="no-save"
                onContextMenu={e => e.preventDefault()}
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

          <div
            className="about__details"
            ref={revealRef}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="about__download">
              <a
                href="/resume/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn about__view-cv-btn"
              >
                Ver CV completo
              </a>
            </div>
          </div>

          <div
            className="divider"
            ref={revealRef}
            style={{ transitionDelay: '300ms' }}
          ></div>

          <div className="about__philosophy">
            <h3
              className="about__question"
              ref={revealRef}
              style={{ transitionDelay: '400ms' }}
            >
              ¿Qué significa el UX para ti? ¿Cómo se lo explicarías a personas
              que no son de la industria?
            </h3>
            <p
              className="about__answer"
              ref={revealRef}
              style={{ transitionDelay: '500ms' }}
            >
              Para mí, UX es el arte y la ciencia de crear experiencias
              digitales que realmente funcionen para las personas. Va mucho más
              allá de hacer que algo se vea bonito: se trata de entender cómo
              piensan, sienten y se comportan los usuarios cuando interactúan
              con un producto o servicio. UX significa pensar en cada momento de
              esa interacción: desde el primer contacto hasta completar una
              tarea, e incluso después. Se trata de resolver problemas reales de
              manera intuitiva, eliminando fricciones innecesarias.
            </p>
            <p
              className="about__answer"
              ref={revealRef}
              style={{ transitionDelay: '600ms' }}
            >
              Si me preguntaran a qué me dedico, les diría:
              <strong>
                "¿Te has frustrado alguna vez con una app que no entiendes? Mi
                trabajo es evitar que eso pase"
              </strong>
              . El buen diseño UX es casi invisible: cuando algo está bien
              diseñado, simplemente funciona y ni siquiera piensas en ello. Es
              como cuando usas una puerta y sabes instintivamente si debes
              empujar o jalar. Eso es lo que busco: crear experiencias digitales
              tan naturales que parezca que no hay diseño de por medio, solo
              personas haciendo lo que necesitan hacer, sin obstáculos ni
              confusiones
            </p>
            <div
              className="about__quote"
              ref={revealRef}
              style={{ transitionDelay: '700ms' }}
            >
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
