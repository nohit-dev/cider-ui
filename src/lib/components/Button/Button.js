import PropTypes from 'prop-types'
import React from 'react'
import { classNames, getGradient } from '../../utils';

const Button = ({
	label,
	filled,
	style,
	onClick,
}) => {
	console.log(getGradient(style))
	return (
		<button
			onClick={onClick}
			className={
				classNames(
					"rounded-full",
					"hover:scale-105 transition duration-150",
					filled ? "" : "p-1.5",
					getGradient(style)
				)}
		>
			<div className={
				classNames(
					"font-bold",
					"w-full",
					"rounded-full",
					"text-lg",
					"py-2 px-6",
					filled ? "bg-transparent text-white" : "bg-white text-black",
				)}>{label}</div>
		</button>

	);
};

Button.propTypes = {
	label: PropTypes.string.isRequired,
	style: PropTypes.oneOf(["primary", "secondary", "success", "warning", "processing", "error"]).isRequired,
	onClick: PropTypes.func.isRequired,
	filled: PropTypes.bool,
}

Button.defaultProps = {
	label: 'Button',
	style: 'primary',
	filled: false
}

export default Button
