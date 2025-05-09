import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = path => {
    return location.pathname === path ? 'active' : '';
  };

  // Function to handle navigation and scroll to top
  const handleNavClick = path => {
    closeMenu();
    // If we're already on the same page, scroll to top
    if (location.pathname === path) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="container">
        <div className="header__content">
          <Link
            to="/"
            className="header__logo"
            onClick={() => handleNavClick('/')}
          >
            <img
              src="assets/logo/logo.png"
              alt="Logo"
              className="header__logo-image"
            />
          </Link>
          <nav
            className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}
          >
            <ul className="header__menu">
              {/* Eliminado "Portafolio" ya que el logo cumple esta función */}
              <li className="header__menu-item">
                <Link
                  to="/trabajo"
                  className={`header__menu-link ${isActive('/trabajo')}`}
                  onClick={() => handleNavClick('/trabajo')}
                >
                  Trabajo
                </Link>
              </li>
              <li className="header__menu-item">
                <Link
                  to="/about"
                  className={`header__menu-link ${isActive('/about')}`}
                  onClick={() => handleNavClick('/about')}
                >
                  Acerca de mí
                </Link>
              </li>
              <li className="header__menu-item">
                <Link
                  to="/contact"
                  className={`header__menu-link ${isActive('/contact')}`}
                  onClick={() => handleNavClick('/contact')}
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
          <button className="header__menu-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
