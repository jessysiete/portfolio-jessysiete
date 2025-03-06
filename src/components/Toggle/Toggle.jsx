import './Toggle.css';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState( () => {
  const savedTheme = localStorage.getItem('theme') || 'dark';
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
    <div className="toggle-container">
    {/* Hidden checkbox that controls the toggle */}
    <input 
      type="checkbox" 
      id="theme-toggle" 
      onChange={toggleTheme} 
      checked={theme === 'dark'} 
    />
    {/* Label styled as the switch, associated with the checkbox */}
    <label className="toggle-switch" htmlFor="theme-toggle"></label>
  </div>
);
};




export default ThemeToggle;