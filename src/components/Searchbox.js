import React from "react";
import "./Searchbox.css";
import Chatbot from "react-chatbot-kit";
import config from "./chatbot/config";
import ActionProvider from "./chatbot/ActionProvider";
import MessageParser from "./chatbot/MessageParser";

function Searchbox() {
  return (
    <div className="chatbot">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        placeholderText={"Bitte Nachricht hier einfügen.."}
        headerText={"404 Bandits"}
      />
    </div>
  );
}

export default Searchbox;
