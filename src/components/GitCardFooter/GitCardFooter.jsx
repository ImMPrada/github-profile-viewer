import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { LocationPin, Url, Twitter, Offices } from "../../icons";
import './styles.scss';


const GitCardFooter = () => {
  const { theme, githubProfile } = useContext(GlobalContext);
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
      <div className={`git-card-footer__element${githubProfile.location ? '' : '-null'}`}>
        <LocationPin /> 
        <p>{githubProfile.location || 'Not Available'}</p>
      </div>
      <div className={`git-card-footer__element${githubProfile.blog ? '' : '-null'}`}>
        <Url /> 
        <a href = {getLinkData(githubProfile.blog).linkTo} 
          target="_blank"
          rel="noopener noreferrer"
        >
          {getLinkData(githubProfile.blog).label || 'Not Available'}
        </a>
      </div>
      <div className={`git-card-footer__element${githubProfile.twitter_username ? '' : '-null'}`}>
        <Twitter /> 
        <p>{githubProfile.twitter_username || 'Not Available'}</p>
      </div>
      <div className={`git-card-footer__element${githubProfile.company ? '' : '-null'}`}>
        <Offices /> 
        <p>{githubProfile.company || 'Not Available'}</p>
      </div>
    </div>
  )
}

export default GitCardFooter;
