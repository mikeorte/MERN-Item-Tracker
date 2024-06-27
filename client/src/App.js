import React, { useState, useEffect } from "react";
import "./App.css";
import ItemList from "./components/ItemList";
import AddItem from "./components/AddItem";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await axios.get("http://localhost:5000/items");
    setItems(response.data);
  };

  const addItem = async (name) => {
    const response = await axios.post("http://localhost:5000/items", { name });
    setItems([...items, response.data]);
  };

  const updateItem = async (id, name) => {
    const response = await axios.put(`http://localhost:5000/items/${id}`, {
      name,
    });
    setItems(items.map((item) => (item._id === id ? response.data : item)));
  };

  const deleteItem = async (id) => {
    await axios.delete(`http://localhost:5000/items/${id}`);
    setItems(items.filter((item) => item._id !== id));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Item List MERN Project</h1>
      </header>
      <main>
        <section className="add-item-section">
          <AddItem addItem={addItem} />
        </section>
        <section className="item-list-section">
          <ItemList
            items={items}
            updateItem={updateItem}
            deleteItem={deleteItem}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
