import React from 'react';
import { Link } from 'react-scroll';
import profileImage from '../../../assets/images/profile/profile.jpg';
import useScrollReveal from '../../../hooks/useScrollReveal';
import Button from '../../common/Button/Button';
import './Hero.scss';

const Hero = () => {
  const titleRef = useScrollReveal({
    direction: 'up',
    distance: 30,
    delay: 100,
  });

  const subtitleRef = useScrollReveal({
    direction: 'up',
    distance: 30,
    delay: 300,
  });

  const buttonsRef = useScrollReveal({
    direction: 'up',
    distance: 30,
    delay: 500,
  });

  const imageRef = useScrollReveal({
    direction: 'right',
    distance: 50,
    delay: 300,
  });

  return (
    <section id="home" className="hero">
      <div className="container hero__container">
        <div className="hero__content">
          <h1 ref={titleRef} className="hero__title">
            <span className="hero__title-greeting">Hola, soy</span>
            <span className="hero__title-name">Nombre Apellido</span>
            <span className="hero__title-profession">
              Desarrollador Frontend
            </span>
          </h1>

          <p ref={subtitleRef} className="hero__subtitle">
            Especializado en crear experiencias digitales atractivas y
            funcionales. Transformando ideas en interfaces modernas con React,
            SCSS y las últimas tecnologías.
          </p>

          <div ref={buttonsRef} className="hero__buttons">
            <Link to="projects" smooth={true} duration={500}>
              <Button variant="primary" size="lg">
                Ver Proyectos
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                  />
                </svg>
              </Button>
            </Link>

            <Link to="contact" smooth={true} duration={500}>
              <Button variant="outline" size="lg">
                Contacto
              </Button>
            </Link>
          </div>

          <div className="hero__social">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
              </svg>
            </a>
          </div>
        </div>

        <div ref={imageRef} className="hero__image-container">
          <div className="hero__image">
            <div className="hero__blob"></div>
            <img
              src={profileImage}
              alt="Mi foto de perfil"
              className="hero__profile-img"
            />
          </div>
        </div>
      </div>

      <div className="hero__scroll-down">
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="hero__scroll-link"
        >
          <span className="hero__scroll-text">Scroll</span>
          <span className="hero__scroll-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
              />
            </svg>
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
