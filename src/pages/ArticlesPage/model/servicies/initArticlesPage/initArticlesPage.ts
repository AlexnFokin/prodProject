import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { articlesPageActions } from '../../slice/articlesPageSlice'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'
import { getArticlesPageInited } from 'pages/ArticlesPage/model/selectors/articlesPageSelectors'

interface fetchArticleListProps {
  page?: number
}

export const initArticlesPage = createAsyncThunk<
// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
void,
// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
void,
ThunkConfig<string>
>(
  'articlesPage/initArticlesPage',
  async (_, thunkApi) => {
    const { getState, dispatch } = thunkApi
    const inited = getArticlesPageInited(getState())

    if (!inited) {
      dispatch(articlesPageActions.initState())
      void dispatch(fetchArticlesList({
        page: 1
      }))
    }
  }
)
