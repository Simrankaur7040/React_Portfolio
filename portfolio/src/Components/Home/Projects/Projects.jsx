
import "./Projects.css";

function Projects() {
  return (
    <section className="projects-container" id="projects">
      <p className="projects-label">MY RECENT WORK</p>

      <h2 className="projects-title">
        My <span>Projects</span>
      </h2>

      <p className="projects-subtitle">
        Some things I've built while learning web development
      </p>

      <div className="projects-grid">

       
        <div className="project-card">
          <div className="project-top">
            <span className="project-number">01</span>
            <span className="project-category">HTML & CSS</span>
          </div>

          <div className="project-icon">{"</>"}</div>

          <h3>Responsive Website</h3>

          <p className="project-description">
            A clean and responsive website designed for
            desktop, tablet, and mobile screens.
          </p>

          <div className="project-technologies">
            <span>HTML</span>
            <span>CSS</span>
            <span>Responsive</span>
          </div>

          <button className="project-btn">
            View Project <span>↗</span>
          </button>
        </div>

      
        <div className="project-card">
          <div className="project-top">
            <span className="project-number">02</span>
            <span className="project-category">Bootstrap</span>
          </div>

          <div className="project-icon">{"</>"}</div>

          <h3>Netflix Clone Website </h3>

          <p className="project-description">
            A modern website using Bootstrap components
            and a responsive grid system.
          </p>

          <div className="project-technologies">
            <span>HTML</span>
            <span>CSS</span>
            <span>Bootstrap</span>
          </div>

          <button className="project-btn">
            View Project <span>↗</span>
          </button>
        </div>

        
        <div className="project-card">
          <div className="project-top">
            <span className="project-number">03</span>
            <span className="project-category">Tailwind CSS</span>
          </div>

          <div className="project-icon">{"</>"}</div>

          <h3>Modern UI Design</h3>

          <p className="project-description">
            A stylish and user-friendly interface with
            modern layouts and responsive styling.
          </p>

          <div className="project-technologies">
            <span>HTML</span>
            <span>Tailwind</span>
            <span>UI Design</span>
          </div>

          <button className="project-btn">
            View Project <span>↗</span>
          </button>
        </div>

      </div>
    </section>
  );
}

export default Projects;
