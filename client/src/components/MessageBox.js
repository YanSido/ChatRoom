import axios from "axios";

const URL = "http://localhost:8080";

function MessageBox({ username, message, setMessage, setMessages }) {
  async function sendMessage(messageText) {
    try {
      await axios.post(
        `${URL}/chat/?username=${username}`,
        {
          message: messageText,
        }
        // {
        //   headers: {
        //     Auth: accessToken,
        //   },
        // }
      );
    } catch {}
  }
  return (
    <>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            sendMessage(message);
            setMessage("");
          }
        }}
      ></textarea>
      <button
        onClick={(e) => {
          sendMessage(message);
          setMessage("");
        }}
      >
        Click
      </button>
    </>
  );
}

export default MessageBox;
