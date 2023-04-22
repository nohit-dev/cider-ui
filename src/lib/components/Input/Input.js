import PropTypes from 'prop-types'
import React from 'react'
import { classNames, getGradient } from '../../utils';

const Input = ({
	style,
	...args
}) => {
	return (
		<div
			className={
				classNames(
					"rounded-full",
					"p-1",
					getGradient(style)
				)}
		>
			<input
				className="w-full rounded-full text-lg py-2 px-6 bg-white text-black"
				{...args}
			/>
		</div>

	);
};

Input.propTypes = {
	style: PropTypes.oneOf(["primary", "secondary"]).isRequired,
}

Input.defaultProps = {
	style: 'primary',
}

export default Input
