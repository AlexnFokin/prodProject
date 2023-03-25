import { createAsyncThunk } from '@reduxjs/toolkit'
import { getUserAuthData } from '@/entities/User'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import { getArticleDetailsData } from '@/entities/Article'
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId'

export const addCommentsForArticle = createAsyncThunk<
Comment,
// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
string,
ThunkConfig<string>
>(
  'articleDetails/addCommentsForArticle',
  async (text, thunkApi) => {
    const {
      extra,
      dispatch,
      rejectWithValue,
      getState
    } = thunkApi

    const userData = getUserAuthData(getState())

    const article = getArticleDetailsData(getState())

    if ((userData == null) || !text || (article == null)) {
      return rejectWithValue('no data')
    }

    try {
      const response = await extra.api.post<Comment>('/comments', {
        articleId: article.id,
        userId: userData.id,
        text
      })

      if (!response.data) {
        throw new Error()
      }
      void dispatch(fetchCommentsByArticleId(article.id))
      return response.data
    } catch (e) {
      return rejectWithValue('error')
    }
  }
)
