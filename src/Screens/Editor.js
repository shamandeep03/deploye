import React, { useEffect, useState } from "react";
import { CommandJs } from "../config/GrapesjsEditor";
import "../Screens/Editor.css";
import { css } from "@emotion/react";
import RingLoader from "react-spinners/RingLoader";
import store from '../../src/store';
const Editor = ({ id, Temp }) => {
  let [loading, setLoading] = useState(true);
  const override = css`
    border-color: red;
    position :absolute;
    height:100vh;
    width:100%;
    background-color: white;
    z-index:99999;
  `;
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      CommandJs();
    }, 1000);
  }, []);
 function selectPage(pages){
   console.log(pages,'select')
 }
 function  isSelected(pageId) {
 console.log(pageId)
 }
 function removePage(pageId) {
  console.log(pageId,'removePage')
}
  var Pages = store.getState().template.cdns[0].pages;
  console.log(Pages,'----------')
  return (
    <div className="container-fluid p-0">
      {loading && <RingLoader
        color={"gray"}
        loading={loading}
        css={override}
        size={150}
      />}
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">
                A
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ">
                  <div
                    id="panela_button"
                    className="preview_panel"
                    style={{ marginTop: "-19px" }}
                  ></div>
                  <div className="panel_device"></div>
                  <div className="style_panel"></div>
                  <div className="pages_panel"></div>
                </ul>
              </div>
            </div>
          </nav>
          <div
            className="editor-row d-flex "
            style={{
              height: "580px",
              backgroundColor: "#212529",
              color: "white",
            }}
          >
            <div
              className="left__top"
              id="left_button_panel"
              style={{
                flexBasis: "45px",
                height: "92vh",
                position: "inherit",
              }}
            ></div>
            <div className="editor-canvas">
              <div id="gjs2">{Temp}</div>
            </div>
            <div className="panel__right">   
              <div className="pages-container" style={{ textAlign: "center", display:"none"}}>
               pages
               {Pages.map((num,inedx)=> 
                <div type="submit" key={num.id} className="btn btn-light panel__tops prewiew nav-item page_buton" onClick={() =>selectPage(num.id)}>
                page&nbsp;&nbsp;{inedx +1}<span  onClick={removePage(num.id)} className="page-close">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x</span></div>
               )}
              </div>        
              <div className="layers-container" style={{ textAlign: "center" }}>
                Layers Manager
              </div>
              <div className="styles-container" style={{ textAlign: "center" }}>
                Style Manager
              </div>
              <div className="traits-container" style={{ textAlign: "center" }}>
                Traits Manager
              </div>
              <div id="blocks" style={{ textAlign: "center" }}>
                Block Manager
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Editor;
