import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ArticleReccomendationsList } from './ArticleReccomendationsList'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import withMock from 'storybook-addon-mock'
import { Article } from 'entities/Article'

export default {
  title: 'features/ArticleReccomendationsList',
  component: ArticleReccomendationsList,
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  decorators: [withMock]
} as ComponentMeta<typeof ArticleReccomendationsList>

const Template: ComponentStory<typeof ArticleReccomendationsList> = (args) => <ArticleReccomendationsList {...args} />

const article: Article = {
  id: '1',
  img: '',
  createdAt: '',
  views: 256,
  user: {id: '1', username: 'test'},
  blocks: [],
  type: [],
  title: 'hello',
  subtitle: 'subtitle'
}

export const Normal = Template.bind({})
Normal.args = {

}
Normal.decorators = [StoreDecorator({})]
Normal.parameters = {
  mockData: [
    {
      url: __API__ + '/articles?_limit=3',
      method: 'GET',
      status: 200,
      response: [
        { ...article, id: '1'},
        { ...article, id: '6'},
        { ...article, id: '9'},
        { ...article, id: '4'},
      ]
    }
  ]
}
