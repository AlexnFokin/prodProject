import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleList.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { Article, ArticleView } from 'entities/Article'
import { Text } from 'shared/ui/Text/Text'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'

interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view: ArticleView

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
    view
  } = props

  if (isLoading) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        {getSkeletons(view)}
      </div>
    )
  }

  const renderArticle = (article: Article) => {
    return (
      <ArticleListItem
        className={cls.card}
        article={article}
        view={view}
        key={article.id}
      />
    )
  }
  return (
    <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
      {articles.length > 0
        ? articles.map(renderArticle)
        : (<Text title={t('Статьи отсутствуют')}/>)
      }
    </div>
  )
})
