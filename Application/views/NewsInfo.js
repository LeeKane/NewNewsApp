import React,{Component} from 'react';
import
{
  AppRegistry,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image
}from 'react-native';

export default class NewsInfo extends Component
{
  render()
  {
    return(
      <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.newsTitle}>{this.props.news.title}</Text>
                </View>

                <View style={styles.container}>
                    <Image source={{uri : this.props.news.text_image0}} style={styles.newsPic} />
                </View>

                <View style={styles.container}>
                    <Text style={styles.newsContent}>{this.props.news.content}</Text>
                </View>
      </ScrollView>
    );
  };
}

var styles=StyleSheet.create({
  container: {
        flex: 1,
        flexDirection : 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    newsTitle : {
       color : '#4f4f4f',
       fontSize : 18,
       textAlign : 'left',
       marginTop : 10,
       marginBottom : 10,
       fontWeight : 'bold'
   },
   newsPic : {
       width : 380,
       height : 180,
       margin: 10,
   },
   newsContent : {
       margin : 10,
       marginTop : 10,
       flex: 1,
       color : '#4f4f4f',
       fontSize : 16,
       textAlign : 'left',
       writingDirection : 'ltr',
       lineHeight : 20
   },
});
AppRegistry.registerComponent('NewsInfo', () => NewsInfo);
