import React, { useEffect } from 'react';
import Navbar from '../components/common/Navbar/Navbar';
import Footer from '../components/common/Footer/Footer';
import ThemeToggle from '../components/common/ThemeToggle/ThemeToggle';

const MainLayout = ({ children }) => {
  // Control del scroll al navegar
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="app theme-transition">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <ThemeToggle />
    </div>
  );
};

export default MainLayout;
