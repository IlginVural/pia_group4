import React from 'react';
import { FiHome, FiBriefcase, FiUsers, FiBarChart2, FiClipboard } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';

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
      textDecoration: 'none',
      position: 'relative',
      borderRadius: 0,
      background: 'none',
      fontWeight: 'normal',
      transition: 'all 0.2s cubic-bezier(.4,2,.6,1)',
    },
    activeMenuItem: {
      background: '#fff',
      color: '#035D86',
      borderLeft: '10px solid #035D86',
      borderRadius: '16px 0 0 16px',
      fontWeight: 'bold',
      boxShadow: '0 4px 16px 0 rgba(10,110,189,0.10)',
      transform: 'scale(1.04)',
      zIndex: 1,
    },
    menuIcon: {
      fontSize: '22px',
      marginRight: '10px',
      transition: 'color 0.2s cubic-bezier(.4,2,.6,1)',
    },
    menuLabel: {
      fontSize: '14px',
      fontWeight: 'bold',
      transition: 'color 0.2s cubic-bezier(.4,2,.6,1)',
    },
  };

const Sidebar = () => {
  const location = useLocation();
  const menuItems = [
    { label: 'Home Page', icon: <FiHome style={styles.menuIcon} />, to: '/admindashboard' },
    { label: 'Jobs', icon: <FiBriefcase style={styles.menuIcon} />, to: '/jobs' },
    { label: 'Candidates', icon: <FiUsers style={styles.menuIcon} />, to: '/candidates' },
    { label: 'Reports', icon: <FiBarChart2 style={styles.menuIcon} />, to: '/reports' },
    { label: 'Interviews', icon: <FiClipboard style={styles.menuIcon} />, to: '/interviews' },
  ];

  return (
    <div style={styles.sidebar}>
      {menuItems.map((item) => {
        const isActive = location.pathname === item.to;
        return (
          <Link to={item.to} style={{ ...styles.menuItem, ...(isActive ? styles.activeMenuItem : {}) }} key={item.label}>
            {React.cloneElement(item.icon, { color: isActive ? '#035D86' : '#93c5fd' })}
            <span style={{ ...styles.menuLabel, color: isActive ? '#035D86' : '#93c5fd', fontWeight: isActive ? 'bold' : 'normal' }}>{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;