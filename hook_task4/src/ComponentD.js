import React, { useContext } from "react";
import { mycontxtname } from "./MyContext";

const ComponentD = () => {
  const detail = useContext(mycontxtname);
  return (
    <div>
      <h2>ComponentD</h2>
      <h1>{detail.name}</h1>
    </div>
  );
};

export default ComponentD;
