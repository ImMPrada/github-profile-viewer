import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { LocationPin, Url, Twitter, Offices } from "../../icons";
import './styles.scss';


const GitCardFooter = () => {
  const { theme, state } = useContext(GlobalContext);
  const getLinkData = (link) => {
    if (!link) return { linkTo: null, label: null }
    if (link.includes('http')) {
      return {
        linkTo: link,
        label: link.slice(-1) === '/' ? link.split('/').slice(-2,-1)[0] : link.split('/').slice(-1),
      }
    }

    return {
      linkTo: '',
      label: link,
    }
  }

  return (
    <div className = {`git-card-footer git-card-footer-${theme}`}>
      <div className={`git-card-footer__element${state.profile.location ? '' : '-null'}`}>
        <LocationPin /> 
        <p>{state.profile.location || 'Not Available'}</p>
      </div>
      {/* <div className={`git-card-footer__element${state.profile.blog ? '' : '-null'}`}>
        <Url /> 
        <a href = {getLinkData(state.profile.blog).linkTo} 
          target="_blank"
          rel="noopener noreferrer"
        >
          {getLinkData(state.profile.blog).label || 'Not Available'}
        </a>
      </div> */}
      {/* <div className={`git-card-footer__element${state.profile.twitter_username ? '' : '-null'}`}>
        <Twitter /> 
        <p>{state.profile.twitter_username || 'Not Available'}</p>
      </div>
      <div className={`git-card-footer__element${state.profile.company ? '' : '-null'}`}>
        <Offices /> 
        <p>{state.profile.company || 'Not Available'}</p>
      </div> */}
    </div>
  )
}

export default GitCardFooter;
