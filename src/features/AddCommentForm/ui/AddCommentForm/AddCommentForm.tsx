import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AddCommentForm.module.scss'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { Input } from 'shared/ui/Input/Input'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useSelector } from 'react-redux'
import { getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { addCommentFormAction, addCommentFormReducer } from '../../model/slice/addCommentFormSlice'
import {
  DynamicModuleLoader,
  ReducersList
} from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader'

export interface AddCommentFormProps {
  className?: string
  onSendComment: (text: string) => void
}
const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer
}
const AddCommentForm = memo((props: AddCommentFormProps) => {
  const { t } = useTranslation()
  const { className, onSendComment } = props
  const text = useSelector(getAddCommentFormText)
  const dispatch = useAppDispatch()
  const onCommentTextChange = useCallback((value: string) => {
    dispatch(addCommentFormAction.setText(value))
  }, [dispatch])

  const onSendHandler = useCallback(() => {
    onSendComment(text ?? '')
    onCommentTextChange('')
  }, [onCommentTextChange, onSendComment, text])

  return (
    <DynamicModuleLoader reducers={reducers} >
      <div className={classNames(cls.AddCommentForm, {}, [className])}>
        <Input
          className={cls.input}
          placeholder={t('Введите комментарий')}
          value={text}
          onChange={onCommentTextChange}
        />
        <Button
          className={cls.button}
          theme={ButtonTheme.OUTLINE}
          onClick={onSendHandler}
        >
          {t('Отправить')}
        </Button>
      </div>
    </DynamicModuleLoader>
  )
})
export default AddCommentForm
