import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { LoginModal } from 'features/AuthByUsername'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, userActions } from 'entities/User'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/routerConfig/routerConfig'

interface NavbarProps {
  className?: string
}

export const Navbar = memo((props: NavbarProps) => {
  const { className } = props
  const [isAuthModal, setIsAuthModal] = useState(false)
  const authData = useSelector(getUserAuthData)
  const dispath = useDispatch()
  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])
  const onShowModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])
  const onLogout = useCallback(() => {
    dispath(userActions.logout())
  }, [dispath])

  const { t } = useTranslation()

  if (authData != null) {
    return (
      <div className={classNames(cls.navbar, {}, [className])}>
        <Text
          className={cls.appName}
          title={t('Alex App')}
          theme={TextTheme.PRIMARY}
        ></Text>
        <AppLink
          className={cls.createBtn}
          to={RoutePath.article_create}
          theme={AppLinkTheme.PRIMARY}
        >
          {t('Создать статью')}
        </AppLink>
        <Button
          theme={ButtonTheme.OUTLINE}
          size={ButtonSize.M}
          onClick={onLogout}
        >
          {t('Выйти')}
        </Button>
      </div>
    )
  }

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.OUTLINE}
        size={ButtonSize.M}
        onClick={onShowModal}
      >
        {t('Войти')}
      </Button>
      {isAuthModal && <LoginModal
        isOpen={isAuthModal}
        onClose={onCloseModal}
      />
      }
    </div>
  )
})
