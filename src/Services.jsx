import "./Services.css";
import { FaGem, FaHeart, FaGlobe } from "react-icons/fa";

function Services() {
  return (
    <section className="services">

      <h1>Our Services</h1>
      <p>Sub Heading Goes Here</p>

      <div className="services-container">

        <div className="card">
          <FaGem className="icon" />
          <h2>Development</h2>
          <p>
            Non varius mauris eget sodales tempus.
            Quisque sollicitudin consectetur accumsan.
          </p>
        </div>

        <div className="card">
          <FaHeart className="icon" />
          <h2>Design</h2>
          <p>
            Non varius mauris eget sodales tempus.
            Quisque sollicitudin consectetur accumsan.
          </p>
        </div>

        <div className="card">
          <FaGlobe className="icon" />
          <h2>SEO</h2>
          <p>
            Non varius mauris eget sodales tempus.
            Quisque sollicitudin consectetur accumsan.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Services;