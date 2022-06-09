import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";


const DataBox = () => {
  const { theme } = useContext(GlobalContext);

  return (
    <div className={`data-box data-box-${theme}`}>
      <div className="data-box__info">
        <p>Repos</p>
        <p>9</p>
      </div>
      <div className="data-box__info">
        <p>Followers</p>
        <p>3938</p>
      </div>
      <div className="data-box__info">
        <p>Following</p>
        <p>9</p>
      </div>
    </div>
  )
}

export default DataBox;
