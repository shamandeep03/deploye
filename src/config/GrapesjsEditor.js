import "grapesjs/dist/css/grapes.min.css";
import "../Screens/Editor.css";
import grapesjs from "grapesjs";
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
      styles: [
        "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css",
      ],
      scripts: [
        "https://code.jquery.com/jquery-3.3.1.slim.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
        "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js",
      ],
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
      defaults: [
        {
          id: "other_panels",
          el: ".other_panels",
          buttons: [
            {
              id: "show-style",
              active: true,
              className: "fa fa-paint-brush",
              command: "show-styles",
              attributes: { title: "Open style Manager" },
              togglable: false,
            },
            {
              id: "show-layers",
              active: true,
              className: "fa fa-bars btn btn-light",
              command: "show-layers",
              attributes: { title: "Open Layers Manager" },
              togglable: false,
            },
            {
              id: "show-traits",
              active: true,
              className: "fa fa-cog btn btn-light",
              attributes: { title: "Open Traits Manager" },
              command: "show-traits",
              togglable: false,
            },
            // {
            //   id: "show-pages",
            //   active: false,
            //   className: "fas fa-tools",
            //   attributes: { title: "Open Pages Manager" },
            //   command: "show-pages",
            //   togglable: false,
            // },
            // {
            //   id: "views",
            // },
            // {
            //   attributes: { title: "Open Code" },
            //   className: "fa fa-code",
            //   command: "grapesjs-custom-code",
            //   id: "open-code",
            // },
            {
              id: "show-blocks",
              active: true,
              className: "fa fa-th-large",
              command: "show-blocks",
              attributes: { title: "Open Block Manager" },
              togglable: false,
            },
          ],
        },
        {
          id: "panel-devices",
          el: ".panel__devices",
          appendTo: ".panel__tops",
          className: "myclass",
          buttons: [
            {
              id: "preview-button",
              className: "fa fa-eye privew panel__tops btn btn-light",
              command: "sw-visibility",
              label: "Privew",
              active: false,
              attributes: { title: "View" },
              togglable: true,
            },
            {
              id: "device-desktop",
              className: "fa fa-desktop prewiew panel__tops btn btn-light",
              command: "set-device-desktop",
              active: true,
              attributes: { title: "Desktop View" },
              togglable: false,
            },
            {
              id: "device-mobile",
              className: "fa fa-mobile prewiew panel__tops btn btn-light",
              command: "set-device-mobile",
              attributes: { title: "Mobile View" },
              togglable: false,
            },
            {
              id: "prewiew",
              className: "fa fa-tablet prewiew panel__tops btn btn-light",
              command: "set-device-Tablet",
              attributes: { title: "Tablet View" },
              togglable: false,
            },
            {
              id: "submit",
              className: "btn btn-primary panel__tops",
              label: "save",
              command: "save-changes",
              togglable: true,
            },
            {
              id: "publish",
              className: "btn btn-publish panel__tops",
              label: "publish",
              command: "publish-changes",
              togglable: true,
            },
            {
              id: "undo",
              className: "fa fa-undo btn btn-light panel__tops",
              command: (e) => e.runCommand("core:undo"),
              attributes: { title: "Undo" },
            },
            {
              id: "redo",
              className: "fa fa-repeat btn btn-light panel__tops",
              command: (e) => e.runCommand("core:redo"),
              attributes: { title: "Redo" },
            },
          ],
        },
        {
          id: "basic-actions",
          el: ".panel__basic-actions",
          buttons: [
            {
              id: "export",
              className: "fa fa-code",
              attributes: { title: "Code View" },
              command: "export-template",
              context: "export-template", // For grouping context of buttons from the same panel
            },
            //   {
            //     id: "show-json",
            //     className: "btn-show-json",
            //     label: "JSON",
            //     context: "show-json",
            //     attributes: { title: "json View" },
            //     command(editor) {
            //       editor.Modal.setTitle("Components JSON")
            //         .setContent(
            //           `<textarea style="width:100%; height: 250px;">
            //   ${JSON.stringify(editor.getComponents())}
            // </textarea>`
            //         )
            //         .open();
            //     },
            //   },
          ],
        },
        {
          id: "layers",
          el: ".panel__right",
          // Make the panel resizable
          resizable: {
            maxDim: 350,
            minDim: 200,
            tc: 0, // Top handler
            cl: 1, // Left handler
            cr: 0, // Right handler
            bc: 0, // Bottom handler
            keyWidth: "flex-basis",
          },
        },
      ],
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
      blocks: [
        {
          id: "section", // id is mandatory
          label: "<b>Section</b>", // You can use HTML/SVG inside labels
          attributes: { class: "gjs-block-section" },
          content: `  
          <div class="card">
            <img src=
            "https://previews.123rf.com/images/jemastock/jemastock1706/jemastock170608711/80128439-young-and-successful-business-man-cartoon-employee-work.jpg"alt="John" style="width:100%">
            <h1>John Doe</h1>
            <p class="title">CEO & Founder, Example</p>
            <p>Harvard University</p>
            <a href="#"><i class="fa fa-dribbble"></i></a>
            <a href="#"><i class="fa fa-twitter"></i></a>
            <a href="#"><i class="fa fa-linkedin"></i></a>
            <a href="#"><i class="fa fa-facebook"></i></a>
            <p><button>Contact</button></p>
          </div>
           <style>
           .card {
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            text-align: center;
            max-width: 300px;
            margin-top: 100px;
            margin-right:auto;
            margin-left:auto;
            margin-bottom:auto:
          }
          
          .title {
            color: grey;
            font-size: 18px;
          }
          
          button {
            border: none;
            outline: 0;
            display: inline-block;
            padding: 8px;
            color: white;
            background-color: #000;
            text-align: center;
            cursor: pointer;
            width: 100%;
            font-size: 18px;
          }
          
          a {
            text-decoration: none;
            font-size: 22px;
            color: black;
          }
          
          button:hover, a:hover {
            opacity: 0.7;
          }
            </style>
          `,
        },
        {
          id: "text",
          label: "Text",
          content: '<div data-gjs-type="text">Insert your text here</div>',
        },
        {
          id: "input",
          placeholder: "input",
          label: "input",
          content: '<input type="text" value="example" name="text"/>',
        },
        {
          id: "input",
          label: "Radio",
          content: '<input type="radio" value="example" name="radio"/>',
        },
        {
          id: "Checkbox",
          placeholder: "Checkbox",
          label: "Checkbox",
          content:
            '<input type="checkbox" value="example" name="Checkbox" checked/>',
        },
        {
          id: "lable",
          label: "lable",
          content: "<lable>Lable</lable>",
        },
        {
          id: "Button",
          label: "Button",
          content: "<button>Button</button>",
        },
        {
          id: "form",
          label: "from",
          content:
            '<form><label>Name:</label><br/><input type="text" name="name" placeholder="name"/><br/><label>Age:</label><br/><input type="text" name="age" placeholder="age"/><br/><label>Email:</label><br/><input type="email" name="email" placeholder="email"/><br/><label>Name:</label><br/><input type="password" name="password" placeholder="password"/><br/><label for="gender">male</label><input type="radio" name="gender" checked/><label for="gender">female</label><input type="radio" name="gender"/></form>',
        },
        {
          id: "image",
          label: "Image",
          // Select the component once it's dropped
          select: true,
          // You can pass components as a JSON instead of a simple HTML string,
          // in this case we also use a defined component type `image`
          content: { type: "image" },
          // This triggers `active` event on dropped components and the `image`
          // reacts by opening the AssetManager
          activate: true,
        },
      ],
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
  // editor.plugins.add("grapesjs-custom-code", customCodePlugin);
}
