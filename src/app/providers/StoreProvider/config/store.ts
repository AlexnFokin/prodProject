import { configureStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit'
import { StateSchema } from './StateSchema'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { createReducerManager } from './reducerManager'
import { $api } from 'shared/api/api'
import { CombinedState } from 'redux'
import { ScrollPositionReducer } from 'features/ScrollPosition'
import { rtkApi } from 'shared/api/rtkApi'

export function createReduxStore (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    User: userReducer,
    scroll: ScrollPositionReducer,
    [rtkApi.reducerPath]: rtkApi.reducer
  }

  const reducerManager = createReducerManager(rootReducers)
  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api: $api
        }
      }
    }).concat(rtkApi.middleware)
  })
  // @ts-expect-error
  store.reducerManager = reducerManager

  return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
