import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button'
import cls from './ArticleViewSelector.module.scss'
import { Icon } from '@/shared/ui/icon/Icon'
import gridIcon from '@/shared/assets/icons/grid.svg'
import listIcon from '@/shared/assets/icons/list.svg'
import { ArticleView } from '../../model/consts/consts'
interface ArticleViewSelectorProps {
  className?: string
  view: ArticleView
  onViewClick?: (view: ArticleView) => void
}

const viewTypes = [
  {
    view: ArticleView.GRID,
    icon: gridIcon
  },
  {
    view: ArticleView.LIST,
    icon: listIcon
  }
]

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
  const { className, view, onViewClick } = props

  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView)
  }

  return (
    <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
      {viewTypes.map((viewType) => (
        <Button
          className={cls.button}
          key={viewType.view}
          theme={ButtonTheme.CLEAR}
          onClick={onClick(viewType.view)}
        >
          <Icon
            Svg={viewType.icon}
            className={classNames('', { [cls.notSelected]: viewType.view !== view })}
          />
        </Button>
      ))}
    </div>
  )
})
