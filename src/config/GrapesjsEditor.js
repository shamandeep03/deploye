import "grapesjs/dist/css/grapes.min.css";
import "../Screens/Editor.css";
//import "ckeditor";
import pluginCKEditor from "grapesjs-plugin-ckeditor";
import grapesjs from "grapesjs";
import Blockdata from "./Blocks";
import Panelsdata from "./Panels";
import store from '../../src/store';

export function  GrapesjsEditor(){
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
        {
          type: 'image',
          src: 'https://app-landing-theme-02.netlify.app/images/image-01.png',
          height: 350,
          width: 250,
          name: 'displayName'
        },
        {
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
      modalTitle: 'Selectss Image',
    },
    fromElement: 1,
    height: "648px",
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
    // plugins: [pluginCKEditor],
    // pluginsOpts: {
    //   'gjs-plugin-ckeditor' : {
    //       language: 'en',
    //       toolbar: [
    //           { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ], items: [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat' ] },
    //           { name: 'links', items: [ 'Link', 'Unlink', 'Anchor' ] },
    //       ],
    //   }
     
    // },
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

export function CommandJs() {
  var setPage = store.getState().template.cdns[0].pages;
  var editor = grapesjs.init(GrapesjsEditor());
  //butons for page open button
  for( var i = 0; i < setPage.length; i++) {
    var button = document.createElement("div");
    button.innerHTML=setPage[i].name;
    button.setAttribute("class", "btn btn-light panel__tops prewiew nav-item page_buton");
    button.setAttribute("type", "submit");
    button.setAttribute("id",setPage[i].id );
    var buttonDiv = document.getElementById("mySidebar");
    buttonDiv.appendChild(button);
  }
  //settings button in  open pages button
  for( var i = 0; i < setPage.length; i++) {
    var ids = setPage[i].name ;
    var newbutton = setPage[i].id ;
    var button = document.createElement("button");
    button.setAttribute("type", "submit");
    button.setAttribute("id",ids);
    button.setAttribute("class","settingbtn fa fa-cog" );
    var buttonDiv = document.getElementById(newbutton);
    buttonDiv.appendChild(button);
  }

  //button for open new page in editor
  for( var j = 0; j < setPage.length; j++) {
    var page_button =  document.getElementById(setPage[j].id);
      page_button.addEventListener("click", function(pageId){
      editor.Pages.select(pageId.target.id)
    });
  }
 //open modal for name of page
  for( var a = 0; a < setPage.length; a++) {
    var id = setPage[a].name;
    var open = document.getElementById(id)
    open.addEventListener("click", function(pageId){
      const modal = editor.Modal;
      const container = document.createElement('div');
      var data = document.createElement("input");
      data.setAttribute("type","text")
      const inputHtml = `<div class ="form-div"><h3>page name</h3><input type="text" style="width:70%" class="form-control" id="page_name" value="${pageId.target.id}"></input>
      <button type="button" class="btn btn-primary name_save" onClick="${myFunction}" >save</button></div>`;
      function myFunction() {
        var data = document.getElementById("page_name").value;
        document.getElementById("jds").innerHTML = data;
      }
      modal.setTitle('page Settings');
      container.innerHTML = inputHtml;
      modal.setContent(container);
      modal.open();
    });
  }
 //buton for create new page
  var page_new = document.getElementById("new_page");
  page_new.addEventListener("click", function(){
    const pageManager = editor.Pages;
    const len = pageManager.getAll().length; 
    var newpage = pageManager.add({
        name: `Page ${len + 1}`,
        component: `<div><h1>New page (${len +1})</h1></div>`,
        id:`Page ${len + 1}`
    });
    setPage.push(newpage)
    var addpages = document.createElement("button")
    addpages.innerHTML=`New page (${len +1})`;
    addpages.setAttribute("class", "btn btn-light panel__tops prewiew nav-item page_buton page_buton_new");
    addpages.setAttribute("type", "submit");
    addpages.setAttribute("id",`Page ${len + 1}` );
    var buttonDiv = document.getElementById("mySidebar");
    buttonDiv.appendChild(addpages);
    pageManager.select(`Page ${len + 1}`)
    var button = document.createElement("button");
    button.setAttribute("type", "submit");
    button.setAttribute("id", `Page ${len + 1}+ seeting`);
    button.setAttribute("class","settingbtn fa fa-cog" );
    var buttonDiv = document.getElementById(`Page ${len + 1}`);
    buttonDiv.appendChild(button);
    });
    for( var a = 0; a < setPage.length; a++) {
      var id = setPage[a].name;
      var open = document.getElementById(id)
      open.addEventListener("click", function(pageId){
        const modal = editor.Modal;
        const container = document.createElement('div');
        var data = document.createElement("input");
        data.setAttribute("type","text")
        const inputHtml = `<h3>page name</h3><div class ="form-div"><input type="text" style="width:70%" class="form-control" id="page_name" value="${pageId.target.id}"></input>
        <button type="button" class="btn btn-primary name_save" onclick="${myFunction}" >save</button></div>`;
        function myFunction(pageId) {
          var data = document.getElementById("page_name").value;
          document.getElementById("jds").innerHTML = data;
          console.log("jdhjshfj")
        }
        modal.setTitle('page Settings');
        container.innerHTML = inputHtml;
        modal.setContent(container);
        modal.open();
      });
    }
    //
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
      document.querySelector(".styles-container").style.display = "none"
      document.querySelector(".pages-container").style.display="none";
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
      document.querySelector(".styles-container").style.display = "none"
      document.querySelector(".pages-container").style.display="none";
    },
    stop(editor, sender) {
      this.getTraitsEl(editor).style.display = "none";
    },
  });
  editor.Commands.add("set-device-desktop", {
    run: (editor) => {editor.setDevice("Desktop")
    document.querySelector(".styles-container").style.display = ""
  },
  });
  editor.Commands.add("set-device-mobile", {
    run: (editor) => {editor.setDevice("Mobile")
    document.querySelector(".styles-container").style.display = ""
  },
  });
  editor.Commands.add("set-device-Tablet", {
    run: (editor) => {editor.setDevice("Tablet")
    document.querySelector(".styles-container").style.display = ""},
  });
 
}
