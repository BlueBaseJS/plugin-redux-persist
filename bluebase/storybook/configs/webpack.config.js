const withUnimodules = require('@expo/webpack-config/withUnimodules');
const { resolve } = require('path');

module.exports = ({ config }) => {
	return withUnimodules(
		config,
		{
			projectRoot: resolve(__dirname, '../../../'),
		},
		{
			supportsFontLoading: false,
		}
	);
};
