import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input/Input'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

interface LoginFormProps {
  className?: string
}

export const LoginForm = (props: LoginFormProps) => {
  const { t } = useTranslation()
  const { className } = props
  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input
        className={cls.input}
        autofocus={true}

      />
      <Input
        className={cls.input}

      />
      <Button
        className = {cls.button}
        theme={ButtonTheme.OUTLINE}
      >
        {t('Войти')}
      </Button>
    </div>
  )
}
