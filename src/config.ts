export const config = {
    developer: {
        name: "Waqas",
        fullName: "Waqas Ahmed",
        title: "Data Analyst",
        description: "I build data solutions that drive real business decisions. From $1.1M sales dashboards to 99% accurate ML models — I turn raw data into actionable insights using SQL, Python, Power BI, and Machine Learning."
    },
    social: {
        github: "waqaswajla",
        email: "waqasahmed.da@gmail.com",
        location: "Taxila, Pakistan"
    },
    about: {
        title: "About Me",
        description: "Final-year Computer Science student specializing in Data Science with hands-on experience in SQL, Power BI, Python, Excel, and ETL processes. Delivered analytical dashboards, churn prediction models, and machine learning projects using real-world datasets through internships and academic projects."
    },
    experiences: [
        {
            position: "BS Computer Science",
            company: "HITEC University, Taxila",
            period: "Sep 2022 – Jul 2026",
            location: "Taxila, Pakistan",
            description: "Final-year Computer Science student specializing in Data Science. Built Pakistan Sign Language Recognition System as Final Year Project achieving 98.6% accuracy. Relevant coursework includes Machine Learning, Database Systems, and Statistics.",
            responsibilities: [
                "Built Pakistan Sign Language Recognition System as Final Year Project achieving 98.6% accuracy",
                "Specializing in Data Science and Machine Learning",
                "Coursework: Machine Learning, Database Systems, Statistics",
                "Applying academic knowledge to internship and real-world projects"
            ],
            technologies: ["Python", "SQL", "Machine Learning", "Statistics", "Database Systems"]
        },
        {
            position: "Data Analyst Intern",
            company: "Developers Hub",
            period: "Aug 2025 – Oct 2025",
            location: "Pakistan",
            description: "Cleaned and transformed 4-year Superstore sales data across 4 US regions using SQL, Python, and ETL pipelines on GCP BigQuery. Built an interactive Power BI dashboard tracking $1.1M in sales, $132.5K profit, and 12% profit margin — identifying West region as top performer at $332.4K revenue.",
            responsibilities: [
                "Cleaned and transformed 4-year Superstore sales dataset using SQL, Python Pandas, and ETL pipelines on GCP BigQuery",
                "Built Power BI dashboard tracking $1.1M sales, $132.5K profit, and 12% profit margin using DAX formulas",
                "Conducted EDA identifying West region as top performer with $332.4K and East at $330.7K out of $1.1M revenue",
                "Applied regional and category trend analysis for actionable business recommendations"
            ],
            technologies: ["Power BI", "DAX", "SQL", "Python", "Pandas", "GCP BigQuery", "ETL"]
        },
        {
            position: "Data Science Intern",
            company: "ITSOLERA",
            period: "May 2025 – Jul 2025",
            location: "Pakistan",
            description: "Built ML models for geological hazard prediction achieving 86% cross-validated accuracy and 95.7% ROC AUC score using Random Forest and KNN. Engineered LSTM neural network classifying 5 human activities from 75,000+ real sensor readings achieving 99%+ accuracy using TensorFlow.",
            responsibilities: [
                "Built Rockburst Intensity Prediction model using Random Forest and KNN — 86% CV accuracy, 95.7% ROC AUC",
                "Engineered LSTM-based Human Activity Recognition system classifying 5 activities from 75,000+ sensor readings at 99%+ accuracy",
                "Applied feature engineering, cross-validation, and model evaluation techniques",
                "Documented findings in competition-grade notebooks with visual dashboards"
            ],
            technologies: ["Python", "TensorFlow", "Scikit-learn", "LSTM", "Random Forest", "KNN", "Jupyter Notebook"]
        }
    ],
    projects: [
        {
            id: 1,
            title: "Super Store Sales Dashboard",
            category: "Power BI / Business Intelligence",
            technologies: ["Power BI", "DAX", "SQL", "Python", "Pandas", "GCP BigQuery", "ETL"],
            image: "/images/superstore.png",
            github: "",
            hasImage: true,
            comingSoon: false,
            highlights: [
                "Tracked $1.1M total sales · $132.5K profit · 12% margin across 4 years",
                "West region top performer at $332.4K — East close at $330.7K",
                "ETL pipeline on GCP BigQuery powering live US map + KPI dashboard"
            ],
            description: "Interactive Power BI dashboard tracking $1.1M total sales, $132.5K profit, and 12% profit margin across 4 years of Superstore data. Features regional analysis (West $332.4K, East $330.7K), sales by category, monthly trends, profit margin by region, and a live US map visualization — built with DAX formulas and ETL pipelines on GCP BigQuery."
        },
        {
            id: 2,
            title: "Customer Churn Retention Dashboard",
            category: "Data Analysis / Power BI",
            technologies: ["Python", "Power BI", "DAX", "Pandas", "Matplotlib", "Seaborn"],
            image: "/images/churn.png",
            github: "https://github.com/waqaswajla/customer-retention-analysis-dashboard",
            hasImage: true,
            comingSoon: false,
            highlights: [
                "26.6% churn rate · $139,131 monthly revenue at risk across 7,032 records",
                "Month-to-month contracts: 42.7% churn vs only 2.8% for 2-year contracts",
                "Recommended strategy shift projected to cut churn rate by 40%"
            ],
            description: "Analyzed 7,032 telecom records identifying 26.6% churn rate and $139,131 monthly revenue at risk. Discovered month-to-month contracts drive 42.7% churn vs 2.8% for two-year contracts. Delivered single-page Power BI dashboard with 4 DAX measures and 7 visuals — recommended contract strategy projected to reduce churn by 40%."
        },
        {
            id: 3,
            title: "Pakistan Sign Language Recognition",
            category: "AI / Computer Vision",
            technologies: ["Python", "FastAPI", "MediaPipe", "Next.js", "TensorFlow", "Edge TTS"],
            image: "/images/signlang.png",
            github: "",
            hasImage: false,
            comingSoon: true,
            highlights: [
                "98.6% accuracy detecting 36 Urdu sign letters via MLP + 42 MediaPipe landmarks",
                "Real-time sign-to-text-to-speech conversion with Urdu audio output",
                "Full-stack: FastAPI backend · Next.js frontend · Microsoft Edge TTS"
            ],
            description: "Real-time web app detecting 36 Urdu sign language letters using MLP neural network trained on 42 MediaPipe hand landmarks, achieving 98.6% accuracy. Full-stack system with FastAPI backend, Next.js frontend, and Microsoft Edge TTS for Urdu audio output — enabling real-time sign-to-text-to-speech conversion."
        },
        {
            id: 4,
            title: "Rockburst Intensity Prediction",
            category: "ML / Mining Safety",
            technologies: ["Python", "Scikit-learn", "Random Forest", "KNN", "Jupyter Notebook"],
            image: "/images/rockburst.png",
            github: "https://github.com/waqaswajla/augmenting-rockburst-intensity-prediction",
            hasImage: false,
            comingSoon: false,
            highlights: [
                "86% cross-validated accuracy · 95.7% ROC AUC on geological hazard data",
                "Random Forest + KNN on 400-row geotechnical dataset",
                "Full visual dashboard report with competition-grade analysis"
            ],
            description: "ML model predicting rockburst intensity in mining environments using geotechnical data. Achieved 86% cross-validated accuracy and 95.7% ROC AUC on a 400-row dataset using Random Forest and KNN. Developed during ITSOLERA internship with full visual dashboard report."
        },
        {
            id: 5,
            title: "Human Activity Recognition",
            category: "Deep Learning / LSTM",
            technologies: ["Python", "TensorFlow", "Keras", "LSTM", "Scikit-learn"],
            image: "/images/har.png",
            github: "https://github.com/waqaswajla/Human-Activity-Forecasting-Using-Wearable-Sensor-Data-",
            hasImage: false,
            comingSoon: false,
            highlights: [
                "99%+ accuracy classifying 5 activities from 75,000+ real sensor readings",
                "LSTM neural network on time-series data via TensorFlow + Keras",
                "Processed large-scale sensor data for real-world activity detection"
            ],
            description: "LSTM-based deep learning system classifying 5 human activities from 75,000+ sensor readings achieving 95% accuracy. Built during ITSOLERA internship using TensorFlow and Keras, processing large-scale time-series sensor data for real-world activity detection."
        }
    ],
    contact: {
        email: "waqasahmed.da@gmail.com",
        github: "https://github.com/waqaswajla",
        linkedin: "https://www.linkedin.com/in/waqas-ahmed-51929037b",
        twitter: "https://x.com/Waqaswajla",
        facebook: "https://www.facebook.com/share/1A3efnKNB6/",
        instagram: "https://www.instagram.com/waqas._.heree?igsh=NHY5cXk1a3Joanh6"
    },
    certifications: [
        "Google Data Analytics Professional Certificate — Coursera",
        "Power BI Data Analyst Certificate — Microsoft",
        "SQL for Data Science — Coursera"
    ],
    skills: {
        develop: {
            title: "DATA ANALYST",
            description: "I don't just analyze data — I make it speak",
            details: "From messy raw datasets to boardroom-ready insights, I architect end-to-end data solutions. I uncover the hidden stories inside your numbers and translate them into decisions that move business forward.",
            tools: [
                "Design KPI Dashboards",
                "Clean & Transform Data",
                "Write Complex SQL Queries",
                "Build ETL Pipelines",
                "Perform EDA",
                "Engineer Data Schemas",
                "Statistical Analysis",
                "Data Modeling",
                "Identify Business Trends",
                "Revenue & Profit Analysis",
                "Churn Prediction",
                "Customer Segmentation",
                "Regional Sales Reporting",
                "Data-Driven Storytelling"
            ]
        },
        design: {
            title: "BUSINESS ANALYST",
            description: "Turning business questions into data-driven answers.",
            details: "I build intelligent systems and visual intelligence tools that go beyond spreadsheets. Whether it's a live Power BI report or a 99% accurate ML model — I engineer solutions that scale and perform.",
            tools: [
                "Interactive Power BI Reports",
                "DAX Formula Engineering",
                "Train ML Models",
                "Deep Learning (LSTM & MLP)",
                "Feature Engineering",
                "Model Optimization (PCA, SMOTE)",
                "GCP BigQuery Pipelines",
                "Real-Time AI Web Apps",
                "Computer Vision Systems",
                "Sign Language Recognition",
                "Hazard Prediction Models",
                "Deploy FastAPI Backends",
                "End-to-End AI Pipelines",
                "Performance Benchmarking"
            ]
        }
    }
};
