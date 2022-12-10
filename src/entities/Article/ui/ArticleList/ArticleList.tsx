import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleList.module.scss'
import { useTranslation } from 'react-i18next'
import { HTMLAttributeAnchorTarget, memo } from 'react'
import { Article, ArticleView } from 'entities/Article'
import { Text } from 'shared/ui/Text/Text'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'

interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view: ArticleView
  target?: HTMLAttributeAnchorTarget
}
const getSkeletons = (view: ArticleView) => {
  return new Array(view === ArticleView.GRID ? 9 : 3)
    .fill(0)
    .map((item, index) => (
      <ArticleListItemSkeleton view={view} key={index}/>
    ))
}

export const ArticleList = memo((props: ArticleListProps) => {
  const { t } = useTranslation()
  const {
    className,
    articles,
    isLoading,
    view,
    target
  } = props

  const renderArticle = (article: Article) => {
    return (
      <ArticleListItem
        className={cls.card}
        article={article}
        view={view}
        key={article.id}
        target={target}
      />
    )
  }
  return (
    <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
      {articles.length > 0
        ? articles.map(renderArticle)
        : (<Text title={t('Статьи отсутствуют')}/>)
      }
      {isLoading && getSkeletons(view)}
    </div>
  )
})
