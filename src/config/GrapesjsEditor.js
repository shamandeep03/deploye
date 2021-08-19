import "grapesjs/dist/css/grapes.min.css";
import "../Screens/Editor.css";
import grapesjs from "grapesjs";
import Blockdata from "./Blocks";
import Panelsdata from "./Panels";
//import plugin from "grapesjs-component-code-editor";
//import 'grapesjs/dist/css/grapes.min.css';
//import "grapesjs-component-code-editor/dist/grapesjs-component-code-editor.min.css";

export default function GrapesjsEditor() {
  return {
    container: "#gjs2",
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
    canvas: {
      canvas: {
        scripts: [
          "https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js",
        ],
        styles: [
          "https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css",
        ],
      },
    },
    assetManager: {
      assets: [
        "http://placehold.it/350x250/78c5d6/fff/image1.jpg",
        {
          type: "image",
          src: "http://placehold.it/350x250/459ba8/fff/image2.jpg",
          height: 350,
          width: 250,
        },
        {
          src: "http://placehold.it/350x250/79c267/fff/image3.jpg",
          height: 350,
          width: 250,
        },
      ],
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
    domComponents: {
      tagName: "div",
      components: [
        {
          type: "image",
          attributes: { src: "https://path/image" },
        },
        {
          tagName: "span",
          type: "text",
          attributes: { title: "foo" },
          components: [
            {
              type: "textnode",
              content: "Hello world!!!",
            },
            {
              type: "my-input-type",
              attributes: {
                name: "my-test",
                title: "hello",
              },
            },
          ],
        },
      ],
    },
  };
}
export function CommandJs() {
  var editor = grapesjs.init(GrapesjsEditor());
  // editor.push(Newcommands);
  // define this event handler after editor is defined
  // like in const editor = grapesjs.init({ ...config });

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
  editor.BlockManager.add("Cards", {
    label: "Cards",
    content: "<h1>Put your title here</h1>",
    category: {
      label: "MyCategory",
      order: 1,
      open: false,
    },
    attributes: {
      title: "Insert Cards",
      class: "fa fa-cube",
    },
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
      // document.getElementsByClassName("panel__right").style.display = "display";
    },
    stop(editor, sender) {
      const smEl = this.getStyleEl(this.getRowEl(editor));
      smEl.style.display = "none";
      //document.getElementsByClassName("panel__right").style.display = "none";
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
  // editor.plugins.add("grapesjs-custom-code", customCodePlugin);
}
