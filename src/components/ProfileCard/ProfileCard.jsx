import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { 
  CardWithLegend,
  DataBox,
  GitCardFooter,
 } from '../'
import './styles.scss';


const ProfileCard = () => {
  const { theme } = useContext(GlobalContext);

  return (
    <div className = {`profile-card profile-card-${theme}`}>
      <CardWithLegend />
      <DataBox />
      <GitCardFooter />
    </div>
  )
}

export default ProfileCard
