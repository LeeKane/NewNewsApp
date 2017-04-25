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
  TextInput,
    ListView,
  View,
    ScrollView,
    Image,
    TouchableHighlight,
    TouchableOpacity,
    Button,
} from 'react-native';

export default class HelloWorldApp extends Component {
    constructor(props)
    {
        super(props);
        const ds= new ListView.DataSource({rowHasChanged:(r1,r2) => r1!==r2});
        this.state={ dataSource: ds.cloneWithRows([
            'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
        ])};
    }
    _onPressButton() {
        alert("You tapped the button!");
    }

  render() {
      return(
          <View style={{flex: 1, paddingTop: 22}}>
              <ListView
                  dataSource={this.state.dataSource}
                  renderRow={(rowData) => <Text>{rowData}</Text>}
              />
              <View style={styles.testContainer}>
                <TouchableOpacity onPress={this._onPressButton}>
                    <Text>touch me</Text>
                </TouchableOpacity>
                <Button
  onPress={() => alert('press')}
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
                </View>
          </View>

    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    height: 40,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  testContainer:
  {
        flex:1
  },
});

AppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);
