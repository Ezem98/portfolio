import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a
                href="mailto:ezequielmachado1998@gmail.com"
                data-cursor="disable"
              >
                ezequielmachado1998@gmail.com
              </a>
            </p>
            <h4>Teléfono</h4>
            <p>
              <a
                href="https://wa.me/5491132957947"
                target="_blank"
                data-cursor="disable"
              >
                +54 9 11 3295 7947
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Redes Sociales</h4>
            <a
              href="https://github.com/EzeM98"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/ezequiel-machado-089664194"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            {/* <a
              href="https://x.com"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Twitter <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a> */}
          </div>
          <div className="contact-box">
            <h2>
              Diseño Original <br />
              <span>Moncy Yohannan</span>
            </h2>
            <h5>
              <MdCopyright /> 2025
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
