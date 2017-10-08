import React, { Component } from 'react';
import { AppRegistry, Image } from 'react-native';

export default class Pupper extends Component {
  render() {
    let pupper = {
      uri: 'https://i.imgur.com/x9Qznbz.jpg'
    };
    return (
      <Image source={pupper} style={{width: 150, height: 150}}/>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => Pupper);
