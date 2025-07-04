import React, { useState, useEffect } from 'react';

import { 
  FiUsers, FiBriefcase, FiCheckSquare, FiClipboard, FiSearch, 
  FiMail, FiCalendar, FiBarChart2, FiGift, FiHelpCircle, FiHome 
} from 'react-icons/fi';

import Sidebar from '../../components/sidebar.tsx';
import TopBar from '../../components/topbar.tsx';
import { createJob, getJobs } from '../../services/JobService/JobService.js';
import JobCard from '../../components/JobCard.jsx';
import NewJobModal from '../../components/NewJobModal.jsx';

export const styles = {
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

  
  const fetchJobs = async () => {
    const response = await getJobs();
    setJobs(response.data);
    console.log(response.data);
  };

  // API call
  useEffect(() => {
    // ..
    

    fetchJobs();
  }, []);


  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleCreateJob = async (title,description,location,employmentType,experienceLevel) => {
  
    //console.log(title,description,location,employmentType,experienceLevel);
    const jobResponse = await createJob({title,description,location,employmentType,experienceLevel});
    console.log(jobResponse);
    setShowModal(false);
    fetchJobs();

  };

  return (
    <div style={styles.appContainer}>
      <TopBar />
      <div style={styles.contentWrapper}>
        <Sidebar />
        <div style={styles.mainContent}>
          <button style={styles.createJobBtn} onClick={handleOpenModal}>Create a new job</button>
          {showModal && (
            <NewJobModal  handleCloseModal={handleCloseModal} handleCreateJob={handleCreateJob} />
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
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
         
        </div>
      </div>
    </div>
  );
}

export default Jobs;