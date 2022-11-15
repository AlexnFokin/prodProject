import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleDetailsTextComponent.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'

interface ArticleDetailsTextComponentProps {
  className?: string
}

export const ArticleDetailsTextComponent = memo((props: ArticleDetailsTextComponentProps) => {
  const { t } = useTranslation()
  const { className } = props
  return (
    <div className={classNames(cls.ArticleDetailsTextComponent, {}, [className])}>

    </div>
  )
})
