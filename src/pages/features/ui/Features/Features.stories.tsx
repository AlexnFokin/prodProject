import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Features } from './Features'

export default {
  title: 'pages/Features',
  component: Features,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Features>

const Template: ComponentStory<typeof Features> = (args) => <Features {...args} />

export const Normal = Template.bind({})
Normal.args = {

}
