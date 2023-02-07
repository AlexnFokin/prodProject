import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { Select } from 'shared/ui/Select/Select'
import { Country } from '../model/types/country'
import { ListBox } from 'shared/ui/ListBox/ListBox'

interface CountrySelectProps {
  className?: string
  value?: Country
  onChange?: (value: Country) => void
  readonly?: boolean
}

const options = [
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Kazahstan, content: Country.Kazahstan },
  { value: Country.China, content: Country.China }
]

export const CountrySelect = memo(({
  className, value, onChange, readonly
}: CountrySelectProps) => {
  const { t } = useTranslation()

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Country)
  }, [onChange])

  return (
    <ListBox
      className={classNames('', {}, [className])}
      label={t('Ваша страна')}
      items={options}
      value={value}
      onChange={onChangeHandler}
      readonly={readonly}
      defaultValue={t('Выберете страну')}
      direction={'top'}
    />
  )
})
