import { classNames, Mods } from 'shared/lib/classNames/classNames'
import cls from './Select.module.scss'
import { ChangeEvent, memo, useMemo } from 'react'

export interface SelectOptions {
  value: string
  content: string
}

interface SelectProps {
  className?: string
  label?: string
  options?: SelectOptions[]
  value?: string
  onChange?: (value: string) => void
  readonly?: boolean
}

export const Select = memo((props: SelectProps) => {
  const mods: Mods = {}
  const {
    className,
    label,
    options,
    value,
    onChange,
    readonly
  } = props

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange != null) {
      onChange(e.target.value)
    }
  }

  const optionsList = useMemo(() => options?.map((opt) => (
    <option
      className={cls.option}
      value={opt.value}
      key={opt.value}
    >
      {opt.content}
    </option>
  )), [options])

  return (
    <div className={classNames(cls.Wrapper, mods, [className])}>
      { label && <span className={cls.label}>
        {label }
      </span> }
      <select
        disabled={readonly}
        className={cls.select}
        value={value}
        onChange={onChangeHandler}
      >
        {optionsList}
      </select>
    </div>
  )
})
