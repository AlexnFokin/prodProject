import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Modal } from 'shared/ui/Modal'

export default {
  title: 'shared/modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus asperiores consectetur cupiditate dolorem ex explicabo facere ipsam magnam quos, vitae.',
  isOpen: true
}
export const Dark = Template.bind({})
Dark.args = {
  children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus asperiores consectetur cupiditate dolorem ex explicabo facere ipsam magnam quos, vitae.',
  isOpen: true
}

Dark.decorators = [ThemeDecorator(Theme.DARK)]
