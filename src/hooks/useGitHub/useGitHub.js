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
          const repos = []
          const curatedRes = {
            name: repo.name,
            description: repo.description,
            liveDemo: repo.homepage,
            url: repo.html_url,
            createdAt: repo.created_at,
            updatedAt: repo.updated_at,
            contributors: repo.contributors_url,
            languages: repo.languages_url,
          }

          return axios.get(repo.contributors_url)
            .then(res => {
              repos.push({
                ...curatedRes,
                contributors: res.data
              })

              return repos
            })
            .then(res => {
              console.log('PING')
              console.log(state.repos)
              dispatch({
                type: 'RESULT_OF_REPOS',
                payload: res,
              })
            })
        })

        console.log(curatedRepos)
        return curatedRepos

        // dispatch({
        //   type: 'RESULT_OF_REPOS',
        //   payload: curatedRepos
        // })
      })
      .then(res => (
        console.log(res)
      ))
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