import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/features/todoSlice";
import { useState } from "react";

const AddTodo = () => {
  const [text, setText] = useState<string>("");
  const dispatch = useDispatch();

  const handelAdd = () => {
    if (text.trim().length > 0) {
      dispatch(addTodo(text));
      setText("");
    }
  };
  return (
    <div className="todo-input-area">
      <input
        value={text}
        id="todo-input"
        placeholder="Add a new task..."
        onChange={(e) => setText(e.target.value)}
      />
      <button id="add-btn" onClick={() => handelAdd()}>
        <FontAwesomeIcon icon={faAdd} />
      </button>
    </div>
  );
};

export default AddTodo;
