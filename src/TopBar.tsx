import { FaPhoneAlt } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="topbar">
      {/* LEFT - LOGO */}
      <div className="topbar-left">
        <img src="/images/Elimu logo.PNG" alt="logo" className="logo" />
      </div>

      {/* CENTER - SEARCH */}
      <div className="topbar-center">
        <input
          type="text"
          placeholder="Search for books and materials..."
          className="search"
        />
      </div>

      {/* RIGHT - CONTACT */}
      <div className="topbar-right">
        <div className="call-box">
          <FaPhoneAlt className="phone-icon" />
          <div className="numbers">
            <a href="tel:0106531952">0106531952</a>
            <a href="tel:0724491544">0724491544</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;