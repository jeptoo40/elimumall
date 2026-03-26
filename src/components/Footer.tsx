
import { FaPhone, FaMapMarkerAlt, FaGlobe, FaEnvelope } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
       
        <div className="footer-about">
          <h3>Easyelimu</h3>
          <p>
        Get everything in one place — from books to stationery to school accessories — at Elimu Easy!
        Do all your school shopping at the best prices and save cash here!
    </p>
        </div>

        <div className="footer-about">
  <h3>Store Information</h3>
  <p><FaPhone /> +254112 231229</p>
  <p><FaMapMarkerAlt /> Rainbow | Ruiru</p>
  <p><FaGlobe /> www.easyelimu.co.ke</p>
  <p><FaEnvelope /> info@easyelimu.co.ke</p>
</div>














        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="#">Best Sellers</a></li>
            <li><a href="#">Books</a></li>
            <li><a href="#">Materials</a></li>
            <li><a href="#">Tech Tools</a></li>
            <li><a href="#">Art</a></li>
          </ul>
        </div>

       
        <div className="footer-contact">
          <h4>Contact</h4>

          <p>Email: info@elimu easy.com</p>
          <p>Phone: +254724491544</p>
          <p>Address: Nairobi, Kenya</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Easyelimu. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;