import { styles } from "../pages/admin/Jobs";

const JobCard = ({job}) => {
    return (
        <div style={styles.jobCard}>
            <div style={styles.jobTitle}>{job.title}</div>
            <div style={styles.jobMeta}>{job.location}</div>
            <div style={styles.jobStats}>
              
            </div>
            <div style={styles.jobActions}>
              <button style={styles.jobActionBtn}>Find Candidates</button>
              <button style={styles.jobActionBtn}>Used Internally</button>
            </div>
          </div>
    )
}
export default JobCard;