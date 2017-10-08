import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

export default class Greetings extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name="Julie" />
      </View>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => Greetings);
