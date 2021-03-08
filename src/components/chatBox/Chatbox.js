import { ChatContext } from "../../providers/chatInfo";
import React, { useContext, useEffect, useState } from "react";
import "./Chatbox.css"


const ChatBox = () => {
  const { chat } = useContext(ChatContext); //es match
  const [conversation, setConversation] = useState([]);
  const [message, setMessage] = useState("");
  const user = JSON.parse(localStorage.getItem("user")); //tenemos el usuario desde el local.
  const [update, setUpdate] = useState(false);
  const body = {
    content: message,
    chat: chat,
    sender: user._id,
  };

  const handleMessage = (event) => {
    if (event.keyCode === 13) {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      };

      fetch(`http://localhost:3001/api/messages/`, options);
      setUpdate(true);
      setMessage("");
    }
  };

  console.log(chat);

  useEffect(() => {
    fetch(`http://localhost:3001/api/messages/${chat}/chat`)
      .then((promise) => {
        if (promise.status === 200) {
          return promise.json();
        }
      })
      .then((json) => setConversation(json));
    setUpdate(false);
  }, [update]);

  console.log(conversation);

  //aqui habria que hacer un ternario de si message.sender.id es el de la persona logeada, se usara la iamgen
  //de la persona logeada(fetch a imagenes) y sino se  usara la imagen que vendra del contexto
  return (
    <>
    <div className="chatBox__container">
      <div className="message_container">
      {conversation.map((message) => (
        <div className="messageBox">
          {message.sender.firstname}: {message.content}
        </div>
      ))}
      </div>
   
      <input
        name="message"
        className="form__input"
        placeholder="write your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => handleMessage(e)}
      />
    </div>
     
    </>
  );
};

export default ChatBox;
