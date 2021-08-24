import React, { useEffect } from "react";
import { CommandJs } from "../config/GrapesjsEditor";
import "../Screens/Editor.css";
import { MainJs } from "./Mainscript";
//import customCodePlugin from "grapesjs-custom-code";
//import Newcommands from "../config/commands/index.js";
const Editor = ({ id, Temp }) => {
  useEffect(() => {
    CommandJs();
    MainJs();
  });
  return (
    <div className="container-fluid p-0">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            App Landing
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav "></ul>
          </div>
        </div>
      </nav>
      {/* <div class="panel__top">
        <div class="panel__basic-actions"></div>
      </div> */}
      <div class="editor-row d-flex " style={{ height: "580px" }}>
        <div class="editor-canvas">
          <div id="gjs2">{Temp}</div>
        </div>
        <div class="panel__right">
          <div class="layers-container" style={{ textAlign: "center" }}>
            Layers Manager
          </div>
          <div class="styles-container" style={{ textAlign: "center" }}>
            Style Manager
          </div>
          <div class="traits-container" style={{ textAlign: "center" }}>
            Traits Manager
          </div>
          <div id="blocks" style={{ textAlign: "center" }}>
            Block Manager
          </div>
        </div>
      </div>
      <script></script>
    </div>
  );
};

export default Editor;
