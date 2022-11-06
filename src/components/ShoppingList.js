import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, handleItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchFilter, setSearchFilter] = useState("")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items
  .filter((item) => selectedCategory === "All" || item.category === selectedCategory)
  // .filter((item) => item.name.toLowerCase().includes(searchFilter.toLowerCase()))

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit = {handleItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} searchFilter = {searchFilter} onSearchChange = {setSearchFilter}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
