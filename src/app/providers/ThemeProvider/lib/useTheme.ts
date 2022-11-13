import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext'
import { useContext } from 'react'

interface UseThemeResult {
  toggleTheme: () => void
  theme: Theme
}

export function useTheme (): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    let newTheme: Theme
    switch (theme) {
    case Theme.DARK:
        newTheme = Theme.GREEN
      break
    case Theme.GREEN:
      newTheme = Theme.DEFAULT
      break
    case Theme.DEFAULT:
      newTheme = Theme.DARK
      break
    default:
      newTheme = Theme.DARK
    }
    setTheme?.(newTheme)
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    document.body.className = newTheme
  }

  return {
    theme: theme ?? Theme.DEFAULT,
    toggleTheme
  }
}
