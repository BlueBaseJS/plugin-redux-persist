import { BootOptions, createPlugin } from '@bluebase/core';
import { autoRehydrate, persistStore } from 'redux-persist';

export default createPlugin({
	key: 'redux-persist-plugin',
	name: 'Redux Persist Plugin',

	defaultConfigs: {
	},
	filters: {
		'bluebase.boot.end': (bootOptions: BootOptions, _ctx: any, BB) => {
			return bootOptions;
		},
		'bluebase.redux.enhancers': (enhancers) => {
			enhancers.push(autoRehydrate());
			return enhancers;
		},
		'bluebase.redux.store': (store) => {
			persistStore(store);
		}
	}
});
