import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <ul>
        <li>
          <a
            href="https://github.com/lucastamburlini"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/lucasgabrieltamburlini/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>
        </li>
        <li>
          <a
            href="mailto:lucastamburlini@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AlternateEmailIcon />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
