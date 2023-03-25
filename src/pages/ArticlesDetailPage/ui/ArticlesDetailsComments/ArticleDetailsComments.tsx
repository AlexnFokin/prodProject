import { classNames } from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo, useCallback, Suspense } from 'react'
import { Text, TextSize } from '@/shared/ui/Text/Text'
import cls from '@/pages/ArticlesDetailPage/ui/ArticlesDetailPage/ArticlesDetailPage.module.scss'
import AddCommentForm from '@/features/AddCommentForm/ui/AddCommentForm/AddCommentForm'
import { CommentList } from '@/entities/Comment'
import { useSelector } from 'react-redux'
import {
  getArticleComments
} from '@/pages/ArticlesDetailPage/model/slice/articleDetailsCommentsSlice'
import { getArticleCommentsIsLoading } from '@/pages/ArticlesDetailPage/model/selectors/comments'
import {
  addCommentsForArticle
} from '@/pages/ArticlesDetailPage/model/servicies/addCommentsForArticle/addCommentsForArticle'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import {
  fetchCommentsByArticleId
} from '../../model/servicies/fetchCommentsByArticleId/fetchCommentsByArticleId'

interface ArticleDetailsCommentsProps {
  className?: string
  id: string
}

export const ArticleDetailsComments = memo((props: ArticleDetailsCommentsProps) => {
  const { t } = useTranslation()
  const { className, id } = props
  const dispatch = useAppDispatch()
  const comments = useSelector(getArticleComments.selectAll)
  const isLoading = useSelector(getArticleCommentsIsLoading)
  const onSendComment = useCallback((text: string) => {
    void dispatch(addCommentsForArticle(text))
  }, [dispatch])

  useInitialEffect(() => {
    void dispatch(fetchCommentsByArticleId(id))
  })
  return (
    <div className={classNames('', {}, [className])}>
      <Text
        size={TextSize.L}
        title={t('Комментарии')}
        className={cls.commentsTitle}
      />
      <Suspense fallback="loading ...">
        <AddCommentForm onSendComment={onSendComment}/>
      </Suspense>
      <CommentList
        isLoading={isLoading}
        comments={comments}/>
    </div>
  )
})
