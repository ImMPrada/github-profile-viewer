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
      <a href={url}><h4>{name}</h4></a>
      <a href={liveDemo}><h4>{description || liveDemo ? 'Click for a live demo' : null}</h4></a>
      <h3>{updatedAt}</h3>
    </div>
  )
}

export default Repo;
