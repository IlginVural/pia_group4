import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const jobDetailsMap = {
  "qe5pvfmsmvazysbhyhrp27l6xw": {
    title: "Genel Başvuru (Engelli) - İzmir",
    company: "People in Action / İzmir",
    date: "13.06.2025",
    location: "Hibrit",
    description: `PiA, 2009 yılındaki kuruluşundan bu yana, özellikle İş Destek Sistemleri alanında özel BT iş çözümleri, profesyonel ve yönetilen hizmetler sunma konusunda uzmanlaşmıştır. Mühendislik ekibimiz hızla büyümektedir ve BSS entegrasyonu, özelleştirme ve eksiksiz müşteri yönetimi çözümleri sunma konusunda kanıtlanmış bir başarı geçmişine sahiptir. Türkiye ve EMEA'daki çeşitli telekom hizmet sağlayıcıları için. PiA'da çevik geliştirme uygulamalarını takip ediyoruz, her ekip üyesini temel varlık olarak görüyoruz ve hedeflere ulaşmada bireysel güçlü yönlere, görüşlere ve fikirlere değer veriyoruz.`,
    requirements: [
      "En az lise mezunu",
      "Sorumluluk bilincine sahip",
      "Türkiye İş Kurumu'na (İŞKUR) kayıtlı ve minimum %40 engelli raporu bulunan",
      "İletişim becerileri güçlü",
      "Ekip çalışmasına yatkın",
      "İzmir lokasyonunda ikamet eden"
    ],
    benefits: [
      "Her sabah ücretsiz kahvaltı ve gün boyunca ofislerde ücretsiz atıştırmalıklar",
      "Ulaşım ve yemek desteği"
    ]
  },
  "uh6tg3nu4ptzyzlmmqsy4b6uez": {
    title: "Senior Back End Developer",
    company: "People in Action / İstanbul",
    date: "20.05.2025",
    location: "Hibrit",
    description: `PiA is specialized in delivering custom IT business solutions, professional and managed services especially in Business Support Systems’ domain since its establishment in 2009. Our engineering team growth rapidly and has proven track record of success in delivering BSS integration, customization and complete customer management solutions for several telecom service providers in Turkey and EMEA. In PiA we follow agile development practices, see each team member as key asset and value individual strengths, opinions and ideas in achieving goals.`,
    requirements: [
      "BS or MS in Computer Science, Engineering or related fields",
      "Min. 5 years of experience",
      "Experience in Java Programming, Spring Framework (Spring Boot)",
      "Experience in Relational / NonRelational Database such as Postgresql, MongoDB",
      "Knowledge of professional software engineering best practices",
      "Ability of analytic thinking and problem solving",
      "Skilled in teamwork and successful in written and verbal communication",
      "Willing to improve and learn",
      "Creative and solution-focused",
      "Preferably having a certificate from KPDS, ÜDS, YDS, e-YDS, Cambridge, TOEFL IBT, or PTE exams."
    ],
    benefits: [
      "Free breakfast every morning, and free snacks throughout the day in the offices",
      "Private health insurance",
      "In-company training",
      "Transportation and meal support",
      "Flexible work hours"
    ]
  },
  "ekcqfpdlssk8wrlzps6369ah23": {
    title: "Sr Frontend Developer",
    company: "People in Action / İstanbul",
    date: "14.05.2025",
    location: "Hibrit",
    description: `PiA is specialized in delivering custom IT business solutions, professional and managed services especially in Business Support Systems’ domain since its establishment in 2009. Our engineering team growth rapidly and has proven track record of success in delivering BSS integration, customization and complete customer management solutions for several telecom service providers in Turkey and EMEA. In PiA we follow agile development practices, see each team member as key asset and value individual strengths, opinions and ideas in achieving goals.`,
    requirements: [
      "Minimum 4+ years of hands-on development experience with ReactJS in a production environment",
      "Solid understanding of core JavaScript concepts (ES6+, async/await, array methods, etc.)",
      "Experience developing with TypeScript",
      "Proficient in building responsive and cross-browser compatible user interfaces using HTML5 and CSS3",
      "Experience in creating functional and reusable components",
      "Strong proficiency with React Hooks",
      "Practical experience in global state management using Redux Toolkit",
      "Ability to interact with API endpoints and effectively integrate fetched data into UI components (using fetch or axios)",
      "Nice to Have: Experience with Tailwind CSS for rapid and efficient styling"
    ],
    benefits: [
      "Free breakfast every morning, and free snacks throughout the day in the offices",
      "Private health insurance",
      "In-company training",
      "Transportation and meal support",
      "Flexible work hours"
    ]
  },
  "fezrtngk5ptxydmxv9mx78rgc2": {
    title: "General Application",
    company: "People in Action / İstanbul",
    date: "6.05.2025",
    location: "Hibrit",
    description: `PiA has specialized in delivering custom IT business solutions, and professional and managed services especially in the Business Support Systems domain since its establishment in 2009. Our engineering team grows rapidly and has a proven track record of success in delivering BSS integration, customization, and complete customer management solutions for several telecom service providers in Turkey and EMEA. In PiA we follow agile development practices, see each team member as a key asset, and value individual strengths, opinions, and ideas in achieving goals.`,
    requirements: [
      "Bachelor’s degree in a technical field (e.g. Engineering, Computer Science, MIS) from a reputable university",
      "Good command of written and spoken Turkish & English",
      "Excellent communication skills, analytical intelligence and aptitude for technology languages",
      "Proactively seek opportunities to learn and grow in your skillset",
      "Ability to build and maintain relationships and work confidently with people at all levels",
      "Preferably having a certificate from KPDS, ÜDS, YDS, e-YDS, Cambridge, TOEFL IBT, or PTE exams."
    ],
    benefits: [
      "Free breakfast every morning, and free snacks throughout the day in the offices",
      "Private health insurance",
      "In-company training",
      "Transportation and meal support",
      "Flexible work hours"
    ]
  },
  "shylkb8ltxrby6xrnhda2uhusx": {
    title: "Test Engineer",
    company: "People in Action / İSTANBUL",
    date: "28.01.2025",
    location: "Hibrit",
    description: `PiA is specialized in delivering custom IT business solutions, professional and managed services especially in Business Support Systems’ domain since its establishment in 2009. Our engineering team growth rapidly and has proven track record of success in delivering BSS integration, customization and complete customer management solutions for several telecom service providers in Turkey and EMEA. In PiA we follow agile development practices, see each team member as key asset and value individual strengths, opinions and ideas in achieving goals.`,
    requirements: [
      "Engineering or relevant departments.",
      "Minimum of 3+ years hands on experience in QA/Automation Test Engineering (telecom industry highly preferable)",
      "Good knowledge of Software Development and Test Lifecycle Knowledge",
      "Hands-on Experience of Selenium, Cucumber. Robot Framework is a plus.",
      "Experience of test and defect management processes using Jira, Xray etc.",
      "Hands-on Experience of SOAP and RESTful Service testing with SoapUI, Postman etc.",
      "Excellent problem solving with good analytical skills.",
      "Hands-on Experience on Load testing scenarios with Jmeter is a plus.",
      "Having knowledge of DB (PostgreSQL, MongoDB) is a plus.",
      "ISTQB certificate is a plus.",
      "Hands-on Python experience is a plus",
      "Fluency in English is a must. (Preferably having a certificate from KPDS, ÜDS, YDS, e-YDS, Cambridge, TOEFL IBT, or PTE exams)"
    ],
    benefits: [
      "Free breakfast every morning, and free snacks throughout the day in the offices",
      "Private health insurance",
      "In-company training",
      "Transportation and meal support",
      "Flexible work hours"
    ]
  }
};

