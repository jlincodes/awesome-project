import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

export default class Squares extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 75, height: 75, backgroundColor: 'skyblue'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => Squares);
