import { createContext, useState } from "react";
import Headers from "./components/Headers";
import Results from "./components/Results";

//Create context

export const InputContext=createContext();



function App() {
 const [inputValue,setInputValue]=useState("")
 console.log(inputValue)
 const value={
  inputValue,
  setInputValue
 }
  return (
    <InputContext.Provider value={value}>
  <div className="App">
 

<Headers/>
<Results/>
  </div>
  </InputContext.Provider>
  );
}

export default App;
