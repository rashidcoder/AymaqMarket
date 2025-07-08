import React from "react";
import "./Catalog.css";
import {Search,} from "lucide-react"

function SearchPage() {

  const Category = [
    { id: 1, text: "Drinks", image: require("../Images/forCatalog.png") },
    { id: 2, text: "Drinks", image: require("../Images/forCatalog.png") },
    { id: 3, text: "Drinks", image: require("../Images/forCatalog.png") },
    { id: 4, text: "Drinks", image: require("../Images/forCatalog.png") },
    { id: 5, text: "Drinks", image: require("../Images/forCatalog.png") },
    { id: 6, text: "Drinks", image: require("../Images/forCatalog.png") },
    { id: 7, text: "Drinks", image: require("../Images/forCatalog.png") },
    { id: 8, text: "Drinks", image: require("../Images/forCatalog.png") },
    { id: 9, text: "Drinks", image: require("../Images/forCatalog.png") },
    { id: 10, text: "Drinks", image: require("../Images/forCatalog.png") },
  ];


  return (
    <>
      <div className="search-bar">
        <input type="search" placeholder="Search products..." />
        < Search />
      </div>
      
      <div className="category-bar">
        
      </div> 
    </>
  );
}

export default SearchPage ;
