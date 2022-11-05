import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ProfileCard.module.scss'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData'
import {
  getLoginIsLoading
} from 'features/AuthByUsername/model/selectors/getLoginIsLoading/getLoginIsLoading'
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { Text } from 'shared/ui/Text'

interface profileCardProps {
  className?: string
}

export const ProfileCard = (props: profileCardProps) => {
  const { t } = useTranslation('profile')
  const { className } = props
  const data = useSelector(getProfileData)
  const isLoading = useSelector(getLoginIsLoading)
  const error = useSelector(getProfileError)
  return (
    <div className={classNames(cls.profileCard, {}, [className])}>
      <div className={cls.header}>
        <Text>
          title={t('Профиль')}
        </Text>
        <Button theme={ButtonTheme.OUTLINE}
          className={cls.editBtn}
        >
          {t('Редактировать')}
        </Button>
      </div>
      <div className={cls.data}>
        <Input
          value={data?.first}
          placeholder={t('Ваше имя')}
          className={cls.input}
        />
        <Input
          value={data?.lastname}
          placeholder={t('Ваша Фамилия')}
          className={cls.input}
        />

      </div>
    </div>
  )
}
