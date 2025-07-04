import React from 'react';
// Make sure you have react-icons installed: npm install react-icons
import { 
  FiUsers, FiBriefcase, FiCheckSquare, FiClipboard, FiSearch, 
  FiMail, FiCalendar, FiBarChart2, FiGift, FiHelpCircle, FiHome 
} from 'react-icons/fi';
import Sidebar from '../../components/sidebar.tsx';
import TopBar from '../../components/topbar.tsx';

// Main Component
function AdminDashboard() {
  const jobPostings = [
    { title: 'Senior Data Analyst', remaining: 3, applications: 123, interviewed: 40, rejected: 33, evaluation: 7, offers: 2 },
    { title: 'Junior Data Analyst', remaining: 7, applications: 567, interviewed: 22, rejected: 20, evaluation: 2, offers: 4 },
    { title: 'Product Designer', remaining: 2, applications: 201, interviewed: 32, rejected: 18, evaluation: 14, offers: 0 },
    { title: 'Java Developer', remaining: 5, applications: 231, interviewed: 23, rejected: 10, evaluation: 13, offers: 3 },
    { title: 'Product Manager', remaining: 3, applications: 67, interviewed: 41, rejected: 22, evaluation: 19, offers: 1 },
  ];

  return (
    <div style={styles.appContainer}>
      <TopBar />
      <div style={styles.contentWrapper}>
        <Sidebar />
        <div style={styles.mainContent}>
          <Header />
          <div style={styles.cardsContainer}>
            <DashboardCard number="33" imgSrc="/interview.png" imgSize={120} label="Pending Interviews" />
            <DashboardCard number="2" imgSrc="/jobs.png" imgSize={120} label="Pending Job Drafts" />
            <DashboardCard number="44" imgSrc="/application.png" imgSize={120} label="Pending Applications"/>
            <DashboardCard number="13" imgSrc="/offer.png" imgSize={120} label="Pending Offers" />
          </div>
          <JobTable data={jobPostings} />
        </div>
      </div>
    </div>
  );
}

// Sub-components
const Header = () => (
  <header style={styles.header}>
    <h1 style={styles.headerTitle}>Home Page</h1>
  </header>
);

const DashboardCard = ({ number, icon, imgSrc, imgSize, label }) => (
  <div style={{ ...styles.card, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
    {imgSrc ? (
      <img src={imgSrc} alt="" style={{ width: imgSize || 48, height: imgSize || 48, marginBottom: 12 }} />
    ) : (
      icon
    )}
    <span style={styles.cardNumber}>{number}</span>
    {label && <span style={{ marginTop: 8, fontSize: 16, color: '#718096', textAlign: 'center' }}>{label}</span>}
  </div>
);

const JobTable = ({ data }) => (
  <div style={styles.tableCard}>
    <h2 style={styles.tableTitle}><FiBriefcase style={{ marginRight: 10, verticalAlign: 'middle' }} />Jobs</h2>
    <table style={styles.table}>
      <thead>
        <tr>
          <th style={styles.th}>Job</th>
          <th style={styles.thCenter}>Remaining Positions</th>
          <th style={styles.thCenter}>Applications</th>
          <th style={styles.thCenter}>Interviewed</th>
          <th style={styles.thCenter}>Rejected</th>
          <th style={styles.thCenter}>Evaluation</th>
          <th style={styles.thCenter}>Offers</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td style={styles.td}>{row.title}</td>
            <td style={styles.tdCenter}>{row.remaining}</td>
            <td style={styles.tdCenter}>{row.applications}</td>
            <td style={styles.tdCenter}>{row.interviewed}</td>
            <td style={styles.tdCenter}>{row.rejected}</td>
            <td style={styles.tdCenter}>{row.evaluation}</td>
            <td style={styles.tdCenter}>{row.offers}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// Styles
const styles = {
  appContainer: {
    backgroundColor: '#E1EEFF',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  contentWrapper: {
    display: 'flex',
  },
  topNav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
    color: 'white',
    height: '80px',
  },
  topNavLeft: {
    display: 'flex',
    alignItems: 'center',
  },
  topNavRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '25px',
  },

  searchInput: {
    padding: '8px',
    border: '1px solid #e2e8f0',
    borderRadius: '4px',
    marginLeft: '5px',
  },
  
  mainContent: {
    flex: 1,
    padding: '20px 40px 20px 40px',
    marginLeft: '0px',
  },
  header: {
    marginBottom: '30px',
  },
  headerTitle: {
    margin: 0,
    fontSize: '28px',
    fontWeight: 'bold',
  },
  headerSubtitle: {
    margin: 0,
    fontSize: '16px',
    color: '#718096',
  },
  cardsContainer: {
    display: 'flex',
    gap: '20px',
    marginBottom: '30px',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '20px',
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
  },
  cardNumber: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
  },
  tableCard: {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
  },
  tableTitle: {
    margin: '0 0 20px 0',
    fontSize: '20px',
    fontWeight: 'bold',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    textAlign: 'left',
    padding: '12px',
    color: '#a0aec0',
    borderBottom: '1px solid #e2e8f0',
    fontWeight: 'normal',
    fontSize: '14px',
    minWidth: '140px',
  },
  thCenter: {
    textAlign: 'center',
    padding: '12px',
    color: '#a0aec0',
    borderBottom: '1px solid #e2e8f0',
    fontWeight: 'normal',
    fontSize: '14px',
    minWidth: '160px',
  },
  td: {
    padding: '12px',
    borderBottom: '1px solid #e2e8f0',
    fontSize: '14px',
    color: '#2d3748',
  },
  tdCenter: {
    textAlign: 'center',
    padding: '12px',
    borderBottom: '1px solid #e2e8f0',
    fontSize: '14px',
    color: '#2d3748',
  },
  headerSection: {
    marginBottom: '30px',
  },
  homePageContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  dashboardSection: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '30px',
  },
  jobTableSection: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
};

export default AdminDashboard;