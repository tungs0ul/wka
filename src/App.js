import "./App.css";
import Navbar from "./components/Navbar";
import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import Map from "./components/Map";
import Statistic from "./components/Statistic";
import { WkasContext, MapInfoContext, FilterContext } from "./context";

function App() {
  const [filter, setFilter] = useState(null);
  const filterValue = useMemo(
    () => ({ filter: filter, setFilter: setFilter }),
    [filter, setFilter]
  );

  const [wkas, setWkas] = useState([]);
  const wkasValue = useMemo(() => ({ wkas: wkas, setWka: setWkas }), [
    wkas,
    setWkas,
  ]);

  const [mapInfo, setMapInfo] = useState(null);
  const mapInfoValue = useMemo(
    () => ({ mapInfo: mapInfo, setMapInfo: setMapInfo }),
    [mapInfo, setMapInfo]
  );

  useEffect(() => {
    if (filter) {
      let params = `?begin=${filter.begin}&end=${filter.end}&inbetrieb=${filter.inbetrieb}&genehmigt=${filter.genehmigt}`;
      if (filter.alle) {
        params = "?inbetrieb=false&genehmigt=false";
      }
      axios
        .get(process.env.REACT_APP_API_URL + "/wka" + params)
        .then((rsp) => setWkas(rsp.data));
      setMapInfo({ center: [52.52, 13.405], zoom: 8 });
    }
  }, [filter]);

  return (
    <div className="app">
      <WkasContext.Provider value={wkasValue}>
        <Navbar filter={filter} setFilter={setFilter} />
        <div
          className="app__map"
          style={{ display: "flex", marginTop: "10px" }}
        >
          <div style={{ flex: 0.6 }} className="map">
            <Map wkas={wkas} mapInfo={mapInfo} />
          </div>
          <div style={{ flex: 0.4, justifyContent: "space-around" }}>
            <MapInfoContext.Provider value={mapInfoValue}>
              <FilterContext.Provider value={filterValue}>
                <Statistic filter={filter} />
              </FilterContext.Provider>
            </MapInfoContext.Provider>
          </div>
        </div>
      </WkasContext.Provider>
    </div>
  );
}

export default App;
