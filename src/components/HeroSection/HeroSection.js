import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub,
  faBehance,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useScrollReveal } from '../../context/ScrollRevealContext';
import './HeroSection.scss';

const HeroSection = () => {
  const { revealRef } = useScrollReveal();

  /*
  const getToolClass = tool => {
    const toolLower = tool.toLowerCase();
    if (toolLower.includes('figma')) return 'hero-section__tool--figma';
    if (toolLower.includes('scss')) return 'hero-section__tool--scss';
    if (toolLower.includes('react native'))
      return 'hero-section__tool--react-native';
    if (toolLower.includes('react')) return 'hero-section__tool--react';
    if (toolLower.includes('expo')) return 'hero-section__tool--expo';
    if (toolLower.includes('firebase')) return 'hero-section__tool--firebase';
    if (toolLower.includes('unity')) return 'hero-section__tool--unity';
    if (toolLower.includes('blender')) return 'hero-section__tool--blender';
    return '';
  };

  const tools = [
    'Figma',
    'SCSS',
    'React',
    'React Native Expo',
    'Firebase',
    'Unity',
    'Blender',
  ];
*/

  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-section__content">
          <div className="hero-section__text" ref={revealRef}>
            <div className="hero-name-title-wrapper">
              <h1 className="hero-section__name">Alfredo García</h1>
              <h2 className="hero-section__profession">
                Desarrollador & Diseñador UX/UI
              </h2>
            </div>
            {/*
            <p className="hero-section__tools">
              {tools.map((tool, index) => (
                <span
                  key={index}
                  className={`hero-section__tool ${getToolClass(tool)}`}
                  ref={revealRef}
                >
                  {tool}
                </span>
              ))}
            </p>
            */}
            <p className="hero-section__bio">
              Desarrollo con React y React Native, creando interfaces intuitivas
              que combinan experiencia de usuario y soluciones digitales
              innovadoras, con enfoque en investigación de usuarios.
            </p>
            <p className="hero-section__bio">
              Me motiva resolver problemas y diseñar soluciones que dejen un
              impacto en la vida de las personas.{' '}
              <Link
                to="/acerca-de-mí"
                className="hero-section__about-link"
                style={{ fontWeight: 600 }}
              >
                Acerca de mí 📖 👉
              </Link>
            </p>
            <div className="hero-section__social" ref={revealRef}>
              <a
                href="https://www.linkedin.com/in/ad-g099/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-section__social-link"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://www.behance.net/alfredogarcia99"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-section__social-link"
                aria-label="Behance"
              >
                <FontAwesomeIcon icon={faBehance} />
              </a>
              <a
                href="https://github.com/AldG99"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-section__social-link"
                aria-label="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="mailto:a.garciaglz17@gmail.com"
                className="hero-section__social-link"
                aria-label="Correo electrónico"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </div>
          <div className="hero-section__image" ref={revealRef}>
            <img
              src="/assets/images/profile/profile1.jpg"
              alt="Foto de perfil"
              draggable="false"
              className="no-save"
              onContextMenu={e => e.preventDefault()}
            />
          </div>
        </div>
        <div className="hero-section__divider" ref={revealRef}></div>
      </div>
    </section>
  );
};

export default HeroSection;
