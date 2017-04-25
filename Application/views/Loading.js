import React , {Component} from 'react';
import
{
  AppRegistry,
  View,
  Text,
  StyleSheet
}from 'react-native';

export default class LoadingView extends Component
{
  render()
  {
    return (
            <View style={styles.loadingContainer}>
                <Text>
                    Loading...
                </Text>
            </View>
        );
  }
}

var styles=StyleSheet.create({
  loadingContainer:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

AppRegistry.registerComponent('LoadingView' ,() => LoadingView);
