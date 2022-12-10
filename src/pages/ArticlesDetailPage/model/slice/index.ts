import { combineReducers } from '@reduxjs/toolkit'
import { ArticlesDetailsPageSchema } from '../types'
import { articleDetailsPageRecommendationsReducer } from './articleDetailsPageRecommendationsSlice'
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice'

export const articleDetailsPageReducer = combineReducers<ArticlesDetailsPageSchema>({
  recommendations: articleDetailsPageRecommendationsReducer,
  comments: articleDetailsCommentsReducer
})
