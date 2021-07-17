import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggle = () => {
  const {togggleTheme} = useContext(ThemeContext);
  return(
    <div>
      <button onClick={togggleTheme}>Toggle Theme</button>
    </div>
  );
}
 
export default ThemeToggle;