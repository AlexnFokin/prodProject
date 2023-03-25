import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Text, TextSize, TextTheme } from './Text'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'title',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam commodi deserunt dolorem doloremque earum facilis iusto obcaecati odit sint vitae.'
}

export const Error = Template.bind({})
Error.args = {
  theme: TextTheme.ERROR,
  title: 'title',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam commodi deserunt dolorem doloremque earum facilis iusto obcaecati odit sint vitae.'
}
export const ErrorDark = Template.bind({})
ErrorDark.args = {
  theme: TextTheme.ERROR,
  title: 'title',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam commodi deserunt dolorem doloremque earum facilis iusto obcaecati odit sint vitae.'
}
export const Dark = Template.bind({})
Dark.args = {
  title: 'title',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam commodi deserunt dolorem doloremque earum facilis iusto obcaecati odit sint vitae.'
}

export const OnlyTitle = Template.bind({})
OnlyTitle.args = {
  title: 'title'
}

export const OnlyText = Template.bind({})
OnlyText.args = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam commodi deserunt dolorem doloremque earum facilis iusto obcaecati odit sint vitae.'
}

export const OnlyTitleDark = Template.bind({})
OnlyTitleDark.args = {
  title: 'title'

}

export const OnlyTextDark = Template.bind({})
OnlyTextDark.args = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam commodi deserunt dolorem doloremque earum facilis iusto obcaecati odit sint vitae.'
}

export const DarkSizeM = Template.bind({})
DarkSizeM.args = {
  title: 'title',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam commodi deserunt dolorem doloremque earum facilis iusto obcaecati odit sint vitae.',
  size: TextSize.M
}

export const DarkSizeL = Template.bind({})
DarkSizeL.args = {
  title: 'title',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam commodi deserunt dolorem doloremque earum facilis iusto obcaecati odit sint vitae.',
  size: TextSize.L
}

export const DarkSizeS = Template.bind({})
DarkSizeS.args = {
  title: 'title',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam commodi deserunt dolorem doloremque earum facilis iusto obcaecati odit sint vitae.',
  size: TextSize.S
}

Dark.decorators = [ThemeDecorator(Theme.DARK)]
DarkSizeM.decorators = [ThemeDecorator(Theme.DARK)]
DarkSizeL.decorators = [ThemeDecorator(Theme.DARK)]
DarkSizeS.decorators = [ThemeDecorator(Theme.DARK)]
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)]
