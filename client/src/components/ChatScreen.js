import { useState } from "react";

function Chat(props) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  return (
    <>
      <div id="chatHistory">
        {messages.map((message, index) => {
          return <p id={index}>{message}</p>;
        })}
      </div>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            setMessage(e.target.value);
            setMessages((messages) => [...messages, message]);
            setMessage("");
          }
        }}
      ></textarea>

      <button
        onClick={(e) => {
          setMessages((messages) => [...messages, message]);
          setMessage("");
        }}
      >
        Click
      </button>
    </>
  );
}

export default Chat;
