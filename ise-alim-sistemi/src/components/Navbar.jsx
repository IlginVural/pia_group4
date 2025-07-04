import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Home } from 'lucide-react';
import logo from '../assets/logo.png';

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      scrollToTop();
    } else {
      navigate('/', { state: { scrollToTop: true } });
    }
  };

  const handlePozisyonlarClick = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const elem = document.getElementById('acik-pozisyonlar');
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { scrollToPozisyonlar: true } });
    }
  };

  return (
    <nav style={styles.navbar}>
      <Link to="/" onClick={handleHomeClick} style={styles.logoLink}>
        <img src={logo} alt="PiA Group Logo" style={styles.logoImage} />
      </Link>

      <div style={styles.rightSection}>
        <a
          href="/"
          onClick={handleHomeClick}
          style={styles.navLinkWithIcon}
        >
          <Home size={20} color="#CBD5E0" style={{ marginRight: 6 }} />
          Home
        </a>

        <a
          href="#acik-pozisyonlar"
          onClick={handlePozisyonlarClick}
          style={styles.navLink}
        >
          Açık Pozisyonlar
        </a>

        <Link to="/login" style={styles.navLink}>Giriş Yap</Link>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: 60,
    display: 'flex',
    padding: '0 20px',
    backgroundColor: '#1A202C',  // Navbar rengi hep bu kalsın
    color: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 1000,
  },
  logoLink: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  logoImage: {
    height: 40,
    objectFit: 'contain',
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
  },
  navLink: {
    color: 'white',
    marginLeft: 16,
    textDecoration: 'none',
    cursor: 'pointer',
  },
  navLinkWithIcon: {
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    marginLeft: 16,
    textDecoration: 'none',
    cursor: 'pointer',
  },
};

export default Navbar;
