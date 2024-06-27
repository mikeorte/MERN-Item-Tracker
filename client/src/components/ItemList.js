import React from "react";
import Item from "./Item";

const ItemList = ({ items, updateItem, deleteItem }) => {
  return (
    <div>
      <h2>Item List</h2>
      <ul>
        {items.map((item) => (
          <Item
            key={item._id}
            item={item}
            updateItem={updateItem}
            deleteItem={deleteItem}
          />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
