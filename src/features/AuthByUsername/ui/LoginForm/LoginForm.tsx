import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input/Input'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { useCallback } from 'react'
import { LoginActions } from '../../model/slice/LogiSlice'
import { loginByUsername } from '../../model/servicies/LoginByUsername/LoginByUsername'
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState'
import { Text } from 'shared/ui/Text'
import { TextTheme } from 'shared/ui/Text/ui/Text'

interface LoginFormProps {
  className?: string
}

export const LoginForm = (props: LoginFormProps) => {
  const { t } = useTranslation()
  const { className } = props
  const dispatch = useDispatch()
  const {
    username, password, isLoading, error
  } = useSelector(getLoginState)

  const onChangeUsername = useCallback((value: string) => {
    dispatch(LoginActions.setUsername(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(LoginActions.setPassword(value))
  }, [dispatch])

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }))
  }, [dispatch, username, password])

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title={t('Форма авторизации')}/>
      {error && <Text title={t('Вы ввели неверный логин или пароль')} theme={TextTheme.ERROR}/>}
      <Input
        className={cls.input}
        autofocus={true}
        onChange={onChangeUsername}
      />
      <Input
        className={cls.input}
        onChange={onChangePassword}
      />
      <Button
        className = {cls.button}
        theme={ButtonTheme.OUTLINE}
        onClick={onLoginClick}
        disabled={isLoading}
      >
        {t('Войти')}
      </Button>
    </div>
  )
}
