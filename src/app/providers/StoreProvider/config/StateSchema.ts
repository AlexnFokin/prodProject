import { CounterSchema } from 'entities/Counter'
import { UserSchema } from 'entities/User'
import { LoginSchema } from 'features/AuthByUsername'
import { AnyAction, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit'
import { CombinedState } from 'redux'
import { AxiosInstance } from 'axios'
import { ArticleDetailsSchema } from 'entities/Article'
import { ArticlesDetailsPageSchema } from 'pages/ArticlesDetailPage'
import { AddCommentFormSchema } from 'features/AddCommentForm'
import { ArticlesPageSchema } from 'pages/ArticlesPage'
import { ScrollPositionSchema } from 'features/ScrollPosition'
import { rtkApi } from 'shared/api/rtkApi'
import { ProfileSchema } from 'features/editableProfileCard'

export interface StateSchema {
  counter: CounterSchema
  User: UserSchema
  scroll: ScrollPositionSchema
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>
  loginForm?: LoginSchema
  profile?: ProfileSchema
  articleDetails?: ArticleDetailsSchema
  addCommentForm?: AddCommentFormSchema
  articlesPage?: ArticlesPageSchema
  articleDetailsPage?: ArticlesDetailsPageSchema
}

export type StateSchemaKey = keyof StateSchema

export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
  getMountedReducers: () => MountedReducers
}
export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}

export interface ThunkExtraArg {
  api: AxiosInstance
}

export interface ThunkConfig<T> {
  rejectValue: T
  extra: ThunkExtraArg
  state: StateSchema
}
