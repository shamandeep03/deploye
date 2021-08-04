import React from "react";
import { useSelector } from "react-redux";
const Temp = () => {
  const { data } = useSelector((state) => state.template);
  return <html dangerouslySetInnerHTML={{ __html: data }} />;
};

export default Temp;
