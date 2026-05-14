import { useEffect, useState } from "react";
import DashboardLayout from "../layout/DashboardLayout";
import StatsCard from "../admin/StatsCard";
import SalesChart from "../components/SalesChart";
import Purchases from "../components/Purchases";
import "../admin/styles/admin.css";
const Dashboard = () => {
  const [stats, setStats] = useState({
    books: 0,
    users: 0,
    orders: 0,
  });

  useEffect(() => {
    fetch("http://localhost:8000/getStats.php")
      .then(res => res.json())
      .then(data => setStats(data))
      .catch(err => console.log(err));
  }, []);

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <DashboardLayout>
      <h2>Welcome, {user?.firstName}</h2>

      <div className="stats">
        <StatsCard title="Books" value={stats.books} />
        <StatsCard title="Users" value={stats.users} />
        <StatsCard title="Orders" value={stats.orders} />
        <StatsCard title="Revenue" value="KSh 45,000" />
      </div>

      <div className="chart-container">
        <SalesChart />
      </div>

      <div className="purchases-container">
        <Purchases />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;