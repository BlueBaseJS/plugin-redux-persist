// tslint:disable: object-literal-sort-keys
import { VERSION, VERSION_NUMBER } from '../../src/version';

import deepmerge from 'deepmerge';

/**
 * Add any modifications to the platform specific configs here.
 */
export default (input: any) =>
	deepmerge(input, {
		manifest: {
			name: 'boilerplate',
			description: '<%= PROJECT_DESCRIPTION %>',
			slug: 'boilerplate',
			owner: '',
			privacy: 'unlisted',
			version: VERSION,
			android: {
				package: 'com.boilerplate.android',
				versionCode: VERSION_NUMBER,
			},
			ios: {
				buildNumber: VERSION,
				bundleIdentifier: 'com.boilerplate.ios',
				supportsTablet: true,
			},
		},
	});
