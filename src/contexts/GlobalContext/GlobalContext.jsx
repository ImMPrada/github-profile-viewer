import React, { useEffect, createContext, useState, useReducer } from 'react';
import { reducer } from './reducer';

const themeKeys = {
  dark: 'light',
  light: 'dark',
}

const initialState = {
  firstRun: true,
  oldProfileToSearch: '',
  profileToSearch: '',
  error: 'false',
  loading: false,
  profile: null,
  repos: [],
}


export const GlobalContext = createContext(null);

export const GlobalProvider = ({ children }) => {
  const [theme, setTheme] = useState(themeKeys.light);
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {console.log(state)}, [state])

  const changeTheme = () => {
    setTheme(themeKeys[theme])
  }

  const reinitState = () => {
    dispatch({
      type: 'REINITIALICE',
    })
  }

  const updateSearchValue = (tipedValue) => {
    dispatch({
      type: 'WRITE_PROFILE_TO_SEARCH',
      payload: tipedValue
    })
  }

  const clearResult = () => {
    if(state.firstRun) return
    if(state.profile) {
      if(state.profileToSearch === '') {
        return dispatch({
          type: 'ROLLBACK_PROFILE_TO_SEARCH'
        })
      }
      if(state.profileToSearch != state.oldProfileToSearch) {
        return dispatch({
          type: 'CLEAR_PROFILE_RESULT'
        })
      }
    }
    if(state.error){
      return dispatch({
        type: 'CLEAR_ERROR_RESULT'
      })
    }
  }

  const contextVal = {
    theme,
    state,

    changeTheme,
    dispatch,
    reinitState,
    updateSearchValue,
    clearResult,
  }

  return (
    <GlobalContext.Provider value={contextVal}>
      {children}
    </GlobalContext.Provider>
  )
}