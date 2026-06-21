import "./Home.css";
import profile from "./shijil.cv.png";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <section className="home">

      <div className="left">
        <h1>Hi, I am SHIJIL.</h1>

        <p>I am a web developer</p>

        <div className="buttons">
          <button onClick={() => navigate("/portfolio")}>
            SHOW PROFILE
          </button>

          <button onClick={() => navigate("/contact")}>
            KNOW MORE
          </button>
        </div>
      </div>

      <div className="right">
        <img src={profile} alt="Profile" />
      </div>

    </section>
  );
}

export default Home;