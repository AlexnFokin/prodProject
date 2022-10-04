import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { Modal } from 'shared/ui/Modal'

interface NavbarProps {
  className?: string
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props
  const [isAuthModal, setIsAuthModal] = useState(false)

  const onToggleModal = useCallback(() => {
    setIsAuthModal(prev => !prev)
  }, [])

  const { t } = useTranslation()
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.OUTLINE}
        size={ButtonSize.M}
        onClick={onToggleModal}
      >
        {t('Войти')}
      </Button>
      <Modal
        isOpen={isAuthModal}
        onClose={onToggleModal}
      ></Modal>
    </div>
  )
}
