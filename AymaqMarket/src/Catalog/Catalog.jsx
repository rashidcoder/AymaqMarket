import React from "react";
import "./Catalog.css";
import {Search,} from "lucide-react"
import forCatalog from "../Images/forCatalog.png" ;

function Category() {

  const Category = [
    { id: 1, text: "Drinks", image: forCatalog },
    { id: 2, text: "Drinks", image: forCatalog },
    { id: 3, text: "Drinks", image: forCatalog },
    { id: 4, text: "Drinks", image: forCatalog },
    { id: 5, text: "Drinks", image: forCatalog },
    { id: 6, text: "Drinks", image: forCatalog },
    { id: 7, text: "Drinks", image: forCatalog },
    { id: 8, text: "Drinks", image: forCatalog },
    { id: 9, text: "Drinks", image: forCatalog },
    { id: 10, text: "Drinks", image: forCatalog },
  ];


  return (
    <>
      <div className="search-bar">
        <input type="search" placeholder="Search products..." />
        <Search />
      </div>
      
      <div className="category-bar">
        
      </div> 
    </>
  );
}

export default Category ;
