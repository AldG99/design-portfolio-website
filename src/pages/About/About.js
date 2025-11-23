import React, { useEffect } from 'react';
import { useScrollReveal } from '../../context/ScrollRevealContext';
import './About.scss';

const About = () => {
  const { revealRef } = useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Acerca de mí — Alfredo García';
  }, []);

  const openResume = e => {
    e.preventDefault();

    const googleDriveUrl =
      'https://drive.google.com/file/d/1nuPLOD7RKLlz4rYJ1aY8FCXs9Q5q34s8/view?usp=sharing';

    window.open(googleDriveUrl, '_blank', 'noopener,noreferrer');
  };

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
              <p className="about__bio-text" ref={revealRef}>
                Soy desarrollador y diseñador UX/UI multidisciplinario que
                combina la sensibilidad del diseño centrado en el usuario con la
                solidez técnica del desarrollo.
              </p>
              <p className="about__bio-text" ref={revealRef}>
                Para el equipo de{' '}
                <a
                  href="https://indie-pixel-ten.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about__gakati-link"
                >
                  <strong style={{ fontWeight: 600 }}>GAKATI</strong>
                </a>
                , diseñé y desarrollé soluciones centradas en el usuario,
                entregando funcionalidades de manera ágil por sprints.
              </p>
              <p className="about__bio-text" ref={revealRef}>
                Acompaño todo el proceso, desde la investigación hasta la
                implementación, creando wireframes, prototipos y código para
                experiencias digitales intuitivas y funcionales.
              </p>
              <p className="about__bio-text" ref={revealRef}>
                Estudié en la{' '}
                <a
                  href="https://www.cs.buap.mx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about__link"
                  style={{ fontWeight: 600 }}
                >
                  Facultad de Ciencias de la Computación de la Benemérita
                  Universidad Autónoma de Puebla
                </a>
                , donde completé la{' '}
                <strong style={{ fontWeight: 600 }}>
                  Ingeniería en Tecnologías de la Información
                </strong>
                . Posteriormente, me formé en el programa{' '}
                <a
                  href="https://www.credly.com/badges/c15aa494-4574-41d9-b97d-a862a9ccbeb6/public_url"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about__link"
                  style={{ fontWeight: 600 }}
                >
                  Google UX Design Professional
                </a>
                , donde adquirí experiencia en la interacción entre las personas
                y la tecnología, enfocándome en diseñar soluciones que realmente
                respondan a las necesidades de los usuarios.
              </p>
              <p className="about__bio-text" ref={revealRef}>
                Gracias por tomarse el tiempo para visitar mi sitio.
              </p>
            </div>

            <div className="about__image" ref={revealRef}>
              <img
                src="/assets/images/photo/photo1.jpg"
                alt="Foto de la FCC"
                draggable="false"
                className="no-save"
                onContextMenu={e => e.preventDefault()}
              />
            </div>
          </div>

          <div className="about__details" ref={revealRef}>
            <div className="about__download">
              <button onClick={openResume} className="btn about__view-cv-btn">
                Ver CV completo
              </button>
            </div>
          </div>

          <div className="divider" ref={revealRef}></div>

          <div className="about__philosophy">
            <h3 className="about__question" ref={revealRef}>
              ¿Qué significa el UX para ti? ¿Cómo se lo explicarías a personas
              que no son de la industria?
            </h3>
            <p className="about__answer" ref={revealRef}>
              Para mí, UX es el arte y la ciencia de crear experiencias
              digitales que realmente funcionen para las personas. Va mucho más
              allá de hacer que algo se vea bonito: se trata de entender cómo
              piensan, sienten y se comportan los usuarios cuando interactúan
              con un producto o servicio. UX significa pensar en cada momento de
              esa interacción: desde el primer contacto hasta completar una
              tarea, e incluso después. Se trata de resolver problemas reales de
              manera intuitiva, eliminando fricciones innecesarias.
            </p>
            <p className="about__answer" ref={revealRef}>
              Si me preguntaran a qué me dedico, les diría:{' '}
              <strong style={{ fontWeight: 600 }}>
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
            <div className="about__quote" ref={revealRef}>
              <blockquote>
                "One of the stated goals for the Macintosh project was that the
                computer should be friendly and appeal to non-technical users."
                <cite>— Susan Kare</cite>
              </blockquote>
            </div>

            <div className="about__macintosh-image" ref={revealRef}>
              <img
                src="/assets/images/macintosh/macintosh.png"
                alt="Apple Macintosh"
                draggable="false"
                className="no-save"
                onContextMenu={e => e.preventDefault()}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
