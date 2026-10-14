import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddTodo = () => {
  return (
    <div className="todo-input-area">
      <input type="text" id="todo-input" placeholder="Add a new task..." />
      <button id="add-btn">
        <FontAwesomeIcon icon={faAdd} />
      </button>
    </div>
  );
};

export default AddTodo;
