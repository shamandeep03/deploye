import React from "react";
import { useSelector } from "react-redux";
const Templates = () => {
  const { data } = useSelector((state) => state.template);
  return <html dangerouslySetInnerHTML={{ __html: data }} />;
};

export default Templates;
