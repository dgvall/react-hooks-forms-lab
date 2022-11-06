import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [newName, setNewName] = useState("")
  const [newCategory, setNewCategory] = useState("Produce")

  function handleNameChange(event) {
    setNewName(event.target.value)
  }

  function handleCategoryChange(event) {
    setNewCategory(event.target.value)
  }

  function handleSubmit (event) {
    event.preventDefault()

    onItemFormSubmit({
        id: uuid(),
        name: {newName},
        category: {newCategory},
    })
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value = {newName} onChange = {handleNameChange}/>
      </label>

      <label>
        Category:
        <select name="category" value = {newCategory} onChange = {handleCategoryChange}>
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
