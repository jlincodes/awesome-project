import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  Button,
  ScrollView
} from 'react-native';

import Pupper from './components/pupper.js';
import Greetings from './components/greetings.js';
import Squares from './components/squares.js';
import FlexBoxes from './components/flexboxes.js';
import FlexDirections from './components/flexdirections.js';

// <Text>Open up App.js to start working on your app!</Text>
// <Text>Changes you make will automatically reload.</Text>
// <Text>Shake your phone to open the developer menu.</Text>

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{flex:1}}>
        <Greetings />
        <Text style={styles.bigblue}>
          I am doggo.
        </Text>
        <Pupper />
        <FlexDirections />
        <Button onPress={() => {Alert.alert('Hello')}}
          title="Press Button"
          color="purple" />
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  }
});
