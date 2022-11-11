import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import AvatarImg from './avatar.png'

export default {
  title: 'shared/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  args: {
    to: '/'
  }
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const Standart = Template.bind({})
Standart.args = {
  size: 150,
  src: AvatarImg
}

export const small = Template.bind({})
small.args = {
  size: 50,
  src: AvatarImg
}
