import Message from "./Message";
import { useState } from "react";
import MessageBox from "./MessageBox";

function ChatHistory(props) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [eventSource, setEventSource] = useState(false);

  if (!eventSource) {
    const sse = new EventSource(`http://localhost:8080/chat/?username=${props.username}`);
    setEventSource(sse);
  } else {
    eventSource.onmessage = (e) => {
      let jsonData = JSON.parse(e.data);
      // console.log(jsonData);
      setMessages(jsonData);
    };
  }

  return (
    <>
      <div id="chat-history">
        {/* {console.warn("20", messages)} */}
        {messages.map((message, index) => {
          // console.log("21", message);
          return (
            <Message
              message={`${Object.keys(message)[0]}: ${Object.values(message)[0]}`}
              date={`${Object.values(message)[1].toString().split("T")[1].split(".")[0]}`}
              index={index}
            />
          );
        })}
      </div>

      <MessageBox
        username={props.username}
        message={message}
        messages={messages}
        setMessage={setMessage}
        setMessages={setMessages}
      />
    </>
  );
}

export default ChatHistory;
