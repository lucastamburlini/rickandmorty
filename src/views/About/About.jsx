import Contact from "../../components/Contact/Contact";
import "./about.css"; // Asegúrate de tener un archivo CSS llamado About.css en la misma ubicación que este componente

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <div className="handcrafted">Handcrafted by me</div>
        <h1 className="name">Lucas Tamburlini</h1>
        <h2 className="cohort">cohorte: FT42a</h2>
      </div>
      <div className="about-content">
        <div className="intro">
          Welcome to my capstone project of the Henry Bootcamp. <br />
          In this project, I have created a website centered around the popular
          TV show Rick and Morty.
        </div>
        <div className="image">
          <img src="/faviconHenry.ico" alt="Henry" />
        </div>
        <div className="description">
          On my website, you&apos;ll be able to explore and immerse yourself in
          the fascinating universe of Rick Sanchez and his grandson Morty Smith.
          I have applied front-end and back-end development skills to create a
          comprehensive experience, using technologies like React, Node.js, and
          databases to make it possible. I hope you enjoy exploring my website
          as much as I enjoyed creating it!
        </div>
      </div>
      <div className="closing">
        <h2 className="closing-text">Wubba Lubba Dub Dub!</h2>
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
};

export default About;
