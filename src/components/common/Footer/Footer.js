import { motion } from 'framer-motion';
import './Footer.scss';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/AldG99' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ad-g099/' },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Contacto</h3>
            <p>email@ejemplo.com</p>
            <p>+34 123 456 789</p>
          </div>

          <div className="footer-section">
            <h3>Redes Sociales</h3>
            <div className="social-links">
              {socialLinks.map(link => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {currentYear} Alfredo García. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Pie de página con links sociales y información de contacto.
