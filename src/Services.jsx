import "./Services.css";
// പുതിയ പ്രൊഫഷണൽ ഐക്കണുകൾ ഇംപോർട്ട് ചെയ്യുന്നു
import { FaCode, FaServer, FaCloudUploadAlt } from "react-icons/fa";

function Services() {
  return (
    <section className="services">
      <h1 className="services-title">Our Services</h1>
      <p className="services-subtitle">
        Turning Complex Ideas into Scalable Web Solutions
      </p>

      <div className="services-container">
        {/* Card 1: Frontend Development */}
        <div className="card">
          <div className="icon-wrapper">
            <FaCode className="icon" />
          </div>
          <h2>Frontend Development</h2>
          <p>
            Building responsive, high-performance web applications using React.js. 
            Focused on creating intuitive user experiences and clean codebases.
          </p>
        </div>

        {/* Card 2: Backend Development */}
        <div className="card">
          <div className="icon-wrapper">
            <FaServer className="icon" />
          </div>
          <h2>Backend & APIs</h2>
          <p>
            Developing robust, secure, and scalable server-side applications using 
            Node.js and Express.js, integrated with MongoDB databases.
          </p>
        </div>

        {/* Card 3: Full-Stack Deployment */}
        <div className="card">
          <div className="icon-wrapper">
            <FaCloudUploadAlt className="icon" />
          </div>
          <h2>Deployment & DevOps</h2>
          <p>
            Deploying Full-Stack applications on cloud platforms like AWS, Vercel, 
            or Heroku with optimized performance and SEO best practices.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;