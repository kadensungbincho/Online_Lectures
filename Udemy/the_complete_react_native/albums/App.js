/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  Platform, Text, View,
} from 'react-native';

import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n'
       + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n'
    + 'Shake or press menu button for dev menu',
});

const App = () => (
  <View>
    <Header headerText="Kaden's Albums" />
    <Text>{instructions}</Text>
    <AlbumList />
  </View>
);

export default App;
