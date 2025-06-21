import React, { useEffect } from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import FeaturedProjects from '../../components/FeaturedProjects/FeaturedProjects';
import './Home.scss';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Alfredo García Diseñador UX/UI & Desarrollador';
  }, []);

  return (
    <main className="home">
      <HeroSection />
      <FeaturedProjects />
    </main>
  );
};

export default Home;
