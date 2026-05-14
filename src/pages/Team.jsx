import DashboardLayout from "../layout/DashboardLayout";
import {
  FaUserTie,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const teamMembers = [
  {
    id: 1,
    name: "Brenda Jeptoo",
    role: "System Admin",
    email: "admin@gmail.com",
    phone: "+254734491544",
    image: "/images/shanga8.jpg.jpeg",
    status: "Online",
  },
  {
    id: 2,
    name: "Mercy Wanjiru",
    role: "Book Manager",
    email: "manager@gmail.com",
    phone: "+254700000000",
    image:
      "/images/shanga9.jpg.jpeg",
    status: "Offline",
  },

  {
    id: 3,
    name: "Kevin Kern",
    role: "Orders Manager",
    email: "orders@gmail.com",
    phone: "+254711111111",
    image:
      "https://i.pravatar.cc/150?img=7",
    status: "Online",
  },
];

const Team = () => {
  return (
    <DashboardLayout>
      <div style={{ marginBottom: "30px" }}>
        <h2>Team Members</h2>
        <p style={{ color: "#666" }}>
          Manage and monitor your admin team.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
        }}
      >
        {teamMembers.map((member) => (
          <div
            key={member.id}
            style={{
              background: "#fff",
              borderRadius: "15px",
              padding: "20px",
              boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
              position: "relative",
            }}
          >
            {/* STATUS */}
            <span
              style={{
                position: "absolute",
                top: "15px",
                right: "15px",
                background:
                  member.status === "Online"
                    ? "#4caf50"
                    : "#999",
                color: "#fff",
                padding: "5px 10px",
                borderRadius: "20px",
                fontSize: "12px",
              }}
            >
              {member.status}
            </span>

            {/* IMAGE */}
            <img
              src={member.image}
              alt={member.name}
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                objectFit: "cover",
                marginBottom: "15px",
              }}
            />

            {/* NAME */}
            <h3>{member.name}</h3>

            {/* ROLE */}
            <p
              style={{
                color: "#1976d2",
                fontWeight: "bold",
              }}
            >
              <FaUserTie /> {member.role}
            </p>

            {/* EMAIL */}
            <p style={{ color: "#555" }}>
              <FaEnvelope /> {member.email}
            </p>

            {/* PHONE */}
            <p style={{ color: "#555" }}>
              <FaPhone /> {member.phone}
            </p>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default Team;