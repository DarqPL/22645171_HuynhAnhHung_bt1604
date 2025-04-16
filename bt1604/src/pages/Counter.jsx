import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../store/counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="text-center space-y-4">
      <h2 className="text-2xl font-semibold">Counter Page</h2>
      <p className="text-3xl font-bold">{count}</p>
      <div className="flex justify-center gap-6">
        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-xl"
        >
          Giảm
        </button>
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-xl"
        >
          Tăng
        </button>
      </div>
    </div>
  );
};

export default Counter;