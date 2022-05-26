import React, { createContext, useContext, useState } from "react";

// Context
export const UserPrefContext = createContext(null)

// Provider
export const UserPrefProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false)

  const states = {
    darkMode,
    setDarkMode
  }

  return (
    <UserPrefContext.Provider value={{ ...states }}>
      {children}
    </UserPrefContext.Provider>
  )
}

// Hook
export const useUserPref = () => {
  const context = useContext(UserPrefContext)
  const {
    darkMode,
    setDarkMode
  } = context
  return {
    darkMode,
    setDarkMode
  }
}