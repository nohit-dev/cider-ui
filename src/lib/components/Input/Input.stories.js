import React from 'react';
import Input from './Input'

export default {
	title: 'cider-ui/Input',
	component: Input,
}

const Template = (args) => <Input {...args} />

export const Primary = Template.bind({})
export const Secondary = Template.bind({})

Primary.args = {
	style: 'primary',
}
Secondary.args = {
	style: 'secondary',
}
