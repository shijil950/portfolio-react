import "./Blog.css";

function Blog() {
  return (
    <section className="blog">

      <h1>Latest Blog</h1>
      <p>Recent Articles</p>

      <div className="blog-container">

        <div className="blog-card">
          <img src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGVzaWdufGVufDB8fDB8fHww" alt="" />
          <h2>Web Design</h2>
          <p>
            Learn modern web design and responsive layouts.
          </p>
          <button  onClick={() =>
    window.open("https://www.datocms-assets.com/22695/1751327028-1735055724-what-is-web-design.webp", "_blank")
  }>Read More</button>
        </div>

        <div className="blog-card">
          <img src="https://c4.wallpaperflare.com/wallpaper/925/878/321/react-native-reactjs-hd-wallpaper-preview.jpg" alt="" />
          <h2>React Development</h2>
          <p>
            Build amazing websites using React and CSS.
          </p>
          <button onClick={() =>
    window.open("https://d14lhgoyljo1xt.cloudfront.net/assets/89888dbc10_react-vs-react-native.webp", "_blank")
  }>Read More</button>
        </div>

        <div className="blog-card">
          <img src="https://img.magnific.com/free-vector/seo-optimization-banner_33099-1690.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
          <h2>SEO Tips</h2>
          <p>
            Improve your website ranking with SEO techniques.
          </p>
          <button  onClick={() =>
    window.open("https://media.licdn.com/dms/image/v2/D4E12AQE_qYJatb0BDQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1661852495053?e=2147483647&v=beta&t=D-C1Sdhs0Vdr_5s_Li4tvuptd44WuRtkhl9zGPHd6Vk", "_blank")
  } >Read More</button>
        </div>

      </div>

    </section>
  );
}

export default Blog;