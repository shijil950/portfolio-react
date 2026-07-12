import "./Contact.css";
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // നിങ്ങളുടെ ഫോം സബ്മിഷൻ ലോജിക് ഇവിടെ ചേർക്കാം
    alert("Message sent successfully!");
  };

  return (
    <section className="contact-section">
      <div className="contact-header">
        <h1 className="contact-title">Contact Me</h1>
        <p className="contact-subtitle">Let's build something amazing together</p>
      </div>

      <div className="contact-container">
        {/* ഇടത് വശം: ബന്ധപ്പെടാനുള്ള വിവരങ്ങൾ */}
        <div className="contact-info-panel">
          <h2>Get in Touch</h2>
          <p className="info-desc">
            Have a project in mind, looking for a freelancer, or just want to say hi? 
            Drop a message and I'll get back to you as soon as possible.
          </p>

          <div className="info-details">
            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <div>
                <h3>Email Me</h3>
                <p>shijil@example.com</p> {/* ഇവിടെ നിങ്ങളുടെ ഇമെയിൽ നൽകുക */}
              </div>
            </div>

            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <div>
                <h3>Location</h3>
                <p>Kerala, India</p>
              </div>
            </div>
          </div>

          {/* സോഷ്യൽ മീഡിയ ലിങ്കുകൾ */}
          <div className="social-links">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
          </div>
        </div>

        {/* വലത് വശം: മോഡേൺ ഇൻപുട്ട് ഫോം */}
        <div className="contact-form-panel">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Your Name</label>
              <input type="text" placeholder="John Doe" required />
            </div>

            <div className="form-group">
              <label>Your Email</label>
              <input type="email" placeholder="john@example.com" required />
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input type="text" placeholder="Project Discussion" required />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea rows="5" placeholder="Tell me about your project..." required></textarea>
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;