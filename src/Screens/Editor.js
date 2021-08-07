import React, { useEffect } from "react";
import Editorconfig from "../config/Editorconfig";
import grapesjs from "grapesjs";
//import Newcommands from "../config/commands/index.js";
const Editor = ({ id, Temp }) => {
  useEffect(() => {
    var editor = grapesjs.init(Editorconfig());
    // editor.push(Newcommands);
    editor.Commands.add("show-layers", {
      getRowEl(editor) {
        return editor.getContainer().closest(".editor-row");
      },
      getLayersEl(row) {
        return row.querySelector(".layers-container");
      },

      run(editor, sender) {
        const lmEl = this.getLayersEl(this.getRowEl(editor));
        lmEl.style.display = "";
      },
      stop(editor, sender) {
        const lmEl = this.getLayersEl(this.getRowEl(editor));
        lmEl.style.display = "none";
      },
    });
    editor.Commands.add("show-styles", {
      getRowEl(editor) {
        return editor.getContainer().closest(".editor-row");
      },
      getStyleEl(row) {
        return row.querySelector(".styles-container");
      },

      run(editor, sender) {
        const smEl = this.getStyleEl(this.getRowEl(editor));
        smEl.style.display = "";
      },
      stop(editor, sender) {
        const smEl = this.getStyleEl(this.getRowEl(editor));
        smEl.style.display = "none";
      },
    });
    // Define command
    // ...
    editor.Commands.add("show-traits", {
      getTraitsEl(editor) {
        const row = editor.getContainer().closest(".editor-row");
        return row.querySelector(".traits-container");
      },
      run(editor, sender) {
        this.getTraitsEl(editor).style.display = "";
      },
      stop(editor, sender) {
        this.getTraitsEl(editor).style.display = "none";
      },
    });
    editor.Commands.add("show-blocks", {
      getTraitsEl(editor) {
        const row = editor.getContainer().closest(".editor-row");
        return row.querySelector("#blocks");
      },
      run(editor, sender) {
        this.getTraitsEl(editor).style.display = "";
      },
      stop(editor, sender) {
        this.getTraitsEl(editor).style.display = "none";
      },
    });
    editor.Commands.add("set-device-desktop", {
      run: (editor) => editor.setDevice("Desktop"),
    });
    editor.Commands.add("set-device-mobile", {
      run: (editor) => editor.setDevice("Mobile"),
    });
    // var htmlWithCss = editor.runCommand("gjs-get-inlined-html");
    var htmldata = { html: Temp };
   
  });
  if (Editorconfig != null) {
    return (
      <div className="container-fluid p-0">
        <div class="panel__top">
          <div class="panel__basic-actions"></div>
          <div class="panel__devices"></div>
          <div class="panel__switcher"></div>
        </div>
        <div class="editor-row" style={{ height: "540px" }}>
          <div class="editor-canvas">
            <div id="gjs">{Temp}</div>
          </div>
          <div class="panel__right">
            <div class="layers-container"></div>
            <div class="styles-container"></div>
            <div class="traits-container"></div>
            <div id="blocks"></div>
          </div>
        </div>
      </div>
    );
  } else {
    return <h1>Loading</h1>;
  }
};

export default Editor;
