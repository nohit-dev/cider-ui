import React from 'react';
import Button from './Button'

export default {
	title: 'wow-UI/Button',
	component: Button,
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
export const Secondary = Template.bind({})
export const Success = Template.bind({})
export const Warning = Template.bind({})
export const Processing = Template.bind({})
export const Error = Template.bind({})

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
Success.args = {
	label: 'Success',
	style: 'success',
	filled: false
}
Warning.args = {
	label: 'Warning',
	style: 'warning',
	filled: false
}
Processing.args = {
	label: 'Processing',
	style: 'processing',
	filled: false
}
Error.args = {
	label: 'Error',
	style: 'error',
	filled: false
}
Filled.args = {
	label: 'Filled',
	style: 'primary',
	filled: true
}