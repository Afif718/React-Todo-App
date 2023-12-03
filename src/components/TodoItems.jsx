/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem";

const TodoItems = ({ items, onDeleteClick }) => {
  return (
    <>
      <div className="container">
        {items.map((item) => (
          <TodoItem
            key={item.name}
            todoName={item.name}
            todoDate={item.dueDate}
            onDeleteClick={onDeleteClick}
          />
        ))}
      </div>
    </>
  );
};

export default TodoItems;
