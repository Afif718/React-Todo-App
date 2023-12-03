/* eslint-disable react/no-unknown-property */

import { useState } from "react";

function AddTodo({ OnAddButtonClicked }) {
  //we need to declare two states for the two states
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClick = () => {
    if (todoName.length && dueDate.length > 0) {
      OnAddButtonClicked(todoName, dueDate);
      //after sending input data set the two inputs blank
      setTodoName("");
      setDueDate("");
    }
  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>

        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange} />
        </div>

        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddButtonClick}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
