import { useState } from "react";
import DashboardLayout from "../layout/DashboardLayout";

const Settings = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const [form, setForm] = useState({
    firstName: user?.firstName || "",
    email: user?.email || "",
    phone: "+254734491544",
    business: "Elimu Easy",
    password: "",
  });

  const handleSave = async () => {
    try {
      const res = await fetch(
        "http://localhost:8000/updateSettings.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
  
          body: JSON.stringify({
            id: user.id,
            firstName: form.firstName,
            email: form.email,
            phone: form.phone,
            business: form.business,
            password: form.password,
          }),
        }
      );
  
      const result = await res.json();
  
      if (result.success) {
  

        
        
        localStorage.setItem(
          "user",
          JSON.stringify(result.user)
        );
  
        alert("Settings updated successfully");
  
       
        
        window.location.reload();
  
      } else {
        alert(result.error);
      }
  
    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    }
  };

  return (
    <DashboardLayout>
      <div style={{ marginBottom: "30px" }}>
        <h2>Settings</h2>
        <p style={{ color: "#666" }}>
          Manage your account and business settings.
        </p>
      </div>

      <div
        style={{
          background: "#fff",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
          maxWidth: "700px",
        }}
      >
        {/* PROFILE IMAGE */}
        <div style={{ marginBottom: "25px" }}>
          <img
            src="/images/shanga8.jpg.jpeg"
            alt="Profile"
            style={{
              width: "90px",
              height: "90px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </div>

        {/* BUSINESS NAME */}
        <div style={{ marginBottom: "20px" }}>
          <label>Business Name</label>

          <input
            type="text"
            value={form.business}
            onChange={(e) =>
              setForm({ ...form, business: e.target.value })
            }
            style={inputStyle}
          />
        </div>

        {/* FIRST NAME */}
        <div style={{ marginBottom: "20px" }}>
          <label>Admin Name</label>

          <input
            type="text"
            value={form.firstName}
            onChange={(e) =>
              setForm({ ...form, firstName: e.target.value })
            }
            style={inputStyle}
          />
        </div>

        {/* EMAIL */}
        <div style={{ marginBottom: "20px" }}>
          <label>Email Address</label>

          <input
            type="email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            style={inputStyle}
          />
        </div>

        {/* PHONE */}
        <div style={{ marginBottom: "20px" }}>
          <label>Phone Number</label>

          <input
            type="text"
            value={form.phone}
            onChange={(e) =>
              setForm({ ...form, phone: e.target.value })
            }
            style={inputStyle}
          />
        </div>

        {/* PASSWORD */}
        <div style={{ marginBottom: "20px" }}>
          <label>New Password</label>

          <input
            type="password"
            placeholder="Enter new password"
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
            style={inputStyle}
          />
        </div>

        {/* BUTTON */}
        <button
          onClick={handleSave}
          style={{
            background: "#1976d2",
            color: "#fff",
            border: "none",
            padding: "12px 25px",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Save Settings
        </button>
      </div>
    </DashboardLayout>
  );
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "8px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  outline: "none",
};

export default Settings;