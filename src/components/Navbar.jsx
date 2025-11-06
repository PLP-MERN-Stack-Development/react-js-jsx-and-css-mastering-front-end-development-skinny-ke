import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <nav className="bg-white dark:bg-gray-800 shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">PLP Week 3</h1>
      <div className="flex items-center gap-4">
        <Link to="/" className="hover:underline">Tasks</Link>
        <Link to="/posts" className="hover:underline">Posts</Link>
        <button onClick={toggleTheme} className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700">
          {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>
    </nav>
  );
};

export default Navbar;