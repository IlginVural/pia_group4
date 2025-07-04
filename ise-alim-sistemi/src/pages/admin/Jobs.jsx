import React, { useState, useEffect } from 'react';

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
  contentWrapper: {
    display: 'flex',
  },
  mainContent: {
    flex: 1,
    padding: '40px 60px',
    backgroundColor: '#F7F9FB',
    minHeight: '100vh',
  },
  createJobBtn: {
    background: '#176B87',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    padding: '12px 28px',
    fontWeight: 'bold',
    fontSize: '16px',
    float: 'right',
    marginBottom: '32px',
    cursor: 'pointer',
    boxShadow: '0 2px 8px 0 rgba(23,107,135,0.08)',
  },
  postJobCard: {
    background: '#fff',
    border: '1px solid #E3E8EF',
    borderRadius: '10px',
    padding: '24px',
    marginBottom: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: '0 2px 8px 0 rgba(23,107,135,0.04)',
  },
  postJobText: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '8px',
  },
  postJobDesc: {
    fontSize: '15px',
    color: '#555',
    marginBottom: '12px',
  },
  postJobBtn: {
    background: '#fff',
    color: '#176B87',
    border: '1.5px solid #176B87',
    borderRadius: '6px',
    padding: '8px 20px',
    fontWeight: 'bold',
    fontSize: '15px',
    cursor: 'pointer',
    marginTop: '8px',
  },
  sampleJobsTitle: {
    fontWeight: 'bold',
    color: '#555',
    fontSize: '15px',
    margin: '32px 0 12px 0',
    letterSpacing: '1px',
  },
  jobCard: {
    background: '#fff',
    border: '1px solid #E3E8EF',
    borderRadius: '10px',
    padding: '24px',
    marginBottom: '18px',
    boxShadow: '0 2px 8px 0 rgba(23,107,135,0.04)',
  },
  jobTitle: {
    fontWeight: 'bold',
    fontSize: '18px',
    marginBottom: '8px',
  },
  jobMeta: {
    color: '#888',
    fontSize: '14px',
    marginBottom: '16px',
  },
  jobStats: {
    display: 'flex',
    gap: '32px',
    marginBottom: '10px',
  },
  stat: {
    textAlign: 'center',
  },
  statNum: {
    fontWeight: 'bold',
    fontSize: '16px',
    color: '#176B87',
  },
  statLabel: {
    fontSize: '13px',
    color: '#888',
  },
  jobNote: {
    color: '#D7263D',
    fontSize: '13px',
    marginTop: '8px',
  },
  jobActions: {
    display: 'flex',
    gap: '12px',
    marginTop: '10px',
  },
  jobActionBtn: {
    background: '#fff',
    color: '#176B87',
    border: '1.5px solid #176B87',
    borderRadius: '6px',
    padding: '6px 16px',
    fontWeight: 'bold',
    fontSize: '14px',
    cursor: 'pointer',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: 'rgba(0,0,0,0.25)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  modal: {
    background: '#fff',
    borderRadius: '12px',
    padding: '32px 32px 24px 32px',
    minWidth: '350px',
    boxShadow: '0 8px 32px 0 rgba(23,107,135,0.18)',
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
    position: 'relative',
  },
  modalTitle: {
    fontWeight: 'bold',
    fontSize: '22px',
    marginBottom: '8px',
    color: '#176B87',
  },
  modalLabel: {
    fontWeight: 'bold',
    fontSize: '15px',
    marginBottom: '4px',
    color: '#333',
  },
  modalInput: {
    padding: '8px 12px',
    border: '1px solid #E3E8EF',
    borderRadius: '6px',
    fontSize: '15px',
    marginBottom: '10px',
    outline: 'none',
  },
  modalSelect: {
    padding: '8px 12px',
    border: '1px solid #E3E8EF',
    borderRadius: '6px',
    fontSize: '15px',
    marginBottom: '10px',
    outline: 'none',
    background: '#fff',
  },
  modalActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '12px',
    marginTop: '8px',
  },
  modalButton: {
    padding: '8px 20px',
    borderRadius: '6px',
    fontWeight: 'bold',
    fontSize: '15px',
    border: 'none',
    cursor: 'pointer',
  },
  modalCancel: {
    background: '#E3E8EF',
    color: '#333',
  },
  modalCreate: {
    background: '#176B87',
    color: '#fff',
  },
};

