import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useGitHub } from "../../hooks";
import './styles.scss';

const Repo = ({
  repo, 
}) => {
  const {
    name,
    description,
    liveDemo,
    url,
    updatedAt,
  } = repo
  
  return (
    <div className="repos-list__content__item">
      <a href={url}><h4>{name}</h4></a>
      <a href={liveDemo}><h4>{description || liveDemo ? 'Click for a live demo' : null}</h4></a>
      <h3>{updatedAt}</h3>
    </div>
  )
}

const repos = (state) => (
  state.repos.filter(repo => repo).map(repo => (
    <Repo
      key={repo.name}
      repo={repo}
      state = {state}
    />
  ))
)


const ReposList = () => {
  const [hidden, setHidden] = useState(true);
  const [reposList, setReposList] = useState(null);
  const { state, theme } = useContext(GlobalContext);

  const generateList = () => {
    setHidden(!hidden)
    if(!reposList) setReposList(repos(state))
  }


  return (
    <div className = {`repos-list repos-list-${theme}`}>
      <div className={`repos-list__content repos-list--hiden__${hidden}`}>
        {reposList}
      </div>
      { state.repos.length > 0 && 
        <button className="repos-list__button" onClick={() => generateList()}>
          {hidden ? 'Show list of repos' : 'Hide list of repos'}
        </button>
      } 
    </div>
  )
}

export default ReposList
