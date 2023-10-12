import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

import "./About.module.css";

const About = () => {
  return (
    <div className="about-container">
      <div>
        <div className="about-handcrafted">Handcrafted by</div>
        <h1>Lucas Tamburlini</h1>
        <h2>Cohorte: FT42a</h2>
      </div>
      <div className="about-content">
        <p className="about-intro">
          Welcome to my capstone project of the Henry Bootcamp. <br />
          In this project, I have created a website centered around the popular
          TV show Rick and Morty.
        </p>
        <div className="about-image">
          <img src="../src/assets/rick_and_morty3.png" alt="Henry" />
        </div>
        <p className="about-description">
        On my website, you can explore the world of Rick Sanchez and Morty Smith. I&apos;ve used front-end and back-end development skills, including React, Node.js, and databases, to create a comprehensive experience. I hope you enjoy it as much as I enjoyed creating it!
        </p>
      </div>
      <div className="about-closing">
        <h2>Wubba Lubba Dub Dub!</h2>
      </div>
      <div className="about-contact">
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
      </div>
    </div>
  );
};

export default About;
