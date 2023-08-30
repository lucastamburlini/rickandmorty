import Contact from "../../components/Contact/Contact";
import "./about.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <div className="about-handcrafted">Handcrafted by me</div>
        <h1 className="about-name">Lucas Tamburlini</h1>
        <h2 className="about-cohort">cohorte: FT42a</h2>
      </div>
      <div className="about-content">
        <p className="about-intro">
          Welcome to my capstone project of the Henry Bootcamp. <br />
          In this project, I have created a website centered around the popular
          TV show Rick and Morty.
        </p>
        <div className="about-image">
          <img src="/faviconHenry.ico" alt="Henry" />
        </div>
        <p className="about-description">
          On my website, you&apos;ll be able to explore and immerse yourself in
          the fascinating universe of Rick Sanchez and his grandson Morty Smith.
          I have applied front-end and back-end development skills to create a
          comprehensive experience, using technologies like React, Node.js, and
          databases to make it possible. I hope you enjoy exploring my website
          as much as I enjoyed creating it!
        </p>
      </div>
      <div className="about-closing">
        <h2 className="about-closing-text">Wubba Lubba Dub Dub!</h2>
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
};

export default About;
