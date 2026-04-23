import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
  } from "recharts";
  
  const data = [
    { month: "Jan", sales: 4000 },
    { month: "Feb", sales: 3000 },
    { month: "Mar", sales: 5000 },
    { month: "Apr", sales: 4780 },
    { month: "May", sales: 5890 },
    { month: "Jun", sales: 6390 },
    { month: "Jul", sales: 7000 },
    { month: "Aug", sales: 6500 },
    { month: "Sep", sales: 7200 },
    { month: "Oct", sales: 8100 },
    { month: "Nov", sales: 9000 },
    { month: "Dec", sales: 9800 },
  ];
  
  const SalesChart = () => {
    return (
      <div className="sales-card">
        <div className="sales-header">
          <h3>Sales Overview</h3>
          <p>Monthly performance</p>
        </div>
  
        <div className="chart-container">
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="sales"
                stroke="#7c3aed"
                strokeWidth={3}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  };
  
  export default SalesChart;