import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaFacebookF,
} from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import { useEffect, useState } from "react";
import HoverLinks from "./HoverLinks";
import { config } from "../config";

const SocialIcons = () => {
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;

    social.querySelectorAll("span").forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;

      const rect = elem.getBoundingClientRect();
      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = 0;
      let currentY = 0;

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);

        requestAnimationFrame(updatePosition);
      };

      const onMouseMove = (e: MouseEvent) => {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x < 40 && x > 10 && y < 40 && y > 5) {
          mouseX = x;
          mouseY = y;
        } else {
          mouseX = rect.width / 2;
          mouseY = rect.height / 2;
        }
      };

      document.addEventListener("mousemove", onMouseMove);

      updatePosition();

      return () => {
        elem.removeEventListener("mousemove", onMouseMove);
      };
    });
  }, []);

  return (
    <>
      {showResume && (
        <div className="resume-modal-overlay" onClick={() => setShowResume(false)}>
          <div className="resume-modal" onClick={(e) => e.stopPropagation()}>
            <button className="resume-modal-close" onClick={() => setShowResume(false)}>✕</button>
            <iframe
              src="/Waqas_Ahmed_Data_Analyst_Resume.pdf"
              className="resume-modal-iframe"
              title="Waqas Ahmed Resume"
            />
          </div>
        </div>
      )}
      <div className="icons-section">
        <div className="social-icons" data-cursor="icons" id="social">
          <span>
            <a href={config.contact.github} target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </span>
          <span>
            <a href={config.contact.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </span>
          <span>
            <a href={config.contact.twitter} target="_blank" rel="noopener noreferrer">
              <FaXTwitter />
            </a>
          </span>
          <span>
            <a href={config.contact.instagram} target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </span>
          <span>
            <a href={config.contact.facebook} target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
          </span>
        </div>
        <div className="resume-button" onClick={() => setShowResume(true)} style={{cursor:"pointer"}} data-cursor="disable">
          <HoverLinks text="RESUME" />
          <span>
            <TbNotes />
          </span>
        </div>
      </div>
    </>
  );
};

export default SocialIcons;
