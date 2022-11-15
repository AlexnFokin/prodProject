import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticlesDetailPage.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { ArticleDetails } from 'entities/Article'
import { useParams } from 'react-router-dom'

interface ArticlesDetailPageProps {
  className?: string
}

const ArticlesDetailPage = (props: ArticlesDetailPageProps) => {
  const { t } = useTranslation('article')
  const { className } = props
  const { id } = useParams<{ id: string }>()

  if (!id) {
    return <div className={classNames(cls.ArticlesDetailPage, {}, [className])}>
      {t('Статья не найдена')}
    </div>
  }
  return (
    <div className={classNames(cls.ArticlesDetailPage, {}, [className])}>
      <ArticleDetails id={id}/>
    </div>
  )
}

export default memo(ArticlesDetailPage)
