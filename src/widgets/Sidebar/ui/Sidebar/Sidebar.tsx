import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { memo, useMemo, useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import { useSelector } from 'react-redux'
import { getSidebarItems } from '../../model/selectors/getSidebarItems'
import { VStack } from 'shared/ui/Stack/VStack/VStack'

interface SidebarProps {
  className?: string
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)
  const sidebarItemList = useSelector(getSidebarItems)
  const ontoggle = () => {
    setCollapsed(prev => !prev)
  }
  const itemsList = useMemo(() => sidebarItemList.map((item) => (
    <SidebarItem
      item={item}
      collapsed={collapsed}
      key={item.path}
    />
  )), [collapsed, sidebarItemList])
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
        <VStack gap='4' className={cls.item}>
          {itemsList}
        </VStack>
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
