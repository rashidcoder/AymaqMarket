import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Cart from "./Cart/Cart";
import Search from "./Catalog/Catalog";
import Navbar from "./Navbar/Navbar";
import "./App.css";



function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/catalog" element={<Search />} />
        </Routes>
      <Navbar />
    </Router>
  );
}

export default App;
