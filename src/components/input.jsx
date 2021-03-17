import React from "react";

function Input(props) {
  return (
    <div>
      <form className="form">
        <input
          name="name"
          onChange={props.changeItemProp}
          value={props.inputValueProp}
        />
        <button onClick={props.addItemProp}>
          <span>Add</span>
        </button>
      </form>
    </div>
  );
}

export default Input;
