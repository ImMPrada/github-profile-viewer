import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";


const GitCardFooter = () => {
  const { theme, git } = useContext(GlobalContext);

  return (
    <div className="git-card-footer">
      <div className="git-card-footer__element">
        <p>{git.location || 'location'}</p>
      </div>
      <div className="git-card-footer__element">
        <p>{git.blog || 'blog'}</p>
      </div>
      <div className="git-card-footer__element">
        <p>{git.twitter_username || 'twitter'}</p>
      </div>
      <div className="git-card-footer__element">
        <p>{git.company || 'company'}</p>
      </div>
    </div>
  )
}

export default GitCardFooter;
