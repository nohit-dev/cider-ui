import React from 'react';
import Tag from './Tag'

export default {
	title: 'cider-ui/Tag',
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
}
Secondary.args = {
	label: 'Secondary',
	style: 'secondary',
}
Success.args = {
	label: 'Success',
	style: 'success',
}
Warning.args = {
	label: 'Warning',
	style: 'warning',
}
Processing.args = {
	label: 'Processing',
	style: 'processing',
}
Error.args = {
	label: 'Error',
	style: 'error',
}