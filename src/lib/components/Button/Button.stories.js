import React from 'react';
import Button from './Button'

export default {
	title: 'wow-UI/Button',
	component: Button,
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
export const Secondary = Template.bind({})
export const Filled = Template.bind({})

Primary.args = {
	label: 'Primary',
	style: 'primary',
	filled: false
}
Secondary.args = {
	label: 'Secondary',
	style: 'secondary',
	filled: false
}
Filled.args = {
	label: 'Filled',
	style: 'primary',
	filled: true
}