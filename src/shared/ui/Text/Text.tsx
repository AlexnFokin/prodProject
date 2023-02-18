import { classNames, Mods } from 'shared/lib/classNames/classNames'
import cls from './Text.module.scss'
import { memo } from 'react'

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error'
}
type HeaderTagType = 'h1' | 'h2' | 'h3'

export enum TextAlign {
  LEFT = 'left',
  RIGHT = 'right',
  CENTER = 'center'
}
export enum TextSize {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l'
}

const mapSizeToHeaderSize: Record<TextSize, HeaderTagType> = {
  [TextSize.S]: 'h3',
  [TextSize.M]: 'h2',
  [TextSize.L]: 'h1'
}

interface TextProps {
  className?: string
  title?: string
  text?: string
  theme?: TextTheme
  align?: TextAlign
  size?: TextSize

  'data-testid'?: string
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M,
    'data-testid': dataTestID = ''
  } = props

  const HeaderTag = mapSizeToHeaderSize[size]

  const mods: Mods = {
    [cls[theme]]: true,
    [cls[align]]: true,
    [cls[size]]: true
  }
  return (
    <div className={classNames(cls.Text, mods, [className])}>
      {title && (
        <HeaderTag
          className={cls.title}
          data-testid={`${dataTestID}.Header`}
        >
          {title}
        </HeaderTag>
      )}
      {text && (
        <p
          className={cls.text}
          data-testid={`${dataTestID}.Paragraph`}
        >
          {text}
        </p>
      )}
    </div>
  )
})
