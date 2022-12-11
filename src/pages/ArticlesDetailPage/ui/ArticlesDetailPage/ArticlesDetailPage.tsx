import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticlesDetailPage.module.scss'
import { useTranslation } from 'react-i18next'
import { ArticleDetails, ArticleList, ArticleView } from 'entities/Article'
import { useParams } from 'react-router-dom'
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text'
import { CommentList } from 'entities/Comment'
import {
  DynamicModuleLoader,
  ReducersList
} from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader'
import { getArticleComments } from '../../model/slice/articleDetailsCommentsSlice'
import { useSelector } from 'react-redux'
import {
  getArticleCommentsError,
  getArticleCommentsIsLoading
} from '../../model/selectors/comments'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import {
  fetchCommentsByArticleId
} from '../../model/servicies/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { memo, useCallback } from 'react'
import AddCommentForm from 'features/AddCommentForm/ui/AddCommentForm/AddCommentForm'
import {
  addCommentsForArticle
} from '../../model/servicies/addCommentsForArticle/addCommentsForArticle'
import { Page } from 'widgets/Page/Page'
import { getArticleRecommendations } from '../../model/slice/articleDetailsPageRecommendationsSlice'
import { getArticleRecommendationsIsLoading } from '../../model/selectors/recommendationsSelector'
import {
  fetchArticleRecommendations
} from '../../model/servicies/fetchArticleRecommendations/fetchArticleRecommendations'
import { articleDetailsPageReducer } from '../../model/slice'
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader'

interface ArticlesDetailPageProps {
  className?: string
}
const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer
}

const ArticlesDetailPage = (props: ArticlesDetailPageProps) => {
  const { t } = useTranslation('article')
  const { className } = props
  const { id } = useParams<{ id: string }>()
  const comments = useSelector(getArticleComments.selectAll)
  const isLoading = useSelector(getArticleCommentsIsLoading)
  const error = useSelector(getArticleCommentsError)
  const dispatch = useAppDispatch()
  const recommendations = useSelector(getArticleRecommendations.selectAll)
  const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading)

  useInitialEffect(() => {
    void dispatch(fetchCommentsByArticleId(id))
    void dispatch(fetchArticleRecommendations())
  })

  const onSendComment = useCallback((text: string) => {
    void dispatch(addCommentsForArticle(text))
  }, [dispatch])

  if (!id) {
    return <Page className={classNames(cls.ArticlesDetailPage, {}, [className])}>
      {t('Статья не найдена')}
    </Page>
  }
  if (error) {
    return (
      <Page className={classNames(cls.ArticlesDetailPage, {}, [className])}>
        <Text title={t('произошла ошибка')} theme={TextTheme.ERROR}/>
      </Page>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
      <Page className={classNames(cls.ArticlesDetailPage, {}, [className])}>
        <ArticleDetailsPageHeader/>
        <ArticleDetails id={id}/>
        <Text
          size={TextSize.L}
          title={t('Рекомендуем')}
          className={cls.commentsTitle}
        />
        <ArticleList
          className={cls.recommendations}
          articles={recommendations}
          isLoading={recommendationsIsLoading}
          view={ArticleView.GRID}
          target="_blank"
        />
        <Text
          size={TextSize.L}
          title={t('Комментарии')}
          className={cls.commentsTitle}
        />
        <AddCommentForm onSendComment={onSendComment}/>
        <CommentList
          isLoading={isLoading}
          comments={comments}/>
      </Page>
    </DynamicModuleLoader>
  )
}

export default memo(ArticlesDetailPage)
