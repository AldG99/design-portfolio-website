import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
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
                Diseñador UX/UI & Desarrollador
              </h2>
            </div>
            {/*
            <p className="hero-section__tools">
              {tools.map((tool, index) => (
                <span
                  key={index}
                  className={`hero-section__tool ${getToolClass(tool)}`}
                  ref={revealRef}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {tool}
                </span>
              ))}
            </p>
            */}
            <p className="hero-section__bio">
              Mi objetivo es crear interfaces que sean fáciles de usar y
              visualmente atractivas, explorando constantemente nuevas técnicas
              y herramientas que me permitan innovar en cada proyecto.
            </p>
            <p className="hero-section__bio">
              Me motiva resolver problemas y diseñar soluciones que dejen un
              impacto en la vida de las personas.{' '}
              <Link to="/about" className="hero-section__about-link">
                Acerca de mí 📖 👉
              </Link>
            </p>
            <div
              className="hero-section__social"
              ref={revealRef}
              style={{ transitionDelay: '400ms' }}
            >
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
          <div
            className="hero-section__image"
            ref={revealRef}
            style={{ transitionDelay: '500ms' }}
          >
            <img
              src="/assets/images/profile/profile1.jpg"
              alt="Foto de perfil"
              draggable="false"
              className="no-save"
              onContextMenu={e => e.preventDefault()}
            />
          </div>
        </div>
        <div
          className="hero-section__divider"
          ref={revealRef}
          style={{ transitionDelay: '600ms' }}
        ></div>
      </div>
    </section>
  );
};

export default HeroSection;
