import { ArticleDetailsPageRecommendationsSchema } from './articleDetailsPageRecommendationsSchema'
import { ArticleDetailsCommentsSchema } from './ArticleDetailsCommentsSchema'

export interface ArticlesDetailsPageSchema {
  comments: ArticleDetailsCommentsSchema
  recommendations: ArticleDetailsPageRecommendationsSchema
}
