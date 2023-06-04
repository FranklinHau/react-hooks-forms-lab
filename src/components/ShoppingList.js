import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onAddItem }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [itemsList, setItemsList] = useState(items);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  
  function handleSearchChange(event) {
    setSearchText(event.target.value);
  }

  function handleItemFormSubmit(newItem) {
      setItemsList((prevItems) => [...prevItems, newItem]);
    } // Add the new item to the items list
  

  const itemsToDisplay = itemsList.filter((item) => {
    if (selectedCategory !== "All" && item.category !== selectedCategory) {
      return false;
    }

    return item.name.toLowerCase().includes(searchText.toLowerCase()); // Filter items based on the search text
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <Filter 
        onCategoryChange={handleCategoryChange} 
        searchText={searchText} // Pass searchText here
        onSearchChange={handleSearchChange} // Pass onSearchChange here
        selectedCategory={selectedCategory}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
