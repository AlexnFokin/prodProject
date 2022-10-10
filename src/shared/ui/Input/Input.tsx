import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss'
import { InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react'

type HtMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HtMLInputProps {
  className?: string
  value?: string
  onChange?: (value: string) => void
  autofocus?: boolean

}

// eslint-disable-next-line react/display-name
export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    autofocus,
    ...otherProps
  } = props

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }
  const ref = useRef<HTMLInputElement>(null)
  const [, setIsFocused] = useState(false)

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true)
      ref.current?.focus()
    }
  }, [autofocus])
  const onBlur = () => {
    setIsFocused(false)
  }

  const onFocus = () => {
    setIsFocused(true)
  }
  return (
    <div>
      <input
        className={classNames(cls.Input, {}, [className])}
        ref={ref}
        value={value}
        type={type}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChangeHandler}
        {...otherProps}
      />
    </div>

  )
}
)
