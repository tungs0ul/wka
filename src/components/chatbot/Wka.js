import React, { useContext, useEffect, useState } from "react";
import {
  WkasContext,
  MapInfoContext,
  BaudauerContext,
  FilterContext,
} from "../../context";
import { getLeistung, getBaudauer, displayStringDate } from "./utils";
import "./style.css";
import DirectionsIcon from "@material-ui/icons/Directions";
import Tooltip from "@material-ui/core/Tooltip";

const Wka = (props) => {
  const { wkas } = useContext(WkasContext);
  const { baudauer } = useContext(BaudauerContext);
  const { setMapInfo } = useContext(MapInfoContext);
  const { filter } = useContext(FilterContext);
  const [wka, setWka] = useState(null);
  const [filterString, setFilterString] = useState("");

  useEffect(() => {
    if (props.option === "leistung") {
      setWka(getLeistung(wkas, props.value));
    } else if (props.option === "baudauer") {
      setWka(getBaudauer(wkas, baudauer, props.value));
    }
    let tmp = `${filter.genehmigt ? "genehmigt" : ""} ${
      filter.inbetrieb && filter.genehmigt ? "und" : ""
    }  ${filter.inbetrieb ? "inbetrieb" : ""} von ${displayStringDate(
      filter.begin
    )} bis ${displayStringDate(filter.end)} `;
    setFilterString(tmp);
  }, []);

  return (
    <div className="ergebnis-container">
      <div
        style={{ marginleft: "40px" }}
        className="react-chatbot-kit-chat-bot-message"
      >
        {wka ? (
          <div style={{ display: "flex" }}>
            <div style={{ textTransform: "capitalize", marginRight: "5px" }}>
              {filterString} {props.value}{" "}
              {`${props.option}: ${wka[props.option]} ${props.unit}`}
            </div>
            <div>
              <Tooltip arrow interactive title="zur Wka">
                <DirectionsIcon
                  className="chaticon click-able"
                  onClick={() => {
                    setMapInfo({
                      center: [wka.latitude, wka.longitude],
                      zoom: 17,
                    });
                  }}
                />
              </Tooltip>
            </div>
          </div>
        ) : (
          <span>Nichts gefunden</span>
        )}
      </div>
    </div>
  );
};

export default Wka;
