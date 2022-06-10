import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { LocationPin, Url, Twitter, Offices } from "../../icons";


const GitCardFooter = () => {
  const { theme, git } = useContext(GlobalContext);
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
      <div className={`git-card-footer__element${git.location ? '' : '-null'}`}>
        <LocationPin /> 
        <p>{git.location || 'Not Available'}</p>
      </div>
      <div className={`git-card-footer__element${git.blog ? '' : '-null'}`}>
        <Url /> 
        <a href = {getLinkData(git.blog).linkTo} >
          {getLinkData(git.blog).label || 'Not Available'}
        </a>
      </div>
      <div className={`git-card-footer__element${git.twitter_username ? '' : '-null'}`}>
        <Twitter /> 
        <p>{git.twitter_username || 'Not Available'}</p>
      </div>
      <div className={`git-card-footer__element${git.company ? '' : '-null'}`}>
        <Offices /> 
        <p>{git.company || 'Not Available'}</p>
      </div>
    </div>
  )
}

export default GitCardFooter;
