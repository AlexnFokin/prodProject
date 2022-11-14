import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ArticlesDetailPage from './ArticlesDetailPage'

export default {
  title: 'pages/ArticlesDetailPage',
  component: ArticlesDetailPage,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ArticlesDetailPage>

const Template: ComponentStory<typeof ArticlesDetailPage> = (args) =>
  <ArticlesDetailPage {...args} />

export const Normal = Template.bind({})
Normal.args = {}
