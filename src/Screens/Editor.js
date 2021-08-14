import React, { useEffect } from "react";
import Editorconfig from "../config/GrapesjsEditor";
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
    editor.Commands.add("show-pages", {
      getTraitsEl(editor) {
        const row = editor.getContainer().closest(".editor-row");
        return row.querySelector(".traits-container");
      },
      run(editor, sender) {
        const pageManager = editor.Pages;
        var newpage = pageManager.add({
          id: "new-page-id", // without an explicit ID, a random one will be created
          styles: `.my-class { color: red }`, // or a JSON of styles
          component: '<div class="my-class">My element</div>', // or a JSON of components
        });
        return newpage;
      },
      // stop(editor, sender) {
      //   this.getTraitsEl(editor).style.display = "none";
      // },
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
    editor.Commands.add("set-device-Tablet", {
      run: (editor) => editor.setDevice("Tablet"),
    });
    // const newPage = editor.pageManager.add({
    //   id: "new-page-id", // without an explicit ID, a random one will be created
    //   styles: `.my-class { color: red }`, // or a JSON of styles
    //   component: '<div class="my-class">My element</div>', // or a JSON of components
    // });
    // const currentPage = pages[currentIndex];
    // currentPage.components = editor.getComponents();
    // currentPage.style = editor.getStyle();
    // const nextPage = pages[nextIndex];
    // editor.setComponents(nextPage.components);
    // editor.setStyle(nextPage.style);
  });
  if (grapesjs != null) {
    return (
      <div className="container-fluid p-0">
        <div class="panel__top">
          <div class="panel__basic-actions"></div>
          <div class="panel__devices"></div>
          <div class="panel__switcher"></div>
        </div>
        <div class="editor-row" style={{ height: "580px" }}>
          <div
            id="layers"
            class="column"
            style={{ flexBasis: "50px", backgroundColor: "rgb(231, 223, 223)" }}
          >
            <div
              class="panel__other"
              style={{ display: "flex", flexDirection: "column" }}
            >
              {/* <div
                class="panel__basic-actions"
                style={{ display: "flex", flexDirection: "column" }}
              ></div> */}
              <div
                class="panel__devices"
                style={{ display: "flex", flexDirection: "column" }}
              ></div>
            </div>
            {/* <div id="blocks"></div> */}
          </div>
          <div class="editor-canvas">
            <div id="gjs">{Temp}</div>
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
  } else {
    return <h1>Loading</h1>;
  }
};

export default Editor;
