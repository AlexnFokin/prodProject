import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Skeleton.module.scss'
import { CSSProperties, memo } from 'react'

interface SceletonProps {
  className?: string
  width?: string | number
  height?: string | number
  borderRadius?: string
}

export const Skeleton = memo((props: SceletonProps) => {
  const {
    className,
    width,
    height,
    borderRadius
  } = props

  const styles: CSSProperties = {
    width,
    height,
    borderRadius
  }
  return (
    <div
      className={classNames(cls.Skeleton, {}, [className])}
      style={styles}
    >

    </div>
  )
})
