import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { Moon, Sun } from "../../icons";
import './styles.scss';


const Header = () => {
  const { theme, changeTheme } = useContext(GlobalContext);

  return (
    <div className = {`header header-${theme}`}>
      <h1>devfinder</h1>
      <button onClick={ () => changeTheme(theme) }>
        {theme}{theme === 'dark' ? <Moon /> : <Sun />}
      </button>
    </div>
  )  
}

export default Header;
