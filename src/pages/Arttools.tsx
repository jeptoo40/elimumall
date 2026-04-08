import { useState } from "react";
import TopBar from "../TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


type ArtItem = {
  name: string;
  image: string;
  price: string;
  category: string;
};

const artItems: ArtItem[] = [
  { name: "Sketch Book", image: "/images/Sketch.jpg", price: "KSh 1000", category: "Sketch" },
  { name: "Watercolor Set", image: "/images/Watercolor Set.jpg", price: "KSh 350", category: "Painting" },
  { name: "Brush Set", image: "/images/Brush Set.jpg", price: "KSh 700", category: "Brushes" },

  { name: "Canvas Pack", image: "/images/Canvas Pack.jpg", price: "KSh 400", category: "Canvas" },
  { name: "Color Pencils", image: "/images/Color Pencils.jpg", price: "KSh 1150", category: "Pencils" },

  { name: "Markers Set", image: "/images/Markers Set.jpg", price: "KSh 1000", category: "Markers" },

  { name: "Sketch Book", image: "/images/Sketch Book2.jpg", price: "KSh 1000", category: "Sketch" },
  { name: "Watercolor Set", image: "/images/Watercolor Set1.jpg", price: "KSh 350", category: "Painting" },

  { name: "Brush Set", image: "/images/Brushes.jpg", price: "KSh 700", category: "Brushes" },
  { name: "Canvas Pack", image: "/images/NIB-CALLIGRAPHY-PEN.jpg", price: "KSh 400", category: "Canvas" },
  
  { name: "Color Pencils", image: "/images/6B-STAEDTLER-PENCIL-1-300x300.jpg", price: "KSh 150", category: "Pencils" },

  { name: "Markers Set", image: "/images/crochet.jpeg", price: "KSh 1100", category: "Markers" },

  { name: "Sketch Book", image: "/images/Sketch Book.jpg", price: "KSh 600", category: "Sketch pad" },

  { name: "Watercolor Set", image: "/images/Watercolor.jpg", price: "KSh 750", category: "Painting" },

  { name: "Brush Set", image: "/images/Brush Set.jpg", price: "KSh 700", category: "Brushes" },
  { name: "Canvas Pack", image: "/images/Canvas Pack1.jpg", price: "KSh 400", category: "Canvas" },

  { name: "Color Pencils", image: "/images/Color Pencils1.jpg", price: "KSh 1150", category: "Pencils" },

  { name: "Markers Set", image: "/images/Markers Set1.jpg", price: "KSh 1700", category: "Markers" },
];

const phoneNumber = "254724491544";

const ArtTools = () => {
  const [sort, setSort] = useState<"default" | "price-low" | "price-high">("default");

  const filteredItems = artItems; 

 
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

  // handling whatsap
  const handleWhatsApp = (price: string, name: string) => {
    const message = `Hello, I'm interested in ${name} priced at ${price}. How can I place my order?`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      
      <TopBar />
      <Navbar />

      <section className="art-tools-section">
        <h2>Art Supplies</h2>

        {/* Sorting dropdown */}
        <div className="art-tools-topbar">
          <select onChange={(e) => setSort(e.target.value as "default" | "price-low" | "price-high")}>
            <option value="default">Sort by</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>

      
        <div className="art-tools-grid">
          {sortedItems().map((item, index) => (
            <div className="art-tools-card" key={index}>
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

export default ArtTools;