import "./Team.css";

function Team() {
  return (
    <section className="team">
      <h1>Our Team</h1>
      <p>Sub Heading Goes Here</p>

      <div className="team-container">

        <div className="team-card orange">
          <img src="https://images.wallpapersden.com/image/wxl-tom-holland-hd_80561.jpg" alt="" />
          <div className="info">
            <h3>PETER</h3>
            <p>Designer</p>
          </div>
        </div>

        <div className="team-card red">
          <img src="https://i.pinimg.com/736x/06/e7/26/06e726a10d7360b47620d9d6a126ee4c.jpg" alt="" />
          <div className="info">
            <h3>TONY</h3>
            <p>Developer</p>
          </div>
        </div>

        <div className="team-card blue">
          <img src="https://images3.alphacoders.com/100/1004417.jpg" alt="" />
          <div className="info">
            <h3>BRUCE</h3>
            <p>SEO Expert</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Team;