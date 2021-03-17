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
        onClick={handleClick}
        style={
          linethrough
            ? { textDecoration: "line-through", cursor: "pointer" }
            : { textDecoration: "none", cursor: "pointer" }
        }
      >
        {props.item}
      </li>
    </div>
  );
}
export default Item;
