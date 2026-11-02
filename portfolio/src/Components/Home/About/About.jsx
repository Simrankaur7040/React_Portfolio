
import "./About.css";

function About() {
  return (
    <section className="about-container" id="about">
      <div className="about-card">
        <p className="about-label">GET TO KNOW ME</p>

        <h2 className="about-title">
          About <span>Me</span>
        </h2>

        <p className="about-text">
          Hi, I'm Simran! I'm a passionate web developer who
          enjoys creating beautiful, responsive, and
          user-friendly websites. I love turning creative
          ideas into interactive web experiences and
          continuously improving my development skills.
        </p>

        <h3 className="skills-title">My Tech Stack</h3>

        <div className="skills-container">
          <div className="skill">
            <span className="skill-icon">🌐</span>
            <span>HTML</span>
          </div>

          <div className="skill">
            <span className="skill-icon">🎨</span>
            <span>CSS</span>
          </div>

          <div className="skill">
            <span className="skill-icon">🅱️</span>
            <span>Bootstrap</span>
          </div>

          <div className="skill">
            <span className="skill-icon">💨</span>
            <span>Tailwind CSS</span>
          </div>
        </div>

        <div className="about-footer">
          <span className="status-dot"></span>
          Always learning. Always building.
        </div>
      </div>
    </section>
  );
}

export default About;
