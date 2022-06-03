import React from "react";

const mode = 'dark'


const Header = () => {

  return (
    <div className = {`header header-${mode}`}>
      <h1>devfinder</h1>
      <button>DARK</button>
    </div>
  )  
}

export default Header;
