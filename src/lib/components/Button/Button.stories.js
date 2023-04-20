import React from 'react';
import Button from './Button'
import { AcademicCapIcon } from "@heroicons/react/24/outline"

export default {
	title: 'cider-ui/Button',
	component: Button,
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
export const Secondary = Template.bind({})
export const Filled = Template.bind({})
export const WithLeftIcon = Template.bind({})
export const WithRightIcon = Template.bind({})

Primary.args = {
	label: 'Primary',
	leftIcon: <AcademicCapIcon />,
	rightIcon: <AcademicCapIcon />,
}
Secondary.args = {
	label: 'Secondary',
	style: 'secondary',
}
Filled.args = {
	label: 'Filled',
	style: 'primary',
	filled: true
}

WithLeftIcon.args = {
	label: "With Left Icon",
	leftIcon: <AcademicCapIcon />,
}

WithRightIcon.args = {
	label: "With Right Icon",
	filled: true,
	rightIcon: <AcademicCapIcon />
}