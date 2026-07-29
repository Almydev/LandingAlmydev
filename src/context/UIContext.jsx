import { createContext, useState, useContext } from 'react'

const UIContext = createContext()

export function UIProvider({ children }) {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <UIContext.Provider value={{ menuOpen, setMenuOpen }}>
      {children}
    </UIContext.Provider>
  )
}

export const useUI = () => useContext(UIContext)
