import React, { useContext, useState } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { 
  CardWithLegend,
  DataBox,
  GitCardFooter,
 } from '..'
import './styles.scss';


const ReposList = () => {
  const [hidden, setHidden] = useState(true);
  const { state, theme } = useContext(GlobalContext);

  return (
    <div className = {`repos-list repos-list-${theme}`}>
      <div className={`repos-list__content repos-list--hiden__${hidden}`}>
        Here will be displayed the list of repos
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
