import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { LocationPin, Url, Twitter, Offices } from "../../icons";


const GitCardFooter = () => {
  const { theme, git } = useContext(GlobalContext);

  return (
    <div className = {`git-card-footer git-card-footer-${theme}`}>
      <div className={`git-card-footer__element${git.location ? '' : '-null'}`}>
        <LocationPin /> 
        <p>{git.location || 'Not Available'}</p>
      </div>
      <div className={`git-card-footer__element${git.blog ? '' : '-null'}`}>
        <Url /> 
        <p>{git.blog || 'Not Available'}</p>
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
