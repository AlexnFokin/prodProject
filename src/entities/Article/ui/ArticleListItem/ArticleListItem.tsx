import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleListItem.module.scss'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { Article, ArticleBlockType, ArticleTextBlock, ArticleView } from '../../model/types/article'
import { Text } from 'shared/ui/Text/Text'
import { Icon } from 'shared/ui/icon/Icon'
import IconEye from 'shared/assets/icons/eye.svg'
import { Card } from 'shared/ui/Card/Card'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import {
  ArticleTextBlockComponent
} from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import { useNavigate } from 'react-router-dom'
import { RoutePath } from 'shared/config/routerConfig/routerConfig'

interface ArticleListItemProps {
  className?: string
  article: Article
  view: ArticleView

}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const { t } = useTranslation()
  const {
    className,
    article,
    view
  } = props

  const navigae = useNavigate()
  const onOpenArticle = useCallback(() => {
    navigae(RoutePath.articles_detail + article.id)
  }, [article.id, navigae])
  const types = <Text className={cls.types} text={article.type.join(', ')}/>
  const views = <>
    <Text className={cls.views} text={String(article.views)}/>
    <Icon Svg={IconEye}/>
  </>
  if (view === ArticleView.LIST) {
    const textBlock = article.blocks.find(block => block.type === ArticleBlockType.TEXT) as ArticleTextBlock

    return (
      <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
        <Card className={cls.card}>
          <div className={cls.header}>
            <Avatar size={30} src={article.user.avatar}/>
            <Text className={cls.username} text={article.user.username}/>
            <Text className={cls.date} text={article.createdAt}/>
          </div>
          <Text className={cls.title} title={article.title}/>
          {types}
          <img className={cls.img} src={article.img} alt={article.title}/>
          {textBlock && (
            <ArticleTextBlockComponent
              className={cls.textBlock}
              block={textBlock}
            />
          )}
          <div className={cls.footer}>
            <Button onClick={onOpenArticle} theme={ButtonTheme.CLEAR}>
              {t('Читать Далее...')}
            </Button>
            {views}
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div onClick={onOpenArticle} className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
      <Card className={cls.card}>
        <div className={cls.wrapper}>
          <img className={cls.img} src={article.img} alt={article.title}/>
          <Text className={cls.date} text={String(article.createdAt)}/>
        </div>
        <div className={cls.infoWrapper}>
          {types}
          {views}
        </div>
        <Text className={cls.title} text={article.title}/>
      </Card>
    </div>
  )
})
