import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { Loader, ProfileCard } from '../';


const DataToShow = () => {
  const { state } = useContext(GlobalContext);

  
  if(state.loading) return <Loader />
  if(state.profile) return <ProfileCard />
}

export default DataToShow;