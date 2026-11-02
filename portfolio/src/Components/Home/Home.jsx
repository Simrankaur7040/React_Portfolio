
import "./Home.css";
function Home() {
  return (
    <section className="home-container" id="home">
      <p className="profile-img" > SK</p>

      <h1 className="home-title">
        <span>I'm Simran,</span> frontend
        <br />
        developer based in India
      </h1>

      <p className="home-description">
        I am a passionate web developer who creates responsive
        and user-friendly websites using HTML, CSS, Bootstrap,
        and Tailwind CSS
      </p>

      <div className="home-buttons">
        <button className="connect-btn" >
          Connect with me
        </button>

        <a href="/resume.pdf" className="resume-btn" >
          My resume
        </a>
      </div>
    </section>
  );
}

export default Home;
