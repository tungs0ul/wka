class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (
      lowerCaseMessage.includes("hello") ||
      lowerCaseMessage.includes("hallo") ||
      lowerCaseMessage.includes("hi")
    ) {
      this.actionProvider.greet();
      return;
    }
    if (
      lowerCaseMessage.includes("thank you") ||
      lowerCaseMessage.includes("thx") ||
      lowerCaseMessage.includes("thanks") ||
      lowerCaseMessage.includes("danke") ||
      lowerCaseMessage.includes("vielen dank") ||
      lowerCaseMessage.includes("dank")
    ) {
      this.actionProvider.thanks();
      return;
    }

    if (
      lowerCaseMessage.includes("leistungsgraph") ||
      lowerCaseMessage.includes("alle leistung") ||
      lowerCaseMessage.includes("all leistung") ||
      lowerCaseMessage.includes("leistung graph")
    ) {
      this.actionProvider.handleLeistungsGraph();
      return;
    }
    if (
      lowerCaseMessage.includes("nabenrotorgraph") ||
      lowerCaseMessage.includes("nabenrotor graph")
    ) {
      this.actionProvider.handleNabenRotorGraph();
      return;
    }
    if (
      lowerCaseMessage.includes("plzgraph") ||
      lowerCaseMessage.includes("plz anzahl") ||
      lowerCaseMessage.includes("plz leistung") ||
      lowerCaseMessage.includes("plz graph")
    ) {
      this.actionProvider.handlePLZGraph();
      return;
    }
    if (
      lowerCaseMessage.includes("baudauerprozeitgraph") ||
      lowerCaseMessage.includes("alle baudauer") ||
      lowerCaseMessage.includes("all baudauer") ||
      lowerCaseMessage.includes("baudauerprozeit graph") ||
      lowerCaseMessage.includes("baudauer zeit graph") ||
      lowerCaseMessage.includes("baudauer zeit graph") ||
      lowerCaseMessage.includes("baudauer pro zeit") ||
      lowerCaseMessage.includes("baudauer uber zeit") ||
      lowerCaseMessage.includes("baudauer über zeit") ||
      lowerCaseMessage.includes("baudauer zeit")
    ) {
      this.actionProvider.handleBaudauerProZeitGraph();
      return;
    }
    if (
      lowerCaseMessage.includes("baudauergraph") ||
      lowerCaseMessage.includes("avg baudauer") ||
      lowerCaseMessage.includes("durschnitt baudauer") ||
      lowerCaseMessage.includes("baudauer graph")
    ) {
      this.actionProvider.handleBaudauerGraph();
      return;
    }

    if (
      lowerCaseMessage.includes("graph") ||
      lowerCaseMessage.includes("graphen")
    ) {
      this.actionProvider.handleGraphs();
      return;
    }

    if (
      lowerCaseMessage.includes("min baudauer") ||
      lowerCaseMessage.includes("minimale baudauer") ||
      lowerCaseMessage.includes("min bauzeit") ||
      lowerCaseMessage.includes("minimale bauzeit") ||
      lowerCaseMessage.includes("minbaudauer") ||
      lowerCaseMessage.includes("minbauzeit") ||
      lowerCaseMessage.includes("kurzte baudauer") ||
      lowerCaseMessage.includes("kurzte bauzeit")
    ) {
      this.actionProvider.handleMinBaudauer();
      return;
    }

    if (
      lowerCaseMessage.includes("max baudauer") ||
      lowerCaseMessage.includes("maximale baudauer") ||
      lowerCaseMessage.includes("max bauzeit") ||
      lowerCaseMessage.includes("maximale bauzeit") ||
      lowerCaseMessage.includes("maxbaudauer") ||
      lowerCaseMessage.includes("maxbauzeit") ||
      lowerCaseMessage.includes("langste baudauer") ||
      lowerCaseMessage.includes("langste bauzeit")
    ) {
      this.actionProvider.handleMaxBaudauer();
      return;
    }

    if (
      lowerCaseMessage.includes("baudauer") ||
      lowerCaseMessage.includes("baulange") ||
      lowerCaseMessage.includes("bau lange") ||
      lowerCaseMessage.includes("bauzeit")
    ) {
      this.actionProvider.handleBaudauer();
      return;
    }

    if (
      lowerCaseMessage.includes("min leistung") ||
      lowerCaseMessage.includes("minleistung") ||
      lowerCaseMessage.includes("kleinste leistung") ||
      lowerCaseMessage.includes("minimale leistung")
    ) {
      this.actionProvider.handleMinLeistung();
      return;
    }

    if (
      lowerCaseMessage.includes("max leistung") ||
      lowerCaseMessage.includes("maxleistung") ||
      lowerCaseMessage.includes("größte leistung") ||
      lowerCaseMessage.includes("großte leistung") ||
      lowerCaseMessage.includes("grosste leistung") ||
      lowerCaseMessage.includes("maximale leistung")
    ) {
      this.actionProvider.handleMaxLeistung();
      return;
    }

    if (lowerCaseMessage.includes("leistung")) {
      this.actionProvider.handleLeistung();
      return;
    }

    if (lowerCaseMessage.length) {
      this.actionProvider.error();
      return;
    }
  }
}

export default MessageParser;
