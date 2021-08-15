import React, { useEffect } from "react";
import { CommandJs } from "../config/GrapesjsEditor";
import "../Screens/Editor.css";
//import customCodePlugin from "grapesjs-custom-code";
//import Newcommands from "../config/commands/index.js";
const Editor = ({ id, Temp }) => {
  useEffect(() => {
    CommandJs();
  });
  return (
    <div className="container-fluid p-0">
      <div class="panel__tops">
        <div class="panel__devices" id="my_devices"></div>
      </div>
      <div class="editor-row" style={{ height: "580px" }}>
        <div
          id="layers"
          class="column"
          style={{
            flexBasis: "55px",
            backgroundColor: "rgb(231, 223, 223)",
          }}
        >
          <div class="other_panels">
            <div class="panel__basic-actions"></div>
            <div class="panel__switcher"></div>
            {/* <div
              class="panel__devices"
              style={{ display: "flex", flexDirection: "column" }}
            ></div> */}
          </div>
          {/* <div id="blocks"></div> */}
        </div>
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
    </div>
  );
};

export default Editor;
