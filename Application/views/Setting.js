import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Switch,
} from 'react-native';
import Button from 'antd-mobile/lib/button'

export default class Setting extends Component{
  state={falseSwitchIsOn1:false,
  falseSwitchIsOn2:false,
falseSwitchIsOn3:false,};
  render()
  {
    return (
      <View style={styles.settingContainer}>
        <View style={styles.settingItemContainer}>
          <Text style={styles.itemText}>Setting1</Text>
          <Switch
                        style={styles.itemSwitch}
                        onValueChange={(value) => this.setState({falseSwitchIsOn1: value})}
                        value={this.state.falseSwitchIsOn1} />
        </View>
        <View style={styles.settingItemContainer}>
          <Text style={styles.itemText}>Setting2</Text>
          <Switch
                        style={styles.itemSwitch}
                        onValueChange={(value) => this.setState({falseSwitchIsOn2: value})}
                        value={this.state.falseSwitchIsOn2} />
        </View>
        <View style={styles.settingItemContainer}>
          <Text style={styles.itemText}>Setting3</Text>
          <Switch
                        style={styles.itemSwitch}
                        onValueChange={(value) => this.setState({falseSwitchIsOn3: value})}
                        value={this.state.falseSwitchIsOn3} />
        </View>
        <Button>Start</Button>
      </View>
    );
  }
}
var styles=StyleSheet.create({
  settingContainer:
  {
    marginTop:20,
     backgroundColor : '#ffffff',
    alignItems:'center',
  },
  settingItemContainer:
  {
    flexDirection: 'row',
  },
  itemText:
  {
        fontSize : 24,
    color : '#bababa',
    flex:2,
  },
  itemSwitch:
  {
    flex:1,
  },

});

AppRegistry.registerComponent('Setting', () => Setting);
