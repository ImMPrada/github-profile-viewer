import React, { createContext, useState } from 'react';
import { useEffect } from 'react';
import gitProfile from './githubImmprada.json';

const themeKeys = {
  dark: 'light',
  light: 'dark',
}

export const GlobalContext = createContext(null);

export const GlobalProvider = ({ children }) => {
  const [theme, setTheme] = useState(themeKeys.light);
  const [githubProfile, setGithubProfile] = useState(null);
  const [loading, setLoading] = useState(null);

  const changeTheme = () => {
    setTheme(themeKeys[theme])
  }

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
  }

  return (
    <GlobalContext.Provider value={contextVal}>
      {children}
    </GlobalContext.Provider>
  )
}