import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Select } from '@/shared/ui/Select/Select'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'

export default {
  title: 'shared/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  args: {
    to: '/'
  }
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const StandartLabel = Template.bind({})
StandartLabel.args = {
  label: 'Custom select',
  options: [
    { value: '125', content: 'sdfsdf' },
    { value: '125', content: 'sdsdfsdfsdfsdfsffsdf' },
    { value: '125', content: 'sdfsdf' },
    { value: '125', content: 'sdfsdf' },
    { value: '125', content: 'sdfsdf' }
  ]
}

StandartLabel.decorators = [ThemeDecorator(Theme.DARK)]
