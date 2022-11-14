import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticlesDetailPage.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'

interface ArticlesDetailPageProps {
  className?: string
}

const ArticlesDetailPage = (props: ArticlesDetailPageProps) => {
  const { t } = useTranslation('article')
  const { className } = props
  return (
    <div className={classNames(cls.ArticlesDetailPage, {}, [className])}>
      ARTICLE DETAILS PAGE
    </div>
  )
}

export default memo(ArticlesDetailPage)
