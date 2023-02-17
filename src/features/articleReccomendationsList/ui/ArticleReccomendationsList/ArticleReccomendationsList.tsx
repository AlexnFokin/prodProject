import { useTranslation } from 'react-i18next'

import { memo } from 'react'
import { Text, TextSize } from 'shared/ui/Text/Text'
import { ArticleList, ArticleView } from 'entities/Article'
import { VStack } from 'shared/ui/Stack'
import { classNames } from 'shared/lib/classNames/classNames'
import {
  useArticleRecommendationsList
} from '../../api/articleRecommendationsApi'

interface ArticleReccomendationsListProps {
  className?: string
}

export const ArticleReccomendationsList = memo((props: ArticleReccomendationsListProps) => {
  const { className } = props
  const { t } = useTranslation()
  const { isLoading, data: articles, error } = useArticleRecommendationsList(3)

  if (isLoading || (error != null)) {
    return null
  }

  return (
    <VStack gap={'8'} className={classNames('', {}, [className])}>
      <Text
        size={TextSize.L}
        title={t('Рекомендуем')}
      />
      <ArticleList
        articles={articles}
        view={ArticleView.GRID}
        target="_blank"
      />
    </VStack>
  )
})
