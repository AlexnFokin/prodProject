import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticlesPage.module.scss'
import { memo, useCallback } from 'react'
import {
  DynamicModuleLoader,
  ReducersList
} from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader'
import { articlesPageReducer } from '../../model/slice/articlesPageSlice'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Page } from 'widgets/Page/Page'
import {
  fetchNextArticlesPage
} from '../../model/servicies/fetchNextArticlesPage/fetchNextArticlesPage'
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters'
import {
  ArticleInfinitieList
} from 'pages/ArticlesPage/ui/ArticleInfiniteList/ArticleInfinitieList'

interface ArticlesPageProps {
  className?: string
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer
}

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props
  const dispatch = useAppDispatch()
  const onLoadNextPart = useCallback(() => {
    void dispatch(fetchNextArticlesPage())
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page
        onScrollEnd={onLoadNextPart}
        className={classNames(cls.ArticlesPage, {}, [className])}>
        <ArticlesPageFilters/>
        <ArticleInfinitieList
          className={classNames(cls.list, {}, [className])}
        />
      </Page>
    </DynamicModuleLoader>
  )
}

export default memo(ArticlesPage)
