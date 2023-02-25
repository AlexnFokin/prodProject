import React, { FC, ReactNode, useMemo, useState } from 'react'
import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext
} from '../lib/ThemeContext'

const userTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme ||
    Theme.DEFAULT

interface ThemeProviderProps {
  initialTheme?: Theme
  children: ReactNode
}

const ThemeProvider = (props:ThemeProviderProps) => {
  const {
    initialTheme,
    children
  } = props
  const [theme, setTheme] = useState<Theme>(initialTheme ?? userTheme)

  const defaultProps = useMemo(() => ({
    theme,
    setTheme
  }), [theme])

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
