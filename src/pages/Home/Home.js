import React, { useEffect } from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import FeaturedProjects from '../../components/FeaturedProjects/FeaturedProjects';
import './Home.scss';

const Home = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    // Set document title
    document.title = 'Portafolio | Inicio';
  }, []);

  return (
    <main className="home">
      <HeroSection />
      <FeaturedProjects />
    </main>
  );
};

export default Home;
