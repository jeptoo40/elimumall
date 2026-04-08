import { useState, useMemo } from "react";
import TopBar from "../TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


type ShopItem = {
  name?: string;
  image: string;
  price: string;
  category: string;
};

const shopItems: ShopItem[] = [
  { name: "Educators", image: "/images/e1.jpg", price: "KSh 950", category: "Education" },
  { name: "Dell Laptop", image: "/images/dell-laptop.jpg", price: "KSh 45000", category: "Laptops" },

  { name: "School Trip", image: "/images/n1.jpg", price: "KSh 1150", category: "Novels" },
  { name: "HP Laptop", image: "/images/hp-laptop.jpg", price: "KSh 42000", category: "Laptops" },
  { name: "Color Pencils", image: "/images/Color Pencils1.jpg", price: "KSh 1150", category: "Sketch pad" },
  { image: "/images/bs2.jpg", price: "KSh 700", category: "Education" },

  { name: "MacBook Air", image: "/images/macbook-air.jpg", price: "KSh 120000", category: "Laptops" },
  { name: "Logitech Mouse", image: "/images/logitech-mouse.jpg", price: "KSh 2500", category: "Accessories" },
  { image: "/images/n2.jpg", price: "KSh 550", category: "Novels" },

  { name: "External Hard Drive", image: "/images/hdd.jpg", price: "KSh 9000", category: "Storage" },
  { name: "Color Pencils", image: "/images/6B-STAEDTLER-PENCIL-1-300x300.jpg", price: "KSh 150", category: "Pencils" },
  { name: "Gaming Laptop", image: "/images/gaming-laptop.jpg", price: "KSh 85000", category: "Laptops" },
  { image: "/images/e2.jpg", price: "KSh 2000", category: "Education" },
  
  { name: "SSD 1TB", image: "/images/ssd.jpg", price: "KSh 14000", category: "Storage" },
  { name: "Sketch Book", image: "/images/Sketch Book.jpg", price: "KSh 600", category: "Sketch pad" },
  { name:"Motivation", image: "/images/m3.jpg", price: "KSh 1000", category: "Education" },
];

const phoneNumber = "254724491544";
const categories = ["All", "Laptops", "Sketch pad", "Novels", "Education"];

const ShopTools = () => {
  const [sort, setSort] = useState<"default" | "price-low" | "price-high">("default");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // categorizing
  const filteredItems = useMemo(() => {
    return selectedCategory === "All"
      ? shopItems
      : shopItems.filter(item => item.category === selectedCategory);
  }, [selectedCategory]);

  // Sort items based on selected option
  const sortedItems = useMemo(() => {
    const parsePrice = (price: string) => parseInt(price.replace(/\D/g, ""));
    
    if (sort === "price-low") {
      return [...filteredItems].sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    }
    if (sort === "price-high") {
      return [...filteredItems].sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    }
    return filteredItems;
  }, [filteredItems, sort]);

  
  const handleWhatsApp = (price: string, name: string) => {
    const message = `Hello, I'm interested in ${name} priced at ${price}. How can I place my order?`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <TopBar />
      <Navbar />

      <section className="shop-tools-section">
        <h2>Shop</h2>

        <div className="shop-container">
          
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


          <div className="shop-main">
            
            <div className="shop-topbar">
              <select onChange={(e) => setSort(e.target.value as "default" | "price-low" | "price-high")}>
                <option value="default">Default sorting</option>
                <option value="price-low">Sort by price: low to high</option>
                <option value="price-high">Sort by price: high to low</option>
              </select>
            </div>

            
            <div className="shop-tools-grid">
              {sortedItems.map((item, index) => (
                <div className="shop-tools-card" key={`${item.name || "item"}-${index}`}>
                  <img src={item.image} alt={item.name || "Unnamed Item"} />
                  <p className="tool-name">{item.name || "Unnamed Item"}</p>
                  <p className="price">{item.price}</p>
                  <button className="add-to-cart">Add to cart</button>
                  <button
                    className="whatsapp-btn"
                    onClick={() => handleWhatsApp(item.price, item.name || "Unnamed Item")}
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

export default ShopTools;