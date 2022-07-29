import {
  useContext, useEffect, useState
} from "react";
import { GlobalContext } from '../../contexts/GlobalContext'
import axios from 'axios';

const baseURL = 'https://api.github.com/users/'


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
        dispatch({
          type: 'RESULT_IS_PROFILE',
          payload: res.data,
        })
        return axios.get(`${baseURL}${profileName}/repos`)
      })
      .then(res => {
        const curatedRepos = res.data.map(repo => {
          return {
            name: repo.name,
            description: repo.description,
            liveDemo: repo.homepage,
            url: repo.html_url,
            updatedAt: repo.updated_at,
            languagesUrl: repo.languages_url,
          }
        })

        dispatch({
          type: 'RESULT_OF_REPOS',
          payload: curatedRepos,
        })
      })
      .catch(err => {
        dispatch({
          type: 'RESULT_IS_ERROR'
        })    
      })
  }

  return {
    getProfile,
  }
}

export default useGitHub;