function Jobs() {
  // state initializations
  const [jobs, setJobs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    title: '',
    description: '',
    location: '',
    employmentType: '',
    experienceLevel: '',
  });

  // API call
  useEffect(() => {
    // ...
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleCreateJob = (e) => {
    e.preventDefault();
    // Here you would send the form data to your API or update state
    setShowModal(false);
    setForm({ title: '', description: '', location: '', employmentType: '', experienceLevel: '' });
  };

  return (
    <div style={styles.appContainer}>
      <TopBar />
      <div style={styles.contentWrapper}>
        <Sidebar />
        <div style={styles.mainContent}>
          <button style={styles.createJobBtn} onClick={handleOpenModal}>Create a new job</button>
          {showModal && (
            <div style={styles.modalOverlay}>
              <form style={styles.modal} onSubmit={handleCreateJob}>
                <div style={styles.modalTitle}>Create a New Job</div>
                <div>
                  <div style={styles.modalLabel}>Title</div>
                  <input style={styles.modalInput} name="title" value={form.title} onChange={handleInputChange} required />
                </div>
                <div>
                  <div style={styles.modalLabel}>Description</div>
                  <textarea style={styles.modalInput} name="description" value={form.description} onChange={handleInputChange} rows={3} required />
                </div>
                <div>
                  <div style={styles.modalLabel}>Location</div>
                  <input style={styles.modalInput} name="location" value={form.location} onChange={handleInputChange} required />
                </div>
                <div>
                  <div style={styles.modalLabel}>Employment Type</div>
                  <select style={styles.modalSelect} name="employmentType" value={form.employmentType} onChange={handleInputChange} required>
                    <option value="">Select type</option>
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>
                <div>
                  <div style={styles.modalLabel}>Experience Level</div>
                  <select style={styles.modalSelect} name="experienceLevel" value={form.experienceLevel} onChange={handleInputChange} required>
                    <option value="">Select level</option>
                    <option value="Entry">Entry</option>
                    <option value="Mid">Mid</option>
                    <option value="Senior">Senior</option>
                    <option value="Lead">Lead</option>
                  </select>
                </div>
                <div style={styles.modalActions}>
                  <button type="button" style={{ ...styles.modalButton, ...styles.modalCancel }} onClick={handleCloseModal}>Cancel</button>
                  <button type="submit" style={{ ...styles.modalButton, ...styles.modalCreate }}>Create</button>
                </div>
              </form>
            </div>
          )}
          <div style={styles.postJobCard}>
            <div>
              <div style={styles.postJobText}>Post a job</div>
              <div style={styles.postJobDesc}>
                Get your job listing in front of millions of candidates today. Do things faster with a choice of over 700 job description templates, and choose to publish on the most popular free and premium job boards.
              </div>
              <button style={styles.postJobBtn}>Post a job</button>
            </div>
            <div>
              {/* Placeholder for illustration or calendar */}
              <div style={{width: 120, height: 80, background: '#F7F9FB', borderRadius: 12, border: '1px dashed #E3E8EF'}}></div>
            </div>
          </div>
          <div style={styles.sampleJobsTitle}>SAMPLE JOBS</div>
          <div style={styles.jobCard}>
            <div style={styles.jobTitle}>Account Executive</div>
            <div style={styles.jobMeta}>On-site · London, United Kingdom</div>
            <div style={styles.jobStats}>
              <div style={styles.stat}><div style={styles.statNum}>6</div><div style={styles.statLabel}>Remaining Positions</div></div>
              <div style={styles.stat}><div style={styles.statNum}>18</div><div style={styles.statLabel}>Applied</div></div>
              <div style={styles.stat}><div style={styles.statNum}>10</div><div style={styles.statLabel}>Phone Screen</div></div>
              <div style={styles.stat}><div style={styles.statNum}>4</div><div style={styles.statLabel}>Assessment</div></div>
              <div style={styles.stat}><div style={styles.statNum}>1</div><div style={styles.statLabel}>Interview</div></div>
              <div style={styles.stat}><div style={styles.statNum}>1</div><div style={styles.statLabel}>Offer</div></div>
              <div style={styles.stat}><div style={styles.statNum}>1</div><div style={styles.statLabel}>Hired</div></div>
            </div>
            <div style={styles.jobActions}>
              <button style={styles.jobActionBtn}>Find Candidates</button>
              <button style={styles.jobActionBtn}>Used Internally</button>
            </div>
          </div>
          <div style={styles.jobCard}>
            <div style={styles.jobTitle}>Director of Finance</div>
            <div style={styles.jobMeta}>On-site · New York, United States</div>
            <div style={styles.jobStats}>
              <div style={styles.stat}><div style={styles.statNum}>9</div><div style={styles.statLabel}>Remaining Positions</div></div>
              <div style={styles.stat}><div style={styles.statNum}>23</div><div style={styles.statLabel}>Applied</div></div>
              <div style={styles.stat}><div style={styles.statNum}>18</div><div style={styles.statLabel}>Phone Screen</div></div>
              <div style={styles.stat}><div style={styles.statNum}>10</div><div style={styles.statLabel}>Assessment</div></div>
              <div style={styles.stat}><div style={styles.statNum}>5</div><div style={styles.statLabel}>Interview</div></div>
              <div style={styles.stat}><div style={styles.statNum}>1</div><div style={styles.statLabel}>Offer</div></div>
              <div style={styles.stat}><div style={styles.statNum}>1</div><div style={styles.statLabel}>Hired</div></div>
            </div>
            <div style={styles.jobActions}>
              <button style={styles.jobActionBtn}>Find Candidates</button>
              <button style={styles.jobActionBtn}>Used Internally</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jobs;