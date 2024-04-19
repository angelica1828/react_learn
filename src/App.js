import React, {useState} from "react";
import "./App.css";
import Nbar from "./components/Nbar.js";
import TextForm from './components/TextForm.js'

// import About from "./components/About.js";

function App() {
  const [mode, setMode] = useState("light")

  const toggleMode = () =>{
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor = '#6c757d';
      document.body.style.color = 'white';
    }else{
      setMode("light");
      document.body.style.backgroundColor = 'white';
      document.body.style.color = '#212529';
    }
  }

  return (
    <>
      <Nbar title="TextUtils" about="About TextUtils" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
        <TextForm heading="Enter text to analyze" node={mode}/>
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
