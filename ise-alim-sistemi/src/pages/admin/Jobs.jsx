import React from 'react';

import { 
  FiUsers, FiBriefcase, FiCheckSquare, FiClipboard, FiSearch, 
  FiMail, FiCalendar, FiBarChart2, FiGift, FiHelpCircle, FiHome 
} from 'react-icons/fi';

import Sidebar from '../../components/sidebar.tsx';
import TopBar from '../../components/topbar.tsx';

const styles = {
    appContainer: {
      backgroundColor: '#E1EEFF',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif',
    },
};
function Jobs() {
    return (
        <div style={styles.appContainer}>
            <TopBar />
            <div style={styles.contentWrapper}>
                <Sidebar />
                <div style={styles.mainContent}>
                    <h1>Jobs</h1>
                </div>
            </div>
        </div>
    );
}

export default Jobs;