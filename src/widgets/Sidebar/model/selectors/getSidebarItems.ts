import { createSelector } from '@reduxjs/toolkit'
import { getUserAuthData } from '@/entities/User'
import { RoutePath } from '@/shared/config/routerConfig/routerConfig'
import HomeIcon from '@/shared/assets/icons/home.svg'
import { SidebarItemType } from '../types/sidebar'
import AboutIcon from '@/shared/assets/icons/about.svg'
import ProfileIcon from '@/shared/assets/icons/profile.svg'
import ArticleIcon from '@/shared/assets/icons/article.svg'

export const getSidebarItems = createSelector(
  getUserAuthData,
  (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
      {
        path: RoutePath.main,
        text: 'Главная',
        Icon: HomeIcon
      },
      {
        path: RoutePath.about,
        text: 'О сайте',
        Icon: AboutIcon
      }
    ]
    if (userData != null) {
      sidebarItemsList.push(
        {
          path: RoutePath.profile + userData.id,
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
      )
    }
    return sidebarItemsList
  }
)
