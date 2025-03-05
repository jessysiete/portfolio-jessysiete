import './Toggle.css';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState( () => {;
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) return savedTheme;

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('theme', theme);

    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <label className="switch">
      <input
        type="checkbox"
        onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      />
      <span className="slider round"></span>
    </label>
  );
};



export default ThemeToggle;