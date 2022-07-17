import {
  useContext,
} from "react";
import { GlobalContext } from '../../contexts/GlobalContext'
import axios from 'axios';

const baseURL = 'https://api.github.com/users/'


const useGitHub = () => {
  const {
    state,
    dispatch,
  } = useContext(GlobalContext)

  const curateRepos = (repos) => {

    const reposArr = repos.map(async repo => {
      const contributorsArr = await axios.get(repo.contributors_url)
      const languages = await axios.get(repo.languages_url)

      return {
        name: repo.name,
        description: repo.description,
        liveDemo: repo.homepage,
        url: repo.html_url,
        createdAt: repo.created_at,
        updatedAt: repo.updated_at,
        contributors: contributorsArr,
        languages: languages,
      }
  })

    return reposArr
  }

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
        axios.get(`${baseURL}${profileName}/repos`)
          .then(res => {
            dispatch({
              type: 'RESULT_OF_REPOS',
              payload: curateRepos(res.data)
            })
                
          })
          .catch(err => {
            dispatch({
              type: 'REPOS_ERROR'
            })    
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