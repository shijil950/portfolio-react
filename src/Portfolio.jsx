import { useState } from "react";
import "./Portfolio.css";

// പ്രൊജക്റ്റുകളുടെ വിവരങ്ങൾ (ഭാവിയിൽ നിങ്ങൾക്ക് പുതിയ പ്രൊജക്റ്റുകൾ ഇതിലേക്ക് ആഡ് ചെയ്യാം)
const projectsData = [
  {
    id: 1,
    title: "E-Commerce Web App",
    category: "FULL-STACK",
    tech: "MERN Stack, Redux, Tailwind",
    image: "https://c0.wallpaperflare.com/preview/636/118/480/commerce-africa-asia-australia.jpg", // ഇവിടെ നിങ്ങളുടെ പ്രൊജക്റ്റിന്റെ സ്ക്രീൻഷോട്ട് നൽകുക
    liveLink: "https://yourliveapp.com",
    githubLink: "https://github.com/yourusername",
  },
  {
    id: 2,
    title: "Task Management Dashboard",
    category: "FRONTEND",
    tech: "React.js, Material UI, Context API",
    image: "https://t4.ftcdn.net/jpg/07/05/56/21/360_F_705562152_WFSrWPNw6TqrxQ3MJzWzaZ1oeH3jLtUu.jpg",
    liveLink: "https://yourliveapp.com",
    githubLink: "https://github.com/yourusername",
  },
  {
    id: 3,
    title: "RESTful Blogging API",
    category: "BACKEND",
    tech: "Node.js, Express, MongoDB, JWT",
    image: "https://media.istockphoto.com/id/1215417094/photo/api-application-programming-interface-concept-api-concept-with-young-man.jpg?s=612x612&w=0&k=20&c=3yA2_VyQzz8HJqYMUJrzW5obhOvJnQxiPui1EO1HUn4=",
    liveLink: "https://yourliveapp.com",
    githubLink: "https://github.com/yourusername",
  },
  {
    id: 4,
    title: "Real-time Chat Application",
    category: "FULL-STACK",
    tech: "React, Node.js, Socket.io, MongoDB",
    image: "https://png.pngtree.com/thumb_back/fh260/background/20230716/pngtree-portfolio-displays-and-mobile-apps-with-3d-shapes-chat-messages-and-image_3879137.jpg",
    liveLink: "https://yourliveapp.com",
    githubLink: "https://github.com/yourusername",
  },
];

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  // ബട്ടൺ ക്ലിക്ക് ചെയ്യുമ്പോൾ പ്രൊജക്റ്റ് ഫിൽട്ടർ ചെയ്യാനുള്ള ഫങ്ഷൻ
  const filteredProjects =
    activeFilter === "ALL"
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);

  return (
    <section className="portfolio">
      <h1 className="portfolio-title">My Portfolio</h1>
      <p className="portfolio-subtitle">Showing my latest software development work</p>

      {/* നിങ്ങളുടെ പ്രൊഫഷന് അനുയോജ്യമായ ഫിൽട്ടർ ബട്ടണുകൾ */}
      <div className="portfolio-buttons">
        {["ALL", "FULL-STACK", "FRONTEND", "BACKEND"].map((category) => (
          <button
            key={category}
            className={`filter-btn ${activeFilter === category ? "active" : ""}`}
            onClick={() => setActiveFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* പ്രൊജക്റ്റ് ഗാലറി */}
      <div className="portfolio-gallery">
        {filteredProjects.map((project) => (
          <div key={project.id} className="portfolio-card">
            <div className="portfolio-img-container">
              <img src={project.image} alt={project.title} />
              {/* മൗസ് കൊണ്ടുവെക്കുമ്പോൾ (Hover) കാണിക്കുന്ന ലിങ്കുകൾ */}
              <div className="portfolio-overlay">
                <div className="overlay-links">
                  <a href={project.liveLink} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noreferrer">
                    GitHub
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