import axios from "axios";
import { data } from "../../data/templatesData";
export const fetchHtml = (id, links) => async (dispatch) => {
  try {
    dispatch({ type: "GET_PAGE" });
    let url = `/pages/${id}/${id}.html`;
    let cssurl = `/pages/${id}/${id}.css`;
    let method = "GET";
    let cdns = data.filter((i) => i.id === id);
    const css = await axios.get(cssurl, { responseType: "text" });
    await axios
      .request({
        url,
        method,
        responseType: "text/html",
      })
      .then(({ data }) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, "text/html");
        const head = doc.querySelector("head");
        const style = document.createElement("style");
        style.innerHTML = css.data;
        head.appendChild(style);
        dispatch({
          type: "GET_PAGE_SUCCESS",
          payload: { data: doc.documentElement.innerHTML, cdns: cdns },
        });
      });
  } catch (error) {
    console.log(error);
  }
};
