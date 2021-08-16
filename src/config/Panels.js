export default function Panels() {
  return [
    {
      id: "other_panels",
      el: ".other_panels",
      buttons: [],
    },
    {
      id: "panel-devices",
      el: ".panel__devices",
      appendTo: ".panel__tops",
      className: "myclass",
      buttons: [
        {
          id: "show-style",
          active: true,
          className: "fa fa-paint-brush btn btn-light panel__tops prewiew",
          command: "show-styles",
          attributes: { style: "display:none" },
          togglable: false,
        },
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
          className: "fa fa-undo btn btn-light panel__tops prewiew",
          command: (e) => e.runCommand("core:undo"),
          attributes: { title: "Undo" },
        },
        {
          id: "redo",
          className: "fa fa-repeat btn btn-light panel__tops prewiew",
          command: (e) => e.runCommand("core:redo"),
          attributes: { title: "Redo" },
        },
        {
          id: "show-style",
          active: true,
          className: "fa fa-paint-brush btn btn-light panel__tops prewiew",
          command: "show-styles",
          attributes: { title: "Open style Manager" },
          togglable: false,
        },
        {
          id: "show-layers",
          active: true,
          className: "fa fa-bars btn btn-light panel__tops prewiew",
          command: "show-layers",
          attributes: { title: "Open Layers Manager" },
          togglable: false,
        },
        {
          id: "show-traits",
          active: true,
          className: "fa fa-cog btn btn-light panel__tops prewiew",
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
          className: "fa fa-th-large btn btn-light panel__tops prewiew",
          command: "show-blocks",
          attributes: { title: "Open Block Manager" },
          togglable: false,
        },
        {
          id: "export",
          className: "fa fa-code btn btn-light panel__tops prewiew",
          attributes: { title: "Code View" },
          command: "export-template",
          context: "export-template", // For grouping context of buttons from the same panel
        },
      ],
    },
    // {
    //   id: "basic-actions",
    //   el: ".panel__basic-actions",
    //   buttons: [
    //     {
    //       id: "export",
    //       className: "fa fa-code",
    //       attributes: { title: "Code View" },
    //       command: "export-template",
    //       context: "export-template", // For grouping context of buttons from the same panel
    //     },
    //     //   {
    //     //     id: "show-json",
    //     //     className: "btn-show-json",
    //     //     label: "JSON",
    //     //     context: "show-json",
    //     //     attributes: { title: "json View" },
    //     //     command(editor) {
    //     //       editor.Modal.setTitle("Components JSON")
    //     //         .setContent(
    //     //           `<textarea style="width:100%; height: 250px;">
    //     //   ${JSON.stringify(editor.getComponents())}
    //     // </textarea>`
    //     //         )
    //     //         .open();
    //     //     },
    //     //   },
    //   ],
    // },
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
  ];
}