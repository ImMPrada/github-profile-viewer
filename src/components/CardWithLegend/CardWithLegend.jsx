import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { format } from 'date-fns';


const CardWithLegend = () => {
  const { git } = useContext(GlobalContext)
  const dateFromDate = format(new Date(git.created_at), 'yyyy/MM/dd')

  return (
    <div className="card-label">
      <img src={git.avatar_url} alt="" />
      <div className="card-label__legend">
        <div className="card-label__legend__head">
          <h3>{git.name}<br/><a href={git.html_url}>@{git.login}</a></h3>
          <p>joined at: {dateFromDate}</p>
        </div>
      </div>
    </div>
  )
}

export default CardWithLegend;
