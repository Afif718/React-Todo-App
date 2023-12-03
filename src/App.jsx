/* eslint-disable react/no-unknown-property */
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleAddButton = (itemName, itemDate) => {
    console.log(`New Item Added ${itemName} and Date:${itemDate} `);

    const newTodoItems = [...todoItems, { name: itemName, dueDate: itemDate }];

    setTodoItems(newTodoItems);
  };

  //delete button functionalities
  /*newTodoItem will be an array containing all the todo items from todoItems except for the 
  ones whose name property is equal to the specified itemName.
   */
  const handleDeleteButton = (itemName) => {
    console.log("Item deleted: " + itemName);
    const newTodoItem = todoItems.filter((item) => item.name !== itemName);
    setTodoItems(newTodoItem);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo OnAddButtonClicked={handleAddButton} />
      {todoItems.length === 0 && <WelcomeMessage />}
      <div className="items-container">
        <TodoItems items={todoItems} onDeleteClick={handleDeleteButton} />
      </div>
    </center>
  );
}

export default App;
