/* eslint-disable react/no-unknown-property */
import { RiDeleteBinFill } from "react-icons/ri";

function TodoItem1({ todoName, todoDate, onDeleteClick }) {
  return (
    <div className="itemsContainer">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>

        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => onDeleteClick(todoName)}>
            <RiDeleteBinFill />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem1;
