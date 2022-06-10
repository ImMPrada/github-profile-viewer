import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { LocationPin, Url, Twitter, Offices } from "../../icons";


const GitCardFooter = () => {
  const { theme, git } = useContext(GlobalContext);

  return (
    <div className="git-card-footer">
      <div className="git-card-footer__element">
        <p className="git-card-footer__element-null"><LocationPin /> {git.location || 'location'}</p>
      </div>
      <div className="git-card-footer__element">
        <p><Url /> {git.blog || 'blog'}</p>
      </div>
      <div className="git-card-footer__element">
        <p><Twitter /> {git.twitter_username || 'twitter'}</p>
      </div>
      <div className="git-card-footer__element">
        <p><Offices /> {git.company || 'company'}</p>
      </div>
    </div>
  )
}

export default GitCardFooter;
