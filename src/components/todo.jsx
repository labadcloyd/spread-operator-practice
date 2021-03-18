import React, { useState } from "react";
import Item from "./item";
import Input from "./input";

function Todo() {
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
  function handleDelete(id) {
    setitems((prevValue) => {
      return prevValue.filter((value, index) => {
        return id !== index;
      });
    });
  }
  return (
    <div>
      <Input
        changeItemProp={changeItem}
        inputValueProp={inputValue}
        addItemProp={addItem}
      />
      <div>
        <ul>
          {items.map((item, index) => {
            return (
              <Item
                id={index}
                key={index}
                item={item}
                deleteItem={handleDelete}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default Todo;
