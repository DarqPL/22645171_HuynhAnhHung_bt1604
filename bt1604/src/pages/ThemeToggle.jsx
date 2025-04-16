import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../store/themeSlice';

const Theme = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  return (
    <div className="text-center space-y-4">
      <h2 className="text-2xl font-semibold">Theme Page</h2>
      <p className="text-lg">Hiện tại đang là chế độ: <strong>{theme}</strong></p>
      <button
        onClick={() => dispatch(toggleTheme())}
        className="bg-purple-500 text-white px-5 py-2 rounded-md hover:bg-purple-600 transition"
      >
        Chuyển đổi chế độ
      </button>
    </div>
  );
};

export default Theme;