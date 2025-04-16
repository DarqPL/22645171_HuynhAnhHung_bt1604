import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from '../store/todoSlice';

const Todo = () => {
  const [input, setInput] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-center">Todo List Page</h2>
      <div className="flex gap-2 justify-center">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border px-3 py-2 rounded-md w-1/2"
          placeholder="Thêm công việc mới"
        />
        <button
          onClick={handleAdd}
          className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600"
        >
          Thêm
        </button>
      </div>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md"
          >
            <span
              className={`flex-1 mr-4 ${todo.completed ? 'line-through text-gray-500' : ''}`}
            >
              {todo.text}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => dispatch(toggleTodo(todo.id))}
                className="px-3 py-1 text-sm rounded-md bg-green-100 text-green-700 hover:bg-green-200 hover:text-green-800 transition"
              >
                Hoàn thành
              </button>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="px-3 py-1 text-sm rounded-md bg-red-100 text-red-600 hover:bg-red-200 hover:text-red-700 transition"
              >
                Xoá
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;