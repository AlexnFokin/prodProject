import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ArticleInfinitieList } from './ArticleInfinitieList'

export default {
  title: 'shared/ArticleInfinitieList',
  component: ArticleInfinitieList,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ArticleInfinitieList>

const Template: ComponentStory<typeof ArticleInfinitieList> = (args) =>
  <ArticleInfinitieList {...args} />

export const Normal = Template.bind({})
Normal.args = {}
