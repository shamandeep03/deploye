export default function Panels() {
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
          id: "appPages",
          className: "openbtn btn btn-light panel__tops prewiew nav-item",
          label: "home pages",
          command(editor) {
            document.getElementById("mySidebar").style.width = "250px";
            document.querySelector(".pages-container").style.display="flex";
            document.querySelector(".styles-container").style.display = ""
            },
            attributes: { title: "App New Page",style:"marginLeft:30px"},
        },
        {
          id: "preview-button",
          className: "fa fa-eye privew panel__tops btn btn-light nav-item",
          command: "sw-visibility",
          active: false,
          attributes: { title: "View" ,style: "display:none" },
          togglable: true,
        },
        
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
          command(editor){
            editor.runCommand('fullscreen', {  target: '#something' })
          },
          attributes: { title: "full screen" },
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
