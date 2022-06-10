import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";


const DataBox = () => {
  const { theme, git } = useContext(GlobalContext);

  return (
    <div className={`data-box data-box-${theme}`}>
      <div className="data-box__info">
        <p>Repos</p>
        <p>{git.public_repos}</p>
      </div>
      <div className="data-box__info">
        <p>Followers</p>
        <p>{git.followers}</p>
      </div>
      <div className="data-box__info">
        <p>Following</p>
        <p>{git.following}</p>
      </div>
    </div>
  )
}

export default DataBox;
