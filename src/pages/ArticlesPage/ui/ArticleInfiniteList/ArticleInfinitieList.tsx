import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { getArticles } from '@/pages/ArticlesPage/model/slice/articlesPageSlice'
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView
} from '@/pages/ArticlesPage/model/selectors/articlesPageSelectors'
import { useSearchParams } from 'react-router-dom'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import {
  initArticlesPage
} from '@/pages/ArticlesPage/model/servicies/initArticlesPage/initArticlesPage'
import { ArticleList } from '@/entities/Article'
import { Text, TextTheme } from '@/shared/ui/Text/Text'

interface ArticleInfinitieListProps {
  className?: string
}

export const ArticleInfinitieList = memo((props: ArticleInfinitieListProps) => {
  const { t } = useTranslation()
  const { className } = props
  const dispatch = useAppDispatch()
  const articles = useSelector(getArticles.selectAll)
  const isLoading = useSelector(getArticlesPageIsLoading)
  const view = useSelector(getArticlesPageView)
  const error = useSelector(getArticlesPageError)
  const [searchParams] = useSearchParams()

  useInitialEffect(() => {
    void dispatch(initArticlesPage(searchParams))
  })

  if (error) {
    return <Text title={t('Ошибка')} theme={TextTheme.ERROR}></Text>
  }

  return (
    <ArticleList
      isLoading={isLoading}
      view={view}
      articles={articles}
      className={className}
    />
  )
})
