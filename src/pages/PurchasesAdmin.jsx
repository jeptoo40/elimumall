import { useEffect, useState } from "react";
import DashboardLayout from "../layout/DashboardLayout";

const PurchasesAdmin = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  // 📥 FETCH ORDERS
  const fetchOrders = async () => {
    setLoading(true);

    try {
      const res = await fetch("http://localhost:8000/getOrders.php");
      const data = await res.json();

      setOrders(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <DashboardLayout>
      <h2>Customer Whatsapp Purchases</h2>

      {loading ? (
        <p>Loading purchases...</p>
      ) : (
        <table width="100%" border="1" cellPadding="10">
          <thead>
            <tr>
              <th>ID</th>
              <th>User</th>
              <th>Product</th>
              <th>Phone</th>
              <th>Message</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.user_name}</td>
                <td>{order.product_name}</td>
                <td>{order.phone}</td>
                <td>{order.message}</td>
                <td>{order.created_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </DashboardLayout>
  );
};

export default PurchasesAdmin;