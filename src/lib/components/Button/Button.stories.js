import React from 'react';
import Button from './Button'

export default {
	title: 'cider-ui/Button',
	component: Button,
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
export const Secondary = Template.bind({})
export const Filled = Template.bind({})

Primary.args = {
	label: 'Primary',
	style: 'primary',
	size: "medium",
	filled: false
}
Secondary.args = {
	label: 'Secondary',
	style: 'secondary',
	size: "medium",
	filled: false
}
Filled.args = {
	label: 'Filled',
	style: 'primary',
	size: "medium",
	filled: true
}