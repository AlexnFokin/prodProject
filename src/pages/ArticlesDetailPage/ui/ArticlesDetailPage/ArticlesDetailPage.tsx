import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ArticlesDetailPage.module.scss'
import { useTranslation } from 'react-i18next'
import { ArticleDetails } from '@/entities/Article'
import { useParams } from 'react-router-dom'
import { Text, TextTheme } from '@/shared/ui/Text/Text'
import {
  DynamicModuleLoader,
  ReducersList
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useSelector } from 'react-redux'
import { getArticleCommentsError } from '../../model/selectors/comments'
import { memo } from 'react'
import { Page } from '@/widgets/Page/Page'
import { articleDetailsPageReducer } from '../../model/slice'
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader'
import { ArticleReccomendationsList } from '@/features/articleReccomendationsList'
import {
  ArticleDetailsComments
} from '@/pages/ArticlesDetailPage/ui/ArticlesDetailsComments/ArticleDetailsComments'

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

  const error = useSelector(getArticleCommentsError)

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
        <ArticleReccomendationsList/>
        <ArticleDetailsComments id={id}/>
      </Page>
    </DynamicModuleLoader>
  )
}

export default memo(ArticlesDetailPage)
