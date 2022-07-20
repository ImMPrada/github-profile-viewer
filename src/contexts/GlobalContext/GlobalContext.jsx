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
}


export const GlobalContext = createContext(null);

export const GlobalProvider = ({ children }) => {
  const [theme, setTheme] = useState(null);
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const cookieTheme = getCookie('devFinder')
    const systemTheme = checkSystemThemPreference()

    if(!cookieTheme) {
      setTheme(systemTheme)
      createCookie('devFinder', systemTheme, 5)
    } else {
      setTheme(cookieTheme)
    }
  }, [])


  const changeTheme = () => {
    setTheme(themeKeys[theme])
    createCookie('devFinder', themeKeys[theme], 5)
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

  const createCookie = (cookieName, cookieValue, expirationDays) => {
    const today = new Date()
    const expirationDate = new Date(today.getTime() + (expirationDays*24*60*60*1000))
    const expires = "expires="+ expirationDate.toUTCString()

    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
  }

  const getCookie = (cookieName) => {
    const value = `; ${document.cookie}`;
    const theme = value.split(`; ${cookieName}=`);
 
    if (theme.length === 2) return theme.pop()
    return null
  }

  const checkSystemThemPreference = () => {
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if(userPrefersDark) return themeKeys.dark
    return themeKeys.light
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