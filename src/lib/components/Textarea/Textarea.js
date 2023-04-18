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
					"rounded-3xl",
					"h-full",
					"pt-1.5 px-1.5",
					getGradient(style)
				)}
		>
			<textarea
				placeholder={placeholder}
				type={type}
				className={
					classNames(
						"w-full",
						"h-full",
						"rounded-3xl",
						"text-md",
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
