import { useState } from "react";
import TopBar from "../TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ✅ Type for a material item
type MaterialItem = {
  name?: string;
  image: string;
  price: string;
  category: string;
};

const MaterialItems: MaterialItem[] = [
  { name: "Educators", image: "/images/e1.jpg", price: "KSh 950", category: "Education" },
  { name: "Dell Laptop", image: "/images/dell-laptop.jpg", price: "KSh 45000", category: "Laptops" },
  { name: "School Trip", image: "/images/n1.jpg", price: "KSh 1150", category: "Novels" },
  { name: "HP Laptop", image: "/images/hp-laptop.jpg", price: "KSh 42000", category: "Laptops" },
  { name: "Color Pencils", image: "/images/Color Pencils1.jpg", price: "KSh 1150", category: "Sketch pad" },
  { name: "Stationary", image: "/images/stat1.jpg", price: "KSh 60", category: "Stationary" },
  { image: "/images/bs2.jpg", price: "KSh 700", category: "Education" },
  { name: "MacBook Air", image: "/images/macbook-air.jpg", price: "KSh 120000", category: "Laptops" },
  { name: "Logitech Mouse", image: "/images/logitech-mouse.jpg", price: "KSh 2500", category: "Accessories" },
  { image: "/images/n2.jpg", price: "KSh 550", category: "Novels" },
  { name: "Stationary", image: "/images/stat2.jpg", price: "KSh 140", category: "Stationary" },
  { name: "External Hard Drive", image: "/images/hdd.jpg", price: "KSh 9000", category: "Storage" },
  { name: "Color Pencils", image: "/images/6B-STAEDTLER-PENCIL-1-300x300.jpg", price: "KSh 150", category: "Pencils" },
  { name: "Gaming Laptop", image: "/images/gaming-laptop.jpg", price: "KSh 85000", category: "Laptops" },
  { image: "/images/e2.jpg", price: "KSh 2000", category: "Education" },
  { name: "Stationary", image: "/images/stat3.jpg", price: "KSh 100", category: "Stationary" },
  { name: "SSD 1TB", image: "/images/ssd.jpg", price: "KSh 14000", category: "Storage" },
  { name: "Sketch Book", image: "/images/Sketch Book.jpg", price: "KSh 600", category: "Sketch pad" },
  { name: "Stationary", image: "/images/stat5.jpg", price: "KSh 120", category: "Stationary" },
  { name: "Motivation", image: "/images/m3.jpg", price: "KSh 1000", category: "Education" },
  { name: "Stationary", image: "/images/stat4.jpg", price: "KSh 220", category: "Stationary" },
];

const categories = ["All", "Stationary", "Laptops", "Sketch pad", "Novels", "Education"];
const phoneNumber = "254724491544";

const MaterialTools = () => {
  const [sort, setSort] = useState<string>("default");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredItems = selectedCategory === "All"
    ? MaterialItems
    : MaterialItems.filter((item) => item.category === selectedCategory);

  const sortedItems = () => {
    if (sort === "price-low") {
      return [...filteredItems].sort(
        (a, b) => parseInt(a.price.replace(/\D/g, "")) - parseInt(b.price.replace(/\D/g, ""))
      );
    }
    if (sort === "price-high") {
      return [...filteredItems].sort(
        (a, b) => parseInt(b.price.replace(/\D/g, "")) - parseInt(a.price.replace(/\D/g, ""))
      );
    }
    return filteredItems;
  };

  const handleWhatsApp = (price: string, name?: string) => {
    const message = `Hello, I'm interested in ${name ?? "this item"} priced at ${price}. How can I place my order?`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <TopBar />
      <Navbar />

      <section className="Material-tools-section">
        <h2>Our Materials</h2>

        <div className="Material-container">
          {/* SIDEBAR */}
          <div className="shop-sidebar">
            <div className="sidebar-box">
              <h3>Categories</h3>
              {categories.map((cat, idx) => (
                <div
                  key={idx}
                  className={`sidebar-item ${selectedCategory === cat ? "active" : ""}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </div>
              ))}
            </div>
          </div>

          {/* MAIN CONTENT */}
          <div className="Material-main">
            <div className="Material-topbar">
              <select onChange={(e) => setSort(e.target.value)}>
                <option value="default">Default sorting</option>
                <option value="price-low">Sort by price: low to high</option>
                <option value="price-high">Sort by price: high to low</option>
              </select>
            </div>

            <div className="Material-tools-grid">
              {sortedItems().map((item, index) => (
                <div className="Material-tools-card" key={index}>
                  <img src={item.image} alt={item.name} />
                  <p className="tool-name">{item.name}</p>
                  <p className="price">{item.price}</p>
                  <button className="add-to-cart">Add to cart</button>
                  <button className="whatsapp-btn" onClick={() => handleWhatsApp(item.price, item.name)}>
                    Order via WhatsApp
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default MaterialTools;