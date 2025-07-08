import "./Home.css";
import {CirclePlus, Search, } from "lucide-react"


function Home() {
  const products = [
    { id: 1, name: "Premium Headphones", price: "$99.99", image: require("../Images/cocacola.png") },
    { id: 2, name: "Wireless Speaker", price: "$79.99", image: require("../Images/cocacola.png") },
    { id: 3, name: "Smart Watch", price: "$199.99", image: require("../Images/cocacola.png") },
    { id: 4, name: "Bluetooth Earbuds", price: "$59.99", image: require("../Images/cocacola.png") },
    { id: 5, name: "Premium Headphones", price: "$99.99", image: require("../Images/cocacola.png") },
    { id: 6, name: "Wireless Speaker", price: "$79.99", image: require("../Images/cocacola.png") },
    { id: 7, name: "Smart Watch", price: "$199.99", image: require("../Images/cocacola.png") },
    { id: 8, name: "Bluetooth Earbuds", price: "$59.99", image: require("../Images/cocacola.png") },
  ];

  return (
    <>
      <div className="headerbox">
        <div className="header">
          <span>Aymaq Market</span>
        </div>
        <div className="search-bar">
          <input type="search" placeholder="Search products..." />
          < Search />
        </div>
      </div>


      <div className="product-list">
        {products.map((product) => (
          <div className="product" key={product.id}>
          
            <div className="productimg">
              <img src={product.image} alt={product.name} />
            </div>

            <div className="productinfo">
              <span>{product.name}</span>
              <span>{product.price}</span>
            </div>
            
            <div className="addtocart">
              <CirclePlus size={"20px"} />
              <span>Add to Cart</span>
            </div>
          
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
