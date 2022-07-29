import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useGitHub } from "../../hooks";
import { Repo } from '../';
import './styles.scss';

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
