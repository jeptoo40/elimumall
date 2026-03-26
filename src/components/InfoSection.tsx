

const InfoSection = () => {
  const infoCards = [
    {
      title: "About Us",
      content:
        "School Mall Bookshop is offering you the opportunity to order books and stationery at the comfort of your home or office.",
    },
    {
      title: "Follow Us",
      content: "Stay connected with Schoolmall Bookshop!",
    },
    {
      title: "Shop Online",
      content: "Books delivered to your door – fast, affordable, and hassle-free!",
    },
  ];

  return (
    <section className="info-section">
      <div className="info-container">
        {infoCards.map((card, index) => (
          <div className="info-card" key={index}>
            <h3>{card.title}</h3>
            <p>{card.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfoSection;