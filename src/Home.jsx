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
    // container-fluid, py-5 ഉപയോഗിച്ച് മൊബൈലിൽ ആവശ്യത്തിന് സ്പേസ് നൽകി
    <section className="home-hero container-fluid py-5 min-vh-100 d-flex align-items-center">
      
      {/* Bootstrap Grid System (row-cols-1 ലാപ്ടോപ്പിൽ സൈഡ് ബൈ സൈഡ് ആയും 
        മൊബൈലിൽ ഒന്നിന് താഴെ ഒന്നായും മാറ്റും)
      */}
      <div className="row align-items-center justify-content-center w-100 m-0 px-md-5">
        
        {/* 1. ഇടത് വശത്തെ കണ്ടെന്റ് (മൊബൈലിൽ ഇത് ആദ്യം വരും) */}
        {/* col-12 (മൊബൈലിൽ ഫുൾ വിഡ്ത്), col-lg-7 (ലാപ്ടോപ്പിൽ 7 കോളം വിഡ്ത്) */}
        <div className="col-12 col-lg-7 text-center text-lg-start order-2 order-lg-1 px-3">
          
          <span className="welcome-tag d-inline-block bg-dark text-success border border-success rounded-pill px-3 py-2 mb-4 fs-6 fw-bold">
            Available for Freelance Projects
          </span>
          
          {/* display-4, display-md-2 ഫോൺ സ്ക്രീനുകളിൽ ഫോണ്ട് സൈസ് തനിയെ കുറയ്ക്കും */}
          <h1 className="hero-title display-4 display-md-2 fw-bold text-white mb-3">
            Hi, I'm <span className="highlight text-success">SHIJIL.</span>
          </h1>
          
          <h2 className="hero-typing h3 text-white mb-4">
            I am a <span className="typewriter text-info">{currentText}</span>
            <span className="cursor">|</span>
          </h2>
          
          {/* mx-auto mx-lg-0 മൊബൈലിൽ സെന്റർ ചെയ്യാനും ലാപ്ടോപ്പിൽ ലെഫ്റ്റ് അലൈൻ ചെയ്യാനും */}
          <p className="hero-description text-secondary mb-5 mx-auto mx-lg-0" style={{ maxWidth: '600px', fontSize: '1.1rem', lineHeight: '1.7' }}>
            Building high-performance, secure, and scalable full-stack web applications 
            tailored to your business needs using modern MongoDB, Express, React, and Node.js.
          </p>
          
          {/* ബട്ടണുകൾ മൊബൈലിൽ സെന്ററിലും വലിയ സ്ക്രീനിൽ ഇടതുവശത്തും വരാൻ */}
          <div className="hero-buttons d-flex flex-wrap justify-content-center justify-content-lg-start gap-3">
            <a href="/portfolio" className="btn btn-success rounded-pill px-4 py-2 fw-semibold text-white">View My Work</a>
            <a href="/contact" className="btn btn-outline-light rounded-pill px-4 py-2 fw-semibold">Let's Talk</a>
          </div>
          
        </div>

        {/* 2. വലത് വശത്തെ ഗ്രാഫിക്സ് (ബട്ടണുകൾ) */}
        {/* col-12 (മൊബൈലിൽ ഫുൾ വിഡ്ത്), col-lg-5 (ലാപ്ടോപ്പിൽ 5 കോളം വിഡ്ത്) */}
        {/* order-1 ഉള്ളതുകൊണ്ട് മൊബൈലിൽ ഇത് മുകളിലും ലാപ്ടോപ്പിൽ സൈഡിലും വരും */}
        <div className="col-12 col-lg-5 text-center order-1 order-lg-2 mb-5 mb-lg-0">
          <div className="hero-visual d-flex justify-content-center align-items-center">
            
            {/* മൊബൈലിൽ സ്ഥലം തികയാതെ വരുമ്പോൾ ബട്ടണുകൾ ഓവർലാപ്പ് ചെയ്യാതെ 
              താഴേക്ക് ഒതുങ്ങാൻ d-flex flex-wrap ഉപയോഗിച്ചു
            */}
            <div className="tech-sphere d-flex flex-wrap justify-content-center gap-3 p-3 position-relative" style={{ maxWidth: '400px' }}>
              <div className="circle react-circle btn btn-outline-info rounded-pill px-4 py-2 m-1 text-white fw-semibold">React</div>
              <div className="circle node-circle btn btn-outline-success rounded-pill px-4 py-2 m-1 text-white fw-semibold">Node</div>
              <div className="circle mongo-circle btn btn-outline-success rounded-pill px-4 py-2 m-1 text-white fw-semibold">Mongo</div>
              <div className="circle express-circle btn btn-outline-light rounded-pill px-4 py-2 m-1 text-white fw-semibold">Express</div>
              <div className="center-glow position-absolute top-50 start-50 translate-middle" style={{ width: '100px', height: '100px', background: 'radial-gradient(circle, rgba(40,167,69,0.3) 0%, transparent 70%)', zIndex: -1 }}></div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Home;