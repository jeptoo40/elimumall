import React from "react";

const categories = [
    { price: "$10", image: "/images/books.jpg" },
    { price: "$15", image: "/images/materials.jpg" },
    { price: "$50", image: "/images/tech-tools.jpg" },
    { price: "$5", image: "/images/stationary.jpg" },
    { price: "$2", image: "/images/pens.jpg" },
    { price: "$20", image: "/images/art.jpg" },
    { price: "$30", image: "/images/ipad.jpg" },
  ];
const Categories = () => {
  return (
    <section className="categories">
    <h2>Discover Our Categories</h2>
    <div className="categories-grid">
      {categories.map((cat, index) => (
        <div className="category-card" key={index}>
          <img src={cat.image} alt={`Item ${index}`} />
          <h3 className="price-tag">{cat.price}</h3>
        </div>
      ))}
    </div>
  </section>
  );
};

export default Categories;