import { classNames } from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo, useCallback, useMemo } from 'react'
import { Tabs, TabsItem } from '@/shared/ui/Tabs/Tabs'
import { ArticleType } from '@/entities/Article'

interface ArticlesTypeTabsProps {
  className?: string
  value: ArticleType
  onChangeType: (type: ArticleType) => void
}

export const ArticlesTypeTabs = memo((props: ArticlesTypeTabsProps) => {
  const { t } = useTranslation()
  const { className, value, onChangeType } = props
  const typeTabs = useMemo <TabsItem[]>(() => [
    {
      value: ArticleType.ALL,
      content: t('Все')
    },
    {
      value: ArticleType.SCIENCE,
      content: t('Наука')
    },
    {
      value: ArticleType.ECONOMIC,
      content: t('Экономика')
    },
    {
      value: ArticleType.IT,
      content: t('АйТи')
    }
  ], [t])

  const ontabClick = useCallback((tab: TabsItem) => {
    onChangeType(tab.value as ArticleType)
  }, [onChangeType])
  return (
    <Tabs
      className={classNames('', {}, [className])}
      tabs={typeTabs}
      value={value}
      onTabClick={ontabClick}
    />
  )
})
