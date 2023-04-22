import PropTypes from 'prop-types'
import React from 'react'
import { classNames, getGradient } from '../../utils';

const Alert = ({
	severity,
	title,
	label
}) => {
	return (
		<div className={
			classNames(
				"rounded-full",
				"text-sm",
				"py-2 px-4",
				"text-white",
				"max-w-min whitespace-pre",
				"flex flex-row",
				getGradient(severity)
			)}>
			{title &&
				<div className="font-extrabold">
					{`${title} `}
				</div>
			}
			<div className={
				classNames(
					"font-bold",
				)
			}>
				{label}
			</div>
		</div>

	);
};

Alert.propTypes = {
	title: PropTypes.string,
	label: PropTypes.string,
	severity: PropTypes.oneOf(["success", "warning", "info", "processing", "new", "error"]).isRequired,
}

Alert.defaultProps = {
	severity: 'success',
}

export default Alert
