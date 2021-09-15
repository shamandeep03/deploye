import store from '../../src/store';
export default function Panels() {
  var Pages = store.getState().template.cdns[0].pages;
  console.log(Pages,'----------')
  return [
    {
      id: "basic-actions",
      el: ".preview_panel",
      buttons: [
        {
          id: "show-style",
          active: true,
          className:
            "fa fa-paint-brush btn btn-light panel__tops prewiew nav-item",
          command: "show-styles",
          attributes: { title: "Open style Manager", style: "display:none" },
          togglable: false,
        },
        {
          id: "preview-button",
          className: "fa fa-eye privew panel__tops btn btn-light nav-item",
          command: "sw-visibility",
          label: "Privew",
          active: false,
          attributes: { title: "View" },
          togglable: true,
        },
        {
          id: "appPages",
          className: "btn btn-light panel__tops prewiew nav-item",
          label: "pages",
          command(editor) { 
            document.querySelector(".pages-container").style.display="flex";
            document.querySelector(".page_add").style.display="block";
          },
            attributes: { title: "App New Page"},
        },
        // {
        //   id: "publish",
        //   className: "btn btn-publish panel__tops nav-item",
        //   label: "publish",
        //   command: "publish-changes",
        //   togglable: true,
        // },
        {
          id: "device-desktop",
          className: "fa fa-desktop prewiew panel__tops btn btn-light nav-item",
          command: "set-device-desktop",
          active: true,
          attributes: { title: "Desktop View" },
          togglable: false,
        },
        {
          id: "device-mobile",
          className: "fa fa-mobile prewiew panel__tops btn btn-light nav-item",
          command: "set-device-mobile",
          attributes: { title: "Mobile View" },
          togglable: false,
        },
        {
          id: "prewiew",
          className: "fa fa-tablet prewiew panel__tops btn btn-light nav-item",
          command: "set-device-Tablet",
          attributes: { title: "Tablet View" },
          togglable: false,
        },
        {
          id: "undo",
          className: "fa fa-undo btn btn-light panel__tops prewiew nav-item",
          command: (e) => e.runCommand("core:undo"),
          attributes: { title: "Undo" },
        },
        {
          id: "redo",
          className: "fa fa-repeat btn btn-light panel__tops prewiew nav-item",
          command: (e) => e.runCommand("core:redo"),
          attributes: { title: "Redo" },
        },
        {
          id: "show-style",
          active: true,
          className:
            "fa fa-paint-brush btn btn-light panel__tops prewiew nav-item",
          command: "show-styles",
          attributes: { title: "Open style Manager" },
          togglable: false,
        },
        {
          id: "show-layers",
          active: true,
          className: "fa fa-bars btn btn-light panel__tops prewiew nav-item",
          command: "show-layers",
          attributes: { title: "Open Layers Manager" },
          togglable: false,
        },
        {
          id: "show-traits",
          active: true,
          className: "fa fa-cog btn btn-light panel__tops prewiew nav-item",
          attributes: { title: "Open Traits Manager" },
          command: "show-traits",
          togglable: false,
        },
        {
          id: "show-blocks",
          active: true,
          className:
            "fa fa-th-large btn btn-light panel__tops prewiew nav-item",
          command: "show-blocks",
          attributes: { title: "Open Block Manager" },
          togglable: false,
        },
        {
          label:"add pages",
          className: "btn btn-light panel__tops prewiew nav-item page_add",
          command(editor) { 
          const pageManager = editor.Pages;
          const len = pageManager.getAll().length;
            pageManager.add({
              name:`new-page ${len + 1}`,
              id: `new-page-id ${len + 1}`, // without an explicit ID, a random one will be created
              styles: `.my-class { color: red }`, // or a JSON of styles
              component: `<div class="my-class">My element ${len + 1}</div>`, // or a JSON of components
            });
            const somePage = pageManager.get(`new-page-id ${len + 1}`);
            pageManager.select(somePage);
            Pages.push( pageManager.select(somePage))
            console.log( Pages.push( pageManager.select(somePage)),'===============')
           },
          attributes: { title: "App New Page"},
        }
      ],
    },
    {
      el: ".left__top",
      buttons: [
        {
          id: "export",
          className:
            "fa fa-code left btn btn-light panel__tops prewiew nav-item",
          attributes: { title: "Code View" },
          command: "export-template",
          context: "export-template", // For grouping context of buttons from the same panel
        },
        {
          id: "full screen",
          className:
            "fa fa-arrows-alt btn btn-light panel__tops prewiew nav-item left",
          command: (e) => e.runCommand("core:fullscreen"),
          attributes: { title: "full screen" },
        },
        { 
          id: "export",
          className:
            "fa fa-code btn btn-light panel__tops prewiew nav-item left",
          attributes: { title: "Code View" },
          command: "export-template",
          context: "export-template", // For grouping context of buttons from the same panel
        },
        {
          id: "show-json",
          className:
            "btn-show-json left  btn btn-light panel__tops prewiew nav-item",
          label: "J",
          context: "show-json",
          command(editor) {
            editor.Modal.setTitle("Components JSON")
              .setContent(
                `<textarea style="width:100%; height: 250px;">
                ${JSON.stringify(editor.getComponents())}
              </textarea>`
              )
              .open();
          },
        },
      ],
    },
  ];
}
