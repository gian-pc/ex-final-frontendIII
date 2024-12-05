import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from '../Components/utils/global.context';

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <nav className={`navbar ${state.theme}`}>
      <div className="navbar-left">
        <img src="/DH.ico" alt="DH-logo" className="navbar-logo" />
      </div>
      <div className="navbar-right">
        <Link to="/home">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/favs">Favs</Link>
        <button onClick={toggleTheme} className="theme-button">Change Theme</button>
      </div>
    </nav>
  );
};

export default Navbar;