import { useEffect, useState } from "react";
import DashboardLayout from "../layout/DashboardLayout";
import { FaUserShield, FaTrash } from "react-icons/fa";

const UsersAdmin = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await fetch("http://localhost:8000/getUsers.php");
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const deleteUser = async (id) => {
    if (!window.confirm("Delete this admin account?")) return;

    await fetch("http://localhost:8000/deleteUser.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    fetchUsers();
  };

  return (
    <DashboardLayout>
      <h2 style={{ marginBottom: "20px" }}>Admin Accounts</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {users.map((user) => (
          <div
            key={user.id}
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
              position: "relative",
            }}
          >
            {/* ICON */}
            <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                background: "#1976d2",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontSize: "20px",
                marginBottom: "10px",
              }}
            >
              <FaUserShield />
            </div>

            {/* NAME */}
            <h3 style={{ margin: "5px 0" }}>
              {user.first_name} {user.last_name}
            </h3>

            {/* EMAIL */}
            <p style={{ fontSize: "14px", color: "#555" }}>
              {user.email}
            </p>

            {/* BADGE */}
            <span
              style={{
                display: "inline-block",
                marginTop: "10px",
                padding: "5px 10px",
                fontSize: "12px",
                background: "#e3f2fd",
                color: "#1976d2",
                borderRadius: "20px",
              }}
            >
              Admin
            </span>

            {/* DELETE */}
            <button
              onClick={() => deleteUser(user.id)}
              style={{
                position: "absolute",
                top: "15px",
                right: "15px",
                border: "none",
                background: "red",
                color: "white",
                padding: "5px 8px",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              <FaTrash />
            </button>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default UsersAdmin;