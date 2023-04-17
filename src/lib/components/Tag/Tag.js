import PropTypes from 'prop-types'
import React from 'react'

const primary = "bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500";
const secondary = "bg-gradient-to-br from-indigo-300 to-purple-400";
const success = "bg-gradient-to-br from-green-200 via-green-400 to-green-500";
const warning = "bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-500";
const processing = "bg-gradient-to-br from-purple-200 via-purple-400 to-purple-500";
const error = "bg-gradient-to-br from-red-200 via-red-400 to-red-500";

const Tag = ({ label, filled, style }) => {
	switch (style) {
		case 'primary':
			style = primary;
			break;
		case 'secondary':
			style = secondary;
			break;
		case 'success':
			style = success;
			break;
		case 'warning':
			style = warning;
			break;
		case 'processing':
			style = processing;
			break;
		case 'error':
			style = error;
			break;
		default:
			style = primary
			break;
	}

	const OutlineStyle = "p-1.5 w-30 rounded-full whitespace-pre max-w-min ".concat(style);
	const FilledStyle = "w-full max-w-min font-bold rounded-full text-white text-sm py-2 px-6 ".concat(style);

	if (!filled) {
		return (
			<div className={OutlineStyle}>
				<p className='bg-white w-full font-bold rounded-full text-dark text-sm py-2 px-6'>{label}</p>
			</div>
		)
	} else {
		return (
			<div>
				<p className={FilledStyle}>{label}</p>
			</div>
		)
	}
}

Tag.propTypes = {
	label: PropTypes.string.isRequired,
	style: PropTypes.string.isRequired,
	filled: PropTypes.bool
}

Tag.defaultProps = {
	label: 'Button',
	style: 'primary',
	filled: false
}

export default Tag
