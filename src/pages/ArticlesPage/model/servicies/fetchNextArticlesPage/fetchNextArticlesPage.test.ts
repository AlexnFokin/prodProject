import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { fetchNextArticlesPage } from './fetchNextArticlesPage'
import { ArticleView } from 'entities/Article'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'

jest.mock('../fetchArticlesList/fetchArticlesList')

describe('fetchNextArticlesPage.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      // @ts-expect-error
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
        view: ArticleView.GRID
      }
    })

    await thunk.callThunk()
    expect(thunk.dispatch).toBeCalledTimes(4)
    expect(fetchArticlesList).toHaveBeenCalled()
  })
  test('fetch not called', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      // @ts-expect-error
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: false,
        view: ArticleView.GRID
      }
    })

    await thunk.callThunk()
    expect(thunk.dispatch).toBeCalledTimes(2)
    expect(fetchArticlesList).not.toHaveBeenCalled()
  })
})
