import "./ChatInput.module.css";

const ChatInput = ({ send }: any) => {
  return (
    <div className="ChatInput">
      <input onKeyDown={send} />
    </div>
  );
};

export default ChatInput;
