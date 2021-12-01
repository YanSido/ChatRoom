import Message from "./Message";
import { useState } from "react";
import MessageBox from "./MessageBox";

function ChatHistory(props) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  return (
    <>
      <div id="chatHistory">
        {messages.map((message, index) => {
          return <Message message={message} index={index} />;
        })}
      </div>

      <MessageBox
        message={message}
        messages={messages}
        setMessage={setMessage}
        setMessages={setMessages}
      />
    </>
  );
}

export default ChatHistory;
