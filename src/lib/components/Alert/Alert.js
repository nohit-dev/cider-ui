import PropTypes from 'prop-types'
import React from 'react'
import { classNames, getGradient } from '../../utils';

const Alert = ({
	severity,
	title,
	children
}) => {
	console.log(getGradient(severity))
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
			{title ?
				<div className={
					classNames(
						"font-extrabold",
					)
				}>
					{title}&nbsp;
				</div>
				: <></>
			}
			<div className={
				classNames(
					"font-bold",
				)
			}>
				{children}
			</div>
		</div>

	);
};

Alert.propTypes = {
	title: PropTypes.string,
	children: PropTypes.string,
	severity: PropTypes.oneOf(["success", "warning", "info", "processing", "new", "error"]).isRequired,
}

Alert.defaultProps = {
	severity: 'success',
}

export default Alert
