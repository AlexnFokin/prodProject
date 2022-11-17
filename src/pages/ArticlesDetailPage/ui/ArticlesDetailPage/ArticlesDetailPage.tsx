import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticlesDetailPage.module.scss'
import { useTranslation } from 'react-i18next'
import { ArticleDetails } from 'entities/Article'
import { useParams } from 'react-router-dom'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { CommentList } from 'entities/Comment'
import {
  DynamicModuleLoader,
  ReducersList
} from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader'
import {
  articleDetailsCommentsReducer,
  getArticleComments
} from '../../model/slice/articleDetailsCommentsSlice'
import { useSelector } from 'react-redux'
import {
  getArticleCommentsError,
  getArticleCommentsIsLoading
} from '../../model/selectors/comments'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import {
  fetchCommentsByArticleId
} from 'pages/ArticlesDetailPage/model/servicies/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { memo } from 'react'

interface ArticlesDetailPageProps {
  className?: string
}
const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer
}

const ArticlesDetailPage = (props: ArticlesDetailPageProps) => {
  const { t } = useTranslation('article')
  const { className } = props
  const { id } = useParams<{ id: string }>()
  const comments = useSelector(getArticleComments.selectAll)
  const isLoading = useSelector(getArticleCommentsIsLoading)
  const error = useSelector(getArticleCommentsError)
  const dispatch = useAppDispatch()
  useInitialEffect(() => {
    void dispatch(fetchCommentsByArticleId(id))
  })
  if (!id) {
    return <div className={classNames(cls.ArticlesDetailPage, {}, [className])}>
      {t('Статья не найдена')}
    </div>
  }
  if (error) {
    return (
      <div className={classNames(cls.ArticlesDetailPage, {}, [className])}>
        <Text title={t('произошла ошибка')} theme={TextTheme.ERROR}/>
      </div>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
      <div className={classNames(cls.ArticlesDetailPage, {}, [className])}>
        <ArticleDetails id={id}/>
        <Text title={t('Комментарии')} className={cls.commentsTitle} />
        <CommentList
          isLoading={isLoading}
          comments={comments}/>
      </div>
    </DynamicModuleLoader>
  )
}

export default memo(ArticlesDetailPage)
