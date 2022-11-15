import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleDetails.module.scss'
import { useTranslation } from 'react-i18next'
import { memo, useEffect } from 'react'
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
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'

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

  const dispatch = useAppDispatch()
  useEffect(() => {
    void dispatch(fetchArticleById(id))
  }, [dispatch, id])

  let content
  if (isLoading) {
    content = (

      <div>
        <Skeleton className={cls.avatar} width={200} height={200} borderRadius={'50%'} />
        <Skeleton className={cls.title} width={'60%'} height={41} />
        <Skeleton className={cls.skeleton} width={'40%'} height={31} />
        <Skeleton className={cls.skeleton} width={'100%'} height={230} />
        <Skeleton className={cls.skeleton} width={'100%'} height={230} />
      </div>
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
      // eslint-disable-next-line i18next/no-literal-string
      <div>Article details</div>
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
