

const adverts = [
  {
    image: "/images/banner-04-2.jpg",
   
  },
  {
    image: "/images/banner-05.jpg",
   
    desc: "Fast Secured Delivered",
  },
  {
    image: "/images/banner-06.jpg",
    
    
  },
];

const AdvertSection = () => {
  return (
    <section className="advert-section">
      {adverts.map((ad, index) => (
        <div
          className="advert-card"
          key={index}
          style={{ backgroundImage: `url(${ad.image})` }}
        >
          <div className="advert-overlay">
            
            <p>{ad.desc}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default AdvertSection;