import PropTypes from 'prop-types'
import React from 'react'
import { classNames, getGradient } from '../../utils';

const Badge = ({
	label,
	style,
}) => {
	return (
		<div
			className={
				classNames(
					"rounded-full",
					"font-extrabold",
					"w-full",
					"rounded-full",
					"whitespace-pre max-w-min",
					"text-xs",
					"py-1 px-2",
					"uppercase",
					"text-white",
					getGradient(style)
				)}
		>
			{label}
		</div>

	);
};

Badge.propTypes = {
	label: PropTypes.string.isRequired,
	style: PropTypes.oneOf(["primary", "secondary", "new", "success", "warning", "processing", "error"]).isRequired,
}

Badge.defaultProps = {
	label: 'Badge',
	style: 'primary',
}

export default Badge