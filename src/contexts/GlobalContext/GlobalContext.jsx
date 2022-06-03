import React, { createContext, useEffect, useState } from 'react';


export const GlobalContext = createContext(null);

export const GlobalProvider = ({ children }) => {
  const [theme, setTheme] = useState(null);
  

  useEffect(()=> {

    setTheme('light')
  }, [])


  const contextVal = {
    theme,

    setTheme,
  }

  return (
    <GlobalContext.Provider value={contextVal}>
      {children}
    </GlobalContext.Provider>
  )
}