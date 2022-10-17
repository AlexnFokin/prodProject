import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input/Input'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { useCallback } from 'react'
import { LoginActions, LoginReducer } from '../../model/slice/LogiSlice'
import { loginByUsername } from '../../model/servicies/LoginByUsername/LoginByUsername'
import { Text } from 'shared/ui/Text'
import { TextTheme } from 'shared/ui/Text/ui/Text'
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import {
  DynamicModuleLoader,
  ReducersList
} from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader'

export interface LoginFormProps {
  className?: string
}

const initialReducers: ReducersList = {
  loginForm: LoginReducer
}

const LoginForm = (props: LoginFormProps) => {
  const { t } = useTranslation()
  const { className } = props

  const username = useSelector(getLoginUsername)
  const password = useSelector(getLoginPassword)
  const isLoading = useSelector(getLoginIsLoading)
  const error = useSelector(getLoginError)

  const dispatch = useDispatch()

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

    <DynamicModuleLoader
      reducers={initialReducers}
      removeAfterUnmount={true}
    >
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
    </DynamicModuleLoader
    >
  )
}
export default LoginForm
