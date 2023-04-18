import React from 'react';
import Input from './Input'

export default {
	title: 'cider-ui/Input',
	component: Input,
}

const Template = (args) => <Input {...args} />

export const Primary = Template.bind({})
export const Secondary = Template.bind({})
export const Password = Template.bind({})
export const Email = Template.bind({})
export const Number = Template.bind({})
export const Tel = Template.bind({})

Primary.args = {
	placeholder: 'Primary placeholder',
	style: 'primary',
	type: 'text',
}
Secondary.args = {
	placeholder: 'Secondary placeholder',
	style: 'secondary',
	type: 'text',
}
Password.args = {
	placeholder: 'Password placeholder',
	style: 'secondary',
	type: 'password',
}
Email.args = {
	placeholder: 'contact@cider-ui.com',
	style: 'secondary',
	type: 'email',
}
Number.args = {
	placeholder: 'Number placeholder',
	style: 'secondary',
	type: 'number',
}
Tel.args = {
	placeholder: 'Tel placeholder',
	style: 'secondary',
	type: 'tel',
}