import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./Components/Home/Home";
import Jobs from "./Components/Jobs/Jobs";
import Contact from "./Components/Contact/Contact";
import Layout from "./Components/Layout/Layout";
import About from "./Components/About/About";
import Login from "./Components/Login/Login";

function App() {
  return (
    // <div className="App">

    // </div>
    <BrowserRouter>
      <Routes>

      
        <Route path="/" element={<Layout />}>
          <Route path="Home" element={<Home />} />
          <Route path="Jobs" element={<Jobs />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
