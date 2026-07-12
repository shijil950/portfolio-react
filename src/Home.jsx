import { useEffect, useState } from "react";
import "./Home.css";

function Home() {
  const words = ["MERN Stack Developer", "Freelancer", "Full-Stack Engineer"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullWord = words[currentWordIndex];
      
      if (!isDeleting) {
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        if (currentText === fullWord) {
          setIsDeleting(true);
          setTypingSpeed(1000); // വാക്ക് പൂർണ്ണമായാൽ അല്പം നിർത്താൻ
        } else {
          setTypingSpeed(100);
        }
      } else {
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          setTypingSpeed(200);
        } else {
          setTypingSpeed(50);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <section className="home-hero">
      <div className="hero-container">
        
        {/* ഇടത് വശത്തെ കണ്ടെന്റ് */}
        <div className="hero-content">
          <span className="welcome-tag">Available for Freelance Projects</span>
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">SHIJIL.</span>
          </h1>
          <h2 className="hero-typing">
            I am a <span className="typewriter">{currentText}</span>
            <span className="cursor">|</span>
          </h2>
          <p className="hero-description">
            Building high-performance, secure, and scalable full-stack web applications 
            tailored to your business needs using modern MongoDB, Express, React, and Node.js.
          </p>
          
          <div className="hero-buttons">
            <a href="/portfolio" className="btn-primary">View My Work</a>
            <a href="/contact" className="btn-secondary">Let's Talk</a>
          </div>
        </div>

        {/* വലത് വശത്തെ ഗ്രാഫിക്സ് (ഫോട്ടോയ്ക്ക് പകരം മോഡേൺ കോഡിംഗ് വിഷ്വൽ) */}
        <div className="hero-visual">
          <div className="tech-sphere">
            <div className="circle react-circle">React</div>
            <div className="circle node-circle">Node</div>
            <div className="circle mongo-circle">Mongo</div>
            <div className="circle express-circle">Express</div>
            <div className="center-glow"></div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Home;