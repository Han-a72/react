
import React, { useContext } from "react";
import { MyContext } from "./Context"; 



function Child() {
    const value = useContext(MyContext);
  
    return (
      <div className="child-container">
        <h1>Child Component</h1>
        <p>Value from Context: {value}</p>
      </div>
    );
  }
  
  export default Child;
  