import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { articlesPageActions } from '../../slice/articlesPageSlice'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'
import { getArticlesPageInited } from 'pages/ArticlesPage/model/selectors/articlesPageSelectors'
import { SortOrder } from 'shared/types'
import { ArticleSortField } from 'entities/Article'

export const initArticlesPage = createAsyncThunk<
// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
void,
URLSearchParams,
ThunkConfig<string>
>(
  'articlesPage/initArticlesPage',
  async (searchParams, thunkApi) => {
    const { getState, dispatch } = thunkApi
    const inited = getArticlesPageInited(getState())

    if (!inited) {
      const orderUrl = searchParams.get('order') as SortOrder
      const sortUrl = searchParams.get('sort') as ArticleSortField
      const searchUrl = searchParams.get('search')
      if (orderUrl) {
        dispatch(articlesPageActions.setOrder(orderUrl))
      }
      if (sortUrl) {
        dispatch(articlesPageActions.setSort(sortUrl))
      }
      if (searchUrl) {
        dispatch(articlesPageActions.setSearch(searchUrl))
      }
      dispatch(articlesPageActions.initState())
      void dispatch(fetchArticlesList({ }))
    }
  }
)
