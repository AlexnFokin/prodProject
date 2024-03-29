import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './CommentCard.module.scss'
import { memo } from 'react'
import { Comment } from '../../model/types/comment'
import { Avatar } from '@/shared/ui/Avatar/Avatar'
import { Text } from '@/shared/ui/Text/Text'
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton'
import { AppLink } from '@/shared/ui/AppLink/AppLink'
import { RoutePath } from '@/shared/config/routerConfig/routerConfig'

interface CommentCardProps {
  className?: string
  comment?: Comment
  isLoading?: boolean
}

export const CommentCard = memo((props: CommentCardProps) => {
  const { className, comment, isLoading } = props

  if (isLoading) {
    return (
      <div className={classNames(cls.CommentCard, {}, [className])}>
        <div className={cls.header}>
          <Skeleton borderRadius={'50%'} width={30} height={30}/>
          <Skeleton className={cls.username} height={20} width={100}/>
        </div>
        <Skeleton className={cls.text} width={'100%'} height={50}/>
      </div>
    )
  }
  if (comment == null) {
    return null
  }

  return (
    <div className={classNames(cls.CommentCard, {}, [className, cls.loading])}>
      <AppLink to={`${RoutePath.profile}${comment.user.id}`} className={cls.header}>
        {comment.user.avatar ? <Avatar size={30} src={comment.user.avatar} /> : null }
        <Text className={cls.username} title={comment.user.username}/>
      </AppLink>
      <Text className={cls.text} text={comment.text}/>
    </div>
  )
})
