
import "./Contact.css";

function Contact() {
  return (
    <section className="contact-container" id="contact">
      <p className="contact-label">LET'S CONNECT</p>

      <h2 className="contact-title">
        Contact <span>Me</span>
      </h2>

      <p className="contact-description">
        Have a project in mind? Let's work together!
      </p>

      <div className="contact-card">
        <form
          className="contact-form"
          onSubmit={(event) => {
            event.preventDefault();
            alert("Thank you for contacting me!");
          }}
        >
          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            required
          />

          <label htmlFor="email">Your Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            placeholder="Write your message here..."
            rows="5"
            required
          />

          <button type="submit" className="contact-btn">
            Send Message <span>↗</span>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
