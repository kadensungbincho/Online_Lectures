import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCLQ20Mlfxr7szoPRPrw_0wEXJ7i9yfBiM',
      authDomain: 'authentication-b6dbc.firebaseapp.com',
      databaseURL: 'https://authentication-b6dbc.firebaseio.com',
      projectId: 'authentication-b6dbc',
      storageBucket: 'authentication-b6dbc.appspot.com',
      messagingSenderId: '329635077796'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
};

export default App;
