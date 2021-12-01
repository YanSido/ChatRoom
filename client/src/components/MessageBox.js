function MessageBox({ message, setMessage, setMessages }) {
  return (
    <>
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

export default MessageBox;
