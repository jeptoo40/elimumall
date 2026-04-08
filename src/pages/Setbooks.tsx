import { useState } from "react";
import TopBar from "../TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ✅ Define type
type Item = {
  name: string;
  image: string;
  price: string;
  category: string;
};

const SetbooksItems: Item[] = [
  { name: "Silence Voices", image: "/images/s1.jpg", price: "KSh 350", category: "Setbooks" },
  { name: "Kifunganjia", image: "/images/s2.jpg", price: "KSh 350", category: "Setbooks" },
  { name: "SELINA", image: "/images/STORY2.jpg", price: "", category: "Storybooks" },
  { name: "School Trip", image: "/images/n1.jpg", price: "KSh 1150", category: "Novels" },
  { name: "Kigogo", image: "/images/s3.jpg", price: "KSh 350", category: "Setbooks" },
  { name: "THUNDER", image: "/images/STORY4.jpg", price: "", category: "Storybooks" },

  // ✅ FIX: added missing name
  { name: "Unknown Book", image: "/images/n2.jpg", price: "KSh 550", category: "Novels" },

  { name: "Chozi la Heri", image: "/images/s4.jpg", price: "KSh 350", category: "Setbooks" },
  { name: "NJINGA", image: "/images/STORY5.jpg", price: "", category: "Storybooks" },
  { name: "Bridges", image: "/images/s5.jpg", price: "KSh 650", category: "Setbooks" },
  { name: "THAMBI", image: "/images/STORY6.jpg", price: "", category: "Storybooks" },
  { name: "Blossoms of the Savannah", image: "/images/s6.jpg", price: "KSh 550", category: "Setbooks" },
  { name: "Betrayal in the city", image: "/images/s7.jpg", price: "KSh 650", category: "Setbooks" },
  { name: "River Between", image: "/images/s8.jpg", price: "KSh 950", category: "Setbooks" },
];

const phoneNumber = "254724491544";

// ✅ FIXED categories
const categories = ["All", "Setbooks", "Storybooks", "Novels"];

const SetbooksTools = () => {
  const [sort, setSort] = useState<string>("default");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredItems =
    selectedCategory === "All"
      ? SetbooksItems
      : SetbooksItems.filter((item) => item.category === selectedCategory);

  const sortedItems = () => {
    if (sort === "price-low") {
      return [...filteredItems].sort(
        (a, b) =>
          parseInt(a.price.replace(/\D/g, "") || "0") -
          parseInt(b.price.replace(/\D/g, "") || "0")
      );
    }
    if (sort === "price-high") {
      return [...filteredItems].sort(
        (a, b) =>
          parseInt(b.price.replace(/\D/g, "") || "0") -
          parseInt(a.price.replace(/\D/g, "") || "0")
      );
    }
    return filteredItems;
  };

  // ✅ FIXED types
  const handleWhatsApp = (price: string, name: string) => {
    const message = `Hello, I'm interested in ${name} priced at ${price}. How can I place my order?`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <TopBar />
      <Navbar />

      <section className="Setbooks-tools-section">
        <h2>Our Setbooks</h2>

        <div className="Setbooks-container">
          <div className="Setbooks-sidebar">
            <div className="sidebar-box">
              <h3>Categories</h3>

              {categories.map((cat, idx) => (
                <div
                  key={idx}
                  className={`sidebar-item ${
                    selectedCategory === cat ? "active" : ""
                  }`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </div>
              ))}
            </div>
          </div>

          <div className="Setbooks-main">
            <div className="Setbooks-topbar">
              <select onChange={(e) => setSort(e.target.value)}>
                <option value="default">Default sorting</option>
                <option value="price-low">Low to high</option>
                <option value="price-high">High to low</option>
              </select>
            </div>

            <div className="Setbooks-tools-grid">
              {sortedItems().map((item, index) => (
                <div className="Setbooks-tools-card" key={index}>
                  <img src={item.image} alt={item.name} />
                  <p className="tool-name">{item.name}</p>
                  <p className="price">{item.price}</p>

                  <button className="add-to-cart">Add to cart</button>

                  <button
                    className="whatsapp-btn"
                    onClick={() =>
                      handleWhatsApp(item.price, item.name)
                    }
                  >
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

export default SetbooksTools;