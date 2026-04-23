const TeamCard = () => {
  return (
    <div className="widget-card team-card">
      <div className="card-header">
        <h3>Our Team</h3>
        <span className="online-count">2 Online</span>
      </div>

      <div className="team-member">
        <img src="/images/user1.jpg" alt="Brenda" />
        <div>
          <p>Brenda</p>
          <span>Admin</span>
        </div>
        <span className="status online"></span>
      </div>

      <div className="team-member">
        <img src="/images/user2.jpg" alt="Alex" />
        <div>
          <p>Alex</p>
          <span>Support</span>
        </div>
        <span className="status offline"></span>
      </div>
    </div>
  );
};

export default TeamCard;