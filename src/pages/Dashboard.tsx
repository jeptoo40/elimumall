import DashboardLayout from "../layout/DashboardLayout";
import StatsCard from "../admin/StatsCard";
import SalesChart from "../components/SalesChart";
import Purchases from "../components/Purchases"; 
import "../admin/styles/admin.css";

const Dashboard = () => {
  return (
    <DashboardLayout>
      {/* Stats */}
      <div className="stats">
        <StatsCard title="Books" value="1,240" />
        <StatsCard title="Users" value="850" />
        <StatsCard title="Orders" value="320" />
        <StatsCard title="Revenue" value="KSh 45,000" />
      </div>

      {/* Chart */}
      <div className="chart-container">
        <SalesChart />
      </div>

      {/* Purchases (BELOW chart) */}
      <div className="purchases-container">
        <Purchases />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;