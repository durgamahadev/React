import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addTodo } from "../redux/features/todoSlice";
import { useState } from "react";
import { useDispatch } from "../redux/store";

const AddTodo = () => {
  const [text, setText] = useState<string>("");
  const dispatch = useDispatch();
  const isEmpty = text.trim().length == 0;

  const handelAdd = () => {
    if (!isEmpty) {
      dispatch(addTodo(text));
      setText("");
    }
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && !isEmpty) {
      handelAdd();
    }
  };

  return (
    <div className="todo-input-area">
      <input
        value={text}
        id="todo-input"
        placeholder="Add a new task..."
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        id="add-btn"
        disabled={isEmpty}
        onClick={() => handelAdd()}
        style={{ cursor: isEmpty ? "not-allowed" : "pointer" }}
      >
        <FontAwesomeIcon icon={faAdd} />
      </button>
    </div>
  );
};

export default AddTodo;
