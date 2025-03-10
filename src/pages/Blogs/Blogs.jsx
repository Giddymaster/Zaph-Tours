import React from "react";
import "./blogs.css";
import BlogImg1 from "./../../assets/mt-kenya.jpg";
import BlogImg2 from "./../../assets/lake-nakuru-img.jpg";
import BlogImg3 from "./../../assets/Nairobi-natonal-park.jpg";
// import BlogImg4 from "./../../assets/hero-img.jpg";
// import BlogImg5 from "./../../assets/mt-rwenzori.jpeg";
// import BlogImg6 from "./../../assets/tsavo-national-park.jpg";

function blogs(){
  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Honeymoon Destinations for 2025",
      date: "March 10, 2025",
      author: "Zaph Tours",
      excerpt: "Discover the most romantic honeymoon spots for an unforgettable getaway. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam laudantium eligendi esse! Architecto aliquam non labore in ipsam excepturi doloribus, cupiditate, eius inventore consequatur quis modi molestiae accusantium magni voluptatem quia impedit earum eum odio. Perferendis autem similique temporibus beatae!",
      image: BlogImg1
    },
    {
      id: 2,
      title: "The Ultimate Family Vacation Guide",
      date: "March 5, 2025",
      author: "Zaph Tours",
      excerpt: "Explore the best family-friendly destinations and activities for a memorable trip. Aut nemo labore, culpa velit placeat ducimus facilis repellat voluptatum a repellendus sint ab numquam assumenda necessitatibus! Molestias rem delectus explicabo, harum facere iusto asperiores, debitis officiis aliquam sed rerum dolorem quis voluptates nesciunt dignissimos hic fuga voluptatibus minima vitae, eos quod corrupti sit enim? Facilis.",
      image: BlogImg2
    }, 
    {
      id: 3,
      title: "Thrilling Adventure Trips to Try This Year",
      date: "February 28, 2025",
      author: "Zaph Tours",
      excerpt: "From mountain climbing to white-water rafting, here are the best adventure tours. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ab temporibus laborum. Quo, voluptate ea. Aut consequuntur cupiditate minus impedit quos quaerat cum, modi dolorum perspiciatis, quod ut. Error, illum earum. Quam, error dicta sed dolore culpa suscipit veniam totam odit nostrum at voluptas maiores ullam incidunt, commodi placeat labore velit sapiente unde aliquid! ",
      image: BlogImg3
    },
  ];

  return (
    <div className="blog-page">
      <div className="blog-hero">
        <h1>Explore the World with Zaph Tours</h1>
      </div>
      <div className="blog-container">
        <div className="blog-main">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-card">
              <img src={post.image} alt={post.title} className="blog-image" />
              <div className="blog-content">
                <h2>{post.title}</h2>
                <p className="blog-date">{post.date} |  {post.author}</p>
                <p className="blog-excerpt">{post.excerpt}</p>
                <a href={`/blog/${post.id}`} className="read-more">Read More</a>
              </div>
            </div>
          ))}
        </div>


        <div className="blog-sidebar">
          <div className="search-box">
            <input type="text" placeholder="Search..." />
            <button>Search</button>
          </div>


          <div className="sidebar-section">
            <h3>Recent Posts</h3>
            <ul>
              <li><a href="#">Top Beach Destinations</a></li>
              <li><a href="#">Luxury Eco-Tourism</a></li>
              <li><a href="#">Best Adventure Trips</a></li>
            </ul>
          </div>

          <div className="sidebar-section">
            <h3>Archives</h3>
            <ul>
              <li><a href="#">March 2025</a></li>
              <li><a href="#">February 2025</a></li>
              <li><a href="#">January 2025</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default blogs;



