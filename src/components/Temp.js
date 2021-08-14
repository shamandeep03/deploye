import React from "react";
import { useSelector } from "react-redux";
const Temp = () => {
  const { data } = useSelector((state) => state.template);
  return (
    <div>
      {data ? (
        <div dangerouslySetInnerHTML={{ __html: data }} />
      ) : (
        <div
          className="spinner-border"
          style={{ marginLeft: "599px", marginTop: "300px" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </div>
  );
};
export default Temp;
