
import React from "react";
import Child from "./Child"; 
import { MyContextProvider } from "./Context";
import './index.css';



function App() {
  return (
    <MyContextProvider>
      <div className="parent-container">
        <h1>Parent Component</h1>
        <Child />
      </div>
    </MyContextProvider>
  );
}

export default App;

