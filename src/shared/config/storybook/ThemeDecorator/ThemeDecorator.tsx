import { Story } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProviders'

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
  <div className={`app ${theme}`}>
    <StoryComponent />
  </div>
)
