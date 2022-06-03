import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";


const Header = () => {
  const { theme, changeTheme } = useContext(GlobalContext);

  return (
    <div className = {`header header-${theme}`}>
      <h1>devfinder</h1>
      <button onClick={ () => changeTheme(theme) }>{theme}</button>
    </div>
  )  
}

export default Header;
