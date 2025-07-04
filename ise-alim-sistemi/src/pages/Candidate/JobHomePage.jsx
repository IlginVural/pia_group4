import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import bgImage from '../assets/bg.jpg';

const jobs = [
  {
    id: "qe5pvfmsmvazysbhyhrp27l6xw",
    title: "Genel Başvuru (Engelli) - İzmir",
    date: "13.06.2025"
  },
  {
    id: "uh6tg3nu4ptzyzlmmqsy4b6uez",
    title: "Senior Back End Developer",
    date: "20.05.2025"
  },
  {
    id: "ekcqfpdlssk8wrlzps6369ah23",
    title: "Sr Frontend Developer",
    date: "14.05.2025"
  },
  {
    id: "fezrtngk5ptxydmxv9mx78rgc2",
    title: "General Application",
    date: "6.05.2025"
  },
  {
    id: "shylkb8ltxrby6xrnhda2uhusx",
    title: "Test Engineer",
    date: "28.01.2025"
  }
];

function JobHomePage() {
  const pozisyonlarRef = useRef(null);

  const handlePozisyonlarClick = (e) => {
    e.preventDefault();
    if (pozisyonlarRef.current) {
      pozisyonlarRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={styles.page}>
      {/* Hero Section */}
      <div style={{ ...styles.hero, backgroundImage: `url(${bgImage})` }}>
        <Navbar onPozisyonlarClick={handlePozisyonlarClick} />
        <div style={styles.heroContent}>
          <h2 style={styles.heroTitle}>Hayalindeki işi bul!</h2>
          <p style={styles.heroDesc}>
            Binlerce güncel ilanı incele, başvurunu hemen yap!
          </p>
        </div>
      </div>
      {/* Alt kısım: Açık Pozisyonlar Tablosu */}
      <div ref={pozisyonlarRef} id="acik-pozisyonlar" style={styles.jobListSection}>
        <h3 style={{ color: "rgb(37, 99, 166)", marginBottom: 24, fontWeight: "bold" }}>
          Açık Pozisyonlar
        </h3>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}></th>
              <th style={styles.th}>Pozisyon</th>
              <th style={styles.th}>Yayın Tarihi</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, idx) => (
              <tr key={job.id}>
                <td style={styles.td}>{idx + 1}</td>
                <td style={styles.td}>
                  <Link to={`/job/${job.id}`} style={styles.jobLink}>
                    {job.title}
                  </Link>
                </td>
                <td style={styles.td}>{job.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: '170vh',
    background: '#E1EEFF',
    fontFamily: 'sans-serif'
  },
  hero: {
    width: '100%',
    minHeight: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  heroContent: {
    marginTop: '18vh',
    marginLeft: 80,
    color: 'white',
    textShadow: '0 2px 8px #0008'
  },
  heroTitle: {
    fontWeight: 'bold',
    fontSize: 48,
    marginBottom: 16
  },
  heroDesc: {
    fontSize: 22,
    maxWidth: 600
  },
  jobListSection: {
    background: '#fff',
    borderRadius: 16,
    margin: '48px auto 48px auto',
    maxWidth: 900,
    width: '100%',
    padding: '32px 40px',
    boxShadow: '0 2px 16px #0a3d4d22'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse'
  },
  th: {
    textAlign: 'left',
    color: '#174b7e',
    fontWeight: 'bold',
    fontSize: 16,
    padding: '12px 8px',
    borderBottom: '2px solid #e0eafc'
  },
  td: {
    padding: '10px 8px',
    borderBottom: '1px solid #e0eafc',
    fontSize: 15
  },
  jobLink: {
    color: '#2563a6',
    textDecoration: 'underline',
    fontWeight: 'bold',
    cursor: 'pointer'
  }
};

export default JobHomePage;