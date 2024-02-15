import React, { FC, useMemo, useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from './ThemeContext'
import { Theme } from './../App'

export const ThemeProvider = ({children}:any) => {

    const defaultTheme= localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

    const [theme,setTheme] = useState<Theme>(defaultTheme)

    const toggleTheme =()=>{
       setTheme(theme === Theme.DARK ? Theme.LIGHT:Theme.DARK)
    }


    const defaultProps = useMemo(()=>({
        theme:theme,
        setTheme:setTheme
    }),[theme])

  return (
    <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>
  )
}
