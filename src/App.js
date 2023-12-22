import React from "react";
import "./App.css";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import Footer from "./Components/Footer";

function App() {
  const [mode, setMode] = useState("light"); //? Whether dark mode is enabled or not
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
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        about="About Text Utils"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      {/* Props About and Title Passed as a variable */}
      <div className="container">
        <TextForm
          showAlert={showAlert}
          heading="Enter The Text To Analyze Below"
          mode={mode}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
