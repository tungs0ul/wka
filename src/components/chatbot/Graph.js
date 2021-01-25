import "./style.css";
import { GraphIsZoomedContext, GraphsIndexContext } from "../../context";
import { useContext, useEffect } from "react";

const Graph = (props) => {
  const { setGraphIsZoomed } = useContext(GraphIsZoomedContext);
  const { setGraphsIndex } = useContext(GraphsIndexContext);

  useEffect(() => {
    setGraphsIndex(props.index);
    setGraphIsZoomed(true);
  }, []);

  return (
    <div className="learning-options-container">
      <button
        className="learning-option-button"
        onClick={() => {
          setGraphsIndex(props.index);
          setGraphIsZoomed(true);
        }}
      >
        {props.name}
      </button>
    </div>
  );
};

export default Graph;
