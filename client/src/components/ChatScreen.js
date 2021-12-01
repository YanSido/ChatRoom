import ChatHistory from "./ChatHistory";
import ParticipantBox from "./ParticipantBox";
import { useLocation } from "react-router";

function ChatRoom(props) {
  function Username() {
    const search = useLocation().search;
    const username = new URLSearchParams(search).get("username");
    return username;
  }

  return (
    <>
      <ChatHistory username={Username()} />
      <ParticipantBox />
    </>
  );
}

export default ChatRoom;
