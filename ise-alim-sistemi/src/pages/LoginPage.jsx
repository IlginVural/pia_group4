// src/LoginPage.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();

  const styles = {
    bg: {
      backgroundColor: '#035D86',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    center: {
      width: '100%',
      maxWidth: 400,
      padding: 20,
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: 8,
      padding: 24,
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    },
    title: {
      marginBottom: 20,
      textAlign: 'center',
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333',
    },
    input: {
      width: '100%',
      padding: 10,
      marginBottom: 16,
      borderRadius: 4,
      border: '1px solid #ccc',
    },
    forgotLink: {
      fontSize: 14,
      color: '#007bff',
      textDecoration: 'none',
    },
    button: {
      width: '100%',
      padding: 12,
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: 4,
      cursor: 'pointer',
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.bg}>
      <div style={styles.center}>
        <form
          style={styles.card}
          onSubmit={e => {
            e.preventDefault();
            navigate('/');
          }}
        >
          <h2 style={styles.title}>Giriş Yap</h2>
          <input type="email" placeholder="E-posta" style={styles.input} required />
          <input type="password" placeholder="Şifre" style={styles.input} required />
          <div style={{ textAlign: 'right', marginBottom: 12 }}>
            <Link to="/forgot-password" style={styles.forgotLink}>
              Şifremi Unuttum?
            </Link>
          </div>
          <button type="submit" style={styles.button}>
            Giriş
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
