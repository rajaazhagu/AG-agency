import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Services from "./Services";
import Pricing from "./Pricing";
import Contact from "./Contact";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
  );
}

export default App;
