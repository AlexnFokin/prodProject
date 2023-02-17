import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './Features.module.scss'
import { memo } from 'react'

interface FeaturesProps {
  className?: string
}

export const Features = memo((props: FeaturesProps) => {
  const { className } = props
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.Features, {}, [className])}>

    </div>
  )
})
