import React from 'react';
import './Home.css';

function Home() {
  const categories = [
    { name: 'Fruits', img: '/images/fruits.png' },
    { name: 'Vegetables', img: '/images/vegetables.jpg' },
    { name: 'Dairy Products', img: '/images/dairy.jpg' },
    { name: 'Veg', img: '/images/veg.jpg' },
    { name: 'Non-Veg', img: '/images/nonveg.jpg' },
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Welcome to Blink-it</h1>
          
          
        </div>
      </header>

      {/* Categories Grid */}
      <section className="categories-section">
        <h2>Categories</h2>
        <div className="categories-grid">
          {categories.map((cat, index) => (
            <div className="category-card" key={index}>
              <img src={cat.img} alt={cat.name} />
              <h3>{cat.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-section">
        <p>&copy; {new Date().getFullYear()} Blink-it. All rights reserved.</p>
        <p>Contact us: <a href="mailto:support@blinkit.com">support@blinkit.com</a></p>
      </footer>
    </div>
  );
}

export default Home;
