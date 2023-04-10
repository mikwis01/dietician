"use client"

import { createContext, useState, useContext } from "react"
import { AppContextType, AppType } from "./types"

export const AppContext = createContext<AppContextType | null>(null)

export const AppContextProvider = ({ children }: { readonly children: React.ReactNode }) => {
  const [app, setApp] = useState<AppType | undefined>(undefined)

  const handleToggleMobileNav = () => {
    setApp((prev) => ({ ...prev, mobileNavOn: !prev?.mobileNavOn }))
  }

  return (
    <AppContext.Provider
      value={{
        app,
        handleToggleMobileNav
      }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  const appContext = useContext(AppContext)
  if (!appContext) {
    throw new Error("Wrap components using AppContextProvider!!")
  }
  return appContext
}
