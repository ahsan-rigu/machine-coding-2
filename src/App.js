import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { useState } from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Archived from "./pages/Archived";

function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <div className={"App" + " " + theme}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/archived" element={<Archived />}></Route>
      </Routes>
    </div>
  );
}

export default App;
