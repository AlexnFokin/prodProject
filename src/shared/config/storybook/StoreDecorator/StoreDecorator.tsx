import { Story } from '@storybook/react'
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { loginReducer } from 'features/AuthByUsername/model/slice/LoginSlice'
import { ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader'
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice'
import { addCommentFormReducer } from 'features/AddCommentForm/model/slice/addCommentFormSlice'
import { articleDetailsPageReducer } from 'pages/ArticlesDetailPage/model/slice'
import { profileReducer } from 'features/editableProfileCard/model/slice/profileSlice'

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailsPage: articleDetailsPageReducer
}

export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: ReducersList
) => (StoryComponent: Story) => (
  <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
    <StoryComponent />
  </StoreProvider>
)
