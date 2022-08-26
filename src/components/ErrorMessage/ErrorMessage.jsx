import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import './styles.scss';


const ErrorMessage = () => {
  const { state, theme } = useContext(GlobalContext);

  return (
    <div className = {`error-message`}>
      <h4>{state.message ? `Error: ${state.message}` : 'ERROR!'}</h4>
    </div>
  )
}

export default ErrorMessage
