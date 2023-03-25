import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ArticleSortSelector.module.scss'
import { useTranslation } from 'react-i18next'
import { Select, SelectOptions } from '@/shared/ui/Select/Select'
import { useMemo } from 'react'
import { SortOrder } from '@/shared/types'
import { ArticleSortField } from '@/entities/Article'

interface ArticleSortSelectProps {
  className?: string
  sort: ArticleSortField
  order: SortOrder
  onChangeOrder: (newOrder: SortOrder) => void
  onChangeSort: (newOrder: ArticleSortField) => void
}

export const ArticleSortSelector = (props: ArticleSortSelectProps) => {
  const { t } = useTranslation('article')
  const { className, sort, order, onChangeOrder, onChangeSort } = props
  const orderOptions = useMemo<Array<SelectOptions<SortOrder>>>(() => [
    {
      value: 'asc',
      content: t('возрастанию')
    },
    {
      value: 'asc',
      content: t('убыванию')
    }
  ], [t])

  const sortFieldOptions = useMemo<Array<SelectOptions<ArticleSortField>>>(() => [
    {
      value: ArticleSortField.CREATED,
      content: t('дате создания')
    },
    {
      value: ArticleSortField.TITLE,
      content: t('названию')
    },
    {
      value: ArticleSortField.VIEWS,
      content: t('просмотрам')
    }
  ], [t])
  return (
    <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
      <Select
        options={sortFieldOptions}
        label={t('Сортировать по')}
        value={sort}
        onChange={onChangeSort}
      />
      <Select
        className={cls.order}
        options={orderOptions}
        label={t('по')}
        value={order}
        onChange={onChangeOrder}
      />
    </div>
  )
}
