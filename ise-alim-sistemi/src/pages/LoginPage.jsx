import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 

function LoginPage() {
  const navigate = useNavigate(); 

  return (
    <>
      <nav style={styles.navbar}>
        <Link to="/login" style={styles.navLink}>Giriş Yap</Link>
        <Link to="/register" style={styles.navLink}>Kayıt Ol</Link>
      </nav>
      <div style={styles.container}>
        <div style={styles.card}>
          <h1 style={styles.title}>Giriş Yap</h1>
          <input type="email" placeholder="E-posta" style={styles.input} />
          <input type="password" placeholder="Şifre" style={styles.input} />
          {/* Şifremi Unuttum linki */}
          <div style={{ textAlign: 'right', marginBottom: '12px' }}>
            <Link to="/forgot-password" style={styles.forgotLink}>Şifremi Unuttum?</Link>
          </div>
          <button
            style={styles.button}
            onClick={() => navigate('/AdminDashboard')} 
          >
            Giriş
          </button>
          <p style={styles.text}>
            Hesabınız yok mu? <Link to="/register" style={styles.link}>Kayıt Ol</Link>
          </p>
        </div>
      </div>
    </>
  );
}

const styles = {
  navbar: {
    backgroundColor: '#6a11cb',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '15px',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '16px',
  },
  container: {
    background: 'linear-gradient(135deg, #74ebd5 0%, #9face6 100%)',
    minHeight: '100vh',
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'white',
    padding: '30px 20px',
    borderRadius: '12px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
    width: '100%',
    maxWidth: '350px',
    boxSizing: 'border-box',
  },
  title: {
    marginBottom: '20px',
    color: '#333',
    fontSize: '24px',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '12px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '14px',
    boxSizing: 'border-box',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#6a11cb',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '15px',
  },
  text: {
    marginTop: '15px',
    fontSize: '14px',
    textAlign: 'center',
  },
  link: {
    color: '#6a11cb',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  forgotLink: {
    color: '#6a11cb',
    textDecoration: 'underline',
    fontSize: '13px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};

export default LoginPage;