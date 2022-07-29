import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
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
  
  return (
    <div className = {`repo repo-${theme}`}>
      <a 
        className= "repo__name" 
        href={url}
      >
        {name}
      </a>
      <a 
        className= "repo__info"
        href={liveDemo}
      >
        {description || liveDemo ? 'Click for a live demo' : null}
      </a>
      <h5
        className= "repo__info"
      >
        {updatedAt}
      </h5>
    </div>
  )
}

export default Repo;
