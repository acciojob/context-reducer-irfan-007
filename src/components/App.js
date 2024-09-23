import React, { createContext, useContext, useState } from "react";
import Signin from "./Signin";
export const myContext = createContext();

function App() {
  return (
    <myContext.Provider value={"rohan"}>
      <Signin />
    </myContext.Provider>
  );
}

export default App;
