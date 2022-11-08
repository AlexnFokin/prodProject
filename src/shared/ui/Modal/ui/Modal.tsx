import { classNames, Mods } from 'shared/lib/classNames/classNames'
import cls from './Modal.module.scss'
import React, { MutableRefObject, ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import { Portal } from 'shared/ui/Portal'
import { useTheme } from 'app/providers/ThemeProvider'
interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
  lazy?: boolean
}
const ANIMATION_DELAY = 300

export const Modal = (props: ModalProps) => {
  const {
    children,
    className,
    isOpen,
    onClose,
    lazy
  } = props

  const [isClosing, setIsClosing] = useState(false)
  const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true)
    }
  }, [isOpen])

  const closeHandler = useCallback(() => {
    if (onClose != null) {
      setIsClosing(true)
      timerRef.current = setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, ANIMATION_DELAY)
    }
  }, [onClose])

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler()
    }
  }, [closeHandler])

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown)
    }
    return () => {
      clearInterval(timerRef.current)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onKeyDown])
  const { theme } = useTheme()

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
    [cls[theme]]: true
  }

  if (lazy && !isMounted) {
    return null
  }

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className])}>
        <div className={cls.overlay} onClick={closeHandler}>
          <div className={cls.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}
