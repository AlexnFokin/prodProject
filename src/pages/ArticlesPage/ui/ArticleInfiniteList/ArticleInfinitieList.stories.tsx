import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ArticleInfinitieList } from './ArticleInfinitieList'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
  title: 'features/ArticleDetails/ArticleInfinitieList',
  component: ArticleInfinitieList,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ArticleInfinitieList>

const Template: ComponentStory<typeof ArticleInfinitieList> = (args) =>
  <ArticleInfinitieList {...args} />

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [StoreDecorator({})]
