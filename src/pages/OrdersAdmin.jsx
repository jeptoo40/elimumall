import { useEffect, useState } from "react";
import DashboardLayout from "../layout/DashboardLayout";

const OrdersAdmin = () => {
  const [orders, setOrders] = useState([]);

 
  const fetchOrders = async () => {
    try {
      const res = await fetch("http://localhost:8000/getOrders.php");
      const data = await res.json();

      setOrders(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      await fetch("http://localhost:8000/updateOrderStatus.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          status,
        }),
      });

      fetchOrders();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <DashboardLayout>
      <h2>Orders Management</h2>

      <table width="100%" border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Book</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
  {orders.map((order) => (
    <tr key={order.id}>
      <td>{order.id}</td>
      <td>{order.user_name}</td>
      <td>{order.product_name}</td>
      <td>{order.phone}</td>

      {/* STATUS COLUMN */}
      <td>{order.status || "Pending"}</td>

      {/* ACTION COLUMN */}
      <td>
        {/* WHATSAPP + APPROVE */}
        <button
          onClick={() => {
            const message = `Hello ${order.user_name}, your order for ${order.product_name} has been approved.`;

            window.open(
              `https://wa.me/${order.phone}?text=${encodeURIComponent(message)}`,
              "_blank"
            );

            updateStatus(order.id, "Approved");
          }}
        >
          WhatsApp / Approve
        </button>

        {/* DELIVERED */}
        <button
          onClick={() => updateStatus(order.id, "Delivered")}
          style={{ marginLeft: "10px" }}
        >
          Delivered
        </button>

        {/* CANCEL */}
        <button
          onClick={() => updateStatus(order.id, "Cancelled")}
          style={{
            marginLeft: "10px",
            background: "red",
            color: "white",
          }}
        >
          Cancel
        </button>
      </td>
    </tr>
  ))}
</tbody>
      </table>
    </DashboardLayout>
  );
};

export default OrdersAdmin;