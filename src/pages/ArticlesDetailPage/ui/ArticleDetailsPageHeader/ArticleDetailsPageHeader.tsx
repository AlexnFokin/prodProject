import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleDetailsPageHeader.module.scss'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useNavigate } from 'react-router-dom'
import { RoutePath } from 'shared/config/routerConfig/routerConfig'
import { useSelector } from 'react-redux'
import { getCanEditArticle } from 'pages/ArticlesDetailPage'
import { getArticleDetailsData } from 'entities/Article'

interface ArticleDetailsPageHeaderProps {
  className?: string
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
  const { t } = useTranslation('article')
  const { className } = props
  const navigate = useNavigate()
  const articleId = useSelector(getArticleDetailsData)?.id
  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles)
  }, [navigate])

  const onEditArticle = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    navigate(`${RoutePath.articles_detail}${articleId}/edit`)
  }, [articleId, navigate])
  const canEdit = useSelector(getCanEditArticle)

  return (
    <div className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}>
      <Button
        onClick={onBackToList}
        theme={ButtonTheme.CLEAR}
      >
        {t('К списку статей')}
      </Button>
      {canEdit && (<Button
        className={cls.editBtn}
        onClick={onEditArticle}
        theme={ButtonTheme.CLEAR}
      >
        {t('Редактировать')}
      </Button>)
      }
    </div>
  )
})
