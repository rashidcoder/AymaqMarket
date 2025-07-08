import "./Home.css";
import {CirclePlus, Search, } from "lucide-react"
import cocacola from "../Images/cocacola.png";


function Home() {
  const products = [
    { id: 1, name: "Premium Headphones", price: "$99.99", image:cocacola },
    { id: 2, name: "Wireless Speaker", price: "$79.99", image:cocacola },
    { id: 3, name: "Smart Watch", price: "$199.99", image:cocacola },
    { id: 4, name: "Bluetooth Earbuds", price: "$59.99", image:cocacola },
    { id: 5, name: "Premium Headphones", price: "$99.99", image:cocacola },
    { id: 6, name: "Wireless Speaker", price: "$79.99", image:cocacola },
    { id: 7, name: "Smart Watch", price: "$199.99", image:cocacola },
    { id: 8, name: "Bluetooth Earbuds", price: "$59.99", image:cocacola },
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
