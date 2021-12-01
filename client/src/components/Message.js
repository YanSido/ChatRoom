function Message(props) {
  return (
    <>
      <div class="alert alert-success" role="alert">
        {props.message}
      </div>
    </>
  );
}

export default Message;
