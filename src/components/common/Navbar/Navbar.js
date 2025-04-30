import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Cambiar estilo al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle menu móvil
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Cerrar menú al hacer clic en un enlace
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__container">
        <RouterLink to="/" className="navbar__logo">
          <span className="navbar__logo-text">Portfolio</span>
        </RouterLink>

        {/* Botón hamburguesa para móvil */}
        <button
          className="navbar__toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation"
        >
          <span className="navbar__toggle-icon"></span>
        </button>

        {/* Menú de navegación */}
        <ul
          className={`navbar__menu ${
            isMobileMenuOpen ? 'navbar__menu--open' : ''
          }`}
        >
          <li className="navbar__item">
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className="navbar__link"
              onClick={closeMobileMenu}
            >
              Inicio
            </ScrollLink>
          </li>
          <li className="navbar__item">
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className="navbar__link"
              onClick={closeMobileMenu}
            >
              Sobre mí
            </ScrollLink>
          </li>
          <li className="navbar__item">
            <ScrollLink
              to="skills"
              smooth={true}
              duration={500}
              className="navbar__link"
              onClick={closeMobileMenu}
            >
              Habilidades
            </ScrollLink>
          </li>
          <li className="navbar__item">
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              className="navbar__link"
              onClick={closeMobileMenu}
            >
              Proyectos
            </ScrollLink>
          </li>
          <li className="navbar__item">
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="navbar__link"
              onClick={closeMobileMenu}
            >
              Contacto
            </ScrollLink>
          </li>
          <li className="navbar__item navbar__item--button">
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary navbar__cta"
              onClick={closeMobileMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="navbar__icon"
                viewBox="0 0 16 16"
              >
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
              </svg>
              Descargar CV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
