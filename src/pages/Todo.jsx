import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../utils/todoSlice";
import TodoCard from "../componentes/TodoCard";

export default function Todo() {

  const [input, setInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTodos, setFilteredTodos] = useState(false);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();


  const handleAdd = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 flex flex-col items-center justify-start p-6 overflow-y-auto mb-16">
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
          className="bg-blue-500 hover:bg-blue-600 hover:cursor-pointer text-white px-4 py-2 rounded rounded-r-full"
        >
          Save Task
        </button>
      </div>

      {/* Search Input Box */}
      <div className="flex mb-6 w-full max-w-md">
        {filteredTodos && <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="🔍 Search tasks..."
          className="flex-1 px-4 py-3 rounded border border-gray-300"
        />}
        {searchTerm ? (
          <button
            onClick={() => setSearchTerm("")}
            className="ml-2 p-3 border items-center text-gray-500 hover:cursor-pointer"
          >
            ❌
          </button>
        )
        :
        <button onClick={() => setFilteredTodos(!filteredTodos)} className="bg-blue-500 hover:bg-blue-600 hover:cursor-pointer text-white px-4 py-2 rounded">Search Task</button>
      }

      </div>


      {/* map each todo to a TodoCard component */}

      <ul className="w-full max-w-md space-y-3">
        {[...todos]
          .filter((item) =>
            item.text.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .reverse()
          .map((item) => (
            <TodoCard key={item.id} todo={item} />
          ))}
      </ul>

    </div>
  );
}


