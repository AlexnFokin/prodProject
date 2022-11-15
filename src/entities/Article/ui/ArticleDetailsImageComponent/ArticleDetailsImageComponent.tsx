import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleDetailsImageComponent.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'

interface ArticleDetailsImageComponentProps {
  className?: string
}

export const ArticleDetailsImageComponent = memo((props: ArticleDetailsImageComponentProps) => {
  const { t } = useTranslation()
  const { className } = props
  return (
    <div className={classNames(cls.ArticleDetailsImageComponent, {}, [className])}>

    </div>
  )
})
