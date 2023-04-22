import PropTypes from 'prop-types'
import React from 'react'
import { classNames, getGradient } from '../../utils';

const Textarea = ({
	style,
	type,
	...args
}) => {
	return (
		<div
			className={
				classNames(
					"rounded-2xl",
					"w-full",
					"p-1",
					getGradient(style)
				)}
		>
			<textarea
				type={type}
				className="w-full align-bottom rounded-xl text-md leading-tight py-2 px-4 bg-white text-black"
				{...args}
			/>
		</div>

	);
};

Textarea.propTypes = {
	style: PropTypes.oneOf(["primary", "secondary"]).isRequired,
}

Textarea.defaultProps = {
	style: 'primary',
}

export default Textarea
