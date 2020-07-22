import { createPlugin } from '@bluebase/core';
import  {HelloWorld}  from './components/HelloWorld';
export default createPlugin({
	description: 'HelloWorld',
	key: 'HelloWorld description',
	name: 'HelloWorld',
	version: '1.0.0',
	components:{
		'HomeScreen':HelloWorld
	}
});
