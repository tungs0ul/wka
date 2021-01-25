import "./Map.css";

import L from "leaflet";
import "leaflet.markercluster";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";

import React from "react";

import WkaMarker from "./WkaMarker";

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      map: null,
      markers: null,
      mapInfo: { center: [52.52, 13.405], zoom: 5 },
    };
  }

  componentDidMount() {
    let tiles = L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        maxZoom: 18,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Points &copy 2012 LINZ',
      }
    );

    let mapInfo = this.state.mapInfo;

    this.state.map = L.map("map", {
      center: mapInfo.center,
      zoom: mapInfo.zoom,
      layers: [tiles],
    });
    this.state.markers = L.markerClusterGroup();
    this.state.map.addLayer(this.state.markers);
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.wkas.length !== this.props.wkas.length ||
      !this.props.wkas.every((val, idx) => val === prevProps.wkas[idx])
    ) {
      this.state.markers.clearLayers();

      let markers = this.props.wkas.map((wka) => WkaMarker(wka));

      this.state.markers.addLayers(markers);
    }

    if (prevProps.mapInfo !== this.props.mapInfo) {
      this.state.map.setView(
        this.props.mapInfo.center,
        this.props.mapInfo.zoom
      );
    }
  }

  render() {
    return <div id="map" style={{ height: "100%" }} />;
  }
}
//ReactDOM.render(<Map />, document.getElementById("root"));
export default Map;
