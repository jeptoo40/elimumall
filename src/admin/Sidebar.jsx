
import { FaHome, FaBook, FaShoppingCart, FaUsers, FaCog, FaSignOutAlt } from "react-icons/fa";
import logo from "../assets/Elimu logo.PNG";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="Elimu Logo" />
      </div>

      <ul className="menu">
        <li className="active" onClick={() => navigate("/dashboard")}>
          <FaHome /> Dashboard
        </li>
        <li onClick={() => navigate("/BooksAdmin")}>
  <FaBook /> Books
</li>
<li onClick={() => navigate("/PurchasesAdmin")}>
  <FaShoppingCart /> Purchases
</li>

<li onClick={() => navigate("/OrdersAdmin")}>
  <FaShoppingCart /> Orders
</li>
     
     
        <li onClick={() => navigate("/UsersAdmin")}>
          <FaUsers /> Users
        </li>

        <li onClick={() => navigate("/team")}>
          <FaUsers /> Team
        </li>

        <li onClick={() => navigate("/settings")}>
          <FaCog /> Settings
        </li>

        {/* LOGOUT */}
        <li
  onClick={() => {
    localStorage.removeItem("user");
    navigate("/signin");
  }}
>
  <FaSignOutAlt style={{ marginRight: "8px" }} />
  Logout
</li>
      </ul>
    </div>
  );
};

export default Sidebar;