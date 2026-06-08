import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";
import { config } from "../config";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

gsap.registerPlugin(ScrollTrigger);

// ── EmailJS credentials ──────────────────────────────────────────────────────
// 1. Sign up free at https://www.emailjs.com
// 2. Create a service (Gmail) → copy the Service ID
// 3. Create a template using variables: {{from_name}}, {{from_email}}, {{message}}
// 4. Go to Account → copy your Public Key
// Replace the three strings below with your real values:
const EJS_SERVICE  = "service_wr6thqb";
const EJS_TEMPLATE = "template_ap19di3";
const EJS_KEY      = "AVMbWpvYlq1Y1YMsq";
// ─────────────────────────────────────────────────────────────────────────────

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");
    emailjs
      .sendForm(EJS_SERVICE, EJS_TEMPLATE, formRef.current, EJS_KEY)
      .then(() => {
        setStatus("sent");
        formRef.current?.reset();
        setTimeout(() => setStatus("idle"), 5000);
      })
      .catch(() => setStatus("error"));
  };

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".contact-section",
        start: "top 80%",
        end: "bottom center",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(".contact-section h3", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" });
    tl.fromTo(".contact-form-wrap, .contact-info-side", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: "power3.out" }, "-=0.4");
    tl.fromTo(".contact-box", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.12, ease: "power3.out" }, "-=0.3");

    return () => { tl.kill(); };
  }, []);

  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Let's <span>Connect</span></h3>

        {/* ── Two-column: form + info ── */}
        <div className="contact-main">

          {/* Form */}
          <div className="contact-form-wrap">
            <p className="contact-form-intro">Have a project, opportunity, or just want to say hi?</p>
            <form ref={formRef} onSubmit={handleSubmit} className="contact-form" noValidate>
              <div className="cf-row">
                <div className="cf-field">
                  <label htmlFor="cf-name">Name</label>
                  <input id="cf-name" name="name" type="text" placeholder="Your name" required />
                </div>
                <div className="cf-field">
                  <label htmlFor="cf-email">Email</label>
                  <input id="cf-email" name="email" type="email" placeholder="your@email.com" required />
                </div>
              </div>
              <div className="cf-field">
                <label htmlFor="cf-msg">Message</label>
                <textarea id="cf-msg" name="message" placeholder="Tell me what you're working on..." rows={5} required />
              </div>
              <button type="submit" className="cf-submit" disabled={status === "sending"} data-cursor="disable">
                {status === "sending" ? "Sending…" : status === "sent" ? "Message Sent ✓" : status === "error" ? "Failed — try email" : "Send Message →"}
              </button>
              {status === "sent" && <p className="cf-success">Thanks! I'll get back to you soon.</p>}
              {status === "error" && <p className="cf-error">Something went wrong. Email me directly: <a href={`mailto:${config.contact.email}`}>{config.contact.email}</a></p>}
            </form>
          </div>

          {/* Info */}
          <div className="contact-info-side">
            <div className="contact-box">
              <h4>Email</h4>
              <p><a href={`mailto:${config.contact.email}`} data-cursor="disable">{config.contact.email}</a></p>
              <h4>Location</h4>
              <p><span>{config.social.location}</span></p>
            </div>
            <div className="contact-box">
              <h4>Social</h4>
              <a href={config.contact.github}    target="_blank" rel="noopener noreferrer" data-cursor="disable" className="contact-social">Github <MdArrowOutward /></a>
              <a href={config.contact.linkedin}  target="_blank" rel="noopener noreferrer" data-cursor="disable" className="contact-social">LinkedIn <MdArrowOutward /></a>
              <a href={config.contact.twitter}   target="_blank" rel="noopener noreferrer" data-cursor="disable" className="contact-social">X / Twitter <MdArrowOutward /></a>
              <a href={config.contact.facebook}  target="_blank" rel="noopener noreferrer" data-cursor="disable" className="contact-social">Facebook <MdArrowOutward /></a>
              <a href={config.contact.instagram} target="_blank" rel="noopener noreferrer" data-cursor="disable" className="contact-social">Instagram <MdArrowOutward /></a>
            </div>
          </div>
        </div>

        {/* Footer row */}
        <div className="contact-footer-row">
          <h2>Designed & Developed by <span>{config.developer.fullName}</span></h2>
          <h5><MdCopyright /> {new Date().getFullYear()}</h5>
        </div>
      </div>
    </div>
  );
};

export default Contact;
