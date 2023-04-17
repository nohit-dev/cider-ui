import React from 'react';
import Tag from './Tag'

export default {
	title: 'wow-UI/Tag',
	component: Tag,
}

const Template = (args) => <Tag {...args} />

export const Primary = Template.bind({})
export const Secondary = Template.bind({})
export const Success = Template.bind({})
export const Warning = Template.bind({})
export const Processing = Template.bind({})
export const Error = Template.bind({})

Primary.args = {
	label: 'Primary',
	style: 'primary',
	filled: true
}
Secondary.args = {
	label: 'Secondary',
	style: 'secondary',
	filled: true
}
Success.args = {
	label: 'Success',
	style: 'success',
	filled: true
}
Warning.args = {
	label: 'Warning',
	style: 'warning',
	filled: true
}
Processing.args = {
	label: 'Processing',
	style: 'processing',
	filled: true
}
Error.args = {
	label: 'Error',
	style: 'error',
	filled: true
}