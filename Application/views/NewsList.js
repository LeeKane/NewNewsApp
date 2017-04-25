import React, { Component } from 'react';
import {
  Image,
  ListView,
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Switch,
  TouchableOpacity
} from 'react-native';
import LoadingView from './Loading.js';
import NewsInfo from './NewsInfo.js';
var REQUEST_URL = 'http://api.dagoogle.cn/news/get-news?tableNum=7&pagesize=20';

export default class NewsList extends Component
{
  state= {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  componentDidMount(){
    this.fetchData();
  }
  fetchData = () => {
    fetch(REQUEST_URL)
   .then((response)=>response.json())
    .then((jsondata) =>{
        console.log(jsondata);
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(jsondata.data),
          loaded: true,
        });
      })
      .catch(function(e) {
       alert(e);
    });
  };
  render()
  {
    if(!this.state.loaded)
    {
      return (<LoadingView/>);
    }
    return(
      <ListView
         dataSource={this.state.dataSource}
         renderRow={this.renderNews}
         style={styles.newsList}
       />
    );
  }
  renderNews= (news) =>{
    return(
      <TouchableOpacity onPress={() => this.handlePress(news)}>
      <View style={styles.newsItem}>
        <Image
          source={{uri: news.top_image}}
          style={styles.newsImage}
        />
        <View style={styles.newsTextContainer}>
          <Text style={styles.newsTitle}>{news.title}</Text>
          <Text style={styles.newsTime}>{news.source}</Text>
        </View>
      </View>
    </TouchableOpacity>
    );
  };
  handlePress= (news) =>{
    this.props.navigator.push({
      component: NewsInfo,
      title:'体育新闻',
      passProps:{news},
    });
  };
};

var styles=StyleSheet.create({
  newsList:{
    paddingTop: 65,
   backgroundColor: '#F5FCFF',
  },
  newsItem:
  {
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ebebeb',
  },
  newsImage:
  {
    width : 90,
    height : 60,
    margin:8,
  },
  newsTextContainer:
  {
    flex:1,
  },
  newsTitle:
  {
    color : '#4f4f4f',
            fontSize : 16,
            textAlign : 'left',
  },
  newsTime:
  {
    color : '#bababa',
      fontSize : 14,
      textAlign : 'left',
  },
});

AppRegistry.registerComponent('NewsList', () => NewsList);
