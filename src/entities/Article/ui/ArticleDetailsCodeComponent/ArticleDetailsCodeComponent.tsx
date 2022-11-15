import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleDetailsCodeComponent.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'

interface ArticleDetailsCodeComponentProps {
  className?: string
}

export const ArticleDetailsCodeComponent = memo((props: ArticleDetailsCodeComponentProps) => {
  const { t } = useTranslation()
  const { className } = props
  return (
    <div className={classNames(cls.ArticleDetailsCodeComponent, {}, [className])}>

    </div>
  )
})
