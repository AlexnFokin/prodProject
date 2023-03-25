import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ProfileCard } from './ProfileCard'
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import avatar from '@/shared/assets/tests/avatar.png'

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ProfileCard>

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />
const data = {
  currency: Currency.RUB,
  country: Country.Russia,
  first: 'Alex',
  lastname: 'Firsov',
  age: 37,
  city: 'Moscow',
  username: 'GM',
  avatar
}
export const Primary = Template.bind({})
Primary.args = {
  data
}

export const WithError = Template.bind({})
WithError.args = {
  error: 'true'
}

export const isLoading = Template.bind({})
isLoading.args = {
  isLoading: true
}
