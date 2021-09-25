import React, { useEffect, useState } from "react";
import {CommandJs}  from "../config/GrapesjsEditor";
import "../Screens/Editor.css";
import { css } from "@emotion/react";
import BounceLoader from "react-spinners/BounceLoader";
import store from '../../src/store';

const Editor = ({ id, Temp }) => {
  let [loading, setLoading] = useState(true);
  var preview = store.getState().template.cdns[0].preview;
  const override = css`
    position :absolute;
    height:100vh;
    width:100%;
    padding-top:20%;
    padding-left:20%;
    justify-content: center !important;
    background-color: #212529;
    z-index:99999;
  `; 
  const closeNav=()=>{
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("page_div").style.marginLeft= "0";
  }
  const closecontainer=()=>{
    document.getElementById("panel__right").style.width = "0";
    document.getElementById("right_div").style.width= "0";
    document.getElementById("right_div").style.marginLeft= "0";
    document.getElementById("closecontianer").style.display= "none";
    document.getElementById("opencontianer").style.display= "block";
  }
  
  const opencontainer=()=>{
    document.getElementById("right_div").style.width = "290px";
    document.querySelector("#right_div").style.display="flex";
    document.getElementById("closecontianer").style.display= "block";
    document.getElementById("opencontianer").style.display= "none";
  }

  useEffect(() => {
    setLoading(true);
    CommandJs();
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <div className="container-fluid p-0">
      {loading && <div id="loaderring"><BounceLoader
        color={"gray"}
        loading={loading}
        css={override}
        size={60}
      /></div>}
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">
                A
              </a>
                  <div
                    id="panela_button"
                    className="preview_panel"
                    style={{ marginTop: "-19px",backgroundColor: "transparent" }}
                  ></div>
                  <div className="panel_device"></div>
                  <div className="style_panel">
                  </div>
                  <div className="pages_panel"></div>
                
            </div>
          </nav>
          <div
            className="editor-row d-flex "
            style={{
              height: "648px",
              backgroundColor: "#212529",
              color: "white",
            }}
          >
            <div
              className="left__top"
              id="left_button_panel"
              style={{
                flexBasis: "45px",
                height: "90vh",
                position: "inherit",
                backgroundColor: "transparent"
              }}
            ><a rel="noreferrer" className="prewiew gjs-pn-btn btn btn-light panel__tops prewiew nav-item" href={preview} target="_blank" ><i className="fa fa-eye"></i></a>
            </div>
            <div id="page_div" className="pages-container">
              <div id="mySidebar" className="sidebar">
                <h3 style={{paddingBottom: "20px"}}>Pages</h3>
              <span className="closebtn" onClick={closeNav}>x</span>
              <button className="btn btn-light panel__tops prewiew nav-item page_buton" type="submit" id="new_page">Add new</button>
              </div>
              </div>
            <div className="editor-canvas">
              <div id="gjs2">{Temp}</div>
            </div>
            <div id="right_div" className="container">
            <span className="closecontianer" id="closecontianer" onClick={closecontainer}>{"<"}</span>
            <span className="opencontianer" id="opencontianer" style={{display:"none"}} onClick={opencontainer}>{">"}</span>
            <div className="panel__right" id="panel__right">           
              <div className="layers-container" style={{ textAlign: "center" }}>
                Layers Manager
              </div>
              <div className="styles-container" style={{ textAlign: "center",width: "251px" }}>
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
    </div>
  );
};

export default Editor;
