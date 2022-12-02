import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticlesPage.module.scss'
import { memo, useCallback } from 'react'
import { ArticleList, ArticleView, ArticleViewSelector } from 'entities/Article'
import {
  DynamicModuleLoader,
  ReducersList
} from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader'
import {
  articlesPageActions,
  articlesPageReducer,
  getArticles
} from '../../model/slice/articlesPageSlice'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useSelector } from 'react-redux'
import {
  getArticlesPageError,
  getArticlesPageHasMore,
  getArticlesPageIsLoading,
  getArticlesPageNum,
  getArticlesPageView
} from '../../model/selectors/articlesPageSelectors'
import { Page } from 'shared/ui/Page/Page'
import { fetchNextArticlesPage } from '../../model/servicies/fetchNextArticlesPage/fetchNextArticlesPage'
import { initArticlesPage } from '../../model/servicies/initArticlesPage/initArticlesPage'

interface ArticlesPageProps {
  className?: string
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer
}

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props
  const dispatch = useAppDispatch()
  const articles = useSelector(getArticles.selectAll)
  const isLoading = useSelector(getArticlesPageIsLoading)
  const error = useSelector(getArticlesPageError)
  const view = useSelector(getArticlesPageView)
  const page = useSelector(getArticlesPageNum)
  const hasMore = useSelector(getArticlesPageHasMore)

  useInitialEffect(() => {
    void dispatch(initArticlesPage())
  })

  const onLoadNextPart = useCallback(() => {
    void dispatch(fetchNextArticlesPage())
  }, [dispatch])

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlesPageActions.setView(view))
  }, [dispatch])
  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page
        onScrollEnd={onLoadNextPart}
        className={classNames(cls.ArticlesPage, {}, [className])}>
        <ArticleViewSelector view={view} onViewClick={onChangeView}/>
        <ArticleList
          isLoading={isLoading}
          view={view}
          articles={articles}
        />
      </Page>
    </DynamicModuleLoader>
  )
}

export default memo(ArticlesPage)
