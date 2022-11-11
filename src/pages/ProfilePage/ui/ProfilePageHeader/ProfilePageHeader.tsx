import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ProfilePageHeader.module.scss'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/Text'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useSelector } from 'react-redux'
import { getProfileReadonly, profileActions, updateProfileData } from '../../../../entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useCallback } from 'react'

interface ProfilePageHeaderProps {
  className?: string
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
  const { t } = useTranslation('profile')
  const readonly = useSelector(getProfileReadonly)
  const { className } = props

  const dispatch = useAppDispatch()
  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false))
  }, [dispatch])

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit())
  }, [dispatch])

  const onSave = useCallback(() => {
    void dispatch(updateProfileData())
  }, [dispatch])

  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Text title={t('Профиль')} />
      {readonly
        ? (
          <Button
            className={cls.editBtn}
            theme={ButtonTheme.OUTLINE}
            onClick={onEdit}
          >
            {t('Редактировать')}
          </Button>
        )
        : (
          <div>
            <Button
              className={cls.editBtn}
              theme={ButtonTheme.OUTLINE_RED}
              onClick={onCancelEdit}
            >
              {t('Отменить')}
            </Button>

            <Button
              className={cls.saveBtn}
              theme={ButtonTheme.OUTLINE}
              onClick={onSave}
            >
              {t('Сохранить')}
            </Button>
          </div>
        )}
    </div>
  )
}
