import "./styles/TechStackNew.css";

interface TechItem {
  name: string;
  icon: string;
  url: string;
}

// Waqas Ahmed — relevant tech stack only
// Pyramid: 7 → 6 → 5 → 4 → 3
const techStack: TechItem[][] = [
  // Row 1 — Core Languages & Key Frameworks
  [
    { name: "Python",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",           url: "https://python.org" },
    { name: "SQL",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",   url: "https://www.postgresql.org" },
    { name: "TypeScript",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",   url: "https://typescriptlang.org" },
    { name: "TensorFlow",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",   url: "https://tensorflow.org" },
    { name: "Keras",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg",             url: "https://keras.io" },
    { name: "Power BI",    icon: "https://img.icons8.com/color/96/power-bi.png",                                             url: "https://powerbi.microsoft.com" },
    { name: "Pandas",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",           url: "https://pandas.pydata.org" },
  ],
  // Row 2 — Data & ML Libraries
  [
    { name: "NumPy",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",             url: "https://numpy.org" },
    { name: "Scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg", url: "https://scikit-learn.org" },
    { name: "Matplotlib",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg",   url: "https://matplotlib.org" },
    { name: "FastAPI",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",         url: "https://fastapi.tiangolo.com" },
    { name: "Next.js",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",           url: "https://nextjs.org" },
    { name: "React",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",             url: "https://react.dev" },
  ],
  // Row 3 — Cloud, DB & DevOps
  [
    { name: "GCP BigQuery", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg", url: "https://cloud.google.com/bigquery" },
    { name: "MySQL",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",             url: "https://mysql.com" },
    { name: "Jupyter",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",         url: "https://jupyter.org" },
    { name: "Git",          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",                 url: "https://git-scm.com" },
    { name: "GitHub",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",           url: "https://github.com" },
  ],
  // Row 4 — Tools & Platforms
  [
    { name: "VS Code",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",                                url: "https://code.visualstudio.com" },
    { name: "Google Colab",  icon: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Colaboratory_SVG_Logo.svg",                         url: "https://colab.research.google.com" },
    { name: "MS Excel",      icon: "https://img.icons8.com/color/96/microsoft-excel-2019--v1.png",                                                  url: "https://microsoft.com/excel" },
    { name: "OpenCV",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",                                 url: "https://opencv.org" },
  ],
  // Row 5 — tip
  [
    { name: "Seaborn",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",          url: "https://seaborn.pydata.org" },
    { name: "MediaPipe",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",          url: "https://mediapipe.dev" },
    { name: "PostgreSQL",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",  url: "https://postgresql.org" },
  ],
];

const TechStackNew = () => {
  return (
    <div className="techstack-new">
      {/* Video Background */}
      <div className="techstack-video-container">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="techstack-video"
        >
          <source src="/video/video.webm" type="video/webm" />
        </video>
        {/* Dark Overlay */}
        <div className="techstack-overlay"></div>
      </div>

      {/* Content */}
      <div className="techstack-content">
        <h2>Tech Stack</h2>
        
        <div className="techstack-pyramid">
          {techStack.map((row, rowIndex) => (
            <div key={rowIndex} className="techstack-row">
              {row.map((tech, techIndex) => (
                <a
                  key={techIndex}
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="techstack-item"
                  title={tech.name}
                  data-cursor="disable"
                >
                  <img src={tech.icon} alt={tech.name} />
                  <span>{tech.name}</span>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackNew;
