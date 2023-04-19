import PropTypes from 'prop-types'
import React from 'react'
import { classNames, getGradient } from '../../utils';

const Tag = ({
	label,
	style,
}) => {
	console.log(getGradient(style))
	return (
		<div className={
			classNames(
				"font-bold",
				"rounded-full",
				"text-sm",
				"py-2 px-4",
				"text-white",
				"max-w-min",
				getGradient(style)
			)}>{label}</div>

	);
};

Tag.propTypes = {
	label: PropTypes.string.isRequired,
	style: PropTypes.oneOf(["primary", "secondary", "success", "warning", "processing", "error", "new"]).isRequired,
}

Tag.defaultProps = {
	label: 'Button',
	style: 'primary',
}

export default Tag
