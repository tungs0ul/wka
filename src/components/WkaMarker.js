import React from "react";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import icon from "./wind.png";
import L from "leaflet";
import { renderToString } from "react-dom/server";

export default function WkaMarker({
  latitude,
  longitude,
  betreiber,
  status,
  ortsteil,
  postleitzahl,
  ort,
  inbetriebname_datum,
  id,
  leistung,
  genehmigt_datum,
  nabenhoehe,
  rotor_durchmesser,
}) {
  const wkaIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [40, 40],
    shadowSize: [40, 40],
  });

  let marker = L.marker(new L.LatLng(latitude, longitude), {
    key: id,
    icon: wkaIcon,
  });

  const content = (
    <div>
      <strong>{betreiber}</strong>
      <div
        style={
          status === "in Betrieb"
            ? { color: "green" }
            : status === "im Gen.Verf."
            ? { color: "red" }
            : { color: "blue" }
        }
      >
        {status}
      </div>
      {genehmigt_datum && <div>genehmigt datum: {genehmigt_datum}</div>}
      {inbetriebname_datum && (
        <div>inbetriebname datum: {inbetriebname_datum}</div>
      )}
      <div>Leistung: {leistung} MWh</div>
      <div>Nabenhoehe: {nabenhoehe}</div>
      <div>RotorDurch: {rotor_durchmesser}</div>
      <div>
        {ortsteil
          ? ortsteil + ", " + postleitzahl + " " + ort
          : postleitzahl + " " + ort}
      </div>
    </div>
  );

  marker.bindTooltip(renderToString(content));

  return marker;
}
