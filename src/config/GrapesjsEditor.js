import "grapesjs/dist/css/grapes.min.css";
import "../Screens/Editor.css";
import grapesjs from "grapesjs";
import Blockdata from "./Blocks";
import Panelsdata from "./Panels";
import store from '../../src/store';

const GrapesjsEditor = () => {
  var data = store.getState().template.cdns[0].links;
  var Pages = store.getState().template.cdns[0].pages;
  return {
    container: "#gjs2",
    canvas: {
      scripts: data,
      style: [
        "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/fontawesome.min.css"
      ]
    },
    assetManager: {
      assets: [
        'https://app-landing-theme-02.netlify.app/images/image-06.png',
        // Pass an object with your properties
       
        {
          type: 'image',
          src: 'https://app-landing-theme-02.netlify.app/images/image-01.png',
          height: 350,
          width: 250,
          name: 'displayName'
        },
        {
          // As the 'image' is the base type of assets, omitting it will
          // be set as `image` by default
          src: 'https://app-landing-theme-02.netlify.app/images/image-07.png',
          height: 350,
          width: 250,
          name: 'displayName'
        },
      ],
      uploadText: 'Drop files here',
      headers: {},
      params: {},
      autoAdd: 1,
      addBtnText: 'ssss image',
      dropzone: 0,
      openAssetsOnDrop: 0,
      dropzoneContent: '<div class="dropzone-inner">Drop media here.</div>',
      modalTitle: 'Select Image',
    },
    fromElement: 1,
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
    pageManager: {
      pages: Pages
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
};

export function CommandJs(dispatch) {
  var Pages = store.getState().template.cdns[0].pages;
  var editor = grapesjs.init(GrapesjsEditor());
  // const mapStateToProps=(state)=>({ editor })
  // var data  = store.getState();
  // console.log(data,'dadadadadadda')
   const pageManager = editor.Pages;
  pageManager.get('first_1');
  console.log( Pages,'shamana')
  editor.on("component:selected", () => {
    const commandToAdd = "tlb-settime";
    const commandIcon = "fa fa-arrow-right";
    const selectedComponent = editor.getSelected();
    const defaultToolbar = selectedComponent.get("toolbar");
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
            command: (ed) => ed.runCommand(document.body.style.color = "red", { force: 1 }),
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
      document.querySelector(".pages-container").style.display="none";
      document.querySelector(".page_add").style.display="none";
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
      document.querySelector(".pages-container").style.display="none";
      document.querySelector(".page_add").style.display="none";
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
      document.querySelector(".pages-container").style.display="none";
      document.querySelector(".page_add").style.display="none";
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
      document.querySelector(".pages-container").style.display="none";
      document.querySelector(".page_add").style.display="none";
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
