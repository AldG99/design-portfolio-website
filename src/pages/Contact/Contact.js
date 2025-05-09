import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import './Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    // Set document title
    document.title = 'Portafolio | Contacto';
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    // Validar el formulario
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitting: false,
        submitted: false,
        error: 'Por favor, completa todos los campos requeridos.',
      });
      return;
    }

    // Simulación de envío del formulario
    setFormStatus({
      submitting: true,
      submitted: false,
      error: null,
    });

    // Simulación de respuesta del servidor (después de 2 segundos)
    setTimeout(() => {
      setFormStatus({
        submitting: false,
        submitted: true,
        error: null,
      });

      // Limpiar el formulario
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      // Restablecer el estado después de 5 segundos
      setTimeout(() => {
        setFormStatus({
          submitting: false,
          submitted: false,
          error: null,
        });
      }, 5000);
    }, 2000);
  };

  return (
    <main className="contact">
      <div className="container">
        <header className="contact__header">
          <h1 className="section-title">Contacto</h1>
          <p className="contact__subtitle">
            ¿Tienes un proyecto en mente o simplemente quieres charlar? Estoy
            aquí para ayudarte.
          </p>
        </header>

        <div className="contact__content">
          <div className="contact__info">
            <div className="contact__info-item">
              <div className="contact__info-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="contact__info-content">
                <h3 className="contact__info-title">Email</h3>
                <a
                  href="mailto:correo@ejemplo.com"
                  className="contact__info-text"
                >
                  correo@ejemplo.com
                </a>
              </div>
            </div>

            <div className="contact__info-item">
              <div className="contact__info-icon">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className="contact__info-content">
                <h3 className="contact__info-title">Teléfono</h3>
                <a href="tel:+1234567890" className="contact__info-text">
                  +1 (234) 567-890
                </a>
              </div>
            </div>

            <div className="contact__info-item">
              <div className="contact__info-icon">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <div className="contact__info-content">
                <h3 className="contact__info-title">Ubicación</h3>
                <p className="contact__info-text">Ciudad de México, México</p>
              </div>
            </div>

            <div className="contact__social">
              <h3 className="contact__social-title">Sígueme en las redes</h3>
              <div className="contact__social-links">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__social-link"
                  aria-label="LinkedIn"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__social-link"
                  aria-label="GitHub"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__social-link"
                  aria-label="Twitter"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>
            </div>
          </div>

          <div className="contact__form-container">
            <h2 className="contact__form-title">Envíame un mensaje</h2>

            {formStatus.submitted ? (
              <div className="contact__success">
                <p>¡Gracias por tu mensaje! Te responderé lo antes posible.</p>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit}>
                {formStatus.error && (
                  <div className="contact__error">
                    <p>{formStatus.error}</p>
                  </div>
                )}

                <div className="contact__form-group">
                  <label htmlFor="name" className="contact__form-label">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="contact__form-input"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact__form-group">
                  <label htmlFor="email" className="contact__form-label">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="contact__form-input"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact__form-group">
                  <label htmlFor="subject" className="contact__form-label">
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="contact__form-input"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="contact__form-group">
                  <label htmlFor="message" className="contact__form-label">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="contact__form-textarea"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div className="contact__form-submit">
                  <button
                    type="submit"
                    className="btn"
                    disabled={formStatus.submitting}
                  >
                    {formStatus.submitting ? 'Enviando...' : 'Enviar mensaje'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
