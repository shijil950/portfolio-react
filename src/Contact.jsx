import "./Contact.css";
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaWhatsapp } from "react-icons/fa";

function Contact() {
  // ബട്ടൺ ക്ലിക്ക് ചെയ്യുമ്പോൾ വാട്സാപ്പ് ഓപ്പൺ ആകാനുള്ള ഫങ്ക്ഷൻ
  const handleWhatsAppClick = (e) => {
    e.preventDefault(); // ഫോം തനിയെ റീലോഡ് ആകുന്നത് തടയാൻ
    window.open(
      "https://wa.me/7558028950?text=Hello i want to know more about your services",
      "_blank"
    );
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
            Drop a message and let's connect directly via WhatsApp or Email.
          </p>

          <div className="info-details">
            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <div>
                <h3>Email Me</h3>
                <p>shijilshaze38@gmail.com</p>
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
          {/* സോഷ്യൽ മീഡിയ ലിങ്കുകൾ */}
<div className="social-links">
  {/* 💡 https://linkedin.com/in/your-username എന്നതിന് പകരം നിങ്ങളുടെ ശരിക്കുള്ള ലിങ്ക്ഡ്ഇൻ പ്രൊഫൈൽ ലിങ്ക് നൽകുക */}
  <a href="www.linkedin.com/in/muhammed-shijil" target="_blank" rel="noreferrer">
    <FaLinkedin />
  </a>
  
  {/* 💡 https://github.com/your-username എന്നതിന് പകരം നിങ്ങളുടെ ശരിക്കുള്ള ഗിറ്റ്‌ഹബ്ബ് ലിങ്ക് നൽകുക */}
  <a href="https://github.com/shijil950" target="_blank" rel="noreferrer">
    <FaGithub />
  </a>
  
  <a href="https://twitter.com" target="_blank" rel="noreferrer">
    <FaTwitter />
  </a>
</div>
        </div>

        {/* വലത് വശം: ഇൻപുട്ട് ഫോം */}
        <div className="contact-form-panel">
          <form onSubmit={handleWhatsAppClick}>
            <div className="form-group">
              <label>Your Name</label>
              <input type="text" placeholder="Muhammed shijil" required />
            </div>

            <div className="form-group">
              <label>Your Email</label>
              <input type="email" placeholder="shijilshaze38@gmail.com" required />
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input type="text" placeholder="Project Discussion" required />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea rows="5" placeholder="Tell me about your project..." required></textarea>
            </div>

            {/* വാട്സാപ്പ് ഐക്കണോട് കൂടിയ പുതിയ ബട്ടൺ */}
            <button type="submit" className="submit-btn">
              <FaWhatsapp style={{ marginRight: "8px", fontSize: "1.2rem", verticalAlign: "middle" }} /> 
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;