import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/routerConfig/routerConfig'
import AboutIcon from 'shared/assets/icons/about.svg'
import HomeIcon from 'shared/assets/icons/home.svg'

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
      <div className={cls.item__wrapper}>
        <div className={cls.item}>

          <AppLink

            theme={AppLinkTheme.SECONDARY}
            to={RoutePath.main}
          >
            <HomeIcon className={cls.icon}/>
            <span className={cls.link}>{t('Главная')}</span>
          </AppLink>
        </div>
        <div className={cls.item}>

          <AppLink

            theme={AppLinkTheme.SECONDARY}
            /* eslint-disable-next-line i18next/no-literal-string */
            to={RoutePath.about}
          >
            <AboutIcon className={cls.icon}/>
            <span className={cls.link}>{t('О сайте')}</span>
          </AppLink>
        </div>

      </div>
      <div className={cls.switcher}>
        <ThemeSwitcher/>
        <LangSwitcher
          short={collapsed}
        />
        <Button
          data-testid="sidebar-toggle"
          theme={ButtonTheme.CLEAR}
          onClick={ontoggle}
          square
          size={ButtonSize.L}
        >

          {
            collapsed
              ? '>'
              : '<'
          }
        </Button>
      </div>
    </div>
  )
}
