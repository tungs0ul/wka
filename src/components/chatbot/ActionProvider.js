class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  greet = () => {
    const message = this.createChatBotMessage(
      "Hallo, ich bin der AweSomeO 3000! Wie kann ich Ihnen behilflich sein?",
      {
        widget: "SearchOptions",
      }
    );
    this.updateChatbotState(message);
  };

  thanks = () => {
    const message = this.createChatBotMessage(
      "AweSomeO 3000 ist immer bereit um zu helfen ;) !",
      {
        widget: "SearchOptions",
      }
    );
    this.updateChatbotState(message);
  };

  error = () => {
    const message = this.createChatBotMessage(
      "Entschuldigung, ich habe Sie nicht verstanden. Folgende Kommandos sind nutzbar:",
      {
        widget: "SearchOptions",
      }
    );
    this.updateChatbotState(message);
  };

  handleLeistung = () => {
    const message = this.createChatBotMessage(
      "Welche Leistungsoptionen möchten Sie sehen?",
      {
        widget: "Leistung",
      }
    );
    this.updateChatbotState(message);
  };

  handleMinLeistung = () => {
    const message = this.createChatBotMessage(
      "Ergebnis für minimale Leistung.",
      {
        widget: "MinLeistung",
      }
    );
    this.updateChatbotState(message);
  };

  handleMaxLeistung = () => {
    const message = this.createChatBotMessage(
      "Ergebnis für maximale Leistung",
      {
        widget: "MaxLeistung",
      }
    );
    this.updateChatbotState(message);
  };

  handleMinBaudauer = () => {
    const message = this.createChatBotMessage(
      "Ergebnis für minimale Baudauer.",
      {
        widget: "MinBaudauer",
      }
    );
    this.updateChatbotState(message);
  };

  handleMaxBaudauer = () => {
    const message = this.createChatBotMessage(
      "Ergebnis für maximale Baudauer.",
      {
        widget: "MaxBaudauer",
      }
    );
    this.updateChatbotState(message);
  };

  handleBaudauer = () => {
    const message = this.createChatBotMessage(
      "Welche Baudauersoptionen möchten Sie sehen?",
      {
        widget: "Baudauer",
      }
    );
    this.updateChatbotState(message);
  };

  handleGraphs = () => {
    const message = this.createChatBotMessage(
      "Welche Graphen möchten Sie sehen?",
      {
        widget: "Graphen",
      }
    );
    this.updateChatbotState(message);
  };

  handleLeistungsGraph = () => {
    const message = this.createChatBotMessage("heranzoomen", {
      widget: "LeistungsGraph",
    });
    this.updateChatbotState(message);
  };

  handleNabenRotorGraph = () => {
    const message = this.createChatBotMessage("heranzoomen", {
      widget: "NabenRotorGraph",
    });
    this.updateChatbotState(message);
  };

  handlePLZGraph = () => {
    const message = this.createChatBotMessage("heranzoomen", {
      widget: "PLZGraph",
    });
    this.updateChatbotState(message);
  };

  handleBaudauerGraph = () => {
    const message = this.createChatBotMessage("heranzoomen", {
      widget: "BaudauerGraph",
    });
    this.updateChatbotState(message);
  };

  handleBaudauerProZeitGraph = () => {
    const message = this.createChatBotMessage("heranzoomen", {
      widget: "BaudauerProZeitGraph",
    });
    this.updateChatbotState(message);
  };

  updateChatbotState(message) {
    // NOTICE: This function is set in the constructor, and is passed in from the top level Chatbot component. The setState function here actually manipulates the top level state of the Chatbot, so it's important that we make sure that we preserve the previous state.

    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
