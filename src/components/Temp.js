import React from "react";
import { useSelector } from "react-redux";
const Temp = () => {
  const { data } = useSelector((state) => state.template);
  return <div dangerouslySetInnerHTML={{ __html: data }} />;
};

export default Temp;
