import React from 'react';
import { Link } from 'react-router-dom';

function RegisterPage() {
  return (
    <>
      <nav style={styles.navbar}>
        <Link to="/login" style={styles.navLink}>Giriş Yap</Link>
        <Link to="/register" style={styles.navLink}>Kayıt Ol</Link>
      </nav>
      <div style={styles.container}>
        <div style={styles.card}>
          <h1 style={styles.title}>Kayıt Ol</h1>
          <input type="text" placeholder="Ad Soyad" style={styles.input} />
          <input type="email" placeholder="E-posta" style={styles.input} />
          <input type="password" placeholder="Şifre" style={styles.input} />
          <input type="password" placeholder="Şifre Tekrar" style={styles.input} />
          <button style={styles.button}>Kayıt Ol</button>
          <p style={styles.text}>
            Zaten hesabınız var mı? <Link to="/login" style={styles.link}>Giriş Yap</Link>
          </p>
        </div>
      </div>
    </>
  );
}

const styles = {
  navbar: {
    backgroundColor: '#ff6f61',
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
    background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
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
    backgroundColor: '#ff6f61',
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
    color: '#ff6f61',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default RegisterPage;