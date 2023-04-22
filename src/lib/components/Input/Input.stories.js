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
	placeholder: 'Primary placeholder',
	style: 'primary',
}
Secondary.args = {
	placeholder: 'Secondary placeholder',
	style: 'secondary',
}
