import React, { useState } from "react";

function App() {
  const [items, setitems] = useState([]);
  const [inputValue, setInput] = useState("");
  function changeItem(event) {
    let value = event.target.value;
    setInput(value);
  }

  function addItem(event) {
    event.preventDefault();
    let newItem = inputValue;
    setitems([...items, newItem]);
    setInput("");
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
          value={inputValue}
        />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </form>
      <div>
        <ul>
          {items.map((item, index) => {
            return <li key={index}> {item} </li>;
          })}
          ;
        </ul>
      </div>
    </div>
  );
}

export default App;
