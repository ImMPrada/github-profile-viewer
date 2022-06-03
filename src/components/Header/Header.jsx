import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";


const Header = () => {
  const { theme, setTheme } = useContext(GlobalContext);

  return (
    <div className = {`header header-${theme}`}>
      <h1>devfinder</h1>
      <button>DARK</button>
    </div>
  )  
}

export default Header;
