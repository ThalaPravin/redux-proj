import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { add, decrement, increment, markDone, remove } from "./redux/slices/couter";
import DemoComponent from "./DemoComponent";

function App() {
  const [title, setTitle] = useState("");
  const { todos } = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const addTodo = () => {
    dispatch(add({ todo: { id: todos.length + 1, title, completed: false } }));
  };
  return (
    <>
      <div>
        <input type="text" onChange={(e) => setTitle(e.target.value)} />
        <button onClick={addTodo}>add</button>
        {todos.map((todo) => (
          <div key={todo.id}>
            {todo.title}{" "}
            <input type="checkbox" value={todo.completed} onChange={() => dispatch(markDone({id: todo.id}))} id="" />
            <button onClick={() => dispatch(remove({ id: todo.id }))}>
              Remove
            </button>
          </div>
        ))}
      </div>

      <DemoComponent />
    </>
  );
}

export default App;
