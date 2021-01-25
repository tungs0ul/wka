import React, { useState, useEffect } from "react";
import logo from "./logo_bb.png";
import "./Navbar.css";
import Filter from "./Filter";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import MenuOpenRoundedIcon from "@material-ui/icons/MenuOpenRounded";

function Navbar({ filter, setFilter }) {
  const activeSize = 1000;

  const [show, setShow] = useState(
    window.innerWidth >= activeSize ? false : true
  );
  const [open, setOpen] = useState(
    window.innerWidth >= activeSize ? true : false
  );

  const handleClick = () => setOpen(!open);

  const resize = () => {
    setShow(window.innerWidth >= activeSize ? false : true);
    setOpen(window.innerWidth >= activeSize ? true : false);
  };

  useEffect(() => {
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  });

  return (
    <div className="navbar">
      <div className="nav">
        <img id="logo" src={logo} alt="brandenburglogo"></img>
        {show ? (
          <div className="hamburger icons click-able">
            {open ? (
              <MenuOpenRoundedIcon fontSize="large" onClick={handleClick} />
            ) : (
              <MenuRoundedIcon fontSize="large" onClick={handleClick} />
            )}
          </div>
        ) : (
          <h1 className="title">Windkraftanlagen</h1>
        )}
      </div>
      <Filter
        filter={filter}
        setFilter={setFilter}
        open={open}
        setOpen={setOpen}
        activeSize={activeSize}
      />
    </div>
  );
}

export default Navbar;
