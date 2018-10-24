/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { SwitchNavigator } from './src/scenes/navigation/navigation';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <SwitchNavigator/>
    );
  }
}