function JobDetailPage() {
  const { id } = useParams();
  const jobDetails = jobDetailsMap[id];

  // Modal ve form state'leri
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    ad: '',
    soyad: '',
    cinsiyet: '',
    adres: '',
    dogumTarihi: '',
    telefon: '',
    email: '',
    cv: null
  });

  // Form alanı değişikliklerini yönet
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value
    }));
  };

  // Form gönderimi
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Başvurunuz alındı!');
    setShowModal(false);
    setForm({
      ad: '',
      soyad: '',
      cinsiyet: '',
      adres: '',
      dogumTarihi: '',
      telefon: '',
      email: '',
      cv: null
    });
  };

  if (!jobDetails) {
    return <div style={{ padding: 40 }}>İlan bulunamadı.</div>;
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>{jobDetails.title}</h2>
        <div style={styles.meta}>
          <span style={styles.company}>{jobDetails.company}</span> | 
          <span style={styles.location}> {jobDetails.location}</span> | 
          <span style={styles.date}> Yayın Tarihi: {jobDetails.date}</span>
        </div>
        <h3 style={styles.sectionTitle}>Açıklama</h3>
       <p style={{ 
  ...styles.text, 
  
  textIndent: '20px' 
}}>
  {jobDetails.description}
</p>

        <h3 style={styles.sectionTitle}>Nitelikler</h3>
        <ul>
          {jobDetails.requirements.map((req, i) => (
            <li key={i} style={styles.text}>{req}</li>
          ))}
        </ul>
        <h3 style={styles.sectionTitle}>Sana Ne Sunuyoruz?</h3>
        <ul>
          {jobDetails.benefits.map((ben, i) => (
            <li key={i} style={styles.text}>{ben}</li>
          ))}
        </ul>
        <button
          style={styles.applyBtn}
          onClick={() => setShowModal(true)}
        >
          İlana Başvur
        </button>
        <div style={{ marginTop: 24 }}>
          <Link to="/" style={styles.backLink}>← Ana Sayfa</Link>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <h2 style={styles.modalTitle}>Başvuru Formu</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
              <div style={styles.formRow}>
                <input
                  type="text"
                  name="ad"
                  placeholder="Ad"
                  value={form.ad}
                  onChange={handleChange}
                  required
                  style={styles.input}
                />
                <input
                  type="text"
                  name="soyad"
                  placeholder="Soyad"
                  value={form.soyad}
                  onChange={handleChange}
                  required
                  style={styles.input}
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="E-posta"
                value={form.email}
                onChange={handleChange}
                required
                style={styles.input}
              />
              <select
                name="cinsiyet"
                value={form.cinsiyet}
                onChange={handleChange}
                required
                style={styles.input}
              >
                <option value="">Cinsiyet</option>
                <option value="Erkek">Erkek</option>
                <option value="Kadın">Kadın</option>
                <option value="Belirtmek istemiyorum">Belirtmek istemiyorum</option>
              </select>
              <textarea
                name="adres"
                placeholder="Adres"
                value={form.adres}
                onChange={handleChange}
                required
                style={styles.textarea}
              />
              <input
                type="date"
                name="dogumTarihi"
                value={form.dogumTarihi}
                onChange={handleChange}
                required
                style={styles.input}
              />
              <input
                type="tel"
                name="telefon"
                placeholder="Telefon"
                value={form.telefon}
                onChange={handleChange}
                required
                style={styles.input}
              />
              <div style={{ marginBottom: 12 }}>
                <label style={{ fontWeight: 'bold', color: '#174b7e', marginRight: 8 }}>
                  CV Yükle:
                </label>
                <input
                  type="file"
                  name="cv"
                  accept=".pdf,.doc,.docx"
                  onChange={handleChange}
                  required
                  style={styles.fileInput}
                />
                {form.cv && (
                  <span style={{ color: '#2563a6', fontSize: 13, marginLeft: 8 }}>
                    {form.cv.name}
                  </span>
                )}
              </div>
              <div style={styles.formActions}>
                <button type="button" style={styles.cancelBtn} onClick={() => setShowModal(false)}>
                  Vazgeç
                </button>
                <button type="submit" style={styles.submitBtn}>
                  Başvur
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background: '#E1EEFF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingTop: 60
  },
  card: {
    background: 'white',
    borderRadius: 16,
    boxShadow: '0 4px 24px #b6c6e3',
    padding: '36px 32px',
    maxWidth: 600,
    width: '100%',
    margin: '0 auto'
  },
  title: {
    color: '#174b7e',
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: 8
  },
  meta: {
    color: '#2563a6',
    fontSize: 15,
    marginBottom: 18
  },
  company: {
    fontWeight: 'bold'
  },
  location: {
    marginLeft: 8
  },
  date: {
    marginLeft: 8
  },
  sectionTitle: {
    color: '#174b7e',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 18,
    marginBottom: 6
  },
  text: {
  color: '#222',
  fontSize: 15,
  marginBottom: 4,
  textAlign: 'justify', // tam hizalama eklendi
  lineHeight: '1.6'     // satırlar arası boşluk biraz artırıldı
},

  applyBtn: {
    display: 'inline-block',
    marginTop: 18,
    background: '#2563a6',
    color: 'white',
    padding: '12px 32px',
    borderRadius: 8,
    fontWeight: 'bold',
    fontSize: 16,
    textDecoration: 'none',
    boxShadow: '0 2px 8px #2563a622',
    border: 'none',
    cursor: 'pointer'
  },
  backLink: {
    color: '#2563a6',
    textDecoration: 'underline',
    fontSize: 15,
    fontWeight: 'bold'
  },
  // Modal styles
  modalOverlay: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    background: 'rgba(0,0,0,0.35)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000
  },
  modal: {
    background: '#E1EEFF',
    borderRadius: 16,
    boxShadow: '0 4px 24px #b6c6e3',
    padding: '32px 28px',
    minWidth: 340,
    maxWidth: 420,
    width: '100%'
  },
  modalTitle: {
    color: '#174b7e',
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 18,
    textAlign: 'center'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10
  },
  formRow: {
    display: 'flex',
    gap: 10
  },
  input: {
    flex: 1,
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #b6c6e3',
    fontSize: '15px',
    marginBottom: 0
  },
  textarea: {
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #b6c6e3',
    fontSize: '15px',
    minHeight: '60px',
    marginBottom: 0
  },
  fileInput: {
    marginTop: 4
  },
  formActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: 10,
    marginTop: 10
  },
  cancelBtn: {
    background: '#eee',
    color: '#174b7e',
    border: 'none',
    borderRadius: 6,
    padding: '8px 18px',
    fontWeight: 'bold',
    fontSize: 15,
    cursor: 'pointer'
  },
  submitBtn: {
    background: '#2563a6',
    color: 'white',
    border: 'none',
    borderRadius: 6,
    padding: '8px 18px',
    fontWeight: 'bold',
    fontSize: 15,
    cursor: 'pointer'
  }
};

export default JobDetailPage;