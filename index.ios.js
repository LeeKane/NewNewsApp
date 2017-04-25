/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import TabBarView from './Application/views/TabBarView.js'

export default class NewNewsApp extends Component {
  render() {
    return (
      <TabBarView />
    );
  }
}

AppRegistry.registerComponent('NewNewsApp', () => NewNewsApp);
