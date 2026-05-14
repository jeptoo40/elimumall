import { useEffect, useState } from "react";
import TopBar from "../TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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

const categories = [
  "All",
  "Motivational",
  "Education",
  "Business",
  "Novels",
];

const Books = () => {

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [shopItems, setShopItems] = useState([]);

  // 📥 LOAD BOOKS FROM DATABASE
  useEffect(() => {
    fetch("http://localhost:8000/getBooks.php")
      .then((res) => res.json())
      .then((data) => setShopItems(data))
      .catch((err) => console.log(err));
  }, []);

  // 📚 FILTER
  const filteredItems =
    selectedCategory === "All"
      ? shopItems
      : shopItems.filter(
          (item) => item.category === selectedCategory
        );

  // 📲 WHATSAPP
  const handleWhatsApp = async (item) => {

    const user = JSON.parse(
      localStorage.getItem("user") || "null"
    );

    const message =
      `Hello, I'm interested in "${item.name}" ` +
      `(${item.category}) priced at ${item.price}`;

    const phoneNumber = "254724491544";

    // OPEN WHATSAPP
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    // SAVE ORDER
    try {

      await fetch("http://localhost:8000/saveOrder.php", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          userName: user?.firstName || "Guest",
          productName: item.name,
          phone: phoneNumber,
          message,
        }),
      });

    } catch (err) {
      console.log("DB error:", err);
    }
  };

  return (
    <>
      <TopBar />
      <Navbar />

      {/* HERO BOOKS */}
      <section className="books">
        <h2>Our Books</h2>

        <div className="books-grid">
          {booksImages.map((book, index) => (
            <div className="books-card" key={index}>
              <img
                src={book.image}
                alt={`Book ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </section>

      {/* SHOP */}
      <section className="shop-section">

        <div className="shop-container">

          {/* SIDEBAR */}
          <div className="shop-sidebar">

            <div className="sidebar-box">

              <h3>Categories</h3>

              {categories.map((cat, index) => (

                <div
                  key={index}
                  onClick={() => setSelectedCategory(cat)}
                  className={`sidebar-item ${
                    selectedCategory === cat
                      ? "active"
                      : ""
                  }`}
                >
                  {cat}
                </div>

              ))}

            </div>

          </div>

          {/* BOOKS */}
          <div className="shop-grid">

            {filteredItems.map((item, index) => (

              <div className="shop-card" key={index}>

                <img
                  src={`http://localhost:8000/${item.image}`}
                  alt={item.name}
                />

                <h3>{item.name}</h3>

                <p>{item.category}</p>

                <p className="price">
                  {item.price}
                </p>

                <button
                  onClick={() => handleWhatsApp(item)}
                >
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