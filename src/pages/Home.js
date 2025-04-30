import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../components/sections/Hero/Hero';
import About from '../components/sections/About/About';
import Skills from '../components/sections/Skills/Skills';
import Projects from '../components/sections/Projects/Projects';
import Contact from '../components/sections/Contact/Contact';

/**
 * Componente principal de la página de inicio
 * Contiene todas las secciones del portafolio
 */
const Home = () => {
  // Efecto para controlar el scroll al inicio
  useEffect(() => {
    // Recuperar la posición de scroll guardada o ir al inicio
    const scrollPosition = sessionStorage.getItem('scrollPosition');
    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition));
      sessionStorage.removeItem('scrollPosition');
    } else {
      window.scrollTo(0, 0);
    }

    // Manejar desplazamiento desde URLs con hash
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          setTimeout(() => {
            window.scrollTo({
              top: element.offsetTop - 80, // Ajustar por la altura del navbar
              behavior: 'smooth',
            });
          }, 100);
        }
      }
    };

    handleHashScroll();
    window.addEventListener('hashchange', handleHashScroll);

    return () => {
      window.removeEventListener('hashchange', handleHashScroll);
      // Guardar posición de scroll al salir de la página
      sessionStorage.setItem('scrollPosition', window.pageYOffset.toString());
    };
  }, []);

  return (
    <>
      {/* SEO metadata */}
      <Helmet>
        <title>Portfolio Profesional | Desarrollador Frontend</title>
        <meta
          name="description"
          content="Portfolio profesional de desarrollo frontend, especializando en React, SCSS y tecnologías web modernas."
        />
        <meta
          name="keywords"
          content="portafolio, desarrollo web, frontend, react, diseño web"
        />
        <meta
          property="og:title"
          content="Portfolio Profesional | Desarrollador Frontend"
        />
        <meta
          property="og:description"
          content="Portfolio profesional de desarrollo frontend, especializando en React, SCSS y tecnologías web modernas."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tudominio.com" />
        <meta
          property="og:image"
          content="https://tudominio.com/og-image.jpg"
        />
      </Helmet>

      {/* Secciones principales del portafolio */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
