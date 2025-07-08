import React from "react";
import "./Catalog.css";
import {Search,} from "lucide-react"
import forCatalog from "../Images/forCatalog.png" ;

function Category() {

  return (
    <>
      {/*Searchbar*/}
      <div className="search-bar">
        <input type="search" placeholder="Search products..." />
        <Search />
      </div>

      {/*Categorybar*/}
      <div className="category-bar">
        <div className="category-row">
          <div className="category small">Drinks</div>
          <div className="category large">Drinks</div>
        </div>
        <div className="category-row">
          <div className="category large">Drinks</div>
          <div className="category small">Drinks</div>
        </div>
        <div className="category-row">
          <div className="category small">Drinks</div>
          <div className="category large">Drinks</div>
        </div>
        <div className="category-row">
          <div className="category large">Drinks</div>
          <div className="category small">Drinks</div>
        </div>
        <div className="category-row">
          <div className="category small">Drinks</div>
          <div className="category large">Drinks</div>
        </div>
        <div className="category-row">
          <div className="category large">Drinks</div>
          <div className="category small">Drinks</div>
        </div>        
      </div>
    </>
  );
}

export default Category ;
