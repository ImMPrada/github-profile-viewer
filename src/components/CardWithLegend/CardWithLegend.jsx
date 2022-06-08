import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { format } from 'date-fns';


const CardWithLegend = () => {
  const { git, theme } = useContext(GlobalContext)
  const dateFromDate = format(new Date(git.created_at), 'yyyy/MM/dd')

  return (
    <div className={`card-label card-label-${theme}`}>
      <div className="card-label__head">  
        <img src={git.avatar_url} alt="" />
        <div className="card-label__head__legend">
          <div className="card-label__head__legend__info">
            <h3>{git.name}<br/><a href={git.html_url}>@{git.login}</a></h3>
            <p>joined at: {dateFromDate}</p>
          </div>
        </div>
      </div>
      <p className="card-label__legend" >Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.</p>
    </div>
  )
}

export default CardWithLegend;
