import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from './routes/Home'
import About from './routes/About'
import Contact from "./routes/Contact";
import Healio from "./routes/Healio";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/talk" element={<Healio />} />
      </Routes>
    </>
  );
}

export default App;
