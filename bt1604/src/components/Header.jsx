import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, ShoppingCart, User, ListTodo, Home } from 'lucide-react';

function Header() {
  const location = useLocation();

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">React App</h1>
        <nav className="flex items-center gap-6">
          <NavLink to="/" icon={<Home size={20} />} label="Counter" active={location.pathname === '/'} />
          <NavLink to="/todo" icon={<ListTodo size={20} />} label="Todo" active={location.pathname === '/todo'} />
          <NavLink to="/theme" icon={<Sun size={20} />} label="Theme" active={location.pathname === '/theme'} />
          <NavLink to="/cart" icon={<ShoppingCart size={20} />} label="Cart" active={location.pathname === '/cart'} />
          <NavLink to="/user" icon={<User size={20} />} label="User" active={location.pathname === '/user'} />
        </nav>
      </div>
    </header>
  );
}

function NavLink({ to, icon, label, active }) {
  return (
    <Link
      to={to}
      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm hover:bg-indigo-100 dark:hover:bg-indigo-700 transition ${
        active ? 'bg-indigo-200 dark:bg-indigo-600 font-semibold' : ''
      }`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}

export default Header;