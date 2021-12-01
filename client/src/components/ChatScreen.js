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
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      ></textarea>

      <button
        onClick={(e) => {
          setMessages((messages) => [...messages, message]);
        }}
      >
        Click
      </button>
    </>
  );
}

export default Chat;
