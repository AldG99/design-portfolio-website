import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__social">
            <a
              href="https://www.linkedin.com/in/ad-g099/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://github.com/AldG99"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="mailto:a.garciaglz17@gmail.com"
              className="footer__social-link"
              aria-label="Correo electrónico"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
          <div className="footer__copyright">
            <p className="no-select">
              &copy; {currentYear} | Todos los derechos reservados a Alfredo
              García.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
