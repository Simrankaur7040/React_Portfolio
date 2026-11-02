
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Home/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/Home/About/About";
import Projects from "./Components/Home/Projects/Projects";
import Contact from "./Components/Home/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
