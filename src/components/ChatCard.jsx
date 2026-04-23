const ChatCard = () => {
  return (
    <div className="right-sidebar chat-sidebar">
      <h3>Messages</h3>

      <div className="chat-message">
        <p><strong>Mary:</strong> Is my order ready?</p>
      </div>

      <div className="chat-message">
        <p><strong>John:</strong> Payment done</p>
      </div>

      <div className="chat-input">
        <input type="text" placeholder="Reply..." />
        <button>Send</button>
      </div>
    </div>
  );
};

export default ChatCard;