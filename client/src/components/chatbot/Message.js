import React from "react";

const Message = (props) => {	
  return(<div className={props.speaks === "me" ? "right-align" : ""}>
      <div className={`chatbubble ${props.speaks === "bot" ? "bot" : "me"}`}>
        <span>{props.text}</span>
      </div>
  </div>
)};

export default Message;
