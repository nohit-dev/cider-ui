import React from 'react';
import Textarea from './Textarea'

export default {
	title: 'wow-UI/Textarea',
	component: Textarea,
}

const Template = (args) => <Textarea {...args} />

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