import React from 'react';
import { FiHome, FiBriefcase, FiUsers, FiBarChart2, FiClipboard } from 'react-icons/fi';

const styles = {
    sidebar: {
      width: '150px',
      backgroundColor: '#035D86',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: '20px 0 20px 0',
      minHeight: 'calc(100vh - 64px)',
      boxSizing: 'border-box',
      flexShrink: 0,
    },
    menuItem: {
      width: '100%',
      padding: '15px 0',
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      color: '#93c5fd',
      marginLeft: 0,
      paddingLeft: '10px',
    },
    activeMenuItem: {
      borderLeft: '4px solid white',
      color: 'white',
    },
    menuIcon: {
      fontSize: '22px',
      marginRight: '10px',
    },
    menuLabel: {
      fontSize: '14px',
      fontWeight: 'bold',
    },
  };

const Sidebar = () => (
    <div style={styles.sidebar}>
      <div style={{...styles.menuItem, ...styles.activeMenuItem}}>
        <FiHome style={styles.menuIcon}/>
        <span style={styles.menuLabel}>Home Page</span>
      </div>
      <div style={styles.menuItem}>
        <FiBriefcase style={styles.menuIcon}/>
        <span style={styles.menuLabel}>Jobs</span>
      </div>
      <div style={styles.menuItem}>
        <FiUsers style={styles.menuIcon}/>
        <span style={styles.menuLabel}>Candidates</span>
      </div>
      <div style={styles.menuItem}>
        <FiBarChart2 style={styles.menuIcon}/>
        <span style={styles.menuLabel}>Reports</span>
      </div>
      <div style={styles.menuItem}>
        <FiClipboard style={styles.menuIcon}/>
        <span style={styles.menuLabel}>Interviews</span>
      </div>
    </div>
  );

export default Sidebar;