import { Navbar } from '../components/common/Navbar/Navbar';
import { Footer } from '../components/common/Footer/Footer';

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <Navbar />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;

// Layout principal que incluye navbar, footer y estructura común.
