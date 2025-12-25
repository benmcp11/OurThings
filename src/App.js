import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Wordle from "./components/Wordle"; // Import your Wordle component
import Connections from "./components/Connections"; // Import your Connections component
import Strands from "./components/Strands"; // Import your Strands component
import StrandsInput from "./components/StrandsInput"; // Import your StrandsInput component
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wordle" element={<Wordle />} />
        <Route path="/connections" element={<Connections />} />
        <Route path="/strands" element={<Strands />} />
        <Route path ="*" element={<Home />} />
        <Route path ="/strandsinput" element={<StrandsInput />} />
      </Routes>
    </Router>
  );
};

export default App;
