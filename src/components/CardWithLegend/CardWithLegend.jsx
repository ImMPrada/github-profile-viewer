import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { format } from 'date-fns';
import './styles.scss'


const CardWithLegend = () => {
  const { state, theme } = useContext(GlobalContext)
  const dateFromDate = format(new Date(state.profile.created_at), 'yyyy/MM/dd')

  return (
    <div className={`card-label card-label-${theme}`}>
      <div className="card-label__head">  
        <img src={state.profile.avatar_url} alt="" />
        <div className="card-label__head__legend">
          <div className="card-label__head__legend__info">
            <h3>{state.profile.name}<br/><a href={state.profile.html_url}>@{state.profile.login}</a></h3>
            <p>joined at: {dateFromDate}</p>
          </div>
        </div>
      </div>
      <p className="card-label__legend" >Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.</p>
    </div>
  )
}

export default CardWithLegend;
