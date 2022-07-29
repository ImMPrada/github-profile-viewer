import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useGitHub } from "../../hooks";
import './styles.scss';

const Repo = ({
  repo, 
  getLanguages,
  state,
}) => {
  const {
    name,
    description,
    liveDemo,
    url,
    updatedAt,
    languagesUrl,
  } = repo

  useEffect(() => {
    if(!languagesUrl) return

    getLanguages(name, languagesUrl)
  }, [languagesUrl])
  
  return (
    <div className="repos-list__content__item">
      <a href={url}><h4>{name}</h4></a>
      <a href={liveDemo}><h4>{description || liveDemo ? 'Click for a live demo' : null}</h4></a>
      <h3>{updatedAt}</h3>
    </div>
  )
}

const ReposList = () => {
  const [hidden, setHidden] = useState(true);
  const { state, theme } = useContext(GlobalContext);
  const { getLanguages } = useGitHub();

  const repos = (
    state.repos.filter(repo => repo).map(repo => (
      <Repo
        key={repo.name}
        repo={repo}
        getLanguages={getLanguages}
        state = {state}
      />
    ))
  )

  return (
    <div className = {`repos-list repos-list-${theme}`}>
      <div className={`repos-list__content repos-list--hiden__${hidden}`}>
        Here will be displayed the list of repos
        {repos}
      </div>
      { state.repos.length > 0 && 
        <button className="repos-list__button" onClick={() => setHidden(!hidden)}>
          {hidden ? 'Show list of repos' : 'Hide list of repos'}
        </button>
      } 
    </div>
  )
}

export default ReposList
