import React, { useRef, useEffect } from "react";

const laptopProducts = [
  { name: "MacBook Pro", price: "$1200", image: "/images/laptop1.jpg" },
  { name: "Dell XPS 13", price: "$1000", image: "/images/laptop2.jpg" },
  { name: "HP Spectre", price: "$950", image: "/images/laptop3.jpg" },
  { name: "Lenovo ThinkPad", price: "$850", image: "/images/laptop4.jpg" },
  { name: "Lenovo T490S", price: "$850", image: "/images/laptop5.jpg" },
];

const ProductCategories = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const speed = 1; // pixels per interval
    const interval = setInterval(() => {
      if (scrollAmount >= container.scrollWidth - container.clientWidth) {
        scrollAmount = 0; // reset scroll
      } else {
        scrollAmount += speed;
      }
      container.scrollLeft = scrollAmount;
    }, 20); // every 20ms

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="product-categories">
      <div className="categories-sidebar">
        <h2>Products by Categories</h2>
        <ul>
          <li>Laptops & Computers</li>
          <li>Stationery</li>
          <li>All Categories ★</li>
        </ul>
      </div>

      <div className="products-row" ref={scrollRef}>
        {laptopProducts.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCategories;