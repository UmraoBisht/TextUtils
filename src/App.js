
import './App.css';
import Form from './components/Form';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import About from './components/About';
import Error from './components/Error';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
// import searchIcon from './search.svg'

function App() {
  const toggleTheme = () => {
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-info");
    document.body.classList.remove("text-danger");
    document.body.classList.remove("text-primary");
    document.body.classList.remove("text-warning");
    document.body.classList.remove("text-info");
    document.body.classList.remove("text-dark");
    document.body.classList.remove("text-light");
    if (mode === "light") {
      setMode("dark");
      document.body.classList.add("bg-dark");
      document.body.classList.add("text-light");
      setBtnBgColor("primary");
      showAlert("Dark Mode successfully Applied!", "success");
    } else {
      setMode("light");

      document.body.classList.add("bg-light");
      document.body.classList.add("text-dark");
      setBtnBgColor("dark");

      showAlert("Light Mode successfully Applied!", "success");
    }
  };
  const changeThemeToDarkBlue = () => {
    setMode("blue");
  };
  const changeThemeToDarkRed = () => {
    setMode("danger");
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };

  const handleDismissal = () => {
    setAlert(null);
  };

  const toggleMode = (cls) => {
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-info");
    document.body.classList.remove("text-danger");
    document.body.classList.remove("text-primary");
    document.body.classList.remove("text-warning");
    document.body.classList.remove("text-info");
    document.body.classList.remove("text-dark");
    document.body.classList.remove("text-light");

    document.body.classList.add('bg-' + cls);
    if (cls === "danger" || cls === "warning" || cls === "success") {
      document.body.classList.add('text-dark');
      setBtnBgColor("primary");

    }
    else if (cls === "primary") {
      document.body.classList.add('text-light');
      setBtnBgColor("dark");
      setMode('dark');
      // document.getElementsByClassName('myPrimary').classList.add('btn-dark');
    }
    else {
      document.body.classList.add('text-dark');
    }
  }

  // setInterval(() => {
  //   document.title = "Download Now";
  // }, 1500);

  // setInterval(() => {
  //   document.title = "TextUtiles";
  // }, 3000);


  const [btnBgColor, setBtnBgColor] = useState("primary");
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  return (
    <>
      <BrowserRouter>

        <Navbar links="www.Google.com" emoji="❤️" toggleMode={toggleMode} mode={mode} toggleTheme={toggleTheme} changeThemeToDarkRed={changeThemeToDarkRed} changeThemeToDarkBlue={changeThemeToDarkBlue} />
        <Alert alert={alert} handleDismissal={handleDismissal} />
        <Routes>
          <Route exact index element={<Form mode={mode} btnBgColor={btnBgColor} showAlert={showAlert} />} />
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
