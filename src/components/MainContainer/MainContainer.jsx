import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import './styles.scss';


const MainContainer = ({children}) => {
  const { theme } = useContext(GlobalContext);

  return (
    <div id='main' className = {`main-theme-${theme}`}>
      {children}
    </div>
  )  
}

export default MainContainer;
