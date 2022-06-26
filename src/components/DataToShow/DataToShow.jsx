import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { 
  Loader, 
  ProfileCard,
  ErrorMessage,
} from '../';


const DataToShow = () => {
  const { state } = useContext(GlobalContext);

  
  if(state.loading) return <Loader />
  if(state.profile) return <ProfileCard />
  if(state.error === true) return <ErrorMessage />

  return null
}

export default DataToShow;
