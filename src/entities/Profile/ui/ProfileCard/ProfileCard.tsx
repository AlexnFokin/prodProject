import { classNames, Mods } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/Text'
import { Input } from 'shared/ui/Input/Input'
import cls from './ProfileCard.module.scss'
import { Profile } from '../../model/types/profile'
import { Loader } from 'shared/ui/Loader/Loader'
import { TextAlign, TextTheme } from 'shared/ui/Text/ui/Text'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Currency } from 'entities/Currency/'
import { CurrencySelect } from 'entities/Currency'
import { Country } from 'entities/Country/'
import { CountrySelect } from 'entities/Country'

interface ProfileCardProps {
  className?: string
  data?: Profile
  isLoading?: boolean
  error?: string
  readonly?: boolean
  onChangeFirstname?: (value?: string) => void
  onChangeLastname?: (value?: string) => void
  onChangeAge?: (value?: string) => void
  onChangeCity?: (value?: string) => void
  onChangeCountry?: (value?: Country) => void
  onChangeUsername?: (value?: string) => void
  onChangeAvatar?: (value?: string) => void
  onChangeCurrency?: (value?: Currency) => void
}

export const ProfileCard = (props: ProfileCardProps) => {
  const { t } = useTranslation('profile')
  const {
    className,
    data,
    error,
    isLoading,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeCountry,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency
  } = props

  if (isLoading) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
        <Loader/>
      </div>
    )
  }

  if (error) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text
          theme={TextTheme.ERROR}
          align={TextAlign.CENTER}
          title={t('Произошла ошибка при загрузке страницы профиля')}
          text={t('Попрбуйте обновить страницу')}
        />
      </div>
    )
  }

  const mods: Mods = {
    [cls.editing]: !readonly
  }

  return (
    <div className={classNames(cls.ProfileCard, mods, [className])}>
      <div className={cls.data}>
        {data?.avatar && <div className={cls.avatarWrapper}>
          <Avatar
            src={data?.avatar}
          />
        </div>
        }
        <Input
          value={data?.first}
          placeholder={t('Ваше имя')}
          className={cls.input}
          onChange={onChangeFirstname}
          readonly={readonly}
        />
        <Input
          value={data?.lastname}
          placeholder={t('Ваша фамилия')}
          className={cls.input}
          onChange={onChangeLastname}
          readonly={readonly}
        />
        <Input
          value={data?.age}
          placeholder={t('Ваш возраст')}
          className={cls.input}
          onChange={onChangeAge}
          readonly={readonly}
        />
        <Input
          value={data?.city}
          placeholder={t('Ваш город')}
          className={cls.input}
          onChange={onChangeCity}
          readonly={readonly}
        />
        <Input
          value={data?.username}
          placeholder={t('Ваш ник')}
          className={cls.input}
          onChange={onChangeUsername}
          readonly={readonly}
        />
        <Input
          value={data?.avatar}
          placeholder={t('Ваш аватар')}
          className={cls.input}
          onChange={onChangeAvatar}
          readonly={readonly}
        />
        <CurrencySelect
          className={cls.input}
          value={data?.currency}
          onChange={onChangeCurrency}
          readonly={readonly}
        />
        <CountrySelect
          className={cls.input}
          value={data?.country}
          onChange={onChangeCountry}
          readonly={readonly}
        />
      </div>
    </div>
  )
}
