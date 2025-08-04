import React from 'react'
import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo } from "../utils/todoSlice";

const TodoCard = ({todo}) => {
  const dispatch = useDispatch();

  return (
    <div className='border p-4 rounded mb-4'>
      <li
            
            className="flex justify-between items-center bg-white shadow-md p-3 rounded"
          >
            <span
              onClick={() => dispatch(toggleComplete(todo.id))}
              className={`flex-1 cursor-pointer ${
                todo.completed ? "line-through text-gray-400" : ""
              }`}
            >
              {todo.text}
            </span>
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              className="text-red-500 hover:text-red-700 hover:cursor-pointer ml-4"
            >
             Delete
            </button>
          </li>
    </div>
  )
}

export default TodoCard
