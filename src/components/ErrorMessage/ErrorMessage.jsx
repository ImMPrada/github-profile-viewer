import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import './styles.scss';


const ErrorMessage = () => {
  const { theme } = useContext(GlobalContext);

  return (
    <div className = {`error-message`}>
      <h4>ERROR!</h4>
    </div>
  )
}

export default ErrorMessage
