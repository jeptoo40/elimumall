import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const AccountsLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      
    
      <Sidebar />

 
      <div className="flex-1 flex flex-col bg-gray-100">
        
      
        <Topbar />

     
        <div className="p-6 overflow-y-auto">
          {children}
        </div>

      </div>
    </div>
  );
};

export default AccountsLayout;