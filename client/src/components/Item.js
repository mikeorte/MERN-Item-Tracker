import React, { useState } from "react";

const Item = ({ item, updateItem, deleteItem }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(item.name);

  const handleUpdate = () => {
    updateItem(item._id, name);
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={handleUpdate}>Save</button>
        </div>
      ) : (
        <div>
          {item.name}
          <div>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => deleteItem(item._id)}>Delete</button>
          </div>
        </div>
      )}
    </li>
  );
};

export default Item;
