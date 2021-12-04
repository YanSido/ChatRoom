import ChatHistory from "./ChatHistory";
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
    </>
  );
}

export default ChatRoom;
