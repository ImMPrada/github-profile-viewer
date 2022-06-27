import React, { useEffect, createContext, useState, useReducer } from 'react';
import { reducer } from './reducer';

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
  const [state, dispatch] = useReducer(reducer, initialState)


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

  const contextVal = {
    theme,
    state,

    changeTheme,
    dispatch,
    reinitState,
    updateSearchValue,
  }

  return (
    <GlobalContext.Provider value={contextVal}>
      {children}
    </GlobalContext.Provider>
  )
}