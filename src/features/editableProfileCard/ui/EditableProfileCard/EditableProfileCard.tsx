import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './EditableProfileCard.module.scss'
import { memo, useCallback } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import {
  getProfileValidateErrors
} from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors'
import { profileActions, profileReducer } from '../../model/slice/profileSlice'
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData'
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm'
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading'
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError'
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly'
import { ValidateProfileError } from '../../model/types/editableProfileCardSchema'
import { ProfileCard } from 'entities/Profile'
import {
  DynamicModuleLoader,
  ReducersList
} from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader'
import {
  EditableProfileCardHeader
} from 'features/editableProfileCard/ui/EditableProfileCardHeader/EditableProfileCardHeader'
import { VStack } from 'shared/ui/Stack'

interface EditableProfileCardProps {
  className?: string
  id: string
}
const reducers: ReducersList = {
  profile: profileReducer
}
export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
  const { t } = useTranslation('profile')
  const { className, id } = props
  const formData = useSelector(getProfileForm)
  const isLoading = useSelector(getProfileIsLoading)
  const error = useSelector(getProfileError)
  const readonly = useSelector(getProfileReadonly)
  const dispatch = useAppDispatch()
  const validateErrors = useSelector(getProfileValidateErrors)

  const validateErrorsTranslates = {
    [ValidateProfileError.NO_DATA]: t('нет данных'),
    [ValidateProfileError.SERVER_ERROR]: t('Ошибка сервера'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t('Неверный имя или фамилия'),
    [ValidateProfileError.INCORRECT_AGE]: t('некорректно введен возраст'),
    [ValidateProfileError.INCORRECT_COUNTRY]: t('неверно указана страна')
  }

  useInitialEffect(() => {
    if (id) {
      void dispatch(fetchProfileData(id))
    }
  })

  const onChangeFirstname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ first: value ?? '' }))
  }, [dispatch])

  const onChangeLastname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ lastname: value ?? '' }))
  }, [dispatch])

  const onChangeCity = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ city: value ?? '' }))
  }, [dispatch])

  const onChangeUsername = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ username: value ?? '' }))
  }, [dispatch])

  const onChangeAvatar = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ avatar: value ?? '' }))
  }, [dispatch])

  const onChangeAge = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ age: Number(value ?? 0) }))
  }, [dispatch])

  const onChangeCurrency = useCallback((currency?: Currency) => {
    dispatch(profileActions.updateProfile({ currency }))
  }, [dispatch])

  const onChangeCountry = useCallback((country?: Country) => {
    dispatch(profileActions.updateProfile({ country }))
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={reducers}>

      <VStack
        gap={'8'}
        max
        className={classNames(cls.EditableProfileCard, {}, [className])}
      >
        <EditableProfileCardHeader/>
        {validateErrors?.length && validateErrors.map((err) => (
          <Text
            key={err}
            text={validateErrorsTranslates[err]}
            theme={TextTheme.ERROR}
            data-testid={'EditableProfileCard.Error'}
          />
        ))}
        <ProfileCard
          data={formData}
          isLoading={isLoading}
          error={error}
          readonly={readonly}
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
        />
      </VStack>
    </DynamicModuleLoader>
  )
})
