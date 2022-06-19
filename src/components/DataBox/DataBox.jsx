import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import './styles.scss'


const DataBox = () => {
  const { theme, githubProfile } = useContext(GlobalContext);

  return (
    <div className={`data-box data-box-${theme}`}>
      <div className="data-box__info">
        <p>Repos</p>
        <p>{githubProfile.public_repos}</p>
      </div>
      <div className="data-box__info">
        <p>Followers</p>
        <p>{githubProfile.followers}</p>
      </div>
      <div className="data-box__info">
        <p>Following</p>
        <p>{githubProfile.following}</p>
      </div>
    </div>
  )
}

export default DataBox;
