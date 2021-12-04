import Message from "./Message";
import { useState } from "react";
import MessageBox from "./MessageBox";
import Participant from "./Participant";

function ChatHistory(props) {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [eventSource, setEventSource] = useState(false);

  if (!eventSource) {
    const sse = new EventSource(`http://localhost:8080/chat/?username=${props.username}`);
    setEventSource(sse);
  } else {
    eventSource.onmessage = (e) => {
      let jsonData = JSON.parse(e.data);
      console.log(jsonData);
      setMessages(jsonData.messages);
      setUsers(jsonData.users);
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
      {users.map((user, index) => {
        if (Object.values(user)[0].includes("Logged in"))
          return <Participant username={`🟢 ${Object.keys(user)[0]}`} />;
        else if (Object.values(user)[0].includes("Logged out"))
          return <Participant username={`🔴 ${Object.keys(user)[0]}`} />;
      })}
    </>
  );
}

export default ChatHistory;
