import { createContext } from 'react'

export enum Theme {
  DEFAULT = 'app_theme_default',
  DARK = 'app_theme_dark'
}
export interface ThemeContextProps {
  theme?: Theme
  setTheme?: (theme: Theme) => void
}
export const ThemeContext = createContext<ThemeContextProps>({})

export const LOCAL_STORAGE_THEME_KEY = 'theme'
