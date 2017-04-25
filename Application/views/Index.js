import React,{Component} from 'react';
import {
  AppRegistry,
  NavigatorIOS,
} from 'react-native';
import TabBarView from './TabBarView.js';
export default class Index extends Component
{
  render()
  {
    return (
      <NavigatorIOS
        ref='nav'
        initialRoute={{
          component: TabBarView,
          title: '体育新闻',
          }}
          style={{flex: 1}}
        />
    );
  }
}

AppRegistry.registerComponent('Index',() => Index);
