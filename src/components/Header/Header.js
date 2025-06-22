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

  const handleNavClick = path => {
    closeMenu();
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
              className="header__logo-image no-save"
              draggable="false"
              onContextMenu={e => e.preventDefault()}
            />
          </Link>
          <nav
            className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}
          >
            <ul className="header__menu no-select">
              <li className="header__menu-item">
                <Link
                  to="/trabajo"
                  className={`header__menu-link ${isActive('/trabajo')}`}
                  onClick={() => handleNavClick('/trabajo')}
                >
                  <span className="header__menu-text">Trabajo</span>
                </Link>
              </li>
              <li className="header__menu-item">
                <Link
                  to="/acerca-de-mí"
                  className={`header__menu-link ${isActive('/acerca-de-mí')}`}
                  onClick={() => handleNavClick('/acerca-de-mí')}
                >
                  <span className="header__menu-text">Acerca de mí</span>
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
