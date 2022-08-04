/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
import {name as appName} from './app.json';
import App from './navigation/App';
//import App from './drawer/App';

AppRegistry.registerComponent(appName, () => App);
