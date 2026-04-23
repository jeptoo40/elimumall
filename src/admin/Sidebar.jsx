import { FaHome, FaBook, FaShoppingCart, FaUsers, FaCog } from "react-icons/fa";
import logo from "../assets/Elimu logo.PNG";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="Elimu Logo" />
      </div>

      <ul className="menu">
  <li className="active"><FaHome /> Dashboard</li>
  <li><FaBook /> Books</li>
  <li><FaShoppingCart /> Purchases</li>
  <li><FaShoppingCart /> Orders</li>
  <li><FaUsers /> Users</li>
  <li><FaUsers /> Team</li>
  <li><FaCog /> Settings</li>
</ul>
    </div>
  );
};

export default Sidebar;


















