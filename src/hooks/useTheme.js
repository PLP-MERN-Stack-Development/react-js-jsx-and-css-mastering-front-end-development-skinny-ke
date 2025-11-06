import { useEffect } from 'react';

export const useTheme = (theme) => {
  useEffect(() => {
    if (theme === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [theme]);
};