import React, { useState, useEffect } from "react";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import "./Filter.css";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

function Filter({ filter, open, setOpen, activeSize, setFilter }) {
  const [startDate, setStartDate] = useState(
    new Date(new Date() - 5 * 365.25 * 24 * 3600 * 1000)
  );
  const [endDate, setEndDate] = useState(new Date());
  const [status, setStatus] = useState("Genehmigt und InBetrieb");
  // const [ort, setOrt] = useState("");

  const [size, setSize] = useState(window.innerWidth >= activeSize ? 250 : 300);

  const handleResize = () => {
    setSize(window.innerWidth >= activeSize ? 250 : 300);
  };

  const [style, setStyle] = useState(
    open ? { maxHeight: "400px" } : { maxHeight: "0px" }
  );

  useEffect(() => {
    setStyle(open ? { maxHeight: "400px" } : { maxHeight: "0px" });
  }, [open]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  useEffect(() => {
    if (status === "Alle") {
      setFilter({ ...filter, alle: true });
    } else {
      setFilter({
        ...filter,
        alle: false,
        inbetrieb: status ? status.toLowerCase().includes("inbetrieb") : false,
        genehmigt: status ? status.toLowerCase().includes("genehmigt") : false,
      });
    }
  }, [status]);

  useEffect(() => {
    setFilter({
      ...filter,
      begin: startDate.toJSON().slice(0, 10),
    });
  }, [startDate]);

  useEffect(() => {
    setFilter({
      ...filter,
      end: endDate.toJSON().slice(0, 10),
    });
  }, [endDate]);

  const handleSubmit = () => {
    setFilter({
      begin: startDate.toJSON().slice(0, 10),
      end: endDate.toJSON().slice(0, 10),
      inbetrieb: status ? status.toLowerCase().includes("inbetrieb") : false,
      genehmigt: status ? status.toLowerCase().includes("genehmigt") : false,
    });
    window.innerWidth < activeSize && setOpen(false);
  };

  useEffect(() => {
    handleSubmit();
  }, []);

  const statusList = [
    "",
    "InBetrieb",
    "Genehmigt",
    "Genehmigt und InBetrieb",
    "Alle",
  ];

  const handleChangeStartDate = (date) => {
    if (date.toJSON()) {
      setStartDate(date);
    }
  };

  const handleChangeEndDate = (date) => {
    if (date.toJSON()) {
      setEndDate(date);
    }
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div className="filters" style={style}>
        <div className="filters__text">
          {/* <div className="filters__item autocomplete">
            <Autocomplete
              value={ort}
              options={orts}
              getOptionLabel={(option) => option}
              onChange={(event, newValue) => {
                setOrt(newValue);
                if (newValue === null) {
                  setOrt("");
                }
              }}
              style={{ width: size }}
              renderInput={(params) => <TextField {...params} label="Ort" />}
            />
          </div> */}
          <div className="filters__item autocomplete">
            <Autocomplete
              value={status}
              options={statusList}
              getOptionLabel={(option) => option}
              onChange={(event, newValue) => {
                setStatus(newValue);
              }}
              style={{ width: size }}
              renderInput={(params) => <TextField {...params} label="Option" />}
            />
          </div>
        </div>

        <div className="filters__date">
          <KeyboardDatePicker
            disabled={status === "Alle"}
            style={{ width: size }}
            margin="normal"
            label="Von"
            format="dd/MM/yyyy"
            value={startDate}
            onChange={handleChangeStartDate}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </div>
        <div className="filters__date">
          <KeyboardDatePicker
            disabled={status === "Alle"}
            style={{ width: size }}
            margin="normal"
            label="Bis"
            format="dd/MM/yyyy"
            value={endDate}
            onChange={handleChangeEndDate}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </div>

        {/* <div className="filters__buttons">
          <Button
            style={{ backgroundColor: "#82ca9d" }}
            variant="contained"
            onClick={handleSubmit}
          >
            Filtern
          </Button>
        </div> */}
      </div>
    </MuiPickersUtilsProvider>
  );
}

export default Filter;
