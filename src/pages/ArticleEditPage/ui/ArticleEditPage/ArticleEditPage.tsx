import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { Page } from 'widgets/Page/Page'
import { useParams } from 'react-router-dom'

const ArticleEditPage = memo(() => {
  const { t } = useTranslation('article')

  const { id } = useParams<{ id: string }>()
  const isEdit = Boolean(id)
  return (
    <Page className={classNames('', {}, [])}>
      {isEdit
        ? t('Редактирование статьи с id ') + id
        : t('Создание новой статьи')}
    </Page>
  )
})

export default ArticleEditPage
