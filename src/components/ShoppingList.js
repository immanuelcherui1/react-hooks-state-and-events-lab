import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [filterCategory, setFilterCategory] = useState("All");

  const handleFilterChange = (event) => {
    setFilterCategory(event.target.value);
  };

  const filteredItems = filterCategory !== "All" ?
    items.filter(item => item.category === filterCategory) :
    items;

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" value={filterCategory} onChange={handleFilterChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
