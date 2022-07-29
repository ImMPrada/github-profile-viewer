import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { format } from 'date-fns'
import './styles.scss';


const Repo = ({
  repo, 
}) => {
  const { theme } = useContext(GlobalContext)
  const {
    name,
    description,
    liveDemo,
    url,
    updatedAt,
  } = repo
  const dateFromDate = format(new Date(updatedAt), 'yyyy/MM/dd')
  
  return (
    <div className = {`repo repo-${theme}`}>
      <a 
        className= "repo__name" 
        target="_blank" 
        rel="noopener noreferrer"
        href={url}
      >
        {name}
      </a>
      <a 
        className= "repo__info"
        target="_blank" 
        rel="noopener noreferrer"
        href={liveDemo}
      >
        {description || liveDemo ? 'Click for a live demo' : null}
      </a>
      <h5
        className= "repo__info"
      >
        {dateFromDate}
      </h5>
    </div>
  )
}

export default Repo;
