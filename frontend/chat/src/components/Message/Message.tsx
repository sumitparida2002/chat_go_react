import { useState, useEffect } from "react";
import "./Message.module.css";

const Message = ({ message }: any) => {
  const [parsedMessage, setParsedMessage] = useState({});

  useEffect(() => {
    let temp = JSON.parse(message);
    setParsedMessage(temp);
  }, [message]);

  return <div className="Message">{parsedMessage.body}</div>;
};

export default Message;
