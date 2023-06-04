import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit, searchText}) { // Add new prop here
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce");

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = {
      id: uuid(), 
      name: itemName,
      category: itemCategory,
    };

    onItemFormSubmit(newItem); // Pass the new item to the ShoppingList component

    // Reset form inputs
    setItemName("");
    setItemCategory("Produce");
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
      Name:
      <input 
        type="text" 
        name="name" 
        value={itemName} 
        onChange={(e) => setItemName(e.target.value)}
         />
      </label>

      <label>
        Category:
        <select 
          name="category"
          value={itemCategory} // Control the select value with state
          onChange={(e) => setItemCategory(e.target.value)}
          >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
