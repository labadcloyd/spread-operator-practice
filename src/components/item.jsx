import React, { useState } from "react";

function Item(props) {
  const [linethrough, setline] = useState(false);
  function handleClick() {
    setline((prevValue) => {
      return !prevValue;
    });
  }
  return (
    <div>
      <li
        key={props.index}
        style={
          linethrough
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }
      >
        <span onClick={handleClick}>{props.item}</span>
        <button
          className="delete"
          onClick={() => {
            props.deleteItem(props.id);
          }}
        >
          delete
        </button>
      </li>
    </div>
  );
}
export default Item;
