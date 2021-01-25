import "./style.css";

const Option = (props) => {
  const functions = {
    handleLeistung: props.actionProvider.handleLeistung,
    handleBaudauer: props.actionProvider.handleBaudauer,
    handleGraphs: props.actionProvider.handleGraphs,
    handleMaxLeistung: props.actionProvider.handleMaxLeistung,
    handleMinLeistung: props.actionProvider.handleMinLeistung,
    handleMaxBaudauer: props.actionProvider.handleMaxBaudauer,
    handleMinBaudauer: props.actionProvider.handleMinBaudauer,
    handleLeistungsGraph: props.actionProvider.handleLeistungsGraph,
    handleNabenRotorGraph: props.actionProvider.handleNabenRotorGraph,
    handlePLZGraph: props.actionProvider.handlePLZGraph,
    handleBaudauerGraph: props.actionProvider.handleBaudauerGraph,
    handleBaudauerProZeitGraph: props.actionProvider.handleBaudauerProZeitGraph,
  };

  const optionsMarkup = props.options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={functions[option.handler]}
    >
      {option.text}
    </button>
  ));

  return (
    <div className="learning-options-container">
      <div style={{ display: "flex" }}>{optionsMarkup}</div>
    </div>
  );
};

export default Option;
