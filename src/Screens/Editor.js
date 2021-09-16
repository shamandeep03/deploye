import React, { useEffect, useState } from "react";
import {CommandJs}  from "../config/GrapesjsEditor";
import "../Screens/Editor.css";
import { css } from "@emotion/react";
import RingLoader from "react-spinners/RingLoader";
import $ from "jquery";
const Editor = ({ id, Temp }) => {
  let [loading, setLoading] = useState(true);
  const override = css`
    border-color: red;
    position :absolute;
    height:100vh;
    width:100%;
    padding-top:20%;
    padding-left:20%;
    justify-content: center !important;
    background-color: white;
    z-index:99999;
  `; 
  const closeNav=()=>{
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("page_div").style.marginLeft= "0";
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
                    style={{ marginTop: "-19px",backgroundColor: "transparent" }}
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
            >
            </div>
            <div id="page_div" className="pages-container">
              <div id="mySidebar" className="sidebar">
                <h3>Pages</h3>
              <span className="closebtn" onClick={closeNav}>×</span>
              </div>
              </div>
            <div className="editor-canvas">
              <div id="gjs2">{Temp}</div>
            </div>
            <div className="panel__right">           
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
