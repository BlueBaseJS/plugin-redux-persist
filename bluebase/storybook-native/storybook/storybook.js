import './rn-addons';

import { addDecorator, configure, getStorybookUI } from '@storybook/react-native';

import BRConfigs from '../bluebase';
import { BlueBaseDecorator } from '@bluebase/storybook-addon';
// Custom
import { loadStories } from './storyLoader';

// BlueBase
addDecorator(BlueBaseDecorator(BRConfigs));

// CenterView
const CenterViewDecorator = (storyFn) => (storyFn());
addDecorator(CenterViewDecorator);

// import stories
configure(() => {
  loadStories();
}, module);

// Refer to https://github.com/storybooks/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({});

export default StorybookUIRoot;