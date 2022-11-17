import { classNames } from 'shared/lib/classNames/classNames'
import cls from './CommentList.module.scss'
import { memo } from 'react'
import { Comment } from '../../model/types/comment'
import { CommentCard } from '../CommentCard/CommentCard'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/Text/Text'

interface CommentListProps {
  className?: string
  comments?: Comment[]
  isLoading?: boolean
}

export const CommentList = memo((props: CommentListProps) => {
  const { className, comments, isLoading } = props
  const { t } = useTranslation()
  return (
    <div className={classNames(cls.CommentList, {}, [className])}>
      {comments?.length
        ? comments.map((comment) => (
          <CommentCard
            key={comment.id}
            comment={comment}
            className={cls.comment}
          />
        ))
        : <Text title={t('Комментариев отсутствуют')}/>
      }
    </div>
  )
})
