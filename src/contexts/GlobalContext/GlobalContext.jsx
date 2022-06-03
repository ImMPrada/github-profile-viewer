import React, { createContext, useState } from 'react';

const themeKeys = {
  dark: 'light',
  light: 'dark',
}

export const GlobalContext = createContext(null);

export const GlobalProvider = ({ children }) => {
  const [theme, setTheme] = useState(themeKeys.light);

  const changeTheme = () => {
    setTheme(themeKeys[theme])
  }

  const contextVal = {
    theme,

    changeTheme,
  }

  return (
    <GlobalContext.Provider value={contextVal}>
      {children}
    </GlobalContext.Provider>
  )
}