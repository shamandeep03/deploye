import "grapesjs/dist/css/grapes.min.css";
import "../Screens/Editor.css";
import grapesjs from "grapesjs";
import Blockdata from "./Blocks";
import Panelsdata from "./Panels";
import { Script } from "./Script";
import store from '../../src/store';
import { useSelector, useDispatch } from "react-redux";

 const  GrapesjsEditor=()=> {
   //const { data,cdns } = useSelector(state => state.template);
   var data = store.getState().template.cdns[0].links;
     console.log(data,'-----------------')
  return {
    container: "#gjs2",
    canvas: {
      scripts: data,
    },
    fromElement: true,
    height: "580px",
    width: "100%",
    cssIcons:
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
    storageManager: false,
    layerManager: {
      appendTo: ".layers-container",
    },
    selectorManager: {
      appendTo: ".styles-container",
    },
    deviceManager: {
      devices: [
        {
          name: "Desktop",
          width: "", // default size
        },
        {
          name: "Mobile",
          width: "320px", // this value will be used on canvas width
          widthMedia: "480px", // this value will be used in CSS @media
        },
        {
          id: "tablet",
          name: "Tablet",
          width: "768px",
          widthMedia: "992px",
        },
      ],
    },
    panels: {
      defaults: Panelsdata(),
    },
    traitManager: {
      appendTo: ".traits-container",
    },
    styleManager: {
      appendTo: ".styles-container",
      sectors: [
        {
          name: "General",
          open: false,
          buildProps: [
            "float",
            "display",
            "position",
            "top",
            "right",
            "left",
            "bottom",
          ],
        },
        {
          name: "Dimension",
          open: false,
          buildProps: [
            "width",
            "height",
            "max-width",
            "min-height",
            "margin",
            "padding",
          ],
        },
        {
          name: "Typography",
          open: false,
          buildProps: [
            "font-family",
            "font-size",
            "font-weight",
            "letter-spacing",
            "color",
            "line-height",
            "text-align",
            "text-shadow",
          ],
        },
        {
          name: "Decorations",
          open: false,
          buildProps: [
            "border-radius-c",
            "background-color",
            "border-radius",
            "border",
            "box-shadow",
            "background",
          ],
        },
        {
          name: "Extra",
          open: false,
          buildProps: ["opacity", "transition", "perspective", "transform"],
          properties: [
            {
              type: "slider",
              property: "opacity",
              defaults: 1,
              step: 0.01,
              max: 1,
              min: 0,
            },
          ],
        },
      ],
    },
    blockManager: {
      appendTo: "#blocks",
      blocks: Blockdata(),
    },
  };
}
export function CommandJs() {
  var editor = grapesjs.init(GrapesjsEditor());
  editor.on("component:selected", () => {
    // whenever a component is selected in the editor

    // set your command and icon here
    const commandToAdd = "tlb-settime";
    const commandIcon = "fa fa-arrow-right";

    // get the selected componnet and its default toolbar
    const selectedComponent = editor.getSelected();
    const defaultToolbar = selectedComponent.get("toolbar");

    // check if this command already exists on this component toolbar
    const commandExists = defaultToolbar.some(
      (item) => item.command === commandToAdd
    );

    // if it doesn't already exist, add it
    if (!commandExists) {
      selectedComponent.set({
        toolbar: [
          //...defaultToolbar,
          {
            attributes: { class: "fa fa-clone", title: "copy" },
            command: (ed) => ed.runCommand("tlb-clone", { force: 1 }),
          },
          {
            attributes: { class: "fas fa-paste", title: "paste" },
            command: (ed) => ed.runCommand("core:paste", { force: 1 }),
          },
          {
            attributes: { class: commandIcon, title: "next" },
            command: (ed) => ed.runCommand("core:component-next", { force: 1 }),
          },
          {
            attributes: { class: "fa fa-arrow-left", title: "previous" },
            command: (ed) => ed.runCommand("core:component-prev", { force: 1 }),
          },
          {
            attributes: { class: "fa fa-trash-o", title: "delete" },
            command: (ed) =>
              ed.runCommand("core:component-delete", { force: 1 }),
          },
        ],
      });
    }
  });
  editor.on("component:selected", () => {
    const selected = editor.getSelected();
    if (!selected || !selected.get("draggable")) return;
    const el = selected.view.el;

    if (!el._hasCustomEvent) {
      el._hasCustomEvent = 1;
      el.addEventListener("mousedown", () => {
        editor.runCommand("tlb-move");
      });
    }
  });

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
}
