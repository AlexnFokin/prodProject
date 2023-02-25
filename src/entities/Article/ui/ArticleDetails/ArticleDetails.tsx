import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleDetails.module.scss'
import { useTranslation } from 'react-i18next'
import { memo, useCallback, useEffect } from 'react'
import { DynamicModuleLoader } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { fetchArticleById } from '../../model/servicies/fetchArticleById/fetchArticleById'
import { useSelector } from 'react-redux'
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading
} from '../../model/selectors/articleDetails'
import { Text, TextAlign, TextSize, TextTheme } from 'shared/ui/Text/Text'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import CalendarIcon from 'shared/assets/icons/calendar.svg'
import EyeIcon from 'shared/assets/icons/eye.svg'
import { Icon } from 'shared/ui/icon/Icon'
import { ArticleBlock} from '../../model/types/article'
import {
  ArticleCodeBlockComponent
} from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent'
import {
  ArticleImageBlockComponent
} from '../ArticleImageBlockComponent/ArticleImageBlockComponent'
import {
  ArticleTextBlockComponent
} from 'entities/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent'
import { ArticleBlockType } from 'entities/Article/model/consts/consts'

interface ArticleDetailsProps {
  className?: string
  id: string
}
const reducersList = {
  articleDetails: articleDetailsReducer
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const { t } = useTranslation('article-details')
  const { className, id } = props
  const isLoading = useSelector(getArticleDetailsIsLoading)
  const error = useSelector(getArticleDetailsError)
  const articleData = useSelector(getArticleDetailsData)

  const rendeBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return <ArticleCodeBlockComponent key={block.id} className={cls.block} block={block}/>
      case ArticleBlockType.IMAGE:
        return <ArticleImageBlockComponent key={block.id} className={cls.block} block={block}/>
      case ArticleBlockType.TEXT:
        return <ArticleTextBlockComponent key={block.id} className={cls.block} block={block}/>
      default:
        return null
    }
  }, [])

  const dispatch = useAppDispatch()
  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      void dispatch(fetchArticleById(id))
    }
  }, [dispatch, id])

  let content
  if (isLoading) {
    content = (
      <>
        <Skeleton className={cls.avatar} width={200} height={200} borderRadius={'50%'} />
        <Skeleton className={cls.title} width={'60%'} height={41} />
        <Skeleton className={cls.skeleton} width={'40%'} height={31} />
        <Skeleton className={cls.skeleton} width={'100%'} height={230} />
        <Skeleton className={cls.skeleton} width={'100%'} height={230} />
      </>
    )
  } else if (error) {
    content = (
      <Text
        align={TextAlign.CENTER}
        theme={TextTheme.ERROR}
        title={t('Произошла ошибка при загрузке статьи')}
      />
    )
  } else {
    content = (
      <>
        <div className={cls.avatarWrapper}>
          <Avatar src={articleData?.img} size={200} className={cls.avatar}/>
        </div>
        <Text size={TextSize.L} title={articleData?.title} text={articleData?.subtitle}/>
        <div className={cls.articleInfo}>
          <Icon Svg={EyeIcon} className={cls.icon}/>
          <Text text={String(articleData?.views)}/>
        </div>
        <div className={cls.articleInfo}>
          <Icon Svg={CalendarIcon} className={cls.icon} />
          <Text text={String(articleData?.createdAt)}/>
        </div>
        {articleData?.blocks.map(rendeBlock)}
      </>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducersList} removeAfterUnmount={true}>
      <div className={classNames(cls.ArticleDetails, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  )
})
