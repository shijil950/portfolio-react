import "./About.css";
import { FaCode, FaDatabase, FaServer, FaLaptopCode } from "react-icons/fa";

import profile from "./profile/anu.png";

function About() {
  return (
    <section className="about">
      <h1 className="about-title">About Me</h1>
      <p className="about-subtitle">The Developer Behind the Code</p>

      <div className="about-container">
        {/* ഇടത് വശത്ത് നിങ്ങളുടെ പ്രൊഫഷണൽ ഫോട്ടോ */}
        <div className="about-image-section">
          <div className="image-border-effect">
            <img 
              src={profile} // 💡 ഇവിടെ നമ്മൾ ഇംപോർട്ട് ചെയ്ത ഫോട്ടോ വേരിയബിൾ നൽകി
              alt="Shijil - MERN Stack Developer" 
            />
          </div>
        </div>

        {/* വലത് വശത്ത് നിങ്ങളെക്കുറിച്ചുള്ള വിവരണം */}
        <div className="about-content-section">
          <h2>Hi, I'm Shijil</h2>
          <h3>Full-Stack MERN Developer & Freelancer</h3>
          
          <p className="about-text">
            I am a passionate Full-Stack Web Developer specializing in the <strong>MERN Stack</strong> (MongoDB, Express.js, React, Node.js). 
            As a freelancer, I love turning complex problems into beautiful, scalable, and high-performance web applications.
          </p>
          
          <p className="about-text">
            From crafting pixel-perfect responsive user interfaces to designing secure and robust backend APIs, 
            I handle the entire development lifecycle independently. I focus on writing clean, maintainable code 
            that helps businesses grow online.
          </p>

          {/* നിങ്ങളുടെ പ്രധാന ടൂളുകൾ കാണിക്കുന്ന ചെറിയ സെക്ഷൻ */}
          <div className="tech-badges">
            <span className="badge"><FaLaptopCode /> React.js</span>
            <span className="badge"><FaServer /> Node.js</span>
            <span className="badge"><FaCode /> Express.js</span>
            <span className="badge"><FaDatabase /> MongoDB</span>
          </div>

          <a href="#contact" className="about-cta-btn">Work With Me</a>
        </div>
      </div>
    </section>
  );
}

export default About;