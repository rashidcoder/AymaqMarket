import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Cart from "./Cart/Cart";
import Catalog from "./Catalog/Catalog";
import Navbar from "./Navbar/Navbar";
import "./App.css";



function App() {
  return (
    <>
      <div className="test-banner">
        Site now <span className="highlight">test mode.</span>
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/catalog" element={<Catalog />} />
        </Routes>
        <Navbar />
      </Router>
    </>
  );
}

export default App;
