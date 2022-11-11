import React, { memo, Suspense, useMemo } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routerConfig/routerConfig'
import { PageLoader } from 'widgets/PageLoader'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User'

const AppRouter = () => {
  const isAuth = useSelector(getUserAuthData)

  const routes = useMemo(() => {
    return Object.values(routeConfig).filter(route => {
      if (route.AuthOnly && (isAuth == null)) {
        return false
      }
      return true
    })
  }, [isAuth])
  return (
    <Routes>
      {routes.map(({ element, path }) => (
        <Route
          key={path}
          path={path}
          element={(
            <Suspense fallback={<PageLoader/>}>
              <div className="page--wrapper">
                {element}
              </div>
            </Suspense>
          )}
        />
      ))}
    </Routes>
  )
}

export default memo(AppRouter)
