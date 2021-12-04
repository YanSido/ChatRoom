function Message(props) {
  if (props.message.includes(" Logged")) {
    return (
      <>
        <div class="alert alert-info" role="alert">
          {props.message}
          <br />
          <span>{props.date}</span>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div class="alert alert-success" role="alert">
          {props.message}
          <br />
          <span>{props.date}</span>
        </div>
      </>
    );
  }
}

export default Message;
