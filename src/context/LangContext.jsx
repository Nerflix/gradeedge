import { createContext, useContext, useState } from 'react'
import { translations } from '../data/translations'

const LangContext = createContext()

export function LangProvider({ children }) {
  const [lang, setLang] = useState('EN')

  const toggle = () => setLang(prev => prev === 'EN' ? 'ZH' : 'EN')

  const t = key => translations[lang][key] || key

  return (
    <LangContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)