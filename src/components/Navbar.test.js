import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
// const orts = [
//   {
//     ort: "Prenzlau",
//     latitude: 53.35441578703448,
//     longitude: 13.846742509931033,
//     active: 116,
//     wka_count: 145,
//   },
//   {
//     ort: "Karstädt",
//     latitude: 53.16824780917293,
//     longitude: 11.771709759699249,
//     active: 121,
//     wka_count: 133,
//   },
//   {
//     ort: "Uckerland",
//     latitude: 53.468730118793104,
//     longitude: 13.828384702413793,
//     active: 103,
//     wka_count: 116,
//   },
// ];

const setFilter = (e) => {
  return e;
};

const filter = {};

it("navResult", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Navbar filter={filter} setFilter={setFilter} />, div);
});
