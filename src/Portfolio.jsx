import { useState } from "react";
import "./Portfolio.css";

// നിങ്ങളുടെ രണ്ട് ഡിജിറ്റൽ പ്രൊജക്റ്റുകൾ ഇവിടെ നൽകിയിരിക്കുന്നു
const projectsData = [
  {
    id: 1,
    title: "Zendo Web",
    category: "PROJECT",
    tech: "Web Development / Digital Marketing",
    image: "https://c0.wallpaperflare.com/preview/636/118/480/commerce-africa-asia-australia.jpg", // ആവശ്യമെങ്കിൽ ഇതിന്റെ സ്ക്രീൻഷോട്ട് ലിങ്ക് മാറ്റാം
    liveLink: "https://zendoweb.netlify.app/",
    githubLink: "#",
  },
  {
    id: 2,
    title: "Zonex Eduhub",
    category: "PROJECT",
    tech: "Education Hub / Web Platform",
    image: "https://t4.ftcdn.net/jpg/07/05/56/21/360_F_705562152_WFSrWPNw6TqrxQ3MJzWzaZ1oeH3jLtUu.jpg", // ആവശ്യമെങ്കിൽ ഇതിന്റെ സ്ക്രീൻഷോട്ട് ലിങ്ക് മാറ്റാം
    liveLink: "https://zonex-eduhub.netlify.app/",
    githubLink: "#",
  },
];

function Portfolio() {
  return (
    <section className="portfolio">
      <h1 className="portfolio-title">My Portfolio</h1>
      <p className="portfolio-subtitle">Showing my latest projects and work</p>

      {/* ഫിൽട്ടർ ബട്ടണുകൾ പൂർണ്ണമായി ഒഴിവാക്കി */}

      {/* പ്രൊജക്റ്റ് ഗാലറി */}
      <div className="portfolio-gallery">
        {projectsData.map((project) => (
          <div key={project.id} className="portfolio-card">
            <div className="portfolio-img-container">
              <img src={project.image} alt={project.title} />
              {/* മൗസ് കൊണ്ടുവെക്കുമ്പോൾ (Hover) കാണിക്കുന്ന ലിങ്കുകൾ */}
              <div className="portfolio-overlay">
                <div className="overlay-links">
                  <a href={project.liveLink} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="portfolio-info">
              <span className="project-category">{project.category}</span>
              <h3>{project.title}</h3>
              <p className="project-tech">{project.tech}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;