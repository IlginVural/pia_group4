import { useState } from "react";
import { styles } from "../pages/admin/Jobs";

const NewJobModal = ({handleCloseModal,handleCreateJob}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [employmentType, setEmploymentType] = useState('');
    const [experienceLevel, setExperienceLevel] = useState('');

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleLocationChange = (e) => {
        setLocation(e.target.value);
    };

    const handleEmploymentTypeChange = (e) => {
        setEmploymentType(e.target.value);
    };

    const handleExperienceLevelChange = (e) => {
        setExperienceLevel(e.target.value);
    };

   
    return (
        <div style={styles.modalOverlay}>
        <div style={styles.modal}>
          <div style={styles.modalTitle}>Create a New Job</div>
          <div>
            <div style={styles.modalLabel}>Title</div>
            <input style={styles.modalInput} name="title" value={title} onChange={handleTitleChange} required />
          </div>
          <div>
            <div style={styles.modalLabel}>Description</div>
            <textarea style={styles.modalInput} name="description" value={description} onChange={handleDescriptionChange} rows={3} required />
          </div>
          <div>
            <div style={styles.modalLabel}>Location</div>
            <input style={styles.modalInput} name="location" value={location} onChange={handleLocationChange} required />
          </div>
          <div>
            <div style={styles.modalLabel}>Employment Type</div>
            <select style={styles.modalSelect} name="employmentType" value={employmentType} onChange={handleEmploymentTypeChange} required>
              <option value="">Select type</option>
              <option value="FULL_TIME">Full-time</option>
              <option value="PART_TIME">Part-time</option>
              <option value="CONTRACT">Contract</option>
              <option value="INTERNSHIP">Internship</option>
            </select>
          </div>
          <div>
            <div style={styles.modalLabel}>Experience Level</div>
            <select style={styles.modalSelect} name="experienceLevel" value={experienceLevel} onChange={handleExperienceLevelChange} required>
              <option value="">Select level</option>
              <option value="ENTRY_LEVEL">Entry</option>
              <option value="MID_LEVEL">Mid</option>
              <option value="SENIOR_LEVEL">Senior</option>
              <option value="LEAD">Lead</option>
              <option value="MANAGER">Manager</option>
            </select>
          </div>
          <div style={styles.modalActions}>
            <button type="button" style={{ ...styles.modalButton, ...styles.modalCancel }} onClick={handleCloseModal}>Cancel</button>
            <button type="button" style={{ ...styles.modalButton, ...styles.modalCreate }} onClick={()=>handleCreateJob(title,description,location,employmentType,experienceLevel)}>Create</button>
          </div>
        </div>
      </div> 
    )
}
export default NewJobModal;