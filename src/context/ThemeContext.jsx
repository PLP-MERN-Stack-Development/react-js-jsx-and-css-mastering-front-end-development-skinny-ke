import React, { createContext, useState } from 'react';
import { useTheme } from '../hooks/useTheme';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  useTheme(theme);
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};