import { RouteProps } from 'react-router-dom'
import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { ProfilePage } from 'pages/ProfilePage'
import { ArticlesPage } from 'pages/ArticlesPage'
import { ArticlesDetailPage } from 'pages/ArticlesDetailPage'

export type AppRoutesProps = RouteProps & {
  AuthOnly?: boolean
}

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLES_DETAILS = 'articles_detail',
  NOTFOUND = 'notFound'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile',
  [AppRoutes.ARTICLES]: '/articles',
  [AppRoutes.ARTICLES_DETAILS]: '/articles/', // +id
  [AppRoutes.NOTFOUND]: '/*'
}

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage/>
  },
  [AppRoutes.PROFILE]: {
    path: RoutePath.profile,
    AuthOnly: true,
    element: <ProfilePage/>
  },
  [AppRoutes.ARTICLES]: {
    path: RoutePath.articles,
    AuthOnly: true,
    element: <ArticlesPage/>
  },
  [AppRoutes.ARTICLES_DETAILS]: {
    path: `${RoutePath.articles_detail}:id`,
    AuthOnly: true,
    element: <ArticlesDetailPage/>
  },
  [AppRoutes.NOTFOUND]: {
    path: RoutePath.notFound,
    element: <NotFoundPage/>
  }
}
