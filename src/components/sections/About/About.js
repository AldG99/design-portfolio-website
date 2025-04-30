import React from 'react';
import { Link } from 'react-scroll';
import Button from '../../common/Button/Button';
import useScrollReveal from '../../../hooks/useScrollReveal';
import './About.scss';

const About = () => {
  const titleRef = useScrollReveal({
    direction: 'up',
    distance: 30,
    delay: 100,
  });

  const contentRef = useScrollReveal({
    direction: 'up',
    distance: 30,
    delay: 300,
  });

  const statsRef = useScrollReveal({
    direction: 'up',
    distance: 30,
    delay: 500,
  });

  const imageRef = useScrollReveal({
    direction: 'left',
    distance: 50,
    delay: 300,
  });

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 ref={titleRef} className="section__title about__title">
          Sobre Mí
        </h2>

        <div className="about__container">
          <div ref={imageRef} className="about__image-container">
            <div className="about__image-wrapper">
              <img
                src="/api/placeholder/600/800"
                alt="Foto profesional"
                className="about__image"
              />
              <div className="about__image-backdrop"></div>
            </div>

            <div className="about__experience">
              <span className="about__experience-number">4+</span>
              <span className="about__experience-text">
                Años de Experiencia
              </span>
            </div>
          </div>

          <div className="about__content">
            <div ref={contentRef} className="about__text">
              <p className="about__description">
                Soy un desarrollador frontend apasionado por crear experiencias
                digitales excepcionales. Con más de 4 años de experiencia, me
                especializo en transformar ideas y diseños en interfaces de
                usuario interactivas y de alto rendimiento.
              </p>

              <p className="about__description">
                Mi enfoque se centra en escribir código limpio y mantenible, con
                especial atención al detalle y la experiencia del usuario.
                Disfruto resolviendo problemas complejos y aprendiendo
                constantemente nuevas tecnologías para mantenerme actualizado en
                esta industria en constante evolución.
              </p>

              <div className="about__buttons">
                <a href="/cv.pdf" download className="about__download-button">
                  <Button
                    variant="primary"
                    size="md"
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                      </svg>
                    }
                  >
                    Descargar CV
                  </Button>
                </a>

                <Link to="contact" smooth={true} duration={500}>
                  <Button variant="outline" size="md">
                    Contacto
                  </Button>
                </Link>
              </div>
            </div>

            <div ref={statsRef} className="about__stats">
              <div className="about__stat">
                <div className="about__stat-number">40+</div>
                <div className="about__stat-text">Proyectos Completados</div>
              </div>

              <div className="about__stat">
                <div className="about__stat-number">15+</div>
                <div className="about__stat-text">Clientes Satisfechos</div>
              </div>

              <div className="about__stat">
                <div className="about__stat-number">20+</div>
                <div className="about__stat-text">Tecnologías Dominadas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
