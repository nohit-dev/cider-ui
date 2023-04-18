import PropTypes from 'prop-types'
import React from 'react'
import { classNames, getGradient } from '../../utils';

const Textarea = ({
	placeholder,
	style,
	type,
}) => {
	return (
		<div
			className={
				classNames(
					"rounded-[1rem]",
					"w-full",
					"p-1",
					getGradient(style)
				)}
		>
			<textarea
				placeholder={placeholder}
				type={type}
				className={
					classNames(
						"w-full",
						"block align-bottom",
						"rounded-[0.8rem]",
						"text-md leading-tight",
						"py-2 px-4",
						"bg-white text-black",
					)}>
			</textarea>
		</div>

	);
};

Textarea.propTypes = {
	placeholder: PropTypes.string.isRequired,
	style: PropTypes.oneOf(["primary", "secondary"]).isRequired,
}

Textarea.defaultProps = {
	placeholder: 'Textarea',
	style: 'primary',
}

export default Textarea
