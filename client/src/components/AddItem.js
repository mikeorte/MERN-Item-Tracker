import React, { useState } from "react";

const AddItem = ({ addItem }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(name);
    setName("");
  };

  return (
    <div>
      <h2>Add Item</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter item name"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddItem;
