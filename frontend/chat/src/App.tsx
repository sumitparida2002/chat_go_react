import { useEffect, useState } from "react";
import { sendMsg, connect } from "./api";
import Header from "./components/Header/Header";
import ChatHistory from "./components/ChatHistory/ChatHistory";
import ChatInput from "./components/ChatInput/ChatInput";

type Message = {
  data: string;
};

function App() {
  const [chatHistory, setChatHistory] = useState<Message[]>([]);

  useEffect(() => {
    connect((msg: Message) => {
      console.log("New Message");
      setChatHistory((prevState) => [...prevState, msg]);
      console.log(chatHistory);
    });
  }, [chatHistory]);

  function handleSend() {
    console.log("hello");
    sendMsg("hello");
  }

  return (
    <>
      <div>
        <Header />
        <ChatHistory chatHistory={chatHistory} />
        <ChatInput send={handleSend} />
      </div>
    </>
  );
}

export default App;
