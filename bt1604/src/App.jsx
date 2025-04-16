import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Counter from './pages/Counter';
import Todo from './pages/Todo';
import ThemeToggle from './pages/ThemeToggle';
import Cart from './pages/Cart';
import User from './pages/User';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-900 text-white">
          <Header />
          <div className="max-w-4xl mx-auto mt-6 p-6 bg-gray-800 rounded-2xl shadow-lg">
            <Routes>
              <Route path="/" element={<Counter />} />
              <Route path="/todo" element={<Todo />} />
              <Route path="/theme" element={<ThemeToggle />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/user" element={<User />} />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;