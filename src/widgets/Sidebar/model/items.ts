import React from 'react'
import { RoutePath } from 'shared/config/routerConfig/routerConfig'
import AboutIcon from 'shared/assets/icons/about.svg'
import HomeIcon from 'shared/assets/icons/home.svg'
import ProfileIcon from 'shared/assets/icons/profile.svg'
import ArticleIcon from 'shared/assets/icons/article.svg'

export interface SidebarItemType {
  path: string
  text: string
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>
  authOnly?: boolean
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    text: 'Главная',
    Icon: HomeIcon
  },
  {
    path: RoutePath.about,
    text: 'О сайте',
    Icon: AboutIcon
  },
  {
    path: RoutePath.profile,
    text: 'Профиль',
    Icon: ProfileIcon,
    authOnly: true
  },
  {
    path: RoutePath.articles,
    text: 'Статьи',
    Icon: ArticleIcon,
    authOnly: true
  }
]
