import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { memo, useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { SidebarItemsList } from '../../model/items'
import { SidebarItem } from '../SidebarItem/SidebarItem'

interface SidebarProps {
  className?: string
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)
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
          {SidebarItemsList.map((item) => (
            <SidebarItem
              item={item}
              collapsed={collapsed}
              key={item.path}
            />
          ))}
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
})
