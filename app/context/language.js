"use client"
import { createContext, useState,useContext } from "react"
const langContext = createContext()

export function LanguageProvider({children}) {
    const [currentLang,setCurrentLang]= useState("TH");

  return (
   <langContext.Provider value={{currentLang,setCurrentLang}}>
    {children}
   </langContext.Provider>
  )
}

export  function useLanguage() {
    const context = useContext(langContext)
  return context
}

