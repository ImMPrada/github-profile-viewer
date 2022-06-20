import React, { createContext, useState } from 'react';
import gitProfile from './githubImmprada.json';

const themeKeys = {
  dark: 'light',
  light: 'dark',
}

export const GlobalContext = createContext(null);

export const GlobalProvider = ({ children }) => {
  const [theme, setTheme] = useState(themeKeys.light);
  const [githubProfile, setGithubProfile] = useState(gitProfile);
  const [loading, setLoading] = useState(false);

  const changeTheme = () => {
    setTheme(themeKeys[theme])
  }

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