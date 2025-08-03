import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../utils/todoSlice";
import TodoCard from "../componentes/TodoCard";

export default function Todo() {
    
  const [input, setInput] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start p-6 overflow-y-auto mb-16">
      <h1 className="text-3xl font-bold mb-6">📝 To-Do App</h1>

      {/* Input box and Add Task  */}
      <div className="flex mb-6 w-full max-w-md">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add new task...."
          className="flex-1 px-4 py-3 rounded border border-gray-300 rounded-l-full"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-2 rounded rounded-r-full"
        >
          Add
        </button>
      </div>

    {/* map each todo to a TodoCard component */}

      <ul className="w-full max-w-md space-y-3">
        {[...todos].reverse().map((items) => (
          <TodoCard todo={items} />
        ))}
      </ul>
    </div>
  );
}
