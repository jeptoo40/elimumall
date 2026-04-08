import { useState } from "react";
import TopBar from "../TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


type ShopItem = {
  image: string;
  price: string;
  category: string;
};

const booksImages = [
  { image: "/images/b1.jpg" },

  { image: "/images/b2.jpg" },

  { image: "/images/b3.jpg" },
  { image: "/images/b4.jpg" },
  { image: "/images/b5.jpg" },

  { image: "/images/b6.jpg" },

  { image: "/images/b7.jpg" },
  { image: "/images/b8.jpg" },
  { image: "/images/b10.jpg" },

  { image: "/images/b11.jpg" },

];

const shopItems: ShopItem[] = [
  { image: "/images/m1.jpg", price: "KSh 1000", category: "Motivational" },
  
  { image: "/images/e1.jpg", price: "KSh 950", category: "Education" },
  { image: "/images/bs1.jpg", price: "KSh 700", category: "Business" },

  { image: "/images/m2.jpg", price: "KSh 1400", category: "Motivational" },

  { image: "/images/n1.jpg", price: "KSh 1150", category: "Novels" },
 
  { image: "/images/e2.jpg", price: "KSh 2000", category: "Education" },
  { image: "/images/m3.jpg", price: "KSh 1000", category: "Motivational" },

  { image: "/images/e3.jpg", price: "KSh 950", category: "Education" },

  { image: "/images/bs2.jpg", price: "KSh 700", category: "Business" },
  { image: "/images/m4.jpg", price: "KSh 1400", category: "Motivational" },

  { image: "/images/n2.jpg", price: "KSh 550", category: "Novels" },
  { image: "/images/e4.jpg", price: "KSh 600", category: "Education" },
];

const categories = ["All", "Motivational", "Education", "Business", "Novels"];
const phoneNumber = "254724491544";

const Books = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredItems =
    selectedCategory === "All"
      ? shopItems
      : shopItems.filter((item) => item.category === selectedCategory);

 
  const handleWhatsApp = (price: string) => {

    const message = `Hello, I'm interested in this book priced at ${price}. How can I place my order?`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <>
     
      <TopBar />
      <Navbar />

  

      <section className="books">

        <h2>Our Books</h2>
        <div className="books-grid">

          {booksImages.map((book, index) => (
            <div className="books-card" key={index}>
              <img src={book.image} alt={`Book ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>

      

      <section className="shop-section">

        <div className="shop-container">
        
          <div className="shop-sidebar">

            <div className="sidebar-box">
              <h3>Categories</h3>
              {categories.map((cat, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedCategory(cat)}
                  className={`sidebar-item ${
                    selectedCategory === cat ? "active" : ""
                  }`}
                >
                  {cat}
                </div>
              ))}
            </div>
          </div>

          
          <div className="shop-grid">
            {filteredItems.map((item, index) => (
              <div className="shop-card" key={index}>
                <img src={item.image} alt={item.category} />
                <p className="price">{item.price}</p>
                <button onClick={() => handleWhatsApp(item.price)}>
                  Order via WhatsApp
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Books;