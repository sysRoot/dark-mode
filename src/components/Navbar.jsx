import React from 'react';
import useDarkMode from "../hooks/useDarkMode"


const Navbar = () => {
  const [isDarkMode, flipBoolean] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    flipBoolean(!isDarkMode);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={isDarkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
