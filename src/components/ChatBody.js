import React from "react";
import { useNavigate } from "react-router-dom";

const ChatBody = ({ messages, lastMessageRef, typingStatus}) => {
  const navigate = useNavigate();

  const handleLeaveChat = () => {
    localStorage.removeItem("userName");
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <header className="chat__mainHeader">
        <p>Hangout with Colleagues</p>
        <button className="leaveChat__btn" onClick={handleLeaveChat}>
          LEAVE CHAT
        </button>
      </header>

      <div className="message__container">
        {messages.map((message) => {
          return message.name === localStorage.getItem("userName") ? (
            // This shows messages sent from us
            <div className="message__chats">
              <p className="sender__name">You</p>
              <div className="message__sender">
                <p>{message.text}</p>
              </div>
            </div>
          ) : (
            // This shows messages received by us
            <div className="message__chats">
              <p>{message.name}</p>
              <div className="message__recipient">
                <p>{message.text}</p>
              </div>
            </div>
          );
        })}

        <div ref={lastMessageRef}></div>

        {/*This is triggered when a user is typing*/}
        <div className="message__status">
          <p>{typingStatus}...</p>
        </div>
      </div>
    </>
  );
};

export default ChatBody;
