import Message from "../Message/Message";
import "./ChatHistory.module.css";

const ChatHistory = ({ chatHistory }) => {
  console.log(chatHistory);
  const messages = chatHistory.map((msg, index) => (
    <Message key={index} message={msg.data} />
  ));

  return (
    <div className="ChatHistory">
      <h2>Chat History</h2>
      {messages}
    </div>
  );
};

export default ChatHistory;
