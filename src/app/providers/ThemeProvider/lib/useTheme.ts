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
    if (theme === Theme.DARK) {
      newTheme = Theme.GREEN
    } else if (theme === Theme.GREEN) {
      newTheme = Theme.DEFAULT
    } else if (theme === Theme.DEFAULT) {
      newTheme = Theme.DARK
    } else {
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
