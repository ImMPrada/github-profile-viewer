import {
  useContext,
  useState,
  useEffect
} from "react";
import { GlobalContext } from '../../contexts/GlobalContext'
import axios from 'axios';

const baseURL = 'https://api.github.com/users/'


const useGitHub = (gists, setGists) => {
  const {
    setLoading,
    setGithubProfile,
  } = useContext(GlobalContext)

  const getProfile = (profileName) => {
    setLoading(true)

    axios.get(`${baseURL}${profileName}`)
      .then(res => {

        setGithubProfile(res.data)
      })
      .catch(err => {

        setGithubProfile('NotFoundError')
        setLoading(false)
      })
  }

  return {
    getProfile,
  }
}

export default useGitHub;