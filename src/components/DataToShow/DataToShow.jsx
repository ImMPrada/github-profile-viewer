import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { Loader, ProfileCard } from '../';


const DataToShow = () => {
  const { loading } = useContext(GlobalContext);

  
  return loading === false ? <ProfileCard /> : <Loader />  
}

export default DataToShow;