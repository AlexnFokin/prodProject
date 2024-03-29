import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'
import { Button, ButtonSize, ButtonTheme } from './Button'

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Text'
}

export const Clear = Template.bind({})
Clear.args = {
  children: 'Text',
  theme: ButtonTheme.CLEAR
}

export const Outline = Template.bind({})
Outline.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE
}

export const OutlineSizeXL = Template.bind({})
OutlineSizeXL.args = {
  children: 'Text',
  theme: ButtonTheme.BACKGROUND,
  size: ButtonSize.XL
}
export const OutlineSizeL = Template.bind({})
OutlineSizeL.args = {
  children: 'Text',
  theme: ButtonTheme.BACKGROUND,
  size: ButtonSize.L
}

export const OutlineDark = Template.bind({})
OutlineDark.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE
}
export const BackgroundDark = Template.bind({})
BackgroundDark.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE
}
export const Square = Template.bind({})
Square.args = {
  children: '>',
  theme: ButtonTheme.OUTLINE,
  square: true
}
export const SquareSizeM = Template.bind({})
SquareSizeM.args = {
  children: '<',
  theme: ButtonTheme.OUTLINE,
  square: true,
  size: ButtonSize.M
}
export const SquareSizeL = Template.bind({})
SquareSizeL.args = {
  children: '>',
  theme: ButtonTheme.OUTLINE,
  square: true,
  size: ButtonSize.L
}
export const SquareSizeXL = Template.bind({})
SquareSizeXL.args = {
  children: '>',
  theme: ButtonTheme.OUTLINE,
  square: true,
  size: ButtonSize.XL
}
export const DisabledButton = Template.bind({})
DisabledButton.args = {
  children: '>',
  theme: ButtonTheme.OUTLINE,
  disabled: true
}
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]
SquareSizeM.decorators = [ThemeDecorator(Theme.DARK)]
SquareSizeL.decorators = [ThemeDecorator(Theme.DARK)]
SquareSizeXL.decorators = [ThemeDecorator(Theme.DARK)]
Square.decorators = [ThemeDecorator(Theme.DARK)]
