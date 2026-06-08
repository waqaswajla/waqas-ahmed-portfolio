import "./styles/Certifications.css";

interface Cert {
  name: string;
  issuer: string;
  icon: string;
  year: string;
  link: string;
}

const CERTS: Cert[] = [
  {
    name: "Google Data Analytics Professional Certificate",
    issuer: "Google · Coursera",
    icon: "https://img.icons8.com/color/96/google-logo.png",
    year: "2024",
    link: "https://www.coursera.org/professional-certificates/google-data-analytics",
  },
  {
    name: "Power BI Data Analyst Associate",
    issuer: "Microsoft",
    icon: "https://img.icons8.com/color/96/power-bi.png",
    year: "2024",
    link: "https://learn.microsoft.com/en-us/credentials/certifications/data-analyst-associate/",
  },
  {
    name: "SQL for Data Science",
    issuer: "UC Davis · Coursera",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    year: "2024",
    link: "https://www.coursera.org/learn/sql-for-data-science",
  },
];

const Certifications = () => (
  <div className="certs-section section-container" id="certifications">
    <h2 className="certs-title">
      Certifi<span>cations</span>
    </h2>
    <div className="certs-grid">
      {CERTS.map((cert, i) => (
        <a
          key={i}
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="cert-card"
          data-cursor="disable"
        >
          <div className="cert-icon-wrap">
            <img src={cert.icon} alt={cert.issuer} className="cert-icon" />
          </div>
          <div className="cert-info">
            <p className="cert-name">{cert.name}</p>
            <span className="cert-issuer">{cert.issuer}</span>
          </div>
          <div className="cert-badge">{cert.year}</div>
        </a>
      ))}
    </div>
  </div>
);

export default Certifications;
