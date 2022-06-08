import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";


const CardWithLegend = () => {
  const { git } = useContext(GlobalContext)

  return (
    <div className="card-label">
      <img src={git.avatar_url} alt="" />
      <div className="card-label__legend">
        <div className="card-label__legend__head">
          <h3>{git.name}</h3>
          <p>{git.created_at}</p>
        </div>
        <a href={git.html_url}>{git.login}</a>
        <p>{git.bio || 'There is no bio for this user...'}</p>
      </div>
    </div>
  )
}

export default CardWithLegend;
