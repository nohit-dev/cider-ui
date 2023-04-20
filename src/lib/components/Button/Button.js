import PropTypes from 'prop-types'
import React from 'react'
import { classNames, getGradient } from '../../utils';

const Button = ({
	label,
	filled,
	style,
	size,
	onClick,
	leftIcon,
	rightIcon,
	...args
}) => {
	return (
		<button
			onClick={onClick}
			className={
				classNames(
					"rounded-full",
					size === "small" && "scale-75 hover:scale-[.8]",
					size === "medium" && "scale-100 hover:scale-105",
					size === "large" && "scale-[1.2] hover:scale-[1.25]",
					"transition duration-150",
					filled ? "" : "p-1.5",
					getGradient(style)
				)}
				{...args}
		>
			<div className={
				classNames(
					"font-bold",
					"w-full",
					"rounded-full",
					"text-lg",
					"py-2 px-6",
					filled ? "bg-transparent text-white fill-white" : "bg-white text-black fill-black",
					"flex",
					"items-center",
				)}>
				{!!leftIcon &&<span className='h-5 aspect-square mr-3'>{leftIcon}</span>}
				<span>{label}</span>
				{!!rightIcon &&<span className='h-5 aspect-square ml-3'>{rightIcon}</span>}
			</div>
		</button>

	);
};

Button.propTypes = {
	label: PropTypes.string.isRequired,
	style: PropTypes.oneOf(["primary", "secondary"]).isRequired,
	size: PropTypes.oneOf(["small", 'medium', "large"]),
	onClick: PropTypes.func.isRequired,
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
