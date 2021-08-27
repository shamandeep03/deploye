import axios from "axios";
export const fetchHtml = (id) => async (dispatch) => {
  try {
    dispatch({ type: "GET_PAGE" });
    let url = `/pages/${id}/${id}.html`;
    let cssurl = `/pages/${id}/${id}.css`;
    let method = "GET";
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
        //head.appendChild(script);
        dispatch({
          type: "GET_PAGE_SUCCESS",
          payload: doc.documentElement.innerHTML,
        });
      });
  } catch (error) {
    console.log(error);
  }
};
