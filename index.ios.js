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

import Index from './Application/views/Index.js'

export default class NewNewsApp extends Component {
  render() {
    return (
      <Index />
    );
  }
}

AppRegistry.registerComponent('NewNewsApp', () => NewNewsApp);
