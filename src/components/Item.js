import React, { useState } from "react";
import "./App.css"

function Item({ name, category }) {
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const itemClass = isAddedToCart ? "remove" : "add";

  const toggleAddedToCart = () => {
    setIsAddedToCart(!isAddedToCart);
  }

  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={itemClass} onClick={toggleAddedToCart}>
        {isAddedToCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
