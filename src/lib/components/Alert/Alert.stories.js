import React from 'react';
import Alert from './Alert'

export default {
	title: 'cider-ui/Alert',
	component: Alert,
}

const Template = (args) => <Alert {...args}></Alert>

export const Success = Template.bind({})
export const Warning = Template.bind({})
export const Info = Template.bind({})
export const New = Template.bind({})
export const Error = Template.bind({})

Success.args = {
	children: 'This is a success alert',
	severity: 'success',
}
Warning.args = {
	children: 'This is a warning alert',
	severity: 'warning',
	title: 'Warning:',
}
Info.args = {
	children: 'This is an info alert',
	severity: 'info',
	title: 'Info:',
}
New.args = {
	children: 'This is a new alert',
	severity: 'new',
	title: 'Breaking news:',
}
Error.args = {
	children: 'This is an error alert',
	severity: 'error',
}