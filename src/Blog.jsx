import "./Blog.css";

// ബ്ലോഗ് ലേഖനങ്ങളുടെ വിവരങ്ങൾ
const blogArticles = [
  {
    id: 1,
    title: "Why Your Business Needs a Custom MERN Stack App",
    description: "Discover why tech-driven businesses choose React and Node.js over traditional CMS platforms like WordPress.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500", // കോഡിംഗ് ഇമേജ്
    link: "#"
  },
  {
    id: 2,
    title: "How I Built a Scalable E-Commerce API with Node & MongoDB",
    description: "A deep dive into secure authentication, database indexing, and performance optimization in full-stack apps.",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=500", // റിയാക്റ്റ്/ടെക് ഇമേജ്
    link: "#"
  },
  {
    id: 3,
    title: "10 Web Performance Optimization Tips for 2026",
    description: "Learn how to improve your website's loading speed, SEO score, and user retention using modern clean code.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500", // ഡാറ്റ/SEO ഒപ്റ്റിമൈസേഷൻ ഇമേജ്
    link: "#"
  }
];

function Blog() {
  return (
    <section className="blog-section">
      <h1 className="blog-title">Latest Blog</h1>
      <p className="blog-subtitle">Recent Articles on Web Development & Tech</p>

      <div className="blog-container">
        {blogArticles.map((article) => (
          <div key={article.id} className="blog-card">
            <div className="blog-img-box">
              <img src={article.image} alt={article.title} />
            </div>
            <div className="blog-info-box">
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <a href={article.link} className="read-more-btn">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;