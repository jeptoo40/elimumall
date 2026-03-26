import  { useState, useEffect } from "react";

const images = [
  "/images/hero-bg.jpg",
  "/images/hero-bg2.jpg",
  "/images/hero-bg3.jpg",
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  // every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // 5000ms = 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${images[current]})` }}
    >
      <div className="hero-content">
        <h1>Welcome to Elimu Library</h1>
        <p>Find books, materials, and tools to enhance your learning experience.</p>
        <a href="#books" className="hero-btn">Explore Now</a>
      </div>
    </section>
  );
};

export default Hero;