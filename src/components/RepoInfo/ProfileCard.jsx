import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { 
  CardWithLegend,
  DataBox,
  GitCardFooter,
  ReposList,
 } from '..'
import './styles.scss';


const RepoInfo = () => {
  const { theme } = useContext(GlobalContext);

  return (
    <div className = {`profile-card profile-card-${theme}`}>
      <CardWithLegend />
      <DataBox />
      <GitCardFooter />
      <ReposList />
    </div>
  )
}

export default RepoInfo
