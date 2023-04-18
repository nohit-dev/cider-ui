import PropTypes from 'prop-types'
import React from 'react'
import { classNames, getGradient } from '../../utils';

const Input = ({
	placeholder,
	style,
	type,
}) => {
	return (
		<div
			className={
				classNames(
					"rounded-full",
					"transition duration-150",
					"p-1",
					getGradient(style)
				)}
		>
			<input
				placeholder={placeholder}
				type={type}
				className={
					classNames(
						"w-full",
						"rounded-full",
						"text-lg",
						"py-2 px-6",
						"bg-white text-black",
					)} />
		</div>

	);
};

Input.propTypes = {
	placeholder: PropTypes.string.isRequired,
	style: PropTypes.oneOf(["primary", "secondary"]).isRequired,
	type: PropTypes.oneOf(["text", "password", "email"]).isRequired,
}

Input.defaultProps = {
	placeholder: 'Input',
	style: 'primary',
	type: 'text',
}

export default Input
