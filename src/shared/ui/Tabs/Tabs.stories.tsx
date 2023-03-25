import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Tabs } from './Tabs'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'
import { action } from '@storybook/addon-actions'

export default {
  title: 'shared/Tabs',
  component: Tabs,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Tabs>

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />

export const Normal = Template.bind({})

Normal.args = {
  tabs: [
    {
      value: 'tab',
      content: 'tab1'
    },
    {
      value: 'tab2',
      content: 'tab2'
    },
    {
      value: 'tab3',
      content: 'tab3'
    },
    {
      value: 'tab4',
      content: 'tab4'
    }
  ],
  value: 'tab2',
  onTabClick: action('onTabClick')
}
Normal.decorators = [ThemeDecorator(Theme.GREEN)]
