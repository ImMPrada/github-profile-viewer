import React, { useEffect, createContext, useState, useReducer } from 'react';
import { reducer } from './reducer';
import gitProfile from './githubImmprada.json';

const themeKeys = {
  dark: 'light',
  light: 'dark',
}

const initialState = {
  profileToSearch: '',
  error: 'false',
  loading: false,
  profile: null,
}

export const GlobalContext = createContext(null);

export const GlobalProvider = ({ children }) => {
  const [theme, setTheme] = useState(themeKeys.light);
  const [githubProfile, setGithubProfile] = useState(null);
  const [loading, setLoading] = useState(null);
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {console.log(state)}, [state])

  const changeTheme = () => {
    setTheme(themeKeys[theme])
  }

  const reinitState = () => {
    dispatch({
      type: 'REINITIALICE',
      payload: initialState
    })
  }

  const updateSearchValue = (tipedValue) => {
    dispatch({
      type: 'WRITE_PROFILE_TO_SEARCH',
      payload: tipedValue
    })
  }


  const startSearch = () => {}

  useEffect(() => {
    if (!githubProfile) return

    setLoading(false)
  }, [githubProfile])

  const contextVal = {
    theme,
    githubProfile,
    loading,

    changeTheme,
    setLoading,
    setGithubProfile,

    state,
    reinitState,
    updateSearchValue,
    startSearch,
  }

  return (
    <GlobalContext.Provider value={contextVal}>
      {children}
    </GlobalContext.Provider>
  )
}