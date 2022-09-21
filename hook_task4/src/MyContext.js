import React from "react";
export const mycontxtname = React.createContext();

const MyContext = (props) => {
  let name = "Kamal";
  return (
    <mycontxtname.Provider value={{name:name}}>
      {props.children}
    </mycontxtname.Provider>
  );
};

export default MyContext;
