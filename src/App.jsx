import "./App.css";
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home'
import About from "./pages/About";
import Contact from "./pages/Contact";
import Nav from "./components/nav"
import Users from "./pages/Users";

function App() {

  return (
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/users/:username" element={<Users/>} />
        </Routes>
      </Router>
  );
}

export default App;
