import {
  useContext, useEffect, useState
} from "react";
import { GlobalContext } from '../../contexts/GlobalContext'
import axios from 'axios';

const baseURL = process.env.REACT_APP_API_ENDPOINT;


const useGitHub = () => {
  const {
    state,
    dispatch,
  } = useContext(GlobalContext)

  const getProfile = () => {
    dispatch({
      type: 'SEARCHING'
    })

    const profileName = state.profileToSearch
    axios.get(`${baseURL}${profileName}`)
      .then(res => {
        const response = res.data
        console.log(res.data)
        if(response.profile == null) {
          dispatch({
            type: 'RESULT_IS_ERROR',
            payload: response,
          })  
        } else {
          dispatch({
            type: 'LOAD_RESULTS',
            payload: response,
          })
        }
      })
      .catch(err => {
        dispatch({
          type: 'RESULT_IS_ERROR',
          payload: null,
        })    
      })
  }

  return {
    getProfile,
  }
}

export default useGitHub;