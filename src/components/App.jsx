import React, { useState } from "react";
import Todo from "./todo";

function App() {
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <Todo />
    </div>
  );
}

export default App;
