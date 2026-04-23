const Topbar = () => {
  return (
    <div className="topbar">
      <h3>Dashboard</h3>

      <div className="topbar-right">
        <input type="text" placeholder="Search..." />
        <button className="profile-btn" aria-label="Profile">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 2a2 2 0 1 0 0 4 2 2 0 1 0 0-4m-2 20h4v-7h2V8c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v7h2z" />
  </svg>
</button>
      </div>
    </div>
  );
};

export default Topbar;