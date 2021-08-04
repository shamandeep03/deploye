import React, { useEffect } from "react";
import Editorconfig from "../config/Editorconfig";
import grapesjs from "grapesjs";
const Editor = ({ id, Temp }) => {
  useEffect(() => {
      grapesjs.init(Editorconfig());
      console.log(Temp);
  }, []);
  return (
    <div className="container-fluid p-0">
      <div id="gjs">{Temp}</div>
      <div id="blocks"></div>
    </div>
  );
};

export default Editor;
