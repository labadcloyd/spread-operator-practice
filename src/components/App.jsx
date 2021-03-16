import React, { useState } from "react";
import Item from "./item";

function App() {
  const [items, setitems] = useState([]);
  const [currentValue, setValue] = useState("");
  function changeItem(event) {
    let value = event.target.value;
    setValue(value);
  }

  function addItem(event) {
    event.preventDefault();
    let newItem = currentValue;
    setitems([...items, newItem]);
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <form className="form">
        <input
          type="text"
          name="name"
          onChange={changeItem}
          value={currentValue}
        />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </form>
      <div>
        <ul>
          {items.map((item, index) => {
            return <Item name={item} key={index} />;
          })}
          ;
        </ul>
      </div>
    </div>
  );
}

export default App;
