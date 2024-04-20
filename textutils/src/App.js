import React, { useState } from "react";
import { BrowserRouter, Route, Routes, createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Nbar from "./components/Nbar.js";
import TextForm from "./components/TextForm.js";
import Alert from "./components/Alert.js";
import About from "./components/About.js";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0a0a0a";
      document.body.style.color = "#a8aebd";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#212529";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Nbar
        title="TextUtils"
        about="About TextUtils"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm
          showAlert={showAlert}
          heading="Enter text to analyze"
          mode={mode}
        />

        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
