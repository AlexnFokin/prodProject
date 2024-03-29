import { FC, ReactNode, useEffect } from 'react'
import { useStore } from 'react-redux'
import { ReduxStoreWithManager } from '@/app/providers/StoreProvider'
import { StateSchemaKey } from '@/app/providers/StoreProvider/config/StateSchema'
import { Reducer } from '@reduxjs/toolkit'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer
}

interface DynamicModuleLoaderProps {
  reducers: ReducersList
  removeAfterUnmount?: boolean
  children: ReactNode
}

export const DynamicModuleLoader = (props:DynamicModuleLoaderProps) => {
  const {
    children,
    reducers,
    removeAfterUnmount = true
  } = props

  const store = useStore() as ReduxStoreWithManager
  const dispatch = useAppDispatch()
  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]) => {
      store.reducerManager.add(name as StateSchemaKey, reducer)
      dispatch({ type: `@INIT ${name} reducer` })
    })

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]) => {
          store.reducerManager.remove(name as StateSchemaKey)
        })
      }
    }
    // eslint-disable-next-line
  }, [])

  return (
    <>
      {children}
    </>
  )
}
