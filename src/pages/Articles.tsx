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

const ArticleItems: Item[] = [
  { name: "Educators", image: "/images/e1.jpg", price: "KSh 950", category: "Education" },
  { name: "Lindsay", image: "/images/pas2.jpg", price: "KSh 100", category: "Articles" },
  { name: "School Trip", image: "/images/n1.jpg", price: "KSh 1150", category: "Novels" },

  // ✅ FIXED missing names
  { name: "Education Book 1", image: "/images/bs2.jpg", price: "KSh 700", category: "Education" },

  { name: "Rethinking", image: "/images/pas1.jpg", price: "KSh 50", category: "Articles" },

  { name: "Novel Book", image: "/images/n2.jpg", price: "KSh 550", category: "Novels" },

  { name: "The Thief", image: "/images/pas3.jpg", price: "KSh 100", category: "Articles" },

  { name: "Education Book 2", image: "/images/e2.jpg", price: "KSh 2000", category: "Education" },

  { name: "The Passion", image: "/images/pas.jpg", price: "KSh 750", category: "Articles" },

  { name: "Motivation", image: "/images/m3.jpg", price: "KSh 1000", category: "Education" },
];

const phoneNumber = "254724491544";

const categories = ["All", "Articles", "Novels", "Education"];

const ArticleTools = () => {
  const [sort, setSort] = useState<string>("default");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredItems =
    selectedCategory === "All"
      ? ArticleItems
      : ArticleItems.filter((item) => item.category === selectedCategory);

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

      <section className="Article-tools-section">
        <h2>Our Articles</h2>

        <div className="Article-container">
          <div className="Article-sidebar">
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

          <div className="Article-main">
            <div className="Article-topbar">
              <select onChange={(e) => setSort(e.target.value)}>
                <option value="default">Default sorting</option>
                <option value="price-low">Low to high</option>
                <option value="price-high">High to low</option>
              </select>
            </div>

            <div className="Article-tools-grid">
              {sortedItems().map((item, index) => (
                <div className="Article-tools-card" key={index}>
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

export default ArticleTools;