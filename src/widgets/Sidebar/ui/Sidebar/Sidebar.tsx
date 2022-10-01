import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)
  const { t } = useTranslation()
  const ontoggle = () => {
    setCollapsed(prev => !prev)
  }
  return (
    <div
      data-testid="sidebar"
      className={
        classNames(
          cls.Sidebar,
          { [cls.collapsed]: collapsed },
          [className])
      }
    >
      <div className={cls.switcher}>
        <ThemeSwitcher/>
        <LangSwitcher/>
        <Button
          data-testid="sidebar-toggle"
          theme={ThemeButton.CLEAR}
          onClick={ontoggle}
        >

          {
            collapsed
              ? t('показать')
              : t('скрыть')
          }
        </Button>
      </div>
    </div>
  )
}
