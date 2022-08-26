import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import './styles.scss'


const DataBox = () => {
  const { theme, state } = useContext(GlobalContext);

  return (
    <div className={`data-box data-box-${theme}`}>
      <div className="data-box__info">
        <p>Repos</p>
        <p>{state.profile.publicReposCount}</p>
      </div>
      <div className="data-box__info">
        <p>Gists</p>
        <p>{state.profile.publicGistsCount}</p>
      </div>
      <div className="data-box__info">
        <p>Followers</p>
        <p>{state.profile.followersCount}</p>
      </div>
      <div className="data-box__info">
        <p>Following</p>
        <p>{state.profile.followingsCount}</p>
      </div>
    </div>
  )
}

export default DataBox;
