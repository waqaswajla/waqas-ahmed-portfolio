import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
import { config } from "../config";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  useEffect(() => {
    if (window.innerWidth <= 768) return;

    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      if (box.length === 0) return;
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        id: "work",
        invalidateOnRefresh: true,
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    ScrollTrigger.refresh();

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <>
      <div className="work-section" id="work">
        <div className="work-container section-container">
          <h2>
            My <span>Work</span>
          </h2>
          <div className="work-flex">
            {config.projects.slice(0, 5).map((project, index) => (
              <div className="work-box" key={project.id}>
                <div className="work-info">
                  <div className="work-title">
                    <h3>0{index + 1}</h3>
                    <div>
                      <h4>{project.title}</h4>
                      <p>{project.category}</p>
                    </div>
                  </div>

                  <ul className="work-highlights">
                    {project.highlights.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>

                  <div className="work-tech-pills">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="work-tech-pill">{tech}</span>
                    ))}
                  </div>

                  <div className="work-actions">
                    {project.hasImage && (
                      <button
                        className="work-btn work-btn-view"
                        onClick={() => setPreviewImage(project.image)}
                        data-cursor="disable"
                      >
                        View ↗
                      </button>
                    )}
                    {project.comingSoon && (
                      <span className="work-btn work-btn-soon">
                        Coming Soon
                      </span>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="work-btn work-btn-github"
                        data-cursor="disable"
                      >
                        GitHub ↗
                      </a>
                    )}
                  </div>
                </div>
                {project.hasImage && (
                  <WorkImage image={project.image} alt={project.title} />
                )}
              </div>
            ))}
            <div className="work-box work-box-cta">
              <div className="see-all-works">
                <h3>Want to see more?</h3>
                <p>Explore all of my projects and creations</p>
                <Link to="/myworks" className="see-all-btn" data-cursor="disable">
                  See All Works →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {previewImage && (
        <div
          className="work-preview-overlay"
          onClick={() => setPreviewImage(null)}
        >
          <div className="work-preview-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="work-preview-close"
              onClick={() => setPreviewImage(null)}
            >
              ✕
            </button>
            <img src={previewImage} alt="Dashboard Preview" />
          </div>
        </div>
      )}
    </>
  );
};

export default Work;
