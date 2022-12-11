import { RouteProps } from 'react-router-dom'
import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { ProfilePage } from 'pages/ProfilePage'
import { ArticlesPage } from 'pages/ArticlesPage'
import { ArticlesDetailPage } from 'pages/ArticlesDetailPage'
import { ArticleEditPage } from 'pages/ArticleEditPage'

export type AppRoutesProps = RouteProps & {
  AuthOnly?: boolean
}

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLES_DETAILS = 'articles_detail',
  ARTICLE_EDIT = 'article_edit',
  ARTICLE_CREATE = 'article_create',
  NOTFOUND = 'notFound'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile/',
  [AppRoutes.ARTICLES]: '/articles',
  [AppRoutes.ARTICLES_DETAILS]: '/articles/', // +id
  [AppRoutes.ARTICLE_CREATE]: '/articles/new',
  [AppRoutes.ARTICLE_EDIT]: '/articles/:id/edit',
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
    path: `${RoutePath.profile}:id`,
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
  [AppRoutes.ARTICLE_EDIT]: {
    path: `${RoutePath.article_edit}`,
    AuthOnly: true,
    element: <ArticleEditPage/>
  },
  [AppRoutes.ARTICLE_CREATE]: {
    path: `${RoutePath.article_create}`,
    AuthOnly: true,
    element: <ArticleEditPage/>
  },
  [AppRoutes.NOTFOUND]: {
    path: RoutePath.notFound,
    element: <NotFoundPage/>
  }
}
