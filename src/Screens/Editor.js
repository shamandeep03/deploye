import React, { useEffect } from "react";
import { CommandJs } from "../config/GrapesjsEditor";
import "../Screens/Editor.css";
//import customCodePlugin from "grapesjs-custom-code";
//import Newcommands from "../config/commands/index.js";
const Editor = ({ id, Temp }) => {
  useEffect(() => {
    CommandJs();
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
          var elems = document.getElementsByClassName("content");
          for (var i = 0; i < elems.length; i += 1) {
            elems[i].style.display = "none";
          }
          document.getElementById("gjs2").style.display = "block";
        } else {
          content.style.display = "block";
          var elems = document.getElementsByClassName("content");
          for (var i = 0; i < elems.length; i += 1) {
            elems[i].style.display = "block";
          }
          document.getElementById("gjs2").style.display = "block";
        }
      });
    }
  });
  return (
    <div className="container-fluid p-0">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Home
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
          <button type="button" style={{ display: "none" }} class="collapsible">
            Open Collapsible
          </button>
          <div id="gjs2">{Temp}</div>
        </div>

        <div class="content">
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
      </div>
      <script></script>
    </div>
  );
};

export default Editor;
