/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *Estilos predeterminados para ahorrar tiempo:

 http://docs.nativebase.io/Components.html#Components

 * @format
 * @flow

 Dato:
  Ctrl + m para activar el menu en el emulador y activar
  el modo live reload
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Image 
          source={require('./assets/logo.png')}
          style={{width:300, height:90}}
          />
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>Mi primera aplicacion con React Native y Android Studio!</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Platform.select({
      ios: '#F5FCFF',
      android: '#F5FCFF',
    }),
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
});
