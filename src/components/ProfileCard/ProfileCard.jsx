import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";


const ProfileCard = () => {
  const { theme } = useContext(GlobalContext);

  return (
    <div className = {`profile-card profile-card-${theme}`}>
      HOLI
    </div>
  )
}

export default ProfileCard
