import React from 'react';
import { FiHome, FiBriefcase, FiUsers, FiBarChart2, FiClipboard } from 'react-icons/fi';

const styles = {
  topNav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
    color: 'white',
    height: '80px',
    paddingLeft: '0',
    paddingRight: '40px',
  },
  topNavLeft: {
    display: 'flex',
    alignItems: 'center',
  },
  logoImg: {
    width: '100px',   // or '40px'
    height: '100px',  // or '40px'
    display: 'block',
    marginRight: '20px',
  },
  topNavRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '25px',
  },
  userInfoWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  userName: {
    fontWeight: 'bold',
    color: '#2d3748',
  },
  userRole: {
    color: '#718096',
  },
  userAvatarImg: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    backgroundColor: '#e2e8f0',
  },
};

const TopBar = () => (
  <nav style={styles.topNav}>
    <div style={styles.topNavLeft}>
      <img src="/piaLogo.png" alt="PİA Logo" style={styles.logoImg} />
    </div>
    <div style={styles.topNavRight}>
      <div style={styles.userInfoWrapper}>
        <span style={styles.userName}>Ece Kale</span>
        <span style={styles.userRole}>Admin</span>
        <div style={styles.userAvatarImg}></div>
      </div>
    </div>
  </nav>
);

export default TopBar;

    