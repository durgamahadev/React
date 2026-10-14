import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddTodo from "./AddTodo";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Todos = () => {
  return (
    <div className="todo-container">
      <h2>To-Do List</h2>

      <AddTodo />
      <ul id="todo-list">
        <li>
          Hello world{" "}
          <button className="delete-btn" onClick={() => {}}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Todos;
