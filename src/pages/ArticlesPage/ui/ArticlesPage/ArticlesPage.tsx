import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticlesPage.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'

interface ArticlesPageProps {
  className?: string
}

const ArticlesPage = (props: ArticlesPageProps) => {
  const { t } = useTranslation()
  const { className } = props
  return (
    <div className={classNames(cls.ArticlesPage, {}, [className])}>

    </div>
  )
}

export default memo(ArticlesPage)
