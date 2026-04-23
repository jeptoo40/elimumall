import Sidebar from "../admin/Sidebar";
import Topbar from "../admin/Topbar";
import TeamCard from "../components/TeamCard";
import ChatCard from "../components/ChatCard";
import LocationCard from "../components/LocationCard";

const DashboardLayout = ({ children }) => {
  return (




    <div className="dashboard">
      {/* LEFT SIDEBAR */}
      <Sidebar />

      {/* MAIN AREA */}
      <div className="main">
        <Topbar />

        <div className="content">
          {children}
        </div>
      </div>

      {/* ✅ RIGHT SIDEBAR  */}
      <div className="right-sidebar">
       
        <TeamCard />

        <ChatCard />


        <LocationCard /> 
      </div>
    </div>
  );
};

export default DashboardLayout;