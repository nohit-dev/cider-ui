import PropTypes from 'prop-types'
import React from 'react'
import { classNames, getGradient } from '../../utils';

const Button = ({
	label,
	filled,
	style,
	size,
	leftIcon,
	rightIcon,
	...args
}) => {

	const borderWidth = {
		small: "p-1",
		medium: "p-1.5",
		large: "p-1.5"
	}

	const paddingSize = {
		small: "py-1.5 px-3 text-xs",
		medium: "py-2 px-5 text-md",
		large: "py-2.5 px-7 text-lg"
	}

	return (
		<button
			className={
				classNames(
					"rounded-full",
					"scale-100 hover:scale-105",
					"transition duration-150",
					!filled && borderWidth[size],
					getGradient(style)
				)}
			{...args}
		>
			<div className={
				classNames(
					"font-bold",
					"w-full",
					"rounded-full",
					"flex items-center",
					paddingSize[size],
					filled ? "bg-transparent text-white fill-white" : "bg-white text-black fill-black",
				)}>
				{!!leftIcon && <span className='h-5 aspect-square mr-3'>{leftIcon}</span>}
				<span>{label}</span>
				{!!rightIcon && <span className='h-5 aspect-square ml-3'>{rightIcon}</span>}
			</div>
		</button>

	);
};

Button.propTypes = {
	label: PropTypes.string.isRequired,
	style: PropTypes.oneOf(["primary", "secondary"]).isRequired,
	size: PropTypes.oneOf(["small", 'medium', "large"]),
	filled: PropTypes.bool,
	leftIcon: PropTypes.element,
	rightIcon: PropTypes.element,
}

Button.defaultProps = {
	label: 'Button',
	style: 'primary',
	size: "medium",
	filled: false,
}

export default Button
