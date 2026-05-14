import { useState } from "react";
import Sidebar from "../admin/Sidebar";
import Topbar from "../admin/Topbar";
import TeamCard from "../components/TeamCard";
import ChatCard from "../components/ChatCard";
import LocationCard from "../components/LocationCard";
import { FaBars, FaTimes } from "react-icons/fa";

const DashboardLayout = ({ children }) => {

  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="dashboard">

      {/* MOBILE HAMBURGER */}
      <button
        className="menu-btn"
        onClick={() => setOpenSidebar(true)}
      >
        <FaBars />
      </button>

      {/* SIDEBAR */}
      <div className={`sidebar-wrapper ${openSidebar ? "show" : ""}`}>
        
        {/* CLOSE BUTTON */}
        <button
          className="close-btn"
          onClick={() => setOpenSidebar(false)}
        >
          <FaTimes />
        </button>

        <Sidebar />
      </div>

      {/* MAIN */}
      <div className="main">
        <Topbar />

        <div className="content">
          {children}
        </div>
      </div>

      {/* RIGHT SIDEBAR */}
      <div className="right-sidebar">
        <TeamCard />
        <ChatCard />
        <LocationCard />
      </div>
    </div>
  );
};

export default DashboardLayout;