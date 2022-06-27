import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import './styles.scss';


const ErrorMessage = () => {
  const { theme } = useContext(GlobalContext);

  return (
    <div className = {`error-message error-card-${theme}`}>
      <h1>ERROR!</h1>
    </div>
  )
}

export default ErrorMessage
