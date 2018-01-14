/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
  Image,
  AlertIOS,
} from 'react-native';

export default class App extends Component {
  constructor() {
      super()

      var ds = new ListView.DataSource({
          rowHasChanged:(r1, r2) => r1 !== r2
      })

      this.state = {
          dataSource: ds,
          data: [{name:'hello,what are you doing,', text:'123', time:'1小时前', readCount:'124', up:'100', comment:'20'},
          {name:'world', text:'99', time:'9:09', readCount:'14', up:'赞', comment:'评论'},
          {name:'Jane', text:'90', time:'一分钟前', readCount:'1', up:'100', comment:'20'}]
      }
  }

  render() {
    return (
      <View>
        <ListView style={{marginTop:20}}
        dataSource={this.state.dataSource.cloneWithRows(this.state.data)}
       renderRow={(rowData,sectionId,rowId) => this._renderRow(rowData,rowId)}
       showsVerticalScrollIndicator={false} 
       />
      </View>
    );
  }

  _renderRow(rowData,rowId){
      return(
        <TouchableHighlight activeOpacity={0.5} onPress={()=>{console.log('click row')}}>  
          <View style={styles.cellViewStyle}>  
            <Image source={require('./img/tab1_filter_dropdown.png')} style={styles.leftImageStyle}/>  
            <View style={styles.rightViewStyle}>  
              <View style={styles.nickViewStyle}>
                <Text style={styles.nickStyle} numberOfLines={1}>{rowData.name}</Text>
                <Image source={{}} style={styles.levelStyle}/>
              </View>

              <View style={styles.timeViewStyle}>
                <Text style={styles.timeStyle}>{rowData.time}</Text>
                <Text style={styles.readCountStyle}>{rowData.readCount}阅读</Text>
              </View>

              <Text style={styles.textStyle}>{rowData.text}</Text>
              <Image source={{uri:''}} style={styles.picStyle}/>

              <View style={styles.tagViewStyle}>
                <Image source={{uri:''}} style={styles.tagImgStyle}/>
                <Text>hello</Text>
              </View>

              <View style={styles.bottomViewStyle}>
                <View style={styles.iconViewStyle}>
                  <Image source={{uri:''}} style={styles.iconStyle}/>
                  <Text>{rowData.up}</Text>
                </View>
                <View style={styles.iconViewStyle}>
                  <Image source={{uri:''}} style={styles.iconStyle}/>
                  <Text>{rowData.comment}</Text>
                </View>
                <View style={styles.iconViewStyle}>
                  <Image source={{uri:''}} style={styles.iconStyle}/>
                  <Text>转发</Text>
                </View>
              </View>
            </View>  

            <Image source={{}} style={styles.arrowStyle}/>

          </View>  
        </TouchableHighlight>  
      )
  }
}

const styles = StyleSheet.create({  
  cellViewStyle:{  
    padding:10,  
    backgroundColor:'gray',  
    borderBottomWidth:0.1,  
    borderBottomColor:'#DDDDDD',  
    flexDirection:'row',  
  },  
  leftImageStyle:{  
    width:60,  
    height:60,  
    marginRight:10,  
    borderRadius:30,
    backgroundColor:'red'
  },  
  rightViewStyle:{  
    justifyContent:'center', 
    backgroundColor:'white',
    marginRight:10,
    flex:1,
  },  
  nickViewStyle:{
    flexDirection:'row',
    backgroundColor:'red',
    flex:1
  },
  timeViewStyle:{
    flexDirection:'row',
    marginTop:5
  },
  bottomViewStyle:{
    flexDirection:'row',
    marginTop:5
  },
  iconViewStyle:{
    flexDirection:'row',
    marginRight:10
  },
  tagViewStyle:{
    flexDirection:'row',
  },
  nickStyle:{
    fontSize:15,
    marginRight:5
  },
  timeStyle:{
    fontSize:12,
    marginRight:5,
    color:'gray'
  },
  readCountStyle:{
    fontSize:12,
    color:'gray'
  },
  levelStyle:{
    width:40,
    height:20,
    marginLeft:5,
    backgroundColor:'brown'
  },
  arrowStyle:{
    width:20,
    height:20,
    backgroundColor:'green',
  },
  textStyle:{
    marginTop:5,
    backgroundColor:'yellow'
  },
  iconStyle:{
    backgroundColor:'blue',
    width:20,
    height:20,
    marginRight:5
  },
  picStyle: {
    backgroundColor:'red',
    width:100,
    height:100,
    marginTop:10,
  },
  tagImgStyle: {
    backgroundColor:'red',
    width:100,
    height:20,
    marginTop:10
  }
});  
