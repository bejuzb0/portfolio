import { MdArrowOutward } from "react-icons/md";
import "./styles/Contact.css";
import { EDUCATION_CONTACT, SITE } from "../data/portfolio";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href={SITE.linkedIn}
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — aditya8132
              </a>
            </p>
            <p>
              <a href={`mailto:${SITE.email}`} data-cursor="disable">
                {SITE.email}
              </a>
            </p>
            <h4>Education</h4>
            {EDUCATION_CONTACT.map((e) => (
              <p key={e.school}>
                {e.school} — {e.detail}
              </p>
            ))}
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href={SITE.github}
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href={SITE.linkedIn}
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href={SITE.resumeUrl}
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Résumé (PDF) <MdArrowOutward />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
