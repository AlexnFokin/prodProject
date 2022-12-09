import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Tabs.module.scss'
import { memo, ReactNode, useCallback, useMemo } from 'react'
import { Card, CardTheme } from 'shared/ui/Card/Card'
import { ArticleType } from 'entities/Article/model/types/article'

export interface TabsItem {
  value: string
  content: ReactNode
}

interface TabsProps {
  className?: string
  tabs: TabsItem[]
  value: string
  onTabClick: (tab: TabsItem) => void

}

export const Tabs = memo((props: TabsProps) => {
  const { className, tabs, onTabClick, value } = props

  const clickHandler = useCallback((tab: TabsItem) => {
    return () => {
      onTabClick(tab)
    }
  }, [onTabClick])

  return (
    <div className={classNames(cls.Tabs, {}, [className])}>
      {tabs.map(tab => (
        <Card
          theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINE}
          className={cls.tab}
          key={tab.value}
          onClick={clickHandler(tab)}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  )
})
