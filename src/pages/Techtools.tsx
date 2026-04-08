import { useState } from "react";
import TopBar from "../TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type TechItem = {
  name: string;
  image: string;
  price: string;
  category: string;
};

const techItems: TechItem[] = [
  { name: "Dell Laptop", image: "/images/dell-laptop.jpg", price: "KSh 45000", category: "Laptops" },
  { name: "HP Laptop", image: "/images/hp-laptop.jpg", price: "KSh 42000", category: "Laptops" },
  { name: "MacBook Air", image: "/images/macbook-air.jpg", price: "KSh 120000", category: "Laptops" },
  { name: "Logitech Mouse", image: "/images/logitech-mouse.jpg", price: "KSh 2500", category: "Accessories" },
  { name: "Mechanical Keyboard", image: "/images/keyboard.jpg", price: "KSh 7000", category: "Accessories" },
  { name: "External Hard Drive", image: "/images/hdd.jpg", price: "KSh 9000", category: "Storage" },
  { name: "Gaming Laptop", image: "/images/gaming-laptop.jpg", price: "KSh 85000", category: "Laptops" },
  { name: "USB-C Hub", image: "/images/usb-hub.jpg", price: "KSh 1500", category: "Accessories" },
  { name: "SSD 1TB", image: "/images/ssd.jpg", price: "KSh 14000", category: "Storage" },
];

const categories = ["All", "Laptops", "Accessories", "Storage"];
const phoneNumber = "254724491544";

const TechTools = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [sort, setSort] = useState<string>("default");

  const filteredItems = selectedCategory === "All"
    ? techItems
    : techItems.filter((item) => item.category === selectedCategory);

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

  const handleWhatsApp = (price: string, name: string) => {
    const message = `Hello, I'm interested in ${name} priced at ${price}. How can I place my order?`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <TopBar />
      <Navbar />

      <section className="tech-tools-section">
        <h2>Laptops & Computers</h2>

        
        <div className="tech-tools-controls">
          <div className="category-filter">
            {categories.map((cat) => (
              <button
                key={cat}
                className={selectedCategory === cat ? "active" : ""}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="sort-dropdown">
            <select onChange={(e) => setSort(e.target.value)}>
              <option value="default">Sort by</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="tech-tools-grid">
          {sortedItems().map((item, idx) => (
            <div className="tech-tools-card" key={idx}>
              <img src={item.image} alt={item.name} />
              <p className="tool-name">{item.name}</p>
              <p className="price">{item.price}</p>
              <div className="card-buttons">
                <button>Add to Cart</button>
                <button onClick={() => handleWhatsApp(item.price, item.name)}>
                  Order via WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default TechTools;