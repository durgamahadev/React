import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddTodo from "./AddTodo";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { removeTodo } from "../redux/features/todoSlice";
import type { Todo } from "../type";
import { useDispatch, useSelector } from "../redux/store";

const Todos = () => {
  const todos:Todo[] = useSelector((store) => store.todo);
  const dispatch = useDispatch();

  const handelDelete = (id: string) => {
    dispatch(removeTodo(id));
  };

  return (
    <div className="todo-container">
      <h2>To-Do List</h2>

      <AddTodo />
      <ul id="todo-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button
              className="delete-btn"
              onClick={() => handelDelete(todo.id)}
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
