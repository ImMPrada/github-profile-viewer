import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { TailSpin } from  'react-loader-spinner'
import './styles.scss';


const Loader = () => {
  const { theme } = useContext(GlobalContext);

  return (
    <div className='Loader'>
      <TailSpin
        height="100"
        width="100"
        color='grey'
        ariaLabel='loading'
      />
    </div>
  )  
}

export default Loader;