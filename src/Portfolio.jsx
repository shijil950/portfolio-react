import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">

      <h1>My Portfolio</h1>
      <p>Showing my latest work</p>

      <div className="buttons4">
        <button
  onClick={() =>
    window.open("https://4kwallpapers.com/images/walls/thumbs_3t/9789.jpeg", "_blank")
  }
>
  DESIGN
</button>
        <button
  onClick={() =>
    window.open("https://wallpapercat.com/w/full/b/7/8/100236-3840x2160-desktop-4k-cristiano-ronaldo-background-photo.jpg", "_blank")
  }
>
  GRAPHICS
</button>
        <button
  onClick={() =>
    window.open("https://wallpapercat.com/w/full/4/2/0/63996-3840x2160-desktop-4k-neymar-background.jpg", "_blank")
  }
>
  MUSIC
</button>
        <button
  onClick={() =>
    window.open("https://c4.wallpaperflare.com/wallpaper/152/95/721/sport-liverpool-clubs-steven-gerrard-wallpaper-preview.jpg", "_blank")
  }
>
  TECHNOLOGY
</button>
      </div>

      <div className="gallery">

        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=700"
          alt=""
        />

        <img
          src="https://images.unsplash.com/photo-1514565131-fce0801e5785?w=700"
          alt=""
        />

        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=700"
          alt=""
        />

        <img
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=700"
          alt=""
        />

      </div>

    </section>
  );
}

export default Portfolio